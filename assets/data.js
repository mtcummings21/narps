const LEAGUE_NAME = "League of NARPS";
const FOUNDED = 2011;
const LATEST_SEASON = 2025;
const TEAMS = [
  {
    "key": "Prino",
    "owner": "Joe Prino",
    "team": "Prino's Powerhouse",
    "seasons": 16,
    "champs": 4,
    "gamesW": 111,
    "gamesL": 89,
    "gamesT": 0,
    "winPct": 0.555,
    "playoffApp": 11,
    "playoffW": 17,
    "playoffL": 9,
    "playoffWinPct": 0.6538,
    "totalPF": 20323.4,
    "totalPA": 19419.2,
    "seasonAvgPF": 1270.21,
    "seasonAvgPA": 1213.7,
    "gameAvgPF": 101.62,
    "gameAvgPA": 97.1,
    "diff": 4.52,
    "topScoringSeasons": 1,
    "mostDrafted": {
      "count": 3,
      "entries": [
        { "player": "Cam Newton", "years": [2013, 2014, 2019] },
        { "player": "Darren McFadden", "years": [2011, 2013, 2014] },
        { "player": "DeMarco Murray", "years": [2012, 2014, 2015] },
        { "player": "Doug Martin", "years": [2012, 2013, 2017] },
        { "player": "Kareem Hunt", "years": [2020, 2021, 2023] },
        { "player": "LeSean McCoy", "years": [2011, 2014, 2017] },
        { "player": "Travis Kelce", "years": [2018, 2021, 2022] }
      ]
    }
  },
  {
    "key": "Wright",
    "owner": "Sonny Wright",
    "team": "George's Gangstas",
    "seasons": 16,
    "champs": 1,
    "gamesW": 115,
    "gamesL": 84,
    "gamesT": 1,
    "winPct": 0.5775,
    "playoffApp": 10,
    "playoffW": 10,
    "playoffL": 11,
    "playoffWinPct": 0.4762,
    "totalPF": 20102.4,
    "totalPA": 19406.3,
    "seasonAvgPF": 1256.4,
    "seasonAvgPA": 1212.89,
    "gameAvgPF": 100.51,
    "gameAvgPA": 97.03,
    "diff": 3.48,
    "topScoringSeasons": 2,
    "mostDrafted": {
      "count": 3,
      "entries": [
        { "player": "Brandon Marshall", "years": [2012, 2014, 2017] },
        { "player": "DeSean Jackson", "years": [2013, 2014, 2018] },
        { "player": "Julio Jones", "years": [2016, 2017, 2022] },
        { "player": "Matt Prater", "years": [2013, 2015, 2017] },
        { "player": "Tony Pollard", "years": [2021, 2022, 2023] }
      ]
    }
  },
  {
    "key": "Sizemore",
    "owner": "Zach Sizemore",
    "team": "The Deplorables",
    "seasons": 16,
    "champs": 1,
    "gamesW": 109,
    "gamesL": 91,
    "gamesT": 0,
    "winPct": 0.545,
    "playoffApp": 11,
    "playoffW": 11,
    "playoffL": 11,
    "playoffWinPct": 0.5,
    "totalPF": 20131.4,
    "totalPA": 19935.7,
    "seasonAvgPF": 1258.21,
    "seasonAvgPA": 1245.98,
    "gameAvgPF": 100.66,
    "gameAvgPA": 99.68,
    "diff": 0.98,
    "topScoringSeasons": 3,
    "mostDrafted": {
      "count": 4,
      "entries": [
        { "player": "Russell Wilson", "years": [2012, 2013, 2017, 2022] }
      ]
    }
  },
  {
    "key": "Rapp",
    "owner": "Luke Rapp",
    "team": "ACLiens",
    "seasons": 16,
    "champs": 3,
    "gamesW": 108,
    "gamesL": 92,
    "gamesT": 0,
    "winPct": 0.54,
    "playoffApp": 8,
    "playoffW": 10,
    "playoffL": 6,
    "playoffWinPct": 0.625,
    "totalPF": 19821,
    "totalPA": 19378,
    "seasonAvgPF": 1238.81,
    "seasonAvgPA": 1211.13,
    "gameAvgPF": 99.11,
    "gameAvgPA": 96.89,
    "diff": 2.22,
    "topScoringSeasons": 3,
    "mostDrafted": {
      "count": 3,
      "entries": [
        { "player": "Adrian Peterson", "years": [2011, 2013, 2014] },
        { "player": "Broncos D/ST", "years": [2013, 2014, 2015] },
        { "player": "Dan Bailey", "years": [2012, 2014, 2015] },
        { "player": "J.K. Dobbins", "years": [2020, 2025, 2026] },
        { "player": "Mark Ingram", "years": [2013, 2014, 2015] }
      ]
    }
  },
  {
    "key": "Cummings",
    "owner": "Tyler Cummings",
    "team": "Lincoln Legends",
    "seasons": 16,
    "champs": 0,
    "gamesW": 101,
    "gamesL": 98,
    "gamesT": 1,
    "winPct": 0.5075,
    "playoffApp": 9,
    "playoffW": 5,
    "playoffL": 10,
    "playoffWinPct": 0.3333,
    "totalPF": 20045.8,
    "totalPA": 19630.8,
    "seasonAvgPF": 1252.86,
    "seasonAvgPA": 1226.93,
    "gameAvgPF": 100.23,
    "gameAvgPA": 98.15,
    "diff": 2.08,
    "topScoringSeasons": null,
    "mostDrafted": {
      "count": 4,
      "entries": [
        { "player": "Russell Wilson", "years": [2014, 2015, 2016, 2023] }
      ]
    }
  },
  {
    "key": "Salameh",
    "owner": "Walid Salameh",
    "team": "Arabian Stallions",
    "seasons": 13,
    "champs": 1,
    "gamesW": 75,
    "gamesL": 88,
    "gamesT": 0,
    "winPct": 0.4601,
    "playoffApp": 5,
    "playoffW": 5,
    "playoffL": 4,
    "playoffWinPct": 0.5556,
    "totalPF": 16201.9,
    "totalPA": 16035.7,
    "seasonAvgPF": 1246.3,
    "seasonAvgPA": 1233.52,
    "gameAvgPF": 99.4,
    "gameAvgPA": 98.38,
    "diff": 1.02,
    "topScoringSeasons": 2,
    "mostDrafted": {
      "count": 4,
      "entries": [
        { "player": "Ezekiel Elliott", "years": [2017, 2018, 2019, 2021] }
      ]
    }
  },
  {
    "key": "Clay",
    "owner": "Tyler Clay",
    "team": "Money Badgers",
    "seasons": 16,
    "champs": 2,
    "gamesW": 103,
    "gamesL": 96,
    "gamesT": 1,
    "winPct": 0.5175,
    "playoffApp": 10,
    "playoffW": 10,
    "playoffL": 10,
    "playoffWinPct": 0.5,
    "totalPF": 19781.7,
    "totalPA": 19431.2,
    "seasonAvgPF": 1236.36,
    "seasonAvgPA": 1214.45,
    "gameAvgPF": 98.91,
    "gameAvgPA": 97.16,
    "diff": 1.75,
    "topScoringSeasons": 1,
    "mostDrafted": {
      "count": 4,
      "entries": [
        { "player": "DeAndre Hopkins", "years": [2015, 2018, 2019, 2022] },
        { "player": "DeVante Parker", "years": [2016, 2019, 2020, 2021] }
      ]
    }
  },
  {
    "key": "Burns",
    "owner": "Aaron Burns",
    "team": "Fantasy Football Team",
    "seasons": 13,
    "champs": 0,
    "gamesW": 76,
    "gamesL": 87,
    "gamesT": 0,
    "winPct": 0.4663,
    "playoffApp": 4,
    "playoffW": 4,
    "playoffL": 5,
    "playoffWinPct": 0.4444,
    "totalPF": 16026.9,
    "totalPA": 16034.2,
    "seasonAvgPF": 1232.84,
    "seasonAvgPA": 1233.4,
    "gameAvgPF": 98.32,
    "gameAvgPA": 98.37,
    "diff": -0.05,
    "topScoringSeasons": 1,
    "mostDrafted": {
      "count": 3,
      "entries": [
        { "player": "Carson Wentz", "years": [2017, 2018, 2020] },
        { "player": "George Kittle", "years": [2020, 2023, 2026] },
        { "player": "Keenan Allen", "years": [2017, 2018, 2019] },
        { "player": "Leonard Fournette", "years": [2018, 2021, 2022] }
      ]
    }
  },
  {
    "key": "Hickman",
    "owner": "Z Hickman",
    "team": "Free Agents",
    "seasons": 15,
    "champs": 1,
    "gamesW": 95,
    "gamesL": 92,
    "gamesT": 0,
    "winPct": 0.508,
    "playoffApp": 7,
    "playoffW": 5,
    "playoffL": 8,
    "playoffWinPct": 0.3846,
    "totalPF": 18212.7,
    "totalPA": 18238.6,
    "seasonAvgPF": 1214.18,
    "seasonAvgPA": 1215.91,
    "gameAvgPF": 97.39,
    "gameAvgPA": 97.53,
    "diff": -0.14,
    "topScoringSeasons": 1,
    "mostDrafted": {
      "count": 4,
      "entries": [
        { "player": "Andrew Luck", "years": [2013, 2014, 2015, 2018] },
        { "player": "Saquon Barkley", "years": [2018, 2019, 2021, 2023] }
      ]
    }
  },
  {
    "key": "West",
    "owner": "Travis West",
    "team": "Business as Usual",
    "seasons": 16,
    "champs": 2,
    "gamesW": 84,
    "gamesL": 115,
    "gamesT": 1,
    "winPct": 0.4225,
    "playoffApp": 4,
    "playoffW": 8,
    "playoffL": 2,
    "playoffWinPct": 0.8,
    "totalPF": 19100.9,
    "totalPA": 20046.3,
    "seasonAvgPF": 1193.81,
    "seasonAvgPA": 1252.89,
    "gameAvgPF": 95.5,
    "gameAvgPA": 100.23,
    "diff": -4.73,
    "topScoringSeasons": null,
    "mostDrafted": {
      "count": 4,
      "entries": [
        { "player": "Marshawn Lynch", "years": [2011, 2013, 2014, 2015] }
      ]
    }
  },
  {
    "key": "Geiger",
    "owner": "Matt Geiger",
    "team": "Kareem Pie",
    "seasons": 15,
    "champs": 0,
    "gamesW": 91,
    "gamesL": 104,
    "gamesT": 0,
    "winPct": 0.4667,
    "playoffApp": 7,
    "playoffW": 2,
    "playoffL": 9,
    "playoffWinPct": 0.1818,
    "totalPF": 18539.7,
    "totalPA": 19496.9,
    "seasonAvgPF": 1235.98,
    "seasonAvgPA": 1299.8,
    "gameAvgPF": 95.08,
    "gameAvgPA": 99.98,
    "diff": -4.9,
    "topScoringSeasons": null,
    "mostDrafted": {
      "count": 3,
      "entries": [
        { "player": "Derrick Henry", "years": [2016, 2017, 2021] },
        { "player": "Justin Tucker", "years": [2013, 2015, 2017] }
      ]
    }
  },
  {
    "key": "Garton",
    "owner": "Joe Garton",
    "team": "Route 2 Ravers",
    "seasons": 15,
    "champs": 0,
    "gamesW": 77,
    "gamesL": 110,
    "gamesT": 0,
    "winPct": 0.4118,
    "playoffApp": 2,
    "playoffW": 1,
    "playoffL": 3,
    "playoffWinPct": 0.25,
    "totalPF": 17549.2,
    "totalPA": 18798.1,
    "seasonAvgPF": 1169.95,
    "seasonAvgPA": 1253.21,
    "gameAvgPF": 93.85,
    "gameAvgPA": 100.52,
    "diff": -6.67,
    "topScoringSeasons": null,
    "mostDrafted": {
      "count": 7,
      "entries": [
        { "player": "Aaron Rodgers", "years": [2013, 2014, 2015, 2019, 2021, 2022, 2024] }
      ]
    }
  },
  {
    "key": "Thacker",
    "owner": "Seth Thacker",
    "team": "Kareem Pie",
    "seasons": 1,
    "champs": 0,
    "gamesW": 3,
    "gamesL": 2,
    "gamesT": 0,
    "winPct": 0.6,
    "playoffApp": 0,
    "playoffW": 0,
    "playoffL": 0,
    "playoffWinPct": 0,
    "totalPF": 496.9,
    "totalPA": 482.9,
    "seasonAvgPF": 496.9,
    "seasonAvgPA": 482.9,
    "gameAvgPF": 99.38,
    "gameAvgPA": 96.58,
    "diff": 2.8,
    "topScoringSeasons": null,
    "mostDrafted": {
      "count": 1,
      "entries": [
        { "player": "Bijan Robinson", "years": [2026] },
        { "player": "Jeremiyah Love", "years": [2026] },
        { "player": "Nico Collins", "years": [2026] },
        { "player": "David Montgomery", "years": [2026] },
        { "player": "Jaylen Waddle", "years": [2026] },
        { "player": "Christian Watson", "years": [2026] },
        { "player": "Joe Burrow", "years": [2026] },
        { "player": "Kyle Pitts Sr.", "years": [2026] },
        { "player": "Chris Godwin Jr.", "years": [2026] },
        { "player": "Jalen Coker", "years": [2026] },
        { "player": "Woody Marks", "years": [2026] },
        { "player": "Jonah Coleman", "years": [2026] },
        { "player": "Jordyn Tyson", "years": [2026] }
      ]
    }
  }
];

const CHAMPIONS = [
  {
    "year": 2011,
    "key": "Wright",
    "owner": "Sonny Wright",
    "team": "George's Gangstas"
  },
  {
    "year": 2012,
    "key": "Prino",
    "owner": "Joe Prino",
    "team": "Prino's Powerhouse"
  },
  {
    "year": 2013,
    "key": "Clay",
    "owner": "Tyler Clay",
    "team": "Money Badgers"
  },
  {
    "year": 2014,
    "key": "Rapp",
    "owner": "Luke Rapp",
    "team": "ACLiens"
  },
  {
    "year": 2015,
    "key": "Prino",
    "owner": "Joe Prino",
    "team": "Prino's Powerhouse"
  },
  {
    "year": 2016,
    "key": "Rapp",
    "owner": "Luke Rapp",
    "team": "ACLiens"
  },
  {
    "year": 2017,
    "key": "Prino",
    "owner": "Joe Prino",
    "team": "Prino's Powerhouse"
  },
  {
    "year": 2018,
    "key": "Prino",
    "owner": "Joe Prino",
    "team": "Prino's Powerhouse"
  },
  {
    "year": 2019,
    "key": "West",
    "owner": "Travis West",
    "team": "Business as Usual"
  },
  {
    "year": 2020,
    "key": "Hickman",
    "owner": "Z Hickman",
    "team": "Free Agents"
  },
  {
    "year": 2021,
    "key": "West",
    "owner": "Travis West",
    "team": "Business as Usual"
  },
  {
    "year": 2022,
    "key": "Salameh",
    "owner": "Walid Salameh",
    "team": "Arabian Stallions"
  },
  {
    "year": 2023,
    "key": "Clay",
    "owner": "Tyler Clay",
    "team": "Money Badgers"
  },
  {
    "year": 2024,
    "key": "Rapp",
    "owner": "Luke Rapp",
    "team": "ACLiens"
  },
  {
    "year": 2025,
    "key": "Sizemore",
    "owner": "Zach Sizemore",
    "team": "The Deplorables"
  }
];

const NEWSLETTERS = [
  {
    "vol": 1,
    "no": 1,
    "year": 2018,
    "title": "League of NARPS Newsletter",
    "url": "https://mailchi.mp/eda947156cd8/league-of-narps-newsletter"
  },
  {
    "vol": 1,
    "no": 2,
    "year": 2018,
    "title": "Vol. 1, No. 2",
    "url": "https://mailchi.mp/9be397e69bc3/lon-newsletter-vol-1-no-2"
  },
  {
    "vol": 1,
    "no": 3,
    "year": 2018,
    "title": "Vol. 1, No. 3",
    "url": "https://mailchi.mp/0ddcbe88a087/lon-newsletter-vol-1-no-3"
  },
  {
    "vol": 1,
    "no": 4,
    "year": 2018,
    "title": "Vol. 1, No. 4",
    "url": "https://mailchi.mp/9443e0aecd7e/lon-newsletter-vol-1-no-4"
  },
  {
    "vol": 1,
    "no": 5,
    "year": 2018,
    "title": "Vol. 1, No. 5",
    "url": "https://mailchi.mp/90a04c268bc6/lon-newsletter-vol-1-no-5"
  },
  {
    "vol": 1,
    "no": 6,
    "year": 2018,
    "title": "Scoring Is Up, Up, and Away",
    "url": "https://mailchi.mp/c2689d977061/lon-newsletter-vol-1-no-6-scoring-is-up-up-and-away"
  },
  {
    "vol": 1,
    "no": 7,
    "year": 2018,
    "title": "Vol. 1, No. 7",
    "url": "https://mailchi.mp/2c3bff17dd29/lon-newsletter-vol-1-no-7"
  },
  {
    "vol": 1,
    "no": 8,
    "year": 2018,
    "title": "Going Once, Going Twice, Sold!",
    "url": "https://mailchi.mp/c81f21dab194/going-once-going-twice-sold"
  },
  {
    "vol": 1,
    "no": 9,
    "year": 2018,
    "title": "Vol. 1, No. 9",
    "url": "https://mailchi.mp/0fc2a0721497/newsletter-vol-1-no-9"
  },
  {
    "vol": 1,
    "no": 10,
    "year": 2018,
    "title": "Vol. 1, No. 10",
    "url": "https://mailchi.mp/377848f02102/lon-newsletter-vol-1-no-10"
  },
  {
    "vol": 1,
    "no": 11,
    "year": 2018,
    "title": "Vol. 1, No. 11",
    "url": "https://mailchi.mp/486494fd03e4/lon-newsletter-vol-1-no-11"
  },
  {
    "vol": 1,
    "no": 12,
    "year": 2018,
    "title": "2019 Potential Keeper Selections",
    "url": "https://mailchi.mp/6c665269ae3f/lon-newsletter-2019-potential-keeper-selections"
  },
  {
    "vol": 1,
    "no": 13,
    "year": 2018,
    "title": "Vol. 1, No. 13",
    "url": "https://mailchi.mp/d580ad625298/lon-newsletter-vol-1-no-13"
  },
  {
    "vol": 1,
    "no": 14,
    "year": 2018,
    "title": "It All Comes Down to One Week",
    "url": "https://mailchi.mp/649f3c6f989c/it-all-comes-down-to-one-week"
  },
  {
    "vol": 1,
    "no": 15,
    "year": 2018,
    "title": "Vol. 1, No. 15",
    "url": "https://mailchi.mp/ad1386e2a620/lon-newsletter-vol-1-no-15"
  },
  {
    "vol": 1,
    "no": 16,
    "year": 2018,
    "title": "Semifinal Matchups",
    "url": "https://mailchi.mp/f1613be584c0/semifinal-matchups"
  },
  {
    "vol": 1,
    "no": 17,
    "year": 2018,
    "title": "Championship Edition",
    "url": "https://mailchi.mp/5717fdd8c67a/league-of-narps-newsletter-championship-edition"
  },
  {
    "vol": 2,
    "no": 1,
    "year": 2019,
    "title": "Preseason Edition",
    "url": "https://mailchi.mp/a5cd8b03e3a1/lon-newsletter-preseason-edition"
  },
  {
    "vol": 2,
    "no": 2,
    "year": 2019,
    "title": "Off-Field Drama in the NFL's 100th Season",
    "url": "https://mailchi.mp/213177114671/off-field-drama-in-nfls-100th-season"
  },
  {
    "vol": 2,
    "no": 3,
    "year": 2019,
    "title": "Vol. 2, No. 3",
    "url": "https://mailchi.mp/7aa7d842b122/lon-newsletter-vol-2-no-3"
  },
  {
    "vol": 2,
    "no": 4,
    "year": 2019,
    "title": "Week 3 Matchup Analysis",
    "url": "https://mailchi.mp/f04bdf97389d/week-3-matchup-analysis"
  },
  {
    "vol": 2,
    "no": 5,
    "year": 2019,
    "title": "Playoffs, Scoring, and Power Rankings",
    "url": "https://mailchi.mp/5fdc74e65b5e/playoffs-scoring-and-power-rankings"
  },
  {
    "vol": 2,
    "no": 6,
    "year": 2019,
    "title": "Standings, Top Scoring Team, and Power Rankings",
    "url": "https://mailchi.mp/b991fbac2cca/standings-top-scoring-team-power-rankings"
  },
  {
    "vol": 2,
    "no": 7,
    "year": 2019,
    "title": "Standings, Top Scoring Team, and Power Rankings",
    "url": "https://mailchi.mp/c74f8388d787/standings-top-scoring-team-power-rankings"
  },
  {
    "vol": 2,
    "no": 8,
    "year": 2019,
    "title": "Week 9 Champions: Standings, Top Scoring Team, and Power Rankings",
    "url": "https://mailchi.mp/5ef0a5ec44b6/week-9-champions-standings-top-scoring-team-power-rankings"
  },
  {
    "vol": 2,
    "no": 9,
    "year": 2019,
    "title": "Week 10: Standings, Top Scoring Team, and Power Rankings",
    "url": "https://mailchi.mp/58dda2e5499f/week-10-standings-top-scoring-team-power-rankings"
  },
  {
    "vol": 2,
    "no": 10,
    "year": 2019,
    "title": "Week 11: The Final Stretch — Matchups, Power Rankings, and More",
    "url": "https://mailchi.mp/a1deb2d3c105/week-11-the-final-stretch-matchups-power-rankings-and-more"
  },
  {
    "vol": 2,
    "no": 11,
    "year": 2019,
    "title": "Revised Week 12: A Rare Feat in LON History, Playoff Picture, Power Rankings, and More",
    "url": "https://mailchi.mp/81265f0316af/revised-week-12-rare-feat-in-lon-history-playoff-picture-power-rankings-and-more"
  },
  {
    "vol": 2,
    "no": 12,
    "year": 2019,
    "title": "Happy Thanksgiving",
    "url": "https://mailchi.mp/374a432d28d7/happy-thanksgiving"
  },
  {
    "vol": 2,
    "no": 13,
    "year": 2019,
    "title": "Podcast, Playoffs, and Power Rankings",
    "url": "https://mailchi.mp/a7942e3d8450/podcast-playoffs-and-power-rankings"
  },
  {
    "vol": 2,
    "no": 14,
    "year": 2019,
    "title": "A Throne for the Taking: Semi-Finals Edition",
    "url": "https://mailchi.mp/a1d5a3723d55/a-throne-for-the-taking-semi-finals-edition"
  },
  {
    "vol": 2,
    "no": 15,
    "year": 2019,
    "title": "Championship Edition",
    "url": "https://mailchi.mp/b8bf253531a8/championship-edition"
  },
  {
    "vol": 8,
    "no": 1,
    "year": 2025,
    "title": "Upcoming 2025 LON Season",
    "url": "https://mailchi.mp/8f0611695e63/upcoming-2025-lon-season"
  },
  {
    "vol": 8,
    "no": 2,
    "year": 2025,
    "title": "Off to the Races: How One Team Is Winning Without Winning",
    "url": "https://mailchi.mp/ebc51ac4dd8a/off-to-the-races-how-one-team-is-winning-without-winning"
  },
  {
    "vol": 8,
    "no": 3,
    "year": 2025,
    "title": "LON Insider Story: Private Equity Muscle to LON",
    "url": "https://mailchi.mp/16289bd06ec7/lon-insider-story-private-equity-muscle-to-lon"
  },
  {
    "vol": 8,
    "no": 4,
    "year": 2025,
    "title": "League of NARPS Midseason Update",
    "url": "https://mailchi.mp/4cf44e852887/league-of-narps-midseason-update"
  },
  {
    "vol": 8,
    "no": 5,
    "year": 2025,
    "title": "Playoff Picture in Flux as NARPS Enter a High-Stakes Week 14",
    "url": "https://mailchi.mp/e41b12e3ae58/playoff-picture-in-flux-as-narps-enter-a-high-stakes-week-14"
  },
  {
    "vol": 8,
    "no": 6,
    "year": 2025,
    "title": "First-Round Fights and Semifinals Preview",
    "url": "https://mailchi.mp/a5dff2d22458/first-round-fights-and-semifinals-preview"
  },
  {
    "vol": 8,
    "no": 7,
    "year": 2025,
    "title": "LON 2025 Championship and Season Recap",
    "url": "https://mailchi.mp/d617d847b4ba/lon-2025-championship-and-season-recap"
  },
  {
    "vol": 7,
    "no": 1,
    "year": 2024,
    "title": "Time to Head to the Polls",
    "url": "https://mailchi.mp/fc38a22a8570/time-to-head-to-the-polls"
  },
  {
    "vol": 7,
    "no": 2,
    "year": 2024,
    "title": "The Playoff Race",
    "url": "https://mailchi.mp/c3ba8b29dd08/the-playoff-race"
  },
  {
    "vol": 6,
    "no": 1,
    "year": 2023,
    "title": "Upcoming 2023 Season",
    "url": "https://mailchi.mp/11029cf70d2c/upcoming-2023-season"
  },
  {
    "vol": 6,
    "no": 2,
    "year": 2023,
    "title": "Fall and Football Are Back",
    "url": "https://mailchi.mp/71662fb38c53/fall-and-football-are-back"
  },
  {
    "vol": 6,
    "no": 3,
    "year": 2023,
    "title": "The Power Rankings Are Back",
    "url": "https://mailchi.mp/cb1be9351944/the-power-rankings-are-back"
  },
  {
    "vol": 6,
    "no": 4,
    "year": 2023,
    "title": "Playoff Positioning: Gangstas and Deplorables Lead the Way",
    "url": "https://mailchi.mp/e89a6b166b7f/playoff-positioning-gangstas-and-deplorabes-lead-the-way"
  },
  {
    "vol": 5,
    "no": 1,
    "year": 2022,
    "title": "I'm Back",
    "url": "https://mailchi.mp/532b7baf20fe/im-back"
  },
  {
    "vol": 5,
    "no": 2,
    "year": 2022,
    "title": "Magic in Miami: Ian Takes Over Rest of Florida",
    "url": "https://mailchi.mp/a0b9271cedbe/lon-newsletter-vol-5-no-2-magic-in-miami-ian-takes-over-rest-of-florida"
  },
  {
    "vol": 5,
    "no": 3,
    "year": 2022,
    "title": "Vol. 5, No. 3",
    "url": "https://mailchi.mp/487fb6657b0e/lon-newsletter-vol-5-no-3"
  },
  {
    "vol": 5,
    "no": 4,
    "year": 2022,
    "title": "Playoff Changes, Average Weekly Scores",
    "url": "https://mailchi.mp/e147868a6890/playoff-changes-average-weekly-scores"
  },
  {
    "vol": 5,
    "no": 5,
    "year": 2022,
    "title": "Real or Not Real",
    "url": "https://mailchi.mp/c63232749fe3/real-or-not-real"
  },
  {
    "vol": 5,
    "no": 6,
    "year": 2022,
    "title": "Tight Race for the Playoffs",
    "url": "https://mailchi.mp/4356dcab2f94/tight-race-for-the-playoffs"
  },
  {
    "vol": 5,
    "no": 7,
    "year": 2022,
    "title": "The Playoff Race Continues to Be Competitive",
    "url": "https://mailchi.mp/e5b5d42b48e5/the-playoff-race-continues-to-be-competitive"
  },
  {
    "vol": 5,
    "no": 8,
    "year": 2022,
    "title": "Thanksgiving Edition",
    "url": "https://mailchi.mp/efcd60765b08/lon-newsletter-thanksgiving-edition"
  },
  {
    "vol": 5,
    "no": 9,
    "year": 2022,
    "title": "Playoff Scenarios",
    "url": "https://mailchi.mp/182a7eb03a9a/playoff-scenarios"
  },
  {
    "vol": 5,
    "no": 10,
    "year": 2022,
    "title": "Stallions Run Loose While Gangstas Out-Shoot Everyone",
    "url": "https://mailchi.mp/74e4906f5d41/stallions-run-loose-while-gangstas-out-shoot-everyone"
  },
  {
    "vol": 4,
    "no": 1,
    "year": 2021,
    "title": "Hall of Fame Game",
    "url": "https://mailchi.mp/d7d7a1e31b85/hall-of-fame-game"
  },
  {
    "vol": 3,
    "no": 2,
    "year": 2020,
    "title": "Final Week of Regular Season",
    "url": "https://mailchi.mp/8cebcf956599/final-week-of-regular-season"
  },
  {
    "vol": 3,
    "no": 3,
    "year": 2020,
    "title": "LON First Round Playoff Matchups",
    "url": "https://mailchi.mp/8df3808e9324/lon-first-round-playoff-matchups"
  },
  {
    "vol": 3,
    "no": 4,
    "year": 2020,
    "title": "LoN Newsletter Vol 3, No 4",
    "url": "https://us19.campaign-archive.com/?u=564d0ae2533148f8fc46b832d&id=17553cc6d4"
  },
  {
    "vol": 9,
    "no": 1,
    "year": 2026,
    "title": "The Week 1 Recap",
    "url": "newsletter-vol9-no1.html"
  },
  {
    "vol": 9,
    "no": 2,
    "year": 2026,
    "title": "A Generation Crippled",
    "url": "newsletter-vol9-no2.html"
  },
  {
    "vol": 9,
    "no": 3,
    "year": 2026,
    "title": "The First 2026 Power Rankings",
    "url": "newsletter-vol9-no3.html"
  },
  {
    "vol": 9,
    "no": 4,
    "year": 2026,
    "title": "Feast or Famine",
    "url": "newsletter-vol9-no4.html"
  },
  {
    "vol": 9,
    "no": 5,
    "year": 2026,
    "title": "NARPS Franchises and their NFL Equivalents",
    "url": "newsletter-vol9-no5.html"
  }
];

const SEASON_AVGS = [
  {
    "year": 2018,
    "avg": 1453.175
  },
  {
    "year": 2011,
    "avg": 1431.875
  },
  {
    "year": 2021,
    "avg": 1397.475
  },
  {
    "year": 2024,
    "avg": 1374.308
  },
  {
    "year": 2023,
    "avg": 1356.783
  }
];

const SEASONS = {
  "2011": {
    "year": 2011,
    "champion": {
      "team": "Rookie Sensations",
      "owner": "George Wright"
    },
    "second": {
      "team": "The Last of the Mehicans",
      "owner": "Luke Rapp"
    },
    "third": {
      "team": "The Hulk",
      "owner": "Zachary Sizemore"
    },
    "standings": [
      {
        "team": "The Last of the Mehicans",
        "owner": "Luke Rapp",
        "w": 12,
        "l": 1,
        "t": 0,
        "pct": 0.923
      },
      {
        "team": "Prino's Powerhouse",
        "owner": "Joe Prino",
        "w": 9,
        "l": 4,
        "t": 0,
        "pct": 0.692
      },
      {
        "team": "Rookie Sensations",
        "owner": "George Wright",
        "w": 8,
        "l": 5,
        "t": 0,
        "pct": 0.615
      },
      {
        "team": "The Hulk",
        "owner": "Zachary Sizemore",
        "w": 7,
        "l": 6,
        "t": 0,
        "pct": 0.538
      },
      {
        "team": "Arian Brotherhood",
        "owner": "Tyler Cummings",
        "w": 5,
        "l": 8,
        "t": 0,
        "pct": 0.385
      },
      {
        "team": "Business as Usual",
        "owner": "Travis West",
        "w": 4,
        "l": 8,
        "t": 1,
        "pct": 0.346
      },
      {
        "team": "Plaxicolt's 45",
        "owner": "Matt Geiger",
        "w": 4,
        "l": 9,
        "t": 0,
        "pct": 0.308
      },
      {
        "team": "Greatest Show On Turf",
        "owner": "Tyler Clay",
        "w": 2,
        "l": 10,
        "t": 1,
        "pct": 0.192
      }
    ],
    "schedule": {
      "Week 1": [
        {
          "away": "Arian Brotherhood",
          "awayMgr": "Tyler Cummings",
          "awayScore": 103,
          "homeScore": 94,
          "homeMgr": "George Wright",
          "home": "Rookie Sensations"
        },
        {
          "away": "Plaxicolt's 45",
          "awayMgr": "Matt Geiger",
          "awayScore": 110,
          "homeScore": 135,
          "homeMgr": "Zachary Sizemore",
          "home": "The Hulk"
        },
        {
          "away": "The Last of the Mehicans",
          "awayMgr": "Luke Rapp",
          "awayScore": 110,
          "homeScore": 90,
          "homeMgr": "Tyler Clay",
          "home": "Greatest Show On Turf"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 129,
          "homeScore": 125,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        }
      ],
      "Week 2": [
        {
          "away": "Plaxicolt's 45",
          "awayMgr": "Matt Geiger",
          "awayScore": 110,
          "homeScore": 95,
          "homeMgr": "Tyler Cummings",
          "home": "Arian Brotherhood"
        },
        {
          "away": "Rookie Sensations",
          "awayMgr": "George Wright",
          "awayScore": 138,
          "homeScore": 142,
          "homeMgr": "Zachary Sizemore",
          "home": "The Hulk"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 156,
          "homeScore": 133,
          "homeMgr": "Luke Rapp",
          "home": "The Last of the Mehicans"
        },
        {
          "away": "Greatest Show On Turf",
          "awayMgr": "Tyler Clay",
          "awayScore": 122,
          "homeScore": 120,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        }
      ],
      "Week 3": [
        {
          "away": "Arian Brotherhood",
          "awayMgr": "Tyler Cummings",
          "awayScore": 53,
          "homeScore": 102,
          "homeMgr": "Zachary Sizemore",
          "home": "The Hulk"
        },
        {
          "away": "Rookie Sensations",
          "awayMgr": "George Wright",
          "awayScore": 131,
          "homeScore": 92,
          "homeMgr": "Matt Geiger",
          "home": "Plaxicolt's 45"
        },
        {
          "away": "The Last of the Mehicans",
          "awayMgr": "Luke Rapp",
          "awayScore": 161,
          "homeScore": 83,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "Greatest Show On Turf",
          "awayMgr": "Tyler Clay",
          "awayScore": 74,
          "homeScore": 121,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        }
      ],
      "Week 4": [
        {
          "away": "The Last of the Mehicans",
          "awayMgr": "Luke Rapp",
          "awayScore": 96,
          "homeScore": 91,
          "homeMgr": "Tyler Cummings",
          "home": "Arian Brotherhood"
        },
        {
          "away": "Greatest Show On Turf",
          "awayMgr": "Tyler Clay",
          "awayScore": 120,
          "homeScore": 123,
          "homeMgr": "George Wright",
          "home": "Rookie Sensations"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 126,
          "homeScore": 114,
          "homeMgr": "Matt Geiger",
          "home": "Plaxicolt's 45"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 110,
          "homeScore": 109,
          "homeMgr": "Zachary Sizemore",
          "home": "The Hulk"
        }
      ],
      "Week 5": [
        {
          "away": "Rookie Sensations",
          "awayMgr": "George Wright",
          "awayScore": 121,
          "homeScore": 132,
          "homeMgr": "Luke Rapp",
          "home": "The Last of the Mehicans"
        },
        {
          "away": "Plaxicolt's 45",
          "awayMgr": "Matt Geiger",
          "awayScore": 130,
          "homeScore": 107,
          "homeMgr": "Tyler Clay",
          "home": "Greatest Show On Turf"
        },
        {
          "away": "The Hulk",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 113,
          "homeScore": 114,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "Arian Brotherhood",
          "awayMgr": "Tyler Cummings",
          "awayScore": 96,
          "homeScore": 103,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        }
      ],
      "Week 6": [
        {
          "away": "The Last of the Mehicans",
          "awayMgr": "Luke Rapp",
          "awayScore": 94,
          "homeScore": 90,
          "homeMgr": "Matt Geiger",
          "home": "Plaxicolt's 45"
        },
        {
          "away": "Greatest Show On Turf",
          "awayMgr": "Tyler Clay",
          "awayScore": 97,
          "homeScore": 132,
          "homeMgr": "Zachary Sizemore",
          "home": "The Hulk"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 133,
          "homeScore": 86,
          "homeMgr": "Tyler Cummings",
          "home": "Arian Brotherhood"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 70,
          "homeScore": 122,
          "homeMgr": "George Wright",
          "home": "Rookie Sensations"
        }
      ],
      "Week 7": [
        {
          "away": "The Hulk",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 54,
          "homeScore": 128,
          "homeMgr": "Luke Rapp",
          "home": "The Last of the Mehicans"
        },
        {
          "away": "Arian Brotherhood",
          "awayMgr": "Tyler Cummings",
          "awayScore": 140,
          "homeScore": 97,
          "homeMgr": "Tyler Clay",
          "home": "Greatest Show On Turf"
        },
        {
          "away": "Rookie Sensations",
          "awayMgr": "George Wright",
          "awayScore": 100,
          "homeScore": 82,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "Plaxicolt's 45",
          "awayMgr": "Matt Geiger",
          "awayScore": 97,
          "homeScore": 100,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        }
      ],
      "Week 8": [
        {
          "away": "Rookie Sensations",
          "awayMgr": "George Wright",
          "awayScore": 114,
          "homeScore": 143,
          "homeMgr": "Tyler Cummings",
          "home": "Arian Brotherhood"
        },
        {
          "away": "The Hulk",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 118,
          "homeScore": 85,
          "homeMgr": "Matt Geiger",
          "home": "Plaxicolt's 45"
        },
        {
          "away": "Greatest Show On Turf",
          "awayMgr": "Tyler Clay",
          "awayScore": 72,
          "homeScore": 88,
          "homeMgr": "Luke Rapp",
          "home": "The Last of the Mehicans"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 72,
          "homeScore": 124,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        }
      ],
      "Week 9": [
        {
          "away": "Arian Brotherhood",
          "awayMgr": "Tyler Cummings",
          "awayScore": 113,
          "homeScore": 109,
          "homeMgr": "Matt Geiger",
          "home": "Plaxicolt's 45"
        },
        {
          "away": "The Hulk",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 76,
          "homeScore": 154,
          "homeMgr": "George Wright",
          "home": "Rookie Sensations"
        },
        {
          "away": "The Last of the Mehicans",
          "awayMgr": "Luke Rapp",
          "awayScore": 114,
          "homeScore": 112,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 104,
          "homeScore": 104,
          "homeMgr": "Tyler Clay",
          "home": "Greatest Show On Turf"
        }
      ],
      "Week 10": [
        {
          "away": "The Hulk",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 98,
          "homeScore": 114,
          "homeMgr": "Tyler Cummings",
          "home": "Arian Brotherhood"
        },
        {
          "away": "Plaxicolt's 45",
          "awayMgr": "Matt Geiger",
          "awayScore": 53,
          "homeScore": 138,
          "homeMgr": "George Wright",
          "home": "Rookie Sensations"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 132,
          "homeScore": 148,
          "homeMgr": "Luke Rapp",
          "home": "The Last of the Mehicans"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 77,
          "homeScore": 125,
          "homeMgr": "Tyler Clay",
          "home": "Greatest Show On Turf"
        }
      ],
      "Week 11": [
        {
          "away": "The Last of the Mehicans",
          "awayMgr": "Luke Rapp",
          "awayScore": 116,
          "homeScore": 86,
          "homeMgr": "Tyler Cummings",
          "home": "Arian Brotherhood"
        },
        {
          "away": "Greatest Show On Turf",
          "awayMgr": "Tyler Clay",
          "awayScore": 113,
          "homeScore": 141,
          "homeMgr": "George Wright",
          "home": "Rookie Sensations"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 100,
          "homeScore": 102,
          "homeMgr": "Matt Geiger",
          "home": "Plaxicolt's 45"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 92,
          "homeScore": 108,
          "homeMgr": "Zachary Sizemore",
          "home": "The Hulk"
        }
      ],
      "Week 12": [
        {
          "away": "Rookie Sensations",
          "awayMgr": "George Wright",
          "awayScore": 106,
          "homeScore": 184,
          "homeMgr": "Luke Rapp",
          "home": "The Last of the Mehicans"
        },
        {
          "away": "Plaxicolt's 45",
          "awayMgr": "Matt Geiger",
          "awayScore": 132,
          "homeScore": 75,
          "homeMgr": "Tyler Clay",
          "home": "Greatest Show On Turf"
        },
        {
          "away": "The Hulk",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 91,
          "homeScore": 101,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "Arian Brotherhood",
          "awayMgr": "Tyler Cummings",
          "awayScore": 100,
          "homeScore": 114,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        }
      ],
      "Week 13": [
        {
          "away": "The Last of the Mehicans",
          "awayMgr": "Luke Rapp",
          "awayScore": 133,
          "homeScore": 114,
          "homeMgr": "Matt Geiger",
          "home": "Plaxicolt's 45"
        },
        {
          "away": "Greatest Show On Turf",
          "awayMgr": "Tyler Clay",
          "awayScore": 105,
          "homeScore": 124,
          "homeMgr": "Zachary Sizemore",
          "home": "The Hulk"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 149,
          "homeScore": 107,
          "homeMgr": "Tyler Cummings",
          "home": "Arian Brotherhood"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 99,
          "homeScore": 120,
          "homeMgr": "George Wright",
          "home": "Rookie Sensations"
        }
      ]
    },
    "playoffs": {
      "round1": {
        "label": "Round 1 (Week 14)",
        "games": [
          {
            "away": "The Hulk",
            "awayMgr": "Zachary Sizemore",
            "awayScore": 127,
            "homeScore": 141,
            "homeMgr": "Luke Rapp",
            "home": "The Last of the Mehicans"
          },
          {
            "away": "Prino's Powerhouse",
            "awayMgr": "Joe Prino",
            "awayScore": 115,
            "homeScore": 118,
            "homeMgr": "George Wright",
            "home": "Rookie Sensations"
          }
        ]
      },
      "round3": {
        "label": "Round 2 / Championship (Week 15)",
        "games": [
          {
            "away": "Rookie Sensations",
            "awayMgr": "George Wright",
            "awayScore": 153,
            "homeScore": 129,
            "homeMgr": "Luke Rapp",
            "home": "The Last of the Mehicans"
          }
        ]
      },
      "thirdPlace": {
        "label": "Round 2 / 3rd Place (Week 15)",
        "games": [
          {
            "away": "The Hulk",
            "awayMgr": "Zachary Sizemore",
            "awayScore": 113,
            "homeScore": 104,
            "homeMgr": "Joe Prino",
            "home": "Prino's Powerhouse"
          }
        ]
      }
    }
  },
  "2012": {
    "year": 2012,
    "champion": {
      "team": "Prino's Powerhouse",
      "owner": "Joe Prino"
    },
    "second": {
      "team": "Rookie Sensations",
      "owner": "George Wright"
    },
    "third": {
      "team": "Business as Usual",
      "owner": "Travis West"
    },
    "standings": [
      {
        "team": "Rookie Sensations",
        "owner": "George Wright",
        "w": 11,
        "l": 1,
        "t": 0,
        "pct": 0.917
      },
      {
        "team": "Plaxicolt's 45",
        "owner": "Matt Geiger",
        "w": 9,
        "l": 3,
        "t": 0,
        "pct": 0.75
      },
      {
        "team": "Prino's Powerhouse",
        "owner": "Joe Prino",
        "w": 8,
        "l": 4,
        "t": 0,
        "pct": 0.667
      },
      {
        "team": "Brady's Bunch",
        "owner": "Tyler Cummings",
        "w": 6,
        "l": 6,
        "t": 0,
        "pct": 0.5
      },
      {
        "team": "The Hulk",
        "owner": "Zachary Sizemore",
        "w": 6,
        "l": 6,
        "t": 0,
        "pct": 0.5
      },
      {
        "team": "Business as Usual",
        "owner": "Travis West",
        "w": 6,
        "l": 6,
        "t": 0,
        "pct": 0.5
      },
      {
        "team": "Greatest Show On Turf",
        "owner": "Tyler Clay",
        "w": 4,
        "l": 8,
        "t": 0,
        "pct": 0.333
      },
      {
        "team": "The 5 Star Stunnas",
        "owner": "Joseph Garton",
        "w": 4,
        "l": 8,
        "t": 0,
        "pct": 0.333
      },
      {
        "team": "The Last of the Meheecans",
        "owner": "Luke Rapp",
        "w": 3,
        "l": 9,
        "t": 0,
        "pct": 0.25
      },
      {
        "team": "Free Agents",
        "owner": "Zachary Hickman",
        "w": 3,
        "l": 9,
        "t": 0,
        "pct": 0.25
      }
    ],
    "schedule": {
      "Week 1": [
        {
          "away": "Brady's Bunch",
          "awayMgr": "Tyler Cummings",
          "awayScore": 84,
          "homeScore": 99,
          "homeMgr": "George Wright",
          "home": "Rookie Sensations"
        },
        {
          "away": "Plaxicolt's 45",
          "awayMgr": "Matt Geiger",
          "awayScore": 120,
          "homeScore": 80,
          "homeMgr": "Joseph Garton",
          "home": "The 5 Star Stunnas"
        },
        {
          "away": "The Hulk",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 89,
          "homeScore": 87,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "The Last of the Meheecans",
          "awayMgr": "Luke Rapp",
          "awayScore": 106,
          "homeScore": 99,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "Greatest Show On Turf",
          "awayMgr": "Tyler Clay",
          "awayScore": 105,
          "homeScore": 133,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        }
      ],
      "Week 2": [
        {
          "away": "Plaxicolt's 45",
          "awayMgr": "Matt Geiger",
          "awayScore": 100,
          "homeScore": 76,
          "homeMgr": "Tyler Cummings",
          "home": "Brady's Bunch"
        },
        {
          "away": "Rookie Sensations",
          "awayMgr": "George Wright",
          "awayScore": 117,
          "homeScore": 115,
          "homeMgr": "Zachary Sizemore",
          "home": "The Hulk"
        },
        {
          "away": "The 5 Star Stunnas",
          "awayMgr": "Joseph Garton",
          "awayScore": 103,
          "homeScore": 71,
          "homeMgr": "Luke Rapp",
          "home": "The Last of the Meheecans"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 85,
          "homeScore": 136,
          "homeMgr": "Tyler Clay",
          "home": "Greatest Show On Turf"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 91,
          "homeScore": 95,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        }
      ],
      "Week 3": [
        {
          "away": "Brady's Bunch",
          "awayMgr": "Tyler Cummings",
          "awayScore": 113,
          "homeScore": 110,
          "homeMgr": "Zachary Sizemore",
          "home": "The Hulk"
        },
        {
          "away": "The Last of the Meheecans",
          "awayMgr": "Luke Rapp",
          "awayScore": 93,
          "homeScore": 105,
          "homeMgr": "Matt Geiger",
          "home": "Plaxicolt's 45"
        },
        {
          "away": "Greatest Show On Turf",
          "awayMgr": "Tyler Clay",
          "awayScore": 48,
          "homeScore": 105,
          "homeMgr": "George Wright",
          "home": "Rookie Sensations"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 70,
          "homeScore": 76,
          "homeMgr": "Joseph Garton",
          "home": "The 5 Star Stunnas"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 108,
          "homeScore": 88,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        }
      ],
      "Week 4": [
        {
          "away": "The Last of the Meheecans",
          "awayMgr": "Luke Rapp",
          "awayScore": 64,
          "homeScore": 104,
          "homeMgr": "Tyler Cummings",
          "home": "Brady's Bunch"
        },
        {
          "away": "The Hulk",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 152,
          "homeScore": 142,
          "homeMgr": "Tyler Clay",
          "home": "Greatest Show On Turf"
        },
        {
          "away": "Plaxicolt's 45",
          "awayMgr": "Matt Geiger",
          "awayScore": 102,
          "homeScore": 77,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "Rookie Sensations",
          "awayMgr": "George Wright",
          "awayScore": 117,
          "homeScore": 109,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "The 5 Star Stunnas",
          "awayMgr": "Joseph Garton",
          "awayScore": 75,
          "homeScore": 115,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        }
      ],
      "Week 5": [
        {
          "away": "Brady's Bunch",
          "awayMgr": "Tyler Cummings",
          "awayScore": 123,
          "homeScore": 110,
          "homeMgr": "Tyler Clay",
          "home": "Greatest Show On Turf"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 86,
          "homeScore": 57,
          "homeMgr": "Luke Rapp",
          "home": "The Last of the Meheecans"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 71,
          "homeScore": 125,
          "homeMgr": "Zachary Sizemore",
          "home": "The Hulk"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 96,
          "homeScore": 123,
          "homeMgr": "Matt Geiger",
          "home": "Plaxicolt's 45"
        },
        {
          "away": "The 5 Star Stunnas",
          "awayMgr": "Joseph Garton",
          "awayScore": 89,
          "homeScore": 106,
          "homeMgr": "George Wright",
          "home": "Rookie Sensations"
        }
      ],
      "Week 6": [
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 106,
          "homeScore": 97,
          "homeMgr": "Tyler Cummings",
          "home": "Brady's Bunch"
        },
        {
          "away": "Greatest Show On Turf",
          "awayMgr": "Tyler Clay",
          "awayScore": 63,
          "homeScore": 98,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "The Last of the Meheecans",
          "awayMgr": "Luke Rapp",
          "awayScore": 107,
          "homeScore": 77,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "The Hulk",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 101,
          "homeScore": 96,
          "homeMgr": "Joseph Garton",
          "home": "The 5 Star Stunnas"
        },
        {
          "away": "Plaxicolt's 45",
          "awayMgr": "Matt Geiger",
          "awayScore": 95,
          "homeScore": 106,
          "homeMgr": "George Wright",
          "home": "Rookie Sensations"
        }
      ],
      "Week 7": [
        {
          "away": "Brady's Bunch",
          "awayMgr": "Tyler Cummings",
          "awayScore": 92,
          "homeScore": 117,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 116,
          "homeScore": 81,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "The 5 Star Stunnas",
          "awayMgr": "Joseph Garton",
          "awayScore": 63,
          "homeScore": 116,
          "homeMgr": "Tyler Clay",
          "home": "Greatest Show On Turf"
        },
        {
          "away": "Rookie Sensations",
          "awayMgr": "George Wright",
          "awayScore": 97,
          "homeScore": 73,
          "homeMgr": "Luke Rapp",
          "home": "The Last of the Meheecans"
        },
        {
          "away": "Plaxicolt's 45",
          "awayMgr": "Matt Geiger",
          "awayScore": 118,
          "homeScore": 108,
          "homeMgr": "Zachary Sizemore",
          "home": "The Hulk"
        }
      ],
      "Week 8": [
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 61,
          "homeScore": 89,
          "homeMgr": "Tyler Cummings",
          "home": "Brady's Bunch"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 77,
          "homeScore": 89,
          "homeMgr": "Joseph Garton",
          "home": "The 5 Star Stunnas"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 135,
          "homeScore": 68,
          "homeMgr": "George Wright",
          "home": "Rookie Sensations"
        },
        {
          "away": "Greatest Show On Turf",
          "awayMgr": "Tyler Clay",
          "awayScore": 117,
          "homeScore": 101,
          "homeMgr": "Matt Geiger",
          "home": "Plaxicolt's 45"
        },
        {
          "away": "The Last of the Meheecans",
          "awayMgr": "Luke Rapp",
          "awayScore": 104,
          "homeScore": 122,
          "homeMgr": "Zachary Sizemore",
          "home": "The Hulk"
        }
      ],
      "Week 9": [
        {
          "away": "Brady's Bunch",
          "awayMgr": "Tyler Cummings",
          "awayScore": 98,
          "homeScore": 86,
          "homeMgr": "Joseph Garton",
          "home": "The 5 Star Stunnas"
        },
        {
          "away": "Rookie Sensations",
          "awayMgr": "George Wright",
          "awayScore": 101,
          "homeScore": 87,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "Plaxicolt's 45",
          "awayMgr": "Matt Geiger",
          "awayScore": 127,
          "homeScore": 81,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "The Hulk",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 130,
          "homeScore": 161,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "The Last of the Meheecans",
          "awayMgr": "Luke Rapp",
          "awayScore": 73,
          "homeScore": 100,
          "homeMgr": "Tyler Clay",
          "home": "Greatest Show On Turf"
        }
      ],
      "Week 10": [
        {
          "away": "Rookie Sensations",
          "awayMgr": "George Wright",
          "awayScore": 114,
          "homeScore": 88,
          "homeMgr": "Tyler Cummings",
          "home": "Brady's Bunch"
        },
        {
          "away": "The 5 Star Stunnas",
          "awayMgr": "Joseph Garton",
          "awayScore": 95,
          "homeScore": 87,
          "homeMgr": "Matt Geiger",
          "home": "Plaxicolt's 45"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 108,
          "homeScore": 112,
          "homeMgr": "Zachary Sizemore",
          "home": "The Hulk"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 96,
          "homeScore": 39,
          "homeMgr": "Luke Rapp",
          "home": "The Last of the Meheecans"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 93,
          "homeScore": 86,
          "homeMgr": "Tyler Clay",
          "home": "Greatest Show On Turf"
        }
      ],
      "Week 11": [
        {
          "away": "Brady's Bunch",
          "awayMgr": "Tyler Cummings",
          "awayScore": 66,
          "homeScore": 91,
          "homeMgr": "Matt Geiger",
          "home": "Plaxicolt's 45"
        },
        {
          "away": "The Hulk",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 76,
          "homeScore": 96,
          "homeMgr": "George Wright",
          "home": "Rookie Sensations"
        },
        {
          "away": "The Last of the Meheecans",
          "awayMgr": "Luke Rapp",
          "awayScore": 87,
          "homeScore": 79,
          "homeMgr": "Joseph Garton",
          "home": "The 5 Star Stunnas"
        },
        {
          "away": "Greatest Show On Turf",
          "awayMgr": "Tyler Clay",
          "awayScore": 87,
          "homeScore": 92,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 79,
          "homeScore": 126,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        }
      ],
      "Week 12": [
        {
          "away": "The Hulk",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 85,
          "homeScore": 99,
          "homeMgr": "Tyler Cummings",
          "home": "Brady's Bunch"
        },
        {
          "away": "Plaxicolt's 45",
          "awayMgr": "Matt Geiger",
          "awayScore": 106,
          "homeScore": 81,
          "homeMgr": "Luke Rapp",
          "home": "The Last of the Meheecans"
        },
        {
          "away": "Rookie Sensations",
          "awayMgr": "George Wright",
          "awayScore": 116,
          "homeScore": 83,
          "homeMgr": "Tyler Clay",
          "home": "Greatest Show On Turf"
        },
        {
          "away": "The 5 Star Stunnas",
          "awayMgr": "Joseph Garton",
          "awayScore": 90,
          "homeScore": 116,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 63,
          "homeScore": 134,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        }
      ]
    },
    "playoffs": {
      "round1": {
        "label": "Round 1 (Week 13)",
        "games": [
          {
            "away": "Business as Usual",
            "awayMgr": "Travis West",
            "awayScore": 126,
            "homeScore": 53,
            "homeMgr": "Zachary Sizemore",
            "home": "The Hulk"
          },
          {
            "away": "Brady's Bunch",
            "awayMgr": "Tyler Cummings",
            "awayScore": 73,
            "homeScore": 89,
            "homeMgr": "Joe Prino",
            "home": "Prino's Powerhouse"
          }
        ],
        "byes": [
          {
            "team": "Rookie Sensations",
            "pts": 84
          },
          {
            "team": "Plaxicolt's 45",
            "pts": 75
          }
        ]
      },
      "round2": {
        "label": "Round 2 (Week 14)",
        "games": [
          {
            "away": "Business as Usual",
            "awayMgr": "Travis West",
            "awayScore": 117,
            "homeScore": 120,
            "homeMgr": "George Wright",
            "home": "Rookie Sensations"
          },
          {
            "away": "Prino's Powerhouse",
            "awayMgr": "Joe Prino",
            "awayScore": 111,
            "homeScore": 93,
            "homeMgr": "Matt Geiger",
            "home": "Plaxicolt's 45"
          }
        ]
      },
      "round3": {
        "label": "Round 3 / Championship (Week 15)",
        "games": [
          {
            "away": "Prino's Powerhouse",
            "awayMgr": "Joe Prino",
            "awayScore": 100,
            "homeScore": 94,
            "homeMgr": "George Wright",
            "home": "Rookie Sensations"
          }
        ]
      },
      "thirdPlace": {
        "label": "Round 3 / 3rd Place (Week 15)",
        "games": [
          {
            "away": "Business as Usual",
            "awayMgr": "Travis West",
            "awayScore": 111,
            "homeScore": 96,
            "homeMgr": "Matt Geiger",
            "home": "Plaxicolt's 45"
          }
        ]
      }
    }
  },
  "2013": {
    "year": 2013,
    "champion": {
      "team": "Money Badgers",
      "owner": "Tyler Clay"
    },
    "second": {
      "team": "The ACLiens",
      "owner": "Luke Rapp"
    },
    "third": {
      "team": "Rookie Sensations",
      "owner": "George Wright"
    },
    "standings": [
      {
        "team": "The ACLiens",
        "owner": "Luke Rapp",
        "w": 9,
        "l": 3,
        "t": 0,
        "pct": 0.75
      },
      {
        "team": "Free Agents",
        "owner": "Zachary Hickman",
        "w": 8,
        "l": 4,
        "t": 0,
        "pct": 0.667
      },
      {
        "team": "Money Badgers",
        "owner": "Tyler Clay",
        "w": 7,
        "l": 5,
        "t": 0,
        "pct": 0.583
      },
      {
        "team": "Rookie Sensations",
        "owner": "George Wright",
        "w": 7,
        "l": 5,
        "t": 0,
        "pct": 0.583
      },
      {
        "team": "Boston TE Party",
        "owner": "Tyler Cummings",
        "w": 6,
        "l": 6,
        "t": 0,
        "pct": 0.5
      },
      {
        "team": "Prino's Powerhouse",
        "owner": "Joe Prino",
        "w": 6,
        "l": 6,
        "t": 0,
        "pct": 0.5
      },
      {
        "team": "When's Fantasy Baseball?",
        "owner": "Zachary Sizemore",
        "w": 5,
        "l": 7,
        "t": 0,
        "pct": 0.417
      },
      {
        "team": "Not Soon Enough",
        "owner": "Joseph Garton",
        "w": 5,
        "l": 7,
        "t": 0,
        "pct": 0.417
      },
      {
        "team": "Business as Usual",
        "owner": "Travis West",
        "w": 4,
        "l": 8,
        "t": 0,
        "pct": 0.333
      },
      {
        "team": "Plaxicolt's 45",
        "owner": "Matt Geiger",
        "w": 3,
        "l": 9,
        "t": 0,
        "pct": 0.25
      }
    ],
    "schedule": {
      "Week 1": [
        {
          "away": "Boston TE Party",
          "awayMgr": "Tyler Cummings",
          "awayScore": 112,
          "homeScore": 73.7,
          "homeMgr": "George Wright",
          "home": "Rookie Sensations"
        },
        {
          "away": "Plaxicolt's 45",
          "awayMgr": "Matt Geiger",
          "awayScore": 74.7,
          "homeScore": 103.5,
          "homeMgr": "Joseph Garton",
          "home": "Not Soon Enough"
        },
        {
          "away": "When's Fantasy Baseball?",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 89,
          "homeScore": 123.6,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 181,
          "homeScore": 78,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 155.1,
          "homeScore": 89.7,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        }
      ],
      "Week 2": [
        {
          "away": "Plaxicolt's 45",
          "awayMgr": "Matt Geiger",
          "awayScore": 70.5,
          "homeScore": 146.4,
          "homeMgr": "Tyler Cummings",
          "home": "Boston TE Party"
        },
        {
          "away": "Rookie Sensations",
          "awayMgr": "George Wright",
          "awayScore": 92.7,
          "homeScore": 67.9,
          "homeMgr": "Zachary Sizemore",
          "home": "When's Fantasy Baseball?"
        },
        {
          "away": "Not Soon Enough",
          "awayMgr": "Joseph Garton",
          "awayScore": 131.8,
          "homeScore": 83.4,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 132.4,
          "homeScore": 87.3,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 128.5,
          "homeScore": 92.3,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        }
      ],
      "Week 3": [
        {
          "away": "Boston TE Party",
          "awayMgr": "Tyler Cummings",
          "awayScore": 115.6,
          "homeScore": 83.5,
          "homeMgr": "Zachary Sizemore",
          "home": "When's Fantasy Baseball?"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 114.2,
          "homeScore": 73.9,
          "homeMgr": "Matt Geiger",
          "home": "Plaxicolt's 45"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 119.4,
          "homeScore": 123.8,
          "homeMgr": "George Wright",
          "home": "Rookie Sensations"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 87.8,
          "homeScore": 49.9,
          "homeMgr": "Joseph Garton",
          "home": "Not Soon Enough"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 62.5,
          "homeScore": 71.3,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        }
      ],
      "Week 4": [
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 132.5,
          "homeScore": 108.4,
          "homeMgr": "Tyler Cummings",
          "home": "Boston TE Party"
        },
        {
          "away": "When's Fantasy Baseball?",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 67.4,
          "homeScore": 124,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "Plaxicolt's 45",
          "awayMgr": "Matt Geiger",
          "awayScore": 87.7,
          "homeScore": 107.7,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "Rookie Sensations",
          "awayMgr": "George Wright",
          "awayScore": 146.2,
          "homeScore": 133.2,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "Not Soon Enough",
          "awayMgr": "Joseph Garton",
          "awayScore": 63.2,
          "homeScore": 160.2,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        }
      ],
      "Week 5": [
        {
          "away": "Boston TE Party",
          "awayMgr": "Tyler Cummings",
          "awayScore": 99.5,
          "homeScore": 69.7,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 107.6,
          "homeScore": 132.1,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 119.4,
          "homeScore": 98.6,
          "homeMgr": "Zachary Sizemore",
          "home": "When's Fantasy Baseball?"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 76.2,
          "homeScore": 119.6,
          "homeMgr": "Matt Geiger",
          "home": "Plaxicolt's 45"
        },
        {
          "away": "Not Soon Enough",
          "awayMgr": "Joseph Garton",
          "awayScore": 106.7,
          "homeScore": 109.2,
          "homeMgr": "George Wright",
          "home": "Rookie Sensations"
        }
      ],
      "Week 6": [
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 117.8,
          "homeScore": 66.7,
          "homeMgr": "Tyler Cummings",
          "home": "Boston TE Party"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 109.6,
          "homeScore": 95.1,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 91.6,
          "homeScore": 101.3,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "When's Fantasy Baseball?",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 110,
          "homeScore": 95.8,
          "homeMgr": "Joseph Garton",
          "home": "Not Soon Enough"
        },
        {
          "away": "Plaxicolt's 45",
          "awayMgr": "Matt Geiger",
          "awayScore": 71.2,
          "homeScore": 85.8,
          "homeMgr": "George Wright",
          "home": "Rookie Sensations"
        }
      ],
      "Week 7": [
        {
          "away": "Boston TE Party",
          "awayMgr": "Tyler Cummings",
          "awayScore": 87.6,
          "homeScore": 116.8,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 79.5,
          "homeScore": 77.3,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "Not Soon Enough",
          "awayMgr": "Joseph Garton",
          "awayScore": 100.3,
          "homeScore": 103.3,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "Rookie Sensations",
          "awayMgr": "George Wright",
          "awayScore": 73.7,
          "homeScore": 89.7,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        },
        {
          "away": "Plaxicolt's 45",
          "awayMgr": "Matt Geiger",
          "awayScore": 104.2,
          "homeScore": 112.2,
          "homeMgr": "Zachary Sizemore",
          "home": "When's Fantasy Baseball?"
        }
      ],
      "Week 8": [
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 101.3,
          "homeScore": 109.9,
          "homeMgr": "Tyler Cummings",
          "home": "Boston TE Party"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 82.9,
          "homeScore": 103.4,
          "homeMgr": "Joseph Garton",
          "home": "Not Soon Enough"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 118.9,
          "homeScore": 91.1,
          "homeMgr": "George Wright",
          "home": "Rookie Sensations"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 95.4,
          "homeScore": 67,
          "homeMgr": "Matt Geiger",
          "home": "Plaxicolt's 45"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 102,
          "homeScore": 74.2,
          "homeMgr": "Zachary Sizemore",
          "home": "When's Fantasy Baseball?"
        }
      ],
      "Week 9": [
        {
          "away": "Boston TE Party",
          "awayMgr": "Tyler Cummings",
          "awayScore": 123.4,
          "homeScore": 109.4,
          "homeMgr": "Joseph Garton",
          "home": "Not Soon Enough"
        },
        {
          "away": "Rookie Sensations",
          "awayMgr": "George Wright",
          "awayScore": 128,
          "homeScore": 78.7,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "Plaxicolt's 45",
          "awayMgr": "Matt Geiger",
          "awayScore": 97.5,
          "homeScore": 96.8,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "When's Fantasy Baseball?",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 73.1,
          "homeScore": 86.4,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 122,
          "homeScore": 79,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        }
      ],
      "Week 10": [
        {
          "away": "Rookie Sensations",
          "awayMgr": "George Wright",
          "awayScore": 108.4,
          "homeScore": 101.4,
          "homeMgr": "Tyler Cummings",
          "home": "Boston TE Party"
        },
        {
          "away": "Not Soon Enough",
          "awayMgr": "Joseph Garton",
          "awayScore": 83.4,
          "homeScore": 64.5,
          "homeMgr": "Matt Geiger",
          "home": "Plaxicolt's 45"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 71,
          "homeScore": 80.5,
          "homeMgr": "Zachary Sizemore",
          "home": "When's Fantasy Baseball?"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 90.7,
          "homeScore": 131.9,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 76.9,
          "homeScore": 129.2,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        }
      ],
      "Week 11": [
        {
          "away": "Boston TE Party",
          "awayMgr": "Tyler Cummings",
          "awayScore": 91.4,
          "homeScore": 149.7,
          "homeMgr": "Matt Geiger",
          "home": "Plaxicolt's 45"
        },
        {
          "away": "When's Fantasy Baseball?",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 78.7,
          "homeScore": 73.7,
          "homeMgr": "George Wright",
          "home": "Rookie Sensations"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 106.3,
          "homeScore": 126.4,
          "homeMgr": "Joseph Garton",
          "home": "Not Soon Enough"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 81.8,
          "homeScore": 86.1,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 105.8,
          "homeScore": 126.7,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        }
      ],
      "Week 12": [
        {
          "away": "When's Fantasy Baseball?",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 95.2,
          "homeScore": 83.9,
          "homeMgr": "Tyler Cummings",
          "home": "Boston TE Party"
        },
        {
          "away": "Plaxicolt's 45",
          "awayMgr": "Matt Geiger",
          "awayScore": 76.5,
          "homeScore": 136.4,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        },
        {
          "away": "Rookie Sensations",
          "awayMgr": "George Wright",
          "awayScore": 93.9,
          "homeScore": 120.5,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "Not Soon Enough",
          "awayMgr": "Joseph Garton",
          "awayScore": 81.3,
          "homeScore": 109.1,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 72.1,
          "homeScore": 34.1,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        }
      ]
    },
    "playoffs": {
      "round1": {
        "label": "Round 1 (Week 13)",
        "games": [
          {
            "away": "Boston TE Party",
            "awayMgr": "Tyler Cummings",
            "awayScore": 89,
            "homeScore": 76,
            "homeMgr": "George Wright",
            "home": "Rookie Sensations"
          },
          {
            "away": "Prino's Powerhouse",
            "awayMgr": "Joe Prino",
            "awayScore": 77.3,
            "homeScore": 100.6,
            "homeMgr": "Tyler Clay",
            "home": "Money Badgers"
          }
        ],
        "byes": [
          {
            "team": "The ACLiens",
            "pts": 139.6
          },
          {
            "team": "Free Agents",
            "pts": 90
          }
        ]
      },
      "round2": {
        "label": "Round 2 (Week 14)",
        "games": [
          {
            "away": "Boston TE Party",
            "awayMgr": "Tyler Cummings",
            "awayScore": 77.3,
            "homeScore": 106.6,
            "homeMgr": "Luke Rapp",
            "home": "The ACLiens"
          },
          {
            "away": "Money Badgers",
            "awayMgr": "Tyler Clay",
            "awayScore": 121.3,
            "homeScore": 46.8,
            "homeMgr": "Zachary Hickman",
            "home": "Free Agents"
          }
        ]
      },
      "round3": {
        "label": "Round 3 / Championship (Week 15)",
        "games": [
          {
            "away": "Money Badgers",
            "awayMgr": "Tyler Clay",
            "awayScore": 157.7,
            "homeScore": 100.9,
            "homeMgr": "Luke Rapp",
            "home": "The ACLiens"
          }
        ]
      },
      "thirdPlace": {
        "label": "Round 3 / 3rd Place (Week 15)",
        "games": [
          {
            "away": "Boston TE Party",
            "awayMgr": "Tyler Cummings",
            "awayScore": 93,
            "homeScore": 63,
            "homeMgr": "Zachary Hickman",
            "home": "Free Agents"
          }
        ]
      }
    }
  },
  "2014": {
    "year": 2014,
    "champion": {
      "team": "The ACLiens",
      "owner": "Luke Rapp"
    },
    "second": {
      "team": "Commish's Crusaders",
      "owner": "Tyler Cummings"
    },
    "third": {
      "team": "The Arabian Stallions",
      "owner": "Walid Salameh"
    },
    "standings": [
      {
        "team": "The ACLiens",
        "owner": "Luke Rapp",
        "w": 9,
        "l": 1,
        "t": 0,
        "pct": 0.9
      },
      {
        "team": "The Arabian Stallions",
        "owner": "Walid Salameh",
        "w": 7,
        "l": 3,
        "t": 0,
        "pct": 0.7
      },
      {
        "team": "When's Fantasy Baseball?",
        "owner": "Zachary Sizemore",
        "w": 7,
        "l": 3,
        "t": 0,
        "pct": 0.7
      },
      {
        "team": "Route 2 Ravers",
        "owner": "Joseph Garton",
        "w": 6,
        "l": 4,
        "t": 0,
        "pct": 0.6
      },
      {
        "team": "Free Agents",
        "owner": "Zachary Hickman",
        "w": 6,
        "l": 4,
        "t": 0,
        "pct": 0.6
      },
      {
        "team": "Commish's Crusaders",
        "owner": "Tyler Cummings",
        "w": 5,
        "l": 5,
        "t": 0,
        "pct": 0.5
      },
      {
        "team": "Winning Is My Forte",
        "owner": "Aaron Burns",
        "w": 5,
        "l": 5,
        "t": 0,
        "pct": 0.5
      },
      {
        "team": "Money Badgers",
        "owner": "Tyler Clay",
        "w": 4,
        "l": 6,
        "t": 0,
        "pct": 0.4
      },
      {
        "team": "George's Gangstas",
        "owner": "George Wright",
        "w": 4,
        "l": 6,
        "t": 0,
        "pct": 0.4
      },
      {
        "team": "Prino's Powerhouse",
        "owner": "Joe Prino",
        "w": 4,
        "l": 6,
        "t": 0,
        "pct": 0.4
      },
      {
        "team": "Business as Usual",
        "owner": "Travis West",
        "w": 2,
        "l": 8,
        "t": 0,
        "pct": 0.2
      },
      {
        "team": "Plaxicolt's 45",
        "owner": "Matt Geiger",
        "w": 1,
        "l": 9,
        "t": 0,
        "pct": 0.1
      }
    ],
    "schedule": {
      "Week 1": [
        {
          "away": "When's Fantasy Baseball?",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 95.5,
          "homeScore": 107,
          "homeMgr": "Tyler Cummings",
          "home": "Commish's Crusaders"
        },
        {
          "away": "Plaxicolt's 45",
          "awayMgr": "Matt Geiger",
          "awayScore": 138.3,
          "homeScore": 116.3,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 124.1,
          "homeScore": 64.6,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "Winning Is My Forte",
          "awayMgr": "Aaron Burns",
          "awayScore": 93.1,
          "homeScore": 63,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 104.4,
          "homeScore": 77.3,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 74.5,
          "homeScore": 72.7,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        }
      ],
      "Week 2": [
        {
          "away": "Commish's Crusaders",
          "awayMgr": "Tyler Cummings",
          "awayScore": 127.2,
          "homeScore": 113.1,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "Route 2 Ravers",
          "awayMgr": "Joseph Garton",
          "awayScore": 91.3,
          "homeScore": 63.3,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 106.5,
          "homeScore": 82.9,
          "homeMgr": "Aaron Burns",
          "home": "Winning Is My Forte"
        },
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 102.3,
          "homeScore": 58.1,
          "homeMgr": "Matt Geiger",
          "home": "Plaxicolt's 45"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 73.3,
          "homeScore": 76.8,
          "homeMgr": "Zachary Sizemore",
          "home": "When's Fantasy Baseball?"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 71.7,
          "homeScore": 104.2,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        }
      ],
      "Week 3": [
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 100.2,
          "homeScore": 95.2,
          "homeMgr": "Tyler Cummings",
          "home": "Commish's Crusaders"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 102.7,
          "homeScore": 58.9,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 70.7,
          "homeScore": 62,
          "homeMgr": "Aaron Burns",
          "home": "Winning Is My Forte"
        },
        {
          "away": "Plaxicolt's 45",
          "awayMgr": "Matt Geiger",
          "awayScore": 93.9,
          "homeScore": 118,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 86,
          "homeScore": 106.4,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 58.8,
          "homeScore": 78.2,
          "homeMgr": "Zachary Sizemore",
          "home": "When's Fantasy Baseball?"
        }
      ],
      "Week 4": [
        {
          "away": "Commish's Crusaders",
          "awayMgr": "Tyler Cummings",
          "awayScore": 87.2,
          "homeScore": 119.6,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 98.9,
          "homeScore": 91.1,
          "homeMgr": "Aaron Burns",
          "home": "Winning Is My Forte"
        },
        {
          "away": "When's Fantasy Baseball?",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 115.5,
          "homeScore": 105.9,
          "homeMgr": "Matt Geiger",
          "home": "Plaxicolt's 45"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 103.9,
          "homeScore": 72.7,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 59.3,
          "homeScore": 109.3,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 84.3,
          "homeScore": 121.4,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        }
      ],
      "Week 5": [
        {
          "away": "Plaxicolt's 45",
          "awayMgr": "Matt Geiger",
          "awayScore": 56.5,
          "homeScore": 145.1,
          "homeMgr": "Tyler Cummings",
          "home": "Commish's Crusaders"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 80.2,
          "homeScore": 120.1,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "Winning Is My Forte",
          "awayMgr": "Aaron Burns",
          "awayScore": 134.4,
          "homeScore": 87.7,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 76.4,
          "homeScore": 58.6,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "Route 2 Ravers",
          "awayMgr": "Joseph Garton",
          "awayScore": 97,
          "homeScore": 91.6,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 108,
          "homeScore": 90.1,
          "homeMgr": "Zachary Sizemore",
          "home": "When's Fantasy Baseball?"
        }
      ],
      "Week 6": [
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 96.9,
          "homeScore": 83.1,
          "homeMgr": "Tyler Cummings",
          "home": "Commish's Crusaders"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 74,
          "homeScore": 78.9,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 139.9,
          "homeScore": 102.8,
          "homeMgr": "Matt Geiger",
          "home": "Plaxicolt's 45"
        },
        {
          "away": "Route 2 Ravers",
          "awayMgr": "Joseph Garton",
          "awayScore": 132.1,
          "homeScore": 150.2,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 112,
          "homeScore": 101.3,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "When's Fantasy Baseball?",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 55.5,
          "homeScore": 122.5,
          "homeMgr": "Aaron Burns",
          "home": "Winning Is My Forte"
        }
      ],
      "Week 7": [
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 73.1,
          "homeScore": 81.3,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        },
        {
          "away": "Plaxicolt's 45",
          "awayMgr": "Matt Geiger",
          "awayScore": 56.4,
          "homeScore": 77.1,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers"
        },
        {
          "away": "When's Fantasy Baseball?",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 110.5,
          "homeScore": 92.8,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "Commish's Crusaders",
          "awayMgr": "Tyler Cummings",
          "awayScore": 113,
          "homeScore": 105.2,
          "homeMgr": "Aaron Burns",
          "home": "Winning Is My Forte"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 96.9,
          "homeScore": 78.5,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 102.4,
          "homeScore": 86.1,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        }
      ],
      "Week 8": [
        {
          "away": "Route 2 Ravers",
          "awayMgr": "Joseph Garton",
          "awayScore": 99,
          "homeScore": 81.2,
          "homeMgr": "Tyler Cummings",
          "home": "Commish's Crusaders"
        },
        {
          "away": "Winning Is My Forte",
          "awayMgr": "Aaron Burns",
          "awayScore": 114.5,
          "homeScore": 130.4,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 99.4,
          "homeScore": 109.6,
          "homeMgr": "Zachary Sizemore",
          "home": "When's Fantasy Baseball?"
        },
        {
          "away": "Plaxicolt's 45",
          "awayMgr": "Matt Geiger",
          "awayScore": 55.3,
          "homeScore": 86.3,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 145.4,
          "homeScore": 102.4,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 120.1,
          "homeScore": 116.1,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        }
      ],
      "Week 9": [
        {
          "away": "Commish's Crusaders",
          "awayMgr": "Tyler Cummings",
          "awayScore": 70.3,
          "homeScore": 88,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 99.2,
          "homeScore": 90.5,
          "homeMgr": "Matt Geiger",
          "home": "Plaxicolt's 45"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 114.9,
          "homeScore": 66.8,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "Winning Is My Forte",
          "awayMgr": "Aaron Burns",
          "awayScore": 88.5,
          "homeScore": 84.1,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 76.9,
          "homeScore": 94.1,
          "homeMgr": "Zachary Sizemore",
          "home": "When's Fantasy Baseball?"
        },
        {
          "away": "Route 2 Ravers",
          "awayMgr": "Joseph Garton",
          "awayScore": 120.4,
          "homeScore": 96.3,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        }
      ],
      "Week 10": [
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 71.3,
          "homeScore": 118.1,
          "homeMgr": "Tyler Cummings",
          "home": "Commish's Crusaders"
        },
        {
          "away": "Route 2 Ravers",
          "awayMgr": "Joseph Garton",
          "awayScore": 91.7,
          "homeScore": 97.5,
          "homeMgr": "Zachary Sizemore",
          "home": "When's Fantasy Baseball?"
        },
        {
          "away": "Winning Is My Forte",
          "awayMgr": "Aaron Burns",
          "awayScore": 100.5,
          "homeScore": 58.6,
          "homeMgr": "Matt Geiger",
          "home": "Plaxicolt's 45"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 97.9,
          "homeScore": 86.2,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 82.5,
          "homeScore": 129.4,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 154.2,
          "homeScore": 136.5,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        }
      ]
    },
    "playoffs": {
      "round1": {
        "label": "Round 1 (Weeks 11-12)",
        "games": [
          {
            "away": "Route 2 Ravers",
            "awayMgr": "Joseph Garton",
            "awayScore": 179.5,
            "homeScore": 154.4,
            "homeMgr": "Zachary Hickman",
            "home": "Free Agents"
          },
          {
            "away": "Commish's Crusaders",
            "awayMgr": "Tyler Cummings",
            "awayScore": 248.2,
            "homeScore": 196.5,
            "homeMgr": "Zachary Sizemore",
            "home": "When's Fantasy Baseball?"
          }
        ],
        "byes": [
          {
            "team": "The ACLiens",
            "pts": 164.7
          },
          {
            "team": "The Arabian Stallions",
            "pts": 159.5
          }
        ]
      },
      "round2": {
        "label": "Round 2 (Weeks 13-14)",
        "games": [
          {
            "away": "Route 2 Ravers",
            "awayMgr": "Joseph Garton",
            "awayScore": 174.4,
            "homeScore": 216,
            "homeMgr": "Luke Rapp",
            "home": "The ACLiens"
          },
          {
            "away": "Commish's Crusaders",
            "awayMgr": "Tyler Cummings",
            "awayScore": 282.3,
            "homeScore": 208.3,
            "homeMgr": "Walid Salameh",
            "home": "The Arabian Stallions"
          }
        ]
      },
      "round3": {
        "label": "Round 3 / Championship (Weeks 15-16)",
        "games": [
          {
            "away": "Commish's Crusaders",
            "awayMgr": "Tyler Cummings",
            "awayScore": 216.1,
            "homeScore": 236.9,
            "homeMgr": "Luke Rapp",
            "home": "The ACLiens"
          }
        ]
      },
      "thirdPlace": {
        "label": "Round 3 / 3rd Place (Weeks 15-16)",
        "games": [
          {
            "away": "Route 2 Ravers",
            "awayMgr": "Joseph Garton",
            "awayScore": 130.6,
            "homeScore": 204.4,
            "homeMgr": "Walid Salameh",
            "home": "The Arabian Stallions"
          }
        ]
      }
    }
  },
  "2015": {
    "year": 2015,
    "champion": {
      "team": "Prino's Powerhouse",
      "owner": "Joe Prino"
    },
    "second": {
      "team": "George's Gangstas",
      "owner": "George Wright"
    },
    "third": {
      "team": "Plaxicolt's 45",
      "owner": "Matt Geiger"
    },
    "standings": [
      {
        "team": "Prino's Powerhouse",
        "owner": "Joe Prino",
        "w": 9,
        "l": 4,
        "t": 0,
        "pct": 0.692
      },
      {
        "team": "I like to Cha Cha",
        "owner": "Luke Rapp",
        "w": 9,
        "l": 4,
        "t": 0,
        "pct": 0.692
      },
      {
        "team": "Plaxicolt's 45",
        "owner": "Matt Geiger",
        "w": 9,
        "l": 4,
        "t": 0,
        "pct": 0.692
      },
      {
        "team": "George's Gangstas",
        "owner": "George Wright",
        "w": 8,
        "l": 5,
        "t": 0,
        "pct": 0.615
      },
      {
        "team": "That's a Baaaaaaad Man",
        "owner": "Joseph Garton",
        "w": 7,
        "l": 6,
        "t": 0,
        "pct": 0.538
      },
      {
        "team": "Commish's Crusaders",
        "owner": "Tyler Cummings",
        "w": 6,
        "l": 7,
        "t": 0,
        "pct": 0.462
      },
      {
        "team": "Winning Is My Forte",
        "owner": "Aaron Burns",
        "w": 6,
        "l": 7,
        "t": 0,
        "pct": 0.462
      },
      {
        "team": "The Arabian Stallions",
        "owner": "Walid Salameh",
        "w": 6,
        "l": 7,
        "t": 0,
        "pct": 0.462
      },
      {
        "team": "Business as Usual",
        "owner": "Travis West",
        "w": 6,
        "l": 7,
        "t": 0,
        "pct": 0.462
      },
      {
        "team": "Money Badgers",
        "owner": "Tyler Clay",
        "w": 5,
        "l": 8,
        "t": 0,
        "pct": 0.385
      },
      {
        "team": "Free Agents",
        "owner": "Zachary Hickman",
        "w": 4,
        "l": 9,
        "t": 0,
        "pct": 0.308
      },
      {
        "team": "When's Fantasy Baseball?",
        "owner": "Zachary Sizemore",
        "w": 3,
        "l": 10,
        "t": 0,
        "pct": 0.231
      }
    ],
    "schedule": {
      "Week 1": [
        {
          "away": "When's Fantasy Baseball?",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 79.2,
          "homeScore": 96.4,
          "homeMgr": "Joseph Garton",
          "home": "That's a Baaaaaaad Man"
        },
        {
          "away": "I like to Cha Cha",
          "awayMgr": "Luke Rapp",
          "awayScore": 79,
          "homeScore": 118.3,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 95.8,
          "homeScore": 101.1,
          "homeMgr": "Tyler Cummings",
          "home": "Commish's Crusaders"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 88.7,
          "homeScore": 85.7,
          "homeMgr": "Aaron Burns",
          "home": "Winning Is My Forte"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 127.6,
          "homeScore": 100.8,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "Plaxicolt's 45",
          "awayMgr": "Matt Geiger",
          "awayScore": 105.5,
          "homeScore": 103.6,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        }
      ],
      "Week 2": [
        {
          "away": "I like to Cha Cha",
          "awayMgr": "Luke Rapp",
          "awayScore": 91.4,
          "homeScore": 73.2,
          "homeMgr": "Zachary Sizemore",
          "home": "When's Fantasy Baseball?"
        },
        {
          "away": "That's a Baaaaaaad Man",
          "awayMgr": "Joseph Garton",
          "awayScore": 111.5,
          "homeScore": 97.5,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 52.6,
          "homeScore": 92.6,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "Commish's Crusaders",
          "awayMgr": "Tyler Cummings",
          "awayScore": 67.2,
          "homeScore": 114.1,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "Winning Is My Forte",
          "awayMgr": "Aaron Burns",
          "awayScore": 82.2,
          "homeScore": 106.4,
          "homeMgr": "Matt Geiger",
          "home": "Plaxicolt's 45"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 89.6,
          "homeScore": 78.4,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        }
      ],
      "Week 3": [
        {
          "away": "When's Fantasy Baseball?",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 106.9,
          "homeScore": 101.7,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 106.8,
          "homeScore": 70.9,
          "homeMgr": "Luke Rapp",
          "home": "I like to Cha Cha"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 68.8,
          "homeScore": 142.5,
          "homeMgr": "Joseph Garton",
          "home": "That's a Baaaaaaad Man"
        },
        {
          "away": "Plaxicolt's 45",
          "awayMgr": "Matt Geiger",
          "awayScore": 168.7,
          "homeScore": 154.7,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 81.1,
          "homeScore": 82.3,
          "homeMgr": "Tyler Cummings",
          "home": "Commish's Crusaders"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 79.3,
          "homeScore": 106.9,
          "homeMgr": "Aaron Burns",
          "home": "Winning Is My Forte"
        }
      ],
      "Week 4": [
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 87.1,
          "homeScore": 102.1,
          "homeMgr": "Zachary Sizemore",
          "home": "When's Fantasy Baseball?"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 100.3,
          "homeScore": 65.6,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "I like to Cha Cha",
          "awayMgr": "Luke Rapp",
          "awayScore": 105.9,
          "homeScore": 80.2,
          "homeMgr": "Matt Geiger",
          "home": "Plaxicolt's 45"
        },
        {
          "away": "That's a Baaaaaaad Man",
          "awayMgr": "Joseph Garton",
          "awayScore": 80,
          "homeScore": 78.4,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 63,
          "homeScore": 80,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "Commish's Crusaders",
          "awayMgr": "Tyler Cummings",
          "awayScore": 66.3,
          "homeScore": 103.6,
          "homeMgr": "Aaron Burns",
          "home": "Winning Is My Forte"
        }
      ],
      "Week 5": [
        {
          "away": "When's Fantasy Baseball?",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 84.9,
          "homeScore": 105.1,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "Plaxicolt's 45",
          "awayMgr": "Matt Geiger",
          "awayScore": 97.8,
          "homeScore": 114.1,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 62.3,
          "homeScore": 119.3,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 75.2,
          "homeScore": 88.6,
          "homeMgr": "Luke Rapp",
          "home": "I like to Cha Cha"
        },
        {
          "away": "Winning Is My Forte",
          "awayMgr": "Aaron Burns",
          "awayScore": 138.4,
          "homeScore": 106.3,
          "homeMgr": "Joseph Garton",
          "home": "That's a Baaaaaaad Man"
        },
        {
          "away": "Commish's Crusaders",
          "awayMgr": "Tyler Cummings",
          "awayScore": 48.8,
          "homeScore": 113.7,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        }
      ],
      "Week 6": [
        {
          "away": "Plaxicolt's 45",
          "awayMgr": "Matt Geiger",
          "awayScore": 97.8,
          "homeScore": 78.7,
          "homeMgr": "Zachary Sizemore",
          "home": "When's Fantasy Baseball?"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 105.3,
          "homeScore": 115.7,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 92,
          "homeScore": 106.5,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 133.2,
          "homeScore": 82.5,
          "homeMgr": "Aaron Burns",
          "home": "Winning Is My Forte"
        },
        {
          "away": "I like to Cha Cha",
          "awayMgr": "Luke Rapp",
          "awayScore": 115.1,
          "homeScore": 62.5,
          "homeMgr": "Tyler Cummings",
          "home": "Commish's Crusaders"
        },
        {
          "away": "That's a Baaaaaaad Man",
          "awayMgr": "Joseph Garton",
          "awayScore": 103.5,
          "homeScore": 85.9,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        }
      ],
      "Week 7": [
        {
          "away": "When's Fantasy Baseball?",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 74.9,
          "homeScore": 75.1,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 83.6,
          "homeScore": 94.7,
          "homeMgr": "Matt Geiger",
          "home": "Plaxicolt's 45"
        },
        {
          "away": "Winning Is My Forte",
          "awayMgr": "Aaron Burns",
          "awayScore": 60.5,
          "homeScore": 118.2,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "Commish's Crusaders",
          "awayMgr": "Tyler Cummings",
          "awayScore": 101.2,
          "homeScore": 102.3,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 129.2,
          "homeScore": 127.4,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "That's a Baaaaaaad Man",
          "awayMgr": "Joseph Garton",
          "awayScore": 113.6,
          "homeScore": 88.9,
          "homeMgr": "Luke Rapp",
          "home": "I like to Cha Cha"
        }
      ],
      "Week 8": [
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 118.9,
          "homeScore": 83.9,
          "homeMgr": "Zachary Sizemore",
          "home": "When's Fantasy Baseball?"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 103.7,
          "homeScore": 145.4,
          "homeMgr": "Aaron Burns",
          "home": "Winning Is My Forte"
        },
        {
          "away": "Plaxicolt's 45",
          "awayMgr": "Matt Geiger",
          "awayScore": 104.2,
          "homeScore": 100.7,
          "homeMgr": "Tyler Cummings",
          "home": "Commish's Crusaders"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 73.3,
          "homeScore": 122.2,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 125,
          "homeScore": 58.8,
          "homeMgr": "Joseph Garton",
          "home": "That's a Baaaaaaad Man"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 88.1,
          "homeScore": 106.8,
          "homeMgr": "Luke Rapp",
          "home": "I like to Cha Cha"
        }
      ],
      "Week 9": [
        {
          "away": "When's Fantasy Baseball?",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 77.1,
          "homeScore": 111.8,
          "homeMgr": "Aaron Burns",
          "home": "Winning Is My Forte"
        },
        {
          "away": "Commish's Crusaders",
          "awayMgr": "Tyler Cummings",
          "awayScore": 106.9,
          "homeScore": 91.5,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 155.6,
          "homeScore": 77.6,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "That's a Baaaaaaad Man",
          "awayMgr": "Joseph Garton",
          "awayScore": 95.1,
          "homeScore": 124.9,
          "homeMgr": "Matt Geiger",
          "home": "Plaxicolt's 45"
        },
        {
          "away": "I like to Cha Cha",
          "awayMgr": "Luke Rapp",
          "awayScore": 96.5,
          "homeScore": 117.2,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 92,
          "homeScore": 113.7,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        }
      ],
      "Week 10": [
        {
          "away": "Commish's Crusaders",
          "awayMgr": "Tyler Cummings",
          "awayScore": 104.1,
          "homeScore": 22.1,
          "homeMgr": "Zachary Sizemore",
          "home": "When's Fantasy Baseball?"
        },
        {
          "away": "Winning Is My Forte",
          "awayMgr": "Aaron Burns",
          "awayScore": 109.9,
          "homeScore": 74.5,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 125.6,
          "homeScore": 85.2,
          "homeMgr": "Joseph Garton",
          "home": "That's a Baaaaaaad Man"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 83.4,
          "homeScore": 86.2,
          "homeMgr": "Luke Rapp",
          "home": "I like to Cha Cha"
        },
        {
          "away": "Plaxicolt's 45",
          "awayMgr": "Matt Geiger",
          "awayScore": 92.5,
          "homeScore": 117.2,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 87.7,
          "homeScore": 80,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        }
      ],
      "Week 11": [
        {
          "away": "When's Fantasy Baseball?",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 82.4,
          "homeScore": 97.9,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "That's a Baaaaaaad Man",
          "awayMgr": "Joseph Garton",
          "awayScore": 87.3,
          "homeScore": 83.2,
          "homeMgr": "Tyler Cummings",
          "home": "Commish's Crusaders"
        },
        {
          "away": "I like to Cha Cha",
          "awayMgr": "Luke Rapp",
          "awayScore": 60.9,
          "homeScore": 49.3,
          "homeMgr": "Aaron Burns",
          "home": "Winning Is My Forte"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 63.8,
          "homeScore": 68.8,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 90.2,
          "homeScore": 116.8,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 71.4,
          "homeScore": 67.7,
          "homeMgr": "Matt Geiger",
          "home": "Plaxicolt's 45"
        }
      ],
      "Week 12": [
        {
          "away": "That's a Baaaaaaad Man",
          "awayMgr": "Joseph Garton",
          "awayScore": 65,
          "homeScore": 122.8,
          "homeMgr": "Zachary Sizemore",
          "home": "When's Fantasy Baseball?"
        },
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 59.2,
          "homeScore": 78,
          "homeMgr": "Luke Rapp",
          "home": "I like to Cha Cha"
        },
        {
          "away": "Commish's Crusaders",
          "awayMgr": "Tyler Cummings",
          "awayScore": 87.8,
          "homeScore": 80.9,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "Winning Is My Forte",
          "awayMgr": "Aaron Burns",
          "awayScore": 68.4,
          "homeScore": 94.6,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 79.7,
          "homeScore": 118.9,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 104.3,
          "homeScore": 122.8,
          "homeMgr": "Matt Geiger",
          "home": "Plaxicolt's 45"
        }
      ],
      "Week 13": [
        {
          "away": "When's Fantasy Baseball?",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 85.6,
          "homeScore": 123.8,
          "homeMgr": "Luke Rapp",
          "home": "I like to Cha Cha"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 107.6,
          "homeScore": 106.4,
          "homeMgr": "Joseph Garton",
          "home": "That's a Baaaaaaad Man"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 86.2,
          "homeScore": 85.8,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 68.7,
          "homeScore": 117.5,
          "homeMgr": "Tyler Cummings",
          "home": "Commish's Crusaders"
        },
        {
          "away": "Plaxicolt's 45",
          "awayMgr": "Matt Geiger",
          "awayScore": 125.7,
          "homeScore": 125.1,
          "homeMgr": "Aaron Burns",
          "home": "Winning Is My Forte"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 77.3,
          "homeScore": 70.2,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        }
      ]
    },
    "playoffs": {
      "round1": {
        "label": "Round 1 (Week 14)",
        "games": [
          {
            "away": "That's a Baaaaaaad Man",
            "awayMgr": "Joseph Garton",
            "awayScore": 65.8,
            "homeScore": 95.2,
            "homeMgr": "George Wright",
            "home": "George's Gangstas"
          },
          {
            "away": "The Arabian Stallions",
            "awayMgr": "Walid Salameh",
            "awayScore": 72.1,
            "homeScore": 75.1,
            "homeMgr": "Luke Rapp",
            "home": "I like to Cha Cha"
          }
        ],
        "byes": [
          {
            "team": "Plaxicolt's 45",
            "pts": 101.1
          },
          {
            "team": "Prino's Powerhouse",
            "pts": 112.8
          }
        ]
      },
      "round2": {
        "label": "Round 2 (Week 15)",
        "games": [
          {
            "away": "George's Gangstas",
            "awayMgr": "George Wright",
            "awayScore": 137.4,
            "homeScore": 106.2,
            "homeMgr": "Matt Geiger",
            "home": "Plaxicolt's 45"
          },
          {
            "away": "I like to Cha Cha",
            "awayMgr": "Luke Rapp",
            "awayScore": 71.7,
            "homeScore": 95.2,
            "homeMgr": "Joe Prino",
            "home": "Prino's Powerhouse"
          }
        ]
      },
      "round3": {
        "label": "Round 3 / Championship (Week 16)",
        "games": [
          {
            "away": "George's Gangstas",
            "awayMgr": "George Wright",
            "awayScore": 82.3,
            "homeScore": 124,
            "homeMgr": "Joe Prino",
            "home": "Prino's Powerhouse"
          }
        ]
      },
      "thirdPlace": {
        "label": "Round 3 / 3rd Place (Week 16)",
        "games": [
          {
            "away": "I like to Cha Cha",
            "awayMgr": "Luke Rapp",
            "awayScore": 90.9,
            "homeScore": 140.4,
            "homeMgr": "Matt Geiger",
            "home": "Plaxicolt's 45"
          }
        ]
      }
    }
  },
  "2016": {
    "year": 2016,
    "champion": {
      "team": "The ACLiens",
      "owner": "Luke Rapp"
    },
    "second": {
      "team": "King of the NARPS",
      "owner": "Zachary Sizemore"
    },
    "third": {
      "team": "The Arabian Stallions",
      "owner": "Walid Salameh"
    },
    "standings": [
      {
        "team": "The ACLiens",
        "owner": "Luke Rapp",
        "w": 8,
        "l": 5,
        "t": 0,
        "pct": 0.615
      },
      {
        "team": "The Arabian Stallions",
        "owner": "Walid Salameh",
        "w": 8,
        "l": 5,
        "t": 0,
        "pct": 0.615
      },
      {
        "team": "Huntington Heroes",
        "owner": "Tyler Cummings",
        "w": 8,
        "l": 5,
        "t": 0,
        "pct": 0.615
      },
      {
        "team": "Free Agents",
        "owner": "Zachary Hickman",
        "w": 8,
        "l": 5,
        "t": 0,
        "pct": 0.615
      },
      {
        "team": "King of the NARPS",
        "owner": "Zachary Sizemore",
        "w": 8,
        "l": 5,
        "t": 0,
        "pct": 0.615
      },
      {
        "team": "Money Badgers",
        "owner": "Tyler Clay",
        "w": 7,
        "l": 6,
        "t": 0,
        "pct": 0.538
      },
      {
        "team": "Business as Usual",
        "owner": "Travis West",
        "w": 7,
        "l": 6,
        "t": 0,
        "pct": 0.538
      },
      {
        "team": "That's a Baaaaaaad Man",
        "owner": "Joseph Garton",
        "w": 6,
        "l": 7,
        "t": 0,
        "pct": 0.462
      },
      {
        "team": "Plaxicolt's 45",
        "owner": "Matt Geiger",
        "w": 5,
        "l": 8,
        "t": 0,
        "pct": 0.385
      },
      {
        "team": "Winning Is My Forte",
        "owner": "Aaron Burns",
        "w": 5,
        "l": 8,
        "t": 0,
        "pct": 0.385
      },
      {
        "team": "George's Gangstas",
        "owner": "George Wright",
        "w": 4,
        "l": 9,
        "t": 0,
        "pct": 0.308
      },
      {
        "team": "Prino's Powerhouse",
        "owner": "Joe Prino",
        "w": 4,
        "l": 9,
        "t": 0,
        "pct": 0.308
      }
    ],
    "schedule": {
      "Week 1": [
        {
          "away": "King of the NARPS",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 121.8,
          "homeScore": 85,
          "homeMgr": "Joseph Garton",
          "home": "That's a Baaaaaaad Man"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 134.5,
          "homeScore": 121.8,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 109.6,
          "homeScore": 123.5,
          "homeMgr": "Tyler Cummings",
          "home": "Huntington Heroes"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 61.4,
          "homeScore": 69.7,
          "homeMgr": "Aaron Burns",
          "home": "Winning Is My Forte"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 79.8,
          "homeScore": 113.5,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "Plaxicolt's 45",
          "awayMgr": "Matt Geiger",
          "awayScore": 104.6,
          "homeScore": 107.6,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        }
      ],
      "Week 2": [
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 106.3,
          "homeScore": 68.9,
          "homeMgr": "Zachary Sizemore",
          "home": "King of the NARPS"
        },
        {
          "away": "That's a Baaaaaaad Man",
          "awayMgr": "Joseph Garton",
          "awayScore": 118,
          "homeScore": 103,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 82.3,
          "homeScore": 83.3,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "Huntington Heroes",
          "awayMgr": "Tyler Cummings",
          "awayScore": 117.9,
          "homeScore": 90.4,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "Winning Is My Forte",
          "awayMgr": "Aaron Burns",
          "awayScore": 81.7,
          "homeScore": 90.4,
          "homeMgr": "Matt Geiger",
          "home": "Plaxicolt's 45"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 109.1,
          "homeScore": 71.9,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        }
      ],
      "Week 3": [
        {
          "away": "King of the NARPS",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 126.4,
          "homeScore": 101.8,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 88,
          "homeScore": 98.2,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 80.7,
          "homeScore": 81.7,
          "homeMgr": "Joseph Garton",
          "home": "That's a Baaaaaaad Man"
        },
        {
          "away": "Plaxicolt's 45",
          "awayMgr": "Matt Geiger",
          "awayScore": 64.2,
          "homeScore": 85.3,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 112.6,
          "homeScore": 77.8,
          "homeMgr": "Tyler Cummings",
          "home": "Huntington Heroes"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 82.4,
          "homeScore": 110.1,
          "homeMgr": "Aaron Burns",
          "home": "Winning Is My Forte"
        }
      ],
      "Week 4": [
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 68.4,
          "homeScore": 67.4,
          "homeMgr": "Zachary Sizemore",
          "home": "King of the NARPS"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 74.3,
          "homeScore": 92.8,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 73.7,
          "homeScore": 119.8,
          "homeMgr": "Matt Geiger",
          "home": "Plaxicolt's 45"
        },
        {
          "away": "That's a Baaaaaaad Man",
          "awayMgr": "Joseph Garton",
          "awayScore": 93.3,
          "homeScore": 86.4,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 87,
          "homeScore": 93,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "Huntington Heroes",
          "awayMgr": "Tyler Cummings",
          "awayScore": 106.9,
          "homeScore": 106.1,
          "homeMgr": "Aaron Burns",
          "home": "Winning Is My Forte"
        }
      ],
      "Week 5": [
        {
          "away": "King of the NARPS",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 134.3,
          "homeScore": 102.7,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "Plaxicolt's 45",
          "awayMgr": "Matt Geiger",
          "awayScore": 68.7,
          "homeScore": 53.5,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 65.8,
          "homeScore": 83.2,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 83.1,
          "homeScore": 123.5,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        },
        {
          "away": "Winning Is My Forte",
          "awayMgr": "Aaron Burns",
          "awayScore": 129.5,
          "homeScore": 94.6,
          "homeMgr": "Joseph Garton",
          "home": "That's a Baaaaaaad Man"
        },
        {
          "away": "Huntington Heroes",
          "awayMgr": "Tyler Cummings",
          "awayScore": 101.6,
          "homeScore": 104.8,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        }
      ],
      "Week 6": [
        {
          "away": "Plaxicolt's 45",
          "awayMgr": "Matt Geiger",
          "awayScore": 84.8,
          "homeScore": 117.2,
          "homeMgr": "Zachary Sizemore",
          "home": "King of the NARPS"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 85.3,
          "homeScore": 44.8,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 77.3,
          "homeScore": 81.6,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 107.6,
          "homeScore": 101.2,
          "homeMgr": "Aaron Burns",
          "home": "Winning Is My Forte"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 128.4,
          "homeScore": 86.6,
          "homeMgr": "Tyler Cummings",
          "home": "Huntington Heroes"
        },
        {
          "away": "That's a Baaaaaaad Man",
          "awayMgr": "Joseph Garton",
          "awayScore": 95.6,
          "homeScore": 73.4,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        }
      ],
      "Week 7": [
        {
          "away": "King of the NARPS",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 102.7,
          "homeScore": 92.5,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 68.4,
          "homeScore": 96.2,
          "homeMgr": "Matt Geiger",
          "home": "Plaxicolt's 45"
        },
        {
          "away": "Winning Is My Forte",
          "awayMgr": "Aaron Burns",
          "awayScore": 134.8,
          "homeScore": 99.7,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "Huntington Heroes",
          "awayMgr": "Tyler Cummings",
          "awayScore": 94.8,
          "homeScore": 94,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 108.6,
          "homeScore": 90.5,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "That's a Baaaaaaad Man",
          "awayMgr": "Joseph Garton",
          "awayScore": 87.4,
          "homeScore": 116.5,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        }
      ],
      "Week 8": [
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 104.2,
          "homeScore": 93.5,
          "homeMgr": "Zachary Sizemore",
          "home": "King of the NARPS"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 94,
          "homeScore": 92.1,
          "homeMgr": "Aaron Burns",
          "home": "Winning Is My Forte"
        },
        {
          "away": "Plaxicolt's 45",
          "awayMgr": "Matt Geiger",
          "awayScore": 78.1,
          "homeScore": 78.7,
          "homeMgr": "Tyler Cummings",
          "home": "Huntington Heroes"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 83.4,
          "homeScore": 108.7,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 127.5,
          "homeScore": 73.8,
          "homeMgr": "Joseph Garton",
          "home": "That's a Baaaaaaad Man"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 110.8,
          "homeScore": 89.4,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        }
      ],
      "Week 9": [
        {
          "away": "King of the NARPS",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 127.1,
          "homeScore": 125.9,
          "homeMgr": "Aaron Burns",
          "home": "Winning Is My Forte"
        },
        {
          "away": "Huntington Heroes",
          "awayMgr": "Tyler Cummings",
          "awayScore": 85.2,
          "homeScore": 78,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 87.1,
          "homeScore": 103.3,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "That's a Baaaaaaad Man",
          "awayMgr": "Joseph Garton",
          "awayScore": 131.4,
          "homeScore": 69,
          "homeMgr": "Matt Geiger",
          "home": "Plaxicolt's 45"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 80.6,
          "homeScore": 113.3,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 108.5,
          "homeScore": 73.5,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        }
      ],
      "Week 10": [
        {
          "away": "Huntington Heroes",
          "awayMgr": "Tyler Cummings",
          "awayScore": 79.2,
          "homeScore": 80.1,
          "homeMgr": "Zachary Sizemore",
          "home": "King of the NARPS"
        },
        {
          "away": "Winning Is My Forte",
          "awayMgr": "Aaron Burns",
          "awayScore": 86.1,
          "homeScore": 133.6,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 68.8,
          "homeScore": 104,
          "homeMgr": "Joseph Garton",
          "home": "That's a Baaaaaaad Man"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 106.5,
          "homeScore": 97.4,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        },
        {
          "away": "Plaxicolt's 45",
          "awayMgr": "Matt Geiger",
          "awayScore": 91.7,
          "homeScore": 133.7,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 110.9,
          "homeScore": 87,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        }
      ],
      "Week 11": [
        {
          "away": "King of the NARPS",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 75.4,
          "homeScore": 128.3,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "That's a Baaaaaaad Man",
          "awayMgr": "Joseph Garton",
          "awayScore": 62.9,
          "homeScore": 108.7,
          "homeMgr": "Tyler Cummings",
          "home": "Huntington Heroes"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 121.7,
          "homeScore": 103.2,
          "homeMgr": "Aaron Burns",
          "home": "Winning Is My Forte"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 70,
          "homeScore": 78.1,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 85.3,
          "homeScore": 90.7,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 68.9,
          "homeScore": 94.3,
          "homeMgr": "Matt Geiger",
          "home": "Plaxicolt's 45"
        }
      ],
      "Week 12": [
        {
          "away": "That's a Baaaaaaad Man",
          "awayMgr": "Joseph Garton",
          "awayScore": 115.8,
          "homeScore": 170.8,
          "homeMgr": "Zachary Sizemore",
          "home": "King of the NARPS"
        },
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 110.7,
          "homeScore": 94,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        },
        {
          "away": "Huntington Heroes",
          "awayMgr": "Tyler Cummings",
          "awayScore": 64.6,
          "homeScore": 81.6,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "Winning Is My Forte",
          "awayMgr": "Aaron Burns",
          "awayScore": 70.3,
          "homeScore": 97.6,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 106.9,
          "homeScore": 65.3,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 104,
          "homeScore": 69.7,
          "homeMgr": "Matt Geiger",
          "home": "Plaxicolt's 45"
        }
      ],
      "Week 13": [
        {
          "away": "King of the NARPS",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 87.2,
          "homeScore": 137.9,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 86.8,
          "homeScore": 47.1,
          "homeMgr": "Joseph Garton",
          "home": "That's a Baaaaaaad Man"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 62.2,
          "homeScore": 98.9,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 77,
          "homeScore": 132.2,
          "homeMgr": "Tyler Cummings",
          "home": "Huntington Heroes"
        },
        {
          "away": "Plaxicolt's 45",
          "awayMgr": "Matt Geiger",
          "awayScore": 54.6,
          "homeScore": 115.3,
          "homeMgr": "Aaron Burns",
          "home": "Winning Is My Forte"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 85.3,
          "homeScore": 74.9,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        }
      ]
    },
    "playoffs": {
      "round1": {
        "label": "Round 1 (Week 14)",
        "games": [
          {
            "away": "Free Agents",
            "awayMgr": "Zachary Hickman",
            "awayScore": 75.5,
            "homeScore": 57.9,
            "homeMgr": "Tyler Cummings",
            "home": "Huntington Heroes"
          },
          {
            "away": "Money Badgers",
            "awayMgr": "Tyler Clay",
            "awayScore": 86.1,
            "homeScore": 126.5,
            "homeMgr": "Walid Salameh",
            "home": "The Arabian Stallions"
          }
        ],
        "byes": [
          {
            "team": "The ACLiens",
            "pts": 105.5
          },
          {
            "team": "King of the NARPS",
            "pts": 87.3
          }
        ]
      },
      "round2": {
        "label": "Round 2 (Week 15)",
        "games": [
          {
            "away": "Free Agents",
            "awayMgr": "Zachary Hickman",
            "awayScore": 47.8,
            "homeScore": 82.3,
            "homeMgr": "Luke Rapp",
            "home": "The ACLiens"
          },
          {
            "away": "The Arabian Stallions",
            "awayMgr": "Walid Salameh",
            "awayScore": 95.4,
            "homeScore": 111.8,
            "homeMgr": "Zachary Sizemore",
            "home": "King of the NARPS"
          }
        ]
      },
      "round3": {
        "label": "Round 3 / Championship (Week 16)",
        "games": [
          {
            "away": "King of the NARPS",
            "awayMgr": "Zachary Sizemore",
            "awayScore": 108,
            "homeScore": 114.5,
            "homeMgr": "Luke Rapp",
            "home": "The ACLiens"
          }
        ]
      },
      "thirdPlace": {
        "label": "Round 3 / 3rd Place (Week 16)",
        "games": [
          {
            "away": "Free Agents",
            "awayMgr": "Zachary Hickman",
            "awayScore": 79.8,
            "homeScore": 126,
            "homeMgr": "Walid Salameh",
            "home": "The Arabian Stallions"
          }
        ]
      }
    }
  },
  "2017": {
    "year": 2017,
    "champion": {
      "team": "Prino's Powerhouse",
      "owner": "Joe Prino"
    },
    "second": {
      "team": "Money Badgers",
      "owner": "Tyler Clay"
    },
    "third": {
      "team": "Free Agents",
      "owner": "Zachary Hickman"
    },
    "standings": [
      {
        "team": "Free Agents",
        "owner": "Zachary Hickman",
        "w": 10,
        "l": 3,
        "t": 0,
        "pct": 0.769
      },
      {
        "team": "The Deplorables",
        "owner": "Zachary Sizemore",
        "w": 8,
        "l": 5,
        "t": 0,
        "pct": 0.615
      },
      {
        "team": "Money Badgers",
        "owner": "Tyler Clay",
        "w": 8,
        "l": 5,
        "t": 0,
        "pct": 0.615
      },
      {
        "team": "Winning Is My Forte",
        "owner": "Aaron Burns",
        "w": 7,
        "l": 6,
        "t": 0,
        "pct": 0.538
      },
      {
        "team": "Prino's Powerhouse",
        "owner": "Joe Prino",
        "w": 7,
        "l": 6,
        "t": 0,
        "pct": 0.538
      },
      {
        "team": "The ACLiens",
        "owner": "Luke Rapp",
        "w": 7,
        "l": 6,
        "t": 0,
        "pct": 0.538
      },
      {
        "team": "George's Gangstas",
        "owner": "George Wright",
        "w": 7,
        "l": 6,
        "t": 0,
        "pct": 0.538
      },
      {
        "team": "The Arabian Stallions",
        "owner": "Walid Salameh",
        "w": 6,
        "l": 7,
        "t": 0,
        "pct": 0.462
      },
      {
        "team": "Business as Usual",
        "owner": "Travis West",
        "w": 6,
        "l": 7,
        "t": 0,
        "pct": 0.462
      },
      {
        "team": "Eddie Lacy's Donut Factory",
        "owner": "Matt Geiger",
        "w": 5,
        "l": 8,
        "t": 0,
        "pct": 0.385
      },
      {
        "team": "Route 2 Ravers Reunited",
        "owner": "Joseph Garton",
        "w": 4,
        "l": 9,
        "t": 0,
        "pct": 0.308
      },
      {
        "team": "Charles Town Colonels",
        "owner": "Tyler Cummings",
        "w": 3,
        "l": 10,
        "t": 0,
        "pct": 0.231
      }
    ],
    "schedule": {
      "Week 1": [
        {
          "away": "Route 2 Ravers Reunited",
          "awayMgr": "Joseph Garton",
          "awayScore": 60.4,
          "homeScore": 89.5,
          "homeMgr": "Tyler Cummings",
          "home": "Charles Town Colonels"
        },
        {
          "away": "Eddie Lacy's Donut Factory",
          "awayMgr": "Matt Geiger",
          "awayScore": 70.4,
          "homeScore": 92.4,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "The Deplorables",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 110.2,
          "homeScore": 92.8,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 130.1,
          "homeScore": 71.7,
          "homeMgr": "Aaron Burns",
          "home": "Winning Is My Forte"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 60.7,
          "homeScore": 72,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 86,
          "homeScore": 67.4,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        }
      ],
      "Week 2": [
        {
          "away": "Eddie Lacy's Donut Factory",
          "awayMgr": "Matt Geiger",
          "awayScore": 65.6,
          "homeScore": 104.1,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers Reunited"
        },
        {
          "away": "Charles Town Colonels",
          "awayMgr": "Tyler Cummings",
          "awayScore": 93.3,
          "homeScore": 97.1,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 86.5,
          "homeScore": 76.5,
          "homeMgr": "Zachary Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 55.2,
          "homeScore": 105.6,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 92,
          "homeScore": 109.4,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "Winning Is My Forte",
          "awayMgr": "Aaron Burns",
          "awayScore": 90.5,
          "homeScore": 100.1,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        }
      ],
      "Week 3": [
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 99.8,
          "homeScore": 71.6,
          "homeMgr": "Tyler Cummings",
          "home": "Charles Town Colonels"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 105.2,
          "homeScore": 84.9,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers Reunited"
        },
        {
          "away": "The Deplorables",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 116.3,
          "homeScore": 81.1,
          "homeMgr": "Matt Geiger",
          "home": "Eddie Lacy's Donut Factory"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 98.4,
          "homeScore": 107.3,
          "homeMgr": "Aaron Burns",
          "home": "Winning Is My Forte"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 99.5,
          "homeScore": 77.4,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 84.5,
          "homeScore": 126.9,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        }
      ],
      "Week 4": [
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 110.6,
          "homeScore": 100.3,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "Charles Town Colonels",
          "awayMgr": "Tyler Cummings",
          "awayScore": 66,
          "homeScore": 71.5,
          "homeMgr": "Matt Geiger",
          "home": "Eddie Lacy's Donut Factory"
        },
        {
          "away": "Route 2 Ravers Reunited",
          "awayMgr": "Joseph Garton",
          "awayScore": 83.7,
          "homeScore": 114.2,
          "homeMgr": "Zachary Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 68.2,
          "homeScore": 87.8,
          "homeMgr": "Aaron Burns",
          "home": "Winning Is My Forte"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 75.7,
          "homeScore": 73,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 124.5,
          "homeScore": 89.2,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        }
      ],
      "Week 5": [
        {
          "away": "The Deplorables",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 110.9,
          "homeScore": 58.3,
          "homeMgr": "Tyler Cummings",
          "home": "Charles Town Colonels"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 96.9,
          "homeScore": 103.4,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers Reunited"
        },
        {
          "away": "Eddie Lacy's Donut Factory",
          "awayMgr": "Matt Geiger",
          "awayScore": 73.1,
          "homeScore": 91.8,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "Winning Is My Forte",
          "awayMgr": "Aaron Burns",
          "awayScore": 94.5,
          "homeScore": 85.6,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 100.9,
          "homeScore": 87.6,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 74.8,
          "homeScore": 113.7,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        }
      ],
      "Week 6": [
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 106.9,
          "homeScore": 87.4,
          "homeMgr": "Tyler Cummings",
          "home": "Charles Town Colonels"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 111.3,
          "homeScore": 83.5,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 87.7,
          "homeScore": 92,
          "homeMgr": "Matt Geiger",
          "home": "Eddie Lacy's Donut Factory"
        },
        {
          "away": "Winning Is My Forte",
          "awayMgr": "Aaron Burns",
          "awayScore": 111.5,
          "homeScore": 80.1,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 101.2,
          "homeScore": 96.4,
          "homeMgr": "Zachary Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "Route 2 Ravers Reunited",
          "awayMgr": "Joseph Garton",
          "awayScore": 54.2,
          "homeScore": 106.4,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        }
      ],
      "Week 7": [
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 101.8,
          "homeScore": 98.6,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "The Deplorables",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 107.9,
          "homeScore": 88.2,
          "homeMgr": "Aaron Burns",
          "home": "Winning Is My Forte"
        },
        {
          "away": "Route 2 Ravers Reunited",
          "awayMgr": "Joseph Garton",
          "awayScore": 63.4,
          "homeScore": 135.6,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "Charles Town Colonels",
          "awayMgr": "Tyler Cummings",
          "awayScore": 98.6,
          "homeScore": 105.2,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 71.4,
          "homeScore": 91.8,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "Eddie Lacy's Donut Factory",
          "awayMgr": "Matt Geiger",
          "awayScore": 79.8,
          "homeScore": 73.6,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        }
      ],
      "Week 8": [
        {
          "away": "Winning Is My Forte",
          "awayMgr": "Aaron Burns",
          "awayScore": 84.4,
          "homeScore": 88.2,
          "homeMgr": "Tyler Cummings",
          "home": "Charles Town Colonels"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 84.5,
          "homeScore": 115.2,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 64.7,
          "homeScore": 54.6,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers Reunited"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 97.8,
          "homeScore": 71,
          "homeMgr": "Matt Geiger",
          "home": "Eddie Lacy's Donut Factory"
        },
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 93.3,
          "homeScore": 125.7,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "The Deplorables",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 128,
          "homeScore": 77.4,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        }
      ],
      "Week 9": [
        {
          "away": "Winning Is My Forte",
          "awayMgr": "Aaron Burns",
          "awayScore": 82.3,
          "homeScore": 92.9,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 114.6,
          "homeScore": 93,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers Reunited"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 82.4,
          "homeScore": 70.6,
          "homeMgr": "Matt Geiger",
          "home": "Eddie Lacy's Donut Factory"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 88.9,
          "homeScore": 104.4,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 95.1,
          "homeScore": 109.2,
          "homeMgr": "Zachary Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "Charles Town Colonels",
          "awayMgr": "Tyler Cummings",
          "awayScore": 73.5,
          "homeScore": 85.7,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        }
      ],
      "Week 10": [
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 125.6,
          "homeScore": 71.7,
          "homeMgr": "Tyler Cummings",
          "home": "Charles Town Colonels"
        },
        {
          "away": "Winning Is My Forte",
          "awayMgr": "Aaron Burns",
          "awayScore": 137.5,
          "homeScore": 113.2,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers Reunited"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 78.3,
          "homeScore": 53.1,
          "homeMgr": "Zachary Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 100.7,
          "homeScore": 82.4,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "Eddie Lacy's Donut Factory",
          "awayMgr": "Matt Geiger",
          "awayScore": 86.3,
          "homeScore": 84.8,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 68.9,
          "homeScore": 80.3,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        }
      ],
      "Week 11": [
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 82.9,
          "homeScore": 142.8,
          "homeMgr": "Zachary Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "Route 2 Ravers Reunited",
          "awayMgr": "Joseph Garton",
          "awayScore": 58.7,
          "homeScore": 80.7,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "Eddie Lacy's Donut Factory",
          "awayMgr": "Matt Geiger",
          "awayScore": 91.9,
          "homeScore": 140.4,
          "homeMgr": "Aaron Burns",
          "home": "Winning Is My Forte"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 113.9,
          "homeScore": 137.1,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 92.7,
          "homeScore": 87.6,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "Charles Town Colonels",
          "awayMgr": "Tyler Cummings",
          "awayScore": 98.6,
          "homeScore": 71,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        }
      ],
      "Week 12": [
        {
          "away": "Charles Town Colonels",
          "awayMgr": "Tyler Cummings",
          "awayScore": 67.1,
          "homeScore": 79.4,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers Reunited"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 81.7,
          "homeScore": 84.2,
          "homeMgr": "Matt Geiger",
          "home": "Eddie Lacy's Donut Factory"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 158.6,
          "homeScore": 119.2,
          "homeMgr": "Zachary Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "Winning Is My Forte",
          "awayMgr": "Aaron Burns",
          "awayScore": 130,
          "homeScore": 55.9,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 112.5,
          "homeScore": 118.6,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 106.4,
          "homeScore": 81.7,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        }
      ],
      "Week 13": [
        {
          "away": "Route 2 Ravers Reunited",
          "awayMgr": "Joseph Garton",
          "awayScore": 111.6,
          "homeScore": 80.9,
          "homeMgr": "Matt Geiger",
          "home": "Eddie Lacy's Donut Factory"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 113.9,
          "homeScore": 87.1,
          "homeMgr": "Tyler Cummings",
          "home": "Charles Town Colonels"
        },
        {
          "away": "The Deplorables",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 100,
          "homeScore": 109.7,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 61.5,
          "homeScore": 69.5,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 61.4,
          "homeScore": 100.2,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 134.5,
          "homeScore": 125.3,
          "homeMgr": "Aaron Burns",
          "home": "Winning Is My Forte"
        }
      ]
    },
    "playoffs": {
      "round1": {
        "label": "Round 1 (Week 14)",
        "games": [
          {
            "away": "Prino's Powerhouse",
            "awayMgr": "Joe Prino",
            "awayScore": 123.4,
            "homeScore": 80.5,
            "homeMgr": "Aaron Burns",
            "home": "Winning Is My Forte"
          },
          {
            "away": "The ACLiens",
            "awayMgr": "Luke Rapp",
            "awayScore": 92,
            "homeScore": 98.5,
            "homeMgr": "Tyler Clay",
            "home": "Money Badgers"
          }
        ],
        "byes": [
          {
            "team": "Free Agents",
            "pts": 89.5
          },
          {
            "team": "The Deplorables",
            "pts": 113.6
          }
        ]
      },
      "round2": {
        "label": "Round 2 (Week 15)",
        "games": [
          {
            "away": "Prino's Powerhouse",
            "awayMgr": "Joe Prino",
            "awayScore": 115.5,
            "homeScore": 93.2,
            "homeMgr": "Zachary Hickman",
            "home": "Free Agents"
          },
          {
            "away": "Money Badgers",
            "awayMgr": "Tyler Clay",
            "awayScore": 106.8,
            "homeScore": 66.8,
            "homeMgr": "Zachary Sizemore",
            "home": "The Deplorables"
          }
        ]
      },
      "round3": {
        "label": "Round 3 / Championship (Week 16)",
        "games": [
          {
            "away": "Prino's Powerhouse",
            "awayMgr": "Joe Prino",
            "awayScore": 97.3,
            "homeScore": 91.8,
            "homeMgr": "Tyler Clay",
            "home": "Money Badgers"
          }
        ]
      },
      "thirdPlace": {
        "label": "Round 3 / 3rd Place (Week 16)",
        "games": [
          {
            "away": "The Deplorables",
            "awayMgr": "Zachary Sizemore",
            "awayScore": 61.5,
            "homeScore": 98.3,
            "homeMgr": "Zachary Hickman",
            "home": "Free Agents"
          }
        ]
      }
    }
  },
  "2018": {
    "year": 2018,
    "champion": {
      "team": "Prino's Powerhouse",
      "owner": "Joe Prino"
    },
    "second": {
      "team": "The Deplorables",
      "owner": "Zachary Sizemore"
    },
    "third": {
      "team": "George's Gangstas",
      "owner": "George Wright"
    },
    "standings": [
      {
        "team": "George's Gangstas",
        "owner": "George Wright",
        "w": 10,
        "l": 3,
        "t": 0,
        "pct": 0.769
      },
      {
        "team": "Prino's Powerhouse",
        "owner": "Joe Prino",
        "w": 9,
        "l": 4,
        "t": 0,
        "pct": 0.692
      },
      {
        "team": "Lincoln Legends",
        "owner": "Tyler Cummings",
        "w": 8,
        "l": 5,
        "t": 0,
        "pct": 0.615
      },
      {
        "team": "Money Badgers",
        "owner": "Tyler Clay",
        "w": 7,
        "l": 6,
        "t": 0,
        "pct": 0.538
      },
      {
        "team": "The Deplorables",
        "owner": "Zachary Sizemore",
        "w": 7,
        "l": 6,
        "t": 0,
        "pct": 0.538
      },
      {
        "team": "Kareem Pie",
        "owner": "Matt Geiger",
        "w": 6,
        "l": 7,
        "t": 0,
        "pct": 0.462
      },
      {
        "team": "Free Agents",
        "owner": "Zachary Hickman",
        "w": 6,
        "l": 7,
        "t": 0,
        "pct": 0.462
      },
      {
        "team": "The ACLiens",
        "owner": "Luke Rapp",
        "w": 6,
        "l": 7,
        "t": 0,
        "pct": 0.462
      },
      {
        "team": "Business as Usual",
        "owner": "Travis West",
        "w": 5,
        "l": 8,
        "t": 0,
        "pct": 0.385
      },
      {
        "team": "Route 2 Ravers Reunited",
        "owner": "Joseph Garton",
        "w": 5,
        "l": 8,
        "t": 0,
        "pct": 0.385
      },
      {
        "team": "O Le'Veon, Where Art Thou?",
        "owner": "Aaron Burns",
        "w": 5,
        "l": 8,
        "t": 0,
        "pct": 0.385
      },
      {
        "team": "The Arabian Stallions",
        "owner": "Walid Salameh",
        "w": 4,
        "l": 9,
        "t": 0,
        "pct": 0.308
      }
    ],
    "schedule": {
      "Week 1": [
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 106.2,
          "homeScore": 109.8,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 143.3,
          "homeScore": 136.7,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers Reunited"
        },
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 106.6,
          "homeScore": 102.8,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "O Le'Veon, Where Art Thou?",
          "awayMgr": "Aaron Burns",
          "awayScore": 95.1,
          "homeScore": 137.9,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 119.2,
          "homeScore": 85.9,
          "homeMgr": "Matt Geiger",
          "home": "Kareem Pie"
        },
        {
          "away": "The Deplorables",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 77.6,
          "homeScore": 127.5,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        }
      ],
      "Week 2": [
        {
          "away": "Route 2 Ravers Reunited",
          "awayMgr": "Joseph Garton",
          "awayScore": 103.2,
          "homeScore": 111.1,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 132.8,
          "homeScore": 94,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "Lincoln Legends",
          "awayMgr": "Tyler Cummings",
          "awayScore": 133,
          "homeScore": 121.2,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 86.3,
          "homeScore": 124.3,
          "homeMgr": "Zachary Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 100.4,
          "homeScore": 97.9,
          "homeMgr": "Matt Geiger",
          "home": "Kareem Pie"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 137.2,
          "homeScore": 112.4,
          "homeMgr": "Aaron Burns",
          "home": "O Le'Veon, Where Art Thou?"
        }
      ],
      "Week 3": [
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 137.6,
          "homeScore": 138.3,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 107.2,
          "homeScore": 97.1,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        },
        {
          "away": "Kareem Pie",
          "awayMgr": "Matt Geiger",
          "awayScore": 124.2,
          "homeScore": 126.1,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "Route 2 Ravers Reunited",
          "awayMgr": "Joseph Garton",
          "awayScore": 116.6,
          "homeScore": 136.4,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 100.1,
          "homeScore": 119.9,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        },
        {
          "away": "O Le'Veon, Where Art Thou?",
          "awayMgr": "Aaron Burns",
          "awayScore": 83.5,
          "homeScore": 91.2,
          "homeMgr": "Zachary Sizemore",
          "home": "The Deplorables"
        }
      ],
      "Week 4": [
        {
          "away": "Lincoln Legends",
          "awayMgr": "Tyler Cummings",
          "awayScore": 114.3,
          "homeScore": 100,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers Reunited"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 104,
          "homeScore": 92.8,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 97.7,
          "homeScore": 155.3,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "The Deplorables",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 102.2,
          "homeScore": 169.2,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "Kareem Pie",
          "awayMgr": "Matt Geiger",
          "awayScore": 109.3,
          "homeScore": 105.2,
          "homeMgr": "Aaron Burns",
          "home": "O Le'Veon, Where Art Thou?"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 127.3,
          "homeScore": 101.3,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        }
      ],
      "Week 5": [
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 128.3,
          "homeScore": 127.1,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        },
        {
          "away": "O Le'Veon, Where Art Thou?",
          "awayMgr": "Aaron Burns",
          "awayScore": 84.4,
          "homeScore": 125.9,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 122.9,
          "homeScore": 84.9,
          "homeMgr": "Zachary Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 105,
          "homeScore": 129.5,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 71.4,
          "homeScore": 91.5,
          "homeMgr": "Matt Geiger",
          "home": "Kareem Pie"
        },
        {
          "away": "Route 2 Ravers Reunited",
          "awayMgr": "Joseph Garton",
          "awayScore": 107.1,
          "homeScore": 116.8,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        }
      ],
      "Week 6": [
        {
          "away": "The Deplorables",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 92.3,
          "homeScore": 110.4,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers Reunited"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 81.7,
          "homeScore": 159,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "Kareem Pie",
          "awayMgr": "Matt Geiger",
          "awayScore": 141.8,
          "homeScore": 118.5,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 82,
          "homeScore": 92.8,
          "homeMgr": "Aaron Burns",
          "home": "O Le'Veon, Where Art Thou?"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 124.5,
          "homeScore": 95.6,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "Lincoln Legends",
          "awayMgr": "Tyler Cummings",
          "awayScore": 132.9,
          "homeScore": 130.5,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        }
      ],
      "Week 7": [
        {
          "away": "Route 2 Ravers Reunited",
          "awayMgr": "Joseph Garton",
          "awayScore": 95.8,
          "homeScore": 138.3,
          "homeMgr": "Matt Geiger",
          "home": "Kareem Pie"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 87.9,
          "homeScore": 149.3,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 81,
          "homeScore": 108.6,
          "homeMgr": "Zachary Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 121.2,
          "homeScore": 140.9,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "Lincoln Legends",
          "awayMgr": "Tyler Cummings",
          "awayScore": 83.8,
          "homeScore": 107.8,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "O Le'Veon, Where Art Thou?",
          "awayMgr": "Aaron Burns",
          "awayScore": 84.7,
          "homeScore": 117.9,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        }
      ],
      "Week 8": [
        {
          "away": "The Deplorables",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 82.6,
          "homeScore": 157,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        },
        {
          "away": "Kareem Pie",
          "awayMgr": "Matt Geiger",
          "awayScore": 95.8,
          "homeScore": 115.4,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 116.9,
          "homeScore": 92.7,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 119.9,
          "homeScore": 109.4,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "O Le'Veon, Where Art Thou?",
          "awayMgr": "Aaron Burns",
          "awayScore": 122.1,
          "homeScore": 100.8,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 121.8,
          "homeScore": 124.6,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers Reunited"
        }
      ],
      "Week 9": [
        {
          "away": "Lincoln Legends",
          "awayMgr": "Tyler Cummings",
          "awayScore": 108,
          "homeScore": 114.9,
          "homeMgr": "Matt Geiger",
          "home": "Kareem Pie"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 154.6,
          "homeScore": 101.6,
          "homeMgr": "Zachary Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "Route 2 Ravers Reunited",
          "awayMgr": "Joseph Garton",
          "awayScore": 72.4,
          "homeScore": 111.1,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 110.2,
          "homeScore": 110.1,
          "homeMgr": "Aaron Burns",
          "home": "O Le'Veon, Where Art Thou?"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 119.3,
          "homeScore": 102.8,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        },
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 76.1,
          "homeScore": 106.6,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        }
      ],
      "Week 10": [
        {
          "away": "O Le'Veon, Where Art Thou?",
          "awayMgr": "Aaron Burns",
          "awayScore": 140.4,
          "homeScore": 99.9,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers Reunited"
        },
        {
          "away": "Kareem Pie",
          "awayMgr": "Matt Geiger",
          "awayScore": 96.1,
          "homeScore": 134.7,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 115.2,
          "homeScore": 116.8,
          "homeMgr": "Zachary Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 124.7,
          "homeScore": 134.2,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 121.8,
          "homeScore": 111.9,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 108.9,
          "homeScore": 115.1,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        }
      ],
      "Week 11": [
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 148.5,
          "homeScore": 87.6,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "Route 2 Ravers Reunited",
          "awayMgr": "Joseph Garton",
          "awayScore": 141.6,
          "homeScore": 104.7,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 96.6,
          "homeScore": 106.1,
          "homeMgr": "Aaron Burns",
          "home": "O Le'Veon, Where Art Thou?"
        },
        {
          "away": "The Deplorables",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 138.3,
          "homeScore": 65.9,
          "homeMgr": "Matt Geiger",
          "home": "Kareem Pie"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 140.6,
          "homeScore": 62.2,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        },
        {
          "away": "Lincoln Legends",
          "awayMgr": "Tyler Cummings",
          "awayScore": 147,
          "homeScore": 105.1,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        }
      ],
      "Week 12": [
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 100.1,
          "homeScore": 132.6,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "Route 2 Ravers Reunited",
          "awayMgr": "Joseph Garton",
          "awayScore": 117.1,
          "homeScore": 107.6,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 124.2,
          "homeScore": 108.7,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 72.1,
          "homeScore": 120.5,
          "homeMgr": "Zachary Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "Kareem Pie",
          "awayMgr": "Matt Geiger",
          "awayScore": 139.9,
          "homeScore": 116.4,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "Lincoln Legends",
          "awayMgr": "Tyler Cummings",
          "awayScore": 101.9,
          "homeScore": 120,
          "homeMgr": "Aaron Burns",
          "home": "O Le'Veon, Where Art Thou?"
        }
      ],
      "Week 13": [
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 88.7,
          "homeScore": 90.4,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers Reunited"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 75.6,
          "homeScore": 90.8,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "Kareem Pie",
          "awayMgr": "Matt Geiger",
          "awayScore": 117.3,
          "homeScore": 120.4,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        },
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 107.2,
          "homeScore": 86.5,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        },
        {
          "away": "The Deplorables",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 137.7,
          "homeScore": 113,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "O Le'Veon, Where Art Thou?",
          "awayMgr": "Aaron Burns",
          "awayScore": 97.7,
          "homeScore": 107.9,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        }
      ]
    },
    "playoffs": {
      "round1": {
        "label": "Round 1 (Week 14)",
        "games": [
          {
            "away": "The Deplorables",
            "awayMgr": "Zachary Sizemore",
            "awayScore": 111,
            "homeScore": 93.4,
            "homeMgr": "Tyler Clay",
            "home": "Money Badgers"
          },
          {
            "away": "Kareem Pie",
            "awayMgr": "Matt Geiger",
            "awayScore": 82.4,
            "homeScore": 80.3,
            "homeMgr": "Tyler Cummings",
            "home": "Lincoln Legends"
          }
        ],
        "byes": [
          {
            "team": "George's Gangstas",
            "pts": 101.2
          },
          {
            "team": "Prino's Powerhouse",
            "pts": 126.6
          }
        ]
      },
      "round2": {
        "label": "Round 2 (Week 15)",
        "games": [
          {
            "away": "The Deplorables",
            "awayMgr": "Zachary Sizemore",
            "awayScore": 95.5,
            "homeScore": 95.1,
            "homeMgr": "George Wright",
            "home": "George's Gangstas"
          },
          {
            "away": "Kareem Pie",
            "awayMgr": "Matt Geiger",
            "awayScore": 91.2,
            "homeScore": 119.2,
            "homeMgr": "Joe Prino",
            "home": "Prino's Powerhouse"
          }
        ]
      },
      "round3": {
        "label": "Round 3 / Championship (Week 16)",
        "games": [
          {
            "away": "The Deplorables",
            "awayMgr": "Zachary Sizemore",
            "awayScore": 131.7,
            "homeScore": 153,
            "homeMgr": "Joe Prino",
            "home": "Prino's Powerhouse"
          }
        ]
      },
      "thirdPlace": {
        "label": "Round 3 / 3rd Place (Week 16)",
        "games": [
          {
            "away": "Kareem Pie",
            "awayMgr": "Matt Geiger",
            "awayScore": 117.6,
            "homeScore": 120.9,
            "homeMgr": "George Wright",
            "home": "George's Gangstas"
          }
        ]
      }
    }
  },
  "2019": {
    "year": 2019,
    "champion": {
      "team": "Business as Usual",
      "owner": "Travis West"
    },
    "second": {
      "team": "George's Gangstas",
      "owner": "George Wright"
    },
    "third": {
      "team": "The Deplorables",
      "owner": "Zachary Sizemore"
    },
    "standings": [
      {
        "team": "The Deplorables",
        "owner": "Zachary Sizemore",
        "w": 9,
        "l": 4,
        "t": 0,
        "pct": 0.692
      },
      {
        "team": "George's Gangstas",
        "owner": "George Wright",
        "w": 8,
        "l": 5,
        "t": 0,
        "pct": 0.615
      },
      {
        "team": "Kareem Pie",
        "owner": "Matt Geiger",
        "w": 8,
        "l": 5,
        "t": 0,
        "pct": 0.615
      },
      {
        "team": "Business as Usual",
        "owner": "Travis West",
        "w": 8,
        "l": 5,
        "t": 0,
        "pct": 0.615
      },
      {
        "team": "Prino's Powerhouse",
        "owner": "Joe Prino",
        "w": 7,
        "l": 6,
        "t": 0,
        "pct": 0.538
      },
      {
        "team": "Money Badgers",
        "owner": "Tyler Clay",
        "w": 7,
        "l": 6,
        "t": 0,
        "pct": 0.538
      },
      {
        "team": "The Arabian Stallions",
        "owner": "Walid Salameh",
        "w": 6,
        "l": 7,
        "t": 0,
        "pct": 0.462
      },
      {
        "team": "Free Agents",
        "owner": "Zachary Hickman",
        "w": 6,
        "l": 7,
        "t": 0,
        "pct": 0.462
      },
      {
        "team": "Lincoln Legends",
        "owner": "Tyler Cummings",
        "w": 6,
        "l": 7,
        "t": 0,
        "pct": 0.462
      },
      {
        "team": "The Glue Factory",
        "owner": "Aaron Burns",
        "w": 5,
        "l": 8,
        "t": 0,
        "pct": 0.385
      },
      {
        "team": "Route 2 Ravers Reunited",
        "owner": "Joseph Garton",
        "w": 4,
        "l": 9,
        "t": 0,
        "pct": 0.308
      },
      {
        "team": "The ACLiens",
        "owner": "Luke Rapp",
        "w": 4,
        "l": 9,
        "t": 0,
        "pct": 0.308
      }
    ],
    "schedule": {
      "Week 1": [
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 87.6,
          "homeScore": 117,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers Reunited"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 116.7,
          "homeScore": 126.4,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 113.3,
          "homeScore": 95.3,
          "homeMgr": "Aaron Burns",
          "home": "The Glue Factory"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 97.4,
          "homeScore": 95.6,
          "homeMgr": "Zachary Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 110.6,
          "homeScore": 103.3,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "Kareem Pie",
          "awayMgr": "Matt Geiger",
          "awayScore": 125.7,
          "homeScore": 76,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        }
      ],
      "Week 2": [
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 71.5,
          "homeScore": 93.8,
          "homeMgr": "Matt Geiger",
          "home": "Kareem Pie"
        },
        {
          "away": "Lincoln Legends",
          "awayMgr": "Tyler Cummings",
          "awayScore": 85.4,
          "homeScore": 89.9,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 134.3,
          "homeScore": 128.8,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 110.7,
          "homeScore": 86.1,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "The Glue Factory",
          "awayMgr": "Aaron Burns",
          "awayScore": 122.3,
          "homeScore": 71.9,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "The Deplorables",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 93.5,
          "homeScore": 83.7,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers Reunited"
        }
      ],
      "Week 3": [
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 64.3,
          "homeScore": 153.3,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        },
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 95.7,
          "homeScore": 95.1,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 103.8,
          "homeScore": 133.4,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "Route 2 Ravers Reunited",
          "awayMgr": "Joseph Garton",
          "awayScore": 98.2,
          "homeScore": 126,
          "homeMgr": "Aaron Burns",
          "home": "The Glue Factory"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 74.9,
          "homeScore": 99.7,
          "homeMgr": "Zachary Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "Kareem Pie",
          "awayMgr": "Matt Geiger",
          "awayScore": 117,
          "homeScore": 146.5,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        }
      ],
      "Week 4": [
        {
          "away": "The Glue Factory",
          "awayMgr": "Aaron Burns",
          "awayScore": 66.4,
          "homeScore": 106.7,
          "homeMgr": "Zachary Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 125.7,
          "homeScore": 106.5,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 118,
          "homeScore": 94.3,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "Lincoln Legends",
          "awayMgr": "Tyler Cummings",
          "awayScore": 92.8,
          "homeScore": 89.9,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 89,
          "homeScore": 86.7,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "Route 2 Ravers Reunited",
          "awayMgr": "Joseph Garton",
          "awayScore": 85.2,
          "homeScore": 72.8,
          "homeMgr": "Matt Geiger",
          "home": "Kareem Pie"
        }
      ],
      "Week 5": [
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 106.2,
          "homeScore": 128.4,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "Kareem Pie",
          "awayMgr": "Matt Geiger",
          "awayScore": 110.6,
          "homeScore": 106.1,
          "homeMgr": "Zachary Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 115.4,
          "homeScore": 51.2,
          "homeMgr": "Aaron Burns",
          "home": "The Glue Factory"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 131.2,
          "homeScore": 104.4,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        },
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 112.1,
          "homeScore": 131.5,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 105.4,
          "homeScore": 97.2,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers Reunited"
        }
      ],
      "Week 6": [
        {
          "away": "Lincoln Legends",
          "awayMgr": "Tyler Cummings",
          "awayScore": 53.2,
          "homeScore": 58.1,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 102.4,
          "homeScore": 70.8,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "Route 2 Ravers Reunited",
          "awayMgr": "Joseph Garton",
          "awayScore": 113.1,
          "homeScore": 129.4,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "The Deplorables",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 116.3,
          "homeScore": 101.1,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "The Glue Factory",
          "awayMgr": "Aaron Burns",
          "awayScore": 83.5,
          "homeScore": 128.8,
          "homeMgr": "Matt Geiger",
          "home": "Kareem Pie"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 105.8,
          "homeScore": 126.6,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        }
      ],
      "Week 7": [
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 83.1,
          "homeScore": 70.1,
          "homeMgr": "Zachary Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "Lincoln Legends",
          "awayMgr": "Tyler Cummings",
          "awayScore": 94.3,
          "homeScore": 126.3,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "Kareem Pie",
          "awayMgr": "Matt Geiger",
          "awayScore": 109.3,
          "homeScore": 77.7,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 63.4,
          "homeScore": 87.6,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 106.1,
          "homeScore": 81.7,
          "homeMgr": "Aaron Burns",
          "home": "The Glue Factory"
        },
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 100.7,
          "homeScore": 95.1,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers Reunited"
        }
      ],
      "Week 8": [
        {
          "away": "The Glue Factory",
          "awayMgr": "Aaron Burns",
          "awayScore": 86.7,
          "homeScore": 149.8,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "Kareem Pie",
          "awayMgr": "Matt Geiger",
          "awayScore": 89.5,
          "homeScore": 114.4,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "Route 2 Ravers Reunited",
          "awayMgr": "Joseph Garton",
          "awayScore": 85.6,
          "homeScore": 111.3,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "The Deplorables",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 112.9,
          "homeScore": 72.5,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 110.1,
          "homeScore": 101.8,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 64,
          "homeScore": 145.5,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        }
      ],
      "Week 9": [
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 98.7,
          "homeScore": 84.2,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 130.1,
          "homeScore": 130.9,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 82,
          "homeScore": 120.1,
          "homeMgr": "Matt Geiger",
          "home": "Kareem Pie"
        },
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 99.8,
          "homeScore": 114.3,
          "homeMgr": "Aaron Burns",
          "home": "The Glue Factory"
        },
        {
          "away": "Lincoln Legends",
          "awayMgr": "Tyler Cummings",
          "awayScore": 101.8,
          "homeScore": 97.3,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers Reunited"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 70.7,
          "homeScore": 89.9,
          "homeMgr": "Zachary Sizemore",
          "home": "The Deplorables"
        }
      ],
      "Week 10": [
        {
          "away": "The Deplorables",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 99.3,
          "homeScore": 63.8,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        },
        {
          "away": "Kareem Pie",
          "awayMgr": "Matt Geiger",
          "awayScore": 114.3,
          "homeScore": 98.7,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "The Glue Factory",
          "awayMgr": "Aaron Burns",
          "awayScore": 103.6,
          "homeScore": 127.3,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 104.8,
          "homeScore": 116.3,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "Route 2 Ravers Reunited",
          "awayMgr": "Joseph Garton",
          "awayScore": 90.8,
          "homeScore": 99.6,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 55.8,
          "homeScore": 98,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        }
      ],
      "Week 11": [
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 82.2,
          "homeScore": 110.4,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers Reunited"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 90.8,
          "homeScore": 108.7,
          "homeMgr": "Zachary Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 64.7,
          "homeScore": 99.1,
          "homeMgr": "Matt Geiger",
          "home": "Kareem Pie"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 107.7,
          "homeScore": 87.7,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        },
        {
          "away": "Lincoln Legends",
          "awayMgr": "Tyler Cummings",
          "awayScore": 80.1,
          "homeScore": 91.9,
          "homeMgr": "Aaron Burns",
          "home": "The Glue Factory"
        },
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 89.9,
          "homeScore": 92.1,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        }
      ],
      "Week 12": [
        {
          "away": "The Deplorables",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 92,
          "homeScore": 75.2,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "Route 2 Ravers Reunited",
          "awayMgr": "Joseph Garton",
          "awayScore": 76.3,
          "homeScore": 91.8,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 112.4,
          "homeScore": 102.4,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "The Glue Factory",
          "awayMgr": "Aaron Burns",
          "awayScore": 80.4,
          "homeScore": 95.1,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "Lincoln Legends",
          "awayMgr": "Tyler Cummings",
          "awayScore": 86.1,
          "homeScore": 79.7,
          "homeMgr": "Matt Geiger",
          "home": "Kareem Pie"
        },
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 77.5,
          "homeScore": 70.5,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        }
      ],
      "Week 13": [
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 100.1,
          "homeScore": 115.8,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "Route 2 Ravers Reunited",
          "awayMgr": "Joseph Garton",
          "awayScore": 116.6,
          "homeScore": 101.3,
          "homeMgr": "Zachary Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 81.4,
          "homeScore": 73,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 87.3,
          "homeScore": 109.9,
          "homeMgr": "Aaron Burns",
          "home": "The Glue Factory"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 80.3,
          "homeScore": 98.5,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        },
        {
          "away": "Kareem Pie",
          "awayMgr": "Matt Geiger",
          "awayScore": 90.5,
          "homeScore": 104.8,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        }
      ]
    },
    "playoffs": {
      "round1": {
        "label": "Round 1 (Week 14)",
        "games": [
          {
            "away": "Prino's Powerhouse",
            "awayMgr": "Joe Prino",
            "awayScore": 108.5,
            "homeScore": 128.6,
            "homeMgr": "Travis West",
            "home": "Business as Usual"
          },
          {
            "away": "Money Badgers",
            "awayMgr": "Tyler Clay",
            "awayScore": 118.4,
            "homeScore": 80.3,
            "homeMgr": "Matt Geiger",
            "home": "Kareem Pie"
          }
        ],
        "byes": [
          {
            "team": "The Deplorables",
            "pts": 125.6
          },
          {
            "team": "George's Gangstas",
            "pts": 87.6
          }
        ]
      },
      "round2": {
        "label": "Round 2 (Week 15)",
        "games": [
          {
            "away": "Business as Usual",
            "awayMgr": "Travis West",
            "awayScore": 129.7,
            "homeScore": 93.4,
            "homeMgr": "Zachary Sizemore",
            "home": "The Deplorables"
          },
          {
            "away": "Money Badgers",
            "awayMgr": "Tyler Clay",
            "awayScore": 115,
            "homeScore": 121.8,
            "homeMgr": "George Wright",
            "home": "George's Gangstas"
          }
        ]
      },
      "round3": {
        "label": "Round 3 / Championship (Week 16)",
        "games": [
          {
            "away": "Business as Usual",
            "awayMgr": "Travis West",
            "awayScore": 90.9,
            "homeScore": 79.8,
            "homeMgr": "George Wright",
            "home": "George's Gangstas"
          }
        ]
      },
      "thirdPlace": {
        "label": "Round 3 / 3rd Place (Week 16)",
        "games": [
          {
            "away": "Money Badgers",
            "awayMgr": "Tyler Clay",
            "awayScore": 72.8,
            "homeScore": 139.9,
            "homeMgr": "Zachary Sizemore",
            "home": "The Deplorables"
          }
        ]
      }
    }
  },
  "2020": {
    "year": 2020,
    "champion": {
      "team": "Free Agents",
      "owner": "Zachary Hickman"
    },
    "second": {
      "team": "Prino's Powerhouse",
      "owner": "Joe Prino"
    },
    "third": {
      "team": "Lincoln Legends",
      "owner": "Tyler Cummings"
    },
    "standings": [
      {
        "team": "Free Agents",
        "owner": "Zachary Hickman",
        "w": 9,
        "l": 4,
        "t": 0,
        "pct": 0.692
      },
      {
        "team": "Lincoln Legends",
        "owner": "Tyler Cummings",
        "w": 9,
        "l": 4,
        "t": 0,
        "pct": 0.692
      },
      {
        "team": "Prino's Powerhouse",
        "owner": "Joe Prino",
        "w": 8,
        "l": 5,
        "t": 0,
        "pct": 0.615
      },
      {
        "team": "Kareem Pie",
        "owner": "Matt Geiger",
        "w": 8,
        "l": 5,
        "t": 0,
        "pct": 0.615
      },
      {
        "team": "The Deplorables",
        "owner": "Zachary Sizemore",
        "w": 8,
        "l": 5,
        "t": 0,
        "pct": 0.615
      },
      {
        "team": "Money Badgers",
        "owner": "Tyler Clay",
        "w": 7,
        "l": 6,
        "t": 0,
        "pct": 0.538
      },
      {
        "team": "The Fantasy Football Team",
        "owner": "Aaron Burns",
        "w": 6,
        "l": 7,
        "t": 0,
        "pct": 0.462
      },
      {
        "team": "Business as Usual",
        "owner": "Travis West",
        "w": 6,
        "l": 7,
        "t": 0,
        "pct": 0.462
      },
      {
        "team": "Route 2 Ravers Reunited",
        "owner": "Joseph Garton",
        "w": 6,
        "l": 7,
        "t": 0,
        "pct": 0.462
      },
      {
        "team": "The ACLiens",
        "owner": "Luke Rapp",
        "w": 6,
        "l": 7,
        "t": 0,
        "pct": 0.462
      },
      {
        "team": "George's Gangstas",
        "owner": "George Wright",
        "w": 3,
        "l": 10,
        "t": 0,
        "pct": 0.231
      },
      {
        "team": "The Arabian Stallions",
        "owner": "Walid Salameh",
        "w": 2,
        "l": 11,
        "t": 0,
        "pct": 0.154
      }
    ],
    "schedule": {
      "Week 1": [
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 93.6,
          "homeScore": 99.8,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 83.5,
          "homeScore": 114.8,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 80.6,
          "homeScore": 122.6,
          "homeMgr": "Zachary Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 117.8,
          "homeScore": 87.8,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers Reunited"
        },
        {
          "away": "The Fantasy Football Team",
          "awayMgr": "Aaron Burns",
          "awayScore": 89.2,
          "homeScore": 91.1,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        },
        {
          "away": "Kareem Pie",
          "awayMgr": "Matt Geiger",
          "awayScore": 115.9,
          "homeScore": 139.6,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        }
      ],
      "Week 2": [
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 93.4,
          "homeScore": 112.5,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 90.4,
          "homeScore": 139.8,
          "homeMgr": "Zachary Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 143.5,
          "homeScore": 74,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 148.8,
          "homeScore": 82.4,
          "homeMgr": "Aaron Burns",
          "home": "The Fantasy Football Team"
        },
        {
          "away": "Lincoln Legends",
          "awayMgr": "Tyler Cummings",
          "awayScore": 129.8,
          "homeScore": 134.2,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "Route 2 Ravers Reunited",
          "awayMgr": "Joseph Garton",
          "awayScore": 59.4,
          "homeScore": 86.3,
          "homeMgr": "Matt Geiger",
          "home": "Kareem Pie"
        }
      ],
      "Week 3": [
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 105.5,
          "homeScore": 59.8,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "The Deplorables",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 89,
          "homeScore": 79.2,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 118.1,
          "homeScore": 101.7,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "The Fantasy Football Team",
          "awayMgr": "Aaron Burns",
          "awayScore": 106.7,
          "homeScore": 133.5,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers Reunited"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 130.9,
          "homeScore": 112.5,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        },
        {
          "away": "Kareem Pie",
          "awayMgr": "Matt Geiger",
          "awayScore": 120.9,
          "homeScore": 110.7,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        }
      ],
      "Week 4": [
        {
          "away": "The Deplorables",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 138.2,
          "homeScore": 110,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 112.4,
          "homeScore": 65.9,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 93.3,
          "homeScore": 67,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 92.7,
          "homeScore": 83.5,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers Reunited"
        },
        {
          "away": "The Fantasy Football Team",
          "awayMgr": "Aaron Burns",
          "awayScore": 153.8,
          "homeScore": 122.7,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "Lincoln Legends",
          "awayMgr": "Tyler Cummings",
          "awayScore": 139.2,
          "homeScore": 96.3,
          "homeMgr": "Matt Geiger",
          "home": "Kareem Pie"
        }
      ],
      "Week 5": [
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 88.8,
          "homeScore": 116.1,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 128.9,
          "homeScore": 103.7,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        },
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 83.2,
          "homeScore": 59.9,
          "homeMgr": "Zachary Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "Route 2 Ravers Reunited",
          "awayMgr": "Joseph Garton",
          "awayScore": 77.5,
          "homeScore": 130.8,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 79,
          "homeScore": 120,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "The Fantasy Football Team",
          "awayMgr": "Aaron Burns",
          "awayScore": 80.9,
          "homeScore": 139.7,
          "homeMgr": "Matt Geiger",
          "home": "Kareem Pie"
        }
      ],
      "Week 6": [
        {
          "away": "Kareem Pie",
          "awayMgr": "Matt Geiger",
          "awayScore": 92.9,
          "homeScore": 116.7,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 104.8,
          "homeScore": 87.4,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "Lincoln Legends",
          "awayMgr": "Tyler Cummings",
          "awayScore": 108.3,
          "homeScore": 105.8,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "Route 2 Ravers Reunited",
          "awayMgr": "Joseph Garton",
          "awayScore": 110.3,
          "homeScore": 92.9,
          "homeMgr": "Zachary Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "The Fantasy Football Team",
          "awayMgr": "Aaron Burns",
          "awayScore": 76.8,
          "homeScore": 79.1,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 90.8,
          "homeScore": 82.1,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        }
      ],
      "Week 7": [
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 98.4,
          "homeScore": 115.6,
          "homeMgr": "Aaron Burns",
          "home": "The Fantasy Football Team"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 82.6,
          "homeScore": 137.3,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers Reunited"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 58.7,
          "homeScore": 132.6,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 108.8,
          "homeScore": 87.4,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "The Deplorables",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 121.8,
          "homeScore": 117.2,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 86.2,
          "homeScore": 60.7,
          "homeMgr": "Matt Geiger",
          "home": "Kareem Pie"
        }
      ],
      "Week 8": [
        {
          "away": "Route 2 Ravers Reunited",
          "awayMgr": "Joseph Garton",
          "awayScore": 108.3,
          "homeScore": 82.5,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 86,
          "homeScore": 75.5,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "Kareem Pie",
          "awayMgr": "Matt Geiger",
          "awayScore": 97.1,
          "homeScore": 95.8,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        },
        {
          "away": "The Fantasy Football Team",
          "awayMgr": "Aaron Burns",
          "awayScore": 123.3,
          "homeScore": 97.8,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "Lincoln Legends",
          "awayMgr": "Tyler Cummings",
          "awayScore": 72,
          "homeScore": 78.2,
          "homeMgr": "Zachary Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 84.6,
          "homeScore": 101.3,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        }
      ],
      "Week 9": [
        {
          "away": "Route 2 Ravers Reunited",
          "awayMgr": "Joseph Garton",
          "awayScore": 64.9,
          "homeScore": 118.6,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 105.7,
          "homeScore": 101.9,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 87,
          "homeScore": 78,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "Kareem Pie",
          "awayMgr": "Matt Geiger",
          "awayScore": 118.3,
          "homeScore": 79.8,
          "homeMgr": "Zachary Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "Lincoln Legends",
          "awayMgr": "Tyler Cummings",
          "awayScore": 105.8,
          "homeScore": 102,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 75.7,
          "homeScore": 118.1,
          "homeMgr": "Aaron Burns",
          "home": "The Fantasy Football Team"
        }
      ],
      "Week 10": [
        {
          "away": "Lincoln Legends",
          "awayMgr": "Tyler Cummings",
          "awayScore": 104.7,
          "homeScore": 66.9,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "Route 2 Ravers Reunited",
          "awayMgr": "Joseph Garton",
          "awayScore": 93.6,
          "homeScore": 109.2,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 96.4,
          "homeScore": 58.4,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "The Deplorables",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 58.1,
          "homeScore": 105.6,
          "homeMgr": "Aaron Burns",
          "home": "The Fantasy Football Team"
        },
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 86.8,
          "homeScore": 91.2,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 106.9,
          "homeScore": 91.8,
          "homeMgr": "Matt Geiger",
          "home": "Kareem Pie"
        }
      ],
      "Week 11": [
        {
          "away": "Kareem Pie",
          "awayMgr": "Matt Geiger",
          "awayScore": 114.4,
          "homeScore": 96.5,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 98.6,
          "homeScore": 88,
          "homeMgr": "Aaron Burns",
          "home": "The Fantasy Football Team"
        },
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 89.1,
          "homeScore": 102.2,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers Reunited"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 95.7,
          "homeScore": 113,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        },
        {
          "away": "The Deplorables",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 119.3,
          "homeScore": 106.1,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 116.5,
          "homeScore": 89.8,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        }
      ],
      "Week 12": [
        {
          "away": "Lincoln Legends",
          "awayMgr": "Tyler Cummings",
          "awayScore": 108.6,
          "homeScore": 92.8,
          "homeMgr": "Aaron Burns",
          "home": "The Fantasy Football Team"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 118.1,
          "homeScore": 69.6,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        },
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 107.9,
          "homeScore": 115.6,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "The Deplorables",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 105,
          "homeScore": 108.1,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "Route 2 Ravers Reunited",
          "awayMgr": "Joseph Garton",
          "awayScore": 104.9,
          "homeScore": 95.7,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 83.4,
          "homeScore": 113.6,
          "homeMgr": "Matt Geiger",
          "home": "Kareem Pie"
        }
      ],
      "Week 13": [
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 103.5,
          "homeScore": 77,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 102.7,
          "homeScore": 77.3,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "The Deplorables",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 98.4,
          "homeScore": 96.5,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 89.7,
          "homeScore": 102.7,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "The Fantasy Football Team",
          "awayMgr": "Aaron Burns",
          "awayScore": 102.9,
          "homeScore": 102.4,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "Kareem Pie",
          "awayMgr": "Matt Geiger",
          "awayScore": 102.3,
          "homeScore": 82.9,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers Reunited"
        }
      ]
    },
    "playoffs": {
      "round1": {
        "label": "Round 1 (Week 14)",
        "games": [
          {
            "away": "The Deplorables",
            "awayMgr": "Zachary Sizemore",
            "awayScore": 121.8,
            "homeScore": 75.8,
            "homeMgr": "Matt Geiger",
            "home": "Kareem Pie"
          },
          {
            "away": "Money Badgers",
            "awayMgr": "Tyler Clay",
            "awayScore": 104.2,
            "homeScore": 104.7,
            "homeMgr": "Joe Prino",
            "home": "Prino's Powerhouse"
          }
        ],
        "byes": [
          {
            "team": "Free Agents",
            "pts": 104
          },
          {
            "team": "Lincoln Legends",
            "pts": 109.1
          }
        ]
      },
      "round2": {
        "label": "Round 2 (Week 15)",
        "games": [
          {
            "away": "The Deplorables",
            "awayMgr": "Zachary Sizemore",
            "awayScore": 105.9,
            "homeScore": 127.5,
            "homeMgr": "Zachary Hickman",
            "home": "Free Agents"
          },
          {
            "away": "Prino's Powerhouse",
            "awayMgr": "Joe Prino",
            "awayScore": 137.6,
            "homeScore": 112.7,
            "homeMgr": "Tyler Cummings",
            "home": "Lincoln Legends"
          }
        ]
      },
      "round3": {
        "label": "Round 3 / Championship (Week 16)",
        "games": [
          {
            "away": "Prino's Powerhouse",
            "awayMgr": "Joe Prino",
            "awayScore": 96.7,
            "homeScore": 186.2,
            "homeMgr": "Zachary Hickman",
            "home": "Free Agents"
          }
        ]
      },
      "thirdPlace": {
        "label": "Round 3 / 3rd Place (Week 16)",
        "games": [
          {
            "away": "The Deplorables",
            "awayMgr": "Zachary Sizemore",
            "awayScore": 134.8,
            "homeScore": 111,
            "homeMgr": "Tyler Cummings",
            "home": "Lincoln Legends"
          }
        ]
      }
    }
  },
  "2021": {
    "year": 2021,
    "champion": {
      "team": "Business as Usual",
      "owner": "Travis West"
    },
    "second": {
      "team": "Money Badgers",
      "owner": "Tyler Clay"
    },
    "third": {
      "team": "Prino's Powerhouse",
      "owner": "Joe Prino"
    },
    "standings": [
      {
        "team": "The Fantasy Football Team",
        "owner": "Aaron Burns",
        "w": 10,
        "l": 4,
        "t": 0,
        "pct": 0.714
      },
      {
        "team": "Money Badgers",
        "owner": "Tyler Clay",
        "w": 9,
        "l": 5,
        "t": 0,
        "pct": 0.643
      },
      {
        "team": "Prino's Powerhouse",
        "owner": "Joe Prino",
        "w": 8,
        "l": 6,
        "t": 0,
        "pct": 0.571
      },
      {
        "team": "Business as Usual",
        "owner": "Travis West",
        "w": 8,
        "l": 6,
        "t": 0,
        "pct": 0.571
      },
      {
        "team": "Lincoln Legends",
        "owner": "Tyler Cummings",
        "w": 7,
        "l": 6,
        "t": 1,
        "pct": 0.536
      },
      {
        "team": "George's Gangstas",
        "owner": "George Wright",
        "w": 7,
        "l": 6,
        "t": 1,
        "pct": 0.536
      },
      {
        "team": "The Arabian Stallions",
        "owner": "Walid Salameh",
        "w": 7,
        "l": 7,
        "t": 0,
        "pct": 0.5
      },
      {
        "team": "The Deplorables",
        "owner": "Zachary Sizemore",
        "w": 7,
        "l": 7,
        "t": 0,
        "pct": 0.5
      },
      {
        "team": "Route 2 Ravers Reunited",
        "owner": "Joseph Garton",
        "w": 6,
        "l": 8,
        "t": 0,
        "pct": 0.429
      },
      {
        "team": "Kareem Pie",
        "owner": "Matt Geiger",
        "w": 6,
        "l": 8,
        "t": 0,
        "pct": 0.429
      },
      {
        "team": "The ACLiens",
        "owner": "Luke Rapp",
        "w": 5,
        "l": 9,
        "t": 0,
        "pct": 0.357
      },
      {
        "team": "Free Agents",
        "owner": "Zachary Hickman",
        "w": 3,
        "l": 11,
        "t": 0,
        "pct": 0.214
      }
    ],
    "schedule": {
      "Week 1": [
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 121.2,
          "homeScore": 84.1,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "Kareem Pie",
          "awayMgr": "Matt Geiger",
          "awayScore": 78,
          "homeScore": 107.7,
          "homeMgr": "Zachary Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 98.3,
          "homeScore": 136.9,
          "homeMgr": "Aaron Burns",
          "home": "The Fantasy Football Team"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 146,
          "homeScore": 122,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "Route 2 Ravers Reunited",
          "awayMgr": "Joseph Garton",
          "awayScore": 67.3,
          "homeScore": 114.9,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 117.9,
          "homeScore": 101.9,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        }
      ],
      "Week 2": [
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 91.1,
          "homeScore": 93.6,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "The Fantasy Football Team",
          "awayMgr": "Aaron Burns",
          "awayScore": 116.4,
          "homeScore": 109.7,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 68.6,
          "homeScore": 115.4,
          "homeMgr": "Matt Geiger",
          "home": "Kareem Pie"
        },
        {
          "away": "Lincoln Legends",
          "awayMgr": "Tyler Cummings",
          "awayScore": 115.9,
          "homeScore": 103.8,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 138.9,
          "homeScore": 107.1,
          "homeMgr": "Zachary Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 76.7,
          "homeScore": 100.5,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers Reunited"
        }
      ],
      "Week 3": [
        {
          "away": "The Deplorables",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 79.3,
          "homeScore": 86.7,
          "homeMgr": "Aaron Burns",
          "home": "The Fantasy Football Team"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 83.2,
          "homeScore": 98.1,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "Route 2 Ravers Reunited",
          "awayMgr": "Joseph Garton",
          "awayScore": 87.7,
          "homeScore": 81.8,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 58.6,
          "homeScore": 113.7,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 110.4,
          "homeScore": 116.5,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "Kareem Pie",
          "awayMgr": "Matt Geiger",
          "awayScore": 125.3,
          "homeScore": 130.3,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        }
      ],
      "Week 4": [
        {
          "away": "The Deplorables",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 92,
          "homeScore": 84.6,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "Lincoln Legends",
          "awayMgr": "Tyler Cummings",
          "awayScore": 79.9,
          "homeScore": 128.6,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 103.5,
          "homeScore": 114.7,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 136.4,
          "homeScore": 74.2,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers Reunited"
        },
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 84.5,
          "homeScore": 121.1,
          "homeMgr": "Aaron Burns",
          "home": "The Fantasy Football Team"
        },
        {
          "away": "Kareem Pie",
          "awayMgr": "Matt Geiger",
          "awayScore": 118.2,
          "homeScore": 119.1,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        }
      ],
      "Week 5": [
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 97.2,
          "homeScore": 117.2,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "Route 2 Ravers Reunited",
          "awayMgr": "Joseph Garton",
          "awayScore": 101.1,
          "homeScore": 99.3,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 114.2,
          "homeScore": 162.5,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "Kareem Pie",
          "awayMgr": "Matt Geiger",
          "awayScore": 135.3,
          "homeScore": 130.5,
          "homeMgr": "Aaron Burns",
          "home": "The Fantasy Football Team"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 134.1,
          "homeScore": 58.2,
          "homeMgr": "Zachary Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 111.3,
          "homeScore": 111.3,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        }
      ],
      "Week 6": [
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 89.6,
          "homeScore": 91.5,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "Lincoln Legends",
          "awayMgr": "Tyler Cummings",
          "awayScore": 101.2,
          "homeScore": 120.7,
          "homeMgr": "Matt Geiger",
          "home": "Kareem Pie"
        },
        {
          "away": "The Fantasy Football Team",
          "awayMgr": "Aaron Burns",
          "awayScore": 91.1,
          "homeScore": 126.3,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 142.6,
          "homeScore": 117,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        },
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 82.3,
          "homeScore": 121.3,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "The Deplorables",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 77.4,
          "homeScore": 100.7,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers Reunited"
        }
      ],
      "Week 7": [
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 79.2,
          "homeScore": 83.9,
          "homeMgr": "Zachary Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 102.5,
          "homeScore": 119.7,
          "homeMgr": "Aaron Burns",
          "home": "The Fantasy Football Team"
        },
        {
          "away": "Route 2 Ravers Reunited",
          "awayMgr": "Joseph Garton",
          "awayScore": 108.2,
          "homeScore": 115.4,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 99.5,
          "homeScore": 71.8,
          "homeMgr": "Matt Geiger",
          "home": "Kareem Pie"
        },
        {
          "away": "Lincoln Legends",
          "awayMgr": "Tyler Cummings",
          "awayScore": 136.5,
          "homeScore": 100.1,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 99.9,
          "homeScore": 81.3,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        }
      ],
      "Week 8": [
        {
          "away": "The Deplorables",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 93.8,
          "homeScore": 75.7,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 81.5,
          "homeScore": 112.7,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "Kareem Pie",
          "awayMgr": "Matt Geiger",
          "awayScore": 73.4,
          "homeScore": 93.4,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 81.8,
          "homeScore": 135.5,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        },
        {
          "away": "The Fantasy Football Team",
          "awayMgr": "Aaron Burns",
          "awayScore": 101,
          "homeScore": 87.2,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers Reunited"
        },
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 101,
          "homeScore": 81.7,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        }
      ],
      "Week 9": [
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 72.2,
          "homeScore": 108,
          "homeMgr": "Aaron Burns",
          "home": "The Fantasy Football Team"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 105.7,
          "homeScore": 101.7,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 93.3,
          "homeScore": 68.1,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 76.2,
          "homeScore": 62,
          "homeMgr": "Matt Geiger",
          "home": "Kareem Pie"
        },
        {
          "away": "Lincoln Legends",
          "awayMgr": "Tyler Cummings",
          "awayScore": 101.3,
          "homeScore": 75.1,
          "homeMgr": "Zachary Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "Route 2 Ravers Reunited",
          "awayMgr": "Joseph Garton",
          "awayScore": 87.6,
          "homeScore": 118.7,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        }
      ],
      "Week 10": [
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 81.9,
          "homeScore": 89.6,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 124.9,
          "homeScore": 44.9,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers Reunited"
        },
        {
          "away": "The Deplorables",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 96,
          "homeScore": 89.2,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "Kareem Pie",
          "awayMgr": "Matt Geiger",
          "awayScore": 75.4,
          "homeScore": 73.9,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "The Fantasy Football Team",
          "awayMgr": "Aaron Burns",
          "awayScore": 128.6,
          "homeScore": 97.5,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 69.8,
          "homeScore": 80.6,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        }
      ],
      "Week 11": [
        {
          "away": "The Fantasy Football Team",
          "awayMgr": "Aaron Burns",
          "awayScore": 135.1,
          "homeScore": 77.3,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 69.4,
          "homeScore": 83.5,
          "homeMgr": "Zachary Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 120.3,
          "homeScore": 86.4,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 103.3,
          "homeScore": 95.9,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "Route 2 Ravers Reunited",
          "awayMgr": "Joseph Garton",
          "awayScore": 132.4,
          "homeScore": 78.9,
          "homeMgr": "Matt Geiger",
          "home": "Kareem Pie"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 101.6,
          "homeScore": 124.1,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        }
      ],
      "Week 12": [
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 87.8,
          "homeScore": 91.8,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 100.7,
          "homeScore": 96.9,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "Lincoln Legends",
          "awayMgr": "Tyler Cummings",
          "awayScore": 56,
          "homeScore": 100.4,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "The Deplorables",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 64.6,
          "homeScore": 83.7,
          "homeMgr": "Matt Geiger",
          "home": "Kareem Pie"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 69.8,
          "homeScore": 155.4,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers Reunited"
        },
        {
          "away": "The Fantasy Football Team",
          "awayMgr": "Aaron Burns",
          "awayScore": 109.5,
          "homeScore": 111.5,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        }
      ],
      "Week 13": [
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 108.7,
          "homeScore": 84.4,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 69.3,
          "homeScore": 115.8,
          "homeMgr": "Aaron Burns",
          "home": "The Fantasy Football Team"
        },
        {
          "away": "The Deplorables",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 105.6,
          "homeScore": 116.1,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "Kareem Pie",
          "awayMgr": "Matt Geiger",
          "awayScore": 81.8,
          "homeScore": 91.2,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 70.7,
          "homeScore": 126.2,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        },
        {
          "away": "Route 2 Ravers Reunited",
          "awayMgr": "Joseph Garton",
          "awayScore": 68.6,
          "homeScore": 97.8,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        }
      ],
      "Week 14": [
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 100.6,
          "homeScore": 107.3,
          "homeMgr": "Matt Geiger",
          "home": "Kareem Pie"
        },
        {
          "away": "Lincoln Legends",
          "awayMgr": "Tyler Cummings",
          "awayScore": 127.7,
          "homeScore": 113.7,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers Reunited"
        },
        {
          "away": "The Fantasy Football Team",
          "awayMgr": "Aaron Burns",
          "awayScore": 91.7,
          "homeScore": 114.1,
          "homeMgr": "Zachary Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 85.7,
          "homeScore": 120,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 91.8,
          "homeScore": 78.9,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 97.3,
          "homeScore": 88.3,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        }
      ]
    },
    "playoffs": {
      "round1": {
        "label": "Round 1 (Week 15)",
        "games": [
          {
            "away": "Lincoln Legends",
            "awayMgr": "Tyler Cummings",
            "awayScore": 61.3,
            "homeScore": 67.4,
            "homeMgr": "Travis West",
            "home": "Business as Usual"
          },
          {
            "away": "George's Gangstas",
            "awayMgr": "George Wright",
            "awayScore": 99.2,
            "homeScore": 99.3,
            "homeMgr": "Joe Prino",
            "home": "Prino's Powerhouse"
          }
        ],
        "byes": [
          {
            "team": "The Fantasy Football Team",
            "pts": 80.7
          },
          {
            "team": "Money Badgers",
            "pts": 80.7
          }
        ]
      },
      "round2": {
        "label": "Round 2 (Week 16)",
        "games": [
          {
            "away": "Business as Usual",
            "awayMgr": "Travis West",
            "awayScore": 117.6,
            "homeScore": 94.1,
            "homeMgr": "Aaron Burns",
            "home": "The Fantasy Football Team"
          },
          {
            "away": "Prino's Powerhouse",
            "awayMgr": "Joe Prino",
            "awayScore": 102,
            "homeScore": 112,
            "homeMgr": "Tyler Clay",
            "home": "Money Badgers"
          }
        ]
      },
      "round3": {
        "label": "Round 3 / Championship (Week 17)",
        "games": [
          {
            "away": "Business as Usual",
            "awayMgr": "Travis West",
            "awayScore": 147.7,
            "homeScore": 92.8,
            "homeMgr": "Tyler Clay",
            "home": "Money Badgers"
          }
        ]
      },
      "thirdPlace": {
        "label": "Round 3 / 3rd Place (Week 17)",
        "games": [
          {
            "away": "Prino's Powerhouse",
            "awayMgr": "Joe Prino",
            "awayScore": 128.5,
            "homeScore": 97.5,
            "homeMgr": "Aaron Burns",
            "home": "The Fantasy Football Team"
          }
        ]
      }
    }
  },
  "2022": {
    "year": 2022,
    "champion": {
      "team": "The Arabian Stallions",
      "owner": "Walid Salameh"
    },
    "second": {
      "team": "George's Gangstas",
      "owner": "George Wright"
    },
    "third": {
      "team": "Money Badgers",
      "owner": "Tyler Clay"
    },
    "standings": [
    {
        "team": "Money Badgers",
        "owner": "Tyler Clay",
        "w": 10,
        "l": 4,
        "t": 0,
        "pct": 0.714
      },
    {
        "team": "The Arabian Stallions",
        "owner": "Walid Salameh",
        "w": 9,
        "l": 5,
        "t": 0,
        "pct": 0.643
      },
    {
        "team": "The ACLiens",
        "owner": "Luke Rapp",
        "w": 9,
        "l": 5,
        "t": 0,
        "pct": 0.643
      },
    {
        "team": "George's Gangstas",
        "owner": "George Wright",
        "w": 8,
        "l": 6,
        "t": 0,
        "pct": 0.571
      },
    {
        "team": "Kareem Pie",
        "owner": "Matt Geiger",
        "w": 8,
        "l": 6,
        "t": 0,
        "pct": 0.571
      },
    {
        "team": "Prino's Powerhouse",
        "owner": "Joe Prino",
        "w": 6,
        "l": 8,
        "t": 0,
        "pct": 0.429
      },
    {
        "team": "Route 2 Ravers",
        "owner": "Joseph Garton",
        "w": 8,
        "l": 6,
        "t": 0,
        "pct": 0.571
      },
    {
        "team": "Lincoln Legends",
        "owner": "Tyler Cummings",
        "w": 6,
        "l": 8,
        "t": 0,
        "pct": 0.429
      },
    {
        "team": "Business as Usual",
        "owner": "Travis West",
        "w": 4,
        "l": 10,
        "t": 0,
        "pct": 0.286
      },
    {
        "team": "The Deplorables",
        "owner": "Zachary Sizemore",
        "w": 7,
        "l": 7,
        "t": 0,
        "pct": 0.5
      },
    {
        "team": "The Fantasy Football Team",
        "owner": "Aaron Burns",
        "w": 3,
        "l": 11,
        "t": 0,
        "pct": 0.214
      },
    {
        "team": "Free Agents",
        "owner": "Zachary Hickman",
        "w": 6,
        "l": 8,
        "t": 0,
        "pct": 0.429
      }
  ],
    "schedule": {
      "Week 1": [
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 107.5,
          "homeScore": 119.3,
          "homeMgr": "Zachary Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 86.4,
          "homeScore": 103.4,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "Route 2 Ravers",
          "awayMgr": "Joseph Garton",
          "awayScore": 64.3,
          "homeScore": 119.2,
          "homeMgr": "Aaron Burns",
          "home": "The Fantasy Football Team"
        },
        {
          "away": "Lincoln Legends",
          "awayMgr": "Tyler Cummings",
          "awayScore": 123.9,
          "homeScore": 96.4,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        },
        {
          "away": "Kareem Pie",
          "awayMgr": "Matt Geiger",
          "awayScore": 111.3,
          "homeScore": 84,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 103.8,
          "homeScore": 73.1,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        }
      ],
      "Week 2": [
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 67.1,
          "homeScore": 120.2,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "The Deplorables",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 77.3,
          "homeScore": 92.8,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 157,
          "homeScore": 119.5,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        },
        {
          "away": "The Fantasy Football Team",
          "awayMgr": "Aaron Burns",
          "awayScore": 99.3,
          "homeScore": 117.9,
          "homeMgr": "Matt Geiger",
          "home": "Kareem Pie"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 99.8,
          "homeScore": 79,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 82.2,
          "homeScore": 90.4,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        }
      ],
      "Week 3": [
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 80.4,
          "homeScore": 100.3,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers"
        },
        {
          "away": "Lincoln Legends",
          "awayMgr": "Tyler Cummings",
          "awayScore": 99.8,
          "homeScore": 83.5,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "Kareem Pie",
          "awayMgr": "Matt Geiger",
          "awayScore": 106.1,
          "homeScore": 99.9,
          "homeMgr": "Zachary Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 112.7,
          "homeScore": 73.1,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 86.6,
          "homeScore": 87,
          "homeMgr": "Aaron Burns",
          "home": "The Fantasy Football Team"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 84.7,
          "homeScore": 96.6,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        }
      ],
      "Week 4": [
        {
          "away": "Lincoln Legends",
          "awayMgr": "Tyler Cummings",
          "awayScore": 84.1,
          "homeScore": 106.7,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "Route 2 Ravers",
          "awayMgr": "Joseph Garton",
          "awayScore": 141.2,
          "homeScore": 73.8,
          "homeMgr": "Matt Geiger",
          "home": "Kareem Pie"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 115.3,
          "homeScore": 88.3,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "The Deplorables",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 101.4,
          "homeScore": 126.5,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 96.2,
          "homeScore": 86.7,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "The Fantasy Football Team",
          "awayMgr": "Aaron Burns",
          "awayScore": 66,
          "homeScore": 137.2,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        }
      ],
      "Week 5": [
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 118.3,
          "homeScore": 86.1,
          "homeMgr": "Matt Geiger",
          "home": "Kareem Pie"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 86.5,
          "homeScore": 77.7,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 104.8,
          "homeScore": 105.1,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 131.6,
          "homeScore": 84.7,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 99.8,
          "homeScore": 92.6,
          "homeMgr": "Zachary Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "The Fantasy Football Team",
          "awayMgr": "Aaron Burns",
          "awayScore": 134,
          "homeScore": 67.5,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        }
      ],
      "Week 6": [
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 107.4,
          "homeScore": 98.5,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "Kareem Pie",
          "awayMgr": "Matt Geiger",
          "awayScore": 94.9,
          "homeScore": 73.6,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "Lincoln Legends",
          "awayMgr": "Tyler Cummings",
          "awayScore": 72.9,
          "homeScore": 82.8,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "Route 2 Ravers",
          "awayMgr": "Joseph Garton",
          "awayScore": 57.7,
          "homeScore": 91.1,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 104.6,
          "homeScore": 87.8,
          "homeMgr": "Aaron Burns",
          "home": "The Fantasy Football Team"
        },
        {
          "away": "The Deplorables",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 92.2,
          "homeScore": 87.1,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        }
      ],
      "Week 7": [
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 93.4,
          "homeScore": 93.7,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 108.8,
          "homeScore": 76.7,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 80,
          "homeScore": 99,
          "homeMgr": "Matt Geiger",
          "home": "Kareem Pie"
        },
        {
          "away": "The Fantasy Football Team",
          "awayMgr": "Aaron Burns",
          "awayScore": 88.7,
          "homeScore": 112.6,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 77,
          "homeScore": 71.4,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers"
        },
        {
          "away": "The Deplorables",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 113.3,
          "homeScore": 108,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        }
      ],
      "Week 8": [
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 84.9,
          "homeScore": 121.3,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 122.9,
          "homeScore": 75.9,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 126.8,
          "homeScore": 115.5,
          "homeMgr": "Aaron Burns",
          "home": "The Fantasy Football Team"
        },
        {
          "away": "Kareem Pie",
          "awayMgr": "Matt Geiger",
          "awayScore": 95.5,
          "homeScore": 131.2,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "Lincoln Legends",
          "awayMgr": "Tyler Cummings",
          "awayScore": 71.3,
          "homeScore": 95.1,
          "homeMgr": "Zachary Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "Route 2 Ravers",
          "awayMgr": "Joseph Garton",
          "awayScore": 146.4,
          "homeScore": 107.7,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        }
      ],
      "Week 9": [
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 77.8,
          "homeScore": 82.4,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        },
        {
          "away": "The Fantasy Football Team",
          "awayMgr": "Aaron Burns",
          "awayScore": 123,
          "homeScore": 134.7,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 68.6,
          "homeScore": 117.6,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "The Deplorables",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 48.6,
          "homeScore": 76,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 96.5,
          "homeScore": 83.7,
          "homeMgr": "Matt Geiger",
          "home": "Kareem Pie"
        },
        {
          "away": "Route 2 Ravers",
          "awayMgr": "Joseph Garton",
          "awayScore": 91.7,
          "homeScore": 110.3,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        }
      ],
      "Week 10": [
        {
          "away": "The Fantasy Football Team",
          "awayMgr": "Aaron Burns",
          "awayScore": 85,
          "homeScore": 99.1,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 69,
          "homeScore": 66,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 88.6,
          "homeScore": 94.4,
          "homeMgr": "Zachary Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 156.3,
          "homeScore": 95.5,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 117.7,
          "homeScore": 67.5,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers"
        },
        {
          "away": "Kareem Pie",
          "awayMgr": "Matt Geiger",
          "awayScore": 115.7,
          "homeScore": 81.4,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        }
      ],
      "Week 11": [
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 101.9,
          "homeScore": 97.4,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "The Deplorables",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 82.1,
          "homeScore": 80.5,
          "homeMgr": "Aaron Burns",
          "home": "The Fantasy Football Team"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 86.9,
          "homeScore": 94.3,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        },
        {
          "away": "Route 2 Ravers",
          "awayMgr": "Joseph Garton",
          "awayScore": 99.9,
          "homeScore": 76.6,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "Lincoln Legends",
          "awayMgr": "Tyler Cummings",
          "awayScore": 106.7,
          "homeScore": 106,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "Kareem Pie",
          "awayMgr": "Matt Geiger",
          "awayScore": 92.1,
          "homeScore": 80.5,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        }
      ],
      "Week 12": [
        {
          "away": "The Deplorables",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 106.9,
          "homeScore": 125.4,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 106.4,
          "homeScore": 94.1,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "The Fantasy Football Team",
          "awayMgr": "Aaron Burns",
          "awayScore": 75.5,
          "homeScore": 86.4,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 104.9,
          "homeScore": 91.7,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 126.1,
          "homeScore": 87.6,
          "homeMgr": "Matt Geiger",
          "home": "Kareem Pie"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 91.2,
          "homeScore": 104,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        }
      ],
      "Week 13": [
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 118.5,
          "homeScore": 93.1,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "Route 2 Ravers",
          "awayMgr": "Joseph Garton",
          "awayScore": 114,
          "homeScore": 77.5,
          "homeMgr": "Zachary Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "Lincoln Legends",
          "awayMgr": "Tyler Cummings",
          "awayScore": 88.9,
          "homeScore": 56.3,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "Kareem Pie",
          "awayMgr": "Matt Geiger",
          "awayScore": 104.9,
          "homeScore": 70.9,
          "homeMgr": "Aaron Burns",
          "home": "The Fantasy Football Team"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 114.7,
          "homeScore": 76.6,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 108.6,
          "homeScore": 97.4,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        }
      ],
      "Week 14": [
        {
          "away": "Route 2 Ravers",
          "awayMgr": "Joseph Garton",
          "awayScore": 100.1,
          "homeScore": 142.8,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 87.5,
          "homeScore": 77,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        },
        {
          "away": "The Deplorables",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 104.1,
          "homeScore": 98,
          "homeMgr": "Matt Geiger",
          "home": "Kareem Pie"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 54.8,
          "homeScore": 67.2,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "The Fantasy Football Team",
          "awayMgr": "Aaron Burns",
          "awayScore": 72.1,
          "homeScore": 85.8,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 75.4,
          "homeScore": 93.5,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        }
      ]
    },
    "playoffs": {
      "round1": {
        "label": "Round 1 (Week 15)",
        "games": [
          {
            "away": "Kareem Pie",
            "awayMgr": "Matt Geiger",
            "awayScore": 109.5,
            "homeScore": 112.7,
            "homeMgr": "George Wright",
            "home": "George's Gangstas"
          },
          {
            "away": "Prino's Powerhouse",
            "awayMgr": "Joe Prino",
            "awayScore": 123.5,
            "homeScore": 56.8,
            "homeMgr": "Luke Rapp",
            "home": "The ACLiens"
          }
        ],
        "byes": [
          {
            "team": "Money Badgers",
            "pts": 121.1
          },
          {
            "team": "The Arabian Stallions",
            "pts": 116.6
          }
        ]
      },
      "round2": {
        "label": "Round 2 (Week 16)",
        "games": [
          {
            "away": "George's Gangstas",
            "awayMgr": "George Wright",
            "awayScore": 144.5,
            "homeScore": 86.9,
            "homeMgr": "Tyler Clay",
            "home": "Money Badgers"
          },
          {
            "away": "Prino's Powerhouse",
            "awayMgr": "Joe Prino",
            "awayScore": 85.1,
            "homeScore": 100.7,
            "homeMgr": "Walid Salameh",
            "home": "The Arabian Stallions"
          }
        ]
      },
      "round3": {
        "label": "Round 3 / Championship (Week 17)",
        "games": [
          {
            "away": "George's Gangstas",
            "awayMgr": "George Wright",
            "awayScore": 51,
            "homeScore": 100.3,
            "homeMgr": "Walid Salameh",
            "home": "The Arabian Stallions"
          }
        ]
      },
      "thirdPlace": {
        "label": "Round 3 / 3rd Place (Week 17)",
        "games": [
          {
            "away": "Prino's Powerhouse",
            "awayMgr": "Joe Prino",
            "awayScore": 42.6,
            "homeScore": 92.2,
            "homeMgr": "Tyler Clay",
            "home": "Money Badgers"
          }
        ]
      }
    }
  },
  "2023": {
    "year": 2023,
    "champion": {
      "team": "Money Badgers",
      "owner": "Tyler Clay"
    },
    "second": {
      "team": "The Fantasy Football Team",
      "owner": "Aaron Burns"
    },
    "third": {
      "team": "The Deplorables",
      "owner": "Zachary Sizemore"
    },
    "standings": [
    {
        "team": "The Deplorables",
        "owner": "Zachary Sizemore",
        "w": 10,
        "l": 4,
        "t": 0,
        "pct": 0.714
      },
    {
        "team": "Money Badgers",
        "owner": "Tyler Clay",
        "w": 10,
        "l": 4,
        "t": 0,
        "pct": 0.714
      },
    {
        "team": "George's Gangstas",
        "owner": "George Wright",
        "w": 10,
        "l": 4,
        "t": 0,
        "pct": 0.714
      },
    {
        "team": "Kareem Pie",
        "owner": "Matt Geiger",
        "w": 8,
        "l": 6,
        "t": 0,
        "pct": 0.571
      },
    {
        "team": "The Fantasy Football Team",
        "owner": "Aaron Burns",
        "w": 8,
        "l": 6,
        "t": 0,
        "pct": 0.571
      },
    {
        "team": "Lincoln Legends",
        "owner": "Tyler Cummings",
        "w": 5,
        "l": 9,
        "t": 0,
        "pct": 0.357
      },
    {
        "team": "The ACLiens",
        "owner": "Luke Rapp",
        "w": 7,
        "l": 7,
        "t": 0,
        "pct": 0.5
      },
    {
        "team": "Prino's Powerhouse",
        "owner": "Joe Prino",
        "w": 6,
        "l": 8,
        "t": 0,
        "pct": 0.429
      },
    {
        "team": "Route 2 Ravers",
        "owner": "Joseph Garton",
        "w": 4,
        "l": 10,
        "t": 0,
        "pct": 0.286
      },
    {
        "team": "Free Agents",
        "owner": "Zachary Hickman",
        "w": 5,
        "l": 9,
        "t": 0,
        "pct": 0.357
      },
    {
        "team": "The Arabian Stallions",
        "owner": "Walid Salameh",
        "w": 6,
        "l": 8,
        "t": 0,
        "pct": 0.429
      },
    {
        "team": "Business as Usual",
        "owner": "Travis West",
        "w": 5,
        "l": 9,
        "t": 0,
        "pct": 0.357
      }
  ],
    "schedule": {
      "Week 1": [
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 98.1,
          "homeScore": 98.4,
          "homeMgr": "Zachary Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 110.2,
          "homeScore": 82.1,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 77.9,
          "homeScore": 55.9,
          "homeMgr": "Matt Geiger",
          "home": "Kareem Pie"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 83.7,
          "homeScore": 74.4,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "Route 2 Ravers",
          "awayMgr": "Joseph Garton",
          "awayScore": 77.6,
          "homeScore": 86.9,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        },
        {
          "away": "The Fantasy Football Team",
          "awayMgr": "Aaron Burns",
          "awayScore": 88.8,
          "homeScore": 83.4,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        }
      ],
      "Week 2": [
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 91.2,
          "homeScore": 69.1,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "The Deplorables",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 111,
          "homeScore": 118.9,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "Lincoln Legends",
          "awayMgr": "Tyler Cummings",
          "awayScore": 115.9,
          "homeScore": 121,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "Kareem Pie",
          "awayMgr": "Matt Geiger",
          "awayScore": 100.2,
          "homeScore": 89.1,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers"
        },
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 101.5,
          "homeScore": 104.8,
          "homeMgr": "Aaron Burns",
          "home": "The Fantasy Football Team"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 141.9,
          "homeScore": 71.4,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        }
      ],
      "Week 3": [
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 85.2,
          "homeScore": 111.1,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 97.3,
          "homeScore": 98.2,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "Route 2 Ravers",
          "awayMgr": "Joseph Garton",
          "awayScore": 116.5,
          "homeScore": 134.2,
          "homeMgr": "Zachary Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "The Fantasy Football Team",
          "awayMgr": "Aaron Burns",
          "awayScore": 118.3,
          "homeScore": 125.3,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 75.1,
          "homeScore": 115.9,
          "homeMgr": "Matt Geiger",
          "home": "Kareem Pie"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 87.4,
          "homeScore": 59,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        }
      ],
      "Week 4": [
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 71,
          "homeScore": 110.6,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 83.1,
          "homeScore": 123.6,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 110.4,
          "homeScore": 52.8,
          "homeMgr": "Aaron Burns",
          "home": "The Fantasy Football Team"
        },
        {
          "away": "The Deplorables",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 135,
          "homeScore": 111.5,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "Lincoln Legends",
          "awayMgr": "Tyler Cummings",
          "awayScore": 122.4,
          "homeScore": 99.2,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        },
        {
          "away": "Kareem Pie",
          "awayMgr": "Matt Geiger",
          "awayScore": 65.2,
          "homeScore": 131.1,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        }
      ],
      "Week 5": [
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 112.4,
          "homeScore": 103.4,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers"
        },
        {
          "away": "The Fantasy Football Team",
          "awayMgr": "Aaron Burns",
          "awayScore": 74.9,
          "homeScore": 81.5,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 104,
          "homeScore": 81.3,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 63.8,
          "homeScore": 108.2,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 70.9,
          "homeScore": 117.4,
          "homeMgr": "Zachary Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "Kareem Pie",
          "awayMgr": "Matt Geiger",
          "awayScore": 124.7,
          "homeScore": 150.4,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        }
      ],
      "Week 6": [
        {
          "away": "The Fantasy Football Team",
          "awayMgr": "Aaron Burns",
          "awayScore": 86.7,
          "homeScore": 68.6,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "Route 2 Ravers",
          "awayMgr": "Joseph Garton",
          "awayScore": 106.5,
          "homeScore": 98.2,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 96,
          "homeScore": 79.3,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 67.2,
          "homeScore": 81.6,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 79.9,
          "homeScore": 104.4,
          "homeMgr": "Matt Geiger",
          "home": "Kareem Pie"
        },
        {
          "away": "The Deplorables",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 120.6,
          "homeScore": 102.3,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        }
      ],
      "Week 7": [
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 72.7,
          "homeScore": 75.7,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 116.5,
          "homeScore": 69.4,
          "homeMgr": "Aaron Burns",
          "home": "The Fantasy Football Team"
        },
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 119.3,
          "homeScore": 106.3,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers"
        },
        {
          "away": "Kareem Pie",
          "awayMgr": "Matt Geiger",
          "awayScore": 76,
          "homeScore": 96.6,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "Lincoln Legends",
          "awayMgr": "Tyler Cummings",
          "awayScore": 124.7,
          "homeScore": 96.2,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "The Deplorables",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 122.1,
          "homeScore": 99.7,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        }
      ],
      "Week 8": [
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 105.5,
          "homeScore": 151.5,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 95.7,
          "homeScore": 78.7,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "The Fantasy Football Team",
          "awayMgr": "Aaron Burns",
          "awayScore": 123.2,
          "homeScore": 120.4,
          "homeMgr": "Matt Geiger",
          "home": "Kareem Pie"
        },
        {
          "away": "Route 2 Ravers",
          "awayMgr": "Joseph Garton",
          "awayScore": 104.9,
          "homeScore": 69.5,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 101,
          "homeScore": 109,
          "homeMgr": "Zachary Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 85.2,
          "homeScore": 91.4,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        }
      ],
      "Week 9": [
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 80.1,
          "homeScore": 122.3,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "Kareem Pie",
          "awayMgr": "Matt Geiger",
          "awayScore": 105.7,
          "homeScore": 60.8,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        },
        {
          "away": "Lincoln Legends",
          "awayMgr": "Tyler Cummings",
          "awayScore": 89.9,
          "homeScore": 105.6,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "The Deplorables",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 74.4,
          "homeScore": 111.1,
          "homeMgr": "Aaron Burns",
          "home": "The Fantasy Football Team"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 82,
          "homeScore": 50.6,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 55.5,
          "homeScore": 76.5,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        }
      ],
      "Week 10": [
        {
          "away": "Kareem Pie",
          "awayMgr": "Matt Geiger",
          "awayScore": 130.5,
          "homeScore": 100.4,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 81,
          "homeScore": 103.1,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 101.7,
          "homeScore": 97.3,
          "homeMgr": "Zachary Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 56.2,
          "homeScore": 58.7,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "The Fantasy Football Team",
          "awayMgr": "Aaron Burns",
          "awayScore": 122.1,
          "homeScore": 101.4,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "Route 2 Ravers",
          "awayMgr": "Joseph Garton",
          "awayScore": 76.6,
          "homeScore": 117.4,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        }
      ],
      "Week 11": [
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 118.6,
          "homeScore": 90.8,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        },
        {
          "away": "The Deplorables",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 105.4,
          "homeScore": 64.6,
          "homeMgr": "Matt Geiger",
          "home": "Kareem Pie"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 118.4,
          "homeScore": 86.6,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 109.2,
          "homeScore": 80.8,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 84,
          "homeScore": 62.8,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "Route 2 Ravers",
          "awayMgr": "Joseph Garton",
          "awayScore": 73.5,
          "homeScore": 89,
          "homeMgr": "Aaron Burns",
          "home": "The Fantasy Football Team"
        }
      ],
      "Week 12": [
        {
          "away": "The Deplorables",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 141.5,
          "homeScore": 77.2,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "Lincoln Legends",
          "awayMgr": "Tyler Cummings",
          "awayScore": 99.3,
          "homeScore": 128.2,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "Kareem Pie",
          "awayMgr": "Matt Geiger",
          "awayScore": 87.9,
          "homeScore": 85.2,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 109.8,
          "homeScore": 78.1,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 128.8,
          "homeScore": 129.9,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 107.6,
          "homeScore": 79,
          "homeMgr": "Aaron Burns",
          "home": "The Fantasy Football Team"
        }
      ],
      "Week 13": [
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 115.2,
          "homeScore": 113.4,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 114.4,
          "homeScore": 104.3,
          "homeMgr": "Zachary Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 152.1,
          "homeScore": 91.1,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        },
        {
          "away": "Route 2 Ravers",
          "awayMgr": "Joseph Garton",
          "awayScore": 95.5,
          "homeScore": 111.3,
          "homeMgr": "Matt Geiger",
          "home": "Kareem Pie"
        },
        {
          "away": "The Fantasy Football Team",
          "awayMgr": "Aaron Burns",
          "awayScore": 68.6,
          "homeScore": 98.4,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 90,
          "homeScore": 101.7,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        }
      ],
      "Week 14": [
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 108.1,
          "homeScore": 124.6,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 73.4,
          "homeScore": 113.5,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "The Deplorables",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 115.8,
          "homeScore": 70.9,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers"
        },
        {
          "away": "Lincoln Legends",
          "awayMgr": "Tyler Cummings",
          "awayScore": 83,
          "homeScore": 94.6,
          "homeMgr": "Aaron Burns",
          "home": "The Fantasy Football Team"
        },
        {
          "away": "Kareem Pie",
          "awayMgr": "Matt Geiger",
          "awayScore": 92.5,
          "homeScore": 67.6,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 65.8,
          "homeScore": 130.3,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        }
      ]
    },
    "playoffs": {
      "round1": {
        "label": "Round 1 (Week 15)",
        "games": [
          {
            "away": "The Fantasy Football Team",
            "awayMgr": "Aaron Burns",
            "awayScore": 80,
            "homeScore": 72,
            "homeMgr": "Matt Geiger",
            "home": "Kareem Pie"
          },
          {
            "away": "Lincoln Legends",
            "awayMgr": "Tyler Cummings",
            "awayScore": 88.8,
            "homeScore": 98.2,
            "homeMgr": "George Wright",
            "home": "George's Gangstas"
          }
        ],
        "byes": [
          {
            "team": "The Deplorables",
            "pts": 87.7
          },
          {
            "team": "Money Badgers",
            "pts": 86.9
          }
        ]
      },
      "round2": {
        "label": "Round 2 (Week 16)",
        "games": [
          {
            "away": "The Fantasy Football Team",
            "awayMgr": "Aaron Burns",
            "awayScore": 126.4,
            "homeScore": 117.8,
            "homeMgr": "Zachary Sizemore",
            "home": "The Deplorables"
          },
          {
            "away": "George's Gangstas",
            "awayMgr": "George Wright",
            "awayScore": 75.9,
            "homeScore": 78.4,
            "homeMgr": "Tyler Clay",
            "home": "Money Badgers"
          }
        ]
      },
      "round3": {
        "label": "Round 3 / Championship (Week 17)",
        "games": [
          {
            "away": "The Fantasy Football Team",
            "awayMgr": "Aaron Burns",
            "awayScore": 69.5,
            "homeScore": 81.3,
            "homeMgr": "Tyler Clay",
            "home": "Money Badgers"
          }
        ]
      },
      "thirdPlace": {
        "label": "Round 3 / 3rd Place (Week 17)",
        "games": [
          {
            "away": "George's Gangstas",
            "awayMgr": "George Wright",
            "awayScore": 66.2,
            "homeScore": 132.1,
            "homeMgr": "Zachary Sizemore",
            "home": "The Deplorables"
          }
        ]
      }
    }
  },
  "2024": {
    "year": 2024,
    "champion": {
      "team": "The ACLiens",
      "owner": "Luke Rapp"
    },
    "second": {
      "team": "Prino's Powerhouse",
      "owner": "Joe Prino"
    },
    "third": {
      "team": "Free Agents",
      "owner": "Zachary Hickman"
    },
    "standings": [
    {
        "team": "Free Agents",
        "owner": "Zachary Hickman",
        "w": 11,
        "l": 3,
        "t": 0,
        "pct": 0.786
      },
    {
        "team": "George's Gangstas",
        "owner": "George Wright",
        "w": 10,
        "l": 4,
        "t": 0,
        "pct": 0.714
      },
    {
        "team": "Prino's Powerhouse",
        "owner": "Joe Prino",
        "w": 9,
        "l": 5,
        "t": 0,
        "pct": 0.643
      },
    {
        "team": "The ACLiens",
        "owner": "Luke Rapp",
        "w": 8,
        "l": 6,
        "t": 0,
        "pct": 0.571
      },
    {
        "team": "The Arabian Stallions",
        "owner": "Walid Salameh",
        "w": 8,
        "l": 6,
        "t": 0,
        "pct": 0.571
      },
    {
        "team": "The Deplorables",
        "owner": "Zachary Sizemore",
        "w": 6,
        "l": 8,
        "t": 0,
        "pct": 0.429
      },
    {
        "team": "Lincoln Legends",
        "owner": "Tyler Cummings",
        "w": 6,
        "l": 8,
        "t": 0,
        "pct": 0.429
      },
    {
        "team": "Business as Usual",
        "owner": "Travis West",
        "w": 6,
        "l": 8,
        "t": 0,
        "pct": 0.429
      },
    {
        "team": "Route 2 Ravers",
        "owner": "Joseph Garton",
        "w": 5,
        "l": 9,
        "t": 0,
        "pct": 0.357
      },
    {
        "team": "Money Badgers",
        "owner": "Tyler Clay",
        "w": 4,
        "l": 10,
        "t": 0,
        "pct": 0.286
      },
    {
        "team": "The Fantasy Football Team",
        "owner": "Aaron Burns",
        "w": 6,
        "l": 8,
        "t": 0,
        "pct": 0.429
      },
    {
        "team": "Kareem Pie",
        "owner": "Matt Geiger",
        "w": 5,
        "l": 9,
        "t": 0,
        "pct": 0.357
      }
  ],
    "schedule": {
      "Week 1": [
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 86,
          "homeScore": 113.1,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "Kareem Pie",
          "awayMgr": "Matt Geiger",
          "awayScore": 64.9,
          "homeScore": 123.9,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        },
        {
          "away": "The Deplorables",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 94.9,
          "homeScore": 121.3,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 102.4,
          "homeScore": 122.5,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 82.5,
          "homeScore": 95.6,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "The Fantasy Football Team",
          "awayMgr": "Aaron Burns",
          "awayScore": 55.5,
          "homeScore": 69.3,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        }
      ],
      "Week 2": [
        {
          "away": "Kareem Pie",
          "awayMgr": "Matt Geiger",
          "awayScore": 96.9,
          "homeScore": 148.7,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 124,
          "homeScore": 73,
          "homeMgr": "Zachary Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "Lincoln Legends",
          "awayMgr": "Tyler Cummings",
          "awayScore": 78.6,
          "homeScore": 98.7,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 90.8,
          "homeScore": 93.7,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        },
        {
          "away": "Route 2 Ravers",
          "awayMgr": "Joseph Garton",
          "awayScore": 98.5,
          "homeScore": 68.6,
          "homeMgr": "Aaron Burns",
          "home": "The Fantasy Football Team"
        },
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 101,
          "homeScore": 78.7,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        }
      ],
      "Week 3": [
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 73.2,
          "homeScore": 124.8,
          "homeMgr": "Zachary Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 86.3,
          "homeScore": 119.7,
          "homeMgr": "Matt Geiger",
          "home": "Kareem Pie"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 107.9,
          "homeScore": 70,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "The Fantasy Football Team",
          "awayMgr": "Aaron Burns",
          "awayScore": 98.5,
          "homeScore": 96.5,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 126.8,
          "homeScore": 108.4,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 118.6,
          "homeScore": 71.6,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers"
        }
      ],
      "Week 4": [
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 64.4,
          "homeScore": 104.4,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "The Deplorables",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 102.4,
          "homeScore": 103.6,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        },
        {
          "away": "Kareem Pie",
          "awayMgr": "Matt Geiger",
          "awayScore": 68,
          "homeScore": 95.4,
          "homeMgr": "Aaron Burns",
          "home": "The Fantasy Football Team"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 100.4,
          "homeScore": 116.4,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "Lincoln Legends",
          "awayMgr": "Tyler Cummings",
          "awayScore": 79.5,
          "homeScore": 108.8,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 92.6,
          "homeScore": 85.9,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers"
        }
      ],
      "Week 5": [
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 76.4,
          "homeScore": 140.3,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        },
        {
          "away": "The Fantasy Football Team",
          "awayMgr": "Aaron Burns",
          "awayScore": 69.7,
          "homeScore": 113,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 99.4,
          "homeScore": 93.8,
          "homeMgr": "Zachary Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 73.2,
          "homeScore": 99.3,
          "homeMgr": "Matt Geiger",
          "home": "Kareem Pie"
        },
        {
          "away": "Route 2 Ravers",
          "awayMgr": "Joseph Garton",
          "awayScore": 89.3,
          "homeScore": 89.8,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 108,
          "homeScore": 105.4,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        }
      ],
      "Week 6": [
        {
          "away": "The Fantasy Football Team",
          "awayMgr": "Aaron Burns",
          "awayScore": 85.3,
          "homeScore": 81.3,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 67.2,
          "homeScore": 119,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 113.4,
          "homeScore": 81.6,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "The Deplorables",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 102.7,
          "homeScore": 158.4,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers"
        },
        {
          "away": "Kareem Pie",
          "awayMgr": "Matt Geiger",
          "awayScore": 59,
          "homeScore": 129.3,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 99.1,
          "homeScore": 100.1,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        }
      ],
      "Week 7": [
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 70.7,
          "homeScore": 95.2,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 110.4,
          "homeScore": 95.1,
          "homeMgr": "Aaron Burns",
          "home": "The Fantasy Football Team"
        },
        {
          "away": "Route 2 Ravers",
          "awayMgr": "Joseph Garton",
          "awayScore": 91.7,
          "homeScore": 99.1,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 98.8,
          "homeScore": 86.5,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "Lincoln Legends",
          "awayMgr": "Tyler Cummings",
          "awayScore": 58.6,
          "homeScore": 111.9,
          "homeMgr": "Zachary Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 89.6,
          "homeScore": 65.8,
          "homeMgr": "Matt Geiger",
          "home": "Kareem Pie"
        }
      ],
      "Week 8": [
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 101.6,
          "homeScore": 84.3,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 132.1,
          "homeScore": 84.1,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers"
        },
        {
          "away": "The Fantasy Football Team",
          "awayMgr": "Aaron Burns",
          "awayScore": 83.9,
          "homeScore": 119.7,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 126.3,
          "homeScore": 105.2,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 117,
          "homeScore": 153,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "The Deplorables",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 82.3,
          "homeScore": 96.7,
          "homeMgr": "Matt Geiger",
          "home": "Kareem Pie"
        }
      ],
      "Week 9": [
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 106.6,
          "homeScore": 95.9,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 112.7,
          "homeScore": 99.3,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "Lincoln Legends",
          "awayMgr": "Tyler Cummings",
          "awayScore": 113.9,
          "homeScore": 120.7,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 116.2,
          "homeScore": 104.9,
          "homeMgr": "Aaron Burns",
          "home": "The Fantasy Football Team"
        },
        {
          "away": "Kareem Pie",
          "awayMgr": "Matt Geiger",
          "awayScore": 77.4,
          "homeScore": 74.9,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        },
        {
          "away": "The Deplorables",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 96.6,
          "homeScore": 114.6,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        }
      ],
      "Week 10": [
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 103,
          "homeScore": 86.1,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "Route 2 Ravers",
          "awayMgr": "Joseph Garton",
          "awayScore": 88.8,
          "homeScore": 63.1,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        },
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 61,
          "homeScore": 83.5,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 111.3,
          "homeScore": 95.3,
          "homeMgr": "Matt Geiger",
          "home": "Kareem Pie"
        },
        {
          "away": "The Fantasy Football Team",
          "awayMgr": "Aaron Burns",
          "awayScore": 105.3,
          "homeScore": 100.7,
          "homeMgr": "Zachary Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 130.9,
          "homeScore": 73.2,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        }
      ],
      "Week 11": [
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 93,
          "homeScore": 123.2,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 93.1,
          "homeScore": 84.3,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "Kareem Pie",
          "awayMgr": "Matt Geiger",
          "awayScore": 91.6,
          "homeScore": 105.9,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers"
        },
        {
          "away": "The Deplorables",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 155.6,
          "homeScore": 100.8,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 87.5,
          "homeScore": 85.5,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 89.1,
          "homeScore": 103.4,
          "homeMgr": "Aaron Burns",
          "home": "The Fantasy Football Team"
        }
      ],
      "Week 12": [
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 117.6,
          "homeScore": 70.7,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "Lincoln Legends",
          "awayMgr": "Tyler Cummings",
          "awayScore": 100.3,
          "homeScore": 73,
          "homeMgr": "Matt Geiger",
          "home": "Kareem Pie"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 125,
          "homeScore": 134.3,
          "homeMgr": "Zachary Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "Route 2 Ravers",
          "awayMgr": "Joseph Garton",
          "awayScore": 56.4,
          "homeScore": 105.4,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 95.9,
          "homeScore": 91.3,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 104.7,
          "homeScore": 97.4,
          "homeMgr": "Aaron Burns",
          "home": "The Fantasy Football Team"
        }
      ],
      "Week 13": [
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 92.3,
          "homeScore": 77.8,
          "homeMgr": "Matt Geiger",
          "home": "Kareem Pie"
        },
        {
          "away": "The Deplorables",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 111.5,
          "homeScore": 95.9,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 70.1,
          "homeScore": 118.5,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 117.2,
          "homeScore": 142.7,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "The Fantasy Football Team",
          "awayMgr": "Aaron Burns",
          "awayScore": 83.9,
          "homeScore": 81,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 85.8,
          "homeScore": 67.1,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        }
      ],
      "Week 14": [
        {
          "away": "The Deplorables",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 124.2,
          "homeScore": 90.4,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "Kareem Pie",
          "awayMgr": "Matt Geiger",
          "awayScore": 90,
          "homeScore": 85.1,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 98.5,
          "homeScore": 130.7,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        },
        {
          "away": "Lincoln Legends",
          "awayMgr": "Tyler Cummings",
          "awayScore": 144.4,
          "homeScore": 82.7,
          "homeMgr": "Aaron Burns",
          "home": "The Fantasy Football Team"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 136.9,
          "homeScore": 120.7,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "Route 2 Ravers",
          "awayMgr": "Joseph Garton",
          "awayScore": 75.6,
          "homeScore": 127,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        }
      ]
    },
    "playoffs": {
      "round1": {
        "label": "Round 1 (Week 15)",
        "games": [
          {
            "away": "The Arabian Stallions",
            "awayMgr": "Walid Salameh",
            "awayScore": 109,
            "homeScore": 119,
            "homeMgr": "Luke Rapp",
            "home": "The ACLiens"
          },
          {
            "away": "The Deplorables",
            "awayMgr": "Zachary Sizemore",
            "awayScore": 96.4,
            "homeScore": 141.1,
            "homeMgr": "Joe Prino",
            "home": "Prino's Powerhouse"
          }
        ],
        "byes": [
          {
            "team": "Free Agents",
            "pts": 95.7
          },
          {
            "team": "George's Gangstas",
            "pts": 107.9
          }
        ]
      },
      "round2": {
        "label": "Round 2 (Week 16)",
        "games": [
          {
            "away": "The ACLiens",
            "awayMgr": "Luke Rapp",
            "awayScore": 99.4,
            "homeScore": 94.7,
            "homeMgr": "Zachary Hickman",
            "home": "Free Agents"
          },
          {
            "away": "Prino's Powerhouse",
            "awayMgr": "Joe Prino",
            "awayScore": 150.2,
            "homeScore": 103.2,
            "homeMgr": "George Wright",
            "home": "George's Gangstas"
          }
        ]
      },
      "round3": {
        "label": "Round 3 / Championship (Week 17)",
        "games": [
          {
            "away": "The ACLiens",
            "awayMgr": "Luke Rapp",
            "awayScore": 139,
            "homeScore": 81.8,
            "homeMgr": "Joe Prino",
            "home": "Prino's Powerhouse"
          }
        ]
      },
      "thirdPlace": {
        "label": "Round 3 / 3rd Place (Week 17)",
        "games": [
          {
            "away": "George's Gangstas",
            "awayMgr": "George Wright",
            "awayScore": 96.1,
            "homeScore": 97.5,
            "homeMgr": "Zachary Hickman",
            "home": "Free Agents"
          }
        ]
      }
    }
  },
  "2025": {
    "year": 2025,
    "champion": {
      "team": "The Deplorables",
      "owner": "Zachary Sizemore"
    },
    "second": {
      "team": "The Fantasy Football Team",
      "owner": "Aaron Burns"
    },
    "third": {
      "team": "Lincoln Legends",
      "owner": "Tyler Cummings"
    },
    "standings": [
    {
        "team": "Lincoln Legends",
        "owner": "Tyler Cummings",
        "w": 13,
        "l": 1,
        "t": 0,
        "pct": 0.929
      },
    {
        "team": "Money Badgers",
        "owner": "Tyler Clay",
        "w": 9,
        "l": 5,
        "t": 0,
        "pct": 0.643
      },
    {
        "team": "The Fantasy Football Team",
        "owner": "Aaron Burns",
        "w": 8,
        "l": 6,
        "t": 0,
        "pct": 0.571
      },
    {
        "team": "The Deplorables",
        "owner": "Zachary Sizemore",
        "w": 7,
        "l": 7,
        "t": 0,
        "pct": 0.5
      },
    {
        "team": "Free Agents",
        "owner": "Zachary Hickman",
        "w": 7,
        "l": 7,
        "t": 0,
        "pct": 0.5
      },
    {
        "team": "Business as Usual",
        "owner": "Travis West",
        "w": 6,
        "l": 8,
        "t": 0,
        "pct": 0.429
      },
    {
        "team": "The ACLiens",
        "owner": "Luke Rapp",
        "w": 5,
        "l": 9,
        "t": 0,
        "pct": 0.357
      },
    {
        "team": "George's Gangstas",
        "owner": "George Wright",
        "w": 7,
        "l": 7,
        "t": 0,
        "pct": 0.5
      },
    {
        "team": "Prino's Powerhouse",
        "owner": "Joe Prino",
        "w": 7,
        "l": 7,
        "t": 0,
        "pct": 0.5
      },
    {
        "team": "The Arabian Stallions",
        "owner": "Walid Salameh",
        "w": 4,
        "l": 10,
        "t": 0,
        "pct": 0.286
      },
    {
        "team": "Kareem Pie",
        "owner": "Matt Geiger",
        "w": 6,
        "l": 8,
        "t": 0,
        "pct": 0.429
      },
    {
        "team": "Route 2 Ravers",
        "owner": "Joseph Garton",
        "w": 5,
        "l": 9,
        "t": 0,
        "pct": 0.357
      }
  ],
    "schedule": {
      "Week 1": [
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 89.4,
          "homeScore": 93.1,
          "homeMgr": "Matt Geiger",
          "home": "Kareem Pie"
        },
        {
          "away": "Lincoln Legends",
          "awayMgr": "Tyler Cummings",
          "awayScore": 119.9,
          "homeScore": 64.3,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers"
        },
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 93.1,
          "homeScore": 105.4,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 65.8,
          "homeScore": 107.1,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "The Fantasy Football Team",
          "awayMgr": "Aaron Burns",
          "awayScore": 82.6,
          "homeScore": 85.1,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        },
        {
          "away": "The Deplorables",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 119.4,
          "homeScore": 91.9,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        }
      ],
      "Week 2": [
        {
          "away": "Lincoln Legends",
          "awayMgr": "Tyler Cummings",
          "awayScore": 121.5,
          "homeScore": 111.5,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "Kareem Pie",
          "awayMgr": "Matt Geiger",
          "awayScore": 86.5,
          "homeScore": 62.9,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "Route 2 Ravers",
          "awayMgr": "Joseph Garton",
          "awayScore": 80.6,
          "homeScore": 125.8,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 83.9,
          "homeScore": 96.7,
          "homeMgr": "Aaron Burns",
          "home": "The Fantasy Football Team"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 66,
          "homeScore": 100.5,
          "homeMgr": "Zachary Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 105,
          "homeScore": 112.5,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        }
      ],
      "Week 3": [
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 111.3,
          "homeScore": 100,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 111.1,
          "homeScore": 112.3,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        },
        {
          "away": "The Fantasy Football Team",
          "awayMgr": "Aaron Burns",
          "awayScore": 96,
          "homeScore": 55.5,
          "homeMgr": "Matt Geiger",
          "home": "Kareem Pie"
        },
        {
          "away": "The Deplorables",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 102.1,
          "homeScore": 107,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 78.8,
          "homeScore": 73.9,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 110,
          "homeScore": 107.6,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        }
      ],
      "Week 4": [
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 99.5,
          "homeScore": 101.9,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 141,
          "homeScore": 82.3,
          "homeMgr": "Aaron Burns",
          "home": "The Fantasy Football Team"
        },
        {
          "away": "Lincoln Legends",
          "awayMgr": "Tyler Cummings",
          "awayScore": 88.3,
          "homeScore": 118.5,
          "homeMgr": "Zachary Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "Kareem Pie",
          "awayMgr": "Matt Geiger",
          "awayScore": 118.8,
          "homeScore": 82.4,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "Route 2 Ravers",
          "awayMgr": "Joseph Garton",
          "awayScore": 109.4,
          "homeScore": 85.6,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 82.7,
          "homeScore": 130.8,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        }
      ],
      "Week 5": [
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 100.6,
          "homeScore": 87.1,
          "homeMgr": "Aaron Burns",
          "home": "The Fantasy Football Team"
        },
        {
          "away": "The Deplorables",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 99.6,
          "homeScore": 117.2,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 111.2,
          "homeScore": 87.9,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 94.9,
          "homeScore": 123.7,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 118.3,
          "homeScore": 108.4,
          "homeMgr": "Matt Geiger",
          "home": "Kareem Pie"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 118.1,
          "homeScore": 96.2,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers"
        }
      ],
      "Week 6": [
        {
          "away": "The Deplorables",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 94.7,
          "homeScore": 103.4,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "The Fantasy Football Team",
          "awayMgr": "Aaron Burns",
          "awayScore": 75.4,
          "homeScore": 102.3,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 122.7,
          "homeScore": 91,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        },
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 71,
          "homeScore": 92.2,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "Lincoln Legends",
          "awayMgr": "Tyler Cummings",
          "awayScore": 106.8,
          "homeScore": 77.1,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "Kareem Pie",
          "awayMgr": "Matt Geiger",
          "awayScore": 98.9,
          "homeScore": 121.3,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers"
        }
      ],
      "Week 7": [
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 127.4,
          "homeScore": 120.7,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 116.9,
          "homeScore": 101.7,
          "homeMgr": "Zachary Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 72.9,
          "homeScore": 87.8,
          "homeMgr": "Aaron Burns",
          "home": "The Fantasy Football Team"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 136.8,
          "homeScore": 59.8,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "Route 2 Ravers",
          "awayMgr": "Joseph Garton",
          "awayScore": 84.9,
          "homeScore": 86.3,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "Kareem Pie",
          "awayMgr": "Matt Geiger",
          "awayScore": 92.8,
          "homeScore": 114.4,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        }
      ],
      "Week 8": [
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 123.4,
          "homeScore": 120.1,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 106.9,
          "homeScore": 74.1,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "The Deplorables",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 133.4,
          "homeScore": 105.9,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "The Fantasy Football Team",
          "awayMgr": "Aaron Burns",
          "awayScore": 101.7,
          "homeScore": 79.3,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 93.2,
          "homeScore": 61.5,
          "homeMgr": "Matt Geiger",
          "home": "Kareem Pie"
        },
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 51.4,
          "homeScore": 101.1,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        }
      ],
      "Week 9": [
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 105.4,
          "homeScore": 103.3,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 118.1,
          "homeScore": 85.3,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        },
        {
          "away": "Route 2 Ravers",
          "awayMgr": "Joseph Garton",
          "awayScore": 88.3,
          "homeScore": 86.4,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "Kareem Pie",
          "awayMgr": "Matt Geiger",
          "awayScore": 113.9,
          "homeScore": 76.4,
          "homeMgr": "Zachary Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "Lincoln Legends",
          "awayMgr": "Tyler Cummings",
          "awayScore": 92.2,
          "homeScore": 76.7,
          "homeMgr": "Aaron Burns",
          "home": "The Fantasy Football Team"
        },
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 86.9,
          "homeScore": 111.5,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        }
      ],
      "Week 10": [
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 82,
          "homeScore": 105.8,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 100.6,
          "homeScore": 73.8,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 136.2,
          "homeScore": 50.5,
          "homeMgr": "Matt Geiger",
          "home": "Kareem Pie"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 80.6,
          "homeScore": 140.4,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        },
        {
          "away": "The Deplorables",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 86.4,
          "homeScore": 102.9,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "The Fantasy Football Team",
          "awayMgr": "Aaron Burns",
          "awayScore": 108.7,
          "homeScore": 80,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        }
      ],
      "Week 11": [
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 88.2,
          "homeScore": 42.6,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers"
        },
        {
          "away": "Kareem Pie",
          "awayMgr": "Matt Geiger",
          "awayScore": 64.7,
          "homeScore": 97.6,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "Lincoln Legends",
          "awayMgr": "Tyler Cummings",
          "awayScore": 142,
          "homeScore": 103,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 81,
          "homeScore": 54.4,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 100.9,
          "homeScore": 91.7,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "The Fantasy Football Team",
          "awayMgr": "Aaron Burns",
          "awayScore": 93.2,
          "homeScore": 99.4,
          "homeMgr": "Zachary Sizemore",
          "home": "The Deplorables"
        }
      ],
      "Week 12": [
        {
          "away": "Kareem Pie",
          "awayMgr": "Matt Geiger",
          "awayScore": 96.2,
          "homeScore": 94.2,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "Route 2 Ravers",
          "awayMgr": "Joseph Garton",
          "awayScore": 96,
          "homeScore": 119.2,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 119,
          "homeScore": 105.8,
          "homeMgr": "Walid Salameh",
          "home": "The Arabian Stallions"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 66.5,
          "homeScore": 52.3,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "The ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 97.6,
          "homeScore": 101.5,
          "homeMgr": "Aaron Burns",
          "home": "The Fantasy Football Team"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 78.3,
          "homeScore": 87.2,
          "homeMgr": "Zachary Sizemore",
          "home": "The Deplorables"
        }
      ],
      "Week 13": [
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 68.6,
          "homeScore": 79.4,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        },
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 71.2,
          "homeScore": 92,
          "homeMgr": "Matt Geiger",
          "home": "Kareem Pie"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 89.9,
          "homeScore": 69.9,
          "homeMgr": "Joseph Garton",
          "home": "Route 2 Ravers"
        },
        {
          "away": "The Fantasy Football Team",
          "awayMgr": "Aaron Burns",
          "awayScore": 77.3,
          "homeScore": 73.7,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "The Deplorables",
          "awayMgr": "Zachary Sizemore",
          "awayScore": 101.3,
          "homeScore": 95.6,
          "homeMgr": "George Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Zachary Hickman",
          "awayScore": 114.2,
          "homeScore": 86,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        }
      ],
      "Week 14": [
        {
          "away": "The Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 115.4,
          "homeScore": 120.8,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "Lincoln Legends",
          "awayMgr": "Tyler Cummings",
          "awayScore": 110.8,
          "homeScore": 83.7,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "Kareem Pie",
          "awayMgr": "Matt Geiger",
          "awayScore": 82.6,
          "homeScore": 108.3,
          "homeMgr": "Aaron Burns",
          "home": "The Fantasy Football Team"
        },
        {
          "away": "Route 2 Ravers",
          "awayMgr": "Joseph Garton",
          "awayScore": 67.3,
          "homeScore": 54.9,
          "homeMgr": "Zachary Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 71,
          "homeScore": 83.7,
          "homeMgr": "Zachary Hickman",
          "home": "Free Agents"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "George Wright",
          "awayScore": 83.2,
          "homeScore": 70.7,
          "homeMgr": "Luke Rapp",
          "home": "The ACLiens"
        }
      ]
    },
    "playoffs": {
      "round1": {
        "label": "Round 1 (Week 15)",
        "games": [
          {
            "away": "Free Agents",
            "awayMgr": "Zachary Hickman",
            "awayScore": 125.2,
            "homeScore": 141.8,
            "homeMgr": "Zachary Sizemore",
            "home": "The Deplorables"
          },
          {
            "away": "Business as Usual",
            "awayMgr": "Travis West",
            "awayScore": 79,
            "homeScore": 97.1,
            "homeMgr": "Aaron Burns",
            "home": "The Fantasy Football Team"
          }
        ],
        "byes": [
          {
            "team": "Lincoln Legends",
            "pts": 103.7
          },
          {
            "team": "Money Badgers",
            "pts": 85
          }
        ]
      },
      "round2": {
        "label": "Round 2 (Week 16)",
        "games": [
          {
            "away": "The Deplorables",
            "awayMgr": "Zachary Sizemore",
            "awayScore": 133,
            "homeScore": 104.5,
            "homeMgr": "Tyler Cummings",
            "home": "Lincoln Legends"
          },
          {
            "away": "The Fantasy Football Team",
            "awayMgr": "Aaron Burns",
            "awayScore": 113.6,
            "homeScore": 73.8,
            "homeMgr": "Tyler Clay",
            "home": "Money Badgers"
          }
        ]
      },
      "round3": {
        "label": "Round 3 / Championship (Week 17)",
        "games": [
          {
            "away": "The Deplorables",
            "awayMgr": "Zachary Sizemore",
            "awayScore": 142.5,
            "homeScore": 93.1,
            "homeMgr": "Aaron Burns",
            "home": "The Fantasy Football Team"
          }
        ]
      },
      "thirdPlace": {
        "label": "Round 3 / 3rd Place (Week 17)",
        "games": [
          {
            "away": "Money Badgers",
            "awayMgr": "Tyler Clay",
            "awayScore": 80.9,
            "homeScore": 108.7,
            "homeMgr": "Tyler Cummings",
            "home": "Lincoln Legends"
          }
        ]
      }
    }
  },
  "2026": {
    "year": 2026,
    "champion": {
      "team": "TBD",
      "owner": "TBD"
    },
    "second": {
      "team": "TBD",
      "owner": "TBD"
    },
    "third": {
      "team": "TBD",
      "owner": "TBD"
    },
    "standings": [
      {
        "team": "The Deplorables",
        "owner": "Zach Sizemore",
        "w": 4,
        "l": 1,
        "t": 0,
        "pct": 0.8
      },
      {
        "team": "Prino's Powerhouse",
        "owner": "Joe Prino",
        "w": 4,
        "l": 1,
        "t": 0,
        "pct": 0.8
      },
      {
        "team": "Free Agents",
        "owner": "Z Hickman",
        "w": 3,
        "l": 2,
        "t": 0,
        "pct": 0.6
      },
      {
        "team": "Kareem Pie",
        "owner": "Seth Thacker",
        "w": 3,
        "l": 2,
        "t": 0,
        "pct": 0.6
      },
      {
        "team": "George's Gangstas",
        "owner": "Sonny Wright",
        "w": 3,
        "l": 2,
        "t": 0,
        "pct": 0.6
      },
      {
        "team": "Route 2 Ravers",
        "owner": "Joe Garton",
        "w": 2,
        "l": 3,
        "t": 0,
        "pct": 0.4
      },
      {
        "team": "Fantasy Football Team",
        "owner": "Aaron Burns",
        "w": 2,
        "l": 3,
        "t": 0,
        "pct": 0.4
      },
      {
        "team": "Arabian Stallions",
        "owner": "Walid Salameh",
        "w": 2,
        "l": 3,
        "t": 0,
        "pct": 0.4
      },
      {
        "team": "Lincoln Legends",
        "owner": "Tyler Cummings",
        "w": 2,
        "l": 3,
        "t": 0,
        "pct": 0.4
      },
      {
        "team": "Business as Usual",
        "owner": "Travis West",
        "w": 1,
        "l": 4,
        "t": 0,
        "pct": 0.2
      },
      {
        "team": "ACLiens",
        "owner": "Luke Rapp",
        "w": 1,
        "l": 4,
        "t": 0,
        "pct": 0.2
      },
      {
        "team": "Money Badgers",
        "owner": "Tyler Clay",
        "w": 3,
        "l": 2,
        "t": 0,
        "pct": 0.6
      }
    ],
    "playoffs": {},
    "schedule": {
      "Week 1": [
        {
          "away": "Kareem Pie",
          "awayMgr": "Seth Thacker",
          "awayScore": 128.8,
          "homeScore": 111.5,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 95.9,
          "homeScore": 119.1,
          "homeMgr": "Joe Garton",
          "home": "Route 2 Ravers"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Z Hickman",
          "awayScore": 97.6,
          "homeScore": 122.5,
          "homeMgr": "Sonny Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 111.4,
          "homeScore": 80.1,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 66.9,
          "homeScore": 121.2,
          "homeMgr": "Aaron Burns",
          "home": "Fantasy Football Team"
        },
        {
          "away": "The Deplorables",
          "awayMgr": "Zach Sizemore",
          "awayScore": 113.5,
          "homeScore": 108.6,
          "homeMgr": "Luke Rapp",
          "home": "ACLiens"
        }
      ],
      "Week 2": [
        {
          "away": "Kareem Pie",
          "awayMgr": "Seth Thacker",
          "awayScore": 67.1,
          "homeScore": 80.2,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "The Deplorables",
          "awayMgr": "Zach Sizemore",
          "awayScore": 128.7,
          "homeScore": 120.0,
          "homeMgr": "Walid Salameh",
          "home": "Arabian Stallions"
        },
        {
          "away": "ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 77.8,
          "homeScore": 108.7,
          "homeMgr": "Z Hickman",
          "home": "Free Agents"
        },
        {
          "away": "Fantasy Football Team",
          "awayMgr": "Aaron Burns",
          "awayScore": 83.6,
          "homeScore": 87.1,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "Lincoln Legends",
          "awayMgr": "Tyler Cummings",
          "awayScore": 98.9,
          "homeScore": 71.7,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "Sonny Wright",
          "awayScore": 77.5,
          "homeScore": 92.8,
          "homeMgr": "Joe Garton",
          "home": "Route 2 Ravers"
        }
      ],
      "Week 3": [
        {
          "away": "Kareem Pie",
          "awayMgr": "Seth Thacker",
          "awayScore": 101.8,
          "homeScore": 87.5,
          "homeMgr": "Luke Rapp",
          "home": "ACLiens"
        },
        {
          "away": "Fantasy Football Team",
          "awayMgr": "Aaron Burns",
          "awayScore": 98.2,
          "homeScore": 131.3,
          "homeMgr": "Zach Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "Lincoln Legends",
          "awayMgr": "Tyler Cummings",
          "awayScore": 92.1,
          "homeScore": 127.4,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "Sonny Wright",
          "awayScore": 99,
          "homeScore": 68.8,
          "homeMgr": "Walid Salameh",
          "home": "Arabian Stallions"
        },
        {
          "away": "Route 2 Ravers",
          "awayMgr": "Joe Garton",
          "awayScore": 83.9,
          "homeScore": 97.4,
          "homeMgr": "Z Hickman",
          "home": "Free Agents"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 68,
          "homeScore": 91.8,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        }
      ],
      "Week 4": [
        {
          "away": "Kareem Pie",
          "awayMgr": "Seth Thacker",
          "awayScore": 109.4,
          "homeScore": 107.9,
          "homeMgr": "Joe Garton",
          "home": "Route 2 Ravers"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 130.4,
          "homeScore": 78.2,
          "homeMgr": "Sonny Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 69.2,
          "homeScore": 68.5,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Z Hickman",
          "awayScore": 135.2,
          "homeScore": 91.9,
          "homeMgr": "Aaron Burns",
          "home": "Fantasy Football Team"
        },
        {
          "away": "Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 90.4,
          "homeScore": 67.6,
          "homeMgr": "Luke Rapp",
          "home": "ACLiens"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 137.5,
          "homeScore": 101.9,
          "homeMgr": "Zach Sizemore",
          "home": "The Deplorables"
        }
      ],
      "Week 5": [
        {
          "away": "Kareem Pie",
          "awayMgr": "Seth Thacker",
          "awayScore": 89.8,
          "homeScore": 95.8,
          "homeMgr": "Sonny Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "Route 2 Ravers",
          "awayMgr": "Joe Garton",
          "awayScore": 114.7,
          "homeScore": 120.5,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 78.5,
          "homeScore": 101.6,
          "homeMgr": "Aaron Burns",
          "home": "Fantasy Football Team"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 74.7,
          "homeScore": 98.4,
          "homeMgr": "Luke Rapp",
          "home": "ACLiens"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Z Hickman",
          "awayScore": 99.5,
          "homeScore": 156.8,
          "homeMgr": "Zach Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 75.9,
          "homeScore": 123.2,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        }
      ],
      "Week 6": [
        {
          "away": "Kareem Pie",
          "awayMgr": "Seth Thacker",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "Sonny Wright",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Aaron Burns",
          "home": "Fantasy Football Team"
        },
        {
          "away": "Route 2 Ravers",
          "awayMgr": "Joe Garton",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Luke Rapp",
          "home": "ACLiens"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Zach Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Z Hickman",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Walid Salameh",
          "home": "Arabian Stallions"
        }
      ],
      "Week 7": [
        {
          "away": "Kareem Pie",
          "awayMgr": "Seth Thacker",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Aaron Burns",
          "home": "Fantasy Football Team"
        },
        {
          "away": "Lincoln Legends",
          "awayMgr": "Tyler Cummings",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Luke Rapp",
          "home": "ACLiens"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "Sonny Wright",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Zach Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "Route 2 Ravers",
          "awayMgr": "Joe Garton",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Walid Salameh",
          "home": "Arabian Stallions"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Z Hickman",
          "home": "Free Agents"
        }
      ],
      "Week 8": [
        {
          "away": "Kareem Pie",
          "awayMgr": "Seth Thacker",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Zach Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "Fantasy Football Team",
          "awayMgr": "Aaron Burns",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Walid Salameh",
          "home": "Arabian Stallions"
        },
        {
          "away": "Lincoln Legends",
          "awayMgr": "Tyler Cummings",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Z Hickman",
          "home": "Free Agents"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "Sonny Wright",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "Route 2 Ravers",
          "awayMgr": "Joe Garton",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        }
      ],
      "Week 9": [
        {
          "away": "Kareem Pie",
          "awayMgr": "Seth Thacker",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Walid Salameh",
          "home": "Arabian Stallions"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Z Hickman",
          "home": "Free Agents"
        },
        {
          "away": "The Deplorables",
          "awayMgr": "Zach Sizemore",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "Fantasy Football Team",
          "awayMgr": "Aaron Burns",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Joe Garton",
          "home": "Route 2 Ravers"
        },
        {
          "away": "Lincoln Legends",
          "awayMgr": "Tyler Cummings",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Sonny Wright",
          "home": "George's Gangstas"
        }
      ],
      "Week 10": [
        {
          "away": "Kareem Pie",
          "awayMgr": "Seth Thacker",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Z Hickman",
          "home": "Free Agents"
        },
        {
          "away": "Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "The Deplorables",
          "awayMgr": "Zach Sizemore",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Joe Garton",
          "home": "Route 2 Ravers"
        },
        {
          "away": "ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Sonny Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "Fantasy Football Team",
          "awayMgr": "Aaron Burns",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        }
      ],
      "Week 11": [
        {
          "away": "Kareem Pie",
          "awayMgr": "Seth Thacker",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Z Hickman",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Joe Garton",
          "home": "Route 2 Ravers"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Sonny Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "The Deplorables",
          "awayMgr": "Zach Sizemore",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        },
        {
          "away": "ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Aaron Burns",
          "home": "Fantasy Football Team"
        }
      ],
      "Week 12": [
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Seth Thacker",
          "home": "Kareem Pie"
        },
        {
          "away": "Route 2 Ravers",
          "awayMgr": "Joe Garton",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "Sonny Wright",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Z Hickman",
          "home": "Free Agents"
        },
        {
          "away": "Lincoln Legends",
          "awayMgr": "Tyler Cummings",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Walid Salameh",
          "home": "Arabian Stallions"
        },
        {
          "away": "Fantasy Football Team",
          "awayMgr": "Aaron Burns",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Zach Sizemore",
          "home": "The Deplorables"
        }
      ],
      "Week 13": [
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Seth Thacker",
          "home": "Kareem Pie"
        },
        {
          "away": "Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Zach Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Z Hickman",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Luke Rapp",
          "home": "ACLiens"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Aaron Burns",
          "home": "Fantasy Football Team"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        },
        {
          "away": "Route 2 Ravers",
          "awayMgr": "Joe Garton",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Sonny Wright",
          "home": "George's Gangstas"
        }
      ],
      "Week 14": [
        {
          "away": "ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Seth Thacker",
          "home": "Kareem Pie"
        },
        {
          "away": "The Deplorables",
          "awayMgr": "Zach Sizemore",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Aaron Burns",
          "home": "Fantasy Football Team"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        },
        {
          "away": "Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Sonny Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Z Hickman",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Joe Garton",
          "home": "Route 2 Ravers"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        }
      ]
    }
  },
};

const DRAFT_DATES = {
  "2026": { "iso": "2026-09-07T21:00:00-04:00", "label": "Mon, Sept 7, 2026 · 9:00 PM ET" }
};

const DRAFT_ORDER = {
  "2026": [
    { "key": "Sizemore", "owner": "Zach Sizemore", "team": "The Deplorables" },
    { "key": "Thacker", "owner": "Seth Thacker", "team": "TBD" },
    { "key": "Cummings", "owner": "Tyler Cummings", "team": "Lincoln Legends" },
    { "key": "Garton", "owner": "Joe Garton", "team": "Route 2 Ravers" },
    { "key": "Prino", "owner": "Joe Prino", "team": "Prino's Powerhouse" },
    { "key": "Clay", "owner": "Tyler Clay", "team": "Money Badgers" },
    { "key": "Rapp", "owner": "Luke Rapp", "team": "ACLiens" },
    { "key": "Burns", "owner": "Aaron Burns", "team": "Fantasy Football Team" },
    { "key": "Salameh", "owner": "Walid Salameh", "team": "Arabian Stallions" },
    { "key": "Hickman", "owner": "Z Hickman", "team": "Free Agents" },
    { "key": "Wright", "owner": "Sonny Wright", "team": "George's Gangstas" },
    { "key": "West", "owner": "Travis West", "team": "Business as Usual" }
  ]
};

// Thursday of NFL Week 1, per season. The homepage scoreboard switches to the next
// fantasy week's matchups at 6:00 AM ET on that week's Thursday.
const NFL_WEEK1_THURSDAY = { "2026": "2026-09-10" };

// In-progress scores for the current fantasy week, shown only on the homepage scoreboard
// strip. Teams not listed show 0.0. Once the week's final scores go into the schedule, the
// strip switches to finals on its own and these numbers are no longer used.
const LIVE_SCORES = {
  "2026": {
    "Week 6": { "Fantasy Football Team": 5.2, "ACLiens": 31.5, "The Deplorables": 2.9 }
  }
};

// Season payouts shown in the standings table. weeklyHigh is paid during the season;
// the rest is paid once the season has a champion. place = 1st/2nd/3rd prize money.
// 2025: Burns and Sizemore split the 1st and 2nd prizes ($1,450) 800/650 before the title game.
const PAYOUT_RULES = {
  "2022": { weeklyHigh: 25, seasonTopScorer: 100, playoffBerth: 50, playoffTeams: 6, place: [1000, 450, 200] },
  "2023": { weeklyHigh: 25, seasonTopScorer: 100, playoffBerth: 50, playoffTeams: 6, place: [725, 725, 200] }, // 1st and 2nd split $1,450 evenly
  "2024": { weeklyHigh: 25, seasonTopScorer: 100, playoffBerth: 50, playoffTeams: 6, place: [1000, 450, 200] },
  "2025": { weeklyHigh: 25, seasonTopScorer: 100, playoffBerth: 50, playoffTeams: 6, place: [800, 650, 200] },
  "2026": { weeklyHigh: 25, seasonTopScorer: 100, playoffBerth: 50, playoffTeams: 6, place: [1000, 450, 200] }
};

// Dues paid, by team key, per season. Add a year entry as owners pay up.
const PAID_STATUS = {
  "2026": ["Thacker", "West", "Hickman", "Garton", "Cummings", "Sizemore", "Burns", "Wright", "Salameh", "Clay"]
};

// Homepage "Top Headlines" widget — general NFL news, unrelated to league
// history. Update this list periodically to keep it current.
const NFL_HEADLINES = [
  { title: "Drake Maye throws for 374 yards and accounts for 5 TDs, a 39.3-point day for Z Hickman's Free Agents, who still lose by 57", url: "https://www.boston25news.com/news/local/drake-maye-accounts-5-tds-patriots-roll-past-raiders-45-17/7BFABPYCXVDMZEZWNWJLYR4XFA/" },
  { title: "Jahmyr Gibbs piles up 207 yards and 2 TDs for 35.2 points as Zach Sizemore's Deplorables post the season-high 156.8", url: "https://fantasysixpack.net/2026-fantasy-football-week-5-recap/" },
  { title: "Jaylen Warren breaks an 80-yard catch-and-run TD and a 50-yard TD run, 188 scrimmage yards and 33.8 points for Joe Prino's Powerhouse", url: "https://abcnews.com/Sports/wireStory/jaylen-warrens-brilliance-leads-steelers-past-colts-34-137181535" },
  { title: "Christian Watson goes 6-143-2, but David Montgomery leaves with a groin injury after 1.1 points and Seth Thacker's Kareem Pie fall 95.8-89.8", url: "https://fantasysixpack.net/2026-fantasy-football-week-5-recap/" },
  { title: "The Deplorables and Prino's Powerhouse share the lead at 4-1; Free Agents, Kareem Pie, George's Gangstas and Money Badgers sit at 3-2", url: "season.html?year=2026" },
  { title: "Luke Rapp's ACLiens win for the first time, 98.4-74.7 over Tyler Clay's Money Badgers, who drop from 5th to 12th on points", url: "season.html?year=2026" },
  { title: "Tyler Cummings' Lincoln Legends hold off Joe Garton's Route 2 Ravers 120.5-114.7 behind Jacoby Brissett and Mike Evans, the Ravers' third straight loss", url: "season.html?year=2026" },
  { title: "Bench mob: Joe Prino leaves Jayden Daniels' 32.1 on the bench and still wins by 47, and Aaron Burns sits Jordan Love's 25.2 in a 101.6-78.5 win", url: "season.html?year=2026" }
];

const SURVIVOR = {
  "2022": {
    "champion": "Aaron",
    "players": [
      {
        "name": "Aaron",
        "result": "Winner",
        "eliminatedWeek": null,
        "picks": [
          {
            "week": 1,
            "team": "Ravens",
            "loss": false
          },
          {
            "week": 2,
            "team": "Broncos",
            "loss": false
          },
          {
            "week": 3,
            "team": "Falcons",
            "loss": false
          },
          {
            "week": 4,
            "team": "Packers",
            "loss": false
          },
          {
            "week": 5,
            "team": "49ers",
            "loss": false
          },
          {
            "week": 6,
            "team": "Buccaneers",
            "loss": true
          },
          {
            "week": 7,
            "team": "Raiders",
            "loss": false
          }
        ]
      },
      {
        "name": "Clay",
        "result": "Eliminated",
        "eliminatedWeek": 7,
        "picks": [
          {
            "week": 1,
            "team": "Ravens",
            "loss": false
          },
          {
            "week": 2,
            "team": "Rams",
            "loss": false
          },
          {
            "week": 3,
            "team": "Bengals",
            "loss": false
          },
          {
            "week": 4,
            "team": "Packers",
            "loss": false
          },
          {
            "week": 5,
            "team": "Bills",
            "loss": false
          },
          {
            "week": 6,
            "team": "Buccaneers",
            "loss": true
          },
          {
            "week": 7,
            "team": "Patriots",
            "loss": true
          }
        ]
      },
      {
        "name": "Ronnie",
        "result": "Eliminated",
        "eliminatedWeek": 6,
        "picks": [
          {
            "week": 1,
            "team": "Ravens",
            "loss": false
          },
          {
            "week": 2,
            "team": "Broncos",
            "loss": false
          },
          {
            "week": 3,
            "team": "Eagles",
            "loss": false
          },
          {
            "week": 4,
            "team": "Rams",
            "loss": true
          },
          {
            "week": 5,
            "team": "Eagles",
            "loss": false
          },
          {
            "week": 6,
            "team": "49ers",
            "loss": true
          }
        ]
      },
      {
        "name": "Melissa",
        "result": "Eliminated",
        "eliminatedWeek": 4,
        "picks": [
          {
            "week": 1,
            "team": "49ers",
            "loss": true
          },
          {
            "week": 2,
            "team": "Packers",
            "loss": false
          },
          {
            "week": 3,
            "team": "Cowboys",
            "loss": false
          },
          {
            "week": 4,
            "team": "Steelers",
            "loss": true
          }
        ]
      },
      {
        "name": "Geiger",
        "result": "Eliminated",
        "eliminatedWeek": 3,
        "picks": [
          {
            "week": 1,
            "team": "Ravens",
            "loss": false
          },
          {
            "week": 2,
            "team": "Bengals",
            "loss": true
          },
          {
            "week": 3,
            "team": "Chargers",
            "loss": true
          }
        ]
      },
      {
        "name": "Prino",
        "result": "Eliminated",
        "eliminatedWeek": 3,
        "picks": [
          {
            "week": 1,
            "team": "Broncos",
            "loss": true
          },
          {
            "week": 2,
            "team": "Rams",
            "loss": false
          },
          {
            "week": 3,
            "team": "Chargers",
            "loss": true
          }
        ]
      },
      {
        "name": "Z",
        "result": "Eliminated",
        "eliminatedWeek": 3,
        "picks": [
          {
            "week": 1,
            "team": "Titans",
            "loss": true
          },
          {
            "week": 2,
            "team": "Rams",
            "loss": false
          },
          {
            "week": 3,
            "team": "Chargers",
            "loss": true
          }
        ]
      },
      {
        "name": "Luke",
        "result": "Eliminated",
        "eliminatedWeek": 3,
        "picks": [
          {
            "week": 1,
            "team": "Broncos",
            "loss": true
          },
          {
            "week": 2,
            "team": "Rams",
            "loss": false
          },
          {
            "week": 3,
            "team": "Chiefs",
            "loss": true
          }
        ]
      },
      {
        "name": "Sizemore",
        "result": "Eliminated",
        "eliminatedWeek": 3,
        "picks": [
          {
            "week": 1,
            "team": "Bengals",
            "loss": true
          },
          {
            "week": 2,
            "team": "Rams",
            "loss": false
          },
          {
            "week": 3,
            "team": "Chiefs",
            "loss": true
          }
        ]
      },
      {
        "name": "Cummings",
        "result": "Eliminated",
        "eliminatedWeek": 2,
        "picks": [
          {
            "week": 1,
            "team": "Colts",
            "loss": true
          },
          {
            "week": 2,
            "team": "Bengals",
            "loss": true
          }
        ]
      },
      {
        "name": "Twest",
        "result": "Eliminated",
        "eliminatedWeek": 2,
        "picks": [
          {
            "week": 1,
            "team": "Titans",
            "loss": true
          },
          {
            "week": 2,
            "team": "Bengals",
            "loss": true
          }
        ]
      }
    ]
  },
  "2023": {
    "champion": "Clay",
    "players": [
      {
        "name": "Clay",
        "result": "Winner",
        "eliminatedWeek": null,
        "picks": [
          {
            "week": 1,
            "team": "Ravens",
            "loss": false
          },
          {
            "week": 2,
            "team": "Cowboys",
            "loss": false
          },
          {
            "week": 3,
            "team": "49ers",
            "loss": false
          },
          {
            "week": 4,
            "team": "Eagles",
            "loss": false
          },
          {
            "week": 5,
            "team": "Dolphins",
            "loss": false
          },
          {
            "week": 6,
            "team": "Bills",
            "loss": false
          },
          {
            "week": 7,
            "team": "Seahawks",
            "loss": false
          },
          {
            "week": 8,
            "team": "Chargers",
            "loss": false
          },
          {
            "week": 9,
            "team": "Browns",
            "loss": false
          },
          {
            "week": 10,
            "team": "Bengals",
            "loss": true
          },
          {
            "week": 11,
            "team": "Lions",
            "loss": false
          },
          {
            "week": 12,
            "team": "Chiefs",
            "loss": false
          }
        ]
      },
      {
        "name": "Austin G",
        "result": "Eliminated",
        "eliminatedWeek": 12,
        "picks": [
          {
            "week": 1,
            "team": "Ravens",
            "loss": false
          },
          {
            "week": 2,
            "team": "Cowboys",
            "loss": false
          },
          {
            "week": 3,
            "team": "Chiefs",
            "loss": false
          },
          {
            "week": 4,
            "team": "49ers",
            "loss": false
          },
          {
            "week": 5,
            "team": "Lions",
            "loss": false
          },
          {
            "week": 6,
            "team": "Dolphins",
            "loss": false
          },
          {
            "week": 7,
            "team": "Seahawks",
            "loss": false
          },
          {
            "week": 8,
            "team": "Chargers",
            "loss": false
          },
          {
            "week": 9,
            "team": "Browns",
            "loss": false
          },
          {
            "week": 10,
            "team": "Bengals",
            "loss": true
          },
          {
            "week": 11,
            "team": "Jaguars",
            "loss": false
          },
          {
            "week": 12,
            "team": "Vikings",
            "loss": true
          }
        ]
      },
      {
        "name": "Z",
        "result": "Eliminated",
        "eliminatedWeek": 12,
        "picks": [
          {
            "week": 1,
            "team": "Ravens",
            "loss": false
          },
          {
            "week": 2,
            "team": "Cowboys",
            "loss": false
          },
          {
            "week": 3,
            "team": "Chiefs",
            "loss": false
          },
          {
            "week": 4,
            "team": "49ers",
            "loss": false
          },
          {
            "week": 5,
            "team": "Dolphins",
            "loss": false
          },
          {
            "week": 6,
            "team": "Bills",
            "loss": false
          },
          {
            "week": 7,
            "team": "Seahawks",
            "loss": false
          },
          {
            "week": 8,
            "team": "Chargers",
            "loss": false
          },
          {
            "week": 9,
            "team": "Browns",
            "loss": false
          },
          {
            "week": 10,
            "team": "Bengals",
            "loss": true
          },
          {
            "week": 11,
            "team": "Broncos",
            "loss": false
          },
          {
            "week": 12,
            "team": "Lions",
            "loss": true
          }
        ]
      },
      {
        "name": "Cummings",
        "result": "Eliminated",
        "eliminatedWeek": 10,
        "picks": [
          {
            "week": 1,
            "team": "Ravens",
            "loss": false
          },
          {
            "week": 2,
            "team": "Cowboys",
            "loss": false
          },
          {
            "week": 3,
            "team": "Seahawks",
            "loss": false
          },
          {
            "week": 4,
            "team": "Chargers",
            "loss": false
          },
          {
            "week": 5,
            "team": "Dolphins",
            "loss": false
          },
          {
            "week": 6,
            "team": "Bills",
            "loss": false
          },
          {
            "week": 7,
            "team": "49ers",
            "loss": true
          },
          {
            "week": 8,
            "team": "Lions",
            "loss": false
          },
          {
            "week": 9,
            "team": "Browns",
            "loss": false
          },
          {
            "week": 10,
            "team": "Bengals",
            "loss": true
          }
        ]
      },
      {
        "name": "Geiger",
        "result": "Eliminated",
        "eliminatedWeek": 10,
        "picks": [
          {
            "week": 1,
            "team": "Ravens",
            "loss": false
          },
          {
            "week": 2,
            "team": "Bills",
            "loss": false
          },
          {
            "week": 3,
            "team": "49ers",
            "loss": false
          },
          {
            "week": 4,
            "team": "Chargers",
            "loss": false
          },
          {
            "week": 5,
            "team": "Dolphins",
            "loss": false
          },
          {
            "week": 6,
            "team": "Eagles",
            "loss": true
          },
          {
            "week": 7,
            "team": "Seahawks",
            "loss": false
          },
          {
            "week": 8,
            "team": "Cowboys",
            "loss": false
          },
          {
            "week": 9,
            "team": "Browns",
            "loss": false
          },
          {
            "week": 10,
            "team": "Bengals",
            "loss": true
          }
        ]
      },
      {
        "name": "Aaron",
        "result": "Eliminated",
        "eliminatedWeek": 10,
        "picks": [
          {
            "week": 1,
            "team": "Ravens",
            "loss": false
          },
          {
            "week": 2,
            "team": "Bills",
            "loss": false
          },
          {
            "week": 3,
            "team": "Cowboys",
            "loss": true
          },
          {
            "week": 4,
            "team": "Chiefs",
            "loss": false
          },
          {
            "week": 5,
            "team": "Lions",
            "loss": false
          },
          {
            "week": 6,
            "team": "Dolphins",
            "loss": false
          },
          {
            "week": 7,
            "team": "Seahawks",
            "loss": false
          },
          {
            "week": 8,
            "team": "Chargers",
            "loss": false
          },
          {
            "week": 9,
            "team": "Browns",
            "loss": false
          },
          {
            "week": 10,
            "team": "Bengals",
            "loss": true
          }
        ]
      },
      {
        "name": "Bri Garner",
        "result": "Eliminated",
        "eliminatedWeek": 7,
        "picks": [
          {
            "week": 1,
            "team": "Eagles",
            "loss": false
          },
          {
            "week": 2,
            "team": "Saints",
            "loss": false
          },
          {
            "week": 3,
            "team": "Cowboys",
            "loss": true
          },
          {
            "week": 4,
            "team": "Chiefs",
            "loss": false
          },
          {
            "week": 5,
            "team": "Lions",
            "loss": false
          },
          {
            "week": 6,
            "team": "Dolphins",
            "loss": false
          },
          {
            "week": 7,
            "team": "49ers",
            "loss": true
          }
        ]
      },
      {
        "name": "Melissa",
        "result": "Eliminated",
        "eliminatedWeek": 7,
        "picks": [
          {
            "week": 1,
            "team": "Commanders",
            "loss": false
          },
          {
            "week": 2,
            "team": "Giants",
            "loss": false
          },
          {
            "week": 3,
            "team": "Steelers",
            "loss": false
          },
          {
            "week": 4,
            "team": "Panthers",
            "loss": true
          },
          {
            "week": 5,
            "team": "49ers",
            "loss": false
          },
          {
            "week": 6,
            "team": "Dolphins",
            "loss": false
          },
          {
            "week": 7,
            "team": "Packers",
            "loss": true
          }
        ]
      },
      {
        "name": "Sizemore",
        "result": "Eliminated",
        "eliminatedWeek": 6,
        "picks": [
          {
            "week": 1,
            "team": "Ravens",
            "loss": false
          },
          {
            "week": 2,
            "team": "Bills",
            "loss": false
          },
          {
            "week": 3,
            "team": "Jaguars",
            "loss": true
          },
          {
            "week": 4,
            "team": "Eagles",
            "loss": false
          },
          {
            "week": 5,
            "team": "Lions",
            "loss": false
          },
          {
            "week": 6,
            "team": "49ers",
            "loss": true
          }
        ]
      }
    ]
  },
  "2024": {
    "champion": "Matt Garner",
    "players": [
      {
        "name": "Matt Garner",
        "result": "Winner",
        "eliminatedWeek": null,
        "picks": [
          {
            "week": 1,
            "team": "Seahawks",
            "loss": false
          },
          {
            "week": 2,
            "team": "Chargers",
            "loss": false
          },
          {
            "week": 3,
            "team": "Bills",
            "loss": false
          },
          {
            "week": 4,
            "team": "Chiefs",
            "loss": false
          },
          {
            "week": 5,
            "team": "Commanders",
            "loss": false
          },
          {
            "week": 6,
            "team": "Texans",
            "loss": false
          },
          {
            "week": 7,
            "team": "Eagles",
            "loss": false
          },
          {
            "week": 8,
            "team": "Lions",
            "loss": false
          }
        ]
      },
      {
        "name": "Melissa",
        "result": "Eliminated",
        "eliminatedWeek": 8,
        "picks": [
          {
            "week": 1,
            "team": "Saints",
            "loss": false
          },
          {
            "week": 2,
            "team": "Lions",
            "loss": true
          },
          {
            "week": 3,
            "team": "Seahawks",
            "loss": false
          },
          {
            "week": 4,
            "team": "Commanders",
            "loss": false
          },
          {
            "week": 5,
            "team": "Bears",
            "loss": false
          },
          {
            "week": 6,
            "team": "Eagles",
            "loss": false
          },
          {
            "week": 7,
            "team": "Bills",
            "loss": false
          },
          {
            "week": 8,
            "team": "Jets",
            "loss": true
          }
        ]
      },
      {
        "name": "Bri Garner",
        "result": "Eliminated",
        "eliminatedWeek": 5,
        "picks": [
          {
            "week": 1,
            "team": "Seahawks",
            "loss": false
          },
          {
            "week": 2,
            "team": "Chargers",
            "loss": false
          },
          {
            "week": 3,
            "team": "Raiders",
            "loss": true
          },
          {
            "week": 4,
            "team": "Chiefs",
            "loss": false
          },
          {
            "week": 5,
            "team": "49ers",
            "loss": true
          }
        ]
      },
      {
        "name": "Geiger",
        "result": "Eliminated",
        "eliminatedWeek": 3,
        "picks": [
          {
            "week": 1,
            "team": "Seahawks",
            "loss": false
          },
          {
            "week": 2,
            "team": "Ravens",
            "loss": true
          },
          {
            "week": 3,
            "team": "Bengals",
            "loss": true
          }
        ]
      },
      {
        "name": "Z",
        "result": "Eliminated",
        "eliminatedWeek": 3,
        "picks": [
          {
            "week": 1,
            "team": "Bills",
            "loss": false
          },
          {
            "week": 2,
            "team": "Ravens",
            "loss": true
          },
          {
            "week": 3,
            "team": "Buccaneers",
            "loss": true
          }
        ]
      },
      {
        "name": "Clay",
        "result": "Eliminated",
        "eliminatedWeek": 2,
        "picks": [
          {
            "week": 1,
            "team": "Bengals",
            "loss": true
          },
          {
            "week": 2,
            "team": "Ravens",
            "loss": true
          }
        ]
      },
      {
        "name": "Cummings",
        "result": "Eliminated",
        "eliminatedWeek": 2,
        "picks": [
          {
            "week": 1,
            "team": "Bengals",
            "loss": true
          },
          {
            "week": 2,
            "team": "Ravens",
            "loss": true
          }
        ]
      },
      {
        "name": "Luke",
        "result": "Eliminated",
        "eliminatedWeek": 2,
        "picks": [
          {
            "week": 1,
            "team": "Bengals",
            "loss": true
          },
          {
            "week": 2,
            "team": "Ravens",
            "loss": true
          }
        ]
      },
      {
        "name": "Aaron",
        "result": "Eliminated",
        "eliminatedWeek": 2,
        "picks": [
          {
            "week": 1,
            "team": "Bengals",
            "loss": true
          },
          {
            "week": 2,
            "team": "Ravens",
            "loss": true
          }
        ]
      },
      {
        "name": "Sizemore",
        "result": "Eliminated",
        "eliminatedWeek": 2,
        "picks": [
          {
            "week": 1,
            "team": "Bengals",
            "loss": true
          },
          {
            "week": 2,
            "team": "Ravens",
            "loss": true
          }
        ]
      },
      {
        "name": "Ronnie",
        "result": "Eliminated",
        "eliminatedWeek": 2,
        "picks": [
          {
            "week": 1,
            "team": "Bengals",
            "loss": true
          },
          {
            "week": 2,
            "team": "Ravens",
            "loss": true
          }
        ]
      },
      {
        "name": "Pat",
        "result": "Eliminated",
        "eliminatedWeek": 2,
        "picks": [
          {
            "week": 1,
            "team": "Bengals",
            "loss": true
          },
          {
            "week": 2,
            "team": "Ravens",
            "loss": true
          }
        ]
      },
      {
        "name": "Walid",
        "result": "Eliminated",
        "eliminatedWeek": 2,
        "picks": [
          {
            "week": 1,
            "team": "Falcons",
            "loss": true
          },
          {
            "week": 2,
            "team": "Ravens",
            "loss": true
          }
        ]
      }
    ]
  },
  "2025": {
    "champion": "Seth",
    "players": [
      {
        "name": "Seth",
        "result": "Winner",
        "eliminatedWeek": null,
        "picks": [
          {
            "week": 1,
            "team": "Cardinals",
            "loss": false
          },
          {
            "week": 2,
            "team": "Cowboys",
            "loss": false
          },
          {
            "week": 3,
            "team": "Seahawks",
            "loss": false
          },
          {
            "week": 4,
            "team": "Bills",
            "loss": false
          },
          {
            "week": 5,
            "team": "Lions",
            "loss": false
          },
          {
            "week": 6,
            "team": "Packers",
            "loss": false
          },
          {
            "week": 7,
            "team": "Patriots",
            "loss": false
          },
          {
            "week": 8,
            "team": "Colts",
            "loss": false
          },
          {
            "week": 9,
            "team": "Rams",
            "loss": false
          },
          {
            "week": 10,
            "team": "Broncos",
            "loss": false
          },
          {
            "week": 11,
            "team": "Texans",
            "loss": false
          },
          {
            "week": 12,
            "team": "Ravens",
            "loss": false
          },
          {
            "week": 13,
            "team": "Chargers",
            "loss": false
          },
          {
            "week": 14,
            "team": "Buccaneers",
            "loss": true
          },
          {
            "week": 15,
            "team": "Eagles",
            "loss": false
          },
          {
            "week": 16,
            "team": "Saints",
            "loss": false
          },
          {
            "week": 17,
            "team": "Bengals",
            "loss": false
          },
          {
            "week": 18,
            "team": "Jaguars",
            "loss": false
          }
        ]
      },
      {
        "name": "Cummings",
        "result": "Eliminated",
        "eliminatedWeek": 18,
        "picks": [
          {
            "week": 1,
            "team": "Cardinals",
            "loss": false
          },
          {
            "week": 2,
            "team": "Cowboys",
            "loss": false
          },
          {
            "week": 3,
            "team": "Buccaneers",
            "loss": false
          },
          {
            "week": 4,
            "team": "Broncos",
            "loss": false
          },
          {
            "week": 5,
            "team": "Colts",
            "loss": false
          },
          {
            "week": 6,
            "team": "Packers",
            "loss": false
          },
          {
            "week": 7,
            "team": "Chiefs",
            "loss": false
          },
          {
            "week": 8,
            "team": "Patriots",
            "loss": false
          },
          {
            "week": 9,
            "team": "Rams",
            "loss": false
          },
          {
            "week": 10,
            "team": "Bills",
            "loss": true
          },
          {
            "week": 11,
            "team": "Ravens",
            "loss": false
          },
          {
            "week": 12,
            "team": "Lions",
            "loss": false
          },
          {
            "week": 13,
            "team": "Chargers",
            "loss": false
          },
          {
            "week": 14,
            "team": "Seahawks",
            "loss": false
          },
          {
            "week": 15,
            "team": "49ers",
            "loss": false
          },
          {
            "week": 16,
            "team": "Texans",
            "loss": false
          },
          {
            "week": 17,
            "team": "Jaguars",
            "loss": false
          },
          {
            "week": 18,
            "team": "Bengals",
            "loss": true
          }
        ]
      },
      {
        "name": "Matt Garner",
        "result": "Eliminated",
        "eliminatedWeek": 14,
        "picks": [
          {
            "week": 1,
            "team": "Broncos",
            "loss": false
          },
          {
            "week": 2,
            "team": "Cowboys",
            "loss": false
          },
          {
            "week": 3,
            "team": "Packers",
            "loss": true
          },
          {
            "week": 4,
            "team": "Bills",
            "loss": false
          },
          {
            "week": 5,
            "team": "Lions",
            "loss": false
          },
          {
            "week": 6,
            "team": "Colts",
            "loss": false
          },
          {
            "week": 7,
            "team": "Chiefs",
            "loss": false
          },
          {
            "week": 8,
            "team": "Patriots",
            "loss": false
          },
          {
            "week": 9,
            "team": "Rams",
            "loss": false
          },
          {
            "week": 10,
            "team": "Seahawks",
            "loss": false
          },
          {
            "week": 11,
            "team": "Ravens",
            "loss": false
          },
          {
            "week": 12,
            "team": "49ers",
            "loss": false
          },
          {
            "week": 13,
            "team": "Chargers",
            "loss": false
          },
          {
            "week": 14,
            "team": "Buccaneers",
            "loss": true
          }
        ]
      },
      {
        "name": "Aaron",
        "result": "Eliminated",
        "eliminatedWeek": 14,
        "picks": [
          {
            "week": 1,
            "team": "Broncos",
            "loss": false
          },
          {
            "week": 2,
            "team": "Ravens",
            "loss": false
          },
          {
            "week": 3,
            "team": "Bills",
            "loss": false
          },
          {
            "week": 4,
            "team": "Lions",
            "loss": false
          },
          {
            "week": 5,
            "team": "Cardinals",
            "loss": true
          },
          {
            "week": 6,
            "team": "Packers",
            "loss": false
          },
          {
            "week": 7,
            "team": "Chiefs",
            "loss": false
          },
          {
            "week": 8,
            "team": "Colts",
            "loss": false
          },
          {
            "week": 9,
            "team": "Rams",
            "loss": false
          },
          {
            "week": 10,
            "team": "Seahawks",
            "loss": false
          },
          {
            "week": 11,
            "team": "Patriots",
            "loss": false
          },
          {
            "week": 12,
            "team": "49ers",
            "loss": false
          },
          {
            "week": 13,
            "team": "Chargers",
            "loss": false
          },
          {
            "week": 14,
            "team": "Buccaneers",
            "loss": true
          }
        ]
      },
      {
        "name": "Luke",
        "result": "Eliminated",
        "eliminatedWeek": 14,
        "picks": [
          {
            "week": 1,
            "team": "Broncos",
            "loss": false
          },
          {
            "week": 2,
            "team": "Ravens",
            "loss": false
          },
          {
            "week": 3,
            "team": "Bills",
            "loss": false
          },
          {
            "week": 4,
            "team": "Lions",
            "loss": false
          },
          {
            "week": 5,
            "team": "Cardinals",
            "loss": true
          },
          {
            "week": 6,
            "team": "Packers",
            "loss": false
          },
          {
            "week": 7,
            "team": "Chiefs",
            "loss": false
          },
          {
            "week": 8,
            "team": "Colts",
            "loss": false
          },
          {
            "week": 9,
            "team": "Rams",
            "loss": false
          },
          {
            "week": 10,
            "team": "Seahawks",
            "loss": false
          },
          {
            "week": 11,
            "team": "Patriots",
            "loss": false
          },
          {
            "week": 12,
            "team": "49ers",
            "loss": false
          },
          {
            "week": 13,
            "team": "Chargers",
            "loss": false
          },
          {
            "week": 14,
            "team": "Buccaneers",
            "loss": true
          }
        ]
      },
      {
        "name": "Z Hickman",
        "result": "Eliminated",
        "eliminatedWeek": 14,
        "picks": [
          {
            "week": 1,
            "team": "Commanders",
            "loss": false
          },
          {
            "week": 2,
            "team": "Ravens",
            "loss": false
          },
          {
            "week": 3,
            "team": "Bills",
            "loss": false
          },
          {
            "week": 4,
            "team": "Lions",
            "loss": false
          },
          {
            "week": 5,
            "team": "Cardinals",
            "loss": true
          },
          {
            "week": 6,
            "team": "Packers",
            "loss": false
          },
          {
            "week": 7,
            "team": "Chiefs",
            "loss": false
          },
          {
            "week": 8,
            "team": "Colts",
            "loss": false
          },
          {
            "week": 9,
            "team": "Rams",
            "loss": false
          },
          {
            "week": 10,
            "team": "Broncos",
            "loss": false
          },
          {
            "week": 11,
            "team": "Patriots",
            "loss": false
          },
          {
            "week": 12,
            "team": "Seahawks",
            "loss": false
          },
          {
            "week": 13,
            "team": "Chargers",
            "loss": false
          },
          {
            "week": 14,
            "team": "Buccaneers",
            "loss": true
          }
        ]
      },
      {
        "name": "Pat Hickman",
        "result": "Eliminated",
        "eliminatedWeek": 10,
        "picks": [
          {
            "week": 1,
            "team": "Broncos",
            "loss": false
          },
          {
            "week": 2,
            "team": "Cowboys",
            "loss": false
          },
          {
            "week": 3,
            "team": "Seahawks",
            "loss": false
          },
          {
            "week": 4,
            "team": "Lions",
            "loss": false
          },
          {
            "week": 5,
            "team": "Cardinals",
            "loss": true
          },
          {
            "week": 6,
            "team": "Steelers",
            "loss": false
          },
          {
            "week": 7,
            "team": "Chiefs",
            "loss": false
          },
          {
            "week": 8,
            "team": "Colts",
            "loss": false
          },
          {
            "week": 9,
            "team": "Rams",
            "loss": false
          },
          {
            "week": 10,
            "team": "Panthers",
            "loss": true
          }
        ]
      },
      {
        "name": "Bri Garner",
        "result": "Eliminated",
        "eliminatedWeek": 10,
        "picks": [
          {
            "week": 1,
            "team": "Broncos",
            "loss": false
          },
          {
            "week": 2,
            "team": "Rams",
            "loss": false
          },
          {
            "week": 3,
            "team": "Packers",
            "loss": true
          },
          {
            "week": 4,
            "team": "Bills",
            "loss": false
          },
          {
            "week": 5,
            "team": "Lions",
            "loss": false
          },
          {
            "week": 6,
            "team": "Colts",
            "loss": false
          },
          {
            "week": 7,
            "team": "Chiefs",
            "loss": false
          },
          {
            "week": 8,
            "team": "Buccaneers",
            "loss": false
          },
          {
            "week": 9,
            "team": "Ravens",
            "loss": false
          },
          {
            "week": 10,
            "team": "Panthers",
            "loss": true
          }
        ]
      },
      {
        "name": "Walid",
        "result": "Eliminated",
        "eliminatedWeek": 6,
        "picks": [
          {
            "week": 1,
            "team": "Broncos",
            "loss": false
          },
          {
            "week": 2,
            "team": "Ravens",
            "loss": false
          },
          {
            "week": 3,
            "team": "Bills",
            "loss": false
          },
          {
            "week": 4,
            "team": "Lions",
            "loss": false
          },
          {
            "week": 5,
            "team": "Rams",
            "loss": true
          },
          {
            "week": 6,
            "team": "Eagles",
            "loss": true
          }
        ]
      },
      {
        "name": "Zach",
        "result": "Eliminated",
        "eliminatedWeek": 5,
        "picks": [
          {
            "week": 1,
            "team": "Bengals",
            "loss": false
          },
          {
            "week": 2,
            "team": "Ravens",
            "loss": false
          },
          {
            "week": 3,
            "team": "Packers",
            "loss": true
          },
          {
            "week": 4,
            "team": "Lions",
            "loss": false
          },
          {
            "week": 5,
            "team": "Bills",
            "loss": true
          }
        ]
      },
      {
        "name": "Ronnie",
        "result": "Eliminated",
        "eliminatedWeek": 4,
        "picks": [
          {
            "week": 1,
            "team": "Commanders",
            "loss": false
          },
          {
            "week": 2,
            "team": "Ravens",
            "loss": false
          },
          {
            "week": 3,
            "team": "Packers",
            "loss": true
          },
          {
            "week": 4,
            "team": "Chargers",
            "loss": true
          }
        ]
      }
    ]
  },
  "2026": {
    "champion": null,
    "weekRevealTimes": { "1": "2026-09-13T13:00:00-04:00", "2": "2026-09-20T13:00:00-04:00", "3": "2026-09-27T13:00:00-04:00", "4": "2026-10-04T13:00:00-04:00", "5": "2026-10-11T13:00:00-04:00", "6": "2026-10-18T13:00:00-04:00" },
    // Teams whose game kicks off before the weekly reveal (e.g. Thursday night) reveal at their own time: { week: { Team: ISO } }
    "teamRevealTimes": { "5": { "Cowboys": "2026-10-08T20:15:00-04:00" } },
    "players": [
      { "name": "Ronnie", "result": "Eliminated", "eliminatedWeek": 3, "picks": [ { "week": 1, "team": "Lions", "loss": false }, { "week": 2, "team": "Ravens", "loss": true }, { "week": 3, "team": "Seahawks", "loss": true } ] },
      { "name": "Z", "result": "Active", "eliminatedWeek": null, "picks": [ { "week": 1, "team": "Chargers", "loss": true }, { "week": 2, "team": "49ers", "loss": false }, { "week": 3, "team": "Chiefs", "loss": false }, { "week": 4, "team": "Ravens", "loss": false }, { "week": 5, "team": "Texans", "loss": false }, { "week": 6, "team": "Rams", "loss": false } ] },
      { "name": "Cummings", "result": "Eliminated", "eliminatedWeek": 5, "picks": [ { "week": 1, "team": "Chargers", "loss": true }, { "week": 2, "team": "49ers", "loss": false }, { "week": 3, "team": "Chiefs", "loss": false }, { "week": 4, "team": "Ravens", "loss": false }, { "week": 5, "team": "Cowboys", "loss": true } ] },
      { "name": "Luke", "result": "Eliminated", "eliminatedWeek": 5, "picks": [ { "week": 1, "team": "Chargers", "loss": true }, { "week": 2, "team": "49ers", "loss": false }, { "week": 3, "team": "Chiefs", "loss": false }, { "week": 4, "team": "Ravens", "loss": false }, { "week": 5, "team": "Cowboys", "loss": true } ] },
      { "name": "Aaron", "result": "Active", "eliminatedWeek": null, "picks": [ { "week": 1, "team": "Jaguars", "loss": false }, { "week": 2, "team": "49ers", "loss": false }, { "week": 3, "team": "Chiefs", "loss": false }, { "week": 4, "team": "Vikings", "loss": false }, { "week": 5, "team": "Texans", "loss": false }, { "week": 6, "team": "Rams", "loss": false } ] },
      { "name": "Zach", "result": "Active", "eliminatedWeek": null, "picks": [ { "week": 1, "team": "Jaguars", "loss": false }, { "week": 2, "team": "49ers", "loss": false }, { "week": 3, "team": "Chiefs", "loss": false }, { "week": 4, "team": "Ravens", "loss": false }, { "week": 5, "team": "Bengals", "loss": false } ] }
    ]
  }
};

// ---------- Rules & Bylaws Voting History ----------
// Sourced from League of NARPS SurveyMonkey rule-change ballots, 2013–2025.
// "passed" = true (adopted) / false (rejected) / null (plurality pick among 3+ options, or informational/logistics)
// The league's rules as they stand today, pieced together from RULES_HISTORY.
// "vote" points at the ballot that set the rule: "<year>-<n>", where n is the vote's
// position in that year's ballots (all rounds, in order). Shown at the top of rules.html.
const CURRENT_RULES = [
  { group: "League", items: [
    { label: "Teams", value: "12", vote: "2014-1" },
    { label: "Entry fee", value: "$200", vote: "2022-4" }
  ]},
  { group: "Lineup & Roster", items: [
    { label: "Starters", value: "QB · 2 RB · 2 WR · TE · 2 FLEX", vote: "2018-8" },
    { label: "FLEX", value: "RB, WR or TE", vote: "2013-7" },
    { label: "Bench", value: "5" },
    { label: "IR", value: "2", vote: "2023-1" },
    { label: "Kicker", value: "Not used", vote: "2018-6" },
    { label: "D/ST", value: "Not used", vote: "2019-1" },
    { label: "Keepers", value: "None", vote: "2020-4" }
  ]},
  { group: "Scoring", items: [
    { label: "Passing yards", value: "0.2 pts per 5 yards" },
    { label: "Passing TD", value: "4 pts" },
    { label: "Rush/receiving yards", value: "0.1 pt per yard" },
    { label: "Rush/receiving TD", value: "6 pts" },
    { label: "Receptions", value: "0.5 PPR", vote: "2018-9" },
    { label: "2-pt conversion", value: "2 pts (pass, rush or catch)" },
    { label: "INT or fumble lost", value: "−2 pts" }
  ]},
  { group: "Season & Playoffs", items: [
    { label: "Regular season", value: "14 weeks", vote: "2021-1" },
    { label: "Playoff teams", value: "6" },
    { label: "Seeding", value: "1–5 by record, 6th by points", vote: "2022-2" },
    { label: "Byes", value: "Seeds 1 and 2" },
    { label: "Matchups", value: "One week per round", vote: "2015-1" },
    { label: "Reseeding", value: "Top seed plays lowest seed left", vote: "2024-6" }
  ]},
  { group: "Draft", items: [
    { label: "Format", value: "Snake", vote: "2013-1" },
    { label: "Order", value: "Random", vote: "2015-2" },
    { label: "Slot swaps", value: "Allowed", vote: "2018-5" },
    { label: "Trading future picks", value: "Not allowed", vote: "2016-4" }
  ]},
  { group: "Transactions", items: [
    { label: "Free agents", value: "Waivers", vote: "2018-11" },
    { label: "Limit", value: "None", vote: "2020-2" },
    { label: "Trade deadline", value: "Wed. after Week 10", vote: "2023-2" }
  ]}
];

const RULES_HISTORY = [
  {
    "year": 2013,
    "rounds": [
      {
        "label": "Fantasy Football 2013 Survey",
        "votes": [
          {
            "short": "Draft type",
            "category": "Draft",
            "question": "What type of draft should we use?",
            "options": ["Snake: 80% (8)", "Auction: 20% (2)"],
            "result": "Snake",
            "passed": true
          },
          {
            "short": "Keepers for 2014",
            "category": "Roster",
            "question": "How many keepers should we have for the 2014 season?",
            "options": ["1: 50% (5)", "2: 40% (4)", "3: 0% (0)", "None: 10% (1)"],
            "result": "1 keeper",
            "passed": true
          },
          {
            "short": "Weekly transaction limit",
            "category": "Roster",
            "question": "How many transactions should be allowed per week?",
            "options": ["2: 33.33% (3)", "3: 22.22% (2)", "Unlimited: 44.44% (4)"],
            "result": "Unlimited",
            "passed": true
          },
          {
            "short": "Draft order with keepers",
            "category": "Draft",
            "question": "What type of draft shall we use for NEXT season (if we have keepers)?",
            "options": ["Random: 33.33% (3)", "Inverse of standings: 33.33% (3)", "Lottery: 33.33% (3)"],
            "result": "Three-way tie (Random, Inverse of standings, Lottery each 33.33%): no majority",
            "passed": null
          }
        ]
      },
      {
        "label": "Fantasy Football 2013, Round 2",
        "votes": [
          {
            "short": "Weekly transaction limit (round 2)",
            "category": "Roster",
            "question": "How many transactions should be allowed per week?",
            "options": ["2: 60% (6)", "Unlimited: 40% (4)"],
            "result": "2",
            "passed": true
          },
          {
            "short": "Draft order until keepers reset",
            "category": "Draft",
            "question": "What draft order selection should be implemented until keepers are reset?",
            "options": ["Lottery: 40% (4)", "Inverse of Standings: 40% (4)", "Random: 20% (2)"],
            "result": "Tied: Lottery and Inverse of Standings each 40% (Random eliminated with 20%)",
            "passed": null
          },
          {
            "short": "New roster spot",
            "category": "Roster",
            "question": "What position should be added to the roster? (Note: the RB/WR slot will be removed.)",
            "options": ["FLEX (RB, WR, or TE): 80% (8)", "OP (RB, WR, TE, or QB): 20% (2)"],
            "result": "FLEX (RB, WR, or TE)",
            "passed": true
          },
          {
            "short": "Keeper reset timing",
            "category": "Roster",
            "question": "After ___ year(s) ALL keepers shall be RESET.",
            "options": ["1: 20% (2)", "2: 40% (4)", "3: 40% (4)"],
            "result": "Tied: 2 years and 3 years each 40% (1 year got 20%)",
            "passed": null
          }
        ]
      },
      {
        "label": "Fantasy Football 2013, Round 3",
        "votes": [
          {
            "short": "League size",
            "category": "Membership",
            "question": "How many teams shall be in the league?",
            "options": ["10: 70% (7)", "12: 30% (3)"],
            "result": "10 teams",
            "passed": true
          },
          {
            "short": "Keeper reset season",
            "category": "Roster",
            "question": "Keepers should be reset the beginning of the _____ season?",
            "options": ["2016: 60% (6)", "2017: 40% (4)"],
            "result": "2016",
            "passed": true
          },
          {
            "short": "Draft order until keepers reset (round 3)",
            "category": "Draft",
            "question": "What draft order selection shall be used until keepers are reset?",
            "options": ["Inverse of Standings: 50% (5)", "Lottery: 50% (5)"],
            "result": "Tied: Inverse of Standings and Lottery each 50%",
            "passed": null
          },
          {
            "short": "Season transaction cap",
            "category": "Roster",
            "question": "ESPN does not allow for a limit of transactions per week; transactions can only be limited on a per-year basis (most in a season: 31 in 2012; fewest: 6 in 2011). Teams shall be limited to ____ transactions per year?",
            "options": ["No limit: 40% (4)", "20: 30% (3)", "15: 20% (2)", "10: 10% (1)"],
            "result": "No majority (No limit led with 40%): advanced to a runoff",
            "passed": null
          }
        ]
      },
      {
        "label": "Fantasy Football 2013, Transactions Runoff",
        "votes": [
          {
            "short": "Season transaction cap (runoff)",
            "category": "Roster",
            "question": "How many transactions should teams be limited to in a season?",
            "options": ["20: 60% (6)", "No limit: 40% (4)"],
            "result": "20 transactions per season",
            "passed": true
          }
        ]
      }
    ]
  },
  {
    "year": 2014,
    "rounds": [
      {
        "label": "2014 Fantasy Football I",
        "votes": [
          {
            "short": "Expand to 12 teams",
            "category": "Membership",
            "question": "Are you in favor of expanding the League to include a total of twelve (12) members?",
            "options": ["YES: 55.56% (5)", "NO: 44.44% (4)"],
            "result": "YES: expand to 12 members",
            "passed": true
          },
          {
            "short": "Two-week playoff matchups",
            "category": "Playoffs",
            "question": "Are you in favor of changing to a two-week playoff matchup (the result of a two-week playoff matchup would be a shortened regular season)?",
            "options": ["YES: 2 week playoff matchup, 55.56% (5)", "NO: 1 week playoff matchup, 44.44% (4)"],
            "result": "YES: 2-week playoff matchup",
            "passed": true
          },
          {
            "short": "Final week of playoffs",
            "category": "Playoffs",
            "question": "What should be the last week of the playoffs?",
            "options": ["15: 33.33% (3)", "16: 66.67% (6)", "17: 0% (0)"],
            "result": "Week 16",
            "passed": true
          },
          {
            "short": "Transaction system",
            "category": "Roster",
            "question": "What type of transaction system should be used?",
            "options": ["No Waivers: 44.44% (4)", "Waivers: 44.44% (4)", "Auction: 11.11% (1)"],
            "result": "Tied: No Waivers and Waivers each 44.44% (Auction got 11.11%)",
            "passed": null
          }
        ]
      },
      {
        "label": "Fantasy Football II",
        "votes": [
          {
            "short": "Transaction system (runoff)",
            "category": "Roster",
            "question": "What type of transaction system should we use?",
            "options": ["Waivers: 55.56% (5)", "No Waivers: 44.44% (4)"],
            "result": "Waivers",
            "passed": true
          },
          {
            "short": "Raise dues to $30",
            "category": "Finances",
            "question": "Do you favor increasing fees from $20 to $30, for which the first year $5 from each member will be used to purchase a trophy for the League?",
            "options": ["YES: 55.56% (5)", "NO: 44.44% (4)"],
            "result": "YES: dues increased to $30",
            "passed": true
          }
        ]
      }
    ]
  },
  {
    "year": 2015,
    "rounds": [
      {
        "label": "Fantasy Football 2015, Round 1",
        "votes": [
          {
            "short": "Playoff matchup length",
            "category": "Playoffs",
            "question": "Use a 1-week playoff matchup (regular season ends Week 13) or a 2-week playoff matchup (regular season ends Week 10)?",
            "options": ["1-week: 82% (9)", "2-week: 18% (2)"],
            "result": "1-week playoff matchups",
            "passed": true
          },
          {
            "short": "Draft order",
            "category": "Draft",
            "question": "How should the draft order be determined this year?",
            "options": ["Random: 73% (8)", "Inverse of standings: 27% (3)"],
            "result": "Random",
            "passed": true
          },
          {
            "short": "Kicker scoring",
            "category": "Scoring",
            "question": "Change kicker scoring so all FGs made are worth a flat 3 points (previously 4 pts for 40–49 yds, 5 pts for 50+ yds), plus -1 point for any missed PAT?",
            "options": ["Approve: 73% (8)", "Disapprove: 27% (3)"],
            "result": "Approved",
            "passed": true
          }
        ]
      }
    ]
  },
  {
    "year": 2016,
    "rounds": [
      {
        "label": "Fantasy Football 2016 Survey",
        "votes": [
          {
            "short": "League dues",
            "category": "Finances",
            "question": "Increase league dues to $50 or $100, or remain at $25? (An increase would add weekly payouts to the top-scoring team.)",
            "options": ["$25: 27% (3)", "$50: 18% (2)", "$100: 55% (6)"],
            "result": "$100",
            "passed": true
          },
          {
            "short": "Bring back keepers",
            "category": "Roster",
            "question": "Keepers were eliminated this season; are you in favor of implementing keepers for the following year, and if so how many?",
            "options": ["No Keepers: 27% (3)", "1: 45% (5)", "2: 27% (3)", "Other: 0%"],
            "result": "1 keeper",
            "passed": true
          },
          {
            "short": "Keeper length",
            "category": "Roster",
            "question": "If we choose to allow keepers, how many years do you want to do keepers?",
            "options": ["1: 55% (6)", "2: 45% (5)", "3: 0%"],
            "result": "1 year",
            "passed": true
          },
          {
            "short": "Trading draft picks",
            "category": "Draft",
            "question": "Proposed changes to trading draft picks, to keep the league competitive and fair; which would you like implemented this season?",
            "options": ["Keep things the way they are: 27% (3)", "DO NOT allow draft picks to be traded: 45% (5)", "Only allow one draft pick to be traded: 27% (3)", "No picks between rounds 1–4 can be traded: 0%"],
            "result": "Draft picks could not be traded",
            "passed": true
          },
          {
            "short": "Season transaction cap",
            "category": "Roster",
            "question": "Teams are currently allowed 25 transactions per season (including playoffs). In favor of increasing, and if so to how many?",
            "options": ["Remain at 25: 55% (6)", "30: 18% (2)", "35: 0%", "No Limit: 27% (3)"],
            "result": "Remain at 25",
            "passed": false
          },
          {
            "short": "IR slots",
            "category": "Roster",
            "question": "Teams are currently allowed 2 IR spots. In favor of increasing to 3?",
            "options": ["2 (remain): 64% (7)", "3: 36% (4)"],
            "result": "Remain at 2",
            "passed": false
          },
          {
            "short": "Championship trophy",
            "category": "Finances",
            "question": "Which championship trophy are you in favor of purchasing?",
            "options": ["Bronze at $125: 55% (6)", "Silver at $165: 45% (5)"],
            "result": "Bronze at $125",
            "passed": true
          }
        ]
      }
    ]
  },
  {
    "year": 2017,
    "rounds": [
      {
        "label": "Fantasy Football 2017 Survey",
        "votes": [
          {
            "short": "Season transaction cap",
            "category": "Roster",
            "question": "Keep transactions at 25 per season (including playoffs) or increase to 30?",
            "options": ["25: 30% (3)", "30: 70% (7)"],
            "result": "30",
            "passed": true
          },
          {
            "short": "Snake or auction draft",
            "category": "Draft",
            "question": "Should we use a snake draft or an auction draft?",
            "options": ["Snake: 90% (9)", "Auction: 10% (1)"],
            "result": "Snake",
            "passed": false
          }
        ]
      }
    ]
  },
  {
    "year": 2018,
    "rounds": [
      {
        "label": "2018 Fantasy Football Survey",
        "votes": [
          {
            "short": "Expand to 14 teams",
            "category": "Membership",
            "question": "Remain at twelve (12) owners or expand to fourteen (14)?",
            "options": ["12: 73% (8)", "14: 27% (3)"],
            "result": "12",
            "passed": false,
            "note": "League stayed at 12 owners; the 14-team playoff-size question was rendered moot."
          },
          {
            "short": "Payout split",
            "category": "Finances",
            "question": "Ranked-choice vote on the 12-team payout split ($900 to disperse after weekly/season high-score bonuses)",
            "options": ["$500/$300/$100", "$500/$250/$150", "$600/$200/$100", "$550/$250/$100"],
            "result": "$600 / $200 / $100 (best weighted rank, 2.00 avg)",
            "passed": null
          },
          {
            "short": "Keepers",
            "category": "Roster",
            "question": "Do you want to allow keepers, and if so how many?",
            "options": ["No Keepers: 27% (3)", "1: 55% (6)", "2: 18% (2)"],
            "result": "1 keeper",
            "passed": true
          },
          {
            "short": "Keeper length",
            "category": "Roster",
            "question": "If we allow keepers, for how many years should it be?",
            "options": ["1: 55% (6)", "2: 36% (4)", "3: 9% (1)"],
            "result": "1 year",
            "passed": true
          },
          {
            "short": "Draft slot swaps",
            "category": "Draft",
            "question": "Should we allow draft position swapping (teams swap entire draft slot with another team)?",
            "options": ["Yes: 64% (7)", "No: 36% (4)"],
            "result": "Yes",
            "passed": true
          },
          {
            "short": "Remove kicker",
            "category": "Roster",
            "question": "Should we remove the Kicker position?",
            "options": ["Yes: 64% (7)", "No: 36% (4)"],
            "result": "Yes",
            "passed": true,
            "note": "Kicker dropped from rosters starting the following season."
          },
          {
            "short": "Remove D/ST",
            "category": "Roster",
            "question": "Should we remove the Defense/Special Teams position?",
            "options": ["Yes: 27% (3)", "No: 73% (8)"],
            "result": "No",
            "passed": false,
            "note": "D/ST survived this vote: see 2019, where it was eliminated on a second try."
          },
          {
            "short": "Replacement roster spot",
            "category": "Roster",
            "question": "If we remove the K or D/ST position, should we add another position?",
            "options": ["QB: 0%", "RB: 0%", "WR: 9% (1)", "TE: 0%", "Flex: 73% (8)", "Do not add another position: 18% (2)"],
            "result": "Flex",
            "passed": true,
            "note": "This is the origin of the league's second FLEX spot."
          },
          {
            "short": "Points per reception",
            "category": "Scoring",
            "question": "How many points should a reception be worth?",
            "options": ["0.2: 0%", "0.5: 82% (9)", "1.0: 18% (2)"],
            "result": "0.5 PPR",
            "passed": true,
            "note": "This is the origin vote for the league's still-current 0.5 PPR scoring."
          },
          {
            "short": "Season transaction cap",
            "category": "Roster",
            "question": "How many transactions should each team be allowed per season (including playoffs)?",
            "options": ["30 (current): 18% (2)", "35: 45% (5)", "40: 36% (4)"],
            "result": "35",
            "passed": true
          },
          {
            "short": "Waivers or FA auction",
            "category": "Roster",
            "question": "For free agent acquisitions, should we use Waivers or a Free Agent Auction?",
            "options": ["Waivers: 100% (11)", "Free Agent Auction: 0%"],
            "result": "Waivers",
            "passed": true
          }
        ]
      }
    ]
  },
  {
    "year": 2019,
    "rounds": [
      {
        "label": "2019 Fantasy Football Survey",
        "votes": [
          {
            "short": "Remove D/ST",
            "category": "Roster",
            "question": "Should we eliminate the D/ST position?",
            "options": ["Yes: 64% (7)", "No: 36% (4)"],
            "result": "Yes",
            "passed": true,
            "note": "Finished the job the 2018 survey didn't: D/ST dropped from rosters."
          },
          {
            "short": "Second FLEX spot",
            "category": "Roster",
            "question": "Should we keep or remove the second FLEX position?",
            "options": ["Keep: 91% (10)", "Remove: 9% (1)"],
            "result": "Keep",
            "passed": true
          },
          {
            "short": "Season transaction cap",
            "category": "Roster",
            "question": "Should we increase transactions from 35 to 40?",
            "options": ["35 (stay): 55% (6)", "40: 45% (5)"],
            "result": "Stayed at 35",
            "passed": false
          }
        ]
      }
    ]
  },
  {
    "year": 2020,
    "rounds": [
      {
        "label": "Round 1, Preseason Rules Vote",
        "votes": [
          {
            "short": "Auction draft",
            "category": "Draft",
            "question": "Should we use an auction draft?",
            "options": ["Yes: 36% (4)", "No: 64% (7)"],
            "result": "No",
            "passed": false
          },
          {
            "short": "Transaction limits",
            "category": "Roster",
            "question": "Should we eliminate transaction limits?",
            "options": ["Yes: 55% (6)", "No: 45% (5)"],
            "result": "Yes",
            "passed": true
          },
          {
            "short": "Extra IR slots",
            "category": "Roster",
            "question": "How many IR spots should we add? (currently 2)",
            "options": ["0: 9% (1)", "1: 45% (5)", "2: 45% (5)"],
            "result": "Effectively +1 (IR went to 3 total, confirmed by the 2021 survey)",
            "passed": null,
            "note": "Statistical tie between adding 1 and adding 2; league settled on 3 total IR slots."
          },
          {
            "short": "Keeper for 2021",
            "category": "Roster",
            "question": "Should we have one keeper going into the 2021 season?",
            "options": ["Yes: 45% (5)", "No: 55% (6)"],
            "result": "No",
            "passed": false
          },
          {
            "short": "Add an IDP spot",
            "category": "Roster",
            "question": "Should we add one Individual Defensive Player (IDP) roster spot?",
            "options": ["Yes: 27% (3)", "No: 73% (8)"],
            "result": "No",
            "passed": false
          },
          {
            "short": "SUPERFLEX",
            "category": "Roster",
            "question": "Should we change one FLEX position to a SUPERFLEX position?",
            "options": ["Yes: 27% (3)", "No: 73% (8)"],
            "result": "No",
            "passed": false
          },
          {
            "short": "Season length if NFL cancels",
            "category": "Contingency",
            "question": "How many weeks should constitute a League of NARPS season if the NFL cancels its season?",
            "options": ["7: 0%", "8: 18% (2)", "9: 18% (2)", "10: 55% (6)", "Other: 9% (1)"],
            "result": "10 weeks",
            "passed": null
          },
          {
            "short": "Payout if NFL cancels",
            "category": "Contingency",
            "question": "If the NFL season is cancelled before LoN's playoffs, what payout should the top 3 records receive?",
            "options": ["No Payout: 18% (2)", "Partial Payout: 45% (5)", "Full Payout: 36% (4)"],
            "result": "Partial Payout",
            "passed": null
          }
        ]
      },
      {
        "label": "Round 2, COVID Contingency Vote",
        "votes": [
          {
            "short": "Cancelled during playoffs",
            "category": "Contingency",
            "question": "If the NFL season were cancelled during the LoN playoffs, should final standings be determined by highest remaining seed?",
            "options": ["Yes: 82% (9)", "No: 18% (2)"],
            "result": "Yes",
            "passed": true
          },
          {
            "short": "Payout if playoffs not finished",
            "category": "Contingency",
            "question": "If ≥10 weeks were completed and playoffs were not, should the top 3 teams get a full or partial payout?",
            "options": ["Full Payout: 45% (5)", "Partial Payout: 55% (6)"],
            "result": "Partial Payout",
            "passed": true
          },
          {
            "short": "Partial payout split",
            "category": "Finances",
            "question": "If Partial Payout, what should the split be?",
            "options": ["75% split ($325/$225/$75): 36% (4)", "50% split ($250/$150/$50): 64% (7)", "25% split ($125/$75/$25): 0%"],
            "result": "50% split: $250 / $150 / $50",
            "passed": true
          },
          {
            "short": "Unpaid partial-payout money",
            "category": "Finances",
            "question": "What should happen with the remaining partial-payout money?",
            "options": ["Divide equally and return to members: 45% (5)", "Roll it over into next season's winnings: 55% (6)"],
            "result": "Roll over into next season",
            "passed": true
          }
        ]
      }
    ]
  },
  {
    "year": 2021,
    "rounds": [
      {
        "label": "2021 LoN Survey",
        "votes": [
          {
            "short": "14th regular-season week",
            "category": "Schedule",
            "question": "The NFL expanded to 17 games. Should the League of NARPS add a 14th regular-season week?",
            "options": ["Yes: 73% (8)", "No: 27% (3)"],
            "result": "Yes",
            "passed": true
          },
          {
            "short": "Keeper for 2022",
            "category": "Roster",
            "question": "Should the League of NARPS have a keeper for the 2022 season?",
            "options": ["Yes: 45% (5)", "No: 55% (6)"],
            "result": "No",
            "passed": false,
            "note": "Keepers stayed off after this vote."
          },
          {
            "short": "IR slots",
            "category": "Roster",
            "question": "Last year we expanded IR from 2 to 3 slots. Remain at 3, or move back to 2?",
            "options": ["2: 36% (4)", "3: 64% (7)"],
            "result": "Remain at 3",
            "passed": true
          }
        ]
      }
    ]
  },
  {
    "year": 2022,
    "rounds": [
      {
        "label": "2022 LoN Survey",
        "votes": [
          {
            "short": "Trade deadline",
            "category": "Schedule",
            "question": "Which week should the trade deadline be? (cutoff = the following Wednesday; 14-week regular season)",
            "options": ["Week 8: 18% (2)", "Week 9: 45% (5)", "Week 10: 36% (4)"],
            "result": "Week 9",
            "passed": null
          },
          {
            "short": "6th seed by points",
            "category": "Playoffs",
            "question": "Should the 6th playoff seed be the highest-points-scored team among those outside the top 5 records?",
            "options": ["Yes: 82% (9)", "No: 18% (2)"],
            "result": "Yes",
            "passed": true,
            "note": "Origin vote for the league's still-current 6-seed-by-points playoff rule."
          },
          {
            "short": "Points per reception",
            "category": "Scoring",
            "question": "How many points should a reception be worth?",
            "options": ["0.5: 64% (7)", "1.0: 36% (4)"],
            "result": "0.5 PPR (reaffirmed)",
            "passed": true
          },
          {
            "short": "Entry fee",
            "category": "Finances",
            "question": "How much should the entry fee be?",
            "options": ["$100: 45% (5)", "$200: 55% (6)"],
            "result": "$200",
            "passed": true
          }
        ]
      },
      {
        "label": "2022 LoN Payout Final Vote",
        "votes": [
          {
            "short": "Payout structure (runoff)",
            "category": "Finances",
            "question": "Runoff on the season payout structure: Proposal 1 or Proposal 3?",
            "options": ["Proposal 1: 30% (3)", "Proposal 3: 70% (7)"],
            "result": "Proposal 3",
            "passed": true,
            "note": "Follow-up runoff vote; exact proposal text wasn't preserved in the archived export."
          }
        ]
      }
    ]
  },
  {
    "year": 2023,
    "rounds": [
      {
        "label": "LoN Survey 2023",
        "votes": [
          {
            "short": "IR slots",
            "category": "Roster",
            "question": "How many IR slots should we have? (previously 3, expanded during COVID)",
            "options": ["1: 27% (3)", "2: 73% (8)"],
            "result": "2",
            "passed": true
          },
          {
            "short": "Trade deadline",
            "category": "Schedule",
            "question": "Should the trade deadline move to the Wednesday after Week 10, or stay after Week 9?",
            "options": ["Week 9: 36% (4)", "Week 10: 64% (7)"],
            "result": "Week 10",
            "passed": true
          },
          {
            "short": "Snake or auction draft",
            "category": "Draft",
            "question": "Should we use a Snake Draft or an Auction Draft?",
            "options": ["Auction: 9% (1)", "Snake: 91% (10)"],
            "result": "Snake",
            "passed": false,
            "note": "Auction rejected in a landslide."
          },
          {
            "short": "TE to WR/TE",
            "category": "Roster",
            "question": "Should the Tight End position be converted to a Wide Receiver/Tight End position?",
            "options": ["Remain TE: 55% (6)", "Convert to WR/TE: 45% (5)"],
            "result": "Remain TE",
            "passed": false
          },
          {
            "short": "Playoff qualification",
            "category": "Playoffs",
            "question": "Do you wish to keep the current playoff qualifications (seeds 1–5 by record, 6-seed by points)?",
            "options": ["Yes: 73% (8)", "No: 27% (3)"],
            "result": "Yes",
            "passed": true,
            "note": "Reaffirms the 2022 6-seed-by-points rule."
          },
          {
            "short": "Alternate playoff format",
            "category": "Playoffs",
            "question": "(Contingency, rendered moot) If qualifications changed, which proposal?",
            "options": ["Top 6 by record only: 27% (3)", "Top 6 by record + 7th seed by points (#1 seed bye): 73% (8)"],
            "result": "Moot: current format was kept",
            "passed": null
          }
        ]
      }
    ]
  },
  {
    "year": 2024,
    "rounds": [
      {
        "label": "LoN 2024 Survey, Round 1",
        "votes": [
          {
            "short": "TE to WR/TE",
            "category": "Roster",
            "question": "Should we convert the TE position to a WR/TE position?",
            "options": ["Convert to WR/TE: 45% (5)", "Remain TE: 55% (6)"],
            "result": "Remain TE",
            "passed": false
          },
          {
            "short": "TE points per reception",
            "category": "Scoring",
            "question": "Should TEs receive 0.75 points per reception?",
            "options": ["Change to 0.75: 27% (3)", "Remain at 0.5: 73% (8)"],
            "result": "Remain at 0.5",
            "passed": false
          },
          {
            "short": "Median scoring record",
            "category": "Standings",
            "question": "Should we add a median-scoring record (top/bottom 6 scorers each week get a W/L added to head-to-head record)?",
            "options": ["Add Median Scoring Record: 27% (3)", "Do Not Add: 73% (8)"],
            "result": "Do Not Add",
            "passed": false
          },
          {
            "short": "Seven-team playoffs",
            "category": "Playoffs",
            "question": "Should we expand the playoffs to 7 teams?",
            "options": ["Yes: 36% (4)", "No: 64% (7)"],
            "result": "No",
            "passed": false,
            "note": "Playoffs stayed at 6 teams."
          },
          {
            "short": "Playoff reseeding",
            "category": "Playoffs",
            "question": "Vote on playoff reseeding format (4-way; no majority triggers a runoff)",
            "options": [
              "Highest seed plays lowest remaining seed: 36% (4)",
              "Highest seed picks their opponent (rounds 1–2): 9% (1)",
              "Top half of seeds choose their opponent: 18% (2)",
              "No playoff reseeding: 36% (4)"
            ],
            "result": "Tie between reseeding and no-reseeding: runoff required",
            "passed": null
          }
        ]
      },
      {
        "label": "LoN 2024 Survey 2, Reseeding Runoff",
        "votes": [
          {
            "short": "Playoff reseeding (runoff)",
            "category": "Playoffs",
            "question": "Runoff: highest seed plays lowest remaining seed, or no playoff reseeding?",
            "options": ["Highest seed plays lowest remaining seed: 70% (7)", "No playoff reseeding: 30% (3)"],
            "result": "Highest seed plays lowest remaining seed",
            "passed": true,
            "note": "Playoff reseeding adopted starting with the 2024 postseason."
          }
        ]
      }
    ]
  },
  {
    "year": 2025,
    "rounds": [
      {
        "label": "LoN 2025 Survey",
        "votes": [
          {
            "short": "Draft order by final standings",
            "category": "Draft",
            "question": "Should the 2026 draft order be set by final standings (champion picks first, then 2nd, 3rd, etc.)?",
            "options": ["Yes: 36% (4)", "No: 64% (7)"],
            "result": "No",
            "passed": false
          },
          {
            "short": "TE to WR/TE",
            "category": "Roster",
            "question": "For the 2025 season, should we convert a TE position to a WR/TE position?",
            "options": ["Yes (WR/TE): 45% (5)", "No (TE): 55% (6)"],
            "result": "No (TE)",
            "passed": false
          }
        ]
      }
    ]
  },
  {
    "year": 2026,
    "rounds": [
      {
        "label": "LoN 2026 Survey",
        "votes": [
          {
            "short": "IR slots",
            "category": "Roster",
            "question": "How many IR slots should there be?",
            "options": ["1: 45.45% (5)", "2: 54.55% (6)"],
            "result": "Remain at 2",
            "passed": false
          },
          {
            "short": "0.5 or 1.0 PPR",
            "category": "Scoring",
            "question": "Should we use 0.5 PPR or 1.0 PPR?",
            "options": ["0.5: 72.73% (8)", "1.0: 27.27% (3)"],
            "result": "Remain at 0.5 PPR",
            "passed": false
          },
          {
            "short": "TE to TE/WR",
            "category": "Roster",
            "question": "Should we convert TE to TE/WR?",
            "options": ["TE: 72.73% (8)", "TE/WR: 27.27% (3)"],
            "result": "Remain TE",
            "passed": false
          },
          {
            "short": "Playoff reseeding",
            "category": "Playoffs",
            "question": "Should we use playoff reseeding (seeds are reordered in the 2nd round so the highest seed plays the lowest seed)? If no, then we use the normal bracket setup (#1 seed plays winner of #4/5 seed and #2 seed plays winner of #3/6 seed). We voted for playoff reseeding in 2024 but it has not come into play.",
            "options": ["Use Playoff Reseeding: 63.64% (7)", "Do Not Use Playoff Reseeding: 36.36% (4)"],
            "result": "Use Playoff Reseeding (status quo maintained)",
            "passed": false,
            "note": "Reaffirms the playoff reseeding rule adopted in 2024; it still has not come into play in an actual bracket."
          }
        ]
      }
    ]
  }
];

// ---------- Draft History (2011-2025), by round/pick, sourced from ESPN draft recaps ----------

// Years for which a completed draft's results exist (used by season.html to decide
// whether to show the draft-order/countdown widget, without loading the full
// draft pick-by-pick history from data-draft-history.js).
const DRAFT_RESULTS_YEARS = ["2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021","2022","2023","2024","2025","2026"];

// ---------- Premier League pick'em ----------
// One club per matchweek: win 3, draw 1, loss 0. Each club can be picked twice per season.
// result: "W" | "D" | "L" (leave null until the match is played). score is from the picked club's side.
// ESPN team ids for club crests: https://a.espncdn.com/i/teamlogos/soccer/500/${id}.png
const PL_LOGO_ID = {
  "Arsenal": 359, "Aston Villa": 362, "Bournemouth": 349, "Brentford": 337, "Brighton": 331,
  "Chelsea": 363, "Coventry City": 388, "Crystal Palace": 384, "Everton": 368, "Fulham": 370,
  "Hull City": 306, "Ipswich Town": 373, "Leeds United": 357, "Liverpool": 364, "Manchester City": 382,
  "Manchester United": 360, "Newcastle United": 361, "Nottingham Forest": 393, "Sunderland": 366, "Tottenham": 367
};

// Shorter club names used on the schedule at phone width.
const PL_SHORT_NAME = {
  "Manchester City": "Man. City", "Manchester United": "Man. United",
  "Nottingham Forest": "Nottingham", "Newcastle United": "Newcastle"
};

const PREMIER_LEAGUE = {
  "2026": {
    season: "2026–27",
    clubs: ["Arsenal","Aston Villa","Bournemouth","Brentford","Brighton","Chelsea","Coventry City","Crystal Palace","Everton","Fulham",
            "Hull City","Ipswich Town","Leeds United","Liverpool","Manchester City","Manchester United","Newcastle United","Nottingham Forest","Sunderland","Tottenham"],
    // Full fixture list by matchweek: [kickoff (UTC), home, away]. Kickoff times after the next few weeks are provisional.
    fixtures: {
      1: [["2026-08-21T19:00Z", "Arsenal", "Coventry City"], ["2026-08-22T11:30Z", "Hull City", "Manchester United"], ["2026-08-22T14:00Z", "Everton", "Crystal Palace"], ["2026-08-22T14:00Z", "Ipswich Town", "Sunderland"], ["2026-08-22T14:00Z", "Nottingham Forest", "Leeds United"], ["2026-08-22T16:30Z", "Brentford", "Tottenham"], ["2026-08-23T13:00Z", "Brighton", "Aston Villa"], ["2026-08-23T13:00Z", "Manchester City", "Bournemouth"], ["2026-08-23T15:30Z", "Newcastle United", "Liverpool"], ["2026-08-24T19:00Z", "Fulham", "Chelsea"]],
      2: [["2026-08-28T19:00Z", "Crystal Palace", "Manchester City"], ["2026-08-29T11:30Z", "Liverpool", "Nottingham Forest"], ["2026-08-29T14:00Z", "Bournemouth", "Everton"], ["2026-08-29T14:00Z", "Coventry City", "Hull City"], ["2026-08-29T16:30Z", "Tottenham", "Newcastle United"], ["2026-08-30T13:00Z", "Chelsea", "Brighton"], ["2026-08-30T13:00Z", "Leeds United", "Brentford"], ["2026-08-30T13:00Z", "Sunderland", "Fulham"], ["2026-08-30T15:30Z", "Manchester United", "Ipswich Town"], ["2026-08-31T19:00Z", "Aston Villa", "Arsenal"]],
      3: [["2026-09-04T19:00Z", "Ipswich Town", "Liverpool"], ["2026-09-05T11:30Z", "Newcastle United", "Bournemouth"], ["2026-09-05T14:00Z", "Brentford", "Sunderland"], ["2026-09-05T14:00Z", "Brighton", "Leeds United"], ["2026-09-05T14:00Z", "Fulham", "Crystal Palace"], ["2026-09-05T14:00Z", "Manchester City", "Coventry City"], ["2026-09-05T14:00Z", "Nottingham Forest", "Tottenham"], ["2026-09-05T16:30Z", "Hull City", "Aston Villa"], ["2026-09-06T13:00Z", "Everton", "Manchester United"], ["2026-09-06T15:30Z", "Arsenal", "Chelsea"]],
      4: [["2026-09-12T14:00Z", "Bournemouth", "Brentford"], ["2026-09-12T14:00Z", "Aston Villa", "Nottingham Forest"], ["2026-09-12T14:00Z", "Chelsea", "Hull City"], ["2026-09-12T14:00Z", "Crystal Palace", "Ipswich Town"], ["2026-09-12T14:00Z", "Liverpool", "Fulham"], ["2026-09-12T16:30Z", "Tottenham", "Everton"], ["2026-09-12T19:00Z", "Sunderland", "Arsenal"], ["2026-09-13T13:00Z", "Coventry City", "Brighton"], ["2026-09-13T15:30Z", "Manchester United", "Manchester City"], ["2026-09-14T19:00Z", "Leeds United", "Newcastle United"]],
      5: [["2026-09-18T19:00Z", "Brentford", "Chelsea"], ["2026-09-19T11:30Z", "Tottenham", "Aston Villa"], ["2026-09-19T14:00Z", "Brighton", "Arsenal"], ["2026-09-19T14:00Z", "Everton", "Ipswich Town"], ["2026-09-19T14:00Z", "Newcastle United", "Hull City"], ["2026-09-19T16:30Z", "Nottingham Forest", "Coventry City"], ["2026-09-20T13:00Z", "Bournemouth", "Liverpool"], ["2026-09-20T13:00Z", "Leeds United", "Crystal Palace"], ["2026-09-20T13:00Z", "Manchester City", "Sunderland"], ["2026-09-20T15:30Z", "Fulham", "Manchester United"]],
      6: [["2026-10-10T11:30Z", "Arsenal", "Leeds United"], ["2026-10-10T14:00Z", "Aston Villa", "Brentford"], ["2026-10-10T14:00Z", "Chelsea", "Bournemouth"], ["2026-10-10T14:00Z", "Ipswich Town", "Fulham"], ["2026-10-10T14:00Z", "Sunderland", "Brighton"], ["2026-10-10T16:30Z", "Manchester United", "Tottenham"], ["2026-10-11T13:00Z", "Crystal Palace", "Nottingham Forest"], ["2026-10-11T13:00Z", "Hull City", "Everton"], ["2026-10-11T15:30Z", "Liverpool", "Manchester City"], ["2026-10-12T19:00Z", "Coventry City", "Newcastle United"]],
      7: [["2026-10-17T11:30Z", "Everton", "Chelsea"], ["2026-10-17T14:00Z", "Brentford", "Liverpool"], ["2026-10-17T14:00Z", "Fulham", "Hull City"], ["2026-10-17T14:00Z", "Manchester City", "Ipswich Town"], ["2026-10-17T16:30Z", "Newcastle United", "Aston Villa"], ["2026-10-18T13:00Z", "Bournemouth", "Sunderland"], ["2026-10-18T13:00Z", "Brighton", "Crystal Palace"], ["2026-10-18T13:00Z", "Leeds United", "Manchester United"], ["2026-10-18T15:30Z", "Nottingham Forest", "Arsenal"], ["2026-10-19T19:00Z", "Tottenham", "Coventry City"]],
      8: [["2026-10-23T19:00Z", "Ipswich Town", "Nottingham Forest"], ["2026-10-24T11:30Z", "Aston Villa", "Manchester City"], ["2026-10-24T14:00Z", "Arsenal", "Everton"], ["2026-10-24T14:00Z", "Coventry City", "Fulham"], ["2026-10-24T16:30Z", "Chelsea", "Tottenham"], ["2026-10-25T14:00Z", "Crystal Palace", "Newcastle United"], ["2026-10-25T14:00Z", "Hull City", "Brentford"], ["2026-10-25T14:00Z", "Liverpool", "Brighton"], ["2026-10-25T14:00Z", "Manchester United", "Bournemouth"], ["2026-10-25T16:30Z", "Sunderland", "Leeds United"]],
      9: [["2026-10-31T12:30Z", "Chelsea", "Manchester United"], ["2026-10-31T15:00Z", "Bournemouth", "Leeds United"], ["2026-10-31T15:00Z", "Brentford", "Nottingham Forest"], ["2026-10-31T15:00Z", "Coventry City", "Sunderland"], ["2026-10-31T15:00Z", "Hull City", "Ipswich Town"], ["2026-10-31T15:00Z", "Manchester City", "Brighton"], ["2026-10-31T17:30Z", "Tottenham", "Crystal Palace"], ["2026-10-31T20:00Z", "Aston Villa", "Fulham"], ["2026-11-01T16:30Z", "Liverpool", "Arsenal"], ["2026-11-02T20:00Z", "Newcastle United", "Everton"]],
      10: [["2026-11-06T20:00Z", "Everton", "Coventry City"], ["2026-11-07T12:30Z", "Leeds United", "Tottenham"], ["2026-11-07T15:00Z", "Arsenal", "Hull City"], ["2026-11-07T15:00Z", "Fulham", "Newcastle United"], ["2026-11-07T17:30Z", "Nottingham Forest", "Manchester City"], ["2026-11-08T14:00Z", "Brighton", "Brentford"], ["2026-11-08T14:00Z", "Crystal Palace", "Liverpool"], ["2026-11-08T14:00Z", "Ipswich Town", "Bournemouth"], ["2026-11-08T14:00Z", "Sunderland", "Chelsea"], ["2026-11-08T16:30Z", "Manchester United", "Aston Villa"]],
      11: [["2026-11-21T12:30Z", "Manchester City", "Fulham"], ["2026-11-21T15:00Z", "Bournemouth", "Nottingham Forest"], ["2026-11-21T15:00Z", "Aston Villa", "Sunderland"], ["2026-11-21T15:00Z", "Chelsea", "Leeds United"], ["2026-11-21T15:00Z", "Coventry City", "Crystal Palace"], ["2026-11-21T15:00Z", "Tottenham", "Ipswich Town"], ["2026-11-21T17:30Z", "Newcastle United", "Arsenal"], ["2026-11-22T14:00Z", "Hull City", "Brighton"], ["2026-11-22T16:30Z", "Liverpool", "Manchester United"], ["2026-11-23T20:00Z", "Brentford", "Everton"]],
      12: [["2026-11-27T20:00Z", "Nottingham Forest", "Chelsea"], ["2026-11-28T15:00Z", "Leeds United", "Coventry City"], ["2026-11-28T15:00Z", "Manchester United", "Brentford"], ["2026-11-28T17:30Z", "Ipswich Town", "Aston Villa"], ["2026-11-29T12:00Z", "Everton", "Liverpool"], ["2026-11-29T14:05Z", "Brighton", "Newcastle United"], ["2026-11-29T14:05Z", "Crystal Palace", "Hull City"], ["2026-11-29T14:05Z", "Fulham", "Bournemouth"], ["2026-11-29T14:05Z", "Sunderland", "Tottenham"], ["2026-11-29T16:30Z", "Arsenal", "Manchester City"]],
      13: [["2026-12-02T20:00Z", "Bournemouth", "Brighton"], ["2026-12-02T20:00Z", "Aston Villa", "Everton"], ["2026-12-02T20:00Z", "Brentford", "Arsenal"], ["2026-12-02T20:00Z", "Chelsea", "Crystal Palace"], ["2026-12-02T20:00Z", "Coventry City", "Ipswich Town"], ["2026-12-02T20:00Z", "Hull City", "Nottingham Forest"], ["2026-12-02T20:00Z", "Liverpool", "Sunderland"], ["2026-12-02T20:00Z", "Manchester City", "Leeds United"], ["2026-12-02T20:00Z", "Newcastle United", "Manchester United"], ["2026-12-02T20:00Z", "Tottenham", "Fulham"]],
      14: [["2026-12-05T15:00Z", "Bournemouth", "Hull City"], ["2026-12-05T15:00Z", "Aston Villa", "Crystal Palace"], ["2026-12-05T15:00Z", "Brentford", "Manchester City"], ["2026-12-05T15:00Z", "Chelsea", "Liverpool"], ["2026-12-05T15:00Z", "Everton", "Fulham"], ["2026-12-05T15:00Z", "Leeds United", "Ipswich Town"], ["2026-12-05T15:00Z", "Manchester United", "Coventry City"], ["2026-12-05T15:00Z", "Newcastle United", "Sunderland"], ["2026-12-05T15:00Z", "Nottingham Forest", "Brighton"], ["2026-12-05T15:00Z", "Tottenham", "Arsenal"]],
      15: [["2026-12-12T15:00Z", "Arsenal", "Bournemouth"], ["2026-12-12T15:00Z", "Brighton", "Everton"], ["2026-12-12T15:00Z", "Coventry City", "Aston Villa"], ["2026-12-12T15:00Z", "Crystal Palace", "Manchester United"], ["2026-12-12T15:00Z", "Fulham", "Brentford"], ["2026-12-12T15:00Z", "Hull City", "Tottenham"], ["2026-12-12T15:00Z", "Ipswich Town", "Newcastle United"], ["2026-12-12T15:00Z", "Liverpool", "Leeds United"], ["2026-12-12T15:00Z", "Manchester City", "Chelsea"], ["2026-12-12T15:00Z", "Sunderland", "Nottingham Forest"]],
      16: [["2026-12-19T15:00Z", "Bournemouth", "Coventry City"], ["2026-12-19T15:00Z", "Arsenal", "Manchester United"], ["2026-12-19T15:00Z", "Brentford", "Newcastle United"], ["2026-12-19T15:00Z", "Brighton", "Ipswich Town"], ["2026-12-19T15:00Z", "Chelsea", "Aston Villa"], ["2026-12-19T15:00Z", "Leeds United", "Fulham"], ["2026-12-19T15:00Z", "Liverpool", "Tottenham"], ["2026-12-19T15:00Z", "Manchester City", "Hull City"], ["2026-12-19T15:00Z", "Nottingham Forest", "Everton"], ["2026-12-19T15:00Z", "Sunderland", "Crystal Palace"]],
      17: [["2026-12-26T12:30Z", "Aston Villa", "Leeds United"], ["2026-12-26T15:00Z", "Everton", "Sunderland"], ["2026-12-26T15:00Z", "Fulham", "Brighton"], ["2026-12-26T15:00Z", "Ipswich Town", "Brentford"], ["2026-12-26T15:00Z", "Tottenham", "Bournemouth"], ["2026-12-26T17:30Z", "Hull City", "Liverpool"], ["2026-12-26T20:00Z", "Newcastle United", "Manchester City"], ["2026-12-27T14:00Z", "Coventry City", "Chelsea"], ["2026-12-27T16:30Z", "Manchester United", "Nottingham Forest"], ["2026-12-27T19:00Z", "Crystal Palace", "Arsenal"]],
      18: [["2026-12-29T19:30Z", "Hull City", "Leeds United"], ["2026-12-29T19:30Z", "Tottenham", "Brighton"], ["2026-12-29T20:15Z", "Everton", "Manchester City"], ["2026-12-30T19:30Z", "Coventry City", "Brentford"], ["2026-12-30T19:30Z", "Crystal Palace", "Bournemouth"], ["2026-12-30T19:30Z", "Fulham", "Arsenal"], ["2026-12-30T19:30Z", "Manchester United", "Sunderland"], ["2026-12-30T19:30Z", "Newcastle United", "Nottingham Forest"], ["2026-12-30T20:15Z", "Aston Villa", "Liverpool"], ["2026-12-30T20:15Z", "Ipswich Town", "Chelsea"]],
      19: [["2027-01-01T20:00Z", "Leeds United", "Everton"], ["2027-01-02T12:30Z", "Brighton", "Manchester United"], ["2027-01-02T15:00Z", "Arsenal", "Ipswich Town"], ["2027-01-02T15:00Z", "Brentford", "Crystal Palace"], ["2027-01-02T15:00Z", "Liverpool", "Coventry City"], ["2027-01-02T15:00Z", "Nottingham Forest", "Fulham"], ["2027-01-02T15:00Z", "Sunderland", "Hull City"], ["2027-01-02T17:30Z", "Bournemouth", "Aston Villa"], ["2027-01-03T14:00Z", "Chelsea", "Newcastle United"], ["2027-01-03T16:30Z", "Manchester City", "Tottenham"]],
      20: [["2027-01-05T19:30Z", "Arsenal", "Brentford"], ["2027-01-05T19:30Z", "Brighton", "Bournemouth"], ["2027-01-05T19:30Z", "Everton", "Aston Villa"], ["2027-01-05T19:30Z", "Nottingham Forest", "Hull City"], ["2027-01-05T20:15Z", "Sunderland", "Liverpool"], ["2027-01-06T19:30Z", "Crystal Palace", "Chelsea"], ["2027-01-06T19:30Z", "Fulham", "Tottenham"], ["2027-01-06T19:30Z", "Ipswich Town", "Coventry City"], ["2027-01-06T20:15Z", "Leeds United", "Manchester City"], ["2027-01-07T20:00Z", "Manchester United", "Newcastle United"]],
      21: [["2027-01-16T15:00Z", "Bournemouth", "Ipswich Town"], ["2027-01-16T15:00Z", "Aston Villa", "Manchester United"], ["2027-01-16T15:00Z", "Brentford", "Brighton"], ["2027-01-16T15:00Z", "Chelsea", "Sunderland"], ["2027-01-16T15:00Z", "Coventry City", "Everton"], ["2027-01-16T15:00Z", "Hull City", "Arsenal"], ["2027-01-16T15:00Z", "Liverpool", "Crystal Palace"], ["2027-01-16T15:00Z", "Manchester City", "Nottingham Forest"], ["2027-01-16T15:00Z", "Newcastle United", "Fulham"], ["2027-01-16T15:00Z", "Tottenham", "Leeds United"]],
      22: [["2027-01-23T15:00Z", "Arsenal", "Newcastle United"], ["2027-01-23T15:00Z", "Brighton", "Manchester City"], ["2027-01-23T15:00Z", "Crystal Palace", "Tottenham"], ["2027-01-23T15:00Z", "Everton", "Brentford"], ["2027-01-23T15:00Z", "Fulham", "Aston Villa"], ["2027-01-23T15:00Z", "Ipswich Town", "Hull City"], ["2027-01-23T15:00Z", "Leeds United", "Chelsea"], ["2027-01-23T15:00Z", "Manchester United", "Liverpool"], ["2027-01-23T15:00Z", "Nottingham Forest", "Bournemouth"], ["2027-01-23T15:00Z", "Sunderland", "Coventry City"]],
      23: [["2027-01-30T15:00Z", "Bournemouth", "Fulham"], ["2027-01-30T15:00Z", "Aston Villa", "Ipswich Town"], ["2027-01-30T15:00Z", "Brentford", "Manchester United"], ["2027-01-30T15:00Z", "Chelsea", "Nottingham Forest"], ["2027-01-30T15:00Z", "Coventry City", "Leeds United"], ["2027-01-30T15:00Z", "Hull City", "Crystal Palace"], ["2027-01-30T15:00Z", "Liverpool", "Everton"], ["2027-01-30T15:00Z", "Manchester City", "Arsenal"], ["2027-01-30T15:00Z", "Newcastle United", "Brighton"], ["2027-01-30T15:00Z", "Tottenham", "Sunderland"]],
      24: [["2027-02-06T15:00Z", "Arsenal", "Liverpool"], ["2027-02-06T15:00Z", "Brighton", "Hull City"], ["2027-02-06T15:00Z", "Crystal Palace", "Coventry City"], ["2027-02-06T15:00Z", "Everton", "Newcastle United"], ["2027-02-06T15:00Z", "Fulham", "Manchester City"], ["2027-02-06T15:00Z", "Ipswich Town", "Tottenham"], ["2027-02-06T15:00Z", "Leeds United", "Bournemouth"], ["2027-02-06T15:00Z", "Manchester United", "Chelsea"], ["2027-02-06T15:00Z", "Nottingham Forest", "Brentford"], ["2027-02-06T15:00Z", "Sunderland", "Aston Villa"]],
      25: [["2027-02-10T20:00Z", "Aston Villa", "Bournemouth"], ["2027-02-10T20:00Z", "Coventry City", "Liverpool"], ["2027-02-10T20:00Z", "Crystal Palace", "Brentford"], ["2027-02-10T20:00Z", "Everton", "Leeds United"], ["2027-02-10T20:00Z", "Fulham", "Nottingham Forest"], ["2027-02-10T20:00Z", "Hull City", "Sunderland"], ["2027-02-10T20:00Z", "Ipswich Town", "Arsenal"], ["2027-02-10T20:00Z", "Manchester United", "Brighton"], ["2027-02-10T20:00Z", "Newcastle United", "Chelsea"], ["2027-02-10T20:00Z", "Tottenham", "Manchester City"]],
      26: [["2027-02-20T15:00Z", "Bournemouth", "Crystal Palace"], ["2027-02-20T15:00Z", "Arsenal", "Fulham"], ["2027-02-20T15:00Z", "Brentford", "Coventry City"], ["2027-02-20T15:00Z", "Brighton", "Tottenham"], ["2027-02-20T15:00Z", "Chelsea", "Ipswich Town"], ["2027-02-20T15:00Z", "Leeds United", "Aston Villa"], ["2027-02-20T15:00Z", "Liverpool", "Hull City"], ["2027-02-20T15:00Z", "Manchester City", "Newcastle United"], ["2027-02-20T15:00Z", "Nottingham Forest", "Manchester United"], ["2027-02-20T15:00Z", "Sunderland", "Everton"]],
      27: [["2027-02-27T15:00Z", "Aston Villa", "Chelsea"], ["2027-02-27T15:00Z", "Coventry City", "Bournemouth"], ["2027-02-27T15:00Z", "Crystal Palace", "Sunderland"], ["2027-02-27T15:00Z", "Everton", "Nottingham Forest"], ["2027-02-27T15:00Z", "Fulham", "Leeds United"], ["2027-02-27T15:00Z", "Hull City", "Manchester City"], ["2027-02-27T15:00Z", "Ipswich Town", "Brighton"], ["2027-02-27T15:00Z", "Manchester United", "Arsenal"], ["2027-02-27T15:00Z", "Newcastle United", "Brentford"], ["2027-02-27T15:00Z", "Tottenham", "Liverpool"]],
      28: [["2027-03-03T20:00Z", "Bournemouth", "Tottenham"], ["2027-03-03T20:00Z", "Arsenal", "Crystal Palace"], ["2027-03-03T20:00Z", "Brentford", "Ipswich Town"], ["2027-03-03T20:00Z", "Brighton", "Fulham"], ["2027-03-03T20:00Z", "Chelsea", "Coventry City"], ["2027-03-03T20:00Z", "Leeds United", "Hull City"], ["2027-03-03T20:00Z", "Liverpool", "Aston Villa"], ["2027-03-03T20:00Z", "Manchester City", "Everton"], ["2027-03-03T20:00Z", "Nottingham Forest", "Newcastle United"], ["2027-03-03T20:00Z", "Sunderland", "Manchester United"]],
      29: [["2027-03-13T15:00Z", "Bournemouth", "Newcastle United"], ["2027-03-13T15:00Z", "Aston Villa", "Hull City"], ["2027-03-13T15:00Z", "Chelsea", "Arsenal"], ["2027-03-13T15:00Z", "Coventry City", "Manchester City"], ["2027-03-13T15:00Z", "Crystal Palace", "Fulham"], ["2027-03-13T15:00Z", "Leeds United", "Brighton"], ["2027-03-13T15:00Z", "Liverpool", "Ipswich Town"], ["2027-03-13T15:00Z", "Manchester United", "Everton"], ["2027-03-13T15:00Z", "Sunderland", "Brentford"], ["2027-03-13T15:00Z", "Tottenham", "Nottingham Forest"]],
      30: [["2027-03-20T15:00Z", "Arsenal", "Sunderland"], ["2027-03-20T15:00Z", "Brentford", "Bournemouth"], ["2027-03-20T15:00Z", "Brighton", "Coventry City"], ["2027-03-20T15:00Z", "Everton", "Tottenham"], ["2027-03-20T15:00Z", "Fulham", "Liverpool"], ["2027-03-20T15:00Z", "Hull City", "Chelsea"], ["2027-03-20T15:00Z", "Ipswich Town", "Crystal Palace"], ["2027-03-20T15:00Z", "Manchester City", "Manchester United"], ["2027-03-20T15:00Z", "Newcastle United", "Leeds United"], ["2027-03-20T15:00Z", "Nottingham Forest", "Aston Villa"]],
      31: [["2027-04-10T14:00Z", "Bournemouth", "Manchester City"], ["2027-04-10T14:00Z", "Aston Villa", "Brighton"], ["2027-04-10T14:00Z", "Chelsea", "Fulham"], ["2027-04-10T14:00Z", "Coventry City", "Arsenal"], ["2027-04-10T14:00Z", "Crystal Palace", "Everton"], ["2027-04-10T14:00Z", "Leeds United", "Nottingham Forest"], ["2027-04-10T14:00Z", "Liverpool", "Newcastle United"], ["2027-04-10T14:00Z", "Manchester United", "Hull City"], ["2027-04-10T14:00Z", "Sunderland", "Ipswich Town"], ["2027-04-10T14:00Z", "Tottenham", "Brentford"]],
      32: [["2027-04-17T14:00Z", "Arsenal", "Aston Villa"], ["2027-04-17T14:00Z", "Brentford", "Leeds United"], ["2027-04-17T14:00Z", "Brighton", "Chelsea"], ["2027-04-17T14:00Z", "Everton", "Bournemouth"], ["2027-04-17T14:00Z", "Fulham", "Sunderland"], ["2027-04-17T14:00Z", "Hull City", "Coventry City"], ["2027-04-17T14:00Z", "Ipswich Town", "Manchester United"], ["2027-04-17T14:00Z", "Manchester City", "Crystal Palace"], ["2027-04-17T14:00Z", "Newcastle United", "Tottenham"], ["2027-04-17T14:00Z", "Nottingham Forest", "Liverpool"]],
      33: [["2027-04-24T14:00Z", "Bournemouth", "Arsenal"], ["2027-04-24T14:00Z", "Aston Villa", "Coventry City"], ["2027-04-24T14:00Z", "Brentford", "Fulham"], ["2027-04-24T14:00Z", "Chelsea", "Manchester City"], ["2027-04-24T14:00Z", "Everton", "Brighton"], ["2027-04-24T14:00Z", "Leeds United", "Liverpool"], ["2027-04-24T14:00Z", "Manchester United", "Crystal Palace"], ["2027-04-24T14:00Z", "Newcastle United", "Ipswich Town"], ["2027-04-24T14:00Z", "Nottingham Forest", "Sunderland"], ["2027-04-24T14:00Z", "Tottenham", "Hull City"]],
      34: [["2027-05-01T14:00Z", "Arsenal", "Tottenham"], ["2027-05-01T14:00Z", "Brighton", "Nottingham Forest"], ["2027-05-01T14:00Z", "Coventry City", "Manchester United"], ["2027-05-01T14:00Z", "Crystal Palace", "Aston Villa"], ["2027-05-01T14:00Z", "Fulham", "Everton"], ["2027-05-01T14:00Z", "Hull City", "Bournemouth"], ["2027-05-01T14:00Z", "Ipswich Town", "Leeds United"], ["2027-05-01T14:00Z", "Liverpool", "Chelsea"], ["2027-05-01T14:00Z", "Manchester City", "Brentford"], ["2027-05-01T14:00Z", "Sunderland", "Newcastle United"]],
      35: [["2027-05-08T14:00Z", "Bournemouth", "Manchester United"], ["2027-05-08T14:00Z", "Brentford", "Aston Villa"], ["2027-05-08T14:00Z", "Brighton", "Sunderland"], ["2027-05-08T14:00Z", "Everton", "Hull City"], ["2027-05-08T14:00Z", "Fulham", "Ipswich Town"], ["2027-05-08T14:00Z", "Leeds United", "Arsenal"], ["2027-05-08T14:00Z", "Manchester City", "Liverpool"], ["2027-05-08T14:00Z", "Newcastle United", "Coventry City"], ["2027-05-08T14:00Z", "Nottingham Forest", "Crystal Palace"], ["2027-05-08T14:00Z", "Tottenham", "Chelsea"]],
      36: [["2027-05-15T14:00Z", "Arsenal", "Nottingham Forest"], ["2027-05-15T14:00Z", "Aston Villa", "Newcastle United"], ["2027-05-15T14:00Z", "Chelsea", "Everton"], ["2027-05-15T14:00Z", "Coventry City", "Tottenham"], ["2027-05-15T14:00Z", "Crystal Palace", "Brighton"], ["2027-05-15T14:00Z", "Hull City", "Fulham"], ["2027-05-15T14:00Z", "Ipswich Town", "Manchester City"], ["2027-05-15T14:00Z", "Liverpool", "Brentford"], ["2027-05-15T14:00Z", "Manchester United", "Leeds United"], ["2027-05-15T14:00Z", "Sunderland", "Bournemouth"]],
      37: [["2027-05-23T14:00Z", "Bournemouth", "Chelsea"], ["2027-05-23T14:00Z", "Brentford", "Hull City"], ["2027-05-23T14:00Z", "Brighton", "Liverpool"], ["2027-05-23T14:00Z", "Everton", "Arsenal"], ["2027-05-23T14:00Z", "Fulham", "Coventry City"], ["2027-05-23T14:00Z", "Leeds United", "Sunderland"], ["2027-05-23T14:00Z", "Manchester City", "Aston Villa"], ["2027-05-23T14:00Z", "Newcastle United", "Crystal Palace"], ["2027-05-23T14:00Z", "Nottingham Forest", "Ipswich Town"], ["2027-05-23T14:00Z", "Tottenham", "Manchester United"]],
      38: [["2027-05-30T15:00Z", "Arsenal", "Brighton"], ["2027-05-30T15:00Z", "Aston Villa", "Tottenham"], ["2027-05-30T15:00Z", "Chelsea", "Brentford"], ["2027-05-30T15:00Z", "Coventry City", "Nottingham Forest"], ["2027-05-30T15:00Z", "Crystal Palace", "Leeds United"], ["2027-05-30T15:00Z", "Hull City", "Newcastle United"], ["2027-05-30T15:00Z", "Ipswich Town", "Everton"], ["2027-05-30T15:00Z", "Liverpool", "Bournemouth"], ["2027-05-30T15:00Z", "Manchester United", "Fulham"], ["2027-05-30T15:00Z", "Sunderland", "Manchester City"]]
    },
    // Actual Premier League results by matchweek: [home, homeGoals, awayGoals, away].
    // The league table and its race chart are computed from these; add each completed matchweek.
    results: {
      1: [
        ["Arsenal", 3, 0, "Coventry City"],
        ["Brentford", 3, 0, "Tottenham"],
        ["Everton", 2, 0, "Crystal Palace"],
        ["Ipswich Town", 2, 1, "Sunderland"],
        ["Nottingham Forest", 0, 1, "Leeds United"],
        ["Hull City", 2, 0, "Manchester United"],
        ["Newcastle United", 2, 2, "Liverpool"],
        ["Brighton", 4, 0, "Aston Villa"],
        ["Manchester City", 2, 1, "Bournemouth"],
        ["Fulham", 2, 3, "Chelsea"]
      ],
      2: [
        ["Crystal Palace", 1, 4, "Manchester City"],
        ["Tottenham", 0, 2, "Newcastle United"],
        ["Bournemouth", 1, 1, "Everton"],
        ["Coventry City", 0, 1, "Hull City"],
        ["Liverpool", 2, 2, "Nottingham Forest"],
        ["Manchester United", 5, 2, "Ipswich Town"],
        ["Chelsea", 4, 3, "Brighton"],
        ["Leeds United", 1, 1, "Brentford"],
        ["Sunderland", 1, 0, "Fulham"],
        ["Aston Villa", 0, 1, "Arsenal"]
      ],
      3: [
        ["Ipswich Town", 0, 2, "Liverpool"],
        ["Hull City", 0, 0, "Aston Villa"],
        ["Brentford", 1, 1, "Sunderland"],
        ["Brighton", 1, 1, "Leeds United"],
        ["Fulham", 2, 3, "Crystal Palace"],
        ["Manchester City", 1, 0, "Coventry City"],
        ["Nottingham Forest", 0, 0, "Tottenham"],
        ["Newcastle United", 2, 2, "Bournemouth"],
        ["Arsenal", 2, 1, "Chelsea"],
        ["Everton", 2, 2, "Manchester United"]
      ],
      4: [
        ["Sunderland", 0, 2, "Arsenal"],
        ["Tottenham", 0, 0, "Everton"],
        ["Bournemouth", 2, 2, "Brentford"],
        ["Aston Villa", 1, 2, "Nottingham Forest"],
        ["Chelsea", 2, 2, "Hull City"],
        ["Crystal Palace", 2, 3, "Ipswich Town"],
        ["Liverpool", 0, 0, "Fulham"],
        ["Manchester United", 0, 1, "Manchester City"],
        ["Coventry City", 0, 5, "Brighton"],
        ["Leeds United", 4, 1, "Newcastle United"]
      ],
      5: [
        ["Brentford", 3, 0, "Chelsea"],
        ["Nottingham Forest", 0, 1, "Coventry City"],
        ["Brighton", 3, 0, "Arsenal"],
        ["Everton", 1, 0, "Ipswich Town"],
        ["Newcastle United", 2, 1, "Hull City"],
        ["Tottenham", 2, 3, "Aston Villa"],
        ["Fulham", 1, 1, "Manchester United"],
        ["Bournemouth", 0, 1, "Liverpool"],
        ["Leeds United", 0, 0, "Crystal Palace"],
        ["Manchester City", 5, 3, "Sunderland"]
      ],
      6: [
        ["Arsenal", 2, 1, "Leeds United"],
        ["Aston Villa", 2, 2, "Brentford"],
        ["Chelsea", 5, 1, "Bournemouth"],
        ["Ipswich Town", 2, 1, "Fulham"],
        ["Sunderland", 0, 2, "Brighton"],
        ["Manchester United", 1, 1, "Tottenham"],
        ["Crystal Palace", 3, 1, "Nottingham Forest"],
        ["Hull City", 2, 2, "Everton"],
        ["Liverpool", 0, 3, "Manchester City"],
        ["Coventry City", 4, 1, "Newcastle United"]
      ]
    },
    players: [
      { name: "TC", picks: [
        { week: 1, team: "Manchester United", opponent: "Hull City",      venue: "A", score: "0–2", result: "L" },
        { week: 2, team: "Liverpool",         opponent: "Nottingham Forest", venue: "H", score: "2–2", result: "D" },
        { week: 3, team: "Manchester City",   opponent: "Coventry City",  venue: "H", score: "1–0", result: "W" },
        { week: 4, team: "Crystal Palace",    opponent: "Ipswich Town",   venue: "H", score: "2–3", result: "L" },
        { week: 5, team: "Nottingham Forest", opponent: "Coventry City",  venue: "H", score: "0–1", result: "L" },
        { week: 6, team: "Brighton",          opponent: "Sunderland",     venue: "A", score: "2–0", result: "W" }
      ]},
      { name: "BD", picks: [
        { week: 1, team: "Tottenham",         opponent: "Brentford",      venue: "A", score: "0–3", result: "L" },
        { week: 2, team: "Hull City",         opponent: "Coventry City",  venue: "A", score: "1–0", result: "W" },
        { week: 3, team: "Nottingham Forest", opponent: "Tottenham",      venue: "H", score: "0–0", result: "D" },
        { week: 4, team: "Aston Villa",       opponent: "Nottingham Forest", venue: "H", score: "1–2", result: "L" },
        { week: 5, team: "Hull City",         opponent: "Newcastle United", venue: "A", score: "1–2", result: "L" },
        { week: 6, team: "Crystal Palace",    opponent: "Nottingham Forest", venue: "H", score: "3–1", result: "W" }
      ]}
    ]
  }
};

// ---------- Super Bowl Squares ----------
// grid[row][col]: rows follow side.digits (top to bottom), columns follow top.digits (left to right).
// scores are cumulative at the end of each quarter. Winner of a quarter = square at (side last digit, top last digit).
const SUPER_BOWL_SQUARES = {
  "2025": {
    name: "Super Bowl LIX",
    logo: "https://content.sportslogos.net/logos/7/593/full/_super_bowl_logo_primary_2024_sportslogosnet-8375.png",
    date: "2025-02-09",
    noContest: true,
    top:  { team: "Chiefs", full: "Kansas City Chiefs" },
    side: { team: "Eagles", full: "Philadelphia Eagles" },
    finalScore: { top: 22, side: 40 }
  },
  "2026": {
    name: "Super Bowl LX",
    logo: "https://content.sportslogos.net/logos/7/593/thumbs/_super_bowl_logo_primary_2025sportslogosnet5684.gif",
    date: "2026-02-08",
    top:  { team: "Patriots", full: "New England Patriots", digits: [4, 6, 9, 0, 1, 8, 5, 7, 3, 2] },
    side: { team: "Seahawks", full: "Seattle Seahawks",     digits: [4, 6, 9, 8, 0, 5, 1, 3, 7, 2] },
    payouts: [100, 100, 100, 200],
    scores: [ { top: 0, side: 3 }, { top: 0, side: 9 }, { top: 0, side: 12 }, { top: 13, side: 29 } ],
    grid: [
        ["Ronnie", "Aaron", "Aaron", "Walid", "Bry", "Twest", "Seth", "Sizemore", "Bry", "Aaron"],
        ["Ronnie", "Sizemore", "Walid", "Z", "Z", "Cummings", "Ronnie", "Prino", "Walid", "Ronnie"],
        ["Prino", "Z", "Walid", "Z", "Aaron", "Z", "Walid", "Prino", "Seth", "Prino"],
        ["Cummings", "Aaron", "Pat", "Pat", "Bry", "Ronnie", "Cummings", "Pat", "Sizemore", "MK"],
        ["Ronnie", "Sizemore", "Seth", "Walid", "Twest", "Seth", "Sizemore", "Prino", "Twest", "Sizemore"],
        ["Walid", "Ronnie", "Pat", "MK", "Aaron", "Prino", "Sizemore", "Twest", "Twest", "Prino"],
        ["Cummings", "MK", "Cummings", "Z", "Aaron", "Aaron", "Cummings", "Bry", "Ronnie", "Ronnie"],
        ["Walid", "Aaron", "Twest", "Cummings", "Twest", "Twest", "Z", "Z", "Ronnie", "Walid"],
        ["Walid", "Aaron", "Prino", "Cummings", "MK", "Prino", "Z", "Sizemore", "Twest", "Bry"],
        ["Cummings", "Pat", "Seth", "MK", "Prino", "Twest", "Sizemore", "Z", "Sizemore", "Cummings"]
    ]
  },
  "2024": {
    name: "Super Bowl LVIII",
    logo: "https://content.sportslogos.net/logos/7/593/thumbs/59322162023.gif",
    date: "2024-02-11",
    top:  { team: "Chiefs", full: "Kansas City Chiefs", digits: [1,  4,  8,  6,  0,  3,  9,  5,  2,  7] },
    side: { team: "49ers", full: "San Francisco 49ers", digits: [6,  0,  3,  8,  9,  1,  2,  4,  7,  5] },
    // That year the last square was paid on the score at the end of the 4th quarter (19-19), not the OT final.
    scores: [ { top: 0, side: 0 }, { top: 3, side: 10 }, { top: 13, side: 10 }, { top: 19, side: 19 } ],
    finalScore: { top: 25, side: 22, ot: true },
    note: "This game went to overtime. That year the last square was won by the score at the end of the 4th quarter (19–19), not the overtime final.",
    grid: [
        ["Clay", "Zach", "Zach", "Twest", "Z", "Aaron", "Aaron", "Garton", "Clay", "Prino"],
        ["Twest", "Sonny", "Z", "Aaron", "Z", "Ronnie", "Clay", "Ronnie", "Sonny", "Cummings"],
        ["Z", "Clay", "Ronnie", "Twest", "Prino", "Cummings", "Twest", "Clay", "Zach", "Geiger"],
        ["Bry", "Cummings", "Cummings", "Aaron", "Prino", "Aaron", "Prino", "Z", "Zach", "Ronnie"],
        ["Sonny", "Cummings", "Ronnie", "Z", "Sonny", "Z", "Garton", "Prino", "Prino", "Aaron"],
        ["Cummings", "Bry", "Bry", "Cummings", "Ronnie", "Clay", "Z", "Cummings", "Twest", "Ronnie"],
        ["Cummings", "Z", "Garton", "Prino", "Twest", "Cummings", "Clay", "Geiger", "Z", "Geiger"],
        ["Ronnie", "Zach", "Clay", "Bry", "Aaron", "Aaron", "Aaron", "Garton", "Zach", "Zach"],
        ["Garton", "Bry", "Ronnie", "Prino", "Twest", "Geiger", "Aaron", "Ronnie", "Twest", "Zach"],
        ["Zach", "Twest", "Prino", "Zach", "Clay", "Clay", "Prino", "Twest", "Sonny", "Geiger"]
    ]
  },
  "2023": {
    name: "Super Bowl LVII",
    logo: "https://content.sportslogos.net/logos/7/593/thumbs/59322412022.gif",
    date: "2023-02-12",
    top:  { team: "Chiefs", full: "Kansas City Chiefs", digits: [1,  8,  9,  3,  6,  5,  2,  7,  4,  0] },
    side: { team: "Eagles", full: "Philadelphia Eagles", digits: [8,  1,  6,  4,  0,  5,  3,  2,  7,  9] },
    scores: [ { top: 7, side: 7 }, { top: 14, side: 24 }, { top: 21, side: 27 }, { top: 38, side: 35 } ],
    grid: [
        ["Clay", "Beirne", "Seth", "Geiger", "Sonny", "JC", "Geiger", "JC", "Clay", "Twest"],
        ["Martha", "JC", "Martha", "Twest", "Geiger", "Pat", "Geiger", "Martha", "Twest", "MK"],
        ["MK", "Twest", "Geiger", "Twest", "Aaron", "Sonny", "Cummings", "Cummings", "Clay", "Aaron"],
        ["Sonny", "Prino", "Cummings", "Prino", "Bry", "Zach", "Aaron", "Big Vic", "Aaron", "Bry"],
        ["Geiger", "Martha", "Geiger", "Twest", "MK", "Twest", "Zach", "Big Vic", "Martha", "Geiger"],
        ["Beirne", "JC", "Geiger", "Aaron", "Clay", "Beirne", "Martha", "MK", "Cummings", "Z"],
        ["Pat", "Zach", "Pat", "Twest", "Martha", "Aaron", "Aaron", "Cummings", "Zach", "Bry"],
        ["Aaron", "Prino", "Beirne", "Bry", "Seth", "Geiger", "Clay", "Big Vic", "Martha", "Big Vic"],
        ["Aaron", "Z", "Z", "Martha", "Beirne", "Martha", "Sonny", "Aaron", "Pat", "Cummings"],
        ["Cummings", "Twest", "Cummings", "Twest", "Z", "Pat", "Cummings", "Prino", "JC", "Cummings"]
    ]
  },
  "2021": {
    name: "Super Bowl LV",
    logo: "https://content.sportslogos.net/logos/7/593/thumbs/59397962020.gif",
    date: "2021-02-07",
    top:  { team: "Chiefs", full: "Kansas City Chiefs", digits: [1,  9,  2,  7,  4,  8,  3,  0,  6,  5] },
    side: { team: "Buccaneers", full: "Tampa Bay Buccaneers", digits: [0,  4,  9,  3,  8,  2,  5,  6,  7,  1] },
    scores: [ { top: 3, side: 7 }, { top: 6, side: 21 }, { top: 9, side: 31 }, { top: 9, side: 31 } ],
    grid: [
        ["Clay", "Ronnie", "Geiger", "Austin", "Bry", "Pat", "Martha", "Seth", "Prino", "Geiger"],
        ["Big Vic", "Martha", "Walid", "Zach", "Ronnie", "Prino", "Clay", "Larry", "Aaron", "Martha"],
        ["Zach", "Pat", "Martha", "Clay", "Ronnie", "Zach", "Cummings", "Walid", "Geiger", "Austin"],
        ["Austin", "Seth", "Walid", "Walid", "Clay", "Ronnie", "Twest", "Z", "Big Vic", "Cummings"],
        ["Clay", "Cummings", "Z", "Bry", "Z", "Martha", "Ronnie", "Twest", "Seth", "Geiger"],
        ["Z", "Geiger", "Ronnie", "Z", "Martha", "Kevin", "Bry", "Austin", "Twest", "Larry"],
        ["Martha", "Cummings", "Bry", "Cummings", "Twest", "Pat", "Cummings", "Beirne", "Geiger", "Zach"],
        ["Martha", "Beirne", "Aaron", "Geiger", "Kevin", "Aaron", "Walid", "Big Vic", "Aaron", "Seth"],
        ["Bry", "Geiger", "Big Vic", "Prino", "Twest", "Prino", "Zach", "Beirne", "Twest", "Seth"],
        ["Beirne", "Aaron", "Walid", "Big Vic", "Twest", "Geiger", "Pat", "Walid", "Prino", "Pat"]
    ]
  },
  "2022": {
    name: "Super Bowl LVI",
    logo: "https://content.sportslogos.net/logos/7/593/thumbs/59361682021.gif",
    date: "2022-02-13",
    top:  { team: "Rams", full: "Los Angeles Rams", digits: [4,  6,  0,  7,  5,  2,  3,  8,  9,  1] },
    side: { team: "Bengals", full: "Cincinnati Bengals", digits: [0,  8,  1,  5,  9,  2,  7,  6,  4,  3] },
    scores: [ { top: 7, side: 3 }, { top: 13, side: 10 }, { top: 16, side: 20 }, { top: 23, side: 20 } ],
    grid: [
        ["Sonny", "Walid", "Aaron", "Aaron", "Clay", "Pat", "Z", "Walid", "Austin", "Ronnie"],
        ["Bry", "Aaron", "Clay", "Martha", "Z", "Austin", "Pat", "Beirne", "Big Vic", "Clay"],
        ["Ronnie", "Seth", "Sonny", "Big Vic", "Walid", "Twest", "Cummings", "Prino", "Cummings", "Sonny"],
        ["Twest", "Sonny", "Prino", "Prino", "Z", "Bry", "Clay", "Martha", "Cummings", "Twest"],
        ["Clay", "Aaron", "Luke", "Twest", "Aaron", "Zach", "Bry", "Pat", "Big Vic", "Ronnie"],
        ["Seth", "Luke", "Walid", "Beirne", "Walid", "Martha", "Seth", "Cummings", "Z", "Martha"],
        ["MK", "Seth", "Luke", "Twest", "Ronnie", "Big Vic", "Beirne", "Seth", "Austin", "Bry"],
        ["Zach", "Twest", "Zach", "Martha", "Twest", "Beirne", "Luke", "MK", "Austin", "Prino"],
        ["Bry", "Pat", "Big Vic", "Twest", "Walid", "Twest", "MK", "Aaron", "Sonny", "MK"],
        ["Cummings", "Z", "Cummings", "Walid", "Beirne", "MK", "Zach", "Prino", "Cummings", "Pat"]
    ]
  },
  "2020": {
    name: "Super Bowl LIV",
    logo: "https://content.sportslogos.net/logos/7/593/thumbs/59333522019.gif",
    date: "2020-02-02",
    top:  { team: "Chiefs", full: "Kansas City Chiefs", digits: [9,  3,  6,  1,  7,  4,  0,  8,  2,  5] },
    side: { team: "49ers", full: "San Francisco 49ers", digits: [0,  1,  6,  8,  4,  9,  2,  5,  3,  7] },
    payouts: [50, 100, 150, 200],
    scores: [ { top: 7, side: 3 }, { top: 10, side: 10 }, { top: 10, side: 20 }, { top: 31, side: 20 } ],
    grid: [
        ["Zach", "Dwayne", "Geiger", "Martha", "Geiger", "Ronnie", "Zach", "Big Vic", "Geiger", "Big Vic"],
        ["Ronnie", "Prino", "Twest", "Bry", "Casey", "Geiger", "Dwayne", "Cummings", "Cummings", "Pat"],
        ["Austin", "Dwayne", "Prino", "Clay", "Bry", "Aaron", "Casey", "Austin", "Twest", "Cummings"],
        ["Forrest", "Z", "Prino", "Geiger", "Forrest", "Martha", "Zach", "Z", "Aaron", "Aaron"],
        ["Clay", "Geiger", "Cummings", "Geiger", "Walid", "Dwayne", "Austin", "Martha", "Casey", "Aaron"],
        ["Big Vic", "Casey", "Bry", "Sonny", "Z", "Aaron", "Todd", "Ronnie", "Walid", "Cummings"],
        ["Todd", "Twest", "Walid", "Geiger", "Big Vic", "Big Vic", "Martha", "Martha", "Martha", "Seth"],
        ["Pat", "Bry", "Pat", "Clay", "Walid", "Twest", "Todd", "Martha", "Martha", "Walid"],
        ["Geiger", "Prino", "Todd", "Bry", "Z", "Clay", "Walid", "Twest", "Martha", "Geiger"],
        ["Walid", "Pat", "Walid", "Prino", "Martha", "Clay", "Sonny", "Geiger", "Forrest", "Forrest"]
    ]
  },
  "2019": {
    name: "Super Bowl LIII",
    logo: "https://content.sportslogos.net/logos/7/593/thumbs/59363842017.gif",
    date: "2019-02-03",
    top:  { team: "Patriots", full: "New England Patriots", digits: [1,  3,  8,  5,  0,  9,  6,  7,  2,  4] },
    side: { team: "Rams", full: "Los Angeles Rams", digits: [3,  4,  0,  1,  2,  7,  6,  9,  5,  8] },
    scores: [ { top: 0, side: 0 }, { top: 3, side: 0 }, { top: 3, side: 3 }, { top: 13, side: 3 } ],
    grid: [
        ["Prino", "Sizemore", "Sonny", "Cummings", "Sonny", "Sizemore", "Z", "Sizemore", "Prino", "Sonny"],
        ["Big Vic", "Prino", "Sonny", "Luke", "Z", "Cummings", "Walid", "Clay", "Sizemore", "Big Vic"],
        ["Clay", "Prino", "Cummings", "Big Vic", "Cummings", "Big Vic", "Clay", "Aaron", "Luke", "Aaron"],
        ["Sonny", "Aaron", "Sonny", "Clay", "Luke", "Sizemore", "Walid", "Prino", "Luke", "Clay"],
        ["Clay", "Prino", "Sizemore", "Sonny", "Luke", "Aaron", "Aaron", "Z", "Big Vic", "Clay"],
        ["Sizemore", "Cummings", "Clay", "Z", "Z", "Luke", "Aaron", "Clay", "Prino", "Luke"],
        ["Big Vic", "Aaron", "Clay", "Sizemore", "Big Vic", "Prino", "Z", "Cummings", "Cummings", "Aaron"],
        ["Walid", "Walid", "Sonny", "Z", "Sonny", "Luke", "Big Vic", "Luke", "Sonny", "Sizemore"],
        ["Walid", "Aaron", "Cummings", "Big Vic", "Walid", "Aaron", "Walid", "Big Vic", "Cummings", "Walid"],
        ["Prino", "Cummings", "Luke", "Walid", "Z", "Z", "Walid", "Z", "Sizemore", "Prino"]
    ]
  }
};

// ---------- March Madness pool ----------
// Field: per region, 16 [team, seed] pairs in bracket order (1v16, 8v9, 5v12, 4v13, 6v11, 3v14, 7v10, 2v15).
// Results and each entry use the same shape: per region [R64 winners(8), R32(4), S16(2), E8(1)],
// F4 = [East/South semifinal winner, West/Midwest semifinal winner], Champion. Scores are computed on the page.
const MARCH_MADNESS = {
  "2026": {
    entryFee: 50,
    points: [2, 3, 5, 8, 13, 21],
    // Day each game was played (index into days), same shape as results. First-round pods played their
    // second-round game two days later; Sweet 16/Elite 8: South+West Thu/Sat, East+Midwest Fri/Sun.
    days: ["Mar 19", "Mar 20", "Mar 21", "Mar 22", "Mar 26", "Mar 27", "Mar 28", "Mar 29", "Apr 4", "Apr 6"],
    gameDays: {
      East:    [[0, 0, 1, 1, 0, 0, 1, 1], [2, 3, 2, 3], [5, 5], [7]],
      West:    [[1, 1, 0, 0, 0, 0, 1, 1], [3, 2, 2, 3], [4, 4], [6]],
      South:   [[1, 1, 0, 0, 0, 0, 0, 0], [3, 2, 2, 2], [4, 4], [6]],
      Midwest: [[0, 0, 1, 1, 1, 1, 1, 1], [2, 3, 3, 3], [5, 5], [7]],
      F4: [8, 8], Champion: 9
    },
    payouts: { 300: [200, 100], 400: [300, 100], 500: [300, 150, 50], 600: [350, 200, 50] },
    field: {
      East: [["Duke", 1], ["Siena", 16], ["Ohio St.", 8], ["TCU", 9], ["St. John's", 5], ["Northern Iowa", 12], ["Kansas", 4], ["California Baptist", 13], ["Louisville", 6], ["South Florida", 11], ["Michigan St.", 3], ["North Dakota St.", 14], ["UCLA", 7], ["UCF", 10], ["Connecticut", 2], ["Furman", 15]],
      West: [["Arizona", 1], ["LIU Brooklyn", 16], ["Villanova", 8], ["Utah St.", 9], ["Wisconsin", 5], ["High Point", 12], ["Arkansas", 4], ["Hawaii", 13], ["BYU", 6], ["Texas", 11], ["Gonzaga", 3], ["Kennesaw St.", 14], ["Miami (FL)", 7], ["Missouri", 10], ["Purdue", 2], ["Queens", 15]],
      South: [["Florida", 1], ["Prairie View A&M", 16], ["Clemson", 8], ["Iowa", 9], ["Vanderbilt", 5], ["McNeese", 12], ["Nebraska", 4], ["Troy", 13], ["North Carolina", 6], ["VCU", 11], ["Illinois", 3], ["Pennsylvania", 14], ["St. Mary's", 7], ["Texas A&M", 10], ["Houston", 2], ["Idaho", 15]],
      Midwest: [["Michigan", 1], ["Howard", 16], ["Georgia", 8], ["Saint Louis", 9], ["Texas Tech", 5], ["Akron", 12], ["Alabama", 4], ["Hofstra", 13], ["Tennessee", 6], ["Miami (OH)", 11], ["Virginia", 3], ["Wright St.", 14], ["Kentucky", 7], ["Santa Clara", 10], ["Iowa St.", 2], ["Tennessee St.", 15]]
    },
    results: {
      East: [["Duke", "TCU", "St. John's", "Kansas", "Louisville", "Michigan St.", "UCLA", "Connecticut"], ["Duke", "St. John's", "Michigan St.", "Connecticut"], ["Duke", "Connecticut"], ["Connecticut"]],
      West: [["Arizona", "Utah St.", "High Point", "Arkansas", "Texas", "Gonzaga", "Miami (FL)", "Purdue"], ["Arizona", "Arkansas", "Texas", "Purdue"], ["Arizona", "Purdue"], ["Arizona"]],
      South: [["Florida", "Iowa", "Vanderbilt", "Nebraska", "VCU", "Illinois", "Texas A&M", "Houston"], ["Iowa", "Nebraska", "Illinois", "Houston"], ["Iowa", "Illinois"], ["Illinois"]],
      Midwest: [["Michigan", "Saint Louis", "Texas Tech", "Alabama", "Tennessee", "Virginia", "Kentucky", "Iowa St."], ["Michigan", "Alabama", "Tennessee", "Iowa St."], ["Michigan", "Tennessee"], ["Michigan"]],
      F4: ["Connecticut", "Michigan"], Champion: "Michigan"
    },
    entries: {
      "Cummings": {
        East: [["Duke", "Ohio St.", "St. John's", "Kansas", "Louisville", "Michigan St.", "UCLA", "Connecticut"], ["Duke", "St. John's", "Michigan St.", "Connecticut"], ["Duke", "Connecticut"], ["Duke"]],
        West: [["Arizona", "Utah St.", "Wisconsin", "Arkansas", "Texas", "Gonzaga", "Miami (FL)", "Purdue"], ["Arizona", "Arkansas", "Gonzaga", "Purdue"], ["Arizona", "Purdue"], ["Arizona"]],
        South: [["Florida", "Iowa", "Vanderbilt", "Nebraska", "VCU", "Illinois", "Texas A&M", "Houston"], ["Florida", "Vanderbilt", "Illinois", "Houston"], ["Vanderbilt", "Illinois"], ["Illinois"]],
        Midwest: [["Michigan", "Saint Louis", "Akron", "Alabama", "Tennessee", "Virginia", "Santa Clara", "Iowa St."], ["Michigan", "Alabama", "Virginia", "Iowa St."], ["Michigan", "Virginia"], ["Michigan"]],
        F4: ["Duke", "Arizona"], Champion: "Arizona"
      },
      "Pat Hickman": {
        East: [["Duke", "Ohio St.", "St. John's", "Kansas", "South Florida", "Michigan St.", "UCF", "Connecticut"], ["Duke", "St. John's", "Michigan St.", "Connecticut"], ["St. John's", "Connecticut"], ["St. John's"]],
        West: [["Arizona", "Utah St.", "Wisconsin", "Arkansas", "Texas", "Gonzaga", "Missouri", "Purdue"], ["Arizona", "Wisconsin", "Gonzaga", "Purdue"], ["Arizona", "Gonzaga"], ["Arizona"]],
        South: [["Florida", "Iowa", "Vanderbilt", "Nebraska", "North Carolina", "Illinois", "Texas A&M", "Houston"], ["Florida", "Vanderbilt", "Illinois", "Houston"], ["Florida", "Houston"], ["Houston"]],
        Midwest: [["Michigan", "Saint Louis", "Akron", "Alabama", "Tennessee", "Virginia", "Kentucky", "Iowa St."], ["Michigan", "Alabama", "Virginia", "Kentucky"], ["Michigan", "Virginia"], ["Michigan"]],
        F4: ["Houston", "Michigan"], Champion: "Michigan"
      },
      "Luke Rapp": {
        East: [["Duke", "TCU", "St. John's", "Kansas", "South Florida", "Michigan St.", "UCLA", "Connecticut"], ["Duke", "St. John's", "Michigan St.", "Connecticut"], ["Duke", "Connecticut"], ["Duke"]],
        West: [["Arizona", "Utah St.", "Wisconsin", "Arkansas", "Texas", "Gonzaga", "Missouri", "Purdue"], ["Arizona", "Arkansas", "Texas", "Purdue"], ["Arizona", "Purdue"], ["Arizona"]],
        South: [["Florida", "Iowa", "Vanderbilt", "Nebraska", "VCU", "Illinois", "Texas A&M", "Houston"], ["Florida", "Vanderbilt", "Illinois", "Houston"], ["Florida", "Houston"], ["Houston"]],
        Midwest: [["Michigan", "Georgia", "Texas Tech", "Alabama", "Tennessee", "Virginia", "Santa Clara", "Iowa St."], ["Michigan", "Texas Tech", "Virginia", "Iowa St."], ["Michigan", "Iowa St."], ["Michigan"]],
        F4: ["Duke", "Arizona"], Champion: "Arizona"
      },
      "Z Hickman": {
        East: [["Duke", "Ohio St.", "St. John's", "Kansas", "South Florida", "Michigan St.", "UCLA", "Connecticut"], ["Duke", "Kansas", "Michigan St.", "Connecticut"], ["Kansas", "Connecticut"], ["Connecticut"]],
        West: [["Arizona", "Villanova", "Wisconsin", "Arkansas", "BYU", "Gonzaga", "Miami (FL)", "Purdue"], ["Arizona", "Arkansas", "BYU", "Miami (FL)"], ["Arizona", "Miami (FL)"], ["Arizona"]],
        South: [["Florida", "Iowa", "McNeese", "Nebraska", "North Carolina", "Illinois", "St. Mary's", "Houston"], ["Florida", "Nebraska", "North Carolina", "Houston"], ["Florida", "Houston"], ["Florida"]],
        Midwest: [["Michigan", "Georgia", "Akron", "Hofstra", "Tennessee", "Virginia", "Kentucky", "Iowa St."], ["Michigan", "Akron", "Virginia", "Iowa St."], ["Michigan", "Iowa St."], ["Michigan"]],
        F4: ["Florida", "Michigan"], Champion: "Michigan"
      },
      "Aaron Burns": {
        East: [["Duke", "TCU", "St. John's", "Kansas", "South Florida", "Michigan St.", "UCLA", "Connecticut"], ["Duke", "St. John's", "Michigan St.", "Connecticut"], ["Duke", "Michigan St."], ["Duke"]],
        West: [["Arizona", "Utah St.", "High Point", "Arkansas", "Texas", "Gonzaga", "Miami (FL)", "Purdue"], ["Arizona", "Arkansas", "Gonzaga", "Purdue"], ["Arizona", "Purdue"], ["Arizona"]],
        South: [["Florida", "Iowa", "Vanderbilt", "Nebraska", "VCU", "Illinois", "St. Mary's", "Houston"], ["Florida", "Vanderbilt", "Illinois", "Houston"], ["Florida", "Houston"], ["Houston"]],
        Midwest: [["Michigan", "Georgia", "Texas Tech", "Hofstra", "Tennessee", "Virginia", "Kentucky", "Iowa St."], ["Michigan", "Hofstra", "Virginia", "Iowa St."], ["Michigan", "Iowa St."], ["Iowa St."]],
        F4: ["Duke", "Arizona"], Champion: "Arizona"
      },
      "Bry": {
        East: [["Duke", "Ohio St.", "St. John's", "Kansas", "Louisville", "Michigan St.", "UCLA", "Connecticut"], ["Duke", "St. John's", "Michigan St.", "Connecticut"], ["Duke", "Michigan St."], ["Michigan St."]],
        West: [["Arizona", "Utah St.", "Wisconsin", "Arkansas", "BYU", "Gonzaga", "Miami (FL)", "Purdue"], ["Arizona", "Wisconsin", "BYU", "Purdue"], ["Arizona", "Purdue"], ["Arizona"]],
        South: [["Florida", "Iowa", "Vanderbilt", "Nebraska", "North Carolina", "Illinois", "St. Mary's", "Houston"], ["Florida", "Vanderbilt", "Illinois", "Houston"], ["Florida", "Houston"], ["Florida"]],
        Midwest: [["Michigan", "Saint Louis", "Texas Tech", "Alabama", "Tennessee", "Virginia", "Kentucky", "Iowa St."], ["Michigan", "Alabama", "Virginia", "Iowa St."], ["Michigan", "Iowa St."], ["Iowa St."]],
        F4: ["Michigan St.", "Arizona"], Champion: "Michigan St."
      },
      "Joe Prino": {
        East: [["Duke", "Ohio St.", "St. John's", "Kansas", "Louisville", "Michigan St.", "UCF", "Connecticut"], ["Duke", "Kansas", "Michigan St.", "Connecticut"], ["Duke", "Connecticut"], ["Duke"]],
        West: [["Arizona", "Villanova", "Wisconsin", "Arkansas", "Texas", "Gonzaga", "Miami (FL)", "Purdue"], ["Arizona", "Wisconsin", "Gonzaga", "Miami (FL)"], ["Arizona", "Miami (FL)"], ["Miami (FL)"]],
        South: [["Florida", "Iowa", "Vanderbilt", "Nebraska", "North Carolina", "Illinois", "Texas A&M", "Houston"], ["Florida", "Nebraska", "North Carolina", "Houston"], ["Florida", "Houston"], ["Florida"]],
        Midwest: [["Michigan", "Georgia", "Texas Tech", "Alabama", "Miami (OH)", "Virginia", "Kentucky", "Iowa St."], ["Michigan", "Texas Tech", "Virginia", "Kentucky"], ["Michigan", "Virginia"], ["Michigan"]],
        F4: ["Florida", "Miami (FL)"], Champion: "Florida"
      },
      "Martha": {
        East: [["Duke", "TCU", "St. John's", "Kansas", "Louisville", "Michigan St.", "UCLA", "Connecticut"], ["Duke", "Kansas", "Michigan St.", "Connecticut"], ["Kansas", "Michigan St."], ["Michigan St."]],
        West: [["Arizona", "Villanova", "Wisconsin", "Arkansas", "BYU", "Gonzaga", "Miami (FL)", "Purdue"], ["Arizona", "Arkansas", "Gonzaga", "Miami (FL)"], ["Arizona", "Gonzaga"], ["Gonzaga"]],
        South: [["Florida", "Clemson", "Vanderbilt", "Nebraska", "VCU", "Illinois", "St. Mary's", "Houston"], ["Florida", "Vanderbilt", "Illinois", "Houston"], ["Florida", "Houston"], ["Houston"]],
        Midwest: [["Michigan", "Georgia", "Texas Tech", "Alabama", "Tennessee", "Virginia", "Santa Clara", "Iowa St."], ["Michigan", "Texas Tech", "Virginia", "Iowa St."], ["Michigan", "Virginia"], ["Michigan"]],
        F4: ["Houston", "Gonzaga"], Champion: "Houston"
      }
    }
  }
};
