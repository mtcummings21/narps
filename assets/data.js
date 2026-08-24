const LEAGUE_NAME = "League of NARPS";
const FOUNDED = 2011;
const LATEST_SEASON = 2025;
const TEAMS = [
  {
    "key": "Prino",
    "owner": "Joe Prino",
    "team": "Prino's Powerhouse",
    "seasons": 15,
    "champs": 4,
    "gamesW": 107,
    "gamesL": 88,
    "gamesT": 0,
    "winPct": 0.5487,
    "playoffApp": 11,
    "byes": 2,
    "playoffW": 17,
    "playoffL": 8,
    "playoffWinPct": 0.68,
    "champGameApp": 5,
    "champGameW": 4,
    "champGameL": 1,
    "totalPF": 19788.2,
    "totalPA": 18961,
    "seasonAvgPF": 1319.2,
    "seasonAvgPA": 1264.1,
    "gameAvgPF": 101.48,
    "gameAvgPA": 97.24,
    "diff": 4.24,
    "topScoringSeasons": 1,
    "highScore": 161,
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
    "seasons": 15,
    "champs": 1,
    "gamesW": 112,
    "gamesL": 82,
    "gamesT": 1,
    "winPct": 0.5744,
    "playoffApp": 10,
    "byes": 2,
    "playoffW": 10,
    "playoffL": 11,
    "playoffWinPct": 0.4762,
    "champGameApp": 3,
    "champGameW": 1,
    "champGameL": 2,
    "totalPF": 19629.4,
    "totalPA": 18926.9,
    "seasonAvgPF": 1308.6,
    "seasonAvgPA": 1261.8,
    "gameAvgPF": 100.66,
    "gameAvgPA": 97.06,
    "diff": 3.6,
    "topScoringSeasons": 2,
    "highScore": 154,
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
    "seasons": 15,
    "champs": 1,
    "gamesW": 105,
    "gamesL": 90,
    "gamesT": 0,
    "winPct": 0.5385,
    "playoffApp": 9,
    "byes": 1,
    "playoffW": 10,
    "playoffL": 10,
    "playoffWinPct": 0.5,
    "champGameApp": 2,
    "champGameW": 0,
    "champGameL": 2,
    "totalPF": 19544.2,
    "totalPA": 19371.9,
    "seasonAvgPF": 1302.9,
    "seasonAvgPA": 1291.5,
    "gameAvgPF": 100.23,
    "gameAvgPA": 99.34,
    "diff": 0.88,
    "topScoringSeasons": 3,
    "highScore": 170.8,
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
    "seasons": 15,
    "champs": 3,
    "gamesW": 107,
    "gamesL": 88,
    "gamesT": 0,
    "winPct": 0.5487,
    "playoffApp": 8,
    "byes": 3,
    "playoffW": 10,
    "playoffL": 6,
    "playoffWinPct": 0.625,
    "champGameApp": 5,
    "champGameW": 3,
    "champGameL": 2,
    "totalPF": 19381.1,
    "totalPA": 18888.9,
    "seasonAvgPF": 1292.1,
    "seasonAvgPA": 1259.3,
    "gameAvgPF": 99.39,
    "gameAvgPA": 96.87,
    "diff": 2.52,
    "topScoringSeasons": 3,
    "highScore": 184,
    "mostDrafted": {
      "count": 3,
      "entries": [
        { "player": "Adrian Peterson", "years": [2011, 2013, 2014] },
        { "player": "Broncos D/ST", "years": [2013, 2014, 2015] },
        { "player": "Dan Bailey", "years": [2012, 2014, 2015] },
        { "player": "Mark Ingram", "years": [2013, 2014, 2015] }
      ]
    }
  },
  {
    "key": "Cummings",
    "owner": "Tyler Cummings",
    "team": "Lincoln Legends",
    "seasons": 15,
    "champs": 0,
    "gamesW": 99,
    "gamesL": 95,
    "gamesT": 1,
    "winPct": 0.5077,
    "playoffApp": 8,
    "byes": 2,
    "playoffW": 4,
    "playoffL": 5,
    "playoffWinPct": 0.4444,
    "champGameApp": 1,
    "champGameW": 0,
    "champGameL": 1,
    "totalPF": 19585.7,
    "totalPA": 19136.4,
    "seasonAvgPF": 1305.7,
    "seasonAvgPA": 1275.8,
    "gameAvgPF": 100.44,
    "gameAvgPA": 98.14,
    "diff": 2.3,
    "topScoringSeasons": null,
    "highScore": 146.4,
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
    "seasons": 12,
    "champs": 1,
    "gamesW": 73,
    "gamesL": 85,
    "gamesT": 0,
    "winPct": 0.462,
    "playoffApp": 5,
    "byes": 2,
    "playoffW": 5,
    "playoffL": 4,
    "playoffWinPct": 0.5556,
    "champGameApp": 0,
    "champGameW": 0,
    "champGameL": 0,
    "totalPF": 15735.4,
    "totalPA": 15537.1,
    "seasonAvgPF": 1311.3,
    "seasonAvgPA": 1294.8,
    "gameAvgPF": 99.59,
    "gameAvgPA": 98.34,
    "diff": 1.26,
    "topScoringSeasons": 2,
    "highScore": 154.7,
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
    "seasons": 15,
    "champs": 2,
    "gamesW": 100,
    "gamesL": 94,
    "gamesT": 1,
    "winPct": 0.5154,
    "playoffApp": 9,
    "byes": 2,
    "playoffW": 10,
    "playoffL": 3,
    "playoffWinPct": 0.7692,
    "champGameApp": 4,
    "champGameW": 2,
    "champGameL": 2,
    "totalPF": 19363,
    "totalPA": 18993.6,
    "seasonAvgPF": 1290.9,
    "seasonAvgPA": 1266.2,
    "gameAvgPF": 99.3,
    "gameAvgPA": 97.4,
    "diff": 1.89,
    "topScoringSeasons": 1,
    "highScore": 155.1,
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
    "seasons": 12,
    "champs": 0,
    "gamesW": 74,
    "gamesL": 84,
    "gamesT": 0,
    "winPct": 0.4684,
    "playoffApp": 3,
    "byes": 1,
    "playoffW": 3,
    "playoffL": 5,
    "playoffWinPct": 0.375,
    "champGameApp": 0,
    "champGameW": 0,
    "champGameL": 0,
    "totalPF": 15530.4,
    "totalPA": 15535.2,
    "seasonAvgPF": 1294.2,
    "seasonAvgPA": 1294.6,
    "gameAvgPF": 98.29,
    "gameAvgPA": 98.32,
    "diff": -0.03,
    "topScoringSeasons": 1,
    "highScore": 138.4,
    "mostDrafted": {
      "count": 3,
      "entries": [
        { "player": "Carson Wentz", "years": [2017, 2018, 2020] },
        { "player": "Keenan Allen", "years": [2017, 2018, 2019] },
        { "player": "Leonard Fournette", "years": [2018, 2021, 2022] }
      ]
    }
  },
  {
    "key": "Hickman",
    "owner": "Z Hickman",
    "team": "Free Agents",
    "seasons": 14,
    "champs": 1,
    "gamesW": 92,
    "gamesL": 90,
    "gamesT": 0,
    "winPct": 0.5055,
    "playoffApp": 6,
    "byes": 3,
    "playoffW": 5,
    "playoffL": 8,
    "playoffWinPct": 0.3846,
    "champGameApp": 0,
    "champGameW": 0,
    "champGameL": 0,
    "totalPF": 17673.3,
    "totalPA": 17705.7,
    "seasonAvgPF": 1262.4,
    "seasonAvgPA": 1264.7,
    "gameAvgPF": 97.11,
    "gameAvgPA": 97.28,
    "diff": -0.18,
    "topScoringSeasons": 1,
    "highScore": 160.2,
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
    "seasons": 15,
    "champs": 2,
    "gamesW": 83,
    "gamesL": 111,
    "gamesT": 1,
    "winPct": 0.4282,
    "playoffApp": 3,
    "byes": 0,
    "playoffW": 8,
    "playoffL": 2,
    "playoffWinPct": 0.8,
    "champGameApp": 2,
    "champGameW": 2,
    "champGameL": 0,
    "totalPF": 18640.8,
    "totalPA": 19547,
    "seasonAvgPF": 1242.7,
    "seasonAvgPA": 1303.1,
    "gameAvgPF": 95.59,
    "gameAvgPA": 100.24,
    "diff": -4.65,
    "topScoringSeasons": null,
    "highScore": 143.3,
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
    "byes": 2,
    "playoffW": 2,
    "playoffL": 9,
    "playoffWinPct": 0.1818,
    "champGameApp": 1,
    "champGameW": 0,
    "champGameL": 1,
    "totalPF": 18439.7,
    "totalPA": 19496.9,
    "seasonAvgPF": 1229.3,
    "seasonAvgPA": 1299.8,
    "gameAvgPF": 94.56,
    "gameAvgPA": 99.98,
    "diff": -5.42,
    "topScoringSeasons": null,
    "highScore": 168.7,
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
    "seasons": 14,
    "champs": 0,
    "gamesW": 75,
    "gamesL": 107,
    "gamesT": 0,
    "winPct": 0.4121,
    "playoffApp": 2,
    "byes": 0,
    "playoffW": 1,
    "playoffL": 3,
    "playoffWinPct": 0.25,
    "champGameApp": 0,
    "champGameW": 0,
    "champGameL": 0,
    "totalPF": 17030.8,
    "totalPA": 18297.4,
    "seasonAvgPF": 1216.5,
    "seasonAvgPA": 1307,
    "gameAvgPF": 93.58,
    "gameAvgPA": 100.54,
    "diff": -6.96,
    "topScoringSeasons": null,
    "highScore": 142.5,
    "mostDrafted": {
      "count": 7,
      "entries": [
        { "player": "Aaron Rodgers", "years": [2013, 2014, 2015, 2019, 2021, 2022, 2024] }
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
        "team": "Route 2 Ravers",
        "owner": "Joseph Garton",
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
        "team": "Prino's Powerhouse",
        "owner": "Joe Prino",
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
        "team": "Free Agents",
        "owner": "Zachary Hickman",
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
        "team": "The Fantasy Football Team",
        "owner": "Aaron Burns",
        "w": 3,
        "l": 11,
        "t": 0,
        "pct": 0.214
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
        "team": "The Arabian Stallions",
        "owner": "Walid Salameh",
        "w": 6,
        "l": 8,
        "t": 0,
        "pct": 0.429
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
        "team": "Free Agents",
        "owner": "Zachary Hickman",
        "w": 5,
        "l": 9,
        "t": 0,
        "pct": 0.357
      },
      {
        "team": "Business as Usual",
        "owner": "Travis West",
        "w": 5,
        "l": 9,
        "t": 0,
        "pct": 0.357
      },
      {
        "team": "Route 2 Ravers",
        "owner": "Joseph Garton",
        "w": 4,
        "l": 10,
        "t": 0,
        "pct": 0.286
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
        "team": "The Fantasy Football Team",
        "owner": "Aaron Burns",
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
        "team": "Kareem Pie",
        "owner": "Matt Geiger",
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
        "team": "Business as Usual",
        "owner": "Travis West",
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
        "team": "Route 2 Ravers",
        "owner": "Joseph Garton",
        "w": 5,
        "l": 9,
        "t": 0,
        "pct": 0.357
      },
      {
        "team": "The Arabian Stallions",
        "owner": "Walid Salameh",
        "w": 4,
        "l": 10,
        "t": 0,
        "pct": 0.286
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
        "team": "Prino's Powerhouse",
        "owner": "Joe Prino",
        "w": 0,
        "l": 0,
        "t": 0,
        "pct": 0.0
      },
      {
        "team": "George's Gangstas",
        "owner": "Sonny Wright",
        "w": 0,
        "l": 0,
        "t": 0,
        "pct": 0.0
      },
      {
        "team": "The Deplorables",
        "owner": "Zach Sizemore",
        "w": 0,
        "l": 0,
        "t": 0,
        "pct": 0.0
      },
      {
        "team": "ACLiens",
        "owner": "Luke Rapp",
        "w": 0,
        "l": 0,
        "t": 0,
        "pct": 0.0
      },
      {
        "team": "Lincoln Legends",
        "owner": "Tyler Cummings",
        "w": 0,
        "l": 0,
        "t": 0,
        "pct": 0.0
      },
      {
        "team": "Arabian Stallions",
        "owner": "Walid Salameh",
        "w": 0,
        "l": 0,
        "t": 0,
        "pct": 0.0
      },
      {
        "team": "Money Badgers",
        "owner": "Tyler Clay",
        "w": 0,
        "l": 0,
        "t": 0,
        "pct": 0.0
      },
      {
        "team": "Fantasy Football Team",
        "owner": "Aaron Burns",
        "w": 0,
        "l": 0,
        "t": 0,
        "pct": 0.0
      },
      {
        "team": "Free Agents",
        "owner": "Z Hickman",
        "w": 0,
        "l": 0,
        "t": 0,
        "pct": 0.0
      },
      {
        "team": "Business as Usual",
        "owner": "Travis West",
        "w": 0,
        "l": 0,
        "t": 0,
        "pct": 0.0
      },
      {
        "team": "Kareem Pie",
        "owner": "Seth Thacker",
        "w": 0,
        "l": 0,
        "t": 0,
        "pct": 0.0
      },
      {
        "team": "Route 2 Ravers",
        "owner": "Joe Garton",
        "w": 0,
        "l": 0,
        "t": 0,
        "pct": 0.0
      }
    ],
    "playoffs": {},
    "schedule": {
      "Week 1": [
        {
          "away": "Kareem Pie",
          "awayMgr": "Seth Thacker",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Joe Garton",
          "home": "Route 2 Ravers"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Z Hickman",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Sonny Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Aaron Burns",
          "home": "Fantasy Football Team"
        },
        {
          "away": "The Deplorables",
          "awayMgr": "Zach Sizemore",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Luke Rapp",
          "home": "ACLiens"
        }
      ],
      "Week 2": [
        {
          "away": "Kareem Pie",
          "awayMgr": "Seth Thacker",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "The Deplorables",
          "awayMgr": "Zach Sizemore",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Walid Salameh",
          "home": "Arabian Stallions"
        },
        {
          "away": "ACLiens",
          "awayMgr": "Luke Rapp",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Z Hickman",
          "home": "Free Agents"
        },
        {
          "away": "Fantasy Football Team",
          "awayMgr": "Aaron Burns",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        },
        {
          "away": "Lincoln Legends",
          "awayMgr": "Tyler Cummings",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Travis West",
          "home": "Business as Usual"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "Sonny Wright",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Joe Garton",
          "home": "Route 2 Ravers"
        }
      ],
      "Week 3": [
        {
          "away": "Kareem Pie",
          "awayMgr": "Seth Thacker",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Luke Rapp",
          "home": "ACLiens"
        },
        {
          "away": "Fantasy Football Team",
          "awayMgr": "Aaron Burns",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Zach Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "Lincoln Legends",
          "awayMgr": "Tyler Cummings",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Joe Prino",
          "home": "Prino's Powerhouse"
        },
        {
          "away": "George's Gangstas",
          "awayMgr": "Sonny Wright",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Walid Salameh",
          "home": "Arabian Stallions"
        },
        {
          "away": "Route 2 Ravers",
          "awayMgr": "Joe Garton",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Z Hickman",
          "home": "Free Agents"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Tyler Clay",
          "home": "Money Badgers"
        }
      ],
      "Week 4": [
        {
          "away": "Kareem Pie",
          "awayMgr": "Seth Thacker",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Joe Garton",
          "home": "Route 2 Ravers"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Sonny Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Z Hickman",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Aaron Burns",
          "home": "Fantasy Football Team"
        },
        {
          "away": "Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Luke Rapp",
          "home": "ACLiens"
        },
        {
          "away": "Prino's Powerhouse",
          "awayMgr": "Joe Prino",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Zach Sizemore",
          "home": "The Deplorables"
        }
      ],
      "Week 5": [
        {
          "away": "Kareem Pie",
          "awayMgr": "Seth Thacker",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Sonny Wright",
          "home": "George's Gangstas"
        },
        {
          "away": "Route 2 Ravers",
          "awayMgr": "Joe Garton",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Tyler Cummings",
          "home": "Lincoln Legends"
        },
        {
          "away": "Business as Usual",
          "awayMgr": "Travis West",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Aaron Burns",
          "home": "Fantasy Football Team"
        },
        {
          "away": "Money Badgers",
          "awayMgr": "Tyler Clay",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Luke Rapp",
          "home": "ACLiens"
        },
        {
          "away": "Free Agents",
          "awayMgr": "Z Hickman",
          "awayScore": 0,
          "homeScore": 0,
          "homeMgr": "Zach Sizemore",
          "home": "The Deplorables"
        },
        {
          "away": "Arabian Stallions",
          "awayMgr": "Walid Salameh",
          "awayScore": 0,
          "homeScore": 0,
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
  "2026": { "iso": "2026-09-07T20:00:00-04:00", "label": "Mon, Sept 7, 2026 · 8:00 PM ET" }
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

// Dues paid, by team key, per season. Add a year entry as owners pay up.
const PAID_STATUS = {
  "2026": ["Thacker", "West", "Hickman", "Garton", "Cummings"]
};

// Homepage "Top Headlines" widget — general NFL news, unrelated to league
// history. Update this list periodically to keep it current.
const NFL_HEADLINES = [
  { title: "Browns' Todd Monken to name Week 1 starting QB Monday", url: "https://www.nfl.com/news" },
  { title: "McCarthy: Steelers at 'impasse' with CB Joey Porter Jr.", url: "https://www.nfl.com/news" },
  { title: "Raiders' Jeanty believed to have sprained ankle at practice", url: "https://www.espn.com/nfl/transactions" },
  { title: "Chargers place C Tyler Biadasz (knee) on season-ending IR", url: "https://www.nfl.com/news" },
  { title: "Niners activate TE George Kittle off PUP list", url: "https://www.nfl.com/news" },
  { title: "Milton throws 2 TDs, makes case for Cowboys' backup QB job", url: "https://www.espn.com/nfl/" },
  { title: "Chiefs' Butker kicks 69-yard FG in 16-15 loss to Bucs", url: "https://www.espn.com/nfl/" },
  { title: "40-year-old Josh Johnson leads Bengals past Bears, 27-9", url: "https://www.espn.com/nfl/" }
];

const SURVIVOR = {
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
  }
};

// ---------- Rules & Bylaws Voting History ----------
// Sourced from League of NARPS SurveyMonkey rule-change ballots, 2015–2025.
// "passed" = true (adopted) / false (rejected) / null (plurality pick among 3+ options, or informational/logistics)
const RULES_HISTORY = [
  {
    "year": 2015,
    "rounds": [
      {
        "label": "Fantasy Football 2015 — Round 1",
        "votes": [
          {
            "category": "Playoffs",
            "question": "Use a 1-week playoff matchup (regular season ends Week 13) or a 2-week playoff matchup (regular season ends Week 10)?",
            "options": ["1-week — 82% (9)", "2-week — 18% (2)"],
            "result": "1-week playoff matchups",
            "passed": true
          },
          {
            "category": "Draft",
            "question": "How should the draft order be determined this year?",
            "options": ["Random — 73% (8)", "Inverse of standings — 27% (3)"],
            "result": "Random",
            "passed": true
          },
          {
            "category": "Scoring",
            "question": "Change kicker scoring so all FGs made are worth a flat 3 points (previously 4 pts for 40–49 yds, 5 pts for 50+ yds), plus -1 point for any missed PAT?",
            "options": ["Approve — 73% (8)", "Disapprove — 27% (3)"],
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
            "category": "Finances",
            "question": "Increase league dues to $50 or $100, or remain at $25? (An increase would add weekly payouts to the top-scoring team.)",
            "options": ["$25 — 27% (3)", "$50 — 18% (2)", "$100 — 55% (6)"],
            "result": "$100",
            "passed": true
          },
          {
            "category": "Roster",
            "question": "Keepers were eliminated this season — are you in favor of implementing keepers for the following year, and if so how many?",
            "options": ["No Keepers — 27% (3)", "1 — 45% (5)", "2 — 27% (3)", "Other — 0%"],
            "result": "1 keeper",
            "passed": true
          },
          {
            "category": "Roster",
            "question": "If we choose to allow keepers, how many years do you want to do keepers?",
            "options": ["1 — 55% (6)", "2 — 45% (5)", "3 — 0%"],
            "result": "1 year",
            "passed": true
          },
          {
            "category": "Draft",
            "question": "Proposed changes to trading draft picks, to keep the league competitive and fair — which would you like implemented this season?",
            "options": ["Keep things the way they are — 27% (3)", "DO NOT allow draft picks to be traded — 45% (5)", "Only allow one draft pick to be traded — 27% (3)", "No picks between rounds 1–4 can be traded — 0%"],
            "result": "Draft picks could not be traded",
            "passed": true
          },
          {
            "category": "Roster",
            "question": "Teams are currently allowed 25 transactions per season (including playoffs). In favor of increasing, and if so to how many?",
            "options": ["Remain at 25 — 55% (6)", "30 — 18% (2)", "35 — 0%", "No Limit — 27% (3)"],
            "result": "Remain at 25",
            "passed": false
          },
          {
            "category": "Roster",
            "question": "Teams are currently allowed 2 IR spots. In favor of increasing to 3?",
            "options": ["2 (remain) — 64% (7)", "3 — 36% (4)"],
            "result": "Remain at 2",
            "passed": false
          },
          {
            "category": "Finances",
            "question": "Which championship trophy are you in favor of purchasing?",
            "options": ["Bronze at $125 — 55% (6)", "Silver at $165 — 45% (5)"],
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
            "category": "Roster",
            "question": "Keep transactions at 25 per season (including playoffs) or increase to 30?",
            "options": ["25 — 30% (3)", "30 — 70% (7)"],
            "result": "30",
            "passed": true
          },
          {
            "category": "Draft",
            "question": "Should we use a snake draft or an auction draft?",
            "options": ["Snake — 90% (9)", "Auction — 10% (1)"],
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
            "category": "Membership",
            "question": "Remain at twelve (12) owners or expand to fourteen (14)?",
            "options": ["12 — 73% (8)", "14 — 27% (3)"],
            "result": "12",
            "passed": false,
            "note": "League stayed at 12 owners; the 14-team playoff-size question was rendered moot."
          },
          {
            "category": "Finances",
            "question": "Ranked-choice vote on the 12-team payout split ($900 to disperse after weekly/season high-score bonuses)",
            "options": ["$500/$300/$100", "$500/$250/$150", "$600/$200/$100", "$550/$250/$100"],
            "result": "$600 / $200 / $100 (best weighted rank, 2.00 avg)",
            "passed": null
          },
          {
            "category": "Roster",
            "question": "Do you want to allow keepers, and if so how many?",
            "options": ["No Keepers — 27% (3)", "1 — 55% (6)", "2 — 18% (2)"],
            "result": "1 keeper",
            "passed": true
          },
          {
            "category": "Roster",
            "question": "If we allow keepers, for how many years should it be?",
            "options": ["1 — 55% (6)", "2 — 36% (4)", "3 — 9% (1)"],
            "result": "1 year",
            "passed": true
          },
          {
            "category": "Draft",
            "question": "Should we allow draft position swapping (teams swap entire draft slot with another team)?",
            "options": ["Yes — 64% (7)", "No — 36% (4)"],
            "result": "Yes",
            "passed": true
          },
          {
            "category": "Roster",
            "question": "Should we remove the Kicker position?",
            "options": ["Yes — 64% (7)", "No — 36% (4)"],
            "result": "Yes",
            "passed": true,
            "note": "Kicker dropped from rosters starting the following season."
          },
          {
            "category": "Roster",
            "question": "Should we remove the Defense/Special Teams position?",
            "options": ["Yes — 27% (3)", "No — 73% (8)"],
            "result": "No",
            "passed": false,
            "note": "D/ST survived this vote — see 2019, where it was eliminated on a second try."
          },
          {
            "category": "Roster",
            "question": "If we remove the K or D/ST position, should we add another position?",
            "options": ["QB — 0%", "RB — 0%", "WR — 9% (1)", "TE — 0%", "Flex — 73% (8)", "Do not add another position — 18% (2)"],
            "result": "Flex",
            "passed": true,
            "note": "This is the origin of the league's second FLEX spot."
          },
          {
            "category": "Scoring",
            "question": "How many points should a reception be worth?",
            "options": ["0.2 — 0%", "0.5 — 82% (9)", "1.0 — 18% (2)"],
            "result": "0.5 PPR",
            "passed": true,
            "note": "This is the origin vote for the league's still-current 0.5 PPR scoring."
          },
          {
            "category": "Roster",
            "question": "How many transactions should each team be allowed per season (including playoffs)?",
            "options": ["30 (current) — 18% (2)", "35 — 45% (5)", "40 — 36% (4)"],
            "result": "35",
            "passed": true
          },
          {
            "category": "Roster",
            "question": "For free agent acquisitions, should we use Waivers or a Free Agent Auction?",
            "options": ["Waivers — 100% (11)", "Free Agent Auction — 0%"],
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
            "category": "Roster",
            "question": "Should we eliminate the D/ST position?",
            "options": ["Yes — 64% (7)", "No — 36% (4)"],
            "result": "Yes",
            "passed": true,
            "note": "Finished the job the 2018 survey didn't — D/ST dropped from rosters."
          },
          {
            "category": "Roster",
            "question": "Should we keep or remove the second FLEX position?",
            "options": ["Keep — 91% (10)", "Remove — 9% (1)"],
            "result": "Keep",
            "passed": true
          },
          {
            "category": "Roster",
            "question": "Should we increase transactions from 35 to 40?",
            "options": ["35 (stay) — 55% (6)", "40 — 45% (5)"],
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
        "label": "Round 1 — Preseason Rules Vote",
        "votes": [
          {
            "category": "Draft",
            "question": "Should we use an auction draft?",
            "options": ["Yes — 36% (4)", "No — 64% (7)"],
            "result": "No",
            "passed": false
          },
          {
            "category": "Roster",
            "question": "Should we eliminate transaction limits?",
            "options": ["Yes — 55% (6)", "No — 45% (5)"],
            "result": "Yes",
            "passed": true
          },
          {
            "category": "Roster",
            "question": "How many IR spots should we add? (currently 2)",
            "options": ["0 — 9% (1)", "1 — 45% (5)", "2 — 45% (5)"],
            "result": "Effectively +1 (IR went to 3 total, confirmed by the 2021 survey)",
            "passed": null,
            "note": "Statistical tie between adding 1 and adding 2; league settled on 3 total IR slots."
          },
          {
            "category": "Roster",
            "question": "Should we have one keeper going into the 2021 season?",
            "options": ["Yes — 45% (5)", "No — 55% (6)"],
            "result": "No",
            "passed": false
          },
          {
            "category": "Roster",
            "question": "Should we add one Individual Defensive Player (IDP) roster spot?",
            "options": ["Yes — 27% (3)", "No — 73% (8)"],
            "result": "No",
            "passed": false
          },
          {
            "category": "Roster",
            "question": "Should we change one FLEX position to a SUPERFLEX position?",
            "options": ["Yes — 27% (3)", "No — 73% (8)"],
            "result": "No",
            "passed": false
          },
          {
            "category": "Contingency",
            "question": "How many weeks should constitute a League of NARPS season if the NFL cancels its season?",
            "options": ["7 — 0%", "8 — 18% (2)", "9 — 18% (2)", "10 — 55% (6)", "Other — 9% (1)"],
            "result": "10 weeks",
            "passed": null
          },
          {
            "category": "Contingency",
            "question": "If the NFL season is cancelled before LoN's playoffs, what payout should the top 3 records receive?",
            "options": ["No Payout — 18% (2)", "Partial Payout — 45% (5)", "Full Payout — 36% (4)"],
            "result": "Partial Payout",
            "passed": null
          }
        ]
      },
      {
        "label": "Round 2 — COVID Contingency Vote",
        "votes": [
          {
            "category": "Contingency",
            "question": "If the NFL season were cancelled during the LoN playoffs, should final standings be determined by highest remaining seed?",
            "options": ["Yes — 82% (9)", "No — 18% (2)"],
            "result": "Yes",
            "passed": true
          },
          {
            "category": "Contingency",
            "question": "If ≥10 weeks were completed and playoffs were not, should the top 3 teams get a full or partial payout?",
            "options": ["Full Payout — 45% (5)", "Partial Payout — 55% (6)"],
            "result": "Partial Payout",
            "passed": true
          },
          {
            "category": "Finances",
            "question": "If Partial Payout, what should the split be?",
            "options": ["75% split ($325/$225/$75) — 36% (4)", "50% split ($250/$150/$50) — 64% (7)", "25% split ($125/$75/$25) — 0%"],
            "result": "50% split — $250 / $150 / $50",
            "passed": true
          },
          {
            "category": "Finances",
            "question": "What should happen with the remaining partial-payout money?",
            "options": ["Divide equally and return to members — 45% (5)", "Roll it over into next season's winnings — 55% (6)"],
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
            "category": "Schedule",
            "question": "The NFL expanded to 17 games. Should the League of NARPS add a 14th regular-season week?",
            "options": ["Yes — 73% (8)", "No — 27% (3)"],
            "result": "Yes",
            "passed": true
          },
          {
            "category": "Roster",
            "question": "Should the League of NARPS have a keeper for the 2022 season?",
            "options": ["Yes — 45% (5)", "No — 55% (6)"],
            "result": "No",
            "passed": false,
            "note": "Keepers stayed off after this vote."
          },
          {
            "category": "Roster",
            "question": "Last year we expanded IR from 2 to 3 slots. Remain at 3, or move back to 2?",
            "options": ["2 — 36% (4)", "3 — 64% (7)"],
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
            "category": "Schedule",
            "question": "Which week should the trade deadline be? (cutoff = the following Wednesday; 14-week regular season)",
            "options": ["Week 8 — 18% (2)", "Week 9 — 45% (5)", "Week 10 — 36% (4)"],
            "result": "Week 9",
            "passed": null
          },
          {
            "category": "Playoffs",
            "question": "Should the 6th playoff seed be the highest-points-scored team among those outside the top 5 records?",
            "options": ["Yes — 82% (9)", "No — 18% (2)"],
            "result": "Yes",
            "passed": true,
            "note": "Origin vote for the league's still-current 6-seed-by-points playoff rule."
          },
          {
            "category": "Scoring",
            "question": "How many points should a reception be worth?",
            "options": ["0.5 — 64% (7)", "1.0 — 36% (4)"],
            "result": "0.5 PPR (reaffirmed)",
            "passed": true
          },
          {
            "category": "Finances",
            "question": "How much should the entry fee be?",
            "options": ["$100 — 45% (5)", "$200 — 55% (6)"],
            "result": "$200",
            "passed": true
          }
        ]
      },
      {
        "label": "2022 LoN Payout Final Vote",
        "votes": [
          {
            "category": "Finances",
            "question": "Runoff on the season payout structure: Proposal 1 or Proposal 3?",
            "options": ["Proposal 1 — 30% (3)", "Proposal 3 — 70% (7)"],
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
            "category": "Roster",
            "question": "How many IR slots should we have? (previously 3, expanded during COVID)",
            "options": ["1 — 27% (3)", "2 — 73% (8)"],
            "result": "2",
            "passed": true
          },
          {
            "category": "Schedule",
            "question": "Should the trade deadline move to the Wednesday after Week 10, or stay after Week 9?",
            "options": ["Week 9 — 36% (4)", "Week 10 — 64% (7)"],
            "result": "Week 10",
            "passed": true
          },
          {
            "category": "Draft",
            "question": "Should we use a Snake Draft or an Auction Draft?",
            "options": ["Auction — 9% (1)", "Snake — 91% (10)"],
            "result": "Snake",
            "passed": false,
            "note": "Auction rejected in a landslide."
          },
          {
            "category": "Roster",
            "question": "Should the Tight End position be converted to a Wide Receiver/Tight End position?",
            "options": ["Remain TE — 55% (6)", "Convert to WR/TE — 45% (5)"],
            "result": "Remain TE",
            "passed": false
          },
          {
            "category": "Playoffs",
            "question": "Do you wish to keep the current playoff qualifications (seeds 1–5 by record, 6-seed by points)?",
            "options": ["Yes — 73% (8)", "No — 27% (3)"],
            "result": "Yes",
            "passed": true,
            "note": "Reaffirms the 2022 6-seed-by-points rule."
          },
          {
            "category": "Playoffs",
            "question": "(Contingency, rendered moot) If qualifications changed, which proposal?",
            "options": ["Top 6 by record only — 27% (3)", "Top 6 by record + 7th seed by points (#1 seed bye) — 73% (8)"],
            "result": "Moot — current format was kept",
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
        "label": "LoN 2024 Survey — Round 1",
        "votes": [
          {
            "category": "Roster",
            "question": "Should we convert the TE position to a WR/TE position?",
            "options": ["Convert to WR/TE — 45% (5)", "Remain TE — 55% (6)"],
            "result": "Remain TE",
            "passed": false
          },
          {
            "category": "Scoring",
            "question": "Should TEs receive 0.75 points per reception?",
            "options": ["Change to 0.75 — 27% (3)", "Remain at 0.5 — 73% (8)"],
            "result": "Remain at 0.5",
            "passed": false
          },
          {
            "category": "Standings",
            "question": "Should we add a median-scoring record (top/bottom 6 scorers each week get a W/L added to head-to-head record)?",
            "options": ["Add Median Scoring Record — 27% (3)", "Do Not Add — 73% (8)"],
            "result": "Do Not Add",
            "passed": false
          },
          {
            "category": "Playoffs",
            "question": "Should we expand the playoffs to 7 teams?",
            "options": ["Yes — 36% (4)", "No — 64% (7)"],
            "result": "No",
            "passed": false,
            "note": "Playoffs stayed at 6 teams."
          },
          {
            "category": "Playoffs",
            "question": "Vote on playoff reseeding format (4-way; no majority triggers a runoff)",
            "options": [
              "Highest seed plays lowest remaining seed — 36% (4)",
              "Highest seed picks their opponent (rounds 1–2) — 9% (1)",
              "Top half of seeds choose their opponent — 18% (2)",
              "No playoff reseeding — 36% (4)"
            ],
            "result": "Tie between reseeding and no-reseeding — runoff required",
            "passed": null
          }
        ]
      },
      {
        "label": "LoN 2024 Survey 2 — Reseeding Runoff",
        "votes": [
          {
            "category": "Playoffs",
            "question": "Runoff: highest seed plays lowest remaining seed, or no playoff reseeding?",
            "options": ["Highest seed plays lowest remaining seed — 70% (7)", "No playoff reseeding — 30% (3)"],
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
            "category": "Draft",
            "question": "Should the 2026 draft order be set by final standings (champion picks first, then 2nd, 3rd, etc.)?",
            "options": ["Yes — 36% (4)", "No — 64% (7)"],
            "result": "No",
            "passed": false
          },
          {
            "category": "Roster",
            "question": "For the 2025 season, should we convert a TE position to a WR/TE position?",
            "options": ["Yes (WR/TE) — 45% (5)", "No (TE) — 55% (6)"],
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
            "category": "Roster",
            "question": "How many IR slots should there be?",
            "options": ["1 — 45.45% (5)", "2 — 54.55% (6)"],
            "result": "Remain at 2",
            "passed": false
          },
          {
            "category": "Scoring",
            "question": "Should we use 0.5 PPR or 1.0 PPR?",
            "options": ["0.5 — 72.73% (8)", "1.0 — 27.27% (3)"],
            "result": "Remain at 0.5 PPR",
            "passed": false
          },
          {
            "category": "Roster",
            "question": "Should we convert TE to TE/WR?",
            "options": ["TE — 72.73% (8)", "TE/WR — 27.27% (3)"],
            "result": "Remain TE",
            "passed": false
          },
          {
            "category": "Playoffs",
            "question": "Should we use playoff reseeding (seeds are reordered in the 2nd round so the highest seed plays the lowest seed)? If no, then we use the normal bracket setup (#1 seed plays winner of #4/5 seed and #2 seed plays winner of #3/6 seed). We voted for playoff reseeding in 2024 but it has not come into play.",
            "options": ["Use Playoff Reseeding — 63.64% (7)", "Do Not Use Playoff Reseeding — 36.36% (4)"],
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
const DRAFT_HISTORY = {
  "2011": [
    {"round":1,"pick":1,"overall":1,"player":"Arian Foster","nflTeam":"Hou","position":"RB","fantasyTeam":"Arian Brotherhood","owner":"Tyler Cummings"},
    {"round":1,"pick":2,"overall":2,"player":"Adrian Peterson","nflTeam":"Min","position":"RB","fantasyTeam":"The Last of the Mehicans","owner":"Luke Rapp"},
    {"round":1,"pick":3,"overall":3,"player":"Michael Vick","nflTeam":"Phi","position":"QB","fantasyTeam":"The Hulk","owner":"Zachary Sizemore"},
    {"round":1,"pick":4,"overall":4,"player":"Aaron Rodgers","nflTeam":"GB","position":"QB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":1,"pick":5,"overall":5,"player":"Maurice Jones-Drew","nflTeam":"Jac","position":"RB","fantasyTeam":"Rookie Sensations","owner":"George Wright"},
    {"round":1,"pick":6,"overall":6,"player":"Chris Johnson","nflTeam":"Ten","position":"RB","fantasyTeam":"Greatest Show On Turf","owner":"Tyler Clay"},
    {"round":1,"pick":7,"overall":7,"player":"Tom Brady","nflTeam":"NE","position":"QB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":1,"pick":8,"overall":8,"player":"Jamaal Charles","nflTeam":"KC","position":"RB","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":2,"pick":1,"overall":9,"player":"Matt Forte","nflTeam":"Chi","position":"RB","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":2,"pick":2,"overall":10,"player":"Greg Jennings","nflTeam":"GB","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":2,"pick":3,"overall":11,"player":"Peyton Manning","nflTeam":"Ind","position":"QB","fantasyTeam":"Greatest Show On Turf","owner":"Tyler Clay"},
    {"round":2,"pick":4,"overall":12,"player":"Philip Rivers","nflTeam":"SD","position":"QB","fantasyTeam":"Rookie Sensations","owner":"George Wright"},
    {"round":2,"pick":5,"overall":13,"player":"Andre Johnson","nflTeam":"Hou","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":2,"pick":6,"overall":14,"player":"Ray Rice","nflTeam":"Bal","position":"RB","fantasyTeam":"The Hulk","owner":"Zachary Sizemore"},
    {"round":2,"pick":7,"overall":15,"player":"Drew Brees","nflTeam":"NO","position":"QB","fantasyTeam":"The Last of the Mehicans","owner":"Luke Rapp"},
    {"round":2,"pick":8,"overall":16,"player":"Rashard Mendenhall","nflTeam":"Pit","position":"RB","fantasyTeam":"Arian Brotherhood","owner":"Tyler Cummings"},
    {"round":3,"pick":1,"overall":17,"player":"Matt Schaub","nflTeam":"Hou","position":"QB","fantasyTeam":"Arian Brotherhood","owner":"Tyler Cummings"},
    {"round":3,"pick":2,"overall":18,"player":"Roddy White","nflTeam":"Atl","position":"WR","fantasyTeam":"The Last of the Mehicans","owner":"Luke Rapp"},
    {"round":3,"pick":3,"overall":19,"player":"Hakeem Nicks","nflTeam":"NYG","position":"WR","fantasyTeam":"The Hulk","owner":"Zachary Sizemore"},
    {"round":3,"pick":4,"overall":20,"player":"LeSean McCoy","nflTeam":"Phi","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":3,"pick":5,"overall":21,"player":"Calvin Johnson","nflTeam":"Det","position":"WR","fantasyTeam":"Rookie Sensations","owner":"George Wright"},
    {"round":3,"pick":6,"overall":22,"player":"Mike Wallace","nflTeam":"Pit","position":"WR","fantasyTeam":"Greatest Show On Turf","owner":"Tyler Clay"},
    {"round":3,"pick":7,"overall":23,"player":"Peyton Hillis","nflTeam":"Cle","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":3,"pick":8,"overall":24,"player":"Matt Ryan","nflTeam":"Atl","position":"QB","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":4,"pick":1,"overall":25,"player":"Dwayne Bowe","nflTeam":"KC","position":"WR","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":4,"pick":2,"overall":26,"player":"Larry Fitzgerald","nflTeam":"Ari","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":4,"pick":3,"overall":27,"player":"Michael Turner","nflTeam":"Atl","position":"RB","fantasyTeam":"Greatest Show On Turf","owner":"Tyler Clay"},
    {"round":4,"pick":4,"overall":28,"player":"Vincent Jackson","nflTeam":"SD","position":"WR","fantasyTeam":"Rookie Sensations","owner":"George Wright"},
    {"round":4,"pick":5,"overall":29,"player":"Reggie Wayne","nflTeam":"Ind","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":4,"pick":6,"overall":30,"player":"Miles Austin","nflTeam":"Dal","position":"WR","fantasyTeam":"The Hulk","owner":"Zachary Sizemore"},
    {"round":4,"pick":7,"overall":31,"player":"Marques Colston","nflTeam":"NO","position":"WR","fantasyTeam":"The Last of the Mehicans","owner":"Luke Rapp"},
    {"round":4,"pick":8,"overall":32,"player":"DeSean Jackson","nflTeam":"Phi","position":"WR","fantasyTeam":"Arian Brotherhood","owner":"Tyler Cummings"},
    {"round":5,"pick":1,"overall":33,"player":"Antonio Gates","nflTeam":"SD","position":"TE","fantasyTeam":"Arian Brotherhood","owner":"Tyler Cummings"},
    {"round":5,"pick":2,"overall":34,"player":"Steelers D/ST","nflTeam":"Pit","position":"D/ST","fantasyTeam":"The Last of the Mehicans","owner":"Luke Rapp"},
    {"round":5,"pick":3,"overall":35,"player":"Dallas Clark","nflTeam":"Ind","position":"TE","fantasyTeam":"The Hulk","owner":"Zachary Sizemore"},
    {"round":5,"pick":4,"overall":36,"player":"Frank Gore","nflTeam":"SF","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":5,"pick":5,"overall":37,"player":"Packers D/ST","nflTeam":"GB","position":"D/ST","fantasyTeam":"Rookie Sensations","owner":"George Wright"},
    {"round":5,"pick":6,"overall":38,"player":"Dez Bryant","nflTeam":"Dal","position":"WR","fantasyTeam":"Greatest Show On Turf","owner":"Tyler Clay"},
    {"round":5,"pick":7,"overall":39,"player":"Brandon Lloyd","nflTeam":"StL","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":5,"pick":8,"overall":40,"player":"Mike Williams","nflTeam":"TB","position":"WR","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":6,"pick":1,"overall":41,"player":"Ravens D/ST","nflTeam":"Bal","position":"D/ST","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":6,"pick":2,"overall":42,"player":"Eagles D/ST","nflTeam":"Phi","position":"D/ST","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":6,"pick":3,"overall":43,"player":"Jason Witten","nflTeam":"Dal","position":"TE","fantasyTeam":"Greatest Show On Turf","owner":"Tyler Clay"},
    {"round":6,"pick":4,"overall":44,"player":"Jermichael Finley","nflTeam":"GB","position":"TE","fantasyTeam":"Rookie Sensations","owner":"George Wright"},
    {"round":6,"pick":5,"overall":45,"player":"Darren McFadden","nflTeam":"Oak","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":6,"pick":6,"overall":46,"player":"Jets D/ST","nflTeam":"NYJ","position":"D/ST","fantasyTeam":"The Hulk","owner":"Zachary Sizemore"},
    {"round":6,"pick":7,"overall":47,"player":"Wes Welker","nflTeam":"NE","position":"WR","fantasyTeam":"The Last of the Mehicans","owner":"Luke Rapp"},
    {"round":6,"pick":8,"overall":48,"player":"Santonio Holmes","nflTeam":"NYJ","position":"WR","fantasyTeam":"Arian Brotherhood","owner":"Tyler Cummings"},
    {"round":7,"pick":1,"overall":49,"player":"Bears D/ST","nflTeam":"Chi","position":"D/ST","fantasyTeam":"Arian Brotherhood","owner":"Tyler Cummings"},
    {"round":7,"pick":2,"overall":50,"player":"Steven Jackson","nflTeam":"StL","position":"RB","fantasyTeam":"The Last of the Mehicans","owner":"Luke Rapp"},
    {"round":7,"pick":3,"overall":51,"player":"Ahmad Bradshaw","nflTeam":"NYG","position":"RB","fantasyTeam":"The Hulk","owner":"Zachary Sizemore"},
    {"round":7,"pick":4,"overall":52,"player":"Jeremy Maclin","nflTeam":"Phi","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":7,"pick":5,"overall":53,"player":"Cedric Benson","nflTeam":"Cin","position":"RB","fantasyTeam":"Rookie Sensations","owner":"George Wright"},
    {"round":7,"pick":6,"overall":54,"player":"LeGarrette Blount","nflTeam":"TB","position":"RB","fantasyTeam":"Greatest Show On Turf","owner":"Tyler Clay"},
    {"round":7,"pick":7,"overall":55,"player":"BenJarvus Green-Ellis","nflTeam":"NE","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":7,"pick":8,"overall":56,"player":"Jahvid Best","nflTeam":"Det","position":"RB","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":8,"pick":1,"overall":57,"player":"Mario Manningham","nflTeam":"NYG","position":"WR","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":8,"pick":2,"overall":58,"player":"Vernon Davis","nflTeam":"SF","position":"TE","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":8,"pick":3,"overall":59,"player":"Chad Ochocinco","nflTeam":"NE","position":"WR","fantasyTeam":"Greatest Show On Turf","owner":"Tyler Clay"},
    {"round":8,"pick":4,"overall":60,"player":"Mark Ingram","nflTeam":"NO","position":"RB","fantasyTeam":"Rookie Sensations","owner":"George Wright"},
    {"round":8,"pick":5,"overall":61,"player":"DeAngelo Williams","nflTeam":"Car","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":8,"pick":6,"overall":62,"player":"Ryan Mathews","nflTeam":"SD","position":"RB","fantasyTeam":"The Hulk","owner":"Zachary Sizemore"},
    {"round":8,"pick":7,"overall":63,"player":"Felix Jones","nflTeam":"Dal","position":"RB","fantasyTeam":"The Last of the Mehicans","owner":"Luke Rapp"},
    {"round":8,"pick":8,"overall":64,"player":"Michael Crabtree","nflTeam":"SF","position":"WR","fantasyTeam":"Arian Brotherhood","owner":"Tyler Cummings"},
    {"round":9,"pick":1,"overall":65,"player":"Kenny Britt","nflTeam":"Ten","position":"WR","fantasyTeam":"Arian Brotherhood","owner":"Tyler Cummings"},
    {"round":9,"pick":2,"overall":66,"player":"Anquan Boldin","nflTeam":"Bal","position":"WR","fantasyTeam":"The Last of the Mehicans","owner":"Luke Rapp"},
    {"round":9,"pick":3,"overall":67,"player":"Steve Johnson","nflTeam":"Buf","position":"WR","fantasyTeam":"The Hulk","owner":"Zachary Sizemore"},
    {"round":9,"pick":4,"overall":68,"player":"Brandon Marshall","nflTeam":"Mia","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":9,"pick":5,"overall":69,"player":"Austin Collie","nflTeam":"Ind","position":"WR","fantasyTeam":"Rookie Sensations","owner":"George Wright"},
    {"round":9,"pick":6,"overall":70,"player":"Patriots D/ST","nflTeam":"NE","position":"D/ST","fantasyTeam":"Greatest Show On Turf","owner":"Tyler Clay"},
    {"round":9,"pick":7,"overall":71,"player":"James Starks","nflTeam":"GB","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":9,"pick":8,"overall":72,"player":"Chris Cooley","nflTeam":"Wsh","position":"TE","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":10,"pick":1,"overall":73,"player":"A.J. Green","nflTeam":"Cin","position":"WR","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":10,"pick":2,"overall":74,"player":"Ben Roethlisberger","nflTeam":"Pit","position":"QB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":10,"pick":3,"overall":75,"player":"Percy Harvin","nflTeam":"Min","position":"WR","fantasyTeam":"Greatest Show On Turf","owner":"Tyler Clay"},
    {"round":10,"pick":4,"overall":76,"player":"Santana Moss","nflTeam":"Wsh","position":"WR","fantasyTeam":"Rookie Sensations","owner":"George Wright"},
    {"round":10,"pick":5,"overall":77,"player":"Knowshon Moreno","nflTeam":"Den","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":10,"pick":6,"overall":78,"player":"Pierre Garcon","nflTeam":"Ind","position":"WR","fantasyTeam":"The Hulk","owner":"Zachary Sizemore"},
    {"round":10,"pick":7,"overall":79,"player":"Julio Jones","nflTeam":"Atl","position":"WR","fantasyTeam":"The Last of the Mehicans","owner":"Luke Rapp"},
    {"round":10,"pick":8,"overall":80,"player":"Steve Smith","nflTeam":"Car","position":"WR","fantasyTeam":"Arian Brotherhood","owner":"Tyler Cummings"},
    {"round":11,"pick":1,"overall":81,"player":"Jonathan Stewart","nflTeam":"Car","position":"RB","fantasyTeam":"Arian Brotherhood","owner":"Tyler Cummings"},
    {"round":11,"pick":2,"overall":82,"player":"Eddie Royal","nflTeam":"Den","position":"WR","fantasyTeam":"The Last of the Mehicans","owner":"Luke Rapp"},
    {"round":11,"pick":3,"overall":83,"player":"Joe Flacco","nflTeam":"Bal","position":"QB","fantasyTeam":"The Hulk","owner":"Zachary Sizemore"},
    {"round":11,"pick":4,"overall":84,"player":"Shonn Greene","nflTeam":"NYJ","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":11,"pick":5,"overall":85,"player":"Fred Jackson","nflTeam":"Buf","position":"RB","fantasyTeam":"Rookie Sensations","owner":"George Wright"},
    {"round":11,"pick":6,"overall":86,"player":"Ryan Grant","nflTeam":"GB","position":"RB","fantasyTeam":"Greatest Show On Turf","owner":"Tyler Clay"},
    {"round":11,"pick":7,"overall":87,"player":"Marshawn Lynch","nflTeam":"Sea","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":11,"pick":8,"overall":88,"player":"Mohamed Massaquoi","nflTeam":"Cle","position":"WR","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":12,"pick":1,"overall":89,"player":"Matt Cassel","nflTeam":"KC","position":"QB","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":12,"pick":2,"overall":90,"player":"Neil Rackers","nflTeam":"Hou","position":"K","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":12,"pick":3,"overall":91,"player":"Tony Romo","nflTeam":"Dal","position":"QB","fantasyTeam":"Greatest Show On Turf","owner":"Tyler Clay"},
    {"round":12,"pick":4,"overall":92,"player":"Jimmy Graham","nflTeam":"NO","position":"TE","fantasyTeam":"Rookie Sensations","owner":"George Wright"},
    {"round":12,"pick":5,"overall":93,"player":"Owen Daniels","nflTeam":"Hou","position":"TE","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":12,"pick":6,"overall":94,"player":"Nate Kaeding","nflTeam":"SD","position":"K","fantasyTeam":"The Hulk","owner":"Zachary Sizemore"},
    {"round":12,"pick":7,"overall":95,"player":"Josh Freeman","nflTeam":"TB","position":"QB","fantasyTeam":"The Last of the Mehicans","owner":"Luke Rapp"},
    {"round":12,"pick":8,"overall":96,"player":"Eli Manning","nflTeam":"NYG","position":"QB","fantasyTeam":"Arian Brotherhood","owner":"Tyler Cummings"},
    {"round":13,"pick":1,"overall":97,"player":"Mason Crosby","nflTeam":"GB","position":"K","fantasyTeam":"Arian Brotherhood","owner":"Tyler Cummings"},
    {"round":13,"pick":2,"overall":98,"player":"Marcedes Lewis","nflTeam":"Jac","position":"TE","fantasyTeam":"The Last of the Mehicans","owner":"Luke Rapp"},
    {"round":13,"pick":3,"overall":99,"player":"C.J. Spiller","nflTeam":"Buf","position":"RB","fantasyTeam":"The Hulk","owner":"Zachary Sizemore"},
    {"round":13,"pick":4,"overall":100,"player":"Josh Brown","nflTeam":"StL","position":"K","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":13,"pick":5,"overall":101,"player":"Matthew Stafford","nflTeam":"Det","position":"QB","fantasyTeam":"Rookie Sensations","owner":"George Wright"},
    {"round":13,"pick":6,"overall":102,"player":"Sidney Rice","nflTeam":"Sea","position":"WR","fantasyTeam":"Greatest Show On Turf","owner":"Tyler Clay"},
    {"round":13,"pick":7,"overall":103,"player":"Braylon Edwards","nflTeam":"SF","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":13,"pick":8,"overall":104,"player":"Ryan Torain","nflTeam":"Wsh","position":"RB","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":14,"pick":1,"overall":105,"player":"Dustin Keller","nflTeam":"NYJ","position":"TE","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":14,"pick":2,"overall":106,"player":"Sam Bradford","nflTeam":"StL","position":"QB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":14,"pick":3,"overall":107,"player":"Kevin Kolb","nflTeam":"Ari","position":"QB","fantasyTeam":"Greatest Show On Turf","owner":"Tyler Clay"},
    {"round":14,"pick":4,"overall":108,"player":"Jay Feely","nflTeam":"Ari","position":"K","fantasyTeam":"Rookie Sensations","owner":"George Wright"},
    {"round":14,"pick":5,"overall":109,"player":"Mark Sanchez","nflTeam":"NYJ","position":"QB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":14,"pick":6,"overall":110,"player":"Johnny Knox","nflTeam":"Chi","position":"WR","fantasyTeam":"The Hulk","owner":"Zachary Sizemore"},
    {"round":14,"pick":7,"overall":111,"player":"Beanie Wells","nflTeam":"Ari","position":"RB","fantasyTeam":"The Last of the Mehicans","owner":"Luke Rapp"},
    {"round":14,"pick":8,"overall":112,"player":"Malcom Floyd","nflTeam":"SD","position":"WR","fantasyTeam":"Arian Brotherhood","owner":"Tyler Cummings"},
    {"round":15,"pick":1,"overall":113,"player":"Kellen Winslow","nflTeam":"TB","position":"TE","fantasyTeam":"Arian Brotherhood","owner":"Tyler Cummings"},
    {"round":15,"pick":2,"overall":114,"player":"Rob Bironas","nflTeam":"Ten","position":"K","fantasyTeam":"The Last of the Mehicans","owner":"Luke Rapp"},
    {"round":15,"pick":3,"overall":115,"player":"Brandon Pettigrew","nflTeam":"Det","position":"TE","fantasyTeam":"The Hulk","owner":"Zachary Sizemore"},
    {"round":15,"pick":4,"overall":116,"player":"Falcons D/ST","nflTeam":"Atl","position":"D/ST","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":15,"pick":5,"overall":117,"player":"Jordy Nelson","nflTeam":"GB","position":"WR","fantasyTeam":"Rookie Sensations","owner":"George Wright"},
    {"round":15,"pick":6,"overall":118,"player":"Lions D/ST","nflTeam":"Det","position":"D/ST","fantasyTeam":"Greatest Show On Turf","owner":"Tyler Clay"},
    {"round":15,"pick":7,"overall":119,"player":"Tony Gonzalez","nflTeam":"Atl","position":"TE","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":15,"pick":8,"overall":120,"player":"Billy Cundiff","nflTeam":"Bal","position":"K","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":16,"pick":1,"overall":121,"player":"Hines Ward","nflTeam":"Pit","position":"WR","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":16,"pick":2,"overall":122,"player":"Tim Tebow","nflTeam":"Den","position":"QB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":16,"pick":3,"overall":123,"player":"Stephen Gostkowski","nflTeam":"NE","position":"K","fantasyTeam":"Greatest Show On Turf","owner":"Tyler Clay"},
    {"round":16,"pick":4,"overall":124,"player":"Brandon Jacobs","nflTeam":"NYG","position":"RB","fantasyTeam":"Rookie Sensations","owner":"George Wright"},
    {"round":16,"pick":5,"overall":125,"player":"Plaxico Burress","nflTeam":"NYJ","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":16,"pick":6,"overall":126,"player":"LaDainian Tomlinson","nflTeam":"NYJ","position":"RB","fantasyTeam":"The Hulk","owner":"Zachary Sizemore"},
    {"round":16,"pick":7,"overall":127,"player":"Zach Miller","nflTeam":"Sea","position":"TE","fantasyTeam":"The Last of the Mehicans","owner":"Luke Rapp"},
    {"round":16,"pick":8,"overall":128,"player":"Joseph Addai","nflTeam":"Ind","position":"RB","fantasyTeam":"Arian Brotherhood","owner":"Tyler Cummings"}
  ],
  "2012": [
    {"round":1,"pick":1,"overall":1,"player":"Aaron Rodgers","nflTeam":"GB","position":"QB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":1,"pick":2,"overall":2,"player":"Tom Brady","nflTeam":"NE","position":"QB","fantasyTeam":"Brady's Bunch","owner":"Tyler Cummings"},
    {"round":1,"pick":3,"overall":3,"player":"Arian Foster","nflTeam":"Hou","position":"RB","fantasyTeam":"Rookie Sensations","owner":"George Wright"},
    {"round":1,"pick":4,"overall":4,"player":"Drew Brees","nflTeam":"NO","position":"QB","fantasyTeam":"The Hulk","owner":"Zachary Sizemore"},
    {"round":1,"pick":5,"overall":5,"player":"Cam Newton","nflTeam":"Car","position":"QB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":1,"pick":6,"overall":6,"player":"Ray Rice","nflTeam":"Bal","position":"RB","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":1,"pick":7,"overall":7,"player":"Matthew Stafford","nflTeam":"Det","position":"QB","fantasyTeam":"The 5 Star Stunnas","owner":"Joseph Garton"},
    {"round":1,"pick":8,"overall":8,"player":"LeSean McCoy","nflTeam":"Phi","position":"RB","fantasyTeam":"Greatest Show On Turf","owner":"Tyler Clay"},
    {"round":1,"pick":9,"overall":9,"player":"Calvin Johnson","nflTeam":"Det","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":1,"pick":10,"overall":10,"player":"Maurice Jones-Drew","nflTeam":"Jac","position":"RB","fantasyTeam":"The Last of the Meheecans","owner":"Luke Rapp"},
    {"round":2,"pick":1,"overall":11,"player":"Andre Johnson","nflTeam":"Hou","position":"WR","fantasyTeam":"The Last of the Meheecans","owner":"Luke Rapp"},
    {"round":2,"pick":2,"overall":12,"player":"Chris Johnson","nflTeam":"Ten","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":2,"pick":3,"overall":13,"player":"Rob Gronkowski","nflTeam":"NE","position":"TE","fantasyTeam":"Greatest Show On Turf","owner":"Tyler Clay"},
    {"round":2,"pick":4,"overall":14,"player":"Larry Fitzgerald","nflTeam":"Ari","position":"WR","fantasyTeam":"The 5 Star Stunnas","owner":"Joseph Garton"},
    {"round":2,"pick":5,"overall":15,"player":"Peyton Manning","nflTeam":"Den","position":"QB","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":2,"pick":6,"overall":16,"player":"Greg Jennings","nflTeam":"GB","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":2,"pick":7,"overall":17,"player":"Marshawn Lynch","nflTeam":"Sea","position":"RB","fantasyTeam":"The Hulk","owner":"Zachary Sizemore"},
    {"round":2,"pick":8,"overall":18,"player":"Roddy White","nflTeam":"Atl","position":"WR","fantasyTeam":"Rookie Sensations","owner":"George Wright"},
    {"round":2,"pick":9,"overall":19,"player":"Matt Forte","nflTeam":"Chi","position":"RB","fantasyTeam":"Brady's Bunch","owner":"Tyler Cummings"},
    {"round":2,"pick":10,"overall":20,"player":"Jimmy Graham","nflTeam":"NO","position":"TE","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":3,"pick":1,"overall":21,"player":"DeMarco Murray","nflTeam":"Dal","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":3,"pick":2,"overall":22,"player":"Wes Welker","nflTeam":"NE","position":"WR","fantasyTeam":"Brady's Bunch","owner":"Tyler Cummings"},
    {"round":3,"pick":3,"overall":23,"player":"Mike Wallace","nflTeam":"Pit","position":"WR","fantasyTeam":"Rookie Sensations","owner":"George Wright"},
    {"round":3,"pick":4,"overall":24,"player":"A.J. Green","nflTeam":"Cin","position":"WR","fantasyTeam":"The Hulk","owner":"Zachary Sizemore"},
    {"round":3,"pick":5,"overall":25,"player":"Jamaal Charles","nflTeam":"KC","position":"RB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":3,"pick":6,"overall":26,"player":"Steve Smith","nflTeam":"Car","position":"WR","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":3,"pick":7,"overall":27,"player":"Dez Bryant","nflTeam":"Dal","position":"WR","fantasyTeam":"The 5 Star Stunnas","owner":"Joseph Garton"},
    {"round":3,"pick":8,"overall":28,"player":"Eli Manning","nflTeam":"NYG","position":"QB","fantasyTeam":"Greatest Show On Turf","owner":"Tyler Clay"},
    {"round":3,"pick":9,"overall":29,"player":"Adrian Peterson","nflTeam":"Min","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":3,"pick":10,"overall":30,"player":"Darren McFadden","nflTeam":"Oak","position":"RB","fantasyTeam":"The Last of the Meheecans","owner":"Luke Rapp"},
    {"round":4,"pick":1,"overall":31,"player":"Michael Vick","nflTeam":"Phi","position":"QB","fantasyTeam":"The Last of the Meheecans","owner":"Luke Rapp"},
    {"round":4,"pick":2,"overall":32,"player":"Hakeem Nicks","nflTeam":"NYG","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":4,"pick":3,"overall":33,"player":"Victor Cruz","nflTeam":"NYG","position":"WR","fantasyTeam":"Greatest Show On Turf","owner":"Tyler Clay"},
    {"round":4,"pick":4,"overall":34,"player":"Jordy Nelson","nflTeam":"GB","position":"WR","fantasyTeam":"The 5 Star Stunnas","owner":"Joseph Garton"},
    {"round":4,"pick":5,"overall":35,"player":"Frank Gore","nflTeam":"SF","position":"RB","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":4,"pick":6,"overall":36,"player":"Steven Jackson","nflTeam":"StL","position":"RB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":4,"pick":7,"overall":37,"player":"Michael Turner","nflTeam":"Atl","position":"RB","fantasyTeam":"The Hulk","owner":"Zachary Sizemore"},
    {"round":4,"pick":8,"overall":38,"player":"Ryan Mathews","nflTeam":"SD","position":"RB","fantasyTeam":"Rookie Sensations","owner":"George Wright"},
    {"round":4,"pick":9,"overall":39,"player":"Fred Jackson","nflTeam":"Buf","position":"RB","fantasyTeam":"Brady's Bunch","owner":"Tyler Cummings"},
    {"round":4,"pick":10,"overall":40,"player":"Julio Jones","nflTeam":"Atl","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":5,"pick":1,"overall":41,"player":"Trent Richardson","nflTeam":"Cle","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":5,"pick":2,"overall":42,"player":"Ahmad Bradshaw","nflTeam":"NYG","position":"RB","fantasyTeam":"Brady's Bunch","owner":"Tyler Cummings"},
    {"round":5,"pick":3,"overall":43,"player":"Brandon Marshall","nflTeam":"Chi","position":"WR","fantasyTeam":"Rookie Sensations","owner":"George Wright"},
    {"round":5,"pick":4,"overall":44,"player":"Darren Sproles","nflTeam":"NO","position":"RB","fantasyTeam":"The Hulk","owner":"Zachary Sizemore"},
    {"round":5,"pick":5,"overall":45,"player":"Marques Colston","nflTeam":"NO","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":5,"pick":6,"overall":46,"player":"Eric Decker","nflTeam":"Den","position":"WR","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":5,"pick":7,"overall":47,"player":"Reggie Bush","nflTeam":"Mia","position":"RB","fantasyTeam":"The 5 Star Stunnas","owner":"Joseph Garton"},
    {"round":5,"pick":8,"overall":48,"player":"Dwayne Bowe","nflTeam":"KC","position":"WR","fantasyTeam":"Greatest Show On Turf","owner":"Tyler Clay"},
    {"round":5,"pick":9,"overall":49,"player":"Antonio Gates","nflTeam":"SD","position":"TE","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":5,"pick":10,"overall":50,"player":"Percy Harvin","nflTeam":"Min","position":"WR","fantasyTeam":"The Last of the Meheecans","owner":"Luke Rapp"},
    {"round":6,"pick":1,"overall":51,"player":"Jermichael Finley","nflTeam":"GB","position":"TE","fantasyTeam":"The Last of the Meheecans","owner":"Luke Rapp"},
    {"round":6,"pick":2,"overall":52,"player":"Tony Romo","nflTeam":"Dal","position":"QB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":6,"pick":3,"overall":53,"player":"Stevan Ridley","nflTeam":"NE","position":"RB","fantasyTeam":"Greatest Show On Turf","owner":"Tyler Clay"},
    {"round":6,"pick":4,"overall":54,"player":"Willis McGahee","nflTeam":"Den","position":"RB","fantasyTeam":"The 5 Star Stunnas","owner":"Joseph Garton"},
    {"round":6,"pick":5,"overall":55,"player":"Vernon Davis","nflTeam":"SF","position":"TE","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":6,"pick":6,"overall":56,"player":"Vincent Jackson","nflTeam":"TB","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":6,"pick":7,"overall":57,"player":"Jeremy Maclin","nflTeam":"Phi","position":"WR","fantasyTeam":"The Hulk","owner":"Zachary Sizemore"},
    {"round":6,"pick":8,"overall":58,"player":"Brandon Lloyd","nflTeam":"NE","position":"WR","fantasyTeam":"Rookie Sensations","owner":"George Wright"},
    {"round":6,"pick":9,"overall":59,"player":"Miles Austin","nflTeam":"Dal","position":"WR","fantasyTeam":"Brady's Bunch","owner":"Tyler Cummings"},
    {"round":6,"pick":10,"overall":60,"player":"BenJarvus Green-Ellis","nflTeam":"Cin","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":7,"pick":1,"overall":61,"player":"Demaryius Thomas","nflTeam":"Den","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":7,"pick":2,"overall":62,"player":"Antonio Brown","nflTeam":"Pit","position":"WR","fantasyTeam":"Brady's Bunch","owner":"Tyler Cummings"},
    {"round":7,"pick":3,"overall":63,"player":"Philip Rivers","nflTeam":"SD","position":"QB","fantasyTeam":"Rookie Sensations","owner":"George Wright"},
    {"round":7,"pick":4,"overall":64,"player":"Jason Witten","nflTeam":"Dal","position":"TE","fantasyTeam":"The Hulk","owner":"Zachary Sizemore"},
    {"round":7,"pick":5,"overall":65,"player":"Aaron Hernandez","nflTeam":"NE","position":"TE","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":7,"pick":6,"overall":66,"player":"Torrey Smith","nflTeam":"Bal","position":"WR","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":7,"pick":7,"overall":67,"player":"Jermaine Gresham","nflTeam":"Cin","position":"TE","fantasyTeam":"The 5 Star Stunnas","owner":"Joseph Garton"},
    {"round":7,"pick":8,"overall":68,"player":"Beanie Wells","nflTeam":"Ari","position":"RB","fantasyTeam":"Greatest Show On Turf","owner":"Tyler Clay"},
    {"round":7,"pick":9,"overall":69,"player":"49ers D/ST","nflTeam":"SF","position":"D/ST","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":7,"pick":10,"overall":70,"player":"Shonn Greene","nflTeam":"NYJ","position":"RB","fantasyTeam":"The Last of the Meheecans","owner":"Luke Rapp"},
    {"round":8,"pick":1,"overall":71,"player":"DeAngelo Williams","nflTeam":"Car","position":"RB","fantasyTeam":"The Last of the Meheecans","owner":"Luke Rapp"},
    {"round":8,"pick":2,"overall":72,"player":"Steve Johnson","nflTeam":"Buf","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":8,"pick":3,"overall":73,"player":"Matt Ryan","nflTeam":"Atl","position":"QB","fantasyTeam":"Greatest Show On Turf","owner":"Tyler Clay"},
    {"round":8,"pick":4,"overall":74,"player":"Alex Smith","nflTeam":"SF","position":"QB","fantasyTeam":"The 5 Star Stunnas","owner":"Joseph Garton"},
    {"round":8,"pick":5,"overall":75,"player":"Ravens D/ST","nflTeam":"Bal","position":"D/ST","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":8,"pick":6,"overall":76,"player":"Texans D/ST","nflTeam":"Hou","position":"D/ST","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":8,"pick":7,"overall":77,"player":"Bears D/ST","nflTeam":"Chi","position":"D/ST","fantasyTeam":"The Hulk","owner":"Zachary Sizemore"},
    {"round":8,"pick":8,"overall":78,"player":"Jonathan Stewart","nflTeam":"Car","position":"RB","fantasyTeam":"Rookie Sensations","owner":"George Wright"},
    {"round":8,"pick":9,"overall":79,"player":"DeSean Jackson","nflTeam":"Phi","position":"WR","fantasyTeam":"Brady's Bunch","owner":"Tyler Cummings"},
    {"round":8,"pick":10,"overall":80,"player":"Doug Martin","nflTeam":"TB","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":9,"pick":1,"overall":81,"player":"Pierre Garcon","nflTeam":"Wsh","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":9,"pick":2,"overall":82,"player":"Michael Bush","nflTeam":"Chi","position":"RB","fantasyTeam":"Brady's Bunch","owner":"Tyler Cummings"},
    {"round":9,"pick":3,"overall":83,"player":"Roy Helu","nflTeam":"Wsh","position":"RB","fantasyTeam":"Rookie Sensations","owner":"George Wright"},
    {"round":9,"pick":4,"overall":84,"player":"Kevin Smith","nflTeam":"Det","position":"RB","fantasyTeam":"The Hulk","owner":"Zachary Sizemore"},
    {"round":9,"pick":5,"overall":85,"player":"Ben Tate","nflTeam":"Hou","position":"RB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":9,"pick":6,"overall":86,"player":"Reggie Wayne","nflTeam":"Ind","position":"WR","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":9,"pick":7,"overall":87,"player":"Jets D/ST","nflTeam":"NYJ","position":"D/ST","fantasyTeam":"The 5 Star Stunnas","owner":"Joseph Garton"},
    {"round":9,"pick":8,"overall":88,"player":"Nate Washington","nflTeam":"Ten","position":"WR","fantasyTeam":"Greatest Show On Turf","owner":"Tyler Clay"},
    {"round":9,"pick":9,"overall":89,"player":"Robert Griffin III","nflTeam":"Wsh","position":"QB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":9,"pick":10,"overall":90,"player":"Peyton Hillis","nflTeam":"KC","position":"RB","fantasyTeam":"The Last of the Meheecans","owner":"Luke Rapp"},
    {"round":10,"pick":1,"overall":91,"player":"Eagles D/ST","nflTeam":"Phi","position":"D/ST","fantasyTeam":"The Last of the Meheecans","owner":"Luke Rapp"},
    {"round":10,"pick":2,"overall":92,"player":"Cedric Benson","nflTeam":"GB","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":10,"pick":3,"overall":93,"player":"Seahawks D/ST","nflTeam":"Sea","position":"D/ST","fantasyTeam":"Greatest Show On Turf","owner":"Tyler Clay"},
    {"round":10,"pick":4,"overall":94,"player":"Robert Meachem","nflTeam":"SD","position":"WR","fantasyTeam":"The 5 Star Stunnas","owner":"Joseph Garton"},
    {"round":10,"pick":5,"overall":95,"player":"Isaac Redman","nflTeam":"Pit","position":"RB","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":10,"pick":6,"overall":96,"player":"Anquan Boldin","nflTeam":"Bal","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":10,"pick":7,"overall":97,"player":"Denarius Moore","nflTeam":"Oak","position":"WR","fantasyTeam":"The Hulk","owner":"Zachary Sizemore"},
    {"round":10,"pick":8,"overall":98,"player":"C.J. Spiller","nflTeam":"Buf","position":"RB","fantasyTeam":"Rookie Sensations","owner":"George Wright"},
    {"round":10,"pick":9,"overall":99,"player":"Steelers D/ST","nflTeam":"Pit","position":"D/ST","fantasyTeam":"Brady's Bunch","owner":"Tyler Cummings"},
    {"round":10,"pick":10,"overall":100,"player":"Malcom Floyd","nflTeam":"SD","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":11,"pick":1,"overall":101,"player":"Mark Ingram","nflTeam":"NO","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":11,"pick":2,"overall":102,"player":"Tony Gonzalez","nflTeam":"Atl","position":"TE","fantasyTeam":"Brady's Bunch","owner":"Tyler Cummings"},
    {"round":11,"pick":3,"overall":103,"player":"Ben Roethlisberger","nflTeam":"Pit","position":"QB","fantasyTeam":"Rookie Sensations","owner":"George Wright"},
    {"round":11,"pick":4,"overall":104,"player":"Lance Moore","nflTeam":"NO","position":"WR","fantasyTeam":"The Hulk","owner":"Zachary Sizemore"},
    {"round":11,"pick":5,"overall":105,"player":"Santonio Holmes","nflTeam":"NYJ","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":11,"pick":6,"overall":106,"player":"Brandon Pettigrew","nflTeam":"Det","position":"TE","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":11,"pick":7,"overall":107,"player":"James Starks","nflTeam":"GB","position":"RB","fantasyTeam":"The 5 Star Stunnas","owner":"Joseph Garton"},
    {"round":11,"pick":8,"overall":108,"player":"Donald Brown","nflTeam":"Ind","position":"RB","fantasyTeam":"Greatest Show On Turf","owner":"Tyler Clay"},
    {"round":11,"pick":9,"overall":109,"player":"Stephen Gostkowski","nflTeam":"NE","position":"K","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":11,"pick":10,"overall":110,"player":"Titus Young","nflTeam":"Det","position":"WR","fantasyTeam":"The Last of the Meheecans","owner":"Luke Rapp"},
    {"round":12,"pick":1,"overall":111,"player":"Michael Crabtree","nflTeam":"SF","position":"WR","fantasyTeam":"The Last of the Meheecans","owner":"Luke Rapp"},
    {"round":12,"pick":2,"overall":112,"player":"Darrius Heyward-Bey","nflTeam":"Oak","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":12,"pick":3,"overall":113,"player":"Justin Blackmon","nflTeam":"Jac","position":"WR","fantasyTeam":"Greatest Show On Turf","owner":"Tyler Clay"},
    {"round":12,"pick":4,"overall":114,"player":"Randy Moss","nflTeam":"SF","position":"WR","fantasyTeam":"The 5 Star Stunnas","owner":"Joseph Garton"},
    {"round":12,"pick":5,"overall":115,"player":"Andrew Luck","nflTeam":"Ind","position":"QB","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":12,"pick":6,"overall":116,"player":"Joe Flacco","nflTeam":"Bal","position":"QB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":12,"pick":7,"overall":117,"player":"Mason Crosby","nflTeam":"GB","position":"K","fantasyTeam":"The Hulk","owner":"Zachary Sizemore"},
    {"round":12,"pick":8,"overall":118,"player":"Matt Schaub","nflTeam":"Hou","position":"QB","fantasyTeam":"Rookie Sensations","owner":"George Wright"},
    {"round":12,"pick":9,"overall":119,"player":"Andy Dalton","nflTeam":"Cin","position":"QB","fantasyTeam":"Brady's Bunch","owner":"Tyler Cummings"},
    {"round":12,"pick":10,"overall":120,"player":"Kenny Britt","nflTeam":"Ten","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":13,"pick":1,"overall":121,"player":"David Wilson","nflTeam":"NYG","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":13,"pick":2,"overall":122,"player":"Lions D/ST","nflTeam":"Det","position":"D/ST","fantasyTeam":"Brady's Bunch","owner":"Tyler Cummings"},
    {"round":13,"pick":3,"overall":123,"player":"Fred Davis","nflTeam":"Wsh","position":"TE","fantasyTeam":"Rookie Sensations","owner":"George Wright"},
    {"round":13,"pick":4,"overall":124,"player":"LeGarrette Blount","nflTeam":"TB","position":"RB","fantasyTeam":"The Hulk","owner":"Zachary Sizemore"},
    {"round":13,"pick":5,"overall":125,"player":"David Akers","nflTeam":"SF","position":"K","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":13,"pick":6,"overall":126,"player":"Sebastian Janikowski","nflTeam":"Oak","position":"K","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":13,"pick":7,"overall":127,"player":"Brent Celek","nflTeam":"Phi","position":"TE","fantasyTeam":"The 5 Star Stunnas","owner":"Joseph Garton"},
    {"round":13,"pick":8,"overall":128,"player":"Jacob Tamme","nflTeam":"Den","position":"TE","fantasyTeam":"Greatest Show On Turf","owner":"Tyler Clay"},
    {"round":13,"pick":9,"overall":129,"player":"Owen Daniels","nflTeam":"Hou","position":"TE","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":13,"pick":10,"overall":130,"player":"Jay Cutler","nflTeam":"Chi","position":"QB","fantasyTeam":"The Last of the Meheecans","owner":"Luke Rapp"},
    {"round":14,"pick":1,"overall":131,"player":"Dan Bailey","nflTeam":"Dal","position":"K","fantasyTeam":"The Last of the Meheecans","owner":"Luke Rapp"},
    {"round":14,"pick":2,"overall":132,"player":"Falcons D/ST","nflTeam":"Atl","position":"D/ST","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":14,"pick":3,"overall":133,"player":"Rashad Jennings","nflTeam":"Jac","position":"RB","fantasyTeam":"Greatest Show On Turf","owner":"Tyler Clay"},
    {"round":14,"pick":4,"overall":134,"player":"Garrett Hartley","nflTeam":"NO","position":"K","fantasyTeam":"The 5 Star Stunnas","owner":"Joseph Garton"},
    {"round":14,"pick":5,"overall":135,"player":"Kellen Winslow","nflTeam":"FA","position":"TE","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":14,"pick":6,"overall":136,"player":"Pierre Thomas","nflTeam":"NO","position":"RB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":14,"pick":7,"overall":137,"player":"Russell Wilson","nflTeam":"Sea","position":"QB","fantasyTeam":"The Hulk","owner":"Zachary Sizemore"},
    {"round":14,"pick":8,"overall":138,"player":"Alex Henery","nflTeam":"Phi","position":"K","fantasyTeam":"Rookie Sensations","owner":"George Wright"},
    {"round":14,"pick":9,"overall":139,"player":"Ryan Fitzpatrick","nflTeam":"Buf","position":"QB","fantasyTeam":"Brady's Bunch","owner":"Tyler Cummings"},
    {"round":14,"pick":10,"overall":140,"player":"Packers D/ST","nflTeam":"GB","position":"D/ST","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":15,"pick":1,"overall":141,"player":"Rob Bironas","nflTeam":"Ten","position":"K","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":15,"pick":2,"overall":142,"player":"Matt Prater","nflTeam":"Den","position":"K","fantasyTeam":"Brady's Bunch","owner":"Tyler Cummings"},
    {"round":15,"pick":3,"overall":143,"player":"Bills D/ST","nflTeam":"Buf","position":"D/ST","fantasyTeam":"Rookie Sensations","owner":"George Wright"},
    {"round":15,"pick":4,"overall":144,"player":"Carson Palmer","nflTeam":"Oak","position":"QB","fantasyTeam":"The Hulk","owner":"Zachary Sizemore"},
    {"round":15,"pick":5,"overall":145,"player":"Jared Cook","nflTeam":"Ten","position":"TE","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":15,"pick":6,"overall":146,"player":"Laurent Robinson","nflTeam":"Jac","position":"WR","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":15,"pick":7,"overall":147,"player":"Randall Cobb","nflTeam":"GB","position":"WR","fantasyTeam":"The 5 Star Stunnas","owner":"Joseph Garton"},
    {"round":15,"pick":8,"overall":148,"player":"Matt Bryant","nflTeam":"Atl","position":"K","fantasyTeam":"Greatest Show On Turf","owner":"Tyler Clay"},
    {"round":15,"pick":9,"overall":149,"player":"Toby Gerhart","nflTeam":"Min","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":15,"pick":10,"overall":150,"player":"Kendall Wright","nflTeam":"Ten","position":"WR","fantasyTeam":"The Last of the Meheecans","owner":"Luke Rapp"}
  ],
  "2013": [
    {"round":1,"pick":1,"overall":1,"player":"Adrian Peterson","nflTeam":"Min","position":"RB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":1,"pick":2,"overall":2,"player":"Doug Martin","nflTeam":"TB","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":1,"pick":3,"overall":3,"player":"Arian Foster","nflTeam":"Hou","position":"RB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":1,"pick":4,"overall":4,"player":"Marshawn Lynch","nflTeam":"Sea","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":1,"pick":5,"overall":5,"player":"Ray Rice","nflTeam":"Bal","position":"RB","fantasyTeam":"When's Fantasy Baseball?","owner":"Zachary Sizemore"},
    {"round":1,"pick":6,"overall":6,"player":"Calvin Johnson","nflTeam":"Det","position":"WR","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":1,"pick":7,"overall":7,"player":"Jamaal Charles","nflTeam":"KC","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":1,"pick":8,"overall":8,"player":"Trent Richardson","nflTeam":"Ind","position":"RB","fantasyTeam":"Rookie Sensations","owner":"George Wright"},
    {"round":1,"pick":9,"overall":9,"player":"Alfred Morris","nflTeam":"Wsh","position":"RB","fantasyTeam":"Boston TE Party","owner":"Tyler Cummings"},
    {"round":1,"pick":10,"overall":10,"player":"Aaron Rodgers","nflTeam":"GB","position":"QB","fantasyTeam":"Not Soon Enough","owner":"Joseph Garton"},
    {"round":2,"pick":1,"overall":11,"player":"C.J. Spiller","nflTeam":"Buf","position":"RB","fantasyTeam":"Not Soon Enough","owner":"Joseph Garton"},
    {"round":2,"pick":2,"overall":12,"player":"LeSean McCoy","nflTeam":"Phi","position":"RB","fantasyTeam":"Boston TE Party","owner":"Tyler Cummings"},
    {"round":2,"pick":3,"overall":13,"player":"Drew Brees","nflTeam":"NO","position":"QB","fantasyTeam":"Rookie Sensations","owner":"George Wright"},
    {"round":2,"pick":4,"overall":14,"player":"A.J. Green","nflTeam":"Cin","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":2,"pick":5,"overall":15,"player":"Matt Forte","nflTeam":"Chi","position":"RB","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":2,"pick":6,"overall":16,"player":"Steven Jackson","nflTeam":"Atl","position":"RB","fantasyTeam":"When's Fantasy Baseball?","owner":"Zachary Sizemore"},
    {"round":2,"pick":7,"overall":17,"player":"Dez Bryant","nflTeam":"Dal","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":2,"pick":8,"overall":18,"player":"Julio Jones","nflTeam":"Atl","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":2,"pick":9,"overall":19,"player":"Stevan Ridley","nflTeam":"NE","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":2,"pick":10,"overall":20,"player":"Brandon Marshall","nflTeam":"Chi","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":3,"pick":1,"overall":21,"player":"Peyton Manning","nflTeam":"Den","position":"QB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":3,"pick":2,"overall":22,"player":"Cam Newton","nflTeam":"Car","position":"QB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":3,"pick":3,"overall":23,"player":"Tom Brady","nflTeam":"NE","position":"QB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":3,"pick":4,"overall":24,"player":"Frank Gore","nflTeam":"SF","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":3,"pick":5,"overall":25,"player":"Chris Johnson","nflTeam":"NYJ","position":"RB","fantasyTeam":"When's Fantasy Baseball?","owner":"Zachary Sizemore"},
    {"round":3,"pick":6,"overall":26,"player":"Maurice Jones-Drew","nflTeam":"Oak","position":"RB","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":3,"pick":7,"overall":27,"player":"Demaryius Thomas","nflTeam":"Den","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":3,"pick":8,"overall":28,"player":"Roddy White","nflTeam":"Atl","position":"WR","fantasyTeam":"Rookie Sensations","owner":"George Wright"},
    {"round":3,"pick":9,"overall":29,"player":"Jimmy Graham","nflTeam":"NO","position":"TE","fantasyTeam":"Boston TE Party","owner":"Tyler Cummings"},
    {"round":3,"pick":10,"overall":30,"player":"Colin Kaepernick","nflTeam":"SF","position":"QB","fantasyTeam":"Not Soon Enough","owner":"Joseph Garton"},
    {"round":4,"pick":1,"overall":31,"player":"Andre Johnson","nflTeam":"Hou","position":"WR","fantasyTeam":"Not Soon Enough","owner":"Joseph Garton"},
    {"round":4,"pick":2,"overall":32,"player":"Randall Cobb","nflTeam":"GB","position":"WR","fantasyTeam":"Boston TE Party","owner":"Tyler Cummings"},
    {"round":4,"pick":3,"overall":33,"player":"Eddie Lacy","nflTeam":"GB","position":"RB","fantasyTeam":"Rookie Sensations","owner":"George Wright"},
    {"round":4,"pick":4,"overall":34,"player":"Matt Ryan","nflTeam":"Atl","position":"QB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":4,"pick":5,"overall":35,"player":"David Wilson","nflTeam":"NYG","position":"RB","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":4,"pick":6,"overall":36,"player":"Russell Wilson","nflTeam":"Sea","position":"QB","fantasyTeam":"When's Fantasy Baseball?","owner":"Zachary Sizemore"},
    {"round":4,"pick":7,"overall":37,"player":"Vincent Jackson","nflTeam":"TB","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":4,"pick":8,"overall":38,"player":"Victor Cruz","nflTeam":"NYG","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":4,"pick":9,"overall":39,"player":"Darren McFadden","nflTeam":"Oak","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":4,"pick":10,"overall":40,"player":"DeMarco Murray","nflTeam":"Dal","position":"RB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":5,"pick":1,"overall":41,"player":"Larry Fitzgerald","nflTeam":"Ari","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":5,"pick":2,"overall":42,"player":"Wes Welker","nflTeam":"Den","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":5,"pick":3,"overall":43,"player":"Reggie Bush","nflTeam":"Det","position":"RB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":5,"pick":4,"overall":44,"player":"Robert Griffin III","nflTeam":"Wsh","position":"QB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":5,"pick":5,"overall":45,"player":"Mike Wallace","nflTeam":"Mia","position":"WR","fantasyTeam":"When's Fantasy Baseball?","owner":"Zachary Sizemore"},
    {"round":5,"pick":6,"overall":46,"player":"Dwayne Bowe","nflTeam":"KC","position":"WR","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":5,"pick":7,"overall":47,"player":"Montee Ball","nflTeam":"Den","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":5,"pick":8,"overall":48,"player":"Tony Gonzalez","nflTeam":"Atl","position":"TE","fantasyTeam":"Rookie Sensations","owner":"George Wright"},
    {"round":5,"pick":9,"overall":49,"player":"Danny Amendola","nflTeam":"NE","position":"WR","fantasyTeam":"Boston TE Party","owner":"Tyler Cummings"},
    {"round":5,"pick":10,"overall":50,"player":"Ryan Mathews","nflTeam":"SD","position":"RB","fantasyTeam":"Not Soon Enough","owner":"Joseph Garton"},
    {"round":6,"pick":1,"overall":51,"player":"Hakeem Nicks","nflTeam":"Ind","position":"WR","fantasyTeam":"Not Soon Enough","owner":"Joseph Garton"},
    {"round":6,"pick":2,"overall":52,"player":"Rob Gronkowski","nflTeam":"NE","position":"TE","fantasyTeam":"Boston TE Party","owner":"Tyler Cummings"},
    {"round":6,"pick":3,"overall":53,"player":"Marques Colston","nflTeam":"NO","position":"WR","fantasyTeam":"Rookie Sensations","owner":"George Wright"},
    {"round":6,"pick":4,"overall":54,"player":"Darren Sproles","nflTeam":"Phi","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":6,"pick":5,"overall":55,"player":"Antonio Brown","nflTeam":"Pit","position":"WR","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":6,"pick":6,"overall":56,"player":"Eric Decker","nflTeam":"NYJ","position":"WR","fantasyTeam":"When's Fantasy Baseball?","owner":"Zachary Sizemore"},
    {"round":6,"pick":7,"overall":57,"player":"Lamar Miller","nflTeam":"Mia","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":6,"pick":8,"overall":58,"player":"Andrew Luck","nflTeam":"Ind","position":"QB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":6,"pick":9,"overall":59,"player":"Reggie Wayne","nflTeam":"Ind","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":6,"pick":10,"overall":60,"player":"Jason Witten","nflTeam":"Dal","position":"TE","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":7,"pick":1,"overall":61,"player":"Giovani Bernard","nflTeam":"Cin","position":"RB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":7,"pick":2,"overall":62,"player":"Chris Ivory","nflTeam":"NYJ","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":7,"pick":3,"overall":63,"player":"BenJarvus Green-Ellis","nflTeam":"Cin","position":"RB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":7,"pick":4,"overall":64,"player":"Tavon Austin","nflTeam":"StL","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":7,"pick":5,"overall":65,"player":"Vernon Davis","nflTeam":"SF","position":"TE","fantasyTeam":"When's Fantasy Baseball?","owner":"Zachary Sizemore"},
    {"round":7,"pick":6,"overall":66,"player":"James Jones","nflTeam":"Oak","position":"WR","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":7,"pick":7,"overall":67,"player":"Steve Smith","nflTeam":"Bal","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":7,"pick":8,"overall":68,"player":"Ahmad Bradshaw","nflTeam":"Ind","position":"RB","fantasyTeam":"Rookie Sensations","owner":"George Wright"},
    {"round":7,"pick":9,"overall":69,"player":"Pierre Garcon","nflTeam":"Wsh","position":"WR","fantasyTeam":"Boston TE Party","owner":"Tyler Cummings"},
    {"round":7,"pick":10,"overall":70,"player":"Rashard Mendenhall","nflTeam":"Ari","position":"RB","fantasyTeam":"Not Soon Enough","owner":"Joseph Garton"},
    {"round":8,"pick":1,"overall":71,"player":"Seahawks D/ST","nflTeam":"Sea","position":"D/ST","fantasyTeam":"Not Soon Enough","owner":"Joseph Garton"},
    {"round":8,"pick":2,"overall":72,"player":"Matthew Stafford","nflTeam":"Det","position":"QB","fantasyTeam":"Boston TE Party","owner":"Tyler Cummings"},
    {"round":8,"pick":3,"overall":73,"player":"DeSean Jackson","nflTeam":"Wsh","position":"WR","fantasyTeam":"Rookie Sensations","owner":"George Wright"},
    {"round":8,"pick":4,"overall":74,"player":"DeAngelo Williams","nflTeam":"Car","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":8,"pick":5,"overall":75,"player":"Matt Schaub","nflTeam":"Oak","position":"QB","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":8,"pick":6,"overall":76,"player":"49ers D/ST","nflTeam":"SF","position":"D/ST","fantasyTeam":"When's Fantasy Baseball?","owner":"Zachary Sizemore"},
    {"round":8,"pick":7,"overall":77,"player":"Torrey Smith","nflTeam":"Bal","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":8,"pick":8,"overall":78,"player":"Jordy Nelson","nflTeam":"GB","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":8,"pick":9,"overall":79,"player":"Cecil Shorts","nflTeam":"Jac","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":8,"pick":10,"overall":80,"player":"Daryl Richardson","nflTeam":"StL","position":"RB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":9,"pick":1,"overall":81,"player":"Anquan Boldin","nflTeam":"SF","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":9,"pick":2,"overall":82,"player":"T.Y. Hilton","nflTeam":"Ind","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":9,"pick":3,"overall":83,"player":"Martellus Bennett","nflTeam":"Chi","position":"TE","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":9,"pick":4,"overall":84,"player":"Kyle Rudolph","nflTeam":"Min","position":"TE","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":9,"pick":5,"overall":85,"player":"Sidney Rice","nflTeam":"Sea","position":"WR","fantasyTeam":"When's Fantasy Baseball?","owner":"Zachary Sizemore"},
    {"round":9,"pick":6,"overall":86,"player":"Jared Cook","nflTeam":"StL","position":"TE","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":9,"pick":7,"overall":87,"player":"Tony Romo","nflTeam":"Dal","position":"QB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":9,"pick":8,"overall":88,"player":"Steve Johnson","nflTeam":"Buf","position":"WR","fantasyTeam":"Rookie Sensations","owner":"George Wright"},
    {"round":9,"pick":9,"overall":89,"player":"Shane Vereen","nflTeam":"NE","position":"RB","fantasyTeam":"Boston TE Party","owner":"Tyler Cummings"},
    {"round":9,"pick":10,"overall":90,"player":"John Kasay","nflTeam":"FA","position":"K","fantasyTeam":"Not Soon Enough","owner":"Joseph Garton"},
    {"round":10,"pick":1,"overall":91,"player":"Greg Jennings","nflTeam":"Min","position":"WR","fantasyTeam":"Not Soon Enough","owner":"Joseph Garton"},
    {"round":10,"pick":2,"overall":92,"player":"Miles Austin","nflTeam":"Dal","position":"WR","fantasyTeam":"Boston TE Party","owner":"Tyler Cummings"},
    {"round":10,"pick":3,"overall":93,"player":"Andre Brown","nflTeam":"Hou","position":"RB","fantasyTeam":"Rookie Sensations","owner":"George Wright"},
    {"round":10,"pick":4,"overall":94,"player":"Bears D/ST","nflTeam":"Chi","position":"D/ST","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":10,"pick":5,"overall":95,"player":"Justin Tucker","nflTeam":"Bal","position":"K","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":10,"pick":6,"overall":96,"player":"Vick Ballard","nflTeam":"Ind","position":"RB","fantasyTeam":"When's Fantasy Baseball?","owner":"Zachary Sizemore"},
    {"round":10,"pick":7,"overall":97,"player":"Texans D/ST","nflTeam":"Hou","position":"D/ST","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":10,"pick":8,"overall":98,"player":"Mike Williams","nflTeam":"Buf","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":10,"pick":9,"overall":99,"player":"Greg Olsen","nflTeam":"Car","position":"TE","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":10,"pick":10,"overall":100,"player":"Mark Ingram","nflTeam":"NO","position":"RB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":11,"pick":1,"overall":101,"player":"Broncos D/ST","nflTeam":"Den","position":"D/ST","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":11,"pick":2,"overall":102,"player":"Bengals D/ST","nflTeam":"Cin","position":"D/ST","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":11,"pick":3,"overall":103,"player":"Patriots D/ST","nflTeam":"NE","position":"D/ST","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":11,"pick":4,"overall":104,"player":"Blair Walsh","nflTeam":"Min","position":"K","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":11,"pick":5,"overall":105,"player":"Ronnie Hillman","nflTeam":"Den","position":"RB","fantasyTeam":"When's Fantasy Baseball?","owner":"Zachary Sizemore"},
    {"round":11,"pick":6,"overall":106,"player":"Steelers D/ST","nflTeam":"Pit","position":"D/ST","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":11,"pick":7,"overall":107,"player":"Owen Daniels","nflTeam":"Bal","position":"TE","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":11,"pick":8,"overall":108,"player":"Packers D/ST","nflTeam":"GB","position":"D/ST","fantasyTeam":"Rookie Sensations","owner":"George Wright"},
    {"round":11,"pick":9,"overall":109,"player":"Emmanuel Sanders","nflTeam":"Den","position":"WR","fantasyTeam":"Boston TE Party","owner":"Tyler Cummings"},
    {"round":11,"pick":10,"overall":110,"player":"DuJuan Harris","nflTeam":"GB","position":"RB","fantasyTeam":"Not Soon Enough","owner":"Joseph Garton"},
    {"round":12,"pick":1,"overall":111,"player":"Jermichael Finley","nflTeam":"GB","position":"TE","fantasyTeam":"Not Soon Enough","owner":"Joseph Garton"},
    {"round":12,"pick":2,"overall":112,"player":"Michael Vick","nflTeam":"NYJ","position":"QB","fantasyTeam":"Boston TE Party","owner":"Tyler Cummings"},
    {"round":12,"pick":3,"overall":113,"player":"Rueben Randle","nflTeam":"NYG","position":"WR","fantasyTeam":"Rookie Sensations","owner":"George Wright"},
    {"round":12,"pick":4,"overall":114,"player":"Lance Moore","nflTeam":"Pit","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":12,"pick":5,"overall":115,"player":"Ben Tate","nflTeam":"Cle","position":"RB","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":12,"pick":6,"overall":116,"player":"Golden Tate","nflTeam":"Det","position":"WR","fantasyTeam":"When's Fantasy Baseball?","owner":"Zachary Sizemore"},
    {"round":12,"pick":7,"overall":117,"player":"Le'Veon Bell","nflTeam":"Pit","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":12,"pick":8,"overall":118,"player":"Joseph Randle","nflTeam":"Dal","position":"RB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":12,"pick":9,"overall":119,"player":"Fred Jackson","nflTeam":"Buf","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":12,"pick":10,"overall":120,"player":"Stephen Gostkowski","nflTeam":"NE","position":"K","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":13,"pick":1,"overall":121,"player":"Kenny Britt","nflTeam":"StL","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":13,"pick":2,"overall":122,"player":"Chris Givens","nflTeam":"StL","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":13,"pick":3,"overall":123,"player":"Zac Stacy","nflTeam":"StL","position":"RB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":13,"pick":4,"overall":124,"player":"Eli Manning","nflTeam":"NYG","position":"QB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":13,"pick":5,"overall":125,"player":"Matt Bryant","nflTeam":"Atl","position":"K","fantasyTeam":"When's Fantasy Baseball?","owner":"Zachary Sizemore"},
    {"round":13,"pick":6,"overall":126,"player":"Ben Roethlisberger","nflTeam":"Pit","position":"QB","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":13,"pick":7,"overall":127,"player":"Aaron Dobson","nflTeam":"NE","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":13,"pick":8,"overall":128,"player":"Matt Prater","nflTeam":"Den","position":"K","fantasyTeam":"Rookie Sensations","owner":"George Wright"},
    {"round":13,"pick":9,"overall":129,"player":"Ravens D/ST","nflTeam":"Bal","position":"D/ST","fantasyTeam":"Boston TE Party","owner":"Tyler Cummings"},
    {"round":13,"pick":10,"overall":130,"player":"Josh Gordon","nflTeam":"Cle","position":"WR","fantasyTeam":"Not Soon Enough","owner":"Joseph Garton"},
    {"round":14,"pick":1,"overall":131,"player":"Brandon Myers","nflTeam":"TB","position":"TE","fantasyTeam":"Not Soon Enough","owner":"Joseph Garton"},
    {"round":14,"pick":2,"overall":132,"player":"Sebastian Janikowski","nflTeam":"Oak","position":"K","fantasyTeam":"Boston TE Party","owner":"Tyler Cummings"},
    {"round":14,"pick":3,"overall":133,"player":"Justin Blackmon","nflTeam":"Jac","position":"WR","fantasyTeam":"Rookie Sensations","owner":"George Wright"},
    {"round":14,"pick":4,"overall":134,"player":"Phil Dawson","nflTeam":"SF","position":"K","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":14,"pick":5,"overall":135,"player":"Heath Miller","nflTeam":"Pit","position":"TE","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":14,"pick":6,"overall":136,"player":"Joe Flacco","nflTeam":"Bal","position":"QB","fantasyTeam":"When's Fantasy Baseball?","owner":"Zachary Sizemore"},
    {"round":14,"pick":7,"overall":137,"player":"Isaiah Pead","nflTeam":"StL","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":14,"pick":8,"overall":138,"player":"David Akers","nflTeam":"Det","position":"K","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":14,"pick":9,"overall":139,"player":"Randy Bullock","nflTeam":"Hou","position":"K","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":14,"pick":10,"overall":140,"player":"Cordarrelle Patterson","nflTeam":"Min","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"}
  ],
  "2014": [
    {"round":1,"pick":1,"overall":1,"player":"Matt Forte","nflTeam":"Chi","position":"RB","fantasyTeam":"Winning Is My Forte","owner":"Aaron Burns"},
    {"round":1,"pick":2,"overall":2,"player":"Jimmy Graham","nflTeam":"Sea","position":"TE","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":1,"pick":3,"overall":3,"player":"Aaron Rodgers","nflTeam":"GB","position":"QB","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":1,"pick":4,"overall":4,"player":"Andrew Luck","nflTeam":"Ind","position":"QB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":1,"pick":5,"overall":5,"player":"LeSean McCoy","nflTeam":"Buf","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":1,"pick":6,"overall":6,"player":"Adrian Peterson","nflTeam":"Min","position":"RB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":1,"pick":7,"overall":7,"player":"Calvin Johnson","nflTeam":"Det","position":"WR","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":1,"pick":8,"overall":8,"player":"Eddie Lacy","nflTeam":"GB","position":"RB","fantasyTeam":"Commish's Crusaders","owner":"Tyler Cummings"},
    {"round":1,"pick":9,"overall":9,"player":"Marshawn Lynch","nflTeam":"Sea","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":1,"pick":10,"overall":10,"player":"Drew Brees","nflTeam":"NO","position":"QB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":1,"pick":11,"overall":11,"player":"Jamaal Charles","nflTeam":"KC","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":1,"pick":12,"overall":12,"player":"Peyton Manning","nflTeam":"Den","position":"QB","fantasyTeam":"When's Fantasy Baseball?","owner":"Zachary Sizemore"},
    {"round":2,"pick":1,"overall":13,"player":"Demaryius Thomas","nflTeam":"Den","position":"WR","fantasyTeam":"Winning Is My Forte","owner":"Aaron Burns"},
    {"round":2,"pick":2,"overall":14,"player":"Dez Bryant","nflTeam":"Dal","position":"WR","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":2,"pick":3,"overall":15,"player":"Arian Foster","nflTeam":"Hou","position":"RB","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":2,"pick":4,"overall":16,"player":"A.J. Green","nflTeam":"Cin","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":2,"pick":5,"overall":17,"player":"DeMarco Murray","nflTeam":"Phi","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":2,"pick":6,"overall":18,"player":"Montee Ball","nflTeam":"Den","position":"RB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":2,"pick":7,"overall":19,"player":"Andy Dalton","nflTeam":"Cin","position":"QB","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":2,"pick":8,"overall":20,"player":"Julio Jones","nflTeam":"Atl","position":"WR","fantasyTeam":"Commish's Crusaders","owner":"Tyler Cummings"},
    {"round":2,"pick":9,"overall":21,"player":"Doug Martin","nflTeam":"TB","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":2,"pick":10,"overall":22,"player":"Brandon Marshall","nflTeam":"NYJ","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":2,"pick":11,"overall":23,"player":"Le'Veon Bell","nflTeam":"Pit","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":2,"pick":12,"overall":24,"player":"Zac Stacy","nflTeam":"StL","position":"RB","fantasyTeam":"When's Fantasy Baseball?","owner":"Zachary Sizemore"},
    {"round":3,"pick":1,"overall":25,"player":"Giovani Bernard","nflTeam":"Cin","position":"RB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":3,"pick":2,"overall":26,"player":"Antonio Brown","nflTeam":"Pit","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":3,"pick":3,"overall":27,"player":"Alfred Morris","nflTeam":"Wsh","position":"RB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":3,"pick":4,"overall":28,"player":"Reggie Bush","nflTeam":"SF","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":3,"pick":5,"overall":29,"player":"Jordy Nelson","nflTeam":"GB","position":"WR","fantasyTeam":"Commish's Crusaders","owner":"Tyler Cummings"},
    {"round":3,"pick":6,"overall":30,"player":"Chris Johnson","nflTeam":"NYJ","position":"RB","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":3,"pick":7,"overall":31,"player":"Alshon Jeffery","nflTeam":"Chi","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":3,"pick":8,"overall":32,"player":"Julius Thomas","nflTeam":"Jac","position":"TE","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":3,"pick":9,"overall":33,"player":"Randall Cobb","nflTeam":"GB","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":3,"pick":10,"overall":34,"player":"Frank Gore","nflTeam":"Ind","position":"RB","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":3,"pick":11,"overall":35,"player":"Rob Gronkowski","nflTeam":"NE","position":"TE","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":3,"pick":12,"overall":36,"player":"Matthew Stafford","nflTeam":"Det","position":"QB","fantasyTeam":"Winning Is My Forte","owner":"Aaron Burns"},
    {"round":4,"pick":1,"overall":37,"player":"Vincent Jackson","nflTeam":"TB","position":"WR","fantasyTeam":"Winning Is My Forte","owner":"Aaron Burns"},
    {"round":4,"pick":2,"overall":38,"player":"Victor Cruz","nflTeam":"NYG","position":"WR","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":4,"pick":3,"overall":39,"player":"Larry Fitzgerald","nflTeam":"Ari","position":"WR","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":4,"pick":4,"overall":40,"player":"Ben Tate","nflTeam":"Pit","position":"RB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":4,"pick":5,"overall":41,"player":"Cam Newton","nflTeam":"Car","position":"QB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":4,"pick":6,"overall":42,"player":"Colin Kaepernick","nflTeam":"SF","position":"QB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":4,"pick":7,"overall":43,"player":"Ryan Mathews","nflTeam":"Phi","position":"RB","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":4,"pick":8,"overall":44,"player":"Andre Ellington","nflTeam":"Ari","position":"RB","fantasyTeam":"Commish's Crusaders","owner":"Tyler Cummings"},
    {"round":4,"pick":9,"overall":45,"player":"Nick Foles","nflTeam":"StL","position":"QB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":4,"pick":10,"overall":46,"player":"Vernon Davis","nflTeam":"SF","position":"TE","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":4,"pick":11,"overall":47,"player":"Andre Johnson","nflTeam":"Ind","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":4,"pick":12,"overall":48,"player":"C.J. Spiller","nflTeam":"NO","position":"RB","fantasyTeam":"When's Fantasy Baseball?","owner":"Zachary Sizemore"},
    {"round":5,"pick":1,"overall":49,"player":"Roddy White","nflTeam":"Atl","position":"WR","fantasyTeam":"When's Fantasy Baseball?","owner":"Zachary Sizemore"},
    {"round":5,"pick":2,"overall":50,"player":"Rashad Jennings","nflTeam":"NYG","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":5,"pick":3,"overall":51,"player":"DeSean Jackson","nflTeam":"Wsh","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":5,"pick":4,"overall":52,"player":"Keenan Allen","nflTeam":"SD","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":5,"pick":5,"overall":53,"player":"Pierre Garcon","nflTeam":"Wsh","position":"WR","fantasyTeam":"Commish's Crusaders","owner":"Tyler Cummings"},
    {"round":5,"pick":6,"overall":54,"player":"Seahawks D/ST","nflTeam":"Sea","position":"D/ST","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":5,"pick":7,"overall":55,"player":"Michael Crabtree","nflTeam":"Oak","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":5,"pick":8,"overall":56,"player":"Torrey Smith","nflTeam":"SF","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":5,"pick":9,"overall":57,"player":"Steven Jackson","nflTeam":"Atl","position":"RB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":5,"pick":10,"overall":58,"player":"Percy Harvin","nflTeam":"Buf","position":"WR","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":5,"pick":11,"overall":59,"player":"Tom Brady","nflTeam":"NE","position":"QB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":5,"pick":12,"overall":60,"player":"Stevan Ridley","nflTeam":"NYJ","position":"RB","fantasyTeam":"Winning Is My Forte","owner":"Aaron Burns"},
    {"round":6,"pick":1,"overall":61,"player":"Cordarrelle Patterson","nflTeam":"Min","position":"WR","fantasyTeam":"Winning Is My Forte","owner":"Aaron Burns"},
    {"round":6,"pick":2,"overall":62,"player":"Ray Rice","nflTeam":"FA","position":"RB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":6,"pick":3,"overall":63,"player":"Eric Decker","nflTeam":"NYJ","position":"WR","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":6,"pick":4,"overall":64,"player":"T.Y. Hilton","nflTeam":"Ind","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":6,"pick":5,"overall":65,"player":"Joique Bell","nflTeam":"Det","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":6,"pick":6,"overall":66,"player":"Jason Witten","nflTeam":"Dal","position":"TE","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":6,"pick":7,"overall":67,"player":"Julian Edelman","nflTeam":"NE","position":"WR","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":6,"pick":8,"overall":68,"player":"Toby Gerhart","nflTeam":"Jac","position":"RB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":6,"pick":9,"overall":69,"player":"Jordan Cameron","nflTeam":"Mia","position":"TE","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":6,"pick":10,"overall":70,"player":"Emmanuel Sanders","nflTeam":"Den","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":6,"pick":11,"overall":71,"player":"Reggie Wayne","nflTeam":"Ind","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":6,"pick":12,"overall":72,"player":"Trent Richardson","nflTeam":"Oak","position":"RB","fantasyTeam":"When's Fantasy Baseball?","owner":"Zachary Sizemore"},
    {"round":7,"pick":1,"overall":73,"player":"Michael Floyd","nflTeam":"Ari","position":"WR","fantasyTeam":"When's Fantasy Baseball?","owner":"Zachary Sizemore"},
    {"round":7,"pick":2,"overall":74,"player":"Matt Ryan","nflTeam":"Atl","position":"QB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":7,"pick":3,"overall":75,"player":"Shane Vereen","nflTeam":"NYG","position":"RB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":7,"pick":4,"overall":76,"player":"Wes Welker","nflTeam":"Den","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":7,"pick":5,"overall":77,"player":"Robert Griffin","nflTeam":"Wsh","position":"QB","fantasyTeam":"Commish's Crusaders","owner":"Tyler Cummings"},
    {"round":7,"pick":6,"overall":78,"player":"Greg Olsen","nflTeam":"Car","position":"TE","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":7,"pick":7,"overall":79,"player":"Kendall Wright","nflTeam":"Ten","position":"WR","fantasyTeam":"When's Fantasy Baseball?","owner":"Zachary Sizemore"},
    {"round":7,"pick":8,"overall":80,"player":"Sammy Watkins","nflTeam":"Buf","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":7,"pick":9,"overall":81,"player":"Marques Colston","nflTeam":"NO","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":7,"pick":10,"overall":82,"player":"Anquan Boldin","nflTeam":"SF","position":"WR","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":7,"pick":11,"overall":83,"player":"Pierre Thomas","nflTeam":"NO","position":"RB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":7,"pick":12,"overall":84,"player":"Maurice Jones-Drew","nflTeam":"Oak","position":"RB","fantasyTeam":"Winning Is My Forte","owner":"Aaron Burns"},
    {"round":8,"pick":1,"overall":85,"player":"Bishop Sankey","nflTeam":"Ten","position":"RB","fantasyTeam":"Winning Is My Forte","owner":"Aaron Burns"},
    {"round":8,"pick":2,"overall":86,"player":"Fred Jackson","nflTeam":"Buf","position":"RB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":8,"pick":3,"overall":87,"player":"Knowshon Moreno","nflTeam":"Mia","position":"RB","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":8,"pick":4,"overall":88,"player":"Jeremy Maclin","nflTeam":"KC","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":8,"pick":5,"overall":89,"player":"Golden Tate","nflTeam":"Det","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":8,"pick":6,"overall":90,"player":"Mike Wallace","nflTeam":"Min","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":8,"pick":7,"overall":91,"player":"Steve Smith Sr.","nflTeam":"Bal","position":"WR","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":8,"pick":8,"overall":92,"player":"Darren Sproles","nflTeam":"Phi","position":"RB","fantasyTeam":"Commish's Crusaders","owner":"Tyler Cummings"},
    {"round":8,"pick":9,"overall":93,"player":"Panthers D/ST","nflTeam":"Car","position":"D/ST","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":8,"pick":10,"overall":94,"player":"49ers D/ST","nflTeam":"SF","position":"D/ST","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":8,"pick":11,"overall":95,"player":"Terrance Williams","nflTeam":"Dal","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":8,"pick":12,"overall":96,"player":"DeAndre Hopkins","nflTeam":"Hou","position":"WR","fantasyTeam":"When's Fantasy Baseball?","owner":"Zachary Sizemore"},
    {"round":9,"pick":1,"overall":97,"player":"Dennis Pitta","nflTeam":"Bal","position":"TE","fantasyTeam":"When's Fantasy Baseball?","owner":"Zachary Sizemore"},
    {"round":9,"pick":2,"overall":98,"player":"Lamar Miller","nflTeam":"Mia","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":9,"pick":3,"overall":99,"player":"Jay Cutler","nflTeam":"Chi","position":"QB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":9,"pick":4,"overall":100,"player":"Riley Cooper","nflTeam":"Phi","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":9,"pick":5,"overall":101,"player":"Russell Wilson","nflTeam":"Sea","position":"QB","fantasyTeam":"Commish's Crusaders","owner":"Tyler Cummings"},
    {"round":9,"pick":6,"overall":102,"player":"Mike Evans","nflTeam":"TB","position":"WR","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":9,"pick":7,"overall":103,"player":"Broncos D/ST","nflTeam":"Den","position":"D/ST","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":9,"pick":8,"overall":104,"player":"Danny Amendola","nflTeam":"NE","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":9,"pick":9,"overall":105,"player":"DeAngelo Williams","nflTeam":"Pit","position":"RB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":9,"pick":10,"overall":106,"player":"Danny Woodhead","nflTeam":"SD","position":"RB","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":9,"pick":11,"overall":107,"player":"Bengals D/ST","nflTeam":"Cin","position":"D/ST","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":9,"pick":12,"overall":108,"player":"Cecil Shorts III","nflTeam":"Hou","position":"WR","fantasyTeam":"Winning Is My Forte","owner":"Aaron Burns"},
    {"round":10,"pick":1,"overall":109,"player":"Kyle Rudolph","nflTeam":"Min","position":"TE","fantasyTeam":"Winning Is My Forte","owner":"Aaron Burns"},
    {"round":10,"pick":2,"overall":110,"player":"Stephen Gostkowski","nflTeam":"NE","position":"K","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":10,"pick":3,"overall":111,"player":"Patriots D/ST","nflTeam":"NE","position":"D/ST","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":10,"pick":4,"overall":112,"player":"Chris Ivory","nflTeam":"NYJ","position":"RB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":10,"pick":5,"overall":113,"player":"Jeremy Hill","nflTeam":"Cin","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":10,"pick":6,"overall":114,"player":"Khiry Robinson","nflTeam":"NO","position":"RB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":10,"pick":7,"overall":115,"player":"Tony Romo","nflTeam":"Dal","position":"QB","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":10,"pick":8,"overall":116,"player":"Hakeem Nicks","nflTeam":"Ten","position":"WR","fantasyTeam":"Commish's Crusaders","owner":"Tyler Cummings"},
    {"round":10,"pick":9,"overall":117,"player":"Shonn Greene","nflTeam":"Ten","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":10,"pick":10,"overall":118,"player":"Donald Brown","nflTeam":"SD","position":"RB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":10,"pick":11,"overall":119,"player":"Philip Rivers","nflTeam":"SD","position":"QB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":10,"pick":12,"overall":120,"player":"Ben Roethlisberger","nflTeam":"Pit","position":"QB","fantasyTeam":"When's Fantasy Baseball?","owner":"Zachary Sizemore"},
    {"round":11,"pick":1,"overall":121,"player":"Carlos Hyde","nflTeam":"SF","position":"RB","fantasyTeam":"When's Fantasy Baseball?","owner":"Zachary Sizemore"},
    {"round":11,"pick":2,"overall":122,"player":"Devonta Freeman","nflTeam":"Atl","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":11,"pick":3,"overall":123,"player":"Steven Hauschka","nflTeam":"Sea","position":"K","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":11,"pick":4,"overall":124,"player":"Tavon Austin","nflTeam":"StL","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":11,"pick":5,"overall":125,"player":"Cardinals D/ST","nflTeam":"Ari","position":"D/ST","fantasyTeam":"Commish's Crusaders","owner":"Tyler Cummings"},
    {"round":11,"pick":6,"overall":126,"player":"Kelvin Benjamin","nflTeam":"Car","position":"WR","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":11,"pick":7,"overall":127,"player":"Brandin Cooks","nflTeam":"NO","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":11,"pick":8,"overall":128,"player":"Darren McFadden","nflTeam":"Dal","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":11,"pick":9,"overall":129,"player":"Jordan Reed","nflTeam":"Wsh","position":"TE","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":11,"pick":10,"overall":130,"player":"Jarrett Boykin","nflTeam":"Car","position":"WR","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":11,"pick":11,"overall":131,"player":"Bernard Pierce","nflTeam":"Jac","position":"RB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":11,"pick":12,"overall":132,"player":"Chiefs D/ST","nflTeam":"KC","position":"D/ST","fantasyTeam":"Winning Is My Forte","owner":"Aaron Burns"},
    {"round":12,"pick":1,"overall":133,"player":"Justin Hunter","nflTeam":"Ten","position":"WR","fantasyTeam":"Winning Is My Forte","owner":"Aaron Burns"},
    {"round":12,"pick":2,"overall":134,"player":"Terrance West","nflTeam":"Cle","position":"RB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":12,"pick":3,"overall":135,"player":"Andrew Quarless","nflTeam":"GB","position":"TE","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":12,"pick":4,"overall":136,"player":"Rams D/ST","nflTeam":"StL","position":"D/ST","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":12,"pick":5,"overall":137,"player":"Christine Michael","nflTeam":"Sea","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":12,"pick":6,"overall":138,"player":"Mark Ingram","nflTeam":"NO","position":"RB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":12,"pick":7,"overall":139,"player":"James Jones","nflTeam":"Oak","position":"WR","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":12,"pick":8,"overall":140,"player":"Greg Jennings","nflTeam":"Mia","position":"WR","fantasyTeam":"Commish's Crusaders","owner":"Tyler Cummings"},
    {"round":12,"pick":9,"overall":141,"player":"Justin Tucker","nflTeam":"Bal","position":"K","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":12,"pick":10,"overall":142,"player":"LeGarrette Blount","nflTeam":"NE","position":"RB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":12,"pick":11,"overall":143,"player":"Charles Clay","nflTeam":"Buf","position":"TE","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":12,"pick":12,"overall":144,"player":"Bills D/ST","nflTeam":"Buf","position":"D/ST","fantasyTeam":"When's Fantasy Baseball?","owner":"Zachary Sizemore"},
    {"round":13,"pick":1,"overall":145,"player":"Andrew Hawkins","nflTeam":"Cle","position":"WR","fantasyTeam":"When's Fantasy Baseball?","owner":"Zachary Sizemore"},
    {"round":13,"pick":2,"overall":146,"player":"Texans D/ST","nflTeam":"Hou","position":"D/ST","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":13,"pick":3,"overall":147,"player":"Zach Ertz","nflTeam":"Phi","position":"TE","fantasyTeam":"Commish's Crusaders","owner":"Tyler Cummings"},
    {"round":13,"pick":4,"overall":148,"player":"Andre Williams","nflTeam":"NYG","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":13,"pick":5,"overall":149,"player":"Martellus Bennett","nflTeam":"Chi","position":"TE","fantasyTeam":"Commish's Crusaders","owner":"Tyler Cummings"},
    {"round":13,"pick":6,"overall":150,"player":"Roy Helu","nflTeam":"Oak","position":"RB","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":13,"pick":7,"overall":151,"player":"Markus Wheaton","nflTeam":"Pit","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":13,"pick":8,"overall":152,"player":"Buccaneers D/ST","nflTeam":"TB","position":"D/ST","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":13,"pick":9,"overall":153,"player":"Dwayne Bowe","nflTeam":"Cle","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":13,"pick":10,"overall":154,"player":"Packers D/ST","nflTeam":"GB","position":"D/ST","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":13,"pick":11,"overall":155,"player":"Dexter McCluster","nflTeam":"Ten","position":"WR","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":13,"pick":12,"overall":156,"player":"Carson Palmer","nflTeam":"Ari","position":"QB","fantasyTeam":"Winning Is My Forte","owner":"Aaron Burns"},
    {"round":14,"pick":1,"overall":157,"player":"Mason Crosby","nflTeam":"GB","position":"K","fantasyTeam":"Winning Is My Forte","owner":"Aaron Burns"},
    {"round":14,"pick":2,"overall":158,"player":"Mike Williams","nflTeam":"Buf","position":"WR","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":14,"pick":3,"overall":159,"player":"Adam Vinatieri","nflTeam":"Ind","position":"K","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":14,"pick":4,"overall":160,"player":"Nick Novak","nflTeam":"SD","position":"K","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":14,"pick":5,"overall":161,"player":"Phil Dawson","nflTeam":"SF","position":"K","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":14,"pick":6,"overall":162,"player":"Dan Bailey","nflTeam":"Dal","position":"K","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":14,"pick":7,"overall":163,"player":"Blair Walsh","nflTeam":"Min","position":"K","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":14,"pick":8,"overall":164,"player":"Matt Bryant","nflTeam":"Atl","position":"K","fantasyTeam":"Commish's Crusaders","owner":"Tyler Cummings"},
    {"round":14,"pick":9,"overall":165,"player":"Eli Manning","nflTeam":"NYG","position":"QB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":14,"pick":10,"overall":166,"player":"Shayne Graham","nflTeam":"NO","position":"K","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":14,"pick":11,"overall":167,"player":"Nick Folk","nflTeam":"NYJ","position":"K","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":14,"pick":12,"overall":168,"player":"Robbie Gould","nflTeam":"Chi","position":"K","fantasyTeam":"When's Fantasy Baseball?","owner":"Zachary Sizemore"}
  ],
  "2015": [
    {"round":1,"pick":1,"overall":1,"player":"Le'Veon Bell","nflTeam":"Pit","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":1,"pick":2,"overall":2,"player":"Peyton Manning","nflTeam":"Den","position":"QB","fantasyTeam":"When's Fantasy Baseball?","owner":"Zachary Sizemore"},
    {"round":1,"pick":3,"overall":3,"player":"Andrew Luck","nflTeam":"Ind","position":"QB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":1,"pick":4,"overall":4,"player":"Jamaal Charles","nflTeam":"KC","position":"RB","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":1,"pick":5,"overall":5,"player":"Aaron Rodgers","nflTeam":"GB","position":"QB","fantasyTeam":"That's a Baaaaaaad Man","owner":"Joseph Garton"},
    {"round":1,"pick":6,"overall":6,"player":"C.J. Anderson","nflTeam":"Den","position":"RB","fantasyTeam":"I like to Cha Cha","owner":"Luke Rapp"},
    {"round":1,"pick":7,"overall":7,"player":"Matt Forte","nflTeam":"NYJ","position":"RB","fantasyTeam":"Winning Is My Forte","owner":"Aaron Burns"},
    {"round":1,"pick":8,"overall":8,"player":"Antonio Brown","nflTeam":"Pit","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":1,"pick":9,"overall":9,"player":"Marshawn Lynch","nflTeam":"Sea","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":1,"pick":10,"overall":10,"player":"Dez Bryant","nflTeam":"Dal","position":"WR","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":1,"pick":11,"overall":11,"player":"DeMarco Murray","nflTeam":"Ten","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":1,"pick":12,"overall":12,"player":"Eddie Lacy","nflTeam":"GB","position":"RB","fantasyTeam":"Commish's Crusaders","owner":"Tyler Cummings"},
    {"round":2,"pick":1,"overall":13,"player":"Adrian Peterson","nflTeam":"Min","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":2,"pick":2,"overall":14,"player":"Jeremy Hill","nflTeam":"Cin","position":"RB","fantasyTeam":"When's Fantasy Baseball?","owner":"Zachary Sizemore"},
    {"round":2,"pick":3,"overall":15,"player":"Demaryius Thomas","nflTeam":"Den","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":2,"pick":4,"overall":16,"player":"Tom Brady","nflTeam":"NE","position":"QB","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":2,"pick":5,"overall":17,"player":"Rob Gronkowski","nflTeam":"NE","position":"TE","fantasyTeam":"That's a Baaaaaaad Man","owner":"Joseph Garton"},
    {"round":2,"pick":6,"overall":18,"player":"Mark Ingram","nflTeam":"NO","position":"RB","fantasyTeam":"I like to Cha Cha","owner":"Luke Rapp"},
    {"round":2,"pick":7,"overall":19,"player":"Odell Beckham Jr.","nflTeam":"NYG","position":"WR","fantasyTeam":"Winning Is My Forte","owner":"Aaron Burns"},
    {"round":2,"pick":8,"overall":20,"player":"Calvin Johnson","nflTeam":"Det","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":2,"pick":9,"overall":21,"player":"LeSean McCoy","nflTeam":"Buf","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":2,"pick":10,"overall":22,"player":"Julio Jones","nflTeam":"Atl","position":"WR","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":2,"pick":11,"overall":23,"player":"A.J. Green","nflTeam":"Cin","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":2,"pick":12,"overall":24,"player":"Russell Wilson","nflTeam":"Sea","position":"QB","fantasyTeam":"Commish's Crusaders","owner":"Tyler Cummings"},
    {"round":3,"pick":1,"overall":25,"player":"Randall Cobb","nflTeam":"GB","position":"WR","fantasyTeam":"Commish's Crusaders","owner":"Tyler Cummings"},
    {"round":3,"pick":2,"overall":26,"player":"T.Y. Hilton","nflTeam":"Ind","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":3,"pick":3,"overall":27,"player":"Lamar Miller","nflTeam":"Hou","position":"RB","fantasyTeam":"Commish's Crusaders","owner":"Tyler Cummings"},
    {"round":3,"pick":4,"overall":28,"player":"Alshon Jeffery","nflTeam":"Chi","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":3,"pick":5,"overall":29,"player":"Carlos Hyde","nflTeam":"SF","position":"RB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":3,"pick":6,"overall":30,"player":"Brandin Cooks","nflTeam":"NO","position":"WR","fantasyTeam":"Winning Is My Forte","owner":"Aaron Burns"},
    {"round":3,"pick":7,"overall":31,"player":"Justin Forsett","nflTeam":"Bal","position":"RB","fantasyTeam":"I like to Cha Cha","owner":"Luke Rapp"},
    {"round":3,"pick":8,"overall":32,"player":"Frank Gore","nflTeam":"Ind","position":"RB","fantasyTeam":"That's a Baaaaaaad Man","owner":"Joseph Garton"},
    {"round":3,"pick":9,"overall":33,"player":"Alfred Morris","nflTeam":"Dal","position":"RB","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":3,"pick":10,"overall":34,"player":"Jimmy Graham","nflTeam":"Sea","position":"TE","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":3,"pick":11,"overall":35,"player":"Emmanuel Sanders","nflTeam":"Den","position":"WR","fantasyTeam":"When's Fantasy Baseball?","owner":"Zachary Sizemore"},
    {"round":3,"pick":12,"overall":36,"player":"DeAndre Hopkins","nflTeam":"Hou","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":4,"pick":1,"overall":37,"player":"Arian Foster","nflTeam":"Hou","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":4,"pick":2,"overall":38,"player":"Melvin Gordon","nflTeam":"SD","position":"RB","fantasyTeam":"When's Fantasy Baseball?","owner":"Zachary Sizemore"},
    {"round":4,"pick":3,"overall":39,"player":"Jonathan Stewart","nflTeam":"Car","position":"RB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":4,"pick":4,"overall":40,"player":"Mike Evans","nflTeam":"TB","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":4,"pick":5,"overall":41,"player":"Giovani Bernard","nflTeam":"Cin","position":"RB","fantasyTeam":"That's a Baaaaaaad Man","owner":"Joseph Garton"},
    {"round":4,"pick":6,"overall":42,"player":"Andre Johnson","nflTeam":"Ind","position":"WR","fantasyTeam":"I like to Cha Cha","owner":"Luke Rapp"},
    {"round":4,"pick":7,"overall":43,"player":"Drew Brees","nflTeam":"NO","position":"QB","fantasyTeam":"Winning Is My Forte","owner":"Aaron Burns"},
    {"round":4,"pick":8,"overall":44,"player":"Ben Roethlisberger","nflTeam":"Pit","position":"QB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":4,"pick":9,"overall":45,"player":"Joique Bell","nflTeam":"Det","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":4,"pick":10,"overall":46,"player":"Greg Olsen","nflTeam":"Car","position":"TE","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":4,"pick":11,"overall":47,"player":"T.J. Yeldon","nflTeam":"Jax","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":4,"pick":12,"overall":48,"player":"Jordan Matthews","nflTeam":"Phi","position":"WR","fantasyTeam":"Commish's Crusaders","owner":"Tyler Cummings"},
    {"round":5,"pick":1,"overall":49,"player":"Andre Ellington","nflTeam":"Ari","position":"RB","fantasyTeam":"Commish's Crusaders","owner":"Tyler Cummings"},
    {"round":5,"pick":2,"overall":50,"player":"Latavius Murray","nflTeam":"Oak","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":5,"pick":3,"overall":51,"player":"Keenan Allen","nflTeam":"SD","position":"WR","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":5,"pick":4,"overall":52,"player":"Julian Edelman","nflTeam":"NE","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":5,"pick":5,"overall":53,"player":"Isaiah Crowell","nflTeam":"Cle","position":"RB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":5,"pick":6,"overall":54,"player":"Joseph Randle","nflTeam":"FA","position":"RB","fantasyTeam":"Winning Is My Forte","owner":"Aaron Burns"},
    {"round":5,"pick":7,"overall":55,"player":"Davante Adams","nflTeam":"GB","position":"WR","fantasyTeam":"I like to Cha Cha","owner":"Luke Rapp"},
    {"round":5,"pick":8,"overall":56,"player":"Amari Cooper","nflTeam":"Oak","position":"WR","fantasyTeam":"That's a Baaaaaaad Man","owner":"Joseph Garton"},
    {"round":5,"pick":9,"overall":57,"player":"Jeremy Maclin","nflTeam":"KC","position":"WR","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":5,"pick":10,"overall":58,"player":"Chris Ivory","nflTeam":"Jax","position":"RB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":5,"pick":11,"overall":59,"player":"DeSean Jackson","nflTeam":"Wsh","position":"WR","fantasyTeam":"When's Fantasy Baseball?","owner":"Zachary Sizemore"},
    {"round":5,"pick":12,"overall":60,"player":"Golden Tate","nflTeam":"Det","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":6,"pick":1,"overall":61,"player":"Todd Gurley","nflTeam":"StL","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":6,"pick":2,"overall":62,"player":"Sammy Watkins","nflTeam":"Buf","position":"WR","fantasyTeam":"When's Fantasy Baseball?","owner":"Zachary Sizemore"},
    {"round":6,"pick":3,"overall":63,"player":"Matt Ryan","nflTeam":"Atl","position":"QB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":6,"pick":4,"overall":64,"player":"Brandon Marshall","nflTeam":"NYJ","position":"WR","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":6,"pick":5,"overall":65,"player":"Vincent Jackson","nflTeam":"TB","position":"WR","fantasyTeam":"That's a Baaaaaaad Man","owner":"Joseph Garton"},
    {"round":6,"pick":6,"overall":66,"player":"LeGarrette Blount","nflTeam":"NE","position":"RB","fantasyTeam":"I like to Cha Cha","owner":"Luke Rapp"},
    {"round":6,"pick":7,"overall":67,"player":"Nelson Agholor","nflTeam":"Phi","position":"WR","fantasyTeam":"Winning Is My Forte","owner":"Aaron Burns"},
    {"round":6,"pick":8,"overall":68,"player":"Travis Kelce","nflTeam":"KC","position":"TE","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":6,"pick":9,"overall":69,"player":"Rashad Jennings","nflTeam":"NYG","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":6,"pick":10,"overall":70,"player":"Tony Romo","nflTeam":"Dal","position":"QB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":6,"pick":11,"overall":71,"player":"Jarvis Landry","nflTeam":"Mia","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":6,"pick":12,"overall":72,"player":"Martavis Bryant","nflTeam":"Pit","position":"WR","fantasyTeam":"Commish's Crusaders","owner":"Tyler Cummings"},
    {"round":7,"pick":1,"overall":73,"player":"Mike Wallace","nflTeam":"Bal","position":"WR","fantasyTeam":"Commish's Crusaders","owner":"Tyler Cummings"},
    {"round":7,"pick":2,"overall":74,"player":"Steve Smith Sr.","nflTeam":"Bal","position":"WR","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":7,"pick":3,"overall":75,"player":"Doug Martin","nflTeam":"TB","position":"RB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":7,"pick":4,"overall":76,"player":"Martellus Bennett","nflTeam":"NE","position":"TE","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":7,"pick":5,"overall":77,"player":"Ryan Tannehill","nflTeam":"Mia","position":"QB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":7,"pick":6,"overall":78,"player":"C.J. Spiller","nflTeam":"NO","position":"RB","fantasyTeam":"Winning Is My Forte","owner":"Aaron Burns"},
    {"round":7,"pick":7,"overall":79,"player":"Ameer Abdullah","nflTeam":"Det","position":"RB","fantasyTeam":"I like to Cha Cha","owner":"Luke Rapp"},
    {"round":7,"pick":8,"overall":80,"player":"Allen Robinson","nflTeam":"Jax","position":"WR","fantasyTeam":"That's a Baaaaaaad Man","owner":"Joseph Garton"},
    {"round":7,"pick":9,"overall":81,"player":"Tevin Coleman","nflTeam":"Atl","position":"RB","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":7,"pick":10,"overall":82,"player":"Torrey Smith","nflTeam":"SF","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":7,"pick":11,"overall":83,"player":"Jason Witten","nflTeam":"Dal","position":"TE","fantasyTeam":"When's Fantasy Baseball?","owner":"Zachary Sizemore"},
    {"round":7,"pick":12,"overall":84,"player":"Eric Decker","nflTeam":"NYJ","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":8,"pick":1,"overall":85,"player":"Duke Johnson Jr.","nflTeam":"Cle","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":8,"pick":2,"overall":86,"player":"Devonta Freeman","nflTeam":"Atl","position":"RB","fantasyTeam":"When's Fantasy Baseball?","owner":"Zachary Sizemore"},
    {"round":8,"pick":3,"overall":87,"player":"Larry Fitzgerald","nflTeam":"Ari","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":8,"pick":4,"overall":88,"player":"Delanie Walker","nflTeam":"Ten","position":"TE","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":8,"pick":5,"overall":89,"player":"Alfred Blue","nflTeam":"Hou","position":"RB","fantasyTeam":"That's a Baaaaaaad Man","owner":"Joseph Garton"},
    {"round":8,"pick":6,"overall":90,"player":"Owen Daniels","nflTeam":"Den","position":"TE","fantasyTeam":"I like to Cha Cha","owner":"Luke Rapp"},
    {"round":8,"pick":7,"overall":91,"player":"Jordan Cameron","nflTeam":"Mia","position":"TE","fantasyTeam":"Winning Is My Forte","owner":"Aaron Burns"},
    {"round":8,"pick":8,"overall":92,"player":"John Brown","nflTeam":"Ari","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":8,"pick":9,"overall":93,"player":"Ryan Mathews","nflTeam":"Phi","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":8,"pick":10,"overall":94,"player":"Cam Newton","nflTeam":"Car","position":"QB","fantasyTeam":"Commish's Crusaders","owner":"Tyler Cummings"},
    {"round":8,"pick":11,"overall":95,"player":"Michael Floyd","nflTeam":"Ari","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":8,"pick":12,"overall":96,"player":"Shane Vereen","nflTeam":"NYG","position":"RB","fantasyTeam":"Commish's Crusaders","owner":"Tyler Cummings"},
    {"round":9,"pick":1,"overall":97,"player":"Zach Ertz","nflTeam":"Phi","position":"TE","fantasyTeam":"Commish's Crusaders","owner":"Tyler Cummings"},
    {"round":9,"pick":2,"overall":98,"player":"Eli Manning","nflTeam":"NYG","position":"QB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":9,"pick":3,"overall":99,"player":"Tre Mason","nflTeam":"StL","position":"RB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":9,"pick":4,"overall":100,"player":"Charles Johnson","nflTeam":"Min","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":9,"pick":5,"overall":101,"player":"Danny Woodhead","nflTeam":"SD","position":"RB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":9,"pick":6,"overall":102,"player":"Kendall Wright","nflTeam":"Ten","position":"WR","fantasyTeam":"Winning Is My Forte","owner":"Aaron Burns"},
    {"round":9,"pick":7,"overall":103,"player":"Sam Bradford","nflTeam":"Phi","position":"QB","fantasyTeam":"I like to Cha Cha","owner":"Luke Rapp"},
    {"round":9,"pick":8,"overall":104,"player":"Seahawks D/ST","nflTeam":"Sea","position":"D/ST","fantasyTeam":"That's a Baaaaaaad Man","owner":"Joseph Garton"},
    {"round":9,"pick":9,"overall":105,"player":"Marques Colston","nflTeam":"NO","position":"WR","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":9,"pick":10,"overall":106,"player":"Anquan Boldin","nflTeam":"SF","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":9,"pick":11,"overall":107,"player":"Bills D/ST","nflTeam":"Buf","position":"D/ST","fantasyTeam":"When's Fantasy Baseball?","owner":"Zachary Sizemore"},
    {"round":9,"pick":12,"overall":108,"player":"Larry Donnell","nflTeam":"NYG","position":"TE","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":10,"pick":1,"overall":109,"player":"Philip Rivers","nflTeam":"SD","position":"QB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":10,"pick":2,"overall":110,"player":"Matthew Stafford","nflTeam":"Det","position":"QB","fantasyTeam":"When's Fantasy Baseball?","owner":"Zachary Sizemore"},
    {"round":10,"pick":3,"overall":111,"player":"Darren McFadden","nflTeam":"Dal","position":"RB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":10,"pick":4,"overall":112,"player":"Darren Sproles","nflTeam":"Phi","position":"RB","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":10,"pick":5,"overall":113,"player":"Pierre Garcon","nflTeam":"Wsh","position":"WR","fantasyTeam":"That's a Baaaaaaad Man","owner":"Joseph Garton"},
    {"round":10,"pick":6,"overall":114,"player":"DeVante Parker","nflTeam":"Mia","position":"WR","fantasyTeam":"I like to Cha Cha","owner":"Luke Rapp"},
    {"round":10,"pick":7,"overall":115,"player":"Texans D/ST","nflTeam":"Hou","position":"D/ST","fantasyTeam":"Winning Is My Forte","owner":"Aaron Burns"},
    {"round":10,"pick":8,"overall":116,"player":"Devin Funchess","nflTeam":"Car","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":10,"pick":9,"overall":117,"player":"Victor Cruz","nflTeam":"NYG","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":10,"pick":10,"overall":118,"player":"Bishop Sankey","nflTeam":"Ten","position":"RB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":10,"pick":11,"overall":119,"player":"Andre Williams","nflTeam":"NYG","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":10,"pick":12,"overall":120,"player":"DeAngelo Williams","nflTeam":"Pit","position":"RB","fantasyTeam":"Commish's Crusaders","owner":"Tyler Cummings"},
    {"round":11,"pick":1,"overall":121,"player":"Cardinals D/ST","nflTeam":"Ari","position":"D/ST","fantasyTeam":"Commish's Crusaders","owner":"Tyler Cummings"},
    {"round":11,"pick":2,"overall":122,"player":"Roddy White","nflTeam":"Atl","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":11,"pick":3,"overall":123,"player":"Rams D/ST","nflTeam":"StL","position":"D/ST","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":11,"pick":4,"overall":124,"player":"Dion Lewis","nflTeam":"NE","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":11,"pick":5,"overall":125,"player":"Charles Sims","nflTeam":"TB","position":"RB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":11,"pick":6,"overall":126,"player":"Eddie Royal","nflTeam":"Chi","position":"WR","fantasyTeam":"Winning Is My Forte","owner":"Aaron Burns"},
    {"round":11,"pick":7,"overall":127,"player":"Markus Wheaton","nflTeam":"Pit","position":"WR","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":11,"pick":8,"overall":128,"player":"James Jones","nflTeam":"GB","position":"WR","fantasyTeam":"That's a Baaaaaaad Man","owner":"Joseph Garton"},
    {"round":11,"pick":9,"overall":129,"player":"Joe Flacco","nflTeam":"Bal","position":"QB","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":11,"pick":10,"overall":130,"player":"David Cobb","nflTeam":"Ten","position":"RB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":11,"pick":11,"overall":131,"player":"Rueben Randle","nflTeam":"Phi","position":"WR","fantasyTeam":"When's Fantasy Baseball?","owner":"Zachary Sizemore"},
    {"round":11,"pick":12,"overall":132,"player":"Ravens D/ST","nflTeam":"Bal","position":"D/ST","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":12,"pick":1,"overall":133,"player":"Stephen Gostkowski","nflTeam":"NE","position":"K","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":12,"pick":2,"overall":134,"player":"Doug Baldwin","nflTeam":"Sea","position":"WR","fantasyTeam":"When's Fantasy Baseball?","owner":"Zachary Sizemore"},
    {"round":12,"pick":3,"overall":135,"player":"Knile Davis","nflTeam":"KC","position":"RB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":12,"pick":4,"overall":136,"player":"Eagles D/ST","nflTeam":"Phi","position":"D/ST","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":12,"pick":5,"overall":137,"player":"Reggie Bush","nflTeam":"SF","position":"RB","fantasyTeam":"That's a Baaaaaaad Man","owner":"Joseph Garton"},
    {"round":12,"pick":6,"overall":138,"player":"Brian Quick","nflTeam":"StL","position":"WR","fantasyTeam":"I like to Cha Cha","owner":"Luke Rapp"},
    {"round":12,"pick":7,"overall":139,"player":"Antonio Gates","nflTeam":"SD","position":"TE","fantasyTeam":"Winning Is My Forte","owner":"Aaron Burns"},
    {"round":12,"pick":8,"overall":140,"player":"David Johnson","nflTeam":"Ari","position":"RB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":12,"pick":9,"overall":141,"player":"Bengals D/ST","nflTeam":"Cin","position":"D/ST","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":12,"pick":10,"overall":142,"player":"Cody Latimer","nflTeam":"Den","position":"WR","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":12,"pick":11,"overall":143,"player":"Dwayne Allen","nflTeam":"Ind","position":"TE","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":12,"pick":12,"overall":144,"player":"Adam Vinatieri","nflTeam":"Ind","position":"K","fantasyTeam":"Commish's Crusaders","owner":"Tyler Cummings"},
    {"round":13,"pick":1,"overall":145,"player":"Cody Parkey","nflTeam":"Phi","position":"K","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":13,"pick":2,"overall":146,"player":"Ronnie Hillman","nflTeam":"Den","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":13,"pick":3,"overall":147,"player":"Kyle Rudolph","nflTeam":"Min","position":"TE","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":13,"pick":4,"overall":148,"player":"Steven Hauschka","nflTeam":"Sea","position":"K","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":13,"pick":5,"overall":149,"player":"Donte Moncrief","nflTeam":"Ind","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":13,"pick":6,"overall":150,"player":"Michael Crabtree","nflTeam":"Oak","position":"WR","fantasyTeam":"Winning Is My Forte","owner":"Aaron Burns"},
    {"round":13,"pick":7,"overall":151,"player":"Broncos D/ST","nflTeam":"Den","position":"D/ST","fantasyTeam":"I like to Cha Cha","owner":"Luke Rapp"},
    {"round":13,"pick":8,"overall":152,"player":"Malcom Floyd","nflTeam":"SD","position":"WR","fantasyTeam":"That's a Baaaaaaad Man","owner":"Joseph Garton"},
    {"round":13,"pick":9,"overall":153,"player":"Carson Palmer","nflTeam":"Ari","position":"QB","fantasyTeam":"I like to Cha Cha","owner":"Luke Rapp"},
    {"round":13,"pick":10,"overall":154,"player":"Denard Robinson","nflTeam":"Jax","position":"RB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":13,"pick":11,"overall":155,"player":"Christine Michael","nflTeam":"Sea","position":"RB","fantasyTeam":"When's Fantasy Baseball?","owner":"Zachary Sizemore"},
    {"round":13,"pick":12,"overall":156,"player":"Jets D/ST","nflTeam":"NYJ","position":"D/ST","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":14,"pick":1,"overall":157,"player":"Justin Tucker","nflTeam":"Bal","position":"K","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":14,"pick":2,"overall":158,"player":"Matt Bryant","nflTeam":"Atl","position":"K","fantasyTeam":"When's Fantasy Baseball?","owner":"Zachary Sizemore"},
    {"round":14,"pick":3,"overall":159,"player":"Dolphins D/ST","nflTeam":"Mia","position":"D/ST","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":14,"pick":4,"overall":160,"player":"Lions D/ST","nflTeam":"Det","position":"D/ST","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":14,"pick":5,"overall":161,"player":"Mason Crosby","nflTeam":"GB","position":"K","fantasyTeam":"That's a Baaaaaaad Man","owner":"Joseph Garton"},
    {"round":14,"pick":6,"overall":162,"player":"Dan Bailey","nflTeam":"Dal","position":"K","fantasyTeam":"I like to Cha Cha","owner":"Luke Rapp"},
    {"round":14,"pick":7,"overall":163,"player":"Brandon McManus","nflTeam":"Den","position":"K","fantasyTeam":"Winning Is My Forte","owner":"Aaron Burns"},
    {"round":14,"pick":8,"overall":164,"player":"Matt Prater","nflTeam":"Det","position":"K","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":14,"pick":9,"overall":165,"player":"Dan Carpenter","nflTeam":"Buf","position":"K","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":14,"pick":10,"overall":166,"player":"Brandon Bolden","nflTeam":"NE","position":"RB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":14,"pick":11,"overall":167,"player":"Chandler Catanzaro","nflTeam":"Ari","position":"K","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":14,"pick":12,"overall":168,"player":"Marquess Wilson","nflTeam":"Chi","position":"WR","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"}
  ],
  "2016": [
    {"round":1,"pick":1,"overall":1,"player":"Antonio Brown","nflTeam":"Pit","position":"WR","fantasyTeam":"King of the NARPS","owner":"Zachary Sizemore"},
    {"round":1,"pick":2,"overall":2,"player":"Adrian Peterson","nflTeam":"Min","position":"RB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":1,"pick":3,"overall":3,"player":"Odell Beckham Jr.","nflTeam":"NYG","position":"WR","fantasyTeam":"That's a Baaaaaaad Man","owner":"Joseph Garton"},
    {"round":1,"pick":4,"overall":4,"player":"Todd Gurley","nflTeam":"LA","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":1,"pick":5,"overall":5,"player":"Julio Jones","nflTeam":"Atl","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":1,"pick":6,"overall":6,"player":"Devonta Freeman","nflTeam":"Atl","position":"RB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":1,"pick":7,"overall":7,"player":"Ezekiel Elliott","nflTeam":"Dal","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":1,"pick":8,"overall":8,"player":"David Johnson","nflTeam":"Ari","position":"RB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":1,"pick":9,"overall":9,"player":"Le'Veon Bell","nflTeam":"Pit","position":"RB","fantasyTeam":"Huntington Heroes","owner":"Tyler Cummings"},
    {"round":1,"pick":10,"overall":10,"player":"Rob Gronkowski","nflTeam":"NE","position":"TE","fantasyTeam":"Winning Is My Forte","owner":"Aaron Burns"},
    {"round":1,"pick":11,"overall":11,"player":"DeAndre Hopkins","nflTeam":"Hou","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":1,"pick":12,"overall":12,"player":"Cam Newton","nflTeam":"Car","position":"QB","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":2,"pick":1,"overall":13,"player":"A.J. Green","nflTeam":"Cin","position":"WR","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":2,"pick":2,"overall":14,"player":"Allen Robinson","nflTeam":"Jax","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":2,"pick":3,"overall":15,"player":"Brandon Marshall","nflTeam":"NYG","position":"WR","fantasyTeam":"Winning Is My Forte","owner":"Aaron Burns"},
    {"round":2,"pick":4,"overall":16,"player":"Jordy Nelson","nflTeam":"GB","position":"WR","fantasyTeam":"Huntington Heroes","owner":"Tyler Cummings"},
    {"round":2,"pick":5,"overall":17,"player":"Lamar Miller","nflTeam":"Hou","position":"RB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":2,"pick":6,"overall":18,"player":"Doug Martin","nflTeam":"TB","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":2,"pick":7,"overall":19,"player":"Jamaal Charles","nflTeam":"KC","position":"RB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":2,"pick":8,"overall":20,"player":"Eddie Lacy","nflTeam":"Sea","position":"RB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":2,"pick":9,"overall":21,"player":"Dez Bryant","nflTeam":"Dal","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":2,"pick":10,"overall":22,"player":"Mark Ingram","nflTeam":"NO","position":"RB","fantasyTeam":"That's a Baaaaaaad Man","owner":"Joseph Garton"},
    {"round":2,"pick":11,"overall":23,"player":"Aaron Rodgers","nflTeam":"GB","position":"QB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":2,"pick":12,"overall":24,"player":"LeSean McCoy","nflTeam":"Buf","position":"RB","fantasyTeam":"King of the NARPS","owner":"Zachary Sizemore"},
    {"round":3,"pick":1,"overall":25,"player":"Alshon Jeffery","nflTeam":"Phi","position":"WR","fantasyTeam":"King of the NARPS","owner":"Zachary Sizemore"},
    {"round":3,"pick":2,"overall":26,"player":"Mike Evans","nflTeam":"TB","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":3,"pick":3,"overall":27,"player":"Sammy Watkins","nflTeam":"Buf","position":"WR","fantasyTeam":"That's a Baaaaaaad Man","owner":"Joseph Garton"},
    {"round":3,"pick":4,"overall":28,"player":"Jonathan Stewart","nflTeam":"Car","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":3,"pick":5,"overall":29,"player":"Amari Cooper","nflTeam":"Oak","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":3,"pick":6,"overall":30,"player":"Demaryius Thomas","nflTeam":"Den","position":"WR","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":3,"pick":7,"overall":31,"player":"Brandin Cooks","nflTeam":"NE","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":3,"pick":8,"overall":32,"player":"Keenan Allen","nflTeam":"SD","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":3,"pick":9,"overall":33,"player":"C.J. Anderson","nflTeam":"Den","position":"RB","fantasyTeam":"Huntington Heroes","owner":"Tyler Cummings"},
    {"round":3,"pick":10,"overall":34,"player":"Thomas Rawls","nflTeam":"Sea","position":"RB","fantasyTeam":"Winning Is My Forte","owner":"Aaron Burns"},
    {"round":3,"pick":11,"overall":35,"player":"Carlos Hyde","nflTeam":"SF","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":3,"pick":12,"overall":36,"player":"DeMarco Murray","nflTeam":"Ten","position":"RB","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":4,"pick":1,"overall":37,"player":"Randall Cobb","nflTeam":"GB","position":"WR","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":4,"pick":2,"overall":38,"player":"Jordan Reed","nflTeam":"Wsh","position":"TE","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":4,"pick":3,"overall":39,"player":"T.Y. Hilton","nflTeam":"Ind","position":"WR","fantasyTeam":"Winning Is My Forte","owner":"Aaron Burns"},
    {"round":4,"pick":4,"overall":40,"player":"Russell Wilson","nflTeam":"Sea","position":"QB","fantasyTeam":"Huntington Heroes","owner":"Tyler Cummings"},
    {"round":4,"pick":5,"overall":41,"player":"Matt Forte","nflTeam":"NYJ","position":"RB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":4,"pick":6,"overall":42,"player":"Jarvis Landry","nflTeam":"Mia","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":4,"pick":7,"overall":43,"player":"Andrew Luck","nflTeam":"Ind","position":"QB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":4,"pick":8,"overall":44,"player":"Ben Roethlisberger","nflTeam":"Pit","position":"QB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":4,"pick":9,"overall":45,"player":"Jeremy Hill","nflTeam":"Cin","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":4,"pick":10,"overall":46,"player":"Julian Edelman","nflTeam":"NE","position":"WR","fantasyTeam":"That's a Baaaaaaad Man","owner":"Joseph Garton"},
    {"round":4,"pick":11,"overall":47,"player":"Doug Baldwin","nflTeam":"Sea","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":4,"pick":12,"overall":48,"player":"Drew Brees","nflTeam":"NO","position":"QB","fantasyTeam":"King of the NARPS","owner":"Zachary Sizemore"},
    {"round":5,"pick":1,"overall":49,"player":"Latavius Murray","nflTeam":"Min","position":"RB","fantasyTeam":"King of the NARPS","owner":"Zachary Sizemore"},
    {"round":5,"pick":2,"overall":50,"player":"Jeremy Maclin","nflTeam":"KC","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":5,"pick":3,"overall":51,"player":"Greg Olsen","nflTeam":"Car","position":"TE","fantasyTeam":"That's a Baaaaaaad Man","owner":"Joseph Garton"},
    {"round":5,"pick":4,"overall":52,"player":"Eric Decker","nflTeam":"NYJ","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":5,"pick":5,"overall":53,"player":"Delanie Walker","nflTeam":"Ten","position":"TE","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":5,"pick":6,"overall":54,"player":"Travis Kelce","nflTeam":"KC","position":"TE","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":5,"pick":7,"overall":55,"player":"Blake Bortles","nflTeam":"Jax","position":"QB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":5,"pick":8,"overall":56,"player":"Tom Brady","nflTeam":"NE","position":"QB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":5,"pick":9,"overall":57,"player":"Larry Fitzgerald","nflTeam":"Ari","position":"WR","fantasyTeam":"Huntington Heroes","owner":"Tyler Cummings"},
    {"round":5,"pick":10,"overall":58,"player":"Golden Tate","nflTeam":"Det","position":"WR","fantasyTeam":"Winning Is My Forte","owner":"Aaron Burns"},
    {"round":5,"pick":11,"overall":59,"player":"Kelvin Benjamin","nflTeam":"Car","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":5,"pick":12,"overall":60,"player":"Emmanuel Sanders","nflTeam":"Den","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":6,"pick":1,"overall":61,"player":"Jeremy Langford","nflTeam":"Chi","position":"RB","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":6,"pick":2,"overall":62,"player":"Carson Palmer","nflTeam":"Ari","position":"QB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":6,"pick":3,"overall":63,"player":"Melvin Gordon","nflTeam":"SD","position":"RB","fantasyTeam":"Winning Is My Forte","owner":"Aaron Burns"},
    {"round":6,"pick":4,"overall":64,"player":"Donte Moncrief","nflTeam":"Ind","position":"WR","fantasyTeam":"Huntington Heroes","owner":"Tyler Cummings"},
    {"round":6,"pick":5,"overall":65,"player":"Michael Floyd","nflTeam":"NE","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":6,"pick":6,"overall":66,"player":"Frank Gore","nflTeam":"Ind","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":6,"pick":7,"overall":67,"player":"Stefon Diggs","nflTeam":"Min","position":"WR","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":6,"pick":8,"overall":68,"player":"Arian Foster","nflTeam":"Mia","position":"RB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":6,"pick":9,"overall":69,"player":"John Brown","nflTeam":"Ari","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":6,"pick":10,"overall":70,"player":"Ryan Mathews","nflTeam":"Phi","position":"RB","fantasyTeam":"That's a Baaaaaaad Man","owner":"Joseph Garton"},
    {"round":6,"pick":11,"overall":71,"player":"Danny Woodhead","nflTeam":"Bal","position":"RB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":6,"pick":12,"overall":72,"player":"Coby Fleener","nflTeam":"NO","position":"TE","fantasyTeam":"King of the NARPS","owner":"Zachary Sizemore"},
    {"round":7,"pick":1,"overall":73,"player":"Ameer Abdullah","nflTeam":"Det","position":"RB","fantasyTeam":"King of the NARPS","owner":"Zachary Sizemore"},
    {"round":7,"pick":2,"overall":74,"player":"Gary Barnidge","nflTeam":"Cle","position":"TE","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":7,"pick":3,"overall":75,"player":"Matt Jones","nflTeam":"Wsh","position":"RB","fantasyTeam":"That's a Baaaaaaad Man","owner":"Joseph Garton"},
    {"round":7,"pick":4,"overall":76,"player":"Jordan Matthews","nflTeam":"Phi","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":7,"pick":5,"overall":77,"player":"Tyler Lockett","nflTeam":"Sea","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":7,"pick":6,"overall":78,"player":"Josh Gordon","nflTeam":"Cle","position":"WR","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":7,"pick":7,"overall":79,"player":"Allen Hurns","nflTeam":"Jax","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":7,"pick":8,"overall":80,"player":"Justin Forsett","nflTeam":"Den","position":"RB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":7,"pick":9,"overall":81,"player":"Broncos D/ST","nflTeam":"Den","position":"D/ST","fantasyTeam":"Huntington Heroes","owner":"Tyler Cummings"},
    {"round":7,"pick":10,"overall":82,"player":"T.J. Yeldon","nflTeam":"Jax","position":"RB","fantasyTeam":"Winning Is My Forte","owner":"Aaron Burns"},
    {"round":7,"pick":11,"overall":83,"player":"Rashad Jennings","nflTeam":"NYG","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":7,"pick":12,"overall":84,"player":"Derrick Henry","nflTeam":"Ten","position":"RB","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":8,"pick":1,"overall":85,"player":"DeSean Jackson","nflTeam":"TB","position":"WR","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":8,"pick":2,"overall":86,"player":"Giovani Bernard","nflTeam":"Cin","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":8,"pick":3,"overall":87,"player":"Willie Snead","nflTeam":"NO","position":"WR","fantasyTeam":"Winning Is My Forte","owner":"Aaron Burns"},
    {"round":8,"pick":4,"overall":88,"player":"DeAngelo Williams","nflTeam":"Pit","position":"RB","fantasyTeam":"Huntington Heroes","owner":"Tyler Cummings"},
    {"round":8,"pick":5,"overall":89,"player":"Marvin Jones","nflTeam":"Det","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":8,"pick":6,"overall":90,"player":"LeGarrette Blount","nflTeam":"NE","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":8,"pick":7,"overall":91,"player":"Spencer Ware","nflTeam":"KC","position":"RB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":8,"pick":8,"overall":92,"player":"Chris Ivory","nflTeam":"Jax","position":"RB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":8,"pick":9,"overall":93,"player":"Duke Johnson Jr.","nflTeam":"Cle","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":8,"pick":10,"overall":94,"player":"Eli Manning","nflTeam":"NYG","position":"QB","fantasyTeam":"That's a Baaaaaaad Man","owner":"Joseph Garton"},
    {"round":8,"pick":11,"overall":95,"player":"Andy Dalton","nflTeam":"Cin","position":"QB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":8,"pick":12,"overall":96,"player":"Kevin White","nflTeam":"Chi","position":"WR","fantasyTeam":"King of the NARPS","owner":"Zachary Sizemore"},
    {"round":9,"pick":1,"overall":97,"player":"Charles Sims","nflTeam":"TB","position":"RB","fantasyTeam":"King of the NARPS","owner":"Zachary Sizemore"},
    {"round":9,"pick":2,"overall":98,"player":"Jay Ajayi","nflTeam":"Mia","position":"RB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":9,"pick":3,"overall":99,"player":"Michael Crabtree","nflTeam":"Oak","position":"WR","fantasyTeam":"That's a Baaaaaaad Man","owner":"Joseph Garton"},
    {"round":9,"pick":4,"overall":100,"player":"Tyler Eifert","nflTeam":"Cin","position":"TE","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":9,"pick":5,"overall":101,"player":"Markus Wheaton","nflTeam":"Chi","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":9,"pick":6,"overall":102,"player":"Travis Benjamin","nflTeam":"SD","position":"WR","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":9,"pick":7,"overall":103,"player":"DeVante Parker","nflTeam":"Mia","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":9,"pick":8,"overall":104,"player":"Julius Thomas","nflTeam":"Mia","position":"TE","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":9,"pick":9,"overall":105,"player":"Antonio Gates","nflTeam":"SD","position":"TE","fantasyTeam":"Huntington Heroes","owner":"Tyler Cummings"},
    {"round":9,"pick":10,"overall":106,"player":"Tavon Austin","nflTeam":"LA","position":"WR","fantasyTeam":"Winning Is My Forte","owner":"Aaron Burns"},
    {"round":9,"pick":11,"overall":107,"player":"Seahawks D/ST","nflTeam":"Sea","position":"D/ST","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":9,"pick":12,"overall":108,"player":"Vincent Jackson","nflTeam":"TB","position":"WR","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":10,"pick":1,"overall":109,"player":"Zach Ertz","nflTeam":"Phi","position":"TE","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":10,"pick":2,"overall":110,"player":"Sterling Shepard","nflTeam":"NYG","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":10,"pick":3,"overall":111,"player":"Kirk Cousins","nflTeam":"Wsh","position":"QB","fantasyTeam":"Winning Is My Forte","owner":"Aaron Burns"},
    {"round":10,"pick":4,"overall":112,"player":"Darren Sproles","nflTeam":"Phi","position":"RB","fantasyTeam":"Huntington Heroes","owner":"Tyler Cummings"},
    {"round":10,"pick":5,"overall":113,"player":"Philip Rivers","nflTeam":"SD","position":"QB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":10,"pick":6,"overall":114,"player":"Matthew Stafford","nflTeam":"Det","position":"QB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":10,"pick":7,"overall":115,"player":"Jason Witten","nflTeam":"Dal","position":"TE","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":10,"pick":8,"overall":116,"player":"Jimmy Graham","nflTeam":"Sea","position":"TE","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":10,"pick":9,"overall":117,"player":"Torrey Smith","nflTeam":"Phi","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":10,"pick":10,"overall":118,"player":"Bilal Powell","nflTeam":"NYJ","position":"RB","fantasyTeam":"That's a Baaaaaaad Man","owner":"Joseph Garton"},
    {"round":10,"pick":11,"overall":119,"player":"Isaiah Crowell","nflTeam":"Cle","position":"RB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":10,"pick":12,"overall":120,"player":"Michael Thomas","nflTeam":"NO","position":"WR","fantasyTeam":"King of the NARPS","owner":"Zachary Sizemore"},
    {"round":11,"pick":1,"overall":121,"player":"Derek Carr","nflTeam":"Oak","position":"QB","fantasyTeam":"King of the NARPS","owner":"Zachary Sizemore"},
    {"round":11,"pick":2,"overall":122,"player":"Devin Funchess","nflTeam":"Car","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":11,"pick":3,"overall":123,"player":"Theo Riddick","nflTeam":"Det","position":"RB","fantasyTeam":"That's a Baaaaaaad Man","owner":"Joseph Garton"},
    {"round":11,"pick":4,"overall":124,"player":"Tyrod Taylor","nflTeam":"Buf","position":"QB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":11,"pick":5,"overall":125,"player":"James Starks","nflTeam":"GB","position":"RB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":11,"pick":6,"overall":126,"player":"Jets D/ST","nflTeam":"NYJ","position":"D/ST","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":11,"pick":7,"overall":127,"player":"Panthers D/ST","nflTeam":"Car","position":"D/ST","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":11,"pick":8,"overall":128,"player":"Tyler Boyd","nflTeam":"Cin","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":11,"pick":9,"overall":129,"player":"Martellus Bennett","nflTeam":"GB","position":"TE","fantasyTeam":"Huntington Heroes","owner":"Tyler Cummings"},
    {"round":11,"pick":10,"overall":130,"player":"Cardinals D/ST","nflTeam":"Ari","position":"D/ST","fantasyTeam":"Winning Is My Forte","owner":"Aaron Burns"},
    {"round":11,"pick":11,"overall":131,"player":"Terrance West","nflTeam":"Bal","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":11,"pick":12,"overall":132,"player":"Virgil Green","nflTeam":"Den","position":"TE","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":12,"pick":1,"overall":133,"player":"Kamar Aiken","nflTeam":"Ind","position":"WR","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":12,"pick":2,"overall":134,"player":"Chris Hogan","nflTeam":"NE","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":12,"pick":3,"overall":135,"player":"Christine Michael","nflTeam":"GB","position":"RB","fantasyTeam":"Winning Is My Forte","owner":"Aaron Burns"},
    {"round":12,"pick":4,"overall":136,"player":"Bengals D/ST","nflTeam":"Cin","position":"D/ST","fantasyTeam":"Huntington Heroes","owner":"Tyler Cummings"},
    {"round":12,"pick":5,"overall":137,"player":"Devontae Booker","nflTeam":"Den","position":"RB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":12,"pick":6,"overall":138,"player":"Zach Miller","nflTeam":"Chi","position":"TE","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":12,"pick":7,"overall":139,"player":"Brock Osweiler","nflTeam":"Cle","position":"QB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":12,"pick":8,"overall":140,"player":"Robert Griffin III","nflTeam":"Cle","position":"QB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":12,"pick":9,"overall":141,"player":"Stephen Gostkowski","nflTeam":"NE","position":"K","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":12,"pick":10,"overall":142,"player":"Corey Coleman","nflTeam":"Cle","position":"WR","fantasyTeam":"That's a Baaaaaaad Man","owner":"Joseph Garton"},
    {"round":12,"pick":11,"overall":143,"player":"Texans D/ST","nflTeam":"Hou","position":"D/ST","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":12,"pick":12,"overall":144,"player":"Chiefs D/ST","nflTeam":"KC","position":"D/ST","fantasyTeam":"King of the NARPS","owner":"Zachary Sizemore"},
    {"round":13,"pick":1,"overall":145,"player":"Mohamed Sanu","nflTeam":"Atl","position":"WR","fantasyTeam":"King of the NARPS","owner":"Zachary Sizemore"},
    {"round":13,"pick":2,"overall":146,"player":"Steven Hauschka","nflTeam":"Buf","position":"K","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":13,"pick":3,"overall":147,"player":"Packers D/ST","nflTeam":"GB","position":"D/ST","fantasyTeam":"That's a Baaaaaaad Man","owner":"Joseph Garton"},
    {"round":13,"pick":4,"overall":148,"player":"Steve Smith Sr.","nflTeam":"Bal","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":13,"pick":5,"overall":149,"player":"Raiders D/ST","nflTeam":"Oak","position":"D/ST","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":13,"pick":6,"overall":150,"player":"Dan Bailey","nflTeam":"Dal","position":"K","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":13,"pick":7,"overall":151,"player":"Will Fuller V","nflTeam":"Hou","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":13,"pick":8,"overall":152,"player":"Vikings D/ST","nflTeam":"Min","position":"D/ST","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":13,"pick":9,"overall":153,"player":"Mike Wallace","nflTeam":"Bal","position":"WR","fantasyTeam":"Huntington Heroes","owner":"Tyler Cummings"},
    {"round":13,"pick":10,"overall":154,"player":"Tevin Coleman","nflTeam":"Atl","position":"RB","fantasyTeam":"Winning Is My Forte","owner":"Aaron Burns"},
    {"round":13,"pick":11,"overall":155,"player":"Phillip Dorsett","nflTeam":"Ind","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":13,"pick":12,"overall":156,"player":"James White","nflTeam":"NE","position":"RB","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":14,"pick":1,"overall":157,"player":"Rams D/ST","nflTeam":"LA","position":"D/ST","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":14,"pick":2,"overall":158,"player":"Justin Tucker","nflTeam":"Bal","position":"K","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":14,"pick":3,"overall":159,"player":"Mason Crosby","nflTeam":"GB","position":"K","fantasyTeam":"Winning Is My Forte","owner":"Aaron Burns"},
    {"round":14,"pick":4,"overall":160,"player":"Chandler Catanzaro","nflTeam":"NYJ","position":"K","fantasyTeam":"Huntington Heroes","owner":"Tyler Cummings"},
    {"round":14,"pick":5,"overall":161,"player":"Adam Vinatieri","nflTeam":"Ind","position":"K","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":14,"pick":6,"overall":162,"player":"Graham Gano","nflTeam":"Car","position":"K","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":14,"pick":7,"overall":163,"player":"Tajae Sharpe","nflTeam":"Ten","position":"WR","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":14,"pick":8,"overall":164,"player":"Blair Walsh","nflTeam":"Sea","position":"K","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":14,"pick":9,"overall":165,"player":"Patriots D/ST","nflTeam":"NE","position":"D/ST","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":14,"pick":10,"overall":166,"player":"Matt Prater","nflTeam":"Det","position":"K","fantasyTeam":"That's a Baaaaaaad Man","owner":"Joseph Garton"},
    {"round":14,"pick":11,"overall":167,"player":"Chris Boswell","nflTeam":"Pit","position":"K","fantasyTeam":"Plaxicolt's 45","owner":"Matt Geiger"},
    {"round":14,"pick":12,"overall":168,"player":"Roberto Aguayo","nflTeam":"TB","position":"K","fantasyTeam":"King of the NARPS","owner":"Zachary Sizemore"}
  ],
  "2017": [
    {"round":1,"pick":1,"overall":1,"player":"Aaron Rodgers","nflTeam":"GB","position":"QB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":1,"pick":2,"overall":2,"player":"DeMarco Murray","nflTeam":"Ten","position":"RB","fantasyTeam":"Eddie Lacy's Donut Factory","owner":"Matt Geiger"},
    {"round":1,"pick":3,"overall":3,"player":"Todd Gurley II","nflTeam":"LAR","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":1,"pick":4,"overall":4,"player":"Rob Gronkowski","nflTeam":"NE","position":"TE","fantasyTeam":"Winning Is My Forte","owner":"Aaron Burns"},
    {"round":1,"pick":5,"overall":5,"player":"Julio Jones","nflTeam":"Atl","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":1,"pick":6,"overall":6,"player":"David Johnson","nflTeam":"Ari","position":"RB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":1,"pick":7,"overall":7,"player":"Le'Veon Bell","nflTeam":"Pit","position":"RB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":1,"pick":8,"overall":8,"player":"Devonta Freeman","nflTeam":"Atl","position":"RB","fantasyTeam":"Charles Town Colonels","owner":"Tyler Cummings"},
    {"round":1,"pick":9,"overall":9,"player":"Brandin Cooks","nflTeam":"LAR","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":1,"pick":10,"overall":10,"player":"Matt Ryan","nflTeam":"Atl","position":"QB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":1,"pick":11,"overall":11,"player":"Odell Beckham Jr.","nflTeam":"NYG","position":"WR","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":1,"pick":12,"overall":12,"player":"Antonio Brown","nflTeam":"Pit","position":"WR","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":2,"pick":1,"overall":13,"player":"Jordy Nelson","nflTeam":"Oak","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":2,"pick":2,"overall":14,"player":"Mike Evans","nflTeam":"TB","position":"WR","fantasyTeam":"Eddie Lacy's Donut Factory","owner":"Matt Geiger"},
    {"round":2,"pick":3,"overall":15,"player":"LeSean McCoy","nflTeam":"Buf","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":2,"pick":4,"overall":16,"player":"A.J. Green","nflTeam":"Cin","position":"WR","fantasyTeam":"Winning Is My Forte","owner":"Aaron Burns"},
    {"round":2,"pick":5,"overall":17,"player":"Jay Ajayi","nflTeam":"Phi","position":"RB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":2,"pick":6,"overall":18,"player":"Melvin Gordon","nflTeam":"LAC","position":"RB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":2,"pick":7,"overall":19,"player":"Michael Thomas","nflTeam":"NO","position":"WR","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":2,"pick":8,"overall":20,"player":"Amari Cooper","nflTeam":"Oak","position":"WR","fantasyTeam":"Charles Town Colonels","owner":"Tyler Cummings"},
    {"round":2,"pick":9,"overall":21,"player":"Jordan Howard","nflTeam":"Chi","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":2,"pick":10,"overall":22,"player":"T.Y. Hilton","nflTeam":"Ind","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":2,"pick":11,"overall":23,"player":"Marshawn Lynch","nflTeam":"Oak","position":"RB","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":2,"pick":12,"overall":24,"player":"Leonard Fournette","nflTeam":"Jax","position":"RB","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":3,"pick":1,"overall":25,"player":"Lamar Miller","nflTeam":"Hou","position":"RB","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":3,"pick":2,"overall":26,"player":"Ty Montgomery","nflTeam":"GB","position":"RB","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":3,"pick":3,"overall":27,"player":"Christian McCaffrey","nflTeam":"Car","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":3,"pick":4,"overall":28,"player":"Kareem Hunt","nflTeam":"KC","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":3,"pick":5,"overall":29,"player":"Doug Baldwin","nflTeam":"Sea","position":"WR","fantasyTeam":"Charles Town Colonels","owner":"Tyler Cummings"},
    {"round":3,"pick":6,"overall":30,"player":"Ezekiel Elliott","nflTeam":"Dal","position":"RB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":3,"pick":7,"overall":31,"player":"Dez Bryant","nflTeam":"Dal","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":3,"pick":8,"overall":32,"player":"Terrelle Pryor Sr.","nflTeam":"NYJ","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":3,"pick":9,"overall":33,"player":"Isaiah Crowell","nflTeam":"NYJ","position":"RB","fantasyTeam":"Winning Is My Forte","owner":"Aaron Burns"},
    {"round":3,"pick":10,"overall":34,"player":"Demaryius Thomas","nflTeam":"Den","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":3,"pick":11,"overall":35,"player":"Joe Mixon","nflTeam":"Cin","position":"RB","fantasyTeam":"Eddie Lacy's Donut Factory","owner":"Matt Geiger"},
    {"round":3,"pick":12,"overall":36,"player":"DeAndre Hopkins","nflTeam":"Hou","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":4,"pick":1,"overall":37,"player":"Carlos Hyde","nflTeam":"Cle","position":"RB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":4,"pick":2,"overall":38,"player":"Drew Brees","nflTeam":"NO","position":"QB","fantasyTeam":"Eddie Lacy's Donut Factory","owner":"Matt Geiger"},
    {"round":4,"pick":3,"overall":39,"player":"Alshon Jeffery","nflTeam":"Phi","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":4,"pick":4,"overall":40,"player":"Keenan Allen","nflTeam":"LAC","position":"WR","fantasyTeam":"Winning Is My Forte","owner":"Aaron Burns"},
    {"round":4,"pick":5,"overall":41,"player":"Tom Brady","nflTeam":"NE","position":"QB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":4,"pick":6,"overall":42,"player":"Dalvin Cook","nflTeam":"Min","position":"RB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":4,"pick":7,"overall":43,"player":"Travis Kelce","nflTeam":"KC","position":"TE","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":4,"pick":8,"overall":44,"player":"Davante Adams","nflTeam":"GB","position":"WR","fantasyTeam":"Charles Town Colonels","owner":"Tyler Cummings"},
    {"round":4,"pick":9,"overall":45,"player":"Michael Crabtree","nflTeam":"Bal","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":4,"pick":10,"overall":46,"player":"Golden Tate","nflTeam":"Det","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":4,"pick":11,"overall":47,"player":"Martavis Bryant","nflTeam":"Pit","position":"WR","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":4,"pick":12,"overall":48,"player":"Mark Ingram","nflTeam":"NO","position":"RB","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":5,"pick":1,"overall":49,"player":"Jordan Reed","nflTeam":"Wsh","position":"TE","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":5,"pick":2,"overall":50,"player":"Cam Newton","nflTeam":"Car","position":"QB","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":5,"pick":3,"overall":51,"player":"Danny Woodhead","nflTeam":"Bal","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":5,"pick":4,"overall":52,"player":"Frank Gore","nflTeam":"Mia","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":5,"pick":5,"overall":53,"player":"Bilal Powell","nflTeam":"NYJ","position":"RB","fantasyTeam":"Charles Town Colonels","owner":"Tyler Cummings"},
    {"round":5,"pick":6,"overall":54,"player":"Kelvin Benjamin","nflTeam":"Buf","position":"WR","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":5,"pick":7,"overall":55,"player":"Tyreek Hill","nflTeam":"KC","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":5,"pick":8,"overall":56,"player":"Brandon Marshall","nflTeam":"NYG","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":5,"pick":9,"overall":57,"player":"Larry Fitzgerald","nflTeam":"Ari","position":"WR","fantasyTeam":"Winning Is My Forte","owner":"Aaron Burns"},
    {"round":5,"pick":10,"overall":58,"player":"Greg Olsen","nflTeam":"Car","position":"TE","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":5,"pick":11,"overall":59,"player":"Pierre Garcon","nflTeam":"SF","position":"WR","fantasyTeam":"Eddie Lacy's Donut Factory","owner":"Matt Geiger"},
    {"round":5,"pick":12,"overall":60,"player":"Mike Gillislee","nflTeam":"NE","position":"RB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":6,"pick":1,"overall":61,"player":"Emmanuel Sanders","nflTeam":"Den","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":6,"pick":2,"overall":62,"player":"Willie Snead","nflTeam":"NO","position":"WR","fantasyTeam":"Eddie Lacy's Donut Factory","owner":"Matt Geiger"},
    {"round":6,"pick":3,"overall":63,"player":"Sammy Watkins","nflTeam":"KC","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":6,"pick":4,"overall":64,"player":"Ameer Abdullah","nflTeam":"Det","position":"RB","fantasyTeam":"Winning Is My Forte","owner":"Aaron Burns"},
    {"round":6,"pick":5,"overall":65,"player":"C.J. Anderson","nflTeam":"Den","position":"RB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":6,"pick":6,"overall":66,"player":"Jamison Crowder","nflTeam":"Wsh","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":6,"pick":7,"overall":67,"player":"Matthew Stafford","nflTeam":"Det","position":"QB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":6,"pick":8,"overall":68,"player":"Adrian Peterson","nflTeam":"Ari","position":"RB","fantasyTeam":"Charles Town Colonels","owner":"Tyler Cummings"},
    {"round":6,"pick":9,"overall":69,"player":"Paul Perkins","nflTeam":"NYG","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":6,"pick":10,"overall":70,"player":"Jarvis Landry","nflTeam":"Cle","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":6,"pick":11,"overall":71,"player":"Rob Kelley","nflTeam":"Wsh","position":"RB","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":6,"pick":12,"overall":72,"player":"Russell Wilson","nflTeam":"Sea","position":"QB","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":7,"pick":1,"overall":73,"player":"Allen Robinson","nflTeam":"Chi","position":"WR","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":7,"pick":2,"overall":74,"player":"Stefon Diggs","nflTeam":"Min","position":"WR","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":7,"pick":3,"overall":75,"player":"Jimmy Graham","nflTeam":"GB","position":"TE","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":7,"pick":4,"overall":76,"player":"DeSean Jackson","nflTeam":"TB","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":7,"pick":5,"overall":77,"player":"Darren McFadden","nflTeam":"Dal","position":"RB","fantasyTeam":"Charles Town Colonels","owner":"Tyler Cummings"},
    {"round":7,"pick":6,"overall":78,"player":"Martellus Bennett","nflTeam":"NE","position":"TE","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":7,"pick":7,"overall":79,"player":"Terrance West","nflTeam":"Bal","position":"RB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":7,"pick":8,"overall":80,"player":"Theo Riddick","nflTeam":"Det","position":"RB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":7,"pick":9,"overall":81,"player":"Chris Hogan","nflTeam":"NE","position":"WR","fantasyTeam":"Winning Is My Forte","owner":"Aaron Burns"},
    {"round":7,"pick":10,"overall":82,"player":"DeVante Parker","nflTeam":"Mia","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":7,"pick":11,"overall":83,"player":"Eddie Lacy","nflTeam":"Sea","position":"RB","fantasyTeam":"Eddie Lacy's Donut Factory","owner":"Matt Geiger"},
    {"round":7,"pick":12,"overall":84,"player":"Jeremy Maclin","nflTeam":"Bal","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":8,"pick":1,"overall":85,"player":"Jonathan Stewart","nflTeam":"NYG","position":"RB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":8,"pick":2,"overall":86,"player":"Eric Decker","nflTeam":"Ten","position":"WR","fantasyTeam":"Eddie Lacy's Donut Factory","owner":"Matt Geiger"},
    {"round":8,"pick":3,"overall":87,"player":"Doug Martin","nflTeam":"Oak","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":8,"pick":4,"overall":88,"player":"Corey Coleman","nflTeam":"Cle","position":"WR","fantasyTeam":"Winning Is My Forte","owner":"Aaron Burns"},
    {"round":8,"pick":5,"overall":89,"player":"Ted Ginn Jr.","nflTeam":"NO","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":8,"pick":6,"overall":90,"player":"Delanie Walker","nflTeam":"Ten","position":"TE","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":8,"pick":7,"overall":91,"player":"Kirk Cousins","nflTeam":"Min","position":"QB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":8,"pick":8,"overall":92,"player":"Marcus Mariota","nflTeam":"Ten","position":"QB","fantasyTeam":"Charles Town Colonels","owner":"Tyler Cummings"},
    {"round":8,"pick":9,"overall":93,"player":"Andrew Luck","nflTeam":"Ind","position":"QB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":8,"pick":10,"overall":94,"player":"Tevin Coleman","nflTeam":"Atl","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":8,"pick":11,"overall":95,"player":"Tyler Eifert","nflTeam":"Cin","position":"TE","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":8,"pick":12,"overall":96,"player":"Donte Moncrief","nflTeam":"Jax","position":"WR","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":9,"pick":1,"overall":97,"player":"Duke Johnson Jr.","nflTeam":"Cle","position":"RB","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":9,"pick":2,"overall":98,"player":"Broncos D/ST","nflTeam":"Den","position":"D/ST","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":9,"pick":3,"overall":99,"player":"Matt Forte","nflTeam":"NYJ","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":9,"pick":4,"overall":100,"player":"Tyrell Williams","nflTeam":"LAC","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":9,"pick":5,"overall":101,"player":"Kyle Rudolph","nflTeam":"Min","position":"TE","fantasyTeam":"Charles Town Colonels","owner":"Tyler Cummings"},
    {"round":9,"pick":6,"overall":102,"player":"Danny Amendola","nflTeam":"Mia","position":"WR","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":9,"pick":7,"overall":103,"player":"LeGarrette Blount","nflTeam":"Det","position":"RB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":9,"pick":8,"overall":104,"player":"Zach Ertz","nflTeam":"Phi","position":"TE","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":9,"pick":9,"overall":105,"player":"Darren Sproles","nflTeam":"Phi","position":"RB","fantasyTeam":"Winning Is My Forte","owner":"Aaron Burns"},
    {"round":9,"pick":10,"overall":106,"player":"Zay Jones","nflTeam":"Buf","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":9,"pick":11,"overall":107,"player":"Rishard Matthews","nflTeam":"Ten","position":"WR","fantasyTeam":"Eddie Lacy's Donut Factory","owner":"Matt Geiger"},
    {"round":9,"pick":12,"overall":108,"player":"Mike Wallace","nflTeam":"Phi","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":10,"pick":1,"overall":109,"player":"Randall Cobb","nflTeam":"GB","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":10,"pick":2,"overall":110,"player":"Derrick Henry","nflTeam":"Ten","position":"RB","fantasyTeam":"Eddie Lacy's Donut Factory","owner":"Matt Geiger"},
    {"round":10,"pick":3,"overall":111,"player":"Jameis Winston","nflTeam":"TB","position":"QB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":10,"pick":4,"overall":112,"player":"Derek Carr","nflTeam":"Oak","position":"QB","fantasyTeam":"Winning Is My Forte","owner":"Aaron Burns"},
    {"round":10,"pick":5,"overall":113,"player":"Thomas Rawls","nflTeam":"NYJ","position":"RB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":10,"pick":6,"overall":114,"player":"Kenny Britt","nflTeam":"NE","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":10,"pick":7,"overall":115,"player":"Jacquizz Rodgers","nflTeam":"TB","position":"RB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":10,"pick":8,"overall":116,"player":"Corey Davis","nflTeam":"Ten","position":"WR","fantasyTeam":"Charles Town Colonels","owner":"Tyler Cummings"},
    {"round":10,"pick":9,"overall":117,"player":"Hunter Henry","nflTeam":"LAC","position":"TE","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":10,"pick":10,"overall":118,"player":"Jordan Matthews","nflTeam":"NE","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":10,"pick":11,"overall":119,"player":"James White","nflTeam":"NE","position":"RB","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":10,"pick":12,"overall":120,"player":"Marvin Jones Jr.","nflTeam":"Det","position":"WR","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":11,"pick":1,"overall":121,"player":"Ben Roethlisberger","nflTeam":"Pit","position":"QB","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":11,"pick":2,"overall":122,"player":"Jamaal Charles","nflTeam":"Den","position":"RB","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":11,"pick":3,"overall":123,"player":"Seahawks D/ST","nflTeam":"Sea","position":"D/ST","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":11,"pick":4,"overall":124,"player":"Dak Prescott","nflTeam":"Dal","position":"QB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":11,"pick":5,"overall":125,"player":"Kevin White","nflTeam":"Chi","position":"WR","fantasyTeam":"Charles Town Colonels","owner":"Tyler Cummings"},
    {"round":11,"pick":6,"overall":126,"player":"Torrey Smith","nflTeam":"Car","position":"WR","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":11,"pick":7,"overall":127,"player":"Texans D/ST","nflTeam":"Hou","position":"D/ST","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":11,"pick":8,"overall":128,"player":"Cole Beasley","nflTeam":"Dal","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":11,"pick":9,"overall":129,"player":"Charcandrick West","nflTeam":"KC","position":"RB","fantasyTeam":"Winning Is My Forte","owner":"Aaron Burns"},
    {"round":11,"pick":10,"overall":130,"player":"Samaje Perine","nflTeam":"Wsh","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":11,"pick":11,"overall":131,"player":"Coby Fleener","nflTeam":"NO","position":"TE","fantasyTeam":"Eddie Lacy's Donut Factory","owner":"Matt Geiger"},
    {"round":11,"pick":12,"overall":132,"player":"Cardinals D/ST","nflTeam":"Ari","position":"D/ST","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":12,"pick":1,"overall":133,"player":"Cameron Brate","nflTeam":"TB","position":"TE","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":12,"pick":2,"overall":134,"player":"Justin Tucker","nflTeam":"Bal","position":"K","fantasyTeam":"Eddie Lacy's Donut Factory","owner":"Matt Geiger"},
    {"round":12,"pick":3,"overall":135,"player":"Panthers D/ST","nflTeam":"Car","position":"D/ST","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":12,"pick":4,"overall":136,"player":"Chiefs D/ST","nflTeam":"KC","position":"D/ST","fantasyTeam":"Winning Is My Forte","owner":"Aaron Burns"},
    {"round":12,"pick":5,"overall":137,"player":"Tyler Lockett","nflTeam":"Sea","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":12,"pick":6,"overall":138,"player":"Philip Rivers","nflTeam":"LAC","position":"QB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":12,"pick":7,"overall":139,"player":"Stephen Gostkowski","nflTeam":"NE","position":"K","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":12,"pick":8,"overall":140,"player":"Adam Thielen","nflTeam":"Min","position":"WR","fantasyTeam":"Charles Town Colonels","owner":"Tyler Cummings"},
    {"round":12,"pick":9,"overall":141,"player":"Giovani Bernard","nflTeam":"Cin","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":12,"pick":10,"overall":142,"player":"C.J. Prosise","nflTeam":"Sea","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":12,"pick":11,"overall":143,"player":"Sterling Shepard","nflTeam":"NYG","position":"WR","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":12,"pick":12,"overall":144,"player":"John Brown","nflTeam":"Bal","position":"WR","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":13,"pick":1,"overall":145,"player":"Jaguars D/ST","nflTeam":"Jax","position":"D/ST","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":13,"pick":2,"overall":146,"player":"Latavius Murray","nflTeam":"Min","position":"RB","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":13,"pick":3,"overall":147,"player":"Chris Thompson","nflTeam":"Wsh","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":13,"pick":4,"overall":148,"player":"Matt Bryant","nflTeam":"Atl","position":"K","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":13,"pick":5,"overall":149,"player":"Vikings D/ST","nflTeam":"Min","position":"D/ST","fantasyTeam":"Charles Town Colonels","owner":"Tyler Cummings"},
    {"round":13,"pick":6,"overall":150,"player":"Giants D/ST","nflTeam":"NYG","position":"D/ST","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":13,"pick":7,"overall":151,"player":"Josh Doctson","nflTeam":"Wsh","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":13,"pick":8,"overall":152,"player":"Patriots D/ST","nflTeam":"NE","position":"D/ST","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":13,"pick":9,"overall":153,"player":"Carson Wentz","nflTeam":"Phi","position":"QB","fantasyTeam":"Winning Is My Forte","owner":"Aaron Burns"},
    {"round":13,"pick":10,"overall":154,"player":"Dan Bailey","nflTeam":"Dal","position":"K","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":13,"pick":11,"overall":155,"player":"Taylor Gabriel","nflTeam":"Chi","position":"WR","fantasyTeam":"Eddie Lacy's Donut Factory","owner":"Matt Geiger"},
    {"round":13,"pick":12,"overall":156,"player":"Adam Vinatieri","nflTeam":"Ind","position":"K","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":14,"pick":1,"overall":157,"player":"Jeremy Hill","nflTeam":"NE","position":"RB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":14,"pick":2,"overall":158,"player":"Titans D/ST","nflTeam":"Ten","position":"D/ST","fantasyTeam":"Eddie Lacy's Donut Factory","owner":"Matt Geiger"},
    {"round":14,"pick":3,"overall":159,"player":"Rex Burkhead","nflTeam":"NE","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":14,"pick":4,"overall":160,"player":"Wil Lutz","nflTeam":"NO","position":"K","fantasyTeam":"Winning Is My Forte","owner":"Aaron Burns"},
    {"round":14,"pick":5,"overall":161,"player":"Matt Prater","nflTeam":"Det","position":"K","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":14,"pick":6,"overall":162,"player":"Dustin Hopkins","nflTeam":"Wsh","position":"K","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":14,"pick":7,"overall":163,"player":"Mohamed Sanu","nflTeam":"Atl","position":"WR","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":14,"pick":8,"overall":164,"player":"Cairo Santos","nflTeam":"NYJ","position":"K","fantasyTeam":"Charles Town Colonels","owner":"Tyler Cummings"},
    {"round":14,"pick":9,"overall":165,"player":"Eagles D/ST","nflTeam":"Phi","position":"D/ST","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":14,"pick":10,"overall":166,"player":"Mason Crosby","nflTeam":"GB","position":"K","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":14,"pick":11,"overall":167,"player":"Chris Boswell","nflTeam":"Pit","position":"K","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":14,"pick":12,"overall":168,"player":"Caleb Sturgis","nflTeam":"LAC","position":"K","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"}
  ],
  "2018": [
    {"round":1,"pick":1,"overall":1,"player":"Todd Gurley II","nflTeam":"LAR","position":"RB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":1,"pick":2,"overall":2,"player":"Le'Veon Bell","nflTeam":"Pit","position":"RB","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":1,"pick":3,"overall":3,"player":"David Johnson","nflTeam":"Ari","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":1,"pick":4,"overall":4,"player":"Ezekiel Elliott","nflTeam":"Dal","position":"RB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":1,"pick":5,"overall":5,"player":"Antonio Brown","nflTeam":"Pit","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":1,"pick":6,"overall":6,"player":"Saquon Barkley","nflTeam":"NYG","position":"RB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":1,"pick":7,"overall":7,"player":"Alvin Kamara","nflTeam":"NO","position":"RB","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":1,"pick":8,"overall":8,"player":"Julio Jones","nflTeam":"Atl","position":"WR","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":1,"pick":9,"overall":9,"player":"DeAndre Hopkins","nflTeam":"Hou","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":1,"pick":10,"overall":10,"player":"Leonard Fournette","nflTeam":"Jax","position":"RB","fantasyTeam":"O Le'Veon, Where Art Thou?","owner":"Aaron Burns"},
    {"round":1,"pick":11,"overall":11,"player":"Kareem Hunt","nflTeam":"FA","position":"RB","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":1,"pick":12,"overall":12,"player":"Christian McCaffrey","nflTeam":"Car","position":"RB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":2,"pick":1,"overall":13,"player":"Melvin Gordon","nflTeam":"LAC","position":"RB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":2,"pick":2,"overall":14,"player":"Dalvin Cook","nflTeam":"Min","position":"RB","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":2,"pick":3,"overall":15,"player":"Keenan Allen","nflTeam":"LAC","position":"WR","fantasyTeam":"O Le'Veon, Where Art Thou?","owner":"Aaron Burns"},
    {"round":2,"pick":4,"overall":16,"player":"Odell Beckham Jr.","nflTeam":"NYG","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":2,"pick":5,"overall":17,"player":"Davante Adams","nflTeam":"GB","position":"WR","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":2,"pick":6,"overall":18,"player":"A.J. Green","nflTeam":"Cin","position":"WR","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":2,"pick":7,"overall":19,"player":"Devonta Freeman","nflTeam":"Atl","position":"RB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":2,"pick":8,"overall":20,"player":"Michael Thomas","nflTeam":"NO","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":2,"pick":9,"overall":21,"player":"Mike Evans","nflTeam":"TB","position":"WR","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":2,"pick":10,"overall":22,"player":"Rob Gronkowski","nflTeam":"NE","position":"TE","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":2,"pick":11,"overall":23,"player":"LeSean McCoy","nflTeam":"Buf","position":"RB","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":2,"pick":12,"overall":24,"player":"Jordan Howard","nflTeam":"Chi","position":"RB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":3,"pick":1,"overall":25,"player":"Joe Mixon","nflTeam":"Cin","position":"RB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":3,"pick":2,"overall":26,"player":"T.Y. Hilton","nflTeam":"Ind","position":"WR","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":3,"pick":3,"overall":27,"player":"Tyreek Hill","nflTeam":"KC","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":3,"pick":4,"overall":28,"player":"Royce Freeman","nflTeam":"Den","position":"RB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":3,"pick":5,"overall":29,"player":"Travis Kelce","nflTeam":"KC","position":"TE","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":3,"pick":6,"overall":30,"player":"Aaron Rodgers","nflTeam":"GB","position":"QB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":3,"pick":7,"overall":31,"player":"Kenyan Drake","nflTeam":"Mia","position":"RB","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":3,"pick":8,"overall":32,"player":"Derrick Henry","nflTeam":"Ten","position":"RB","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":3,"pick":9,"overall":33,"player":"Larry Fitzgerald","nflTeam":"Ari","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":3,"pick":10,"overall":34,"player":"Adam Thielen","nflTeam":"Min","position":"WR","fantasyTeam":"O Le'Veon, Where Art Thou?","owner":"Aaron Burns"},
    {"round":3,"pick":11,"overall":35,"player":"Demaryius Thomas","nflTeam":"Hou","position":"WR","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":3,"pick":12,"overall":36,"player":"Chris Hogan","nflTeam":"NE","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":4,"pick":1,"overall":37,"player":"Alex Collins","nflTeam":"Bal","position":"RB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":4,"pick":2,"overall":38,"player":"Lamar Miller","nflTeam":"Hou","position":"RB","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":4,"pick":3,"overall":39,"player":"Jay Ajayi","nflTeam":"Phi","position":"RB","fantasyTeam":"O Le'Veon, Where Art Thou?","owner":"Aaron Burns"},
    {"round":4,"pick":4,"overall":40,"player":"Marshawn Lynch","nflTeam":"Oak","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":4,"pick":5,"overall":41,"player":"Stefon Diggs","nflTeam":"Min","position":"WR","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":4,"pick":6,"overall":42,"player":"Mark Ingram II","nflTeam":"NO","position":"RB","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":4,"pick":7,"overall":43,"player":"Zach Ertz","nflTeam":"Phi","position":"TE","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":4,"pick":8,"overall":44,"player":"Amari Cooper","nflTeam":"Dal","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":4,"pick":9,"overall":45,"player":"Golden Tate","nflTeam":"Phi","position":"WR","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":4,"pick":10,"overall":46,"player":"Cam Newton","nflTeam":"Car","position":"QB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":4,"pick":11,"overall":47,"player":"Doug Baldwin","nflTeam":"Sea","position":"WR","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":4,"pick":12,"overall":48,"player":"Jarvis Landry","nflTeam":"Cle","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":5,"pick":1,"overall":49,"player":"Dion Lewis","nflTeam":"Ten","position":"RB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":5,"pick":2,"overall":50,"player":"Josh Gordon","nflTeam":"NE","position":"WR","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":5,"pick":3,"overall":51,"player":"Alfred Morris","nflTeam":"SF","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":5,"pick":4,"overall":52,"player":"Allen Robinson","nflTeam":"Chi","position":"WR","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":5,"pick":5,"overall":53,"player":"Tevin Coleman","nflTeam":"Atl","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":5,"pick":6,"overall":54,"player":"Brandin Cooks","nflTeam":"LAR","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":5,"pick":7,"overall":55,"player":"JuJu Smith-Schuster","nflTeam":"Pit","position":"WR","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":5,"pick":8,"overall":56,"player":"Tom Brady","nflTeam":"NE","position":"QB","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":5,"pick":9,"overall":57,"player":"Marvin Jones Jr.","nflTeam":"Det","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":5,"pick":10,"overall":58,"player":"Greg Olsen","nflTeam":"Car","position":"TE","fantasyTeam":"O Le'Veon, Where Art Thou?","owner":"Aaron Burns"},
    {"round":5,"pick":11,"overall":59,"player":"Corey Davis","nflTeam":"Ten","position":"WR","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":5,"pick":12,"overall":60,"player":"Emmanuel Sanders","nflTeam":"Den","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":6,"pick":1,"overall":61,"player":"Rex Burkhead","nflTeam":"NE","position":"RB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":6,"pick":2,"overall":62,"player":"Devin Funchess","nflTeam":"Car","position":"WR","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":6,"pick":3,"overall":63,"player":"Duke Johnson Jr.","nflTeam":"Cle","position":"RB","fantasyTeam":"O Le'Veon, Where Art Thou?","owner":"Aaron Burns"},
    {"round":6,"pick":4,"overall":64,"player":"Carlos Hyde","nflTeam":"Jax","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":6,"pick":5,"overall":65,"player":"Adrian Peterson","nflTeam":"Wsh","position":"RB","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":6,"pick":6,"overall":66,"player":"Michael Crabtree","nflTeam":"Bal","position":"WR","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":6,"pick":7,"overall":67,"player":"Sammy Watkins","nflTeam":"KC","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":6,"pick":8,"overall":68,"player":"Chris Carson","nflTeam":"Sea","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":6,"pick":9,"overall":69,"player":"Deshaun Watson","nflTeam":"Hou","position":"QB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":6,"pick":10,"overall":70,"player":"Chris Thompson","nflTeam":"Wsh","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":6,"pick":11,"overall":71,"player":"Isaiah Crowell","nflTeam":"NYJ","position":"RB","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":6,"pick":12,"overall":72,"player":"Russell Wilson","nflTeam":"Sea","position":"QB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":7,"pick":1,"overall":73,"player":"Marquise Goodwin","nflTeam":"SF","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":7,"pick":2,"overall":74,"player":"Jimmy Graham","nflTeam":"GB","position":"TE","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":7,"pick":3,"overall":75,"player":"Pierre Garcon","nflTeam":"SF","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":7,"pick":4,"overall":76,"player":"Jamaal Williams","nflTeam":"GB","position":"RB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":7,"pick":5,"overall":77,"player":"Kerryon Johnson","nflTeam":"Det","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":7,"pick":6,"overall":78,"player":"Robby Anderson","nflTeam":"NYJ","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":7,"pick":7,"overall":79,"player":"Randall Cobb","nflTeam":"GB","position":"WR","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":7,"pick":8,"overall":80,"player":"Jordan Reed","nflTeam":"Wsh","position":"TE","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":7,"pick":9,"overall":81,"player":"Peyton Barber","nflTeam":"TB","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":7,"pick":10,"overall":82,"player":"Will Fuller V","nflTeam":"Hou","position":"WR","fantasyTeam":"O Le'Veon, Where Art Thou?","owner":"Aaron Burns"},
    {"round":7,"pick":11,"overall":83,"player":"Robert Woods","nflTeam":"LAR","position":"WR","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":7,"pick":12,"overall":84,"player":"Jamison Crowder","nflTeam":"Wsh","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":8,"pick":1,"overall":85,"player":"Keelan Cole","nflTeam":"Jax","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":8,"pick":2,"overall":86,"player":"Tarik Cohen","nflTeam":"Chi","position":"RB","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":8,"pick":3,"overall":87,"player":"Carson Wentz","nflTeam":"Phi","position":"QB","fantasyTeam":"O Le'Veon, Where Art Thou?","owner":"Aaron Burns"},
    {"round":8,"pick":4,"overall":88,"player":"Marlon Mack","nflTeam":"Ind","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":8,"pick":5,"overall":89,"player":"Julian Edelman","nflTeam":"NE","position":"WR","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":8,"pick":6,"overall":90,"player":"Sony Michel","nflTeam":"NE","position":"RB","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":8,"pick":7,"overall":91,"player":"Alshon Jeffery","nflTeam":"Phi","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":8,"pick":8,"overall":92,"player":"Rashaad Penny","nflTeam":"Sea","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":8,"pick":9,"overall":93,"player":"Michael Gallup","nflTeam":"Dal","position":"WR","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":8,"pick":10,"overall":94,"player":"Cooper Kupp","nflTeam":"LAR","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":8,"pick":11,"overall":95,"player":"Matt Breida","nflTeam":"SF","position":"RB","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":8,"pick":12,"overall":96,"player":"Evan Engram","nflTeam":"NYG","position":"TE","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":9,"pick":1,"overall":97,"player":"Jordy Nelson","nflTeam":"Oak","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":9,"pick":2,"overall":98,"player":"Kelvin Benjamin","nflTeam":"KC","position":"WR","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":9,"pick":3,"overall":99,"player":"James White","nflTeam":"NE","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":9,"pick":4,"overall":100,"player":"Trey Burton","nflTeam":"Chi","position":"TE","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":9,"pick":5,"overall":101,"player":"Drew Brees","nflTeam":"NO","position":"QB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":9,"pick":6,"overall":102,"player":"Kenny Stills","nflTeam":"Mia","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":9,"pick":7,"overall":103,"player":"Delanie Walker","nflTeam":"Ten","position":"TE","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":9,"pick":8,"overall":104,"player":"Sterling Shepard","nflTeam":"NYG","position":"WR","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":9,"pick":9,"overall":105,"player":"Bilal Powell","nflTeam":"NYJ","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":9,"pick":10,"overall":106,"player":"Aaron Jones","nflTeam":"GB","position":"RB","fantasyTeam":"O Le'Veon, Where Art Thou?","owner":"Aaron Burns"},
    {"round":9,"pick":11,"overall":107,"player":"Kyle Rudolph","nflTeam":"Min","position":"TE","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":9,"pick":12,"overall":108,"player":"Jack Doyle","nflTeam":"Ind","position":"TE","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":10,"pick":1,"overall":109,"player":"Chris Godwin","nflTeam":"TB","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":10,"pick":2,"overall":110,"player":"Matthew Stafford","nflTeam":"Det","position":"QB","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":10,"pick":3,"overall":111,"player":"Nelson Agholor","nflTeam":"Phi","position":"WR","fantasyTeam":"O Le'Veon, Where Art Thou?","owner":"Aaron Burns"},
    {"round":10,"pick":4,"overall":112,"player":"Allen Hurns","nflTeam":"Dal","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":10,"pick":5,"overall":113,"player":"Jaguars D/ST","nflTeam":"Jax","position":"D/ST","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":10,"pick":6,"overall":114,"player":"Kenny Golladay","nflTeam":"Det","position":"WR","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":10,"pick":7,"overall":115,"player":"Andrew Luck","nflTeam":"Ind","position":"QB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":10,"pick":8,"overall":116,"player":"Ronald Jones","nflTeam":"TB","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":10,"pick":9,"overall":117,"player":"Ben Roethlisberger","nflTeam":"Pit","position":"QB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":10,"pick":10,"overall":118,"player":"Josh Doctson","nflTeam":"Wsh","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":10,"pick":11,"overall":119,"player":"Kirk Cousins","nflTeam":"Min","position":"QB","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":10,"pick":12,"overall":120,"player":"Tyler Lockett","nflTeam":"Sea","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":11,"pick":1,"overall":121,"player":"Rishard Matthews","nflTeam":"NYJ","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":11,"pick":2,"overall":122,"player":"Mohamed Sanu","nflTeam":"Atl","position":"WR","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":11,"pick":3,"overall":123,"player":"Theo Riddick","nflTeam":"Det","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":11,"pick":4,"overall":124,"player":"Giovani Bernard","nflTeam":"Cin","position":"RB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":11,"pick":5,"overall":125,"player":"DeVante Parker","nflTeam":"Mia","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":11,"pick":6,"overall":126,"player":"LeGarrette Blount","nflTeam":"Det","position":"RB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":11,"pick":7,"overall":127,"player":"James Conner","nflTeam":"Pit","position":"RB","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":11,"pick":8,"overall":128,"player":"John Ross","nflTeam":"Cin","position":"WR","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":11,"pick":9,"overall":129,"player":"Ty Montgomery","nflTeam":"Bal","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":11,"pick":10,"overall":130,"player":"Danny Amendola","nflTeam":"Mia","position":"WR","fantasyTeam":"O Le'Veon, Where Art Thou?","owner":"Aaron Burns"},
    {"round":11,"pick":11,"overall":131,"player":"Calvin Ridley","nflTeam":"Atl","position":"WR","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":11,"pick":12,"overall":132,"player":"Matt Ryan","nflTeam":"Atl","position":"QB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":12,"pick":1,"overall":133,"player":"David Njoku","nflTeam":"Cle","position":"TE","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":12,"pick":2,"overall":134,"player":"Vikings D/ST","nflTeam":"Min","position":"D/ST","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":12,"pick":3,"overall":135,"player":"Cole Beasley","nflTeam":"Dal","position":"WR","fantasyTeam":"O Le'Veon, Where Art Thou?","owner":"Aaron Burns"},
    {"round":12,"pick":4,"overall":136,"player":"Philip Rivers","nflTeam":"LAC","position":"QB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":12,"pick":5,"overall":137,"player":"Alex Smith","nflTeam":"Wsh","position":"QB","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":12,"pick":6,"overall":138,"player":"Jimmy Garoppolo","nflTeam":"SF","position":"QB","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":12,"pick":7,"overall":139,"player":"Eagles D/ST","nflTeam":"Phi","position":"D/ST","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":12,"pick":8,"overall":140,"player":"C.J. Anderson","nflTeam":"LAR","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":12,"pick":9,"overall":141,"player":"Rams D/ST","nflTeam":"LAR","position":"D/ST","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":12,"pick":10,"overall":142,"player":"Jordan Wilkins","nflTeam":"Ind","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":12,"pick":11,"overall":143,"player":"Patrick Mahomes","nflTeam":"KC","position":"QB","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":12,"pick":12,"overall":144,"player":"Texans D/ST","nflTeam":"Hou","position":"D/ST","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":13,"pick":1,"overall":145,"player":"Devontae Booker","nflTeam":"Den","position":"RB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":13,"pick":2,"overall":146,"player":"Patriots D/ST","nflTeam":"NE","position":"D/ST","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":13,"pick":3,"overall":147,"player":"Ravens D/ST","nflTeam":"Bal","position":"D/ST","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":13,"pick":4,"overall":148,"player":"DJ Moore","nflTeam":"Car","position":"WR","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":13,"pick":5,"overall":149,"player":"Chargers D/ST","nflTeam":"LAC","position":"D/ST","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":13,"pick":6,"overall":150,"player":"Latavius Murray","nflTeam":"Min","position":"RB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":13,"pick":7,"overall":151,"player":"Doug Martin","nflTeam":"Oak","position":"RB","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":13,"pick":8,"overall":152,"player":"Mike Williams","nflTeam":"LAC","position":"WR","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":13,"pick":9,"overall":153,"player":"Charles Clay","nflTeam":"Buf","position":"TE","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":13,"pick":10,"overall":154,"player":"Bears D/ST","nflTeam":"Chi","position":"D/ST","fantasyTeam":"O Le'Veon, Where Art Thou?","owner":"Aaron Burns"},
    {"round":13,"pick":11,"overall":155,"player":"Mike Wallace","nflTeam":"Phi","position":"WR","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":13,"pick":12,"overall":156,"player":"Broncos D/ST","nflTeam":"Den","position":"D/ST","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":14,"pick":1,"overall":157,"player":"DeSean Jackson","nflTeam":"TB","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":14,"pick":2,"overall":158,"player":"James Washington","nflTeam":"Pit","position":"WR","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":14,"pick":3,"overall":159,"player":"Marcus Mariota","nflTeam":"Ten","position":"QB","fantasyTeam":"O Le'Veon, Where Art Thou?","owner":"Aaron Burns"},
    {"round":14,"pick":4,"overall":160,"player":"Lions D/ST","nflTeam":"Det","position":"D/ST","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":14,"pick":5,"overall":161,"player":"Javorius Allen","nflTeam":"Bal","position":"RB","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":14,"pick":6,"overall":162,"player":"Saints D/ST","nflTeam":"NO","position":"D/ST","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":14,"pick":7,"overall":163,"player":"Tyler Eifert","nflTeam":"Cin","position":"TE","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":14,"pick":8,"overall":164,"player":"Cameron Meredith","nflTeam":"NO","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":14,"pick":9,"overall":165,"player":"Mike Gesicki","nflTeam":"Mia","position":"TE","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":14,"pick":10,"overall":166,"player":"Jared Goff","nflTeam":"LAR","position":"QB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":14,"pick":11,"overall":167,"player":"Paul Richardson","nflTeam":"Wsh","position":"WR","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":14,"pick":12,"overall":168,"player":"John Brown","nflTeam":"Bal","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"}
  ],
  "2019": [
    {"round":1,"pick":1,"overall":1,"player":"Keenan Allen","nflTeam":"LAC","position":"WR","fantasyTeam":"The Glue Factory","owner":"Aaron Burns"},
    {"round":1,"pick":2,"overall":2,"player":"Davante Adams","nflTeam":"GB","position":"WR","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":1,"pick":3,"overall":3,"player":"Todd Gurley II","nflTeam":"LAR","position":"RB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":1,"pick":4,"overall":4,"player":"Ezekiel Elliott","nflTeam":"Dal","position":"RB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":1,"pick":5,"overall":5,"player":"David Johnson","nflTeam":"Ari","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":1,"pick":6,"overall":6,"player":"Saquon Barkley","nflTeam":"NYG","position":"RB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":1,"pick":7,"overall":7,"player":"Dalvin Cook","nflTeam":"Min","position":"RB","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":1,"pick":8,"overall":8,"player":"Le'Veon Bell","nflTeam":"NYJ","position":"RB","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":1,"pick":9,"overall":9,"player":"Michael Thomas","nflTeam":"NO","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":1,"pick":10,"overall":10,"player":"Christian McCaffrey","nflTeam":"Car","position":"RB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":1,"pick":11,"overall":11,"player":"Alvin Kamara","nflTeam":"NO","position":"RB","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":1,"pick":12,"overall":12,"player":"DeAndre Hopkins","nflTeam":"Hou","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":2,"pick":1,"overall":13,"player":"Julio Jones","nflTeam":"Atl","position":"WR","fantasyTeam":"The Glue Factory","owner":"Aaron Burns"},
    {"round":2,"pick":2,"overall":14,"player":"Tyreek Hill","nflTeam":"KC","position":"WR","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":2,"pick":3,"overall":15,"player":"Odell Beckham Jr.","nflTeam":"Cle","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":2,"pick":4,"overall":16,"player":"JuJu Smith-Schuster","nflTeam":"Pit","position":"WR","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":2,"pick":5,"overall":17,"player":"Joe Mixon","nflTeam":"Cin","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":2,"pick":6,"overall":18,"player":"James Conner","nflTeam":"Pit","position":"RB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":2,"pick":7,"overall":19,"player":"Antonio Brown","nflTeam":"FA","position":"WR","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":2,"pick":8,"overall":20,"player":"Travis Kelce","nflTeam":"KC","position":"TE","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":2,"pick":9,"overall":21,"player":"Nick Chubb","nflTeam":"Cle","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":2,"pick":10,"overall":22,"player":"Mike Evans","nflTeam":"TB","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":2,"pick":11,"overall":23,"player":"George Kittle","nflTeam":"SF","position":"TE","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":2,"pick":12,"overall":24,"player":"Leonard Fournette","nflTeam":"Jax","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":3,"pick":1,"overall":25,"player":"Kerryon Johnson","nflTeam":"Det","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":3,"pick":2,"overall":26,"player":"Brandin Cooks","nflTeam":"LAR","position":"WR","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":3,"pick":3,"overall":27,"player":"Derrick Henry","nflTeam":"Ten","position":"RB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":3,"pick":4,"overall":28,"player":"Damien Williams","nflTeam":"KC","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":3,"pick":5,"overall":29,"player":"Devonta Freeman","nflTeam":"Atl","position":"RB","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":3,"pick":6,"overall":30,"player":"Josh Jacobs","nflTeam":"Oak","position":"RB","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":3,"pick":7,"overall":31,"player":"Chris Carson","nflTeam":"Sea","position":"RB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":3,"pick":8,"overall":32,"player":"Amari Cooper","nflTeam":"Dal","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":3,"pick":9,"overall":33,"player":"Adam Thielen","nflTeam":"Min","position":"WR","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":3,"pick":10,"overall":34,"player":"Aaron Jones","nflTeam":"GB","position":"RB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":3,"pick":11,"overall":35,"player":"Mark Ingram II","nflTeam":"Bal","position":"RB","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":3,"pick":12,"overall":36,"player":"Melvin Gordon","nflTeam":"LAC","position":"RB","fantasyTeam":"The Glue Factory","owner":"Aaron Burns"},
    {"round":4,"pick":1,"overall":37,"player":"James White","nflTeam":"NE","position":"RB","fantasyTeam":"The Glue Factory","owner":"Aaron Burns"},
    {"round":4,"pick":2,"overall":38,"player":"Marlon Mack","nflTeam":"Ind","position":"RB","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":4,"pick":3,"overall":39,"player":"Robert Woods","nflTeam":"LAR","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":4,"pick":4,"overall":40,"player":"Patrick Mahomes","nflTeam":"KC","position":"QB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":4,"pick":5,"overall":41,"player":"Zach Ertz","nflTeam":"Phi","position":"TE","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":4,"pick":6,"overall":42,"player":"Julian Edelman","nflTeam":"NE","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":4,"pick":7,"overall":43,"player":"Stefon Diggs","nflTeam":"Min","position":"WR","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":4,"pick":8,"overall":44,"player":"Kenny Golladay","nflTeam":"Det","position":"WR","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":4,"pick":9,"overall":45,"player":"Chris Godwin","nflTeam":"TB","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":4,"pick":10,"overall":46,"player":"Alshon Jeffery","nflTeam":"Phi","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":4,"pick":11,"overall":47,"player":"Tyler Lockett","nflTeam":"Sea","position":"WR","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":4,"pick":12,"overall":48,"player":"David Montgomery","nflTeam":"Chi","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":5,"pick":1,"overall":49,"player":"T.Y. Hilton","nflTeam":"Ind","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":5,"pick":2,"overall":50,"player":"Cooper Kupp","nflTeam":"LAR","position":"WR","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":5,"pick":3,"overall":51,"player":"Sony Michel","nflTeam":"NE","position":"RB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":5,"pick":4,"overall":52,"player":"Duke Johnson","nflTeam":"Hou","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":5,"pick":5,"overall":53,"player":"Phillip Lindsay","nflTeam":"Den","position":"RB","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":5,"pick":6,"overall":54,"player":"DJ Moore","nflTeam":"Car","position":"WR","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":5,"pick":7,"overall":55,"player":"A.J. Green","nflTeam":"Cin","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":5,"pick":8,"overall":56,"player":"Kenyan Drake","nflTeam":"Ari","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":5,"pick":9,"overall":57,"player":"Derrius Guice","nflTeam":"Wsh","position":"RB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":5,"pick":10,"overall":58,"player":"Tyler Boyd","nflTeam":"Cin","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":5,"pick":11,"overall":59,"player":"Aaron Rodgers","nflTeam":"GB","position":"QB","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":5,"pick":12,"overall":60,"player":"Mike Williams","nflTeam":"LAC","position":"WR","fantasyTeam":"The Glue Factory","owner":"Aaron Burns"},
    {"round":6,"pick":1,"overall":61,"player":"O.J. Howard","nflTeam":"TB","position":"TE","fantasyTeam":"The Glue Factory","owner":"Aaron Burns"},
    {"round":6,"pick":2,"overall":62,"player":"Calvin Ridley","nflTeam":"Atl","position":"WR","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":6,"pick":3,"overall":63,"player":"Tarik Cohen","nflTeam":"Chi","position":"RB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":6,"pick":4,"overall":64,"player":"Austin Ekeler","nflTeam":"LAC","position":"RB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":6,"pick":5,"overall":65,"player":"Deshaun Watson","nflTeam":"Hou","position":"QB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":6,"pick":6,"overall":66,"player":"Tevin Coleman","nflTeam":"SF","position":"RB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":6,"pick":7,"overall":67,"player":"Josh Gordon","nflTeam":"Sea","position":"WR","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":6,"pick":8,"overall":68,"player":"Allen Robinson II","nflTeam":"Chi","position":"WR","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":6,"pick":9,"overall":69,"player":"Evan Engram","nflTeam":"NYG","position":"TE","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":6,"pick":10,"overall":70,"player":"Robby Anderson","nflTeam":"NYJ","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":6,"pick":11,"overall":71,"player":"Miles Sanders","nflTeam":"Phi","position":"RB","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":6,"pick":12,"overall":72,"player":"Hunter Henry","nflTeam":"LAC","position":"TE","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":7,"pick":1,"overall":73,"player":"Peyton Barber","nflTeam":"TB","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":7,"pick":2,"overall":74,"player":"Jarvis Landry","nflTeam":"Cle","position":"WR","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":7,"pick":3,"overall":75,"player":"Matt Ryan","nflTeam":"Atl","position":"QB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":7,"pick":4,"overall":76,"player":"Christian Kirk","nflTeam":"Ari","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":7,"pick":5,"overall":77,"player":"Sterling Shepard","nflTeam":"NYG","position":"WR","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":7,"pick":6,"overall":78,"player":"Dede Westbrook","nflTeam":"Jax","position":"WR","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":7,"pick":7,"overall":79,"player":"Jared Cook","nflTeam":"NO","position":"TE","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":7,"pick":8,"overall":80,"player":"Marvin Jones Jr.","nflTeam":"Det","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":7,"pick":9,"overall":81,"player":"Emmanuel Sanders","nflTeam":"SF","position":"WR","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":7,"pick":10,"overall":82,"player":"Sammy Watkins","nflTeam":"KC","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":7,"pick":11,"overall":83,"player":"David Njoku","nflTeam":"Cle","position":"TE","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":7,"pick":12,"overall":84,"player":"Will Fuller V","nflTeam":"Hou","position":"WR","fantasyTeam":"The Glue Factory","owner":"Aaron Burns"},
    {"round":8,"pick":1,"overall":85,"player":"Rashaad Penny","nflTeam":"Sea","position":"RB","fantasyTeam":"The Glue Factory","owner":"Aaron Burns"},
    {"round":8,"pick":2,"overall":86,"player":"Larry Fitzgerald","nflTeam":"Ari","position":"WR","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":8,"pick":3,"overall":87,"player":"Baker Mayfield","nflTeam":"Cle","position":"QB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":8,"pick":4,"overall":88,"player":"Jordan Howard","nflTeam":"Phi","position":"RB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":8,"pick":5,"overall":89,"player":"LeSean McCoy","nflTeam":"KC","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":8,"pick":6,"overall":90,"player":"Carson Wentz","nflTeam":"Phi","position":"QB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":8,"pick":7,"overall":91,"player":"James Washington","nflTeam":"Pit","position":"WR","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":8,"pick":8,"overall":92,"player":"Matt Breida","nflTeam":"SF","position":"RB","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":8,"pick":9,"overall":93,"player":"Latavius Murray","nflTeam":"NO","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":8,"pick":10,"overall":94,"player":"Corey Davis","nflTeam":"Ten","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":8,"pick":11,"overall":95,"player":"Curtis Samuel","nflTeam":"Car","position":"WR","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":8,"pick":12,"overall":96,"player":"Royce Freeman","nflTeam":"Den","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":9,"pick":1,"overall":97,"player":"Darrell Henderson Jr.","nflTeam":"LAR","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":9,"pick":2,"overall":98,"player":"Darwin Thompson","nflTeam":"KC","position":"RB","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":9,"pick":3,"overall":99,"player":"Marquez Valdes-Scantling","nflTeam":"GB","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":9,"pick":4,"overall":100,"player":"Cam Newton","nflTeam":"Car","position":"QB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":9,"pick":5,"overall":101,"player":"Drew Brees","nflTeam":"NO","position":"QB","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":9,"pick":6,"overall":102,"player":"Delanie Walker","nflTeam":"Ten","position":"TE","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":9,"pick":7,"overall":103,"player":"Jamison Crowder","nflTeam":"NYJ","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":9,"pick":8,"overall":104,"player":"Donte Moncrief","nflTeam":"Car","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":9,"pick":9,"overall":105,"player":"Tony Pollard","nflTeam":"Dal","position":"RB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":9,"pick":10,"overall":106,"player":"Kalen Ballage","nflTeam":"Mia","position":"RB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":9,"pick":11,"overall":107,"player":"Courtland Sutton","nflTeam":"Den","position":"WR","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":9,"pick":12,"overall":108,"player":"Keke Coutee","nflTeam":"Hou","position":"WR","fantasyTeam":"The Glue Factory","owner":"Aaron Burns"},
    {"round":10,"pick":1,"overall":109,"player":"Dak Prescott","nflTeam":"Dal","position":"QB","fantasyTeam":"The Glue Factory","owner":"Aaron Burns"},
    {"round":10,"pick":2,"overall":110,"player":"Nyheim Hines","nflTeam":"Ind","position":"RB","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":10,"pick":3,"overall":111,"player":"Dante Pettis","nflTeam":"SF","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":10,"pick":4,"overall":112,"player":"Vance McDonald","nflTeam":"Pit","position":"TE","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":10,"pick":5,"overall":113,"player":"DeSean Jackson","nflTeam":"Phi","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":10,"pick":6,"overall":114,"player":"Michael Gallup","nflTeam":"Dal","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":10,"pick":7,"overall":115,"player":"Mohamed Sanu Sr.","nflTeam":"NE","position":"WR","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":10,"pick":8,"overall":116,"player":"Golden Tate","nflTeam":"NYG","position":"WR","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":10,"pick":9,"overall":117,"player":"Geronimo Allison","nflTeam":"GB","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":10,"pick":10,"overall":118,"player":"Jaylen Samuels","nflTeam":"Pit","position":"RB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":10,"pick":11,"overall":119,"player":"Jared Goff","nflTeam":"LAR","position":"QB","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":10,"pick":12,"overall":120,"player":"Ben Roethlisberger","nflTeam":"Pit","position":"QB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":11,"pick":1,"overall":121,"player":"Tyrell Williams","nflTeam":"Oak","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":11,"pick":2,"overall":122,"player":"Justice Hill","nflTeam":"Bal","position":"RB","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":11,"pick":3,"overall":123,"player":"Kyle Rudolph","nflTeam":"Min","position":"TE","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":11,"pick":4,"overall":124,"player":"Austin Hooper","nflTeam":"Atl","position":"TE","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":11,"pick":5,"overall":125,"player":"Dion Lewis","nflTeam":"Ten","position":"RB","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":11,"pick":6,"overall":126,"player":"Devin Funchess","nflTeam":"Ind","position":"WR","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":11,"pick":7,"overall":127,"player":"Kyler Murray","nflTeam":"Ari","position":"QB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":11,"pick":8,"overall":128,"player":"Giovani Bernard","nflTeam":"Cin","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":11,"pick":9,"overall":129,"player":"Kareem Hunt","nflTeam":"Cle","position":"RB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":11,"pick":10,"overall":130,"player":"Ronald Jones II","nflTeam":"TB","position":"RB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":11,"pick":11,"overall":131,"player":"Trey Burton","nflTeam":"Chi","position":"TE","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":11,"pick":12,"overall":132,"player":"Lamar Jackson","nflTeam":"Bal","position":"QB","fantasyTeam":"The Glue Factory","owner":"Aaron Burns"},
    {"round":12,"pick":1,"overall":133,"player":"DK Metcalf","nflTeam":"Sea","position":"WR","fantasyTeam":"The Glue Factory","owner":"Aaron Burns"},
    {"round":12,"pick":2,"overall":134,"player":"Kenny Stills","nflTeam":"Hou","position":"WR","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":12,"pick":3,"overall":135,"player":"Devin Singletary","nflTeam":"Buf","position":"RB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":12,"pick":4,"overall":136,"player":"Andy Isabella","nflTeam":"Ari","position":"WR","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":12,"pick":5,"overall":137,"player":"Jalen Richard","nflTeam":"Oak","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":12,"pick":6,"overall":138,"player":"John Brown","nflTeam":"Buf","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":12,"pick":7,"overall":139,"player":"Russell Wilson","nflTeam":"Sea","position":"QB","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":12,"pick":8,"overall":140,"player":"Adam Humphries","nflTeam":"Ten","position":"WR","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":12,"pick":9,"overall":141,"player":"Anthony Miller","nflTeam":"Chi","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":12,"pick":10,"overall":142,"player":"Jordan Reed","nflTeam":"Wsh","position":"TE","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":12,"pick":11,"overall":143,"player":"Malcolm Brown","nflTeam":"LAR","position":"RB","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":12,"pick":12,"overall":144,"player":"DeVante Parker","nflTeam":"Mia","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":13,"pick":1,"overall":145,"player":"Greg Olsen","nflTeam":"Sea","position":"TE","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":13,"pick":2,"overall":146,"player":"Deebo Samuel","nflTeam":"SF","position":"WR","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":13,"pick":3,"overall":147,"player":"Justin Jackson","nflTeam":"LAC","position":"RB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":13,"pick":4,"overall":148,"player":"Adrian Peterson","nflTeam":"Wsh","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":13,"pick":5,"overall":149,"player":"Chris Thompson","nflTeam":"Wsh","position":"RB","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":13,"pick":6,"overall":150,"player":"N'Keal Harry","nflTeam":"NE","position":"WR","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":13,"pick":7,"overall":151,"player":"Jimmy Graham","nflTeam":"GB","position":"TE","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":13,"pick":8,"overall":152,"player":"C.J. Anderson","nflTeam":"Det","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":13,"pick":9,"overall":153,"player":"Alexander Mattison","nflTeam":"Min","position":"RB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":13,"pick":10,"overall":154,"player":"Mark Andrews","nflTeam":"Bal","position":"TE","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":13,"pick":11,"overall":155,"player":"Carlos Hyde","nflTeam":"Hou","position":"RB","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":13,"pick":12,"overall":156,"player":"Ito Smith","nflTeam":"Atl","position":"RB","fantasyTeam":"The Glue Factory","owner":"Aaron Burns"}
  ],
  "2020": [
    {"round":1,"pick":1,"overall":1,"player":"Christian McCaffrey","nflTeam":"Car","position":"RB","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":1,"pick":2,"overall":2,"player":"Saquon Barkley","nflTeam":"NYG","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":1,"pick":3,"overall":3,"player":"Ezekiel Elliott","nflTeam":"Dal","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":1,"pick":4,"overall":4,"player":"Derrick Henry","nflTeam":"Ten","position":"RB","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":1,"pick":5,"overall":5,"player":"Alvin Kamara","nflTeam":"NO","position":"RB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":1,"pick":6,"overall":6,"player":"Dalvin Cook","nflTeam":"Min","position":"RB","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":1,"pick":7,"overall":7,"player":"Michael Thomas","nflTeam":"NO","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":1,"pick":8,"overall":8,"player":"Nick Chubb","nflTeam":"Cle","position":"RB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":1,"pick":9,"overall":9,"player":"Clyde Edwards-Helaire","nflTeam":"KC","position":"RB","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":1,"pick":10,"overall":10,"player":"Joe Mixon","nflTeam":"Cin","position":"RB","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":1,"pick":11,"overall":11,"player":"Miles Sanders","nflTeam":"Phi","position":"RB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":1,"pick":12,"overall":12,"player":"Josh Jacobs","nflTeam":"LV","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":2,"pick":1,"overall":13,"player":"Aaron Jones","nflTeam":"GB","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":2,"pick":2,"overall":14,"player":"Kenyan Drake","nflTeam":"Ari","position":"RB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":2,"pick":3,"overall":15,"player":"Tyreek Hill","nflTeam":"KC","position":"WR","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":2,"pick":4,"overall":16,"player":"Davante Adams","nflTeam":"GB","position":"WR","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":2,"pick":5,"overall":17,"player":"Julio Jones","nflTeam":"Atl","position":"WR","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":2,"pick":6,"overall":18,"player":"Austin Ekeler","nflTeam":"LAC","position":"RB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":2,"pick":7,"overall":19,"player":"DeAndre Hopkins","nflTeam":"Ari","position":"WR","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":2,"pick":8,"overall":20,"player":"Travis Kelce","nflTeam":"KC","position":"TE","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":2,"pick":9,"overall":21,"player":"Chris Godwin","nflTeam":"TB","position":"WR","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":2,"pick":10,"overall":22,"player":"Mike Evans","nflTeam":"TB","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":2,"pick":11,"overall":23,"player":"Chris Carson","nflTeam":"Sea","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":2,"pick":12,"overall":24,"player":"Adam Thielen","nflTeam":"Min","position":"WR","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":3,"pick":1,"overall":25,"player":"Patrick Mahomes","nflTeam":"KC","position":"QB","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":3,"pick":2,"overall":26,"player":"Jonathan Taylor","nflTeam":"Ind","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":3,"pick":3,"overall":27,"player":"Lamar Jackson","nflTeam":"Bal","position":"QB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":3,"pick":4,"overall":28,"player":"Todd Gurley II","nflTeam":"Atl","position":"RB","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":3,"pick":5,"overall":29,"player":"David Johnson","nflTeam":"Hou","position":"RB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":3,"pick":6,"overall":30,"player":"George Kittle","nflTeam":"SF","position":"TE","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":3,"pick":7,"overall":31,"player":"Kenny Golladay","nflTeam":"Det","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":3,"pick":8,"overall":32,"player":"Deshaun Watson","nflTeam":"Hou","position":"QB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":3,"pick":9,"overall":33,"player":"Amari Cooper","nflTeam":"Dal","position":"WR","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":3,"pick":10,"overall":34,"player":"Tyler Lockett","nflTeam":"Sea","position":"WR","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":3,"pick":11,"overall":35,"player":"JuJu Smith-Schuster","nflTeam":"Pit","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":3,"pick":12,"overall":36,"player":"Allen Robinson II","nflTeam":"Chi","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":4,"pick":1,"overall":37,"player":"DJ Moore","nflTeam":"Car","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":4,"pick":2,"overall":38,"player":"Odell Beckham Jr.","nflTeam":"Cle","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":4,"pick":3,"overall":39,"player":"James Conner","nflTeam":"Pit","position":"RB","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":4,"pick":4,"overall":40,"player":"Melvin Gordon III","nflTeam":"Den","position":"RB","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":4,"pick":5,"overall":41,"player":"Le'Veon Bell","nflTeam":"KC","position":"RB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":4,"pick":6,"overall":42,"player":"Robert Woods","nflTeam":"LAR","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":4,"pick":7,"overall":43,"player":"Cam Akers","nflTeam":"LAR","position":"RB","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":4,"pick":8,"overall":44,"player":"Calvin Ridley","nflTeam":"Atl","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":4,"pick":9,"overall":45,"player":"Cooper Kupp","nflTeam":"LAR","position":"WR","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":4,"pick":10,"overall":46,"player":"Courtland Sutton","nflTeam":"Den","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":4,"pick":11,"overall":47,"player":"A.J. Brown","nflTeam":"Ten","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":4,"pick":12,"overall":48,"player":"T.Y. Hilton","nflTeam":"Ind","position":"WR","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":5,"pick":1,"overall":49,"player":"DK Metcalf","nflTeam":"Sea","position":"WR","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":5,"pick":2,"overall":50,"player":"Mark Andrews","nflTeam":"Bal","position":"TE","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":5,"pick":3,"overall":51,"player":"Raheem Mostert","nflTeam":"SF","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":5,"pick":4,"overall":52,"player":"Keenan Allen","nflTeam":"LAC","position":"WR","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":5,"pick":5,"overall":53,"player":"Terry McLaurin","nflTeam":"Wsh","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":5,"pick":6,"overall":54,"player":"Devin Singletary","nflTeam":"Buf","position":"RB","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":5,"pick":7,"overall":55,"player":"Zach Ertz","nflTeam":"Phi","position":"TE","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":5,"pick":8,"overall":56,"player":"Stefon Diggs","nflTeam":"Buf","position":"WR","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":5,"pick":9,"overall":57,"player":"David Montgomery","nflTeam":"Chi","position":"RB","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":5,"pick":10,"overall":58,"player":"D'Andre Swift","nflTeam":"Det","position":"RB","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":5,"pick":11,"overall":59,"player":"Leonard Fournette","nflTeam":"TB","position":"RB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":5,"pick":12,"overall":60,"player":"Mark Ingram II","nflTeam":"FA","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":6,"pick":1,"overall":61,"player":"Kareem Hunt","nflTeam":"Cle","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":6,"pick":2,"overall":62,"player":"Darren Waller","nflTeam":"LV","position":"TE","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":6,"pick":3,"overall":63,"player":"Marquise Brown","nflTeam":"Bal","position":"WR","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":6,"pick":4,"overall":64,"player":"DJ Chark Jr.","nflTeam":"Jax","position":"WR","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":6,"pick":5,"overall":65,"player":"Rob Gronkowski","nflTeam":"TB","position":"TE","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":6,"pick":6,"overall":66,"player":"Phillip Lindsay","nflTeam":"Den","position":"RB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":6,"pick":7,"overall":67,"player":"Antonio Gibson","nflTeam":"Wsh","position":"RB","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":6,"pick":8,"overall":68,"player":"Jarvis Landry","nflTeam":"Cle","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":6,"pick":9,"overall":69,"player":"Marlon Mack","nflTeam":"Ind","position":"RB","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":6,"pick":10,"overall":70,"player":"Tarik Cohen","nflTeam":"Chi","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":6,"pick":11,"overall":71,"player":"Kerryon Johnson","nflTeam":"Det","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":6,"pick":12,"overall":72,"player":"Ronald Jones II","nflTeam":"TB","position":"RB","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":7,"pick":1,"overall":73,"player":"Michael Gallup","nflTeam":"Dal","position":"WR","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":7,"pick":2,"overall":74,"player":"DeVante Parker","nflTeam":"Mia","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":7,"pick":3,"overall":75,"player":"Tyler Boyd","nflTeam":"Cin","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":7,"pick":4,"overall":76,"player":"A.J. Green","nflTeam":"Cin","position":"WR","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":7,"pick":5,"overall":77,"player":"Russell Wilson","nflTeam":"Sea","position":"QB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":7,"pick":6,"overall":78,"player":"Marvin Jones Jr.","nflTeam":"Det","position":"WR","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":7,"pick":7,"overall":79,"player":"Brandin Cooks","nflTeam":"Hou","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":7,"pick":8,"overall":80,"player":"Julian Edelman","nflTeam":"NE","position":"WR","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":7,"pick":9,"overall":81,"player":"Dak Prescott","nflTeam":"Dal","position":"QB","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":7,"pick":10,"overall":82,"player":"Kyler Murray","nflTeam":"Ari","position":"QB","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":7,"pick":11,"overall":83,"player":"J.K. Dobbins","nflTeam":"Bal","position":"RB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":7,"pick":12,"overall":84,"player":"Evan Engram","nflTeam":"NYG","position":"TE","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":8,"pick":1,"overall":85,"player":"Will Fuller V","nflTeam":"Hou","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":8,"pick":2,"overall":86,"player":"Drew Brees","nflTeam":"NO","position":"QB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":8,"pick":3,"overall":87,"player":"Henry Ruggs III","nflTeam":"LV","position":"WR","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":8,"pick":4,"overall":88,"player":"Tyler Higbee","nflTeam":"LAR","position":"TE","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":8,"pick":5,"overall":89,"player":"Jordan Howard","nflTeam":"Phi","position":"RB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":8,"pick":6,"overall":90,"player":"Alexander Mattison","nflTeam":"Min","position":"RB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":8,"pick":7,"overall":91,"player":"Carson Wentz","nflTeam":"Ind","position":"QB","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":8,"pick":8,"overall":92,"player":"Sterling Shepard","nflTeam":"NYG","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":8,"pick":9,"overall":93,"player":"Deebo Samuel","nflTeam":"SF","position":"WR","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":8,"pick":10,"overall":94,"player":"Diontae Johnson","nflTeam":"Pit","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":8,"pick":11,"overall":95,"player":"Zack Moss","nflTeam":"Buf","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":8,"pick":12,"overall":96,"player":"James White","nflTeam":"NE","position":"RB","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":9,"pick":1,"overall":97,"player":"Christian Kirk","nflTeam":"Ari","position":"WR","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":9,"pick":2,"overall":98,"player":"Matt Breida","nflTeam":"Mia","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":9,"pick":3,"overall":99,"player":"Duke Johnson","nflTeam":"FA","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":9,"pick":4,"overall":100,"player":"Sony Michel","nflTeam":"NE","position":"RB","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":9,"pick":5,"overall":101,"player":"Jamison Crowder","nflTeam":"NYJ","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":9,"pick":6,"overall":102,"player":"Emmanuel Sanders","nflTeam":"NO","position":"WR","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":9,"pick":7,"overall":103,"player":"Latavius Murray","nflTeam":"NO","position":"RB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":9,"pick":8,"overall":104,"player":"Tevin Coleman","nflTeam":"SF","position":"RB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":9,"pick":9,"overall":105,"player":"Preston Williams","nflTeam":"Mia","position":"WR","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":9,"pick":10,"overall":106,"player":"CeeDee Lamb","nflTeam":"Dal","position":"WR","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":9,"pick":11,"overall":107,"player":"John Brown","nflTeam":"Buf","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":9,"pick":12,"overall":108,"player":"Darrell Henderson Jr.","nflTeam":"LAR","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":10,"pick":1,"overall":109,"player":"Josh Allen","nflTeam":"Buf","position":"QB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":10,"pick":2,"overall":110,"player":"Golden Tate","nflTeam":"FA","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":10,"pick":3,"overall":111,"player":"Hunter Henry","nflTeam":"LAC","position":"TE","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":10,"pick":4,"overall":112,"player":"Chris Thompson","nflTeam":"Jax","position":"RB","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":10,"pick":5,"overall":113,"player":"Breshad Perriman","nflTeam":"NYJ","position":"WR","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":10,"pick":6,"overall":114,"player":"Aaron Rodgers","nflTeam":"GB","position":"QB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":10,"pick":7,"overall":115,"player":"Mecole Hardman","nflTeam":"KC","position":"WR","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":10,"pick":8,"overall":116,"player":"Boston Scott","nflTeam":"Phi","position":"RB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":10,"pick":9,"overall":117,"player":"Jared Cook","nflTeam":"FA","position":"TE","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":10,"pick":10,"overall":118,"player":"Noah Fant","nflTeam":"Den","position":"TE","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":10,"pick":11,"overall":119,"player":"Darius Slayton","nflTeam":"NYG","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":10,"pick":12,"overall":120,"player":"Austin Hooper","nflTeam":"Cle","position":"TE","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":11,"pick":1,"overall":121,"player":"Robby Anderson","nflTeam":"Car","position":"WR","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":11,"pick":2,"overall":122,"player":"Jerry Jeudy","nflTeam":"Den","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":11,"pick":3,"overall":123,"player":"Tony Pollard","nflTeam":"Dal","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":11,"pick":4,"overall":124,"player":"Tom Brady","nflTeam":"TB","position":"QB","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":11,"pick":5,"overall":125,"player":"Mike Williams","nflTeam":"LAC","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":11,"pick":6,"overall":126,"player":"DeSean Jackson","nflTeam":"FA","position":"WR","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":11,"pick":7,"overall":127,"player":"Justin Jackson","nflTeam":"LAC","position":"RB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":11,"pick":8,"overall":128,"player":"Devine Ozigbo","nflTeam":"Jax","position":"RB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":11,"pick":9,"overall":129,"player":"Curtis Samuel","nflTeam":"Car","position":"WR","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":11,"pick":10,"overall":130,"player":"Benny Snell Jr.","nflTeam":"Pit","position":"RB","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":11,"pick":11,"overall":131,"player":"Chase Edmonds","nflTeam":"Ari","position":"RB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":11,"pick":12,"overall":132,"player":"Anthony Miller","nflTeam":"Chi","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":12,"pick":1,"overall":133,"player":"Matt Ryan","nflTeam":"Atl","position":"QB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":12,"pick":2,"overall":134,"player":"Justin Jefferson","nflTeam":"Min","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":12,"pick":3,"overall":135,"player":"Cam Newton","nflTeam":"NE","position":"QB","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":12,"pick":4,"overall":136,"player":"Nyheim Hines","nflTeam":"Ind","position":"RB","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":12,"pick":5,"overall":137,"player":"Hayden Hurst","nflTeam":"Atl","position":"TE","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":12,"pick":6,"overall":138,"player":"Allen Lazard","nflTeam":"GB","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":12,"pick":7,"overall":139,"player":"T.J. Hockenson","nflTeam":"Det","position":"TE","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":12,"pick":8,"overall":140,"player":"Matthew Stafford","nflTeam":"LAR","position":"QB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":12,"pick":9,"overall":141,"player":"Joe Burrow","nflTeam":"Cin","position":"QB","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":12,"pick":10,"overall":142,"player":"Jalen Reagor","nflTeam":"Phi","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":12,"pick":11,"overall":143,"player":"N'Keal Harry","nflTeam":"NE","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":12,"pick":12,"overall":144,"player":"Parris Campbell","nflTeam":"Ind","position":"WR","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":13,"pick":1,"overall":145,"player":"Cole Beasley","nflTeam":"Buf","position":"WR","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":13,"pick":2,"overall":146,"player":"Jared Goff","nflTeam":"Det","position":"QB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":13,"pick":3,"overall":147,"player":"Mike Gesicki","nflTeam":"Mia","position":"TE","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":13,"pick":4,"overall":148,"player":"Chris Herndon","nflTeam":"NYJ","position":"TE","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":13,"pick":5,"overall":149,"player":"Sammy Watkins","nflTeam":"KC","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":13,"pick":6,"overall":150,"player":"Malcolm Brown","nflTeam":"LAR","position":"RB","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":13,"pick":7,"overall":151,"player":"Jack Doyle","nflTeam":"Ind","position":"TE","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":13,"pick":8,"overall":152,"player":"Steven Sims Jr.","nflTeam":"Wsh","position":"WR","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":13,"pick":9,"overall":153,"player":"Alshon Jeffery","nflTeam":"Phi","position":"WR","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":13,"pick":10,"overall":154,"player":"Larry Fitzgerald","nflTeam":"Ari","position":"WR","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":13,"pick":11,"overall":155,"player":"Brandon Aiyuk","nflTeam":"SF","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":13,"pick":12,"overall":156,"player":"Daniel Jones","nflTeam":"NYG","position":"QB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"}
  ],
  "2021": [
    {"round":1,"pick":1,"overall":1,"player":"Christian McCaffrey","nflTeam":"Car","position":"RB","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":1,"pick":2,"overall":2,"player":"Dalvin Cook","nflTeam":"Min","position":"RB","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":1,"pick":3,"overall":3,"player":"Alvin Kamara","nflTeam":"NO","position":"RB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":1,"pick":4,"overall":4,"player":"Derrick Henry","nflTeam":"Ten","position":"RB","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":1,"pick":5,"overall":5,"player":"Ezekiel Elliott","nflTeam":"Dal","position":"RB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":1,"pick":6,"overall":6,"player":"Saquon Barkley","nflTeam":"NYG","position":"RB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":1,"pick":7,"overall":7,"player":"Davante Adams","nflTeam":"GB","position":"WR","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":1,"pick":8,"overall":8,"player":"Aaron Jones","nflTeam":"GB","position":"RB","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":1,"pick":9,"overall":9,"player":"Tyreek Hill","nflTeam":"KC","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":1,"pick":10,"overall":10,"player":"Austin Ekeler","nflTeam":"LAC","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":1,"pick":11,"overall":11,"player":"Travis Kelce","nflTeam":"KC","position":"TE","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":1,"pick":12,"overall":12,"player":"Jonathan Taylor","nflTeam":"Ind","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":2,"pick":1,"overall":13,"player":"Nick Chubb","nflTeam":"Cle","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":2,"pick":2,"overall":14,"player":"Stefon Diggs","nflTeam":"Buf","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":2,"pick":3,"overall":15,"player":"Antonio Gibson","nflTeam":"Wsh","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":2,"pick":4,"overall":16,"player":"Najee Harris","nflTeam":"Pit","position":"RB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":2,"pick":5,"overall":17,"player":"DK Metcalf","nflTeam":"Sea","position":"WR","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":2,"pick":6,"overall":18,"player":"Joe Mixon","nflTeam":"Cin","position":"RB","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":2,"pick":7,"overall":19,"player":"DeAndre Hopkins","nflTeam":"Ari","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":2,"pick":8,"overall":20,"player":"Chris Carson","nflTeam":"Sea","position":"RB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":2,"pick":9,"overall":21,"player":"Calvin Ridley","nflTeam":"Atl","position":"WR","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":2,"pick":10,"overall":22,"player":"Clyde Edwards-Helaire","nflTeam":"KC","position":"RB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":2,"pick":11,"overall":23,"player":"Terry McLaurin","nflTeam":"Wsh","position":"WR","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":2,"pick":12,"overall":24,"player":"Justin Jefferson","nflTeam":"Min","position":"WR","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":3,"pick":1,"overall":25,"player":"Darren Waller","nflTeam":"LV","position":"TE","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":3,"pick":2,"overall":26,"player":"Miles Sanders","nflTeam":"Phi","position":"RB","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":3,"pick":3,"overall":27,"player":"Keenan Allen","nflTeam":"LAC","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":3,"pick":4,"overall":28,"player":"George Kittle","nflTeam":"SF","position":"TE","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":3,"pick":5,"overall":29,"player":"Mike Evans","nflTeam":"TB","position":"WR","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":3,"pick":6,"overall":30,"player":"James Robinson","nflTeam":"Jax","position":"RB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":3,"pick":7,"overall":31,"player":"Josh Jacobs","nflTeam":"LV","position":"RB","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":3,"pick":8,"overall":32,"player":"A.J. Brown","nflTeam":"Ten","position":"WR","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":3,"pick":9,"overall":33,"player":"David Montgomery","nflTeam":"Chi","position":"RB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":3,"pick":10,"overall":34,"player":"D'Andre Swift","nflTeam":"Det","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":3,"pick":11,"overall":35,"player":"Patrick Mahomes","nflTeam":"KC","position":"QB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":3,"pick":12,"overall":36,"player":"Allen Robinson II","nflTeam":"Chi","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":4,"pick":1,"overall":37,"player":"CeeDee Lamb","nflTeam":"Dal","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":4,"pick":2,"overall":38,"player":"Darrell Henderson Jr.","nflTeam":"LAR","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":4,"pick":3,"overall":39,"player":"Robert Woods","nflTeam":"LAR","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":4,"pick":4,"overall":40,"player":"Amari Cooper","nflTeam":"Dal","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":4,"pick":5,"overall":41,"player":"Gus Edwards","nflTeam":"Bal","position":"RB","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":4,"pick":6,"overall":42,"player":"Myles Gaskin","nflTeam":"Mia","position":"RB","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":4,"pick":7,"overall":43,"player":"Adam Thielen","nflTeam":"Min","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":4,"pick":8,"overall":44,"player":"Cooper Kupp","nflTeam":"LAR","position":"WR","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":4,"pick":9,"overall":45,"player":"DJ Moore","nflTeam":"Car","position":"WR","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":4,"pick":10,"overall":46,"player":"Diontae Johnson","nflTeam":"Pit","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":4,"pick":11,"overall":47,"player":"Chase Edmonds","nflTeam":"Ari","position":"RB","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":4,"pick":12,"overall":48,"player":"Chris Godwin","nflTeam":"TB","position":"WR","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":5,"pick":1,"overall":49,"player":"Lamar Jackson","nflTeam":"Bal","position":"QB","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":5,"pick":2,"overall":50,"player":"Tyler Lockett","nflTeam":"Sea","position":"WR","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":5,"pick":3,"overall":51,"player":"Kyle Pitts","nflTeam":"Atl","position":"TE","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":5,"pick":4,"overall":52,"player":"Josh Allen","nflTeam":"Buf","position":"QB","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":5,"pick":5,"overall":53,"player":"Julio Jones","nflTeam":"Ten","position":"WR","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":5,"pick":6,"overall":54,"player":"Kyler Murray","nflTeam":"Ari","position":"QB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":5,"pick":7,"overall":55,"player":"Aaron Rodgers","nflTeam":"GB","position":"QB","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":5,"pick":8,"overall":56,"player":"Tee Higgins","nflTeam":"Cin","position":"WR","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":5,"pick":9,"overall":57,"player":"Mike Davis","nflTeam":"Atl","position":"RB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":5,"pick":10,"overall":58,"player":"Brandon Aiyuk","nflTeam":"SF","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":5,"pick":11,"overall":59,"player":"Kareem Hunt","nflTeam":"Cle","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":5,"pick":12,"overall":60,"player":"Odell Beckham Jr.","nflTeam":"LAR","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":6,"pick":1,"overall":61,"player":"Javonte Williams","nflTeam":"Den","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":6,"pick":2,"overall":62,"player":"Kenny Golladay","nflTeam":"NYG","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":6,"pick":3,"overall":63,"player":"Chase Claypool","nflTeam":"Pit","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":6,"pick":4,"overall":64,"player":"Raheem Mostert","nflTeam":"SF","position":"RB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":6,"pick":5,"overall":65,"player":"Damien Harris","nflTeam":"NE","position":"RB","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":6,"pick":6,"overall":66,"player":"JuJu Smith-Schuster","nflTeam":"Pit","position":"WR","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":6,"pick":7,"overall":67,"player":"Mark Andrews","nflTeam":"Bal","position":"TE","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":6,"pick":8,"overall":68,"player":"T.J. Hockenson","nflTeam":"Det","position":"TE","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":6,"pick":9,"overall":69,"player":"Tyler Boyd","nflTeam":"Cin","position":"WR","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":6,"pick":10,"overall":70,"player":"Robby Anderson","nflTeam":"Car","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":6,"pick":11,"overall":71,"player":"Jerry Jeudy","nflTeam":"Den","position":"WR","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":6,"pick":12,"overall":72,"player":"Leonard Fournette","nflTeam":"TB","position":"RB","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":7,"pick":1,"overall":73,"player":"Laviska Shenault Jr.","nflTeam":"Jax","position":"WR","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":7,"pick":2,"overall":74,"player":"Logan Thomas","nflTeam":"Wsh","position":"TE","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":7,"pick":3,"overall":75,"player":"Melvin Gordon III","nflTeam":"Den","position":"RB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":7,"pick":4,"overall":76,"player":"Sony Michel","nflTeam":"LAR","position":"RB","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":7,"pick":5,"overall":77,"player":"Justin Herbert","nflTeam":"LAC","position":"QB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":7,"pick":6,"overall":78,"player":"Kenyan Drake","nflTeam":"LV","position":"RB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":7,"pick":7,"overall":79,"player":"Robert Tonyan","nflTeam":"GB","position":"TE","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":7,"pick":8,"overall":80,"player":"Michael Thomas","nflTeam":"NO","position":"WR","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":7,"pick":9,"overall":81,"player":"Courtland Sutton","nflTeam":"Den","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":7,"pick":10,"overall":82,"player":"Dak Prescott","nflTeam":"Dal","position":"QB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":7,"pick":11,"overall":83,"player":"Ja'Marr Chase","nflTeam":"Cin","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":7,"pick":12,"overall":84,"player":"William Fuller V","nflTeam":"Mia","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":8,"pick":1,"overall":85,"player":"Russell Wilson","nflTeam":"Sea","position":"QB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":8,"pick":2,"overall":86,"player":"Trey Sermon","nflTeam":"SF","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":8,"pick":3,"overall":87,"player":"Noah Fant","nflTeam":"Den","position":"TE","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":8,"pick":4,"overall":88,"player":"Michael Carter","nflTeam":"NYJ","position":"RB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":8,"pick":5,"overall":89,"player":"DeVonta Smith","nflTeam":"Phi","position":"WR","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":8,"pick":6,"overall":90,"player":"Ronald Jones II","nflTeam":"TB","position":"RB","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":8,"pick":7,"overall":91,"player":"Brandin Cooks","nflTeam":"Hou","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":8,"pick":8,"overall":92,"player":"Jaylen Waddle","nflTeam":"Mia","position":"WR","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":8,"pick":9,"overall":93,"player":"Jarvis Landry","nflTeam":"Cle","position":"WR","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":8,"pick":10,"overall":94,"player":"AJ Dillon","nflTeam":"GB","position":"RB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":8,"pick":11,"overall":95,"player":"Zack Moss","nflTeam":"Buf","position":"RB","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":8,"pick":12,"overall":96,"player":"Devin Singletary","nflTeam":"Buf","position":"RB","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":9,"pick":1,"overall":97,"player":"Deebo Samuel","nflTeam":"SF","position":"WR","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":9,"pick":2,"overall":98,"player":"Michael Gallup","nflTeam":"Dal","position":"WR","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":9,"pick":3,"overall":99,"player":"Corey Davis","nflTeam":"NYJ","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":9,"pick":4,"overall":100,"player":"Marquise Brown","nflTeam":"Bal","position":"WR","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":9,"pick":5,"overall":101,"player":"Jamaal Williams","nflTeam":"Det","position":"RB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":9,"pick":6,"overall":102,"player":"David Johnson","nflTeam":"Hou","position":"RB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":9,"pick":7,"overall":103,"player":"Curtis Samuel","nflTeam":"Wsh","position":"WR","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":9,"pick":8,"overall":104,"player":"James Conner","nflTeam":"Ari","position":"RB","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":9,"pick":9,"overall":105,"player":"DJ Chark Jr.","nflTeam":"Jax","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":9,"pick":10,"overall":106,"player":"Mike Williams","nflTeam":"LAC","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":9,"pick":11,"overall":107,"player":"Antonio Brown","nflTeam":"FA","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":9,"pick":12,"overall":108,"player":"Marvin Jones Jr.","nflTeam":"Jax","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":10,"pick":1,"overall":109,"player":"Phillip Lindsay","nflTeam":"Mia","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":10,"pick":2,"overall":110,"player":"Nyheim Hines","nflTeam":"Ind","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":10,"pick":3,"overall":111,"player":"Henry Ruggs III","nflTeam":"FA","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":10,"pick":4,"overall":112,"player":"Marquez Callaway","nflTeam":"NO","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":10,"pick":5,"overall":113,"player":"Tom Brady","nflTeam":"TB","position":"QB","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":10,"pick":6,"overall":114,"player":"Mecole Hardman","nflTeam":"KC","position":"WR","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":10,"pick":7,"overall":115,"player":"Cole Beasley","nflTeam":"Buf","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":10,"pick":8,"overall":116,"player":"Michael Pittman Jr.","nflTeam":"Ind","position":"WR","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":10,"pick":9,"overall":117,"player":"Latavius Murray","nflTeam":"Bal","position":"RB","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":10,"pick":10,"overall":118,"player":"Jalen Hurts","nflTeam":"Phi","position":"QB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":10,"pick":11,"overall":119,"player":"Ryan Tannehill","nflTeam":"Ten","position":"QB","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":10,"pick":12,"overall":120,"player":"Jonnu Smith","nflTeam":"NE","position":"TE","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":11,"pick":1,"overall":121,"player":"Darnell Mooney","nflTeam":"Chi","position":"WR","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":11,"pick":2,"overall":122,"player":"Dallas Goedert","nflTeam":"Phi","position":"TE","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":11,"pick":3,"overall":123,"player":"Tony Pollard","nflTeam":"Dal","position":"RB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":11,"pick":4,"overall":124,"player":"Jakobi Meyers","nflTeam":"NE","position":"WR","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":11,"pick":5,"overall":125,"player":"Mike Gesicki","nflTeam":"Mia","position":"TE","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":11,"pick":6,"overall":126,"player":"Nelson Agholor","nflTeam":"NE","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":11,"pick":7,"overall":127,"player":"A.J. Green","nflTeam":"Ari","position":"WR","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":11,"pick":8,"overall":128,"player":"Austin Hooper","nflTeam":"Cle","position":"TE","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":11,"pick":9,"overall":129,"player":"Tyler Higbee","nflTeam":"LAR","position":"TE","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":11,"pick":10,"overall":130,"player":"J.D. McKissic","nflTeam":"Wsh","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":11,"pick":11,"overall":131,"player":"James White","nflTeam":"NE","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":11,"pick":12,"overall":132,"player":"DeVante Parker","nflTeam":"Mia","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":12,"pick":1,"overall":133,"player":"Jalen Reagor","nflTeam":"Phi","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":12,"pick":2,"overall":134,"player":"Alexander Mattison","nflTeam":"Min","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":12,"pick":3,"overall":135,"player":"Ty'Son Williams","nflTeam":"Bal","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":12,"pick":4,"overall":136,"player":"Rashaad Penny","nflTeam":"Sea","position":"RB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":12,"pick":5,"overall":137,"player":"Matthew Stafford","nflTeam":"LAR","position":"QB","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":12,"pick":6,"overall":138,"player":"Rob Gronkowski","nflTeam":"TB","position":"TE","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":12,"pick":7,"overall":139,"player":"Tyrell Williams","nflTeam":"FA","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":12,"pick":8,"overall":140,"player":"Amon-Ra St. Brown","nflTeam":"Det","position":"WR","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":12,"pick":9,"overall":141,"player":"Parris Campbell","nflTeam":"Ind","position":"WR","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":12,"pick":10,"overall":142,"player":"Russell Gage","nflTeam":"Atl","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":12,"pick":11,"overall":143,"player":"Elijah Moore","nflTeam":"NYJ","position":"WR","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":12,"pick":12,"overall":144,"player":"Justin Fields","nflTeam":"Chi","position":"QB","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":13,"pick":1,"overall":145,"player":"Carlos Hyde","nflTeam":"Jax","position":"RB","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":13,"pick":2,"overall":146,"player":"T.Y. Hilton","nflTeam":"Ind","position":"WR","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":13,"pick":3,"overall":147,"player":"Joe Burrow","nflTeam":"Cin","position":"QB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":13,"pick":4,"overall":148,"player":"Sterling Shepard","nflTeam":"NYG","position":"WR","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":13,"pick":5,"overall":149,"player":"Rondale Moore","nflTeam":"Ari","position":"WR","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":13,"pick":6,"overall":150,"player":"Trevor Lawrence","nflTeam":"Jax","position":"QB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":13,"pick":7,"overall":151,"player":"Randall Cobb","nflTeam":"GB","position":"WR","fantasyTeam":"Route 2 Ravers Reunited","owner":"Joseph Garton"},
    {"round":13,"pick":8,"overall":152,"player":"Jamison Crowder","nflTeam":"NYJ","position":"WR","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":13,"pick":9,"overall":153,"player":"Tua Tagovailoa","nflTeam":"Mia","position":"QB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":13,"pick":10,"overall":154,"player":"Malcolm Brown","nflTeam":"Mia","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":13,"pick":11,"overall":155,"player":"Tarik Cohen","nflTeam":"Chi","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":13,"pick":12,"overall":156,"player":"Evan Engram","nflTeam":"NYG","position":"TE","fantasyTeam":"Money Badgers","owner":"Tyler Clay"}
  ],
  "2022": [
    {"round":1,"pick":1,"overall":1,"player":"Jonathan Taylor","nflTeam":"Ind","position":"RB","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":1,"pick":2,"overall":2,"player":"Austin Ekeler","nflTeam":"LAC","position":"RB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":1,"pick":3,"overall":3,"player":"Christian McCaffrey","nflTeam":"SF","position":"RB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":1,"pick":4,"overall":4,"player":"Cooper Kupp","nflTeam":"LAR","position":"WR","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":1,"pick":5,"overall":5,"player":"Justin Jefferson","nflTeam":"Min","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":1,"pick":6,"overall":6,"player":"Derrick Henry","nflTeam":"Ten","position":"RB","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":1,"pick":7,"overall":7,"player":"Ja'Marr Chase","nflTeam":"Cin","position":"WR","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":1,"pick":8,"overall":8,"player":"Najee Harris","nflTeam":"Pit","position":"RB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":1,"pick":9,"overall":9,"player":"Dalvin Cook","nflTeam":"Min","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":1,"pick":10,"overall":10,"player":"Alvin Kamara","nflTeam":"NO","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":1,"pick":11,"overall":11,"player":"Davante Adams","nflTeam":"LV","position":"WR","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":1,"pick":12,"overall":12,"player":"Joe Mixon","nflTeam":"Cin","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":2,"pick":1,"overall":13,"player":"Travis Kelce","nflTeam":"KC","position":"TE","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":2,"pick":2,"overall":14,"player":"D'Andre Swift","nflTeam":"Det","position":"RB","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":2,"pick":3,"overall":15,"player":"Javonte Williams","nflTeam":"Den","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":2,"pick":4,"overall":16,"player":"Saquon Barkley","nflTeam":"NYG","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":2,"pick":5,"overall":17,"player":"Stefon Diggs","nflTeam":"Buf","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":2,"pick":6,"overall":18,"player":"Aaron Jones","nflTeam":"GB","position":"RB","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":2,"pick":7,"overall":19,"player":"Tyreek Hill","nflTeam":"Mia","position":"WR","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":2,"pick":8,"overall":20,"player":"CeeDee Lamb","nflTeam":"Dal","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":2,"pick":9,"overall":21,"player":"Leonard Fournette","nflTeam":"FA","position":"RB","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":2,"pick":10,"overall":22,"player":"Deebo Samuel","nflTeam":"SF","position":"WR","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":2,"pick":11,"overall":23,"player":"Mike Evans","nflTeam":"TB","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":2,"pick":12,"overall":24,"player":"James Conner","nflTeam":"Ari","position":"RB","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":3,"pick":1,"overall":25,"player":"Nick Chubb","nflTeam":"Cle","position":"RB","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":3,"pick":2,"overall":26,"player":"Mark Andrews","nflTeam":"Bal","position":"TE","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":3,"pick":3,"overall":27,"player":"Josh Allen","nflTeam":"Buf","position":"QB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":3,"pick":4,"overall":28,"player":"Travis Etienne Jr.","nflTeam":"Jax","position":"RB","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":3,"pick":5,"overall":29,"player":"Tee Higgins","nflTeam":"Cin","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":3,"pick":6,"overall":30,"player":"Cam Akers","nflTeam":"LAR","position":"RB","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":3,"pick":7,"overall":31,"player":"Michael Pittman Jr.","nflTeam":"Ind","position":"WR","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":3,"pick":8,"overall":32,"player":"DJ Moore","nflTeam":"Chi","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":3,"pick":9,"overall":33,"player":"Ezekiel Elliott","nflTeam":"FA","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":3,"pick":10,"overall":34,"player":"Keenan Allen","nflTeam":"LAC","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":3,"pick":11,"overall":35,"player":"A.J. Brown","nflTeam":"Phi","position":"WR","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":3,"pick":12,"overall":36,"player":"Breece Hall","nflTeam":"NYJ","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":4,"pick":1,"overall":37,"player":"David Montgomery","nflTeam":"Det","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":4,"pick":2,"overall":38,"player":"Mike Williams","nflTeam":"LAC","position":"WR","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":4,"pick":3,"overall":39,"player":"J.K. Dobbins","nflTeam":"Bal","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":4,"pick":4,"overall":40,"player":"Kyle Pitts","nflTeam":"Atl","position":"TE","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":4,"pick":5,"overall":41,"player":"Jaylen Waddle","nflTeam":"Mia","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":4,"pick":6,"overall":42,"player":"Terry McLaurin","nflTeam":"Wsh","position":"WR","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":4,"pick":7,"overall":43,"player":"DK Metcalf","nflTeam":"Sea","position":"WR","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":4,"pick":8,"overall":44,"player":"Elijah Mitchell","nflTeam":"SF","position":"RB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":4,"pick":9,"overall":45,"player":"Diontae Johnson","nflTeam":"Pit","position":"WR","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":4,"pick":10,"overall":46,"player":"Josh Jacobs","nflTeam":"LV","position":"RB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":4,"pick":11,"overall":47,"player":"Courtland Sutton","nflTeam":"Den","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":4,"pick":12,"overall":48,"player":"Clyde Edwards-Helaire","nflTeam":"KC","position":"RB","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":5,"pick":1,"overall":49,"player":"Jerry Jeudy","nflTeam":"Den","position":"WR","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":5,"pick":2,"overall":50,"player":"Justin Herbert","nflTeam":"LAC","position":"QB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":5,"pick":3,"overall":51,"player":"Darren Waller","nflTeam":"NYG","position":"TE","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":5,"pick":4,"overall":52,"player":"Patrick Mahomes","nflTeam":"KC","position":"QB","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":5,"pick":5,"overall":53,"player":"Gabe Davis","nflTeam":"Buf","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":5,"pick":6,"overall":54,"player":"Marquise Brown","nflTeam":"Ari","position":"WR","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":5,"pick":7,"overall":55,"player":"Devin Singletary","nflTeam":"Hou","position":"RB","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":5,"pick":8,"overall":56,"player":"Brandin Cooks","nflTeam":"Dal","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":5,"pick":9,"overall":57,"player":"Amon-Ra St. Brown","nflTeam":"Det","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":5,"pick":10,"overall":58,"player":"Darnell Mooney","nflTeam":"Chi","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":5,"pick":11,"overall":59,"player":"Lamar Jackson","nflTeam":"Bal","position":"QB","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":5,"pick":12,"overall":60,"player":"JuJu Smith-Schuster","nflTeam":"NE","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":6,"pick":1,"overall":61,"player":"Allen Robinson II","nflTeam":"LAR","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":6,"pick":2,"overall":62,"player":"George Kittle","nflTeam":"SF","position":"TE","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":6,"pick":3,"overall":63,"player":"Miles Sanders","nflTeam":"Car","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":6,"pick":4,"overall":64,"player":"Chris Godwin","nflTeam":"TB","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":6,"pick":5,"overall":65,"player":"Kyler Murray","nflTeam":"Ari","position":"QB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":6,"pick":6,"overall":66,"player":"Hunter Renfrow","nflTeam":"LV","position":"WR","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":6,"pick":7,"overall":67,"player":"Aaron Rodgers","nflTeam":"GB","position":"QB","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":6,"pick":8,"overall":68,"player":"Dameon Pierce","nflTeam":"Hou","position":"RB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":6,"pick":9,"overall":69,"player":"Amari Cooper","nflTeam":"Cle","position":"WR","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":6,"pick":10,"overall":70,"player":"Michael Thomas","nflTeam":"NO","position":"WR","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":6,"pick":11,"overall":71,"player":"Antonio Gibson","nflTeam":"Wsh","position":"RB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":6,"pick":12,"overall":72,"player":"Adam Thielen","nflTeam":"FA","position":"WR","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":7,"pick":1,"overall":73,"player":"DeVonta Smith","nflTeam":"Phi","position":"WR","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":7,"pick":2,"overall":74,"player":"Elijah Moore","nflTeam":"NYJ","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":7,"pick":3,"overall":75,"player":"Rashod Bateman","nflTeam":"Bal","position":"WR","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":7,"pick":4,"overall":76,"player":"Dalton Schultz","nflTeam":"Hou","position":"TE","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":7,"pick":5,"overall":77,"player":"Tony Pollard","nflTeam":"Dal","position":"RB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":7,"pick":6,"overall":78,"player":"Marquez Valdes-Scantling","nflTeam":"KC","position":"WR","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":7,"pick":7,"overall":79,"player":"Jalen Hurts","nflTeam":"Phi","position":"QB","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":7,"pick":8,"overall":80,"player":"Damien Harris","nflTeam":"Buf","position":"RB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":7,"pick":9,"overall":81,"player":"Cordarrelle Patterson","nflTeam":"Atl","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":7,"pick":10,"overall":82,"player":"T.J. Hockenson","nflTeam":"Min","position":"TE","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":7,"pick":11,"overall":83,"player":"Chase Edmonds","nflTeam":"TB","position":"RB","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":7,"pick":12,"overall":84,"player":"Drake London","nflTeam":"Atl","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":8,"pick":1,"overall":85,"player":"Tyler Lockett","nflTeam":"Sea","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":8,"pick":2,"overall":86,"player":"AJ Dillon","nflTeam":"GB","position":"RB","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":8,"pick":3,"overall":87,"player":"Christian Kirk","nflTeam":"Jax","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":8,"pick":4,"overall":88,"player":"DeAndre Hopkins","nflTeam":"Ari","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":8,"pick":5,"overall":89,"player":"Zach Ertz","nflTeam":"Ari","position":"TE","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":8,"pick":6,"overall":90,"player":"Dallas Goedert","nflTeam":"Phi","position":"TE","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":8,"pick":7,"overall":91,"player":"Kareem Hunt","nflTeam":"Cle","position":"RB","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":8,"pick":8,"overall":92,"player":"Chris Olave","nflTeam":"NO","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":8,"pick":9,"overall":93,"player":"Allen Lazard","nflTeam":"NYJ","position":"WR","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":8,"pick":10,"overall":94,"player":"Kenneth Walker III","nflTeam":"Sea","position":"RB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":8,"pick":11,"overall":95,"player":"Brandon Aiyuk","nflTeam":"SF","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":8,"pick":12,"overall":96,"player":"Russell Wilson","nflTeam":"Den","position":"QB","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":9,"pick":1,"overall":97,"player":"Rhamondre Stevenson","nflTeam":"NE","position":"RB","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":9,"pick":2,"overall":98,"player":"Rashaad Penny","nflTeam":"Phi","position":"RB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":9,"pick":3,"overall":99,"player":"Treylon Burks","nflTeam":"Ten","position":"WR","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":9,"pick":4,"overall":100,"player":"Melvin Gordon III","nflTeam":"FA","position":"RB","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":9,"pick":5,"overall":101,"player":"Dak Prescott","nflTeam":"Dal","position":"QB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":9,"pick":6,"overall":102,"player":"James Cook","nflTeam":"Buf","position":"RB","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":9,"pick":7,"overall":103,"player":"James Robinson","nflTeam":"NE","position":"RB","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":9,"pick":8,"overall":104,"player":"Nyheim Hines","nflTeam":"Buf","position":"RB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":9,"pick":9,"overall":105,"player":"Robert Woods","nflTeam":"FA","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":9,"pick":10,"overall":106,"player":"Joe Burrow","nflTeam":"Cin","position":"QB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":9,"pick":11,"overall":107,"player":"Skyy Moore","nflTeam":"KC","position":"WR","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":9,"pick":12,"overall":108,"player":"Kadarius Toney","nflTeam":"KC","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":10,"pick":1,"overall":109,"player":"Garrett Wilson","nflTeam":"NYJ","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":10,"pick":2,"overall":110,"player":"Tyler Boyd","nflTeam":"Cin","position":"WR","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":10,"pick":3,"overall":111,"player":"Chase Claypool","nflTeam":"Chi","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":10,"pick":4,"overall":112,"player":"Tom Brady","nflTeam":"TB","position":"QB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":10,"pick":5,"overall":113,"player":"Jakobi Meyers","nflTeam":"LV","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":10,"pick":6,"overall":114,"player":"Robbie Anderson","nflTeam":"FA","position":"WR","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":10,"pick":7,"overall":115,"player":"Jamaal Williams","nflTeam":"NO","position":"RB","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":10,"pick":8,"overall":116,"player":"Dawson Knox","nflTeam":"Buf","position":"TE","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":10,"pick":9,"overall":117,"player":"Jarvis Landry","nflTeam":"NO","position":"WR","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":10,"pick":10,"overall":118,"player":"George Pickens","nflTeam":"Pit","position":"WR","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":10,"pick":11,"overall":119,"player":"Russell Gage","nflTeam":"TB","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":10,"pick":12,"overall":120,"player":"Hunter Henry","nflTeam":"NE","position":"TE","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":11,"pick":1,"overall":121,"player":"Jahan Dotson","nflTeam":"Wsh","position":"WR","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":11,"pick":2,"overall":122,"player":"Kenneth Gainwell","nflTeam":"Phi","position":"RB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":11,"pick":3,"overall":123,"player":"Alexander Mattison","nflTeam":"Min","position":"RB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":11,"pick":4,"overall":124,"player":"Darrell Henderson Jr.","nflTeam":"FA","position":"RB","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":11,"pick":5,"overall":125,"player":"Julio Jones","nflTeam":"TB","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":11,"pick":6,"overall":126,"player":"Cole Kmet","nflTeam":"Chi","position":"TE","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":11,"pick":7,"overall":127,"player":"Pat Freiermuth","nflTeam":"Pit","position":"TE","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":11,"pick":8,"overall":128,"player":"Matthew Stafford","nflTeam":"LAR","position":"QB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":11,"pick":9,"overall":129,"player":"Michael Carter","nflTeam":"NYJ","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":11,"pick":10,"overall":130,"player":"Marvin Jones Jr.","nflTeam":"Jax","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":11,"pick":11,"overall":131,"player":"Khalil Herbert","nflTeam":"Chi","position":"RB","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":11,"pick":12,"overall":132,"player":"Trey Lance","nflTeam":"SF","position":"QB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":12,"pick":1,"overall":133,"player":"Brian Robinson Jr.","nflTeam":"Wsh","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":12,"pick":2,"overall":134,"player":"Michael Gallup","nflTeam":"Dal","position":"WR","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":12,"pick":3,"overall":135,"player":"Raheem Mostert","nflTeam":"Mia","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":12,"pick":4,"overall":136,"player":"Rondale Moore","nflTeam":"Ari","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":12,"pick":5,"overall":137,"player":"DJ Chark","nflTeam":"Det","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":12,"pick":6,"overall":138,"player":"Curtis Samuel","nflTeam":"Wsh","position":"WR","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":12,"pick":7,"overall":139,"player":"Christian Watson","nflTeam":"GB","position":"WR","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":12,"pick":8,"overall":140,"player":"Mecole Hardman","nflTeam":"KC","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":12,"pick":9,"overall":141,"player":"Derek Carr","nflTeam":"NO","position":"QB","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":12,"pick":10,"overall":142,"player":"Alec Pierce","nflTeam":"Ind","position":"WR","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":12,"pick":11,"overall":143,"player":"J.D. McKissic","nflTeam":"FA","position":"RB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":12,"pick":12,"overall":144,"player":"Kenny Golladay","nflTeam":"FA","position":"WR","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":13,"pick":1,"overall":145,"player":"Mike Gesicki","nflTeam":"NE","position":"TE","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":13,"pick":2,"overall":146,"player":"Isiah Pacheco","nflTeam":"KC","position":"RB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":13,"pick":3,"overall":147,"player":"Noah Fant","nflTeam":"Sea","position":"TE","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":13,"pick":4,"overall":148,"player":"Kirk Cousins","nflTeam":"Min","position":"QB","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":13,"pick":5,"overall":149,"player":"Tyler Allgeier","nflTeam":"Atl","position":"RB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":13,"pick":6,"overall":150,"player":"Romeo Doubs","nflTeam":"GB","position":"WR","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":13,"pick":7,"overall":151,"player":"Deshaun Watson","nflTeam":"Cle","position":"QB","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":13,"pick":8,"overall":152,"player":"Trevor Lawrence","nflTeam":"Jax","position":"QB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":13,"pick":9,"overall":153,"player":"Van Jefferson","nflTeam":"LAR","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":13,"pick":10,"overall":154,"player":"Tua Tagovailoa","nflTeam":"Mia","position":"QB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":13,"pick":11,"overall":155,"player":"Kenyan Drake","nflTeam":"Bal","position":"RB","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":13,"pick":12,"overall":156,"player":"Jerick McKinnon","nflTeam":"KC","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"}
  ],
  "2023": [
    {"round":1,"pick":1,"overall":1,"player":"Justin Jefferson","nflTeam":"Min","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":1,"pick":2,"overall":2,"player":"Christian McCaffrey","nflTeam":"SF","position":"RB","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":1,"pick":3,"overall":3,"player":"Ja'Marr Chase","nflTeam":"Cin","position":"WR","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":1,"pick":4,"overall":4,"player":"Austin Ekeler","nflTeam":"Wsh","position":"RB","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":1,"pick":5,"overall":5,"player":"Travis Kelce","nflTeam":"KC","position":"TE","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":1,"pick":6,"overall":6,"player":"Tyreek Hill","nflTeam":"Mia","position":"WR","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":1,"pick":7,"overall":7,"player":"Bijan Robinson","nflTeam":"Atl","position":"RB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":1,"pick":8,"overall":8,"player":"Derrick Henry","nflTeam":"Bal","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":1,"pick":9,"overall":9,"player":"Cooper Kupp","nflTeam":"LAR","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":1,"pick":10,"overall":10,"player":"Saquon Barkley","nflTeam":"Phi","position":"RB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":1,"pick":11,"overall":11,"player":"Nick Chubb","nflTeam":"Cle","position":"RB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":1,"pick":12,"overall":12,"player":"Stefon Diggs","nflTeam":"Buf","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":2,"pick":1,"overall":13,"player":"Tony Pollard","nflTeam":"Ten","position":"RB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":2,"pick":2,"overall":14,"player":"CeeDee Lamb","nflTeam":"Dal","position":"WR","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":2,"pick":3,"overall":15,"player":"Davante Adams","nflTeam":"LV","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":2,"pick":4,"overall":16,"player":"Jonathan Taylor","nflTeam":"Ind","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":2,"pick":5,"overall":17,"player":"Josh Jacobs","nflTeam":"GB","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":2,"pick":6,"overall":18,"player":"Garrett Wilson","nflTeam":"NYJ","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":2,"pick":7,"overall":19,"player":"A.J. Brown","nflTeam":"Phi","position":"WR","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":2,"pick":8,"overall":20,"player":"Amon-Ra St. Brown","nflTeam":"Det","position":"WR","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":2,"pick":9,"overall":21,"player":"Chris Olave","nflTeam":"NO","position":"WR","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":2,"pick":10,"overall":22,"player":"Najee Harris","nflTeam":"Pit","position":"RB","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":2,"pick":11,"overall":23,"player":"Jaylen Waddle","nflTeam":"Mia","position":"WR","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":2,"pick":12,"overall":24,"player":"Joe Mixon","nflTeam":"Hou","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":3,"pick":1,"overall":25,"player":"Jahmyr Gibbs","nflTeam":"Det","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":3,"pick":2,"overall":26,"player":"Patrick Mahomes","nflTeam":"KC","position":"QB","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":3,"pick":3,"overall":27,"player":"Travis Etienne Jr.","nflTeam":"Jax","position":"RB","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":3,"pick":4,"overall":28,"player":"Tee Higgins","nflTeam":"Cin","position":"WR","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":3,"pick":5,"overall":29,"player":"Aaron Jones","nflTeam":"Min","position":"RB","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":3,"pick":6,"overall":30,"player":"Josh Allen","nflTeam":"Buf","position":"QB","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":3,"pick":7,"overall":31,"player":"DeVonta Smith","nflTeam":"Phi","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":3,"pick":8,"overall":32,"player":"Jalen Hurts","nflTeam":"Phi","position":"QB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":3,"pick":9,"overall":33,"player":"DK Metcalf","nflTeam":"Sea","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":3,"pick":10,"overall":34,"player":"Miles Sanders","nflTeam":"Car","position":"RB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":3,"pick":11,"overall":35,"player":"Rhamondre Stevenson","nflTeam":"NE","position":"RB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":3,"pick":12,"overall":36,"player":"Deebo Samuel","nflTeam":"SF","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":4,"pick":1,"overall":37,"player":"Calvin Ridley","nflTeam":"Ten","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":4,"pick":2,"overall":38,"player":"Mark Andrews","nflTeam":"Bal","position":"TE","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":4,"pick":3,"overall":39,"player":"Joe Burrow","nflTeam":"Cin","position":"QB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":4,"pick":4,"overall":40,"player":"Alvin Kamara","nflTeam":"NO","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":4,"pick":5,"overall":41,"player":"Alexander Mattison","nflTeam":"LV","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":4,"pick":6,"overall":42,"player":"Lamar Jackson","nflTeam":"Bal","position":"QB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":4,"pick":7,"overall":43,"player":"Keenan Allen","nflTeam":"Chi","position":"WR","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":4,"pick":8,"overall":44,"player":"Kenneth Walker III","nflTeam":"Sea","position":"RB","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":4,"pick":9,"overall":45,"player":"Dameon Pierce","nflTeam":"Hou","position":"RB","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":4,"pick":10,"overall":46,"player":"Amari Cooper","nflTeam":"Cle","position":"WR","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":4,"pick":11,"overall":47,"player":"Christian Watson","nflTeam":"GB","position":"WR","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":4,"pick":12,"overall":48,"player":"Breece Hall","nflTeam":"NYJ","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":5,"pick":1,"overall":49,"player":"DeAndre Hopkins","nflTeam":"Ten","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":5,"pick":2,"overall":50,"player":"Jamaal Williams","nflTeam":"NO","position":"RB","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":5,"pick":3,"overall":51,"player":"Rachaad White","nflTeam":"TB","position":"RB","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":5,"pick":4,"overall":52,"player":"Justin Herbert","nflTeam":"LAC","position":"QB","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":5,"pick":5,"overall":53,"player":"DJ Moore","nflTeam":"Chi","position":"WR","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":5,"pick":6,"overall":54,"player":"James Conner","nflTeam":"Ari","position":"RB","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":5,"pick":7,"overall":55,"player":"T.J. Hockenson","nflTeam":"Min","position":"TE","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":5,"pick":8,"overall":56,"player":"Jerry Jeudy","nflTeam":"Cle","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":5,"pick":9,"overall":57,"player":"Cam Akers","nflTeam":"Min","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":5,"pick":10,"overall":58,"player":"Mike Evans","nflTeam":"TB","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":5,"pick":11,"overall":59,"player":"Justin Fields","nflTeam":"Pit","position":"QB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":5,"pick":12,"overall":60,"player":"Terry McLaurin","nflTeam":"Wsh","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":6,"pick":1,"overall":61,"player":"J.K. Dobbins","nflTeam":"Bal","position":"RB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":6,"pick":2,"overall":62,"player":"Diontae Johnson","nflTeam":"Car","position":"WR","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":6,"pick":3,"overall":63,"player":"David Montgomery","nflTeam":"Det","position":"RB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":6,"pick":4,"overall":64,"player":"Javonte Williams","nflTeam":"Den","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":6,"pick":5,"overall":65,"player":"Chris Godwin","nflTeam":"TB","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":6,"pick":6,"overall":66,"player":"James Cook","nflTeam":"Buf","position":"RB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":6,"pick":7,"overall":67,"player":"Darren Waller","nflTeam":"NYG","position":"TE","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":6,"pick":8,"overall":68,"player":"Mike Williams","nflTeam":"NYJ","position":"WR","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":6,"pick":9,"overall":69,"player":"George Kittle","nflTeam":"SF","position":"TE","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":6,"pick":10,"overall":70,"player":"Tyler Lockett","nflTeam":"Sea","position":"WR","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":6,"pick":11,"overall":71,"player":"Dallas Goedert","nflTeam":"Phi","position":"TE","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":6,"pick":12,"overall":72,"player":"Drake London","nflTeam":"Atl","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":7,"pick":1,"overall":73,"player":"Brandon Aiyuk","nflTeam":"SF","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":7,"pick":2,"overall":74,"player":"Isiah Pacheco","nflTeam":"KC","position":"RB","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":7,"pick":3,"overall":75,"player":"Brandin Cooks","nflTeam":"Dal","position":"WR","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":7,"pick":4,"overall":76,"player":"Dalvin Cook","nflTeam":"Bal","position":"RB","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":7,"pick":5,"overall":77,"player":"Christian Kirk","nflTeam":"Jax","position":"WR","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":7,"pick":6,"overall":78,"player":"AJ Dillon","nflTeam":"GB","position":"RB","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":7,"pick":7,"overall":79,"player":"Marquise Brown","nflTeam":"KC","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":7,"pick":8,"overall":80,"player":"Kyle Pitts","nflTeam":"Atl","position":"TE","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":7,"pick":9,"overall":81,"player":"Michael Pittman Jr.","nflTeam":"Ind","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":7,"pick":10,"overall":82,"player":"George Pickens","nflTeam":"Pit","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":7,"pick":11,"overall":83,"player":"Khalil Herbert","nflTeam":"Chi","position":"RB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":7,"pick":12,"overall":84,"player":"Trevor Lawrence","nflTeam":"Jax","position":"QB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":8,"pick":1,"overall":85,"player":"D'Andre Swift","nflTeam":"Chi","position":"RB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":8,"pick":2,"overall":86,"player":"Jahan Dotson","nflTeam":"Wsh","position":"WR","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":8,"pick":3,"overall":87,"player":"Courtland Sutton","nflTeam":"Den","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":8,"pick":4,"overall":88,"player":"Brian Robinson Jr.","nflTeam":"Wsh","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":8,"pick":5,"overall":89,"player":"Skyy Moore","nflTeam":"KC","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":8,"pick":6,"overall":90,"player":"Jordan Addison","nflTeam":"Min","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":8,"pick":7,"overall":91,"player":"Michael Thomas","nflTeam":"NO","position":"WR","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":8,"pick":8,"overall":92,"player":"Antonio Gibson","nflTeam":"NE","position":"RB","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":8,"pick":9,"overall":93,"player":"JuJu Smith-Schuster","nflTeam":"NE","position":"WR","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":8,"pick":10,"overall":94,"player":"Pat Freiermuth","nflTeam":"Pit","position":"TE","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":8,"pick":11,"overall":95,"player":"Odell Beckham Jr.","nflTeam":"FA","position":"WR","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":8,"pick":12,"overall":96,"player":"Deshaun Watson","nflTeam":"Cle","position":"QB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":9,"pick":1,"overall":97,"player":"David Njoku","nflTeam":"Cle","position":"TE","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":9,"pick":2,"overall":98,"player":"Gabe Davis","nflTeam":"Jax","position":"WR","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":9,"pick":3,"overall":99,"player":"Dak Prescott","nflTeam":"Dal","position":"QB","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":9,"pick":4,"overall":100,"player":"Quentin Johnston","nflTeam":"LAC","position":"WR","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":9,"pick":5,"overall":101,"player":"Jaxon Smith-Njigba","nflTeam":"Sea","position":"WR","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":9,"pick":6,"overall":102,"player":"Ezekiel Elliott","nflTeam":"NE","position":"RB","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":9,"pick":7,"overall":103,"player":"Zay Flowers","nflTeam":"Bal","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":9,"pick":8,"overall":104,"player":"Jakobi Meyers","nflTeam":"LV","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":9,"pick":9,"overall":105,"player":"Treylon Burks","nflTeam":"Ten","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":9,"pick":10,"overall":106,"player":"Evan Engram","nflTeam":"Jax","position":"TE","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":9,"pick":11,"overall":107,"player":"Romeo Doubs","nflTeam":"GB","position":"WR","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":9,"pick":12,"overall":108,"player":"Elijah Moore","nflTeam":"Cle","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":10,"pick":1,"overall":109,"player":"Jaylen Warren","nflTeam":"Pit","position":"RB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":10,"pick":2,"overall":110,"player":"Nico Collins","nflTeam":"Hou","position":"WR","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":10,"pick":3,"overall":111,"player":"Samaje Perine","nflTeam":"Den","position":"RB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":10,"pick":4,"overall":112,"player":"Kirk Cousins","nflTeam":"Atl","position":"QB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":10,"pick":5,"overall":113,"player":"Jerick McKinnon","nflTeam":"KC","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":10,"pick":6,"overall":114,"player":"Kadarius Toney","nflTeam":"KC","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":10,"pick":7,"overall":115,"player":"Michael Gallup","nflTeam":"Dal","position":"WR","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":10,"pick":8,"overall":116,"player":"Rashaad Penny","nflTeam":"Phi","position":"RB","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":10,"pick":9,"overall":117,"player":"Cole Kmet","nflTeam":"Chi","position":"TE","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":10,"pick":10,"overall":118,"player":"Zay Jones","nflTeam":"Jax","position":"WR","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":10,"pick":11,"overall":119,"player":"Allen Lazard","nflTeam":"NYJ","position":"WR","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":10,"pick":12,"overall":120,"player":"Zach Charbonnet","nflTeam":"Sea","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":11,"pick":1,"overall":121,"player":"Jeff Wilson Jr.","nflTeam":"Mia","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":11,"pick":2,"overall":122,"player":"Adam Thielen","nflTeam":"Car","position":"WR","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":11,"pick":3,"overall":123,"player":"Elijah Mitchell","nflTeam":"SF","position":"RB","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":11,"pick":4,"overall":124,"player":"Raheem Mostert","nflTeam":"Mia","position":"RB","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":11,"pick":5,"overall":125,"player":"Tyler Allgeier","nflTeam":"Atl","position":"RB","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":11,"pick":6,"overall":126,"player":"Devin Singletary","nflTeam":"NYG","position":"RB","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":11,"pick":7,"overall":127,"player":"Rashod Bateman","nflTeam":"Bal","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":11,"pick":8,"overall":128,"player":"Rondale Moore","nflTeam":"Atl","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":11,"pick":9,"overall":129,"player":"Dalton Schultz","nflTeam":"Hou","position":"TE","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":11,"pick":10,"overall":130,"player":"Tyler Boyd","nflTeam":"Cin","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":11,"pick":11,"overall":131,"player":"Dalton Kincaid","nflTeam":"Buf","position":"TE","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":11,"pick":12,"overall":132,"player":"Jameson Williams","nflTeam":"Det","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":12,"pick":1,"overall":133,"player":"Tyler Higbee","nflTeam":"LAR","position":"TE","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":12,"pick":2,"overall":134,"player":"Jonathan Mingo","nflTeam":"Car","position":"WR","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":12,"pick":3,"overall":135,"player":"K.J. Osborn","nflTeam":"NE","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":12,"pick":4,"overall":136,"player":"Darnell Mooney","nflTeam":"Atl","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":12,"pick":5,"overall":137,"player":"Kenneth Gainwell","nflTeam":"Phi","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":12,"pick":6,"overall":138,"player":"John Metchie III","nflTeam":"Hou","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":12,"pick":7,"overall":139,"player":"DJ Chark Jr.","nflTeam":"Car","position":"WR","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":12,"pick":8,"overall":140,"player":"Curtis Samuel","nflTeam":"Buf","position":"WR","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":12,"pick":9,"overall":141,"player":"Gus Edwards","nflTeam":"LAC","position":"RB","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":12,"pick":10,"overall":142,"player":"Tua Tagovailoa","nflTeam":"Mia","position":"QB","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":12,"pick":11,"overall":143,"player":"Irv Smith Jr.","nflTeam":"KC","position":"TE","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":12,"pick":12,"overall":144,"player":"Kareem Hunt","nflTeam":"Cle","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":13,"pick":1,"overall":145,"player":"Tank Bigsby","nflTeam":"Jax","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":13,"pick":2,"overall":146,"player":"Chris Evans","nflTeam":"Cin","position":"RB","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":13,"pick":3,"overall":147,"player":"Daniel Jones","nflTeam":"NYG","position":"QB","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":13,"pick":4,"overall":148,"player":"Jayden Reed","nflTeam":"GB","position":"WR","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":13,"pick":5,"overall":149,"player":"Russell Wilson","nflTeam":"Pit","position":"QB","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":13,"pick":6,"overall":150,"player":"Zach Ertz","nflTeam":"Wsh","position":"TE","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":13,"pick":7,"overall":151,"player":"Anthony Richardson","nflTeam":"Ind","position":"QB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":13,"pick":8,"overall":152,"player":"Cordarrelle Patterson","nflTeam":"Atl","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":13,"pick":9,"overall":153,"player":"Aaron Rodgers","nflTeam":"NYJ","position":"QB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":13,"pick":10,"overall":154,"player":"Geno Smith","nflTeam":"Sea","position":"QB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":13,"pick":11,"overall":155,"player":"Tyjae Spears","nflTeam":"Ten","position":"RB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":13,"pick":12,"overall":156,"player":"Damien Harris","nflTeam":"Buf","position":"RB","fantasyTeam":"George's Gangstas","owner":"George Wright"}
  ],
  "2024": [
    {"round":1,"pick":1,"overall":1,"player":"Christian McCaffrey","nflTeam":"SF","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":1,"pick":2,"overall":2,"player":"Bijan Robinson","nflTeam":"Atl","position":"RB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":1,"pick":3,"overall":3,"player":"CeeDee Lamb","nflTeam":"Dal","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":1,"pick":4,"overall":4,"player":"Breece Hall","nflTeam":"NYJ","position":"RB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":1,"pick":5,"overall":5,"player":"Tyreek Hill","nflTeam":"Mia","position":"WR","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":1,"pick":6,"overall":6,"player":"Amon-Ra St. Brown","nflTeam":"Det","position":"WR","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":1,"pick":7,"overall":7,"player":"Ja'Marr Chase","nflTeam":"Cin","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":1,"pick":8,"overall":8,"player":"Jonathan Taylor","nflTeam":"Ind","position":"RB","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":1,"pick":9,"overall":9,"player":"Justin Jefferson","nflTeam":"Min","position":"WR","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":1,"pick":10,"overall":10,"player":"Saquon Barkley","nflTeam":"Phi","position":"RB","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":1,"pick":11,"overall":11,"player":"A.J. Brown","nflTeam":"Phi","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":1,"pick":12,"overall":12,"player":"Garrett Wilson","nflTeam":"NYJ","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":2,"pick":1,"overall":13,"player":"Jahmyr Gibbs","nflTeam":"Det","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":2,"pick":2,"overall":14,"player":"Kyren Williams","nflTeam":"LAR","position":"RB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":2,"pick":3,"overall":15,"player":"Puka Nacua","nflTeam":"LAR","position":"WR","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":2,"pick":4,"overall":16,"player":"Isiah Pacheco","nflTeam":"KC","position":"RB","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":2,"pick":5,"overall":17,"player":"Travis Etienne Jr.","nflTeam":"Jax","position":"RB","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":2,"pick":6,"overall":18,"player":"Marvin Harrison Jr.","nflTeam":"Ari","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":2,"pick":7,"overall":19,"player":"Derrick Henry","nflTeam":"Bal","position":"RB","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":2,"pick":8,"overall":20,"player":"Josh Jacobs","nflTeam":"GB","position":"RB","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":2,"pick":9,"overall":21,"player":"Chris Olave","nflTeam":"NO","position":"WR","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":2,"pick":10,"overall":22,"player":"De'Von Achane","nflTeam":"Mia","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":2,"pick":11,"overall":23,"player":"Nico Collins","nflTeam":"Hou","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":2,"pick":12,"overall":24,"player":"Davante Adams","nflTeam":"LAR","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":3,"pick":1,"overall":25,"player":"Alvin Kamara","nflTeam":"NO","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":3,"pick":2,"overall":26,"player":"Jaylen Waddle","nflTeam":"Mia","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":3,"pick":3,"overall":27,"player":"James Cook","nflTeam":"Buf","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":3,"pick":4,"overall":28,"player":"Kenneth Walker III","nflTeam":"Sea","position":"RB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":3,"pick":5,"overall":29,"player":"Josh Allen","nflTeam":"Buf","position":"QB","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":3,"pick":6,"overall":30,"player":"Rachaad White","nflTeam":"TB","position":"RB","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":3,"pick":7,"overall":31,"player":"Mike Evans","nflTeam":"TB","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":3,"pick":8,"overall":32,"player":"DK Metcalf","nflTeam":"Pit","position":"WR","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":3,"pick":9,"overall":33,"player":"Joe Mixon","nflTeam":"Hou","position":"RB","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":3,"pick":10,"overall":34,"player":"Deebo Samuel Sr.","nflTeam":"Wsh","position":"WR","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":3,"pick":11,"overall":35,"player":"Jalen Hurts","nflTeam":"Phi","position":"QB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":3,"pick":12,"overall":36,"player":"Brandon Aiyuk","nflTeam":"SF","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":4,"pick":1,"overall":37,"player":"DJ Moore","nflTeam":"Chi","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":4,"pick":2,"overall":38,"player":"Michael Pittman Jr.","nflTeam":"Ind","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":4,"pick":3,"overall":39,"player":"Aaron Jones","nflTeam":"Min","position":"RB","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":4,"pick":4,"overall":40,"player":"Travis Kelce","nflTeam":"KC","position":"TE","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":4,"pick":5,"overall":41,"player":"Sam LaPorta","nflTeam":"Det","position":"TE","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":4,"pick":6,"overall":42,"player":"Drake London","nflTeam":"Atl","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":4,"pick":7,"overall":43,"player":"Mark Andrews","nflTeam":"Bal","position":"TE","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":4,"pick":8,"overall":44,"player":"Stefon Diggs","nflTeam":"Hou","position":"WR","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":4,"pick":9,"overall":45,"player":"DeVonta Smith","nflTeam":"Phi","position":"WR","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":4,"pick":10,"overall":46,"player":"James Conner","nflTeam":"Ari","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":4,"pick":11,"overall":47,"player":"Cooper Kupp","nflTeam":"Sea","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":4,"pick":12,"overall":48,"player":"Calvin Ridley","nflTeam":"Ten","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":5,"pick":1,"overall":49,"player":"Malik Nabers","nflTeam":"NYG","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":5,"pick":2,"overall":50,"player":"Rashee Rice","nflTeam":"KC","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":5,"pick":3,"overall":51,"player":"Patrick Mahomes","nflTeam":"KC","position":"QB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":5,"pick":4,"overall":52,"player":"C.J. Stroud","nflTeam":"Hou","position":"QB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":5,"pick":5,"overall":53,"player":"Zay Flowers","nflTeam":"Bal","position":"WR","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":5,"pick":6,"overall":54,"player":"George Pickens","nflTeam":"Pit","position":"WR","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":5,"pick":7,"overall":55,"player":"Lamar Jackson","nflTeam":"Bal","position":"QB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":5,"pick":8,"overall":56,"player":"Tank Dell","nflTeam":"Hou","position":"WR","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":5,"pick":9,"overall":57,"player":"Rhamondre Stevenson","nflTeam":"NE","position":"RB","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":5,"pick":10,"overall":58,"player":"Tee Higgins","nflTeam":"Cin","position":"WR","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":5,"pick":11,"overall":59,"player":"D'Andre Swift","nflTeam":"Chi","position":"RB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":5,"pick":12,"overall":60,"player":"Anthony Richardson","nflTeam":"Ind","position":"QB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":6,"pick":1,"overall":61,"player":"Zamir White","nflTeam":"LV","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":6,"pick":2,"overall":62,"player":"Evan Engram","nflTeam":"Den","position":"TE","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":6,"pick":3,"overall":63,"player":"Joe Burrow","nflTeam":"Cin","position":"QB","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":6,"pick":4,"overall":64,"player":"Chris Godwin","nflTeam":"TB","position":"WR","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":6,"pick":5,"overall":65,"player":"Amari Cooper","nflTeam":"Buf","position":"WR","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":6,"pick":6,"overall":66,"player":"Trey McBride","nflTeam":"Ari","position":"TE","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":6,"pick":7,"overall":67,"player":"Dak Prescott","nflTeam":"Dal","position":"QB","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":6,"pick":8,"overall":68,"player":"David Montgomery","nflTeam":"Det","position":"RB","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":6,"pick":9,"overall":69,"player":"Kyle Pitts","nflTeam":"Atl","position":"TE","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":6,"pick":10,"overall":70,"player":"Dalton Kincaid","nflTeam":"Buf","position":"TE","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":6,"pick":11,"overall":71,"player":"Najee Harris","nflTeam":"LAC","position":"RB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":6,"pick":12,"overall":72,"player":"Keenan Allen","nflTeam":"Chi","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":7,"pick":1,"overall":73,"player":"Javonte Williams","nflTeam":"Dal","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":7,"pick":2,"overall":74,"player":"Terry McLaurin","nflTeam":"Wsh","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":7,"pick":3,"overall":75,"player":"Tony Pollard","nflTeam":"Ten","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":7,"pick":4,"overall":76,"player":"Brian Robinson Jr.","nflTeam":"Wsh","position":"RB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":7,"pick":5,"overall":77,"player":"Christian Kirk","nflTeam":"Hou","position":"WR","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":7,"pick":6,"overall":78,"player":"Jaylen Warren","nflTeam":"Pit","position":"RB","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":7,"pick":7,"overall":79,"player":"Raheem Mostert","nflTeam":"LV","position":"RB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":7,"pick":8,"overall":80,"player":"Austin Ekeler","nflTeam":"Wsh","position":"RB","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":7,"pick":9,"overall":81,"player":"Christian Watson","nflTeam":"GB","position":"WR","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":7,"pick":10,"overall":82,"player":"Diontae Johnson","nflTeam":"Bal","position":"WR","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":7,"pick":11,"overall":83,"player":"Devin Singletary","nflTeam":"NYG","position":"RB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":7,"pick":12,"overall":84,"player":"George Kittle","nflTeam":"SF","position":"TE","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":8,"pick":1,"overall":85,"player":"Jayden Reed","nflTeam":"GB","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":8,"pick":2,"overall":86,"player":"Courtland Sutton","nflTeam":"Den","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":8,"pick":3,"overall":87,"player":"Tyjae Spears","nflTeam":"Ten","position":"RB","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":8,"pick":4,"overall":88,"player":"Keon Coleman","nflTeam":"Buf","position":"WR","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":8,"pick":5,"overall":89,"player":"Rome Odunze","nflTeam":"Chi","position":"WR","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":8,"pick":6,"overall":90,"player":"Jerome Ford","nflTeam":"Cle","position":"RB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":8,"pick":7,"overall":91,"player":"DeAndre Hopkins","nflTeam":"Bal","position":"WR","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":8,"pick":8,"overall":92,"player":"Zack Moss","nflTeam":"Cin","position":"RB","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":8,"pick":9,"overall":93,"player":"Jaxon Smith-Njigba","nflTeam":"Sea","position":"WR","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":8,"pick":10,"overall":94,"player":"Xavier Worthy","nflTeam":"KC","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":8,"pick":11,"overall":95,"player":"Jonathon Brooks","nflTeam":"Car","position":"RB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":8,"pick":12,"overall":96,"player":"Nick Chubb","nflTeam":"Cle","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":9,"pick":1,"overall":97,"player":"Ezekiel Elliott","nflTeam":"FA","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":9,"pick":2,"overall":98,"player":"Chase Brown","nflTeam":"Cin","position":"RB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":9,"pick":3,"overall":99,"player":"Brian Thomas Jr.","nflTeam":"Jax","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":9,"pick":4,"overall":100,"player":"Jordan Addison","nflTeam":"Min","position":"WR","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":9,"pick":5,"overall":101,"player":"Jake Ferguson","nflTeam":"Dal","position":"TE","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":9,"pick":6,"overall":102,"player":"Hollywood Brown","nflTeam":"KC","position":"WR","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":9,"pick":7,"overall":103,"player":"Ladd McConkey","nflTeam":"LAC","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":9,"pick":8,"overall":104,"player":"Kyler Murray","nflTeam":"Ari","position":"QB","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":9,"pick":9,"overall":105,"player":"Romeo Doubs","nflTeam":"GB","position":"WR","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":9,"pick":10,"overall":106,"player":"David Njoku","nflTeam":"Cle","position":"TE","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":9,"pick":11,"overall":107,"player":"Gus Edwards","nflTeam":"FA","position":"RB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":9,"pick":12,"overall":108,"player":"J.K. Dobbins","nflTeam":"LAC","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":10,"pick":1,"overall":109,"player":"Zach Charbonnet","nflTeam":"Sea","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":10,"pick":2,"overall":110,"player":"Chuba Hubbard","nflTeam":"Car","position":"RB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":10,"pick":3,"overall":111,"player":"Mike Williams","nflTeam":"LAC","position":"WR","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":10,"pick":4,"overall":112,"player":"Jordan Love","nflTeam":"GB","position":"QB","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":10,"pick":5,"overall":113,"player":"Jakobi Meyers","nflTeam":"LV","position":"WR","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":10,"pick":6,"overall":114,"player":"Blake Corum","nflTeam":"LAR","position":"RB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":10,"pick":7,"overall":115,"player":"Jaleel McLaughlin","nflTeam":"Den","position":"RB","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":10,"pick":8,"overall":116,"player":"Jameson Williams","nflTeam":"Det","position":"WR","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":10,"pick":9,"overall":117,"player":"Jerry Jeudy","nflTeam":"Cle","position":"WR","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":10,"pick":10,"overall":118,"player":"Rico Dowdle","nflTeam":"Car","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":10,"pick":11,"overall":119,"player":"Jayden Daniels","nflTeam":"Wsh","position":"QB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":10,"pick":12,"overall":120,"player":"Brock Bowers","nflTeam":"LV","position":"TE","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":11,"pick":1,"overall":121,"player":"Caleb Williams","nflTeam":"Chi","position":"QB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":11,"pick":2,"overall":122,"player":"Tyler Allgeier","nflTeam":"Atl","position":"RB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":11,"pick":3,"overall":123,"player":"Trey Benson","nflTeam":"Ari","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":11,"pick":4,"overall":124,"player":"T.J. Hockenson","nflTeam":"Min","position":"TE","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":11,"pick":5,"overall":125,"player":"Tyler Lockett","nflTeam":"FA","position":"WR","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":11,"pick":6,"overall":126,"player":"Gabe Davis","nflTeam":"Jax","position":"WR","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":11,"pick":7,"overall":127,"player":"Antonio Gibson","nflTeam":"NE","position":"RB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":11,"pick":8,"overall":128,"player":"Darnell Mooney","nflTeam":"Atl","position":"WR","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":11,"pick":9,"overall":129,"player":"Adam Thielen","nflTeam":"Car","position":"WR","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":11,"pick":10,"overall":130,"player":"Ty Chandler","nflTeam":"Min","position":"RB","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":11,"pick":11,"overall":131,"player":"DeMario Douglas","nflTeam":"NE","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":11,"pick":12,"overall":132,"player":"Khalil Shakir","nflTeam":"Buf","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":12,"pick":1,"overall":133,"player":"Brock Purdy","nflTeam":"SF","position":"QB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":12,"pick":2,"overall":134,"player":"Dallas Goedert","nflTeam":"Phi","position":"TE","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":12,"pick":3,"overall":135,"player":"Bucky Irving","nflTeam":"TB","position":"RB","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":12,"pick":4,"overall":136,"player":"Aaron Rodgers","nflTeam":"FA","position":"QB","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":12,"pick":5,"overall":137,"player":"Curtis Samuel","nflTeam":"Buf","position":"WR","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":12,"pick":6,"overall":138,"player":"Jaylen Wright","nflTeam":"Mia","position":"RB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":12,"pick":7,"overall":139,"player":"Dalton Schultz","nflTeam":"Hou","position":"TE","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":12,"pick":8,"overall":140,"player":"Joshua Palmer","nflTeam":"Buf","position":"WR","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":12,"pick":9,"overall":141,"player":"Justin Herbert","nflTeam":"LAC","position":"QB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":12,"pick":10,"overall":142,"player":"Ja'Lynn Polk","nflTeam":"NE","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":12,"pick":11,"overall":143,"player":"Taysom Hill","nflTeam":"NO","position":"TE","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":12,"pick":12,"overall":144,"player":"Kirk Cousins","nflTeam":"Atl","position":"QB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":13,"pick":1,"overall":145,"player":"Xavier Legette","nflTeam":"Car","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":13,"pick":2,"overall":146,"player":"Isaiah Likely","nflTeam":"Bal","position":"TE","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":13,"pick":3,"overall":147,"player":"Ray Davis","nflTeam":"Buf","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":13,"pick":4,"overall":148,"player":"Deshaun Watson","nflTeam":"Cle","position":"QB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":13,"pick":5,"overall":149,"player":"Khalil Herbert","nflTeam":"Ind","position":"RB","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":13,"pick":6,"overall":150,"player":"Michael Wilson","nflTeam":"Ari","position":"WR","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":13,"pick":7,"overall":151,"player":"Rashid Shaheed","nflTeam":"NO","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":13,"pick":8,"overall":152,"player":"Trevor Lawrence","nflTeam":"Jax","position":"QB","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":13,"pick":9,"overall":153,"player":"Miles Sanders","nflTeam":"Dal","position":"RB","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":13,"pick":10,"overall":154,"player":"Pat Freiermuth","nflTeam":"Pit","position":"TE","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":13,"pick":11,"overall":155,"player":"Tua Tagovailoa","nflTeam":"Mia","position":"QB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":13,"pick":12,"overall":156,"player":"Tyler Conklin","nflTeam":"NYJ","position":"TE","fantasyTeam":"Business as Usual","owner":"Travis West"}
  ],
  "2025": [
    {"round":1,"pick":1,"overall":1,"player":"Ja'Marr Chase","nflTeam":"Cin","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":1,"pick":2,"overall":2,"player":"Bijan Robinson","nflTeam":"Atl","position":"RB","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":1,"pick":3,"overall":3,"player":"Jahmyr Gibbs","nflTeam":"Det","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":1,"pick":4,"overall":4,"player":"Saquon Barkley","nflTeam":"Phi","position":"RB","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":1,"pick":5,"overall":5,"player":"Justin Jefferson","nflTeam":"Min","position":"WR","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":1,"pick":6,"overall":6,"player":"Christian McCaffrey","nflTeam":"SF","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":1,"pick":7,"overall":7,"player":"CeeDee Lamb","nflTeam":"Dal","position":"WR","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":1,"pick":8,"overall":8,"player":"Ashton Jeanty","nflTeam":"LV","position":"RB","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":1,"pick":9,"overall":9,"player":"Derrick Henry","nflTeam":"Bal","position":"RB","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":1,"pick":10,"overall":10,"player":"Amon-Ra St. Brown","nflTeam":"Det","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":1,"pick":11,"overall":11,"player":"Nico Collins","nflTeam":"Hou","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":1,"pick":12,"overall":12,"player":"Malik Nabers","nflTeam":"NYG","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":2,"pick":1,"overall":13,"player":"Puka Nacua","nflTeam":"LAR","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":2,"pick":2,"overall":14,"player":"Bucky Irving","nflTeam":"TB","position":"RB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":2,"pick":3,"overall":15,"player":"De'Von Achane","nflTeam":"Mia","position":"RB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":2,"pick":4,"overall":16,"player":"Jonathan Taylor","nflTeam":"Ind","position":"RB","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":2,"pick":5,"overall":17,"player":"Josh Jacobs","nflTeam":"GB","position":"RB","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":2,"pick":6,"overall":18,"player":"Brian Thomas Jr.","nflTeam":"Jax","position":"WR","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":2,"pick":7,"overall":19,"player":"Chase Brown","nflTeam":"Cin","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":2,"pick":8,"overall":20,"player":"Brock Bowers","nflTeam":"LV","position":"TE","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":2,"pick":9,"overall":21,"player":"A.J. Brown","nflTeam":"Phi","position":"WR","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":2,"pick":10,"overall":22,"player":"Kyren Williams","nflTeam":"LAR","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":2,"pick":11,"overall":23,"player":"James Cook III","nflTeam":"Buf","position":"RB","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":2,"pick":12,"overall":24,"player":"Alvin Kamara","nflTeam":"NO","position":"RB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":3,"pick":1,"overall":25,"player":"Josh Allen","nflTeam":"Buf","position":"QB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":3,"pick":2,"overall":26,"player":"Tyreek Hill","nflTeam":"FA","position":"WR","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":3,"pick":3,"overall":27,"player":"Drake London","nflTeam":"Atl","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":3,"pick":4,"overall":28,"player":"Trey McBride","nflTeam":"Ari","position":"TE","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":3,"pick":5,"overall":29,"player":"Omarion Hampton","nflTeam":"LAC","position":"RB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":3,"pick":6,"overall":30,"player":"James Conner","nflTeam":"Ari","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":3,"pick":7,"overall":31,"player":"Tee Higgins","nflTeam":"Cin","position":"WR","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":3,"pick":8,"overall":32,"player":"Terry McLaurin","nflTeam":"Wsh","position":"WR","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":3,"pick":9,"overall":33,"player":"Lamar Jackson","nflTeam":"Bal","position":"QB","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":3,"pick":10,"overall":34,"player":"Ladd McConkey","nflTeam":"LAC","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":3,"pick":11,"overall":35,"player":"Marvin Harrison Jr.","nflTeam":"Ari","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":3,"pick":12,"overall":36,"player":"Jayden Daniels","nflTeam":"Wsh","position":"QB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":4,"pick":1,"overall":37,"player":"Kenneth Walker III","nflTeam":"Sea","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":4,"pick":2,"overall":38,"player":"TreVeyon Henderson","nflTeam":"NE","position":"RB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":4,"pick":3,"overall":39,"player":"Jalen Hurts","nflTeam":"Phi","position":"QB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":4,"pick":4,"overall":40,"player":"Jaxon Smith-Njigba","nflTeam":"Sea","position":"WR","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":4,"pick":5,"overall":41,"player":"Xavier Worthy","nflTeam":"KC","position":"WR","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":4,"pick":6,"overall":42,"player":"Davante Adams","nflTeam":"LAR","position":"WR","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":4,"pick":7,"overall":43,"player":"George Kittle","nflTeam":"SF","position":"TE","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":4,"pick":8,"overall":44,"player":"DK Metcalf","nflTeam":"Pit","position":"WR","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":4,"pick":9,"overall":45,"player":"Joe Burrow","nflTeam":"Cin","position":"QB","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":4,"pick":10,"overall":46,"player":"Chuba Hubbard","nflTeam":"Car","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":4,"pick":11,"overall":47,"player":"Breece Hall","nflTeam":"NYJ","position":"RB","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":4,"pick":12,"overall":48,"player":"Mike Evans","nflTeam":"TB","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":5,"pick":1,"overall":49,"player":"D'Andre Swift","nflTeam":"Chi","position":"RB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":5,"pick":2,"overall":50,"player":"Garrett Wilson","nflTeam":"NYJ","position":"WR","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":5,"pick":3,"overall":51,"player":"DJ Moore","nflTeam":"Chi","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":5,"pick":4,"overall":52,"player":"Zay Flowers","nflTeam":"Bal","position":"WR","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":5,"pick":5,"overall":53,"player":"Courtland Sutton","nflTeam":"Den","position":"WR","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":5,"pick":6,"overall":54,"player":"Calvin Ridley","nflTeam":"Ten","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":5,"pick":7,"overall":55,"player":"Sam LaPorta","nflTeam":"Det","position":"TE","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":5,"pick":8,"overall":56,"player":"David Montgomery","nflTeam":"Hou","position":"RB","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":5,"pick":9,"overall":57,"player":"Tetairoa McMillan","nflTeam":"Car","position":"WR","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":5,"pick":10,"overall":58,"player":"DeVonta Smith","nflTeam":"Phi","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":5,"pick":11,"overall":59,"player":"George Pickens","nflTeam":"Dal","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":5,"pick":12,"overall":60,"player":"Jameson Williams","nflTeam":"Det","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":6,"pick":1,"overall":61,"player":"RJ Harvey","nflTeam":"Den","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":6,"pick":2,"overall":62,"player":"Jaylen Waddle","nflTeam":"Mia","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":6,"pick":3,"overall":63,"player":"Jerry Jeudy","nflTeam":"Cle","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":6,"pick":4,"overall":64,"player":"Matthew Golden","nflTeam":"GB","position":"WR","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":6,"pick":5,"overall":65,"player":"Aaron Jones Sr.","nflTeam":"Min","position":"RB","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":6,"pick":6,"overall":66,"player":"Patrick Mahomes","nflTeam":"KC","position":"QB","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":6,"pick":7,"overall":67,"player":"Travis Hunter","nflTeam":"Jax","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":6,"pick":8,"overall":68,"player":"Tyrone Tracy Jr.","nflTeam":"NYG","position":"RB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":6,"pick":9,"overall":69,"player":"Isiah Pacheco","nflTeam":"KC","position":"RB","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":6,"pick":10,"overall":70,"player":"Tony Pollard","nflTeam":"Ten","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":6,"pick":11,"overall":71,"player":"Chris Olave","nflTeam":"NO","position":"WR","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":6,"pick":12,"overall":72,"player":"Jakobi Meyers","nflTeam":"Jax","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":7,"pick":1,"overall":73,"player":"Rashee Rice","nflTeam":"KC","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":7,"pick":2,"overall":74,"player":"Travis Kelce","nflTeam":"KC","position":"TE","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":7,"pick":3,"overall":75,"player":"Ricky Pearsall","nflTeam":"SF","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":7,"pick":4,"overall":76,"player":"Rome Odunze","nflTeam":"Chi","position":"WR","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":7,"pick":5,"overall":77,"player":"Baker Mayfield","nflTeam":"TB","position":"QB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":7,"pick":6,"overall":78,"player":"Jaylen Warren","nflTeam":"Pit","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":7,"pick":7,"overall":79,"player":"Jacory Croskey-Merritt","nflTeam":"Wsh","position":"RB","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":7,"pick":8,"overall":80,"player":"Jayden Reed","nflTeam":"GB","position":"WR","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":7,"pick":9,"overall":81,"player":"Deebo Samuel","nflTeam":"Wsh","position":"WR","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":7,"pick":10,"overall":82,"player":"T.J. Hockenson","nflTeam":"Min","position":"TE","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":7,"pick":11,"overall":83,"player":"Emeka Egbuka","nflTeam":"TB","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":7,"pick":12,"overall":84,"player":"Kaleb Johnson","nflTeam":"Pit","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":8,"pick":1,"overall":85,"player":"Mark Andrews","nflTeam":"Bal","position":"TE","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":8,"pick":2,"overall":86,"player":"Jordan Mason","nflTeam":"Min","position":"RB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":8,"pick":3,"overall":87,"player":"J.K. Dobbins","nflTeam":"Den","position":"RB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":8,"pick":4,"overall":88,"player":"Zach Charbonnet","nflTeam":"Sea","position":"RB","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":8,"pick":5,"overall":89,"player":"Cooper Kupp","nflTeam":"Sea","position":"WR","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":8,"pick":6,"overall":90,"player":"Austin Ekeler","nflTeam":"Wsh","position":"RB","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":8,"pick":7,"overall":91,"player":"Khalil Shakir","nflTeam":"Buf","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":8,"pick":8,"overall":92,"player":"Trey Benson","nflTeam":"Ari","position":"RB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":8,"pick":9,"overall":93,"player":"Stefon Diggs","nflTeam":"NE","position":"WR","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":8,"pick":10,"overall":94,"player":"Jordan Addison","nflTeam":"Min","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":8,"pick":11,"overall":95,"player":"Kyler Murray","nflTeam":"Ari","position":"QB","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":8,"pick":12,"overall":96,"player":"David Njoku","nflTeam":"Cle","position":"TE","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":9,"pick":1,"overall":97,"player":"Javonte Williams","nflTeam":"Dal","position":"RB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":9,"pick":2,"overall":98,"player":"Rhamondre Stevenson","nflTeam":"NE","position":"RB","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":9,"pick":3,"overall":99,"player":"Michael Pittman Jr.","nflTeam":"Ind","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":9,"pick":4,"overall":100,"player":"Chris Godwin Jr.","nflTeam":"TB","position":"WR","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":9,"pick":5,"overall":101,"player":"Quinshon Judkins","nflTeam":"Cle","position":"RB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":9,"pick":6,"overall":102,"player":"Rashid Shaheed","nflTeam":"Sea","position":"WR","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":9,"pick":7,"overall":103,"player":"Evan Engram","nflTeam":"Den","position":"TE","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":9,"pick":8,"overall":104,"player":"Keenan Allen","nflTeam":"LAC","position":"WR","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":9,"pick":9,"overall":105,"player":"Travis Etienne Jr.","nflTeam":"Jax","position":"RB","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":9,"pick":10,"overall":106,"player":"Jauan Jennings","nflTeam":"SF","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":9,"pick":11,"overall":107,"player":"Tyler Warren","nflTeam":"Ind","position":"TE","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":9,"pick":12,"overall":108,"player":"Cam Skattebo","nflTeam":"NYG","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":10,"pick":1,"overall":109,"player":"Tank Bigsby","nflTeam":"Phi","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":10,"pick":2,"overall":110,"player":"Josh Downs","nflTeam":"Ind","position":"WR","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":10,"pick":3,"overall":111,"player":"Jerome Ford","nflTeam":"Cle","position":"RB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":10,"pick":4,"overall":112,"player":"Keon Coleman","nflTeam":"Buf","position":"WR","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":10,"pick":5,"overall":113,"player":"Dallas Goedert","nflTeam":"Phi","position":"TE","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":10,"pick":6,"overall":114,"player":"Bo Nix","nflTeam":"Den","position":"QB","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":10,"pick":7,"overall":115,"player":"Colston Loveland","nflTeam":"Chi","position":"TE","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":10,"pick":8,"overall":116,"player":"Brenton Strange","nflTeam":"Jax","position":"TE","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":10,"pick":9,"overall":117,"player":"Nick Chubb","nflTeam":"Hou","position":"RB","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":10,"pick":10,"overall":118,"player":"Brock Purdy","nflTeam":"SF","position":"QB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":10,"pick":11,"overall":119,"player":"Darnell Mooney","nflTeam":"Atl","position":"WR","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":10,"pick":12,"overall":120,"player":"Xavier Legette","nflTeam":"Car","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":11,"pick":1,"overall":121,"player":"Rachaad White","nflTeam":"TB","position":"RB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":11,"pick":2,"overall":122,"player":"Joe Mixon","nflTeam":"Hou","position":"RB","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":11,"pick":3,"overall":123,"player":"Tucker Kraft","nflTeam":"GB","position":"TE","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":11,"pick":4,"overall":124,"player":"Braelon Allen","nflTeam":"NYJ","position":"RB","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":11,"pick":5,"overall":125,"player":"Jayden Higgins","nflTeam":"Hou","position":"WR","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":11,"pick":6,"overall":126,"player":"Justin Herbert","nflTeam":"LAC","position":"QB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":11,"pick":7,"overall":127,"player":"Caleb Williams","nflTeam":"Chi","position":"QB","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":11,"pick":8,"overall":128,"player":"Dak Prescott","nflTeam":"Dal","position":"QB","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":11,"pick":9,"overall":129,"player":"Jake Ferguson","nflTeam":"Dal","position":"TE","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":11,"pick":10,"overall":130,"player":"Bhayshul Tuten","nflTeam":"Jax","position":"RB","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":11,"pick":11,"overall":131,"player":"Justin Fields","nflTeam":"NYJ","position":"QB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":11,"pick":12,"overall":132,"player":"Marvin Mims Jr.","nflTeam":"Den","position":"WR","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":12,"pick":1,"overall":133,"player":"Jaydon Blue","nflTeam":"Dal","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"},
    {"round":12,"pick":2,"overall":134,"player":"Brian Robinson Jr.","nflTeam":"SF","position":"RB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":12,"pick":3,"overall":135,"player":"Hollywood Brown","nflTeam":"KC","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":12,"pick":4,"overall":136,"player":"Ollie Gordon II","nflTeam":"Mia","position":"RB","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":12,"pick":5,"overall":137,"player":"Emanuel Wilson","nflTeam":"GB","position":"RB","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":12,"pick":6,"overall":138,"player":"Drake Maye","nflTeam":"NE","position":"QB","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":12,"pick":7,"overall":139,"player":"C.J. Stroud","nflTeam":"Hou","position":"QB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":12,"pick":8,"overall":140,"player":"Jordan Love","nflTeam":"GB","position":"QB","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":12,"pick":9,"overall":141,"player":"Kyle Pitts Sr.","nflTeam":"Atl","position":"TE","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":12,"pick":10,"overall":142,"player":"Brandon Aiyuk","nflTeam":"SF","position":"WR","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":12,"pick":11,"overall":143,"player":"Tyler Allgeier","nflTeam":"Atl","position":"RB","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":12,"pick":12,"overall":144,"player":"Jared Goff","nflTeam":"Det","position":"QB","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":13,"pick":1,"overall":145,"player":"Wan'Dale Robinson","nflTeam":"NYG","position":"WR","fantasyTeam":"Free Agents","owner":"Zachary Hickman"},
    {"round":13,"pick":2,"overall":146,"player":"Najee Harris","nflTeam":"LAC","position":"RB","fantasyTeam":"The Deplorables","owner":"Zachary Sizemore"},
    {"round":13,"pick":3,"overall":147,"player":"Tyjae Spears","nflTeam":"Ten","position":"RB","fantasyTeam":"Money Badgers","owner":"Tyler Clay"},
    {"round":13,"pick":4,"overall":148,"player":"J.J. McCarthy","nflTeam":"Min","position":"QB","fantasyTeam":"The Fantasy Football Team","owner":"Aaron Burns"},
    {"round":13,"pick":5,"overall":149,"player":"Dalton Kincaid","nflTeam":"Buf","position":"TE","fantasyTeam":"The Arabian Stallions","owner":"Walid Salameh"},
    {"round":13,"pick":6,"overall":150,"player":"Will Shipley","nflTeam":"Phi","position":"RB","fantasyTeam":"Business as Usual","owner":"Travis West"},
    {"round":13,"pick":7,"overall":151,"player":"Cedric Tillman","nflTeam":"Cle","position":"WR","fantasyTeam":"Kareem Pie","owner":"Matt Geiger"},
    {"round":13,"pick":8,"overall":152,"player":"Kareem Hunt","nflTeam":"KC","position":"RB","fantasyTeam":"Route 2 Ravers","owner":"Joseph Garton"},
    {"round":13,"pick":9,"overall":153,"player":"Christian Kirk","nflTeam":"Hou","position":"WR","fantasyTeam":"Lincoln Legends","owner":"Tyler Cummings"},
    {"round":13,"pick":10,"overall":154,"player":"Rashod Bateman","nflTeam":"Bal","position":"WR","fantasyTeam":"The ACLiens","owner":"Luke Rapp"},
    {"round":13,"pick":11,"overall":155,"player":"Dylan Sampson","nflTeam":"Cle","position":"RB","fantasyTeam":"George's Gangstas","owner":"George Wright"},
    {"round":13,"pick":12,"overall":156,"player":"Ray Davis","nflTeam":"Buf","position":"RB","fantasyTeam":"Prino's Powerhouse","owner":"Joe Prino"}
  ]
};
