const axios = require("axios");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const fs = require("fs");

const cookie =
  'currency_hideZeroBalances=false; currency_currencyView=crypto; fiat_number_format=en; locale=en; _ga=GA1.1.1460899778.1721551927; intercom-id-cx1ywgf2=a2eba0e1-0acd-4327-af27-01c59a8e3dc0; intercom-device-id-cx1ywgf2=0201127e-780c-4e61-86c1-097a25dc4131; cookie_consent=true; leftSidebarView_v2=expanded; sidebarView=hidden; casinoSearch=["Monopoly","Crazy Time","Sweet Bonanza","Money Train","Reactoonz"]; sportsSearch=["Liverpool FC","Kansas City Chiefs","Los Angeles Lakers","FC Barcelona","FC Bayern Munich"]; sportMarketGroupMap={}; oddsFormat=decimal; session=d0c4697a21be07ef5ec59ea9752f51b99efb236d9f8700bd41632e6d4b0308b7626e331df782834ac2337eaf289ec2d4; session_info={"id":"b138038e-4abe-4c47-bb98-dd018907dbdb","sessionName":"Chrome (Unknown)","ip":"152.59.46.179","country":"IN","city":"Navi Mumbai (Reliance Corporate Park)","active":true,"updatedAt":"Thu, 25 Jul 2024 05:41:50 GMT","__typename":"UserSession"}; currency_currency=inr; hideBalances=false; cf_clearance=NGNp7unf3GMXfD0Xi0cJJGVAsUODaliODe6laZGWJmE-1721900402-1.0.1.1-M5f.NfI52KoL_nBELYUGj_Qp3odLmVYDdTOLzcSyxLAxxvgyGTtIx3BtRrvfB2D_vQcKmhtLFg3LrEIVeBysgw; __cf_bm=2dxwa4.Rf5nQNq9oDZGhxRsIYIX4XwtNNWtsQ6DNlsw-1721901173-1.0.1.1-jqUBjWjh.eEZJFUQjj7VtfwRVD1NeMhJGBfYMSUm8i_HA5KEucnzpe7V6BY9Bp5h5OYfnL.H2_A8QH7o3iLtVw; fullscreen_preference=false; _ga_TWGX3QNXGG=GS1.1.1721900400.29.1.1721901245.0.0.0; mp_e29e8d653fb046aa5a7d7b151ecf6f99_mixpanel=%7B%22distinct_id%22%3A%20%2296d7a966023826ddc32490a42787bc245fcae6b53abd8c16c6e88a126cf7cbbb%22%2C%22%24device_id%22%3A%20%22190d47db335afa-0120a9fb1762c8-26001f51-144000-190d47db335afa%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fstake.com%2F%3F__cf_chl_tk%3DuSh7.aRsDVqIl2Ge8L8sialLSa8i2O1FpbJdnt0xCQg-1721551921-0.0.1.1-4116%22%2C%22%24initial_referring_domain%22%3A%20%22stake.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%2296d7a966023826ddc32490a42787bc245fcae6b53abd8c16c6e88a126cf7cbbb%22%2C%22%24search_engine%22%3A%20%22google%22%7D; __cfwaitingroom=Chh1ck5adzVnZ0RRVW9oZ3pPNWhmcGl3PT0ShAIwZjBweng5Mkp0RFZucnZFdFZZVnQ5bUZ3Nm5KWUo2M3c5UHVWbVliVDRrRWNrUG1MWWNTOHloTXNxRVhPYTB1RlVtNUpyTSt0SXN5bjBxbFZMM2h2a3gzaGUzeStxeFFTWTdaaTNBS3cxSnNucTNBREQ1cXdNbkVKRlNGem8rSUVFN1lXVXdyRUpaUGNRQXRIclJMS3djR0FuZnozckVHaFkrM0UwRHE4VDVRVTQ2WVN2bStFUStqdW9aMDRydk13Z3dMc3hsdFRMRlNsVVVuL2JUdXU3Z3pZWU56anFGaGpFdWRmeGpJUjQ4TnQvSHUwRnNNLytCeXhBZUgyclVLNWM4PQ%3D%3D; intercom-session-cx1ywgf2=c3NiMnZRMEtCdGtidkZmcWdmdEFGaENmOFdsT0FIa3hlMTFqZUdnVTRrWUNNT2ZsMkhoYk54QS9idGtMSW1INy0tbzV6c25peDdMYzBKckJxcG1NMlJSQT09--1a47c0574c5254e210a031503702b7339de7dd54; _dd_s=rum=0&expire=1721902153931';

async function sendRequest(amount) {
  const response = await axios({
    method: "post",
    url: "https://stake.com/_api/graphql",
    headers: {
      accept: "*/*",
      "accept-language": "en-GB,en-US;q=0.9,en;q=0.8,hi;q=0.7",
      "content-type": "application/json",
      cookie: cookie,
      origin: "https://stake.com",
      priority: "u=1, i",
      referer: "https://stake.com/casino/games/dice",
      "sec-ch-ua":
        '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
      "sec-ch-ua-arch": '"x86"',
      "sec-ch-ua-bitness": '"64"',
      "sec-ch-ua-full-version": '"126.0.6478.128"',
      "sec-ch-ua-full-version-list":
        '"Not/A)Brand";v="8.0.0.0", "Chromium";v="126.0.6478.128", "Google Chrome";v="126.0.6478.128"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-model": '""',
      "sec-ch-ua-platform": '"Windows"',
      "sec-ch-ua-platform-version": '"15.0.0"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
      "x-access-token":
        "d0c4697a21be07ef5ec59ea9752f51b99efb236d9f8700bd41632e6d4b0308b7626e331df782834ac2337eaf289ec2d4",
      "x-lockdown-token": "s5MNWtjTM5TvCMkAzxov",
    },
    data: `{"query":"mutation DiceRoll($amount: Float!, $target: Float!, $condition: CasinoGameDiceConditionEnum!, $currency: CurrencyEnum!, $identifier: String!) {\\n  diceRoll(\\n    amount: $amount\\n    target: $target\\n    condition: $condition\\n    currency: $currency\\n    identifier: $identifier\\n  ) {\\n    ...CasinoBet\\n    state {\\n      ...CasinoGameDice\\n    }\\n  }\\n}\\n\\nfragment CasinoBet on CasinoBet {\\n  id\\n  active\\n  payoutMultiplier\\n  amountMultiplier\\n  amount\\n  payout\\n  updatedAt\\n  currency\\n  game\\n  user {\\n    id\\n    name\\n  }\\n}\\n\\nfragment CasinoGameDice on CasinoGameDice {\\n  result\\n  target\\n  condition\\n}\\n","variables":{"target":50.5,"condition":"above","identifier":"gOsOVcnozWqk2rKR2ET6-","amount":${amount},"currency":"inr"}}`,
  });

  return response.data.data;
}

const DEFAULT_AMOUNT = 0.06;

async function main() {
  let amount = DEFAULT_AMOUNT;
  let lossesInARow = 0;
  let loopCount = Math.floor(Math.random() * (13 - 11 + 1)) + 11;
  var time = 600;

  const csvFilePath = "dice-data.csv";

  while (1) {
    console.log(`Betting ${amount}`);
    try {
      let betTime = new Date();
      const response = await sendRequest(amount);
      time = 600 * Math.floor(Math.random() * 5) + 1;
      let status = "NA";

      if (response.diceRoll.state.result < 50.5) {
        console.log(`Lost`);
        status = "Lost";
        lossesInARow++;
        amount = amount * 2;
      } else {
        console.log(`Won`);
        status = "Won";
        lossesInARow = 0;
        amount = DEFAULT_AMOUNT;
      }

      if (response) {
        const data = [
          {
            "Bet Time": betTime,
            "Bet Amount": amount,
            // "Dice Result": response.diceRoll.state.result,
            Status: status,
          },
        ];

        await appendDataToCSV(data, csvFilePath);
      }

      await new Promise((resolve) => setTimeout(resolve, time));

      if (lossesInARow >= loopCount) {
        console.log("Going to Dead Main");
        let deadMainResult = deadMain();

        if (deadMainResult) {
          lossesInARow = 0;
          amount = 0.06;
        }
      }
    } catch (e) {
      console.log("Error came");
    }
  }
}

async function deadMain() {
  let amount = 1;
  let loopCount = Math.floor(Math.random() * (15 - 10 + 1)) + 10;
  var time = 600;

  const csvFilePath = "dead-dice-data.csv";

  for (let i = 0; i < loopCount; i++) {
    console.log(`Betting ${amount}`);
    try {
      let betTime = new Date();
      const response = await sendRequest(amount);
      time = 600 * Math.floor(Math.random() * 5) + 1;
      let status = "NA";

      if (response.diceRoll.state.result < 50.5) {
        console.log(`Lost`);
        status = "Lost";
      } else {
        console.log(`Won`);
        status = "Won";
      }

      amount = (Math.random() * (1.5 - 0.5) + 0.5).toFixed(1);

      if (response) {
        const data = [
          {
            "Bet Time": betTime,
            "Bet Amount": amount,
            // "Dice Result": response.diceRoll.state.result,
            Status: status,
          },
        ];

        await appendDataToCSV(data, csvFilePath);
      }

      await new Promise((resolve) => setTimeout(resolve, time));
    } catch (e) {
      console.log("Error came");
    }
  }

  return true;
}

const headers = [
  { id: "Bet Time", title: "Bet Time" },
  { id: "Bet Amount", title: "Amount" },
  // { id: "Dice Result", title: "Dice Result" },
  { id: "Status", title: "Status" },
];

async function appendDataToCSV(data, path) {
  const csvWriter = createCsvWriter({
    path: path,
    append: true,
    header: headers,
    writeHeaders: !fs.existsSync(path),
  });

  try {
    await csvWriter.writeRecords(data);
    // console.log("Data appended to CSV successfully.");
  } catch (error) {
    console.error("Error appending data to CSV:", error);
  }
}

main();
