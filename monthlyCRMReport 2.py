# -*- coding: utf-8 -*-
"""
Created on Mon Jul 12 09:28:11 2021

@author: achristley
"""


import sqlalchemy as sa
import pandas as pd
import datetime as dt
import os

pathOutput = os.path.dirname(r"E:\\Users\\jboulton\\Desktop\\")
pathOutput = os.path.dirname(r"E:\\Users\\achristley\\Desktop\\")

###################################################################################################################################################
#REFRESH SPV DATA EXTRACTS AND EXPORT
###################################################################################################################################################

# credentials
USER = "jboulton"
PWD = "ampqw3!1"
SERVER = "z1hc-svsql1.database.windows.net"
DB = "SV_PROD"

connection_string = "mssql+pyodbc://"+USER+":"+PWD+"@"+SERVER+"/"+DB+"?driver=ODBC+Driver+17+for+SQL+Server"
engine = sa.create_engine(connection_string)   

timeStamp = dt.datetime.utcnow()

def define_cnt(num):
    if num == 0:
        return 0
    else:
        return num + 4

loops = 3
increment = 10000000

df = pd.DataFrame()

for i in range(loops):
    cnt = define_cnt(i)
    print(i, ' - ', cnt, ':', (cnt * increment) - 1, ' > ', (cnt + 1) * increment - 1)
    query = """SET NOCOUNT ON

            DECLARE @cnt INT = 0;
            DECLARE @inc INT = 0;
            DECLARE @f_fan INT = 0;
            DECLARE @l_fan INT = 0;
            SET @cnt = ?;
            SET @inc = ?;
            SET @f_fan = @cnt * @inc;
            SET @l_fan = ((@cnt + 1) * @inc) - 1;
                
            DROP TABLE IF EXISTS #IND
            DROP TABLE IF EXISTS #Email
            DROP TABLE IF EXISTS #LSC_FAP
            DROP TABLE IF EXISTS #ESC_ESTC
            DROP TABLE IF EXISTS #CW
            DROP TABLE IF EXISTS #TicketBuyers
            DROP TABLE IF EXISTS #MatchDay
            DROP TABLE IF EXISTS #Superkicks
            DROP TABLE IF EXISTS #Players
            DROP TABLE IF EXISTS #Coaches
            DROP TABLE IF EXISTS #Workforce
            DROP TABLE IF EXISTS #JustPlay
            DROP TABLE IF EXISTS #Wildcats
            DROP TABLE IF EXISTS #FAFives
                
            -- Individuals
            CREATE TABLE #IND (Fancode INT, [Optin] INT)
            INSERT INTO #IND
            SELECT DISTINCT i.Fancode, i.Optin
            FROM SingleViewIndividual i WITH(NOLOCK)
            WHERE i.IsActive = 1
                AND i.DQStatus = 'Active'
                AND i.Fancode BETWEEN @f_fan AND @l_fan
            CREATE NONCLUSTERED INDEX ix_IND ON #IND ([Fancode]);
                	
            -- Email
            CREATE TABLE #Email (Fancode INT, Email VARCHAR(150))
            INSERT INTO #Email 
            SELECT DISTINCT e.Fancode, e.EmailAddress
            FROM SingleViewIndividualEmail e WITH(NOLOCK)
            WHERE e.IsDefault = 1
                AND e.Fancode BETWEEN @f_fan AND @l_fan
            CREATE NONCLUSTERED INDEX ix_Email ON #Email ([Fancode]);
                	
            -- ESC/ESTC
            CREATE TABLE #ESC_ESTC (Fancode INT,[ESC] INT,[ESTC] INT)
            INSERT INTO #ESC_ESTC 
            SELECT Fancode,  [England Supporters Club] AS ESC, [2018/20 England Supporters Travel Club]  AS ESTC
            FROM (SELECT m.Fancode, m.MembershipType, 1 AS 'C'
                FROM SingleViewESCTC m WITH(NOLOCK)
                WHERE m.Fancode BETWEEN @f_fan AND @l_fan) AS SourceTable  
            PIVOT (MAX(C) FOR MembershipType IN ([England Supporters Club], [2018/20 England Supporters Travel Club])) AS PivotTable
            CREATE NONCLUSTERED INDEX ix_ESC_ESTC ON #ESC_ESTC ([Fancode]);
            
            -- LSC/FAP
            CREATE TABLE #LSC_FAP (Fancode INT,[LSC] INT,[FAPlayer] INT)
            INSERT INTO #LSC_FAP 
            SELECT Fancode,  [Lioness Supporters Club] AS LSC, [FA Player]  AS FAPlayer
            FROM (SELECT m.Fancode, m.MembershipType, 1 AS 'C'
                FROM SingleViewMemberships m WITH(NOLOCK)
                WHERE m.Fancode BETWEEN @f_fan AND @l_fan) AS SourceTable  
            PIVOT (MAX(C) FOR MembershipType IN ([Lioness Supporters Club], [FA Player])) AS PivotTable
            CREATE NONCLUSTERED INDEX ix_LSC_FAP ON #LSC_FAP ([Fancode]);
                
            -- Club Wembley
            CREATE TABLE #CW (Fancode INT, CW INT)
            INSERT INTO #CW 
            SELECT DISTINCT c.Fancode, 1 AS CW
            FROM SingleViewCWContacts c WITH(NOLOCK)
            JOIN SingleViewCWLicences l WITH(NOLOCK)
                ON l.ContactID = c.ContactID
            WHERE l.EndDate > GETDATE()
                AND l.LicenceStatus IN ('Agreement Received','Complete','New','Agreement Sent','Active','Successful','Seat Allocation to be done','Waiting List')
                AND c.Fancode BETWEEN @f_fan AND @l_fan
            CREATE NONCLUSTERED INDEX ix_CW ON #CW ([Fancode]);
              
            -- Ticket Buyers
            CREATE TABLE #TicketBuyers (Fancode INT, WembleyTicketBuyers INT)
            INSERT INTO #TicketBuyers 
            SELECT DISTINCT BuyerFancode AS Fancode, 1 AS WembleyTicketBuyers
            FROM SingleViewTicketing t WITH(NOLOCK)
            WHERE TicketStatus = 1
                AND t.BuyerFancode BETWEEN @f_fan AND @l_fan
            CREATE NONCLUSTERED INDEX ix_TicketBuyers ON #TicketBuyers ([Fancode]);
                
            -- MatchDay
            CREATE TABLE #MatchDay (Fancode INT, MatchDay INT)
            INSERT INTO #MatchDay
            SELECT DISTINCT t.FAN AS Fancode, 1 AS MatchDay
            FROM EmarsysMDTeamDetails t WITH(NOLOCK)
            WHERE t.EmailAddress IS NOT NULL
                AND t.FAN BETWEEN @f_fan AND @l_fan
            UNION
            (SELECT DISTINCT c.FAN AS Fancode, 1 AS MatchDay
            FROM EmarsysMDClubDetails c WITH(NOLOCK)
            WHERE c.EmailAddress IS NOT NULL
                AND c.FAN BETWEEN @f_fan AND @l_fan)
            CREATE NONCLUSTERED INDEX ix_MatchDay ON #MatchDay ([Fancode]);
                    
            -- Superkicks
            CREATE TABLE #Superkicks (Fancode INT, Superkicks INT)
            INSERT INTO #Superkicks 
            SELECT DISTINCT i.Fancode, 1 AS Superkicks
            FROM SuperKicksIndividual i WITH(NOLOCK)
            WHERE i.EmailAddress IS NOT NULL
                AND i.Fancode BETWEEN @f_fan AND @l_fan
            CREATE NONCLUSTERED INDEX ix_Superkicks ON #Superkicks ([Fancode]);
                    
            -- Players
            CREATE TABLE #Players (Fancode INT, Players INT)
            INSERT INTO #Players
            SELECT DISTINCT i.Fancode, 1 AS Players
            FROM WGSPlayers i WITH(NOLOCK)
            WHERE i.EmailAddress IS NOT NULL
                AND i.Fancode BETWEEN @f_fan AND @l_fan
            CREATE NONCLUSTERED INDEX ix_Players ON #Players ([Fancode]);
            
            -- Coaches
            CREATE TABLE #Coaches (Fancode INT, Coaches INT)
            INSERT INTO #Coaches
            SELECT DISTINCT i.ManagerFanCode AS Fancode, 1 AS Players
            FROM WGSTeamOfficials i WITH(NOLOCK)
            WHERE i.EmailAddress IS NOT NULL
                AND i.ManagerFanCode BETWEEN @f_fan AND @l_fan
            CREATE NONCLUSTERED INDEX ix_Coaches ON #Coaches ([Fancode]);
            
            -- Workforce
            CREATE TABLE #Workforce (Fancode INT, Workforce INT)
            INSERT INTO #Workforce
            SELECT DISTINCT	i.ClubOfficialFAN AS Fancode, 1 AS Workforce
            FROM WGSClubOfficials i
            	INNER JOIN WGSTeams t on t.WGSClubID = i.WgsClubID
            WHERE i.EmailAddress IS NOT NULL 
            	AND i.ClubOfficialFAN BETWEEN @f_fan AND @l_fan
            UNION
            SELECT DISTINCT	i.LeagueOfficialFAN AS Fancode, 1 AS Workforce
            FROM WGSLeagueOfficials i
            WHERE i.EmailAddress IS NOT NULL 
            	AND i.LeagueOfficialFAN BETWEEN @f_fan AND @l_fan
            CREATE NONCLUSTERED INDEX ix_Workforce ON #Workforce ([Fancode]);
            
            -- JustPlay
            CREATE TABLE #JustPlay (Fancode INT, JustPlay INT)
            INSERT INTO #JustPlay 
            SELECT DISTINCT A.OrganiserFan AS Fancode, 1 AS JustPlay
            FROM EventsApplication A
            	JOIN EventsApplicationVenue V ON V.ApplicationID = A.ApplicationID
            WHERE A.ProgrammeID IN (4,10)
            	AND A.ApplicationStatus = 'APPROVED'
            	AND A.OrganiserFan BETWEEN @f_fan AND @l_fan
            CREATE NONCLUSTERED INDEX ix_JustPlay ON #JustPlay ([Fancode]);
            
            -- Wildcats
            CREATE TABLE #Wildcats (Fancode INT, Wildcats INT)
            INSERT INTO #Wildcats
            SELECT DISTINCT A.OrganiserFan AS Fancode, 1 AS Wildcats
            FROM EventsApplication A
            	INNER JOIN EventsApplicationVenue V ON V.ApplicationID = A.ApplicationID
            WHERE A.ProgrammeID = 5
            	AND A.ApplicationStatus = 'Approved'
            	AND A.ContactEmail IS NOT NULL
            	AND A.OrganiserFan BETWEEN @f_fan AND @l_fan
            UNION
            SELECT DISTINCT P.ParentFancode AS Fancode, 1 AS Wildcats
            FROM EventsParticipants P
            	INNER JOIN EventsSessions S ON S.SessionID = P.SessionID
            	INNER JOIN SingleViewIndividualEmail E ON E.Fancode = P.ParentFancode
            WHERE P.ProgrammeID = 5
            	AND S.SessionStatus = 'Active'
            	AND E.EmailAddress IS NOT NULL
            	AND P.Fancode BETWEEN @f_fan AND @l_fan
            CREATE NONCLUSTERED INDEX ix_Wildcats ON #Wildcats ([Fancode]);
            
            -- FA Fives
            CREATE TABLE #FAFives (Fancode INT, FAFives INT)
            INSERT INTO #FAFives
            SELECT DISTINCT EP.Fancode AS Fancode, 1 AS FAFives
            FROM EventsParticipants EP (NOLOCK)
            	INNER JOIN EventsSessions ES (NOLOCK) ON ES.SessionID = EP.SessionID	
            	INNER JOIN SingleViewIndividualEmail E (NOLOCK)	ON E.Fancode = EP.Fancode
            	INNER JOIN SingleViewIndividual I (NOLOCK) ON I.Fancode = EP.Fancode
            WHERE ES.ProgrammeID = 11
            	AND E.EmailAddress IS NOT NULL
            	AND E.IsDefault = 1
            	AND I.IsActive = 1
            	AND I.DQStatus = 'Active'
            	AND EP.Fancode BETWEEN @f_fan AND @l_fan
            CREATE NONCLUSTERED INDEX ix_FAFives ON #FAFives ([Fancode]);
            
            SELECT I.Fancode, I.Optin, Em.Email, E.ESC, E.ESTC, L.LSC, L.FAPlayer, cw.CW, TB.WembleyTicketBuyers, MD.MatchDay, 
            	S.Superkicks, P.Players, C.Coaches, W.Workforce, JP.JustPlay, Wc.Wildcats, FAF.FAFives
            FROM #IND I
            LEFT JOIN #Email Em
                ON Em.Fancode = I.Fancode
            LEFT JOIN #ESC_ESTC E
                ON E.Fancode = I.Fancode
            LEFT JOIN #LSC_FAP L
                ON L.Fancode = I.Fancode
            LEFT JOIN #CW cw
                ON cw.Fancode = I.Fancode
            LEFT JOIN #TicketBuyers TB
                ON TB.Fancode = I.Fancode
            LEFT JOIN #MatchDay MD
                ON MD.Fancode = I.Fancode
            LEFT JOIN #Superkicks S
                ON S.Fancode = I.Fancode
            LEFT JOIN #Players P
                ON P.Fancode = I.Fancode
            LEFT JOIN #Coaches C
                ON C.Fancode = I.Fancode
            LEFT JOIN #Workforce W
                ON W.Fancode = I.Fancode
            LEFT JOIN #JustPlay JP
                ON JP.Fancode = I.Fancode
            LEFT JOIN #Wildcats Wc
                ON Wc.Fancode = I.Fancode
            LEFT JOIN #FAFives FAF
                ON FAF.Fancode = I.Fancode
            
            DROP TABLE IF EXISTS #IND
            DROP TABLE IF EXISTS #Email
            DROP TABLE IF EXISTS #LSC_FAP
            DROP TABLE IF EXISTS #ESC_ESTC
            DROP TABLE IF EXISTS #CW
            DROP TABLE IF EXISTS #TicketBuyers
            DROP TABLE IF EXISTS #MatchDay
            DROP TABLE IF EXISTS #Superkicks
            DROP TABLE IF EXISTS #Grassroots
            DROP TABLE IF EXISTS #Players
            DROP TABLE IF EXISTS #Coaches
            DROP TABLE IF EXISTS #Workforce
            DROP TABLE IF EXISTS #JustPlay
            DROP TABLE IF EXISTS #Wildcats
            DROP TABLE IF EXISTS #FAFives"""
   
    # read the increment from the db
    try:
        connection = engine.connect()
        # params entered in order of the '?' in the SQL code, DO NOT remove the set nocount line at the top
        df_chunk = pd.read_sql(query, connection, params=[cnt, increment])
        print(df_chunk.shape)
        # append to the dataframe
        df = df.append(df_chunk)
        print(df.shape)
        connection.close()
    except:
        print('no records in this chunk')
    
    
    print(dt.datetime.utcnow() - timeStamp)

    df.to_csv(pathOutput + "\\SPVCounts20221101.csv", index=False)

#del df, df_chunk
  