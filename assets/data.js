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
    "highScore": 161
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
    "highScore": 154
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
    "highScore": 170.8
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
    "highScore": 184
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
    "highScore": 146.4
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
    "highScore": 154.7
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
    "highScore": 155.1
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
    "highScore": 138.4
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
    "highScore": 160.2
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
    "highScore": 143.3
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
    "highScore": 168.7
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
    "highScore": 142.5
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
  }
};

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
        "name": "Clay",
        "result": "Eliminated",
        "eliminatedWeek": 9,
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
            "team": "Rams",
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
            "team": "Packers",
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
