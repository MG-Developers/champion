#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Mon Aug  9 13:59:46 2021

@author: andychristley
"""

import pandas as pd
import datetime as dt
import numpy as np
import os

#script_dir = os.path.dirname(r"C:\\Users\\jboulton\\The Football Association\\Wembley Divisions Shared Data - _BUSINESS ANALYTICS\\_PROJECTS\\CRM_SPV_Audit\\BUILD\\")
#script_dir = os.path.dirname(r"C:\\Users\\achristley\\The Football Association\\Wembley Divisions Shared Data - _BUSINESS ANALYTICS\\_PROJECTS\\CRM_SPV_Audit\\BUILD\\")
script_dir = os.path.dirname(r"C:\\Users\\fridha\\Desktop\\Andy Processes\\Monthly CRM Process\\Example Data\\")

pathInput = os.path.join(script_dir, "_Inputs")
pathOutput = os.path.join(script_dir, "_Outputs")

###################################################################################################################################################
#LOAD OFFLINE DATA FILES
###################################################################################################################################################

timeStamp = dt.datetime.utcnow()

def strip_and_lower_emails(df):
    df['Email'] = df['Email'].str.strip()
    df['Email'] = df['Email'].str.lower()
    return df

#SPV Individuals
# dfSPV = pd.read_csv(pathInput + "\\SSPVCounts20221101.csv", error_bad_lines=False)
#dfSPV = pd.read_csv("/Users/fridha/Desktop/Andy Processes/Monthly CRM Process/Example DataSPVCounts20210809.csv", low_memory=False, error_bad_lines = False)
dfSPV = pd.read_csv("/Users/fridha/Desktop/Andy Processes/Monthly CRM Process/Example Data/SPVCounts20230301.csv", low_memory=False, error_bad_lines = False)
dfSPV['All'] = 1
dfSPV = strip_and_lower_emails(dfSPV)
sampledfSPV = dfSPV.iloc[:100,]
print(dt.datetime.utcnow() - timeStamp)

# remove fancode
dfSPVByEmail = dfSPV.iloc[:, 1:]
dfSPVByEmail = dfSPVByEmail.groupby('Email', as_index=False).max()
print(dt.datetime.utcnow() - timeStamp)

#Load Emarsys master file
# dfEmarsys = pd.read_csv(pathInput + "\\Emarsys_Universe_20210809.csv", encoding='latin-1', sep=',', low_memory=False, error_bad_lines=False)
#dfEmarsys = pd.read_csv("/Users/andychristley/Downloads/OneDrive_1_09-08-2021/Emarsys_Universe_20210809.csv", low_memory=False, error_bad_lines=False)
dfEmarsys = pd.read_csv("/Users/fridha/Desktop/Andy Processes/Monthly CRM Process/Example Data/Emarsys_616869.csv", low_memory=False, error_bad_lines=False)
dfEmarsys = strip_and_lower_emails(dfEmarsys)
#dfEmarsys = dfEmarsys.loc[:, ['user_id', 'Licensed Coaches Club', 'ESTC membership period', 'LSC member', 'OTT member', 'SIGNUP_OTT', 'SIGNUP_ESC', 'SIGNUP_ESTC', 'SIGNUP_FA_COACHING', 'SIGNUP_THE_EMIRATES_FA_CUP', 'SIGNUP_WOMEN_FOOTBALL', 'JustPlay participant', 'SIGNUP_SUPERKICKS', 'fancode', 'Email',  'Opt-In', 'Email valid']]
dfEmarsys['All'] = 1
print(dt.datetime.utcnow() - timeStamp)




# dfEmarsys1 = pd.read_csv("Emarsys20220201.csv", low_memory=False, error_bad_lines=False) 
a1 = dfEmarsys.head(100)
a2 = dfSPV.head(100)


dfEmarsys_backup = dfEmarsys
a = dfEmarsys_backup.head(100)
#dfEmarsys = dfEmarsys[~dfEmarsys['Email'].isnull()]

#Set all opt in and valid email flags to 1s and 0s
dfEmarsys['Opt-In'] = [1 if optin == True else 0 for optin in dfEmarsys['Opt-In']]
dfEmarsys['Email valid'] = [1 if valid == 'yes' else 0 for valid in dfEmarsys['Email valid']]
dfEmarsys['Opted_in_valid_email'] =  dfEmarsys['Opt-In'] * dfEmarsys['Email valid']
print(dt.datetime.utcnow() - timeStamp)

a = dfEmarsys.head(1000)

dfEmarsys['ESC member'] = [True if signup in ['TRUE', '1', 'Yes'] else False for signup in dfEmarsys['ESC member']]

# create flags for Emarsys data
dfEmarsys['FAPlayer'] = [1 if signup == True else 0 for signup in dfEmarsys['OTT member']]
dfEmarsys['LSC'] = [1 if signup == True else 0 for signup in dfEmarsys['LSC member']]
dfEmarsys['ESC'] = [1 if signup == True else 0 for signup in dfEmarsys['ESC member']]
dfEmarsys['ESTC'] = [1 if signup == True else 0 for signup in dfEmarsys['ESTC member']]
dfEmarsys['WOWF'] = max([1 if signup == "Yes" else 0 for signup in dfEmarsys['SIGNUP_WOMEN_FOOTBALL']], [1 if signup == True else 0 for signup in dfEmarsys['OTT member']])
dfEmarsys['Superkicks'] = [1 if sk == "Yes" else 0 for sk in dfEmarsys['SIGNUP_SUPERKICKS']]
dfEmarsys['Coaches'] = max([1 if signup == True else 0 for signup in dfEmarsys['Licensed Coaches Club']], [1 if signup == "Yes" else 0 for signup in dfEmarsys['SIGNUP_FA_COACHING']])
dfEmarsys['JustPlay'] = [1 if signup == True else 0 for signup in dfEmarsys['JustPlay participant']]
dfEmarsys['FA_Cup'] = [1 if signup == "Yes" else 0 for signup in dfEmarsys['SIGNUP_THE_EMIRATES_FA_CUP']]
dfEmarsys['FA Education Coaches'] = max([1 if signup in ['Level 1', 'Level 2', 'Level 3'] else 0 for signup in dfEmarsys['Football coach level']], [1 if signup == True else 0 for signup in dfEmarsys['Coach certificate level1']])
dfEmarsys['Light Registration'] = [1 if not pd.isnull(signup) else 0 for signup in dfEmarsys['Cheetah Competition']]


b = dfEmarsys.head(5).T

# new flags
dfEmarsys['FAPlayer'] = [1 if signup == True else 0 for signup in dfEmarsys['OTT member']]
dfEmarsys['FA_Cup'] = [1 if signup == "Yes" else 0 for signup in dfEmarsys['SIGNUP_THE_EMIRATES_FA_CUP']]
dfEmarsys['WOWF'] = np.where(dfEmarsys['SIGNUP_WSL'] == "YES", 1, 0) + np.where(dfEmarsys['SIGNUP_WC'] == "YES", 1, 0) + np.where(dfEmarsys['SIGNUP_WFAC'] == "YES", 1, 0) + np.where(dfEmarsys['SIGNUP_WLCUP'] == "YES", 1, 0)
dfEmarsys['WOWF'] = np.where(dfEmarsys['WOWF'] >= 1, 1, 0)                    
dfEmarsys['LSC'] = [1 if signup == True else 0 for signup in dfEmarsys['LSC member']]
dfEmarsys['ESC'] = [1 if signup == True else 0 for signup in dfEmarsys['ESC member']]
dfEmarsys['ESTC'] = [1 if signup == True else 0 for signup in dfEmarsys['ESTC member']]
dfEmarsys['Superkicks'] = [1 if signup == "Yes" else 0 for signup in dfEmarsys['SIGNUP_SUPERKICKS']]
dfEmarsys['Coaches'] = np.where(dfEmarsys['SIGNUP_FALEARNING'] == "Yes", 1, 0) + np.where(dfEmarsys['Original sign up source'] == "FA Playmaker", 1, 0) + np.where(dfEmarsys['Original sign up source'] == "BOOTROOM LMS", 1, 0) + np.where(dfEmarsys['Original sign up source'] == "Bootroom Coaching Community", 1, 0)
dfEmarsys['Coaches'] = np.where(dfEmarsys['Coaches'] >= 1, 1, 0)  
dfEmarsys['JustPlay'] = np.where(dfEmarsys['SIGNUP_JustPlay'] == "YES", 1, 0) + np.where(dfEmarsys['Original sign up source'] == "JUSTPLAY", 1, 0)
dfEmarsys['JustPlay'] = np.where(dfEmarsys['JustPlay'] >= 1, 1, 0)  
dfEmarsys['FA Fives'] = np.where(dfEmarsys['SIGNUP_FAFives'] == "YES", 1, 0) + np.where(dfEmarsys['Original sign up source'] == "FA FIVES", 1, 0)
dfEmarsys['FA Fives'] = np.where(dfEmarsys['FA Fives'] >= 1, 1, 0)  
dfEmarsys['Wildcats'] = np.where(dfEmarsys['SIGNUP_Wildcats'] == "YES", 1, 0) + np.where(dfEmarsys['Original sign up source'] == "WILDCATS", 1, 0)
dfEmarsys['Wildcats'] = np.where(dfEmarsys['Wildcats'] >= 1, 1, 0)
dfEmarsys['Cheetah Light Registration'] = np.where(pd.isnull(dfEmarsys['user_id']), 1, 0) + np.where(pd.isnull(dfEmarsys['Cheetah Competition']), 0, 1)
dfEmarsys['Cheetah Light Registration'] = np.where(dfEmarsys['Cheetah Light Registration'] == 2, 1, 0)
dfEmarsys['All Light Registration'] = np.where(pd.isnull(dfEmarsys['user_id']), 1, 0)
dfEmarsys['Workforce'] = np.where(dfEmarsys['Original sign up source'] == "Club Portal", 1, 0) + np.where(dfEmarsys['Original sign up source'] == "League Portal", 1, 0) + np.where(dfEmarsys['SIGNUP_VOLUNTEERING'] == "YES", 1, 0) + np.where(dfEmarsys['SIGNUP_FALEARNING'] == "Yes", 1, 0) + np.where(dfEmarsys['SIGNUP_REFEREEING'] == "Yes", 1, 0)
dfEmarsys['Workforce'] = np.where(dfEmarsys['Original sign up source'] == "Club Portal", 1, 0) + np.where(dfEmarsys['Original sign up source'] == "League Portal", 1, 0) + np.where(dfEmarsys['SIGNUP_VOLUNTEERING'] == "YES", 1, 0) + np.where(dfEmarsys['SIGNUP_FALEARNING'] == "Yes", 1, 0)
dfEmarsys['Workforce'] = np.where(dfEmarsys['Workforce'] >= 1, 1, 0)
dfEmarsys['Players'] = np.where(dfEmarsys['Original sign up source'] == "Player Self Registration", 1, 0) + np.where(dfEmarsys['Original sign up source'] == "Email Capture Tool", 1, 0)
dfEmarsys['Players'] = np.where(dfEmarsys['Players'] >= 1, 1, 0)
dfEmarsys['England Mens Fans'] = np.where(dfEmarsys['SIGNUP_ENGMENSENIOR'] == "Yes", 1, 0) + np.where(dfEmarsys['SIGNUP_U21'] == "YES", 1, 0) + np.where(dfEmarsys['ESC member'] == True, 1, 0)
dfEmarsys['England Mens Fans'] = np.where(dfEmarsys['England Mens Fans'] >= 1, 1, 0)
dfEmarsys['England Womens Fans'] = np.where(dfEmarsys["SIGNUP_ENGWOMENSENIOR"] == "Yes", 1, 0) + np.where(dfEmarsys["LSC member"] == True, 1, 0)
dfEmarsys['England Womens Fans'] = np.where(dfEmarsys['England Womens Fans'] >= 1, 1, 0)



a = dfEmarsys.head(100)
#dfEmarsys = dfEmarsys[['Email', 'fancode', 'user_id', 'Opt-In', 'Email valid', 'Opted_in_valid_email',
#                       'All', 'FAPlayer', 'LSC', 'ESC', 'ESTC', 'WOWF', 'FA_Cup', 'Superkicks', 'Coaches',
#                       'FA Education Coaches', 'JustPlay', 'Light Registration']]

dfEmarsys = dfEmarsys[['Email', 'fancode', 'user_id', 'Opt-In', 'Email valid', 'Opted_in_valid_email',
                       'All', 'FAPlayer', 'LSC', 'ESC', 'ESTC', 'WOWF', 'FA_Cup', 'Superkicks', 'Coaches',
                       'FA Education Coaches', 'JustPlay', 'Light Registration', 'FA Fives', 'Cheetah Light Registration',
                       'Workforce',  'England Mens Fans', 'England Womens Fans']]



#countESC = dfEmarsys['FAPlayer'].sum()

# dfESC = dfEmarsys.loc[dfEmarsys['ESC'] == 1]
# #dfESC_wEmail = dfESC.dropna(subset=['Email'])
# dfESC_wEmail = dfESC.loc[dfESC['Email'] != 0]

# sample_dfESC = dfESC.iloc[:100,]

# dfEmarsys2 = dfEmarsys.loc[dfEmarsys['Email'] != 0]
# dfEmarsys2 = dfEmarsys2.dropna(subset=['Email'])

a = dfEmarsys.head(10)
a1 = dfSPV.head(10)

print(dt.datetime.utcnow() - timeStamp)

sample_dfEmarsys = dfEmarsys.sample(1000)

# #VALIDATION OF SPV AND EMARSYS
# coaches_dfEmarsys = dfEmarsys.loc[dfEmarsys['Coaches'] == 1, ['Email']]
# coaches_dfEmarsys = coaches_dfEmarsys.drop_duplicates()
# coaches_dfSPV = dfSPV.loc[dfSPV['Coaches'] == 1, ['Email']]
# coaches_dfSPV = coaches_dfSPV.drop_duplicates()
# coachesJOIN = pd.merge(coaches_dfEmarsys,coaches_dfSPV,how='inner',on='Email')

# FAFives_dfEmarsys = dfEmarsys.loc[dfEmarsys['FAFives'] == 1, ['Email']]
# FAFives_dfEmarsys = FAFives_dfEmarsys.drop_duplicates()
# FAFives_dfSPV = dfSPV.loc[dfSPV['FAFives'] == 1]
# FAFives_dfSPV = FAFives_dfSPV.drop_duplicates()
# FAFivesJOIN = pd.merge(FAFives_dfEmarsys,FAFives_dfSPV,how='inner',on='Email')

# find counts of emails which are valid and opted in
def emarsys_counts(df):
    counts = []
    # all users
    counts.append(['All', df['user_id'].count()])
    # find all users with an email
    df = df.dropna(subset=['Email'])
    counts.append(['With Email', df['user_id'].count()])
    # find all users with an email
    df = pd.DataFrame(df.loc[df['Email valid'] == 1, ['Email','Opt-In']])
    df = df.drop_duplicates()
    counts.append(['Valid Emails', df['Email'].nunique()])
    # find all opted-in users
    counts.append(['Opted-In', df.loc[df['Opt-In'] == 1, 'Email'].nunique()])
    # convert list to a data frame with appropriate column names
    counts = pd.DataFrame(counts, columns = ['Type', 'Count'])
    return counts

EmarsysCounts = emarsys_counts(dfEmarsys)



# find counts of emails with poor data quality
def emarsys_poor_dq_counts(df):
    counts = []
    # users with no email
    counts.append(['No Email', df[df.Email.isnull()]['user_id'].nunique()])
    # users with no FAN
    counts.append(['No FAN', df[df.fancode.isnull()]['user_id'].nunique()])
    # find cases where multiple users have the same email
    df_e = df.groupby('Email', as_index=False).agg({'user_id':'count', 'Opt-In':'nunique', 'fancode':'nunique'})
    df_e = df_e.loc[df['user_id'] > 1, :]
    counts.append(['Duplicate Emails', df['Email'].count()])
    # find cases where emails are both opted in and out
    df_e = df_e.loc[df['Opt-In'] > 1, :]
    counts.append(['Opted In & Out', df['Email'].count()])
    # find cases where fancode has multiple user ids
    df_f = df.groupby('fancode', as_index=False).agg({'user_id':'nunique'})
    df_f = df_f.loc[df['user_id'] > 1, :]
    counts.append(['Duplicate FANs', df['fancode'].count()])
    # convert list to a data frame with appropriate column names
    counts = pd.DataFrame(counts, columns = ['Type', 'Count'])
    return counts

EmarsysPoorDQCounts = emarsys_poor_dq_counts(dfEmarsys)
print(dt.datetime.utcnow() - timeStamp)

###CURRENTLY UNAVAILABLE AUDIENCES IN SPV
# {Non Ticket Buyers,Men's FA Cup, Women's FA Cup, Match Day, Wildcats, People's Cup}

#Individuals with Emails
#################################################################################################################

SPVEmarsysUnion = pd.concat([dfEmarsys, dfSPVByEmail], sort=False)
SPVEmarsysUnion.drop(columns=['fancode', 'user_id', 'Opt-In', 'Email valid', 'Opted_in_valid_email'])
print(dt.datetime.utcnow() - timeStamp)

missing_in_emarsys = ['Email', 'CW', 'FAFives', 'MatchDay', 'Players', 'WembleyTicketBuyers', 'Wildcats']
dfEmarsys2 = dfEmarsys.merge(dfSPVByEmail.loc[:,  missing_in_emarsys], on='Email', how='left')
a = dfEmarsys.head(100)

dfEmarsys = dfEmarsys2
dfEmarsys = dfEmarsys.fillna(0)
dfEmarsys.loc[:, 'Data Points'] = dfEmarsys.loc[:, 'FAPlayer':].apply(sum, axis=1)

dfEmarsys.loc[:, 'Other'] = [1 if x == 0 else 0 for x in dfEmarsys.loc[:, 'Data Points']]
print(dt.datetime.utcnow() - timeStamp)

dfSPVByEmail = dfSPVByEmail.fillna(0)
dfSPVByEmail.loc[:, 'Data Points'] = dfSPVByEmail.loc[:, 'ESC':].apply(sum, axis=1) - 1
dfSPVByEmail.loc[:, 'Other'] = [1 if x == 0 else 0 for x in dfSPVByEmail.loc[:, 'Data Points']]
print(dt.datetime.utcnow() - timeStamp)

a1 = dfSPVByEmail.head(100)


#Remove records where email is null
dfEmarsys_ValidEmails = dfEmarsys.dropna(subset=['Email'])
dfEmarsys_ValidEmails = dfEmarsys_ValidEmails[dfEmarsys_ValidEmails['Email'] != 0]
#Create data frame of valid emails and create counts of total individual records and unique emails
dfEmarsys_ValidEmails = dfEmarsys_ValidEmails.loc[dfEmarsys_ValidEmails['Email valid'] == 1, :]
print(dt.datetime.utcnow() - timeStamp)

a1v = dfEmarsys_ValidEmails.head(100)

#Create data frame of just valid emails and remove duplicates
dfEmarsys_ValidEmail = dfEmarsys.loc[dfEmarsys['Email valid'] == 1, 'Email'].drop_duplicates()
print(dt.datetime.utcnow() - timeStamp)

dfSPV_IndividualsByValidEmail_Joined = dfSPVByEmail[dfSPVByEmail.Email.isin(dfEmarsys_ValidEmails.Email)]
print(dt.datetime.utcnow() - timeStamp)

##Filter Emarsys Email data frame by only Opeted in and valid emails
dfEmarsys_ValidOptIns = dfEmarsys.loc[dfEmarsys['Opted_in_valid_email'] == 1, :].drop_duplicates()
dfEmarsys_ValidOptIns = dfEmarsys_ValidOptIns[dfEmarsys_ValidOptIns['Email'] != 0]
print(dt.datetime.utcnow() - timeStamp)
dfSPV_IndividualsByValidEmail_Joined_OptIn = dfSPVByEmail[dfSPVByEmail.Email.isin(dfEmarsys_ValidOptIns.Email)]
print(dt.datetime.utcnow() - timeStamp)

# get the audience group counts
def get_audience_counts(df, audiences, source):
    counts = []
    # count of audience size by email
    for audience in audiences:
       counts.append([source, audience, df.loc[df[audience] == 1, 'Email'].nunique()])
    return counts

# JB 16/12/2020 - This is a hake to count all records and not just unique emails due to Emarsys containing lots of records with no email addy
def get_emarsysaudience_counts(df, audiences, source):
    counts = []
    # count of audience size by email
    for audience in audiences:
       counts.append([source, audience, df.loc[df[audience] == 1, 'Email'].count()])
    return counts

# # get the audience group counts
# def get_average_data_points(df, audiences, source):
#     counts = []
#     # count of audience size by email
#     for audience in audiences:
#        counts.append([source, audience, df.loc[df[audience] == 1, 'Data Points'].mean()])
#     return counts

AudienceCounts = []

# Emarsys Only

# 'Email', 'fancode', 'user_id', 'Opt-In', 'Email valid', 'Opted_in_valid_email',
#                        'All', 'FAPlayer', 'LSC', 'ESC', 'ESTC', 'WOWF', 'FA_Cup', 'Superkicks', 'Coaches',
#                        'FA Education Coaches', 'JustPlay', 'Light Registration', 'Wildcats', 'FA Fives', 'Cheetah Light Registration',
#                        'GRF Workforce', 'Players', 'England Mens Fans', 'England Womens Fans']]
   
   
emarsys_audiences = ['All', 'ESC', 'ESTC', 'WOWF', 'FA_Cup', 'LSC', 'CW', 'WembleyTicketBuyers', 'FAPlayer', 'MatchDay',
                     'Superkicks', 'Coaches', 'Players', 'Workforce', 'JustPlay', 'Wildcats', 'FAFives', 'Other', 'Light Registration',
                     'Cheetah Light Registration', 'England Mens Fans', 'England Womens Fans']
#AudienceCounts = get_audience_counts(dfEmarsys, emarsys_audiences, 'All Emarsys by Email') # All records
#AudienceCounts.extend(get_audience_counts(dfEmarsys_ValidEmails, emarsys_audiences, 'Emarsys - Valid Email')) # Valid emails
#AudienceCounts.extend(get_audience_counts(dfEmarsys_ValidOptIns, emarsys_audiences, 'Emarsys - Opted In & Valid Email')) # Opted In & Valid emails
AudienceCounts = get_emarsysaudience_counts(dfEmarsys, emarsys_audiences, '1. All Emarsys by Email') # All records
AudienceCounts.extend(get_emarsysaudience_counts(dfEmarsys_ValidEmails, emarsys_audiences, '2. Emarsys - Valid Email')) # Valid emails
AudienceCounts.extend(get_emarsysaudience_counts(dfEmarsys_ValidOptIns, emarsys_audiences, '3. Emarsys - Opted In & Valid Email')) # Opted In & Valid emails

a = dfEmarsys_ValidEmails.head(10)

# SPV & Joined
spv_audiences = ['All', 'ESC', 'ESTC', 'LSC', 'CW', 'WembleyTicketBuyers', 'FAPlayer', 'MatchDay', 'Superkicks', 'Coaches', 'Players',
                 'Workforce', 'JustPlay', 'Wildcats', 'FAFives', 'Other']
AudienceCounts.extend(get_audience_counts(dfSPVByEmail, spv_audiences, '4. SPV by Email')) # just in SPV
AudienceCounts.extend(get_audience_counts(dfSPV_IndividualsByValidEmail_Joined, spv_audiences, '5. SPV + Emarsys - Valid Email')) # SPV & Emarsys joined
AudienceCounts.extend(get_audience_counts(dfSPV_IndividualsByValidEmail_Joined_OptIn, spv_audiences, '6. SPV + Emarsys - Opted In & Valid Email')) # SPV & Emarsys joined and opted in

all_audiences = list(set(emarsys_audiences + spv_audiences))
print(dt.datetime.utcnow() - timeStamp)

SPVEmarsysUnion.loc[:, 'Other'] = 0
SPVEmarsysUnion = SPVEmarsysUnion.fillna(0)
SPVEmarsysUnion = SPVEmarsysUnion.groupby('Email', as_index=False)[all_audiences].max()

print(dt.datetime.utcnow() - timeStamp)

SPVEmarsysUnion.loc[:, 'Data Points'] = SPVEmarsysUnion.sum(axis=1, numeric_only=True) - 1
SPVEmarsysUnion.loc[:, 'In Other Data Sets'] = [1 if x > 1 else 0 for x in SPVEmarsysUnion.loc[:, 'Data Points']]
SPVEmarsysUnion.loc[:, 'Other'] = [1 if x == 0 else 0 for x in SPVEmarsysUnion.loc[:, 'Data Points']]
print(dt.datetime.utcnow() - timeStamp)

sample_SPVEmarsysUnion = SPVEmarsysUnion.sample(100)
sample_dfSPVByEmail = dfSPVByEmail.sample(100)

# SPV & Emarsys Combined
AudienceCounts.extend(get_audience_counts(SPVEmarsysUnion, all_audiences, '7. Overall - SPV or Emarsys')) # All records
#AudienceCounts.extend(get_audience_counts(SPVEmarsysUnion.loc[SPVEmarsysUnion['In Other Data Sets'] == 1, :], all_audiences, 'In Other Data Sets')) # All records
#AudienceCounts.extend(get_average_data_points(SPVEmarsysUnion, all_audiences, 'Avg. Data Points per User')) # All records

AudienceCounts = pd.DataFrame(AudienceCounts, columns = ['Source', 'Audience', 'Count'])
print(dt.datetime.utcnow() - timeStamp)

AudienceCountsPivot = pd.pivot_table(AudienceCounts, values='Count', index='Source', columns='Audience')

AudienceCountsPivot = AudienceCountsPivot[[
    'All',
    'ESC',
    'ESTC',
    'LSC',
    'FAPlayer',
    'WOWF',
    'Coaches',
    'FAFives',
    'Workforce',
    'JustPlay',
    'MatchDay',
    'Players',
    'Superkicks',
    'Wildcats',
    'CW',
    'FA_Cup',
    'WembleyTicketBuyers',
    'Other',
    'Light Registration', 
    'England Mens Fans',
    'England Womens Fans',
    ]]

# AudienceCountsPivot.to_csv(pathOutput + "\\202108_AudienceCountsPivot.csv", index=True)
AudienceCountsPivot.to_csv("202303_AudienceCountsPivot.csv", index=True)