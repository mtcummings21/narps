// Box scores (individual player lines), split out from data.js by season.
// Structure: BOXSCORES[year][week] = array of {away:[...], home:[...]} in the SAME
// order as SEASONS[year].schedule[week], so index i here matches game i there.
// Playoff games use round keys ("round1", "round2", "round3", "thirdPlace") in the
// same order as SEASONS[year].playoffs[round].games.
const BOXSCORES = {
  "2026": {
    "Week 1": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Joe Burrow",
            "pts": 14.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Bijan Robinson",
            "pts": 27.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "David Montgomery",
            "pts": 27.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Nico Collins",
            "pts": 17.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jaylen Waddle",
            "pts": 0.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Kyle Pitts Sr.",
            "pts": 0.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Jeremiyah Love",
            "pts": 12.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Christian Watson",
            "pts": 29.7
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jalen Hurts",
            "pts": 24.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Chase Brown",
            "pts": 16.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Quinshon Judkins",
            "pts": 6.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "CeeDee Lamb",
            "pts": 12.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Malik Nabers",
            "pts": 9.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dallas Goedert",
            "pts": 21.7
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Rhamondre Stevenson",
            "pts": 12.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Michael Wilson",
            "pts": 8.1
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Bo Nix",
            "pts": 5.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Christian McCaffrey",
            "pts": 11.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Ashton Jeanty",
            "pts": 29.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Emeka Egbuka",
            "pts": 8.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Marvin Harrison Jr.",
            "pts": 3.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Trey McBride",
            "pts": 20.0
          },
          {
            "slot": "FLEX",
            "pos": "TE",
            "player": "Tyler Warren",
            "pts": 8.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Alec Pierce",
            "pts": 8.1
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jared Goff",
            "pts": 16.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jonathan Taylor",
            "pts": 23.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Javonte Williams",
            "pts": 21.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Terry McLaurin",
            "pts": 2.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Matthew Golden",
            "pts": 12.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Mark Andrews",
            "pts": 6.9
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Breece Hall",
            "pts": 18.8
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Bucky Irving",
            "pts": 16.8
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Drake Maye",
            "pts": 9.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Derrick Henry",
            "pts": 34.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Tony Pollard",
            "pts": 3.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tetairoa McMillan",
            "pts": 8.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Zay Flowers",
            "pts": 23.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Harold Fannin Jr.",
            "pts": 3.1
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "De'Von Achane",
            "pts": 8.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DK Metcalf",
            "pts": 6.0
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Trevor Lawrence",
            "pts": 26.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Saquon Barkley",
            "pts": 8.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kenneth Walker III",
            "pts": 32.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DeVonta Smith",
            "pts": 6.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ladd McConkey",
            "pts": 16.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Tucker Kraft",
            "pts": 8.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Luther Burden III",
            "pts": 7.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Parker Washington",
            "pts": 16.8
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Dak Prescott",
            "pts": 14.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Omarion Hampton",
            "pts": 8.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "D'Andre Swift",
            "pts": 31.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Amon-Ra St. Brown",
            "pts": 23.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Rome Odunze",
            "pts": 6.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Sam LaPorta",
            "pts": 7.3
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Cam Skattebo",
            "pts": 14.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Brian Thomas Jr.",
            "pts": 5.5
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Lamar Jackson",
            "pts": 24.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jadarian Price",
            "pts": 6.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "MarShawn Lloyd",
            "pts": 3.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ja'Marr Chase",
            "pts": 2.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Mike Evans",
            "pts": 13.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dalton Kincaid",
            "pts": 15.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Rashee Rice",
            "pts": 8.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "George Pickens",
            "pts": 4.3
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Herbert",
            "pts": 13.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kyren Williams",
            "pts": 14.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jaylen Warren",
            "pts": 7.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Puka Nacua",
            "pts": 9.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tee Higgins",
            "pts": 7.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Michael Mayer",
            "pts": 6.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Carnell Tate",
            "pts": 5.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Quentin Johnston",
            "pts": 2.7
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jaxson Dart",
            "pts": 26.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Cook III",
            "pts": 8.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Travis Etienne Jr.",
            "pts": 11.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Justin Jefferson",
            "pts": 27.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Garrett Wilson",
            "pts": 10.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "T.J. Hockenson",
            "pts": 11.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DJ Moore",
            "pts": 18.5
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Jonathon Brooks",
            "pts": 6.7
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Josh Allen",
            "pts": 35.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jahmyr Gibbs",
            "pts": 31.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Bhayshul Tuten",
            "pts": 9.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Drake London",
            "pts": 4.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Davante Adams",
            "pts": 4.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Isaiah Likely",
            "pts": 23.8
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Rico Dowdle",
            "pts": 3.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Courtland Sutton",
            "pts": 2.1
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Caleb Williams",
            "pts": 37.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "J.K. Dobbins",
            "pts": 3.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jordan Mason",
            "pts": 11.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jaxon Smith-Njigba",
            "pts": 22.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "A.J. Brown",
            "pts": 4.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Colston Loveland",
            "pts": 0.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Chris Olave",
            "pts": 23.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jameson Williams",
            "pts": 6.5
          }
        ]
      }
    ],
    "Week 2": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Joe Burrow",
            "pts": 16.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Bijan Robinson",
            "pts": 9.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "David Montgomery",
            "pts": 3.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Christian Watson",
            "pts": 12.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jalen Coker",
            "pts": 10.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Kyle Pitts Sr.",
            "pts": 2.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Jeremiyah Love",
            "pts": 6.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Chris Godwin Jr.",
            "pts": 7.3
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Brock Purdy",
            "pts": 28.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jaylen Warren",
            "pts": 8.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jacory Croskey-Merritt",
            "pts": 5.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tee Higgins",
            "pts": 12.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Quentin Johnston",
            "pts": 1.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Michael Mayer",
            "pts": 3.8
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Kyren Williams",
            "pts": 14.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Rashid Shaheed",
            "pts": 5.4
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Josh Allen",
            "pts": 40.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jahmyr Gibbs",
            "pts": 20.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Aaron Jones Sr.",
            "pts": 10.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Drake London",
            "pts": 6.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Davante Adams",
            "pts": 35.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Isiah Likely",
            "pts": 5.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Courtland Sutton",
            "pts": 4.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Deebo Samuel Sr.",
            "pts": 5.0
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Dak Prescott",
            "pts": 29.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Omarion Hampton",
            "pts": 16.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "D'Andre Swift",
            "pts": 10.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Amon-Ra St. Brown",
            "pts": 30.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Rome Odunze",
            "pts": 5.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Sam LaPorta",
            "pts": 14.2
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Cam Skattebo",
            "pts": 7.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Khalil Shakir",
            "pts": 5.3
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Caleb Williams",
            "pts": 7.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "J.K. Dobbins",
            "pts": 3.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "George Holani",
            "pts": 2.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Olave",
            "pts": 18.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jameson Williams",
            "pts": 4.3
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Colston Loveland",
            "pts": 0.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jaxon Smith-Njigba",
            "pts": 38.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Caleb Douglas",
            "pts": 2.9
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Patrick Mahomes",
            "pts": 28.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "De'Von Achane",
            "pts": 10.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Derrick Henry",
            "pts": 16.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tetairoa McMillan",
            "pts": 12.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DK Metcalf",
            "pts": 4.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Harold Fannin Jr.",
            "pts": 7.9
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Tony Pollard",
            "pts": 7.0
          },
          {
            "slot": "FLEX",
            "pos": "TE",
            "player": "Travis Kelce",
            "pts": 20.6
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jaxson Dart",
            "pts": 0.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Cook III",
            "pts": 20.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Travis Etienne Jr.",
            "pts": 6.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Justin Jefferson",
            "pts": 7.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Garrett Wilson",
            "pts": 14.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "George Kittle",
            "pts": 16.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DJ Moore",
            "pts": -0.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Stefon Diggs",
            "pts": 19.2
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Tyler Shough",
            "pts": 22.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Christian McCaffrey",
            "pts": 20.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Ashton Jeanty",
            "pts": 8.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Emeka Egbuka",
            "pts": 8.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Marvin Harrison Jr.",
            "pts": 0.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Trey McBride",
            "pts": 14.1
          },
          {
            "slot": "FLEX",
            "pos": "TE",
            "player": "Tyler Warren",
            "pts": 11.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Alec Pierce",
            "pts": 1.6
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Lamar Jackson",
            "pts": 14.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jadarian Price",
            "pts": 4.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Chuba Hubbard",
            "pts": 13.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ja'Marr Chase",
            "pts": 23.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Mike Evans",
            "pts": 6.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dalton Kincaid",
            "pts": 19.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Rashee Rice",
            "pts": 10.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "George Pickens",
            "pts": 7.0
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jalen Hurts",
            "pts": 16.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Chase Brown",
            "pts": 9.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Quinshon Judkins",
            "pts": 7.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "CeeDee Lamb",
            "pts": 31.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Malik Nabers",
            "pts": 0.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dallas Goedert",
            "pts": 0.9
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Rhamondre Stevenson",
            "pts": 3.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Michael Wilson",
            "pts": 2.8
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Trevor Lawrence",
            "pts": 6.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Saquon Barkley",
            "pts": 2.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kenneth Walker III",
            "pts": 20.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DeVonta Smith",
            "pts": 22.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Luther Burden III",
            "pts": 4.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Tucker Kraft",
            "pts": 2.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Ladd McConkey",
            "pts": 5.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Parker Washington",
            "pts": 13.3
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jayden Daniels",
            "pts": 14.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Breece Hall",
            "pts": 11.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Bucky Irving",
            "pts": 11.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Terry McLaurin",
            "pts": 6.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Matthew Golden",
            "pts": 7.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Mark Andrews",
            "pts": 7.9
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Jonathan Taylor",
            "pts": 27.2
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Javonte Williams",
            "pts": 6.5
          }
        ]
      }
    ],
    "Week 3": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Bryce Young",
            "pts": 13.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Bijan Robinson",
            "pts": 34.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "David Montgomery",
            "pts": 5.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jaylen Waddle",
            "pts": 5.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Christian Watson",
            "pts": 19.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Terrance Ferguson",
            "pts": 1.4
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Jeremiyah Love",
            "pts": 19.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jalen Coker",
            "pts": 2.8
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Kyler Murray",
            "pts": 10.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "J.K. Dobbins",
            "pts": 5.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Woody Marks",
            "pts": 8.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Olave",
            "pts": 15.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jameson Williams",
            "pts": 6.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Colston Loveland",
            "pts": 5.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jaxon Smith-Njigba",
            "pts": 30.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Devaughn Vele",
            "pts": 5.4
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jordan Love",
            "pts": 18.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Cook III",
            "pts": 19.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Travis Etienne Jr.",
            "pts": 8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Justin Jefferson",
            "pts": 4.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Garrett Wilson",
            "pts": 21.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "George Kittle",
            "pts": 23.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "KC Concepcion",
            "pts": 1.9
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Emanuel Wilson",
            "pts": 1.4
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Josh Allen",
            "pts": 16.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jahmyr Gibbs",
            "pts": 37.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Aaron Jones Sr.",
            "pts": 11.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Drake London",
            "pts": 23.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Davante Adams",
            "pts": 17.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Isaiah Likely",
            "pts": 2.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Courtland Sutton",
            "pts": 6.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Deebo Samuel Sr.",
            "pts": 15.4
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Lamar Jackson",
            "pts": 20.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jadarian Price",
            "pts": 0.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Chuba Hubbard",
            "pts": 13
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ja'Marr Chase",
            "pts": 20.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Rashee Rice",
            "pts": 12.3
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dalton Kincaid",
            "pts": 2.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "George Pickens",
            "pts": 11.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Mike Evans",
            "pts": 10.9
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Brock Purdy",
            "pts": 31.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "TreVeyon Henderson",
            "pts": 3.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jaylen Warren",
            "pts": 19.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tee Higgins",
            "pts": 18
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Quentin Johnston",
            "pts": 5.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Brock Bowers",
            "pts": 22.6
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Kyren Williams",
            "pts": 18.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Carnell Tate",
            "pts": 8.8
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Trevor Lawrence",
            "pts": 19.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Saquon Barkley",
            "pts": 8.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kenneth Walker III",
            "pts": 20.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DeVonta Smith",
            "pts": 9.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Luther Burden III",
            "pts": 16.3
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Tucker Kraft",
            "pts": 4.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Ladd McConkey",
            "pts": 8.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Parker Washington",
            "pts": 11.5
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Dak Prescott",
            "pts": 18.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Omarion Hampton",
            "pts": 5.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "D'Andre Swift",
            "pts": 9.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Amon-Ra St. Brown",
            "pts": 9.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Rome Odunze",
            "pts": 5.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Sam LaPorta",
            "pts": 5.9
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Cam Skattebo",
            "pts": 11.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Brian Thomas Jr.",
            "pts": 1.3
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jared Goff",
            "pts": 19.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jonathan Taylor",
            "pts": 8.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Breece Hall",
            "pts": 7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Matthew Golden",
            "pts": 18.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Xavier Worthy",
            "pts": 3
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Mark Andrews",
            "pts": 3.9
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Javonte Williams",
            "pts": 17.3
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Bucky Irving",
            "pts": 6.8
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Patrick Mahomes",
            "pts": 15.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "De'Von Achane",
            "pts": 1.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Tony Pollard",
            "pts": 11.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tetairoa McMillan",
            "pts": 2.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DK Metcalf",
            "pts": 10.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Travis Kelce",
            "pts": 12.9
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Derrick Henry",
            "pts": 21.4
          },
          {
            "slot": "FLEX",
            "pos": "TE",
            "player": "Harold Fannin Jr.",
            "pts": 20.6
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jalen Hurts",
            "pts": 12.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Chase Brown",
            "pts": 7.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Quinshon Judkins",
            "pts": 8.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "CeeDee Lamb",
            "pts": 16.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Malik Nabers",
            "pts": 5.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dalton Schultz",
            "pts": 4.5
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Rhamondre Stevenson",
            "pts": 5.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Denzel Boston",
            "pts": 7.1
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Tyler Shough",
            "pts": 23.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Christian McCaffrey",
            "pts": 19.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Ashton Jeanty",
            "pts": 10.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Emeka Egbuka",
            "pts": 8.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Michael Pittman Jr.",
            "pts": 2.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Trey McBride",
            "pts": 12
          },
          {
            "slot": "FLEX",
            "pos": "TE",
            "player": "Tyler Warren",
            "pts": 10.2
          },
          {
            "slot": "FLEX",
            "pos": "TE",
            "player": "Pat Freiermuth",
            "pts": 4.1
          }
        ]
      }
    ],
    "Week 4": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Bryce Young",
            "pts": 21.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Bijan Robinson",
            "pts": 27.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "David Montgomery",
            "pts": 4.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Nico Collins",
            "pts": 27.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Christian Watson",
            "pts": 6.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Darren Waller",
            "pts": 5.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jaylen Waddle",
            "pts": 12.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Jeremiyah Love",
            "pts": 6.0
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jared Goff",
            "pts": 20.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jonathan Taylor",
            "pts": 22.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Bucky Irving",
            "pts": 6.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Terry McLaurin",
            "pts": 0.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Matthew Golden",
            "pts": 10.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Mark Andrews",
            "pts": 11.2
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Javonte Williams",
            "pts": 28.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Xavier Worthy",
            "pts": 9.0
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jalen Hurts",
            "pts": 13.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Chase Brown",
            "pts": 13.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Quinshon Judkins",
            "pts": 18.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "CeeDee Lamb",
            "pts": 32.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Malik Nabers",
            "pts": 20.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dalton Schultz",
            "pts": 1.9
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Rhamondre Stevenson",
            "pts": 16.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Michael Wilson",
            "pts": 13.0
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Trevor Lawrence",
            "pts": 13.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Saquon Barkley",
            "pts": 1.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kenneth Walker III",
            "pts": 30.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Luther Burden III",
            "pts": 9.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Parker Washington",
            "pts": 1.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Tucker Kraft",
            "pts": 13.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Ladd McConkey",
            "pts": 0.0
          },
          {
            "slot": "FLEX",
            "pos": "TE",
            "player": "Juwan Johnson",
            "pts": 8.9
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Tyler Shough",
            "pts": 15.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Christian McCaffrey",
            "pts": 14.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Ashton Jeanty",
            "pts": 15.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Emeka Egbuka",
            "pts": 2.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Bell",
            "pts": 0.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Trey McBride",
            "pts": 6.6
          },
          {
            "slot": "FLEX",
            "pos": "TE",
            "player": "Tyler Warren",
            "pts": 6.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Marvin Harrison Jr.",
            "pts": 7.7
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Lamar Jackson",
            "pts": 18.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Chuba Hubbard",
            "pts": 25.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kendre Miller",
            "pts": 0.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ja'Marr Chase",
            "pts": 4.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "George Pickens",
            "pts": 8.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dalton Kincaid",
            "pts": 1.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Rashee Rice",
            "pts": 0.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Malik Washington",
            "pts": 9.5
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Patrick Mahomes",
            "pts": 17.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Derrick Henry",
            "pts": 14.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Tony Pollard",
            "pts": 12.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tetairoa McMillan",
            "pts": 38.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DK Metcalf",
            "pts": 14.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Harold Fannin Jr.",
            "pts": 10.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Zay Flowers",
            "pts": 21.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jordan Addison",
            "pts": 7.1
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Marcus Mariota",
            "pts": 5.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Cook III",
            "pts": 15.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Emanuel Wilson",
            "pts": 25.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Garrett Wilson",
            "pts": 4.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DJ Moore",
            "pts": 2.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "George Kittle",
            "pts": 15.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Stefon Diggs",
            "pts": 6.0
          },
          {
            "slot": "FLEX",
            "pos": "TE",
            "player": "T.J. Hockenson",
            "pts": 18.4
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Dak Prescott",
            "pts": 18.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "D'Andre Swift",
            "pts": 6.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Cam Skattebo",
            "pts": 7.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Rome Odunze",
            "pts": 12.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Makai Lemon",
            "pts": 4.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Sam LaPorta",
            "pts": 18.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Amon-Ra St. Brown",
            "pts": 11.5
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Omarion Hampton",
            "pts": 12.3
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Kyler Murray",
            "pts": 11.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "J.K. Dobbins",
            "pts": 6.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Braelon Allen",
            "pts": 7.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Olave",
            "pts": 15.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jakobi Meyers",
            "pts": 4.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Colston Loveland",
            "pts": 8.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jaxon Smith-Njigba",
            "pts": 10.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Josh Downs",
            "pts": 3.1
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Brock Purdy",
            "pts": 19.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kyren Williams",
            "pts": 31.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jacory Croskey-Merritt",
            "pts": 6.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Puka Nacua",
            "pts": 23.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tee Higgins",
            "pts": 21.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Brock Bowers",
            "pts": 17.6
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "TreVeyon Henderson",
            "pts": 4.2
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Jaylen Warren",
            "pts": 14.1
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Josh Allen",
            "pts": 18.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jahmyr Gibbs",
            "pts": 15.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Aaron Jones Sr.",
            "pts": 14.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Drake London",
            "pts": 12.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Davante Adams",
            "pts": 5.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Isaiah Likely",
            "pts": 10.1
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Bhayshul Tuten",
            "pts": 10.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Deebo Samuel Sr.",
            "pts": 15.5
          }
        ]
      }
    ],
    "Week 5": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Joe Burrow",
            "pts": 24.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Bijan Robinson",
            "pts": 13.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "David Montgomery",
            "pts": 1.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Nico Collins",
            "pts": 8.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Christian Watson",
            "pts": 29.3
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Mike Gesicki",
            "pts": 6.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jaylen Waddle",
            "pts": 3.8
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Jeremiyah Love",
            "pts": 2.2
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Trevor Lawrence",
            "pts": 21.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Blake Corum",
            "pts": 14.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Will Shipley",
            "pts": 7.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Luther Burden III",
            "pts": 6.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Parker Washington",
            "pts": 27.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Tucker Kraft",
            "pts": 9.1
          },
          {
            "slot": "FLEX",
            "pos": "TE",
            "player": "Juwan Johnson",
            "pts": 3.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Antonio Williams",
            "pts": 4.6
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jared Goff",
            "pts": 28.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Javonte Williams",
            "pts": 13.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Bucky Irving",
            "pts": 30.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Matthew Golden",
            "pts": 17.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Romeo Doubs",
            "pts": 2.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Mark Andrews",
            "pts": 2.8
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Jonathan Taylor",
            "pts": 9.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Terry McLaurin",
            "pts": 10.2
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jacoby Brissett",
            "pts": 24.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kenny Gainwell",
            "pts": 4.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "MarShawn Lloyd",
            "pts": 16.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "George Pickens",
            "pts": 23.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Malik Washington",
            "pts": 9.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dalton Kincaid",
            "pts": 3.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Ja'Marr Chase",
            "pts": 16.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Mike Evans",
            "pts": 22.8
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jalen Hurts",
            "pts": 13.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Chase Brown",
            "pts": 5.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Quinshon Judkins",
            "pts": 6.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "CeeDee Lamb",
            "pts": 1.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Malik Nabers",
            "pts": 23.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dallas Goedert",
            "pts": 6.8
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Rhamondre Stevenson",
            "pts": 16.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Michael Wilson",
            "pts": 5.2
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Kyler Murray",
            "pts": 18.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Cook III",
            "pts": 22.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Emanuel Wilson",
            "pts": 12.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Garrett Wilson",
            "pts": 19.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Keon Coleman",
            "pts": 7.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "George Kittle",
            "pts": 4.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Justin Jefferson",
            "pts": 15.8
          },
          {
            "slot": "FLEX",
            "pos": "TE",
            "player": "T.J. Hockenson",
            "pts": 1.2
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Tyler Shough",
            "pts": -0.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Christian McCaffrey",
            "pts": 15.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Ashton Jeanty",
            "pts": 9.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Emeka Egbuka",
            "pts": 14.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Roman Wilson",
            "pts": 0.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Trey McBride",
            "pts": 17.1
          },
          {
            "slot": "FLEX",
            "pos": "TE",
            "player": "Tyler Warren",
            "pts": 17.9
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "RJ Harvey",
            "pts": 0.7
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Deshaun Watson",
            "pts": 12.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "J.K. Dobbins",
            "pts": 14.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Braelon Allen",
            "pts": 18.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Olave",
            "pts": 6.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Josh Downs",
            "pts": 6.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Colston Loveland",
            "pts": 2.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jaxon Smith-Njigba",
            "pts": 20.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jameson Williams",
            "pts": 17.7
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Drake Maye",
            "pts": 39.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Tony Pollard",
            "pts": 5.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Ollie Gordon II",
            "pts": 14.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Zay Flowers",
            "pts": 10.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DK Metcalf",
            "pts": 3.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Harold Fannin Jr.",
            "pts": 0.9
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Derrick Henry",
            "pts": 20.5
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Keaton Mitchell",
            "pts": 4.4
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Josh Allen",
            "pts": 30.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jahmyr Gibbs",
            "pts": 35.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Aaron Jones Sr.",
            "pts": 17.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Drake London",
            "pts": 15.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Davante Adams",
            "pts": 19.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Isaiah Likely",
            "pts": 26.9
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Bhayshul Tuten",
            "pts": 10.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Deebo Samuel Sr.",
            "pts": 1.5
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Dak Prescott",
            "pts": 12.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "D'Andre Swift",
            "pts": 15.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Cam Skattebo",
            "pts": 6.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Rome Odunze",
            "pts": 3.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Makai Lemon",
            "pts": 6.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Sam LaPorta",
            "pts": 17.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Amon-Ra St. Brown",
            "pts": 9.9
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Omarion Hampton",
            "pts": 4.4
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Brock Purdy",
            "pts": 16.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "TreVeyon Henderson",
            "pts": 4.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jaylen Warren",
            "pts": 33.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tee Higgins",
            "pts": 3.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Carnell Tate",
            "pts": 1.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Brock Bowers",
            "pts": 19.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Puka Nacua",
            "pts": 29.2
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Kyren Williams",
            "pts": 16.6
          }
        ]
      }
    ]
  },
  "2025": {
    "Week 1": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Brock Purdy",
            "pts": 16.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jahmyr Gibbs",
            "pts": 10.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kyren Williams",
            "pts": 13.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Drake London",
            "pts": 9.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DJ Moore",
            "pts": 7.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Tucker Kraft",
            "pts": 8.9
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Chuba Hubbard",
            "pts": 16.4
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Tony Pollard",
            "pts": 7.4
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Patrick Mahomes",
            "pts": 25.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jacory Croskey-Merritt",
            "pts": 14.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Austin Ekeler",
            "pts": 7.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "CeeDee Lamb",
            "pts": 14.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Brian Thomas Jr.",
            "pts": 8.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Sam LaPorta",
            "pts": 10.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tee Higgins",
            "pts": 4.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Davante Adams",
            "pts": 7.1
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Lamar Jackson",
            "pts": 29.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Derrick Henry",
            "pts": 28.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jonathan Taylor",
            "pts": 11.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tetairoa McMillan",
            "pts": 9.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Deebo Samuel",
            "pts": 19.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Jake Ferguson",
            "pts": 4.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jaxon Smith-Njigba",
            "pts": 14.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Matthew Golden",
            "pts": 2.6
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Dak Prescott",
            "pts": 7.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Ashton Jeanty",
            "pts": 11.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Josh Jacobs",
            "pts": 13.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Terry McLaurin",
            "pts": 3.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Xavier Worthy",
            "pts": 0.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dallas Goedert",
            "pts": 7.9
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "David Montgomery",
            "pts": 6.3
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Aaron Jones Sr.",
            "pts": 14.2
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Baker Mayfield",
            "pts": 22.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Omarion Hampton",
            "pts": 7.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Tyrone Tracy Jr.",
            "pts": 4.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Justin Jefferson",
            "pts": 12.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DK Metcalf",
            "pts": 10.3
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Brock Bowers",
            "pts": 12.8
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Trey Benson",
            "pts": 8.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Courtland Sutton",
            "pts": 15.1
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Herbert",
            "pts": 27.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Chase Brown",
            "pts": 12.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Conner",
            "pts": 12.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Calvin Ridley",
            "pts": 4.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Travis Hunter",
            "pts": 6.3
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "George Kittle",
            "pts": 10.5
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Christian McCaffrey",
            "pts": 18.7
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Jaylen Warren",
            "pts": 12.9
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jayden Daniels",
            "pts": 20.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "RJ Harvey",
            "pts": 7.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Tank Bigsby",
            "pts": 1.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Malik Nabers",
            "pts": 9.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Puka Nacua",
            "pts": 18.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Mark Andrews",
            "pts": 1.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Kenneth Walker III",
            "pts": 3.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jameson Williams",
            "pts": 4.6
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Fields",
            "pts": 29.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Bucky Irving",
            "pts": 12.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "TreVeyon Henderson",
            "pts": 8.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "George Pickens",
            "pts": 4.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Emeka Egbuka",
            "pts": 21.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Tyler Warren",
            "pts": 11.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Nico Collins",
            "pts": 4.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Marvin Harrison Jr.",
            "pts": 15.6
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Joe Burrow",
            "pts": 8.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Saquon Barkley",
            "pts": 16.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Isiah Pacheco",
            "pts": 3.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "A.J. Brown",
            "pts": 1.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Zay Flowers",
            "pts": 24.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Trey McBride",
            "pts": 9.1
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Nick Chubb",
            "pts": 6.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Rome Odunze",
            "pts": 12.7
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jalen Hurts",
            "pts": 24.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "De'Von Achane",
            "pts": 15.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "J.K. Dobbins",
            "pts": 13.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Amon-Ra St. Brown",
            "pts": 6.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ladd McConkey",
            "pts": 10.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "T.J. Hockenson",
            "pts": 3.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DeVonta Smith",
            "pts": 3.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jerry Jeudy",
            "pts": 9.1
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Kyler Murray",
            "pts": 18.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Bijan Robinson",
            "pts": 21.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Cook III",
            "pts": 18.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tyreek Hill",
            "pts": 6.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Garrett Wilson",
            "pts": 19.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Travis Kelce",
            "pts": 11.7
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Breece Hall",
            "pts": 15.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Chris Olave",
            "pts": 8.9
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Josh Allen",
            "pts": 38.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Alvin Kamara",
            "pts": 12.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "D'Andre Swift",
            "pts": 8.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ja'Marr Chase",
            "pts": 3.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Mike Evans",
            "pts": 7.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "David Njoku",
            "pts": 5.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jakobi Meyers",
            "pts": 13.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Xavier Legette",
            "pts": 2.5
          }
        ]
      }
    ],
    "Week 2": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Lamar Jackson",
            "pts": 26.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Derrick Henry",
            "pts": 2.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Travis Etienne Jr.",
            "pts": 15.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jaxon Smith-Njigba",
            "pts": 14.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Deebo Samuel",
            "pts": 13.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Harold Fannin Jr.",
            "pts": 7.3
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Jonathan Taylor",
            "pts": 28.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tetairoa McMillan",
            "pts": 13.0
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Drake Maye",
            "pts": 26.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jahmyr Gibbs",
            "pts": 17.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kyren Williams",
            "pts": 9.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Drake London",
            "pts": 4.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DJ Moore",
            "pts": 7.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Tucker Kraft",
            "pts": 21.4
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Chuba Hubbard",
            "pts": 16.2
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Tony Pollard",
            "pts": 9.2
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Patrick Mahomes",
            "pts": 22.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jacory Croskey-Merritt",
            "pts": 1.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Austin Ekeler",
            "pts": 3.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "CeeDee Lamb",
            "pts": 15.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Brian Thomas Jr.",
            "pts": 6.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Sam LaPorta",
            "pts": 4.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tee Higgins",
            "pts": 13.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Davante Adams",
            "pts": 19.6
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Baker Mayfield",
            "pts": 19.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Omarion Hampton",
            "pts": 3.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Tyrone Tracy Jr.",
            "pts": 7.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Justin Jefferson",
            "pts": 9.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DK Metcalf",
            "pts": 9.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Brock Bowers",
            "pts": 6.3
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Trey Benson",
            "pts": 6.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Courtland Sutton",
            "pts": 1.1
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Dak Prescott",
            "pts": 22.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Josh Jacobs",
            "pts": 14.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "David Montgomery",
            "pts": 12.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Terry McLaurin",
            "pts": 7.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Keenan Allen",
            "pts": 14.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Hunter Henry",
            "pts": 1.4
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Ashton Jeanty",
            "pts": 5.9
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Aaron Jones Sr.",
            "pts": 2.3
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jayden Daniels",
            "pts": 19.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kenneth Walker III",
            "pts": 18.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "RJ Harvey",
            "pts": 2.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Malik Nabers",
            "pts": 33.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Puka Nacua",
            "pts": 23.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Mark Andrews",
            "pts": 0.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jameson Williams",
            "pts": 17.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Marvin Mims Jr.",
            "pts": 9.4
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Herbert",
            "pts": 18.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Chase Brown",
            "pts": 7.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Conner",
            "pts": 11.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Calvin Ridley",
            "pts": 7.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Travis Hunter",
            "pts": 3.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Colston Loveland",
            "pts": 0.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Christian McCaffrey",
            "pts": 19.7
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Jaylen Warren",
            "pts": 15.4
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Joe Burrow",
            "pts": 7.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Saquon Barkley",
            "pts": 16.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Isiah Pacheco",
            "pts": 3.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "A.J. Brown",
            "pts": 5.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Zay Flowers",
            "pts": 11.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Trey McBride",
            "pts": 10.8
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Nick Chubb",
            "pts": 14.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Rome Odunze",
            "pts": 28.3
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Fields",
            "pts": 3.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "TreVeyon Henderson",
            "pts": 5.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jordan Mason",
            "pts": 4.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Marvin Harrison Jr.",
            "pts": 3.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Emeka Egbuka",
            "pts": 10.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Tyler Warren",
            "pts": 9.9
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Bucky Irving",
            "pts": 15.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Nico Collins",
            "pts": 12.7
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Kyler Murray",
            "pts": 14.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Bijan Robinson",
            "pts": 18.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Cook III",
            "pts": 26.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tyreek Hill",
            "pts": 13.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Garrett Wilson",
            "pts": 7.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Travis Kelce",
            "pts": 8.1
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Breece Hall",
            "pts": 4.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Chris Olave",
            "pts": 8.4
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jalen Hurts",
            "pts": 11.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "De'Von Achane",
            "pts": 22.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "J.K. Dobbins",
            "pts": 15.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Amon-Ra St. Brown",
            "pts": 34.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ladd McConkey",
            "pts": 7.3
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "T.J. Hockenson",
            "pts": 1.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jerry Jeudy",
            "pts": 7.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Hollywood Brown",
            "pts": 5.5
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Josh Allen",
            "pts": 11.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Alvin Kamara",
            "pts": 13.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "D'Andre Swift",
            "pts": 12.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ja'Marr Chase",
            "pts": 29.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Mike Evans",
            "pts": 8.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "David Njoku",
            "pts": 6.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Javonte Williams",
            "pts": 22.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jakobi Meyers",
            "pts": 9.8
          }
        ]
      }
    ],
    "Week 3": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Drake Maye",
            "pts": 19.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jahmyr Gibbs",
            "pts": 24.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kyren Williams",
            "pts": 18.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Drake London",
            "pts": 8.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ricky Pearsall",
            "pts": 15.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Tucker Kraft",
            "pts": 4.4
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Chuba Hubbard",
            "pts": 8.6
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Tony Pollard",
            "pts": 12.9
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Baker Mayfield",
            "pts": 17.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Omarion Hampton",
            "pts": 21.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Tyrone Tracy Jr.",
            "pts": 4.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Justin Jefferson",
            "pts": 10.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DK Metcalf",
            "pts": 10.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Brock Bowers",
            "pts": 7.8
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Trey Benson",
            "pts": 6.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Courtland Sutton",
            "pts": 20.8
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jared Goff",
            "pts": 12.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kenneth Walker III",
            "pts": 17.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Cam Skattebo",
            "pts": 21.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Malik Nabers",
            "pts": 2.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Puka Nacua",
            "pts": 17.3
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Mark Andrews",
            "pts": 24.1
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Kareem Hunt",
            "pts": 10.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jameson Williams",
            "pts": 5.3
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Lamar Jackson",
            "pts": 26.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jonathan Taylor",
            "pts": 31.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Travis Etienne Jr.",
            "pts": 11.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tetairoa McMillan",
            "pts": 6.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Deebo Samuel",
            "pts": 3.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Harold Fannin Jr.",
            "pts": 4.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Derrick Henry",
            "pts": 10.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jaxon Smith-Njigba",
            "pts": 18.1
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Caleb Williams",
            "pts": 29.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Saquon Barkley",
            "pts": 7.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Isiah Pacheco",
            "pts": 5.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "A.J. Brown",
            "pts": 19.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Zay Flowers",
            "pts": 2.3
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Trey McBride",
            "pts": 12.8
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Nick Chubb",
            "pts": 5.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Rome Odunze",
            "pts": 13.7
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Patrick Mahomes",
            "pts": 13.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jacory Croskey-Merritt",
            "pts": 9.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Justice Hill",
            "pts": 6.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "CeeDee Lamb",
            "pts": 0.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Brian Thomas Jr.",
            "pts": 6.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Sam LaPorta",
            "pts": 5.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tee Higgins",
            "pts": 2.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Davante Adams",
            "pts": 13.1
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Kyler Murray",
            "pts": 13.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Bijan Robinson",
            "pts": 13.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Cook III",
            "pts": 19.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tyreek Hill",
            "pts": 13.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Garrett Wilson",
            "pts": 19.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Travis Kelce",
            "pts": 4.6
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Breece Hall",
            "pts": 7.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Chris Olave",
            "pts": 10.7
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Dak Prescott",
            "pts": 12.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Ashton Jeanty",
            "pts": 6.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Josh Jacobs",
            "pts": 9.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Terry McLaurin",
            "pts": 8.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Keenan Allen",
            "pts": 16.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Hunter Henry",
            "pts": 25.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "David Montgomery",
            "pts": 28.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Xavier Worthy",
            "pts": 0.0
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Josh Allen",
            "pts": 22.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Alvin Kamara",
            "pts": 6.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "D'Andre Swift",
            "pts": 9.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ja'Marr Chase",
            "pts": 6.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Mike Evans",
            "pts": 11.3
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Zach Ertz",
            "pts": 5.3
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Javonte Williams",
            "pts": 9.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jakobi Meyers",
            "pts": 7.8
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Herbert",
            "pts": 14.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Chase Brown",
            "pts": 4.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Conner",
            "pts": 5.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Calvin Ridley",
            "pts": 3.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Travis Hunter",
            "pts": 2.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Jake Ferguson",
            "pts": 14.7
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Christian McCaffrey",
            "pts": 19.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Jaylen Warren",
            "pts": 10.6
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jalen Hurts",
            "pts": 29.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "De'Von Achane",
            "pts": 12.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "J.K. Dobbins",
            "pts": 14.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Amon-Ra St. Brown",
            "pts": 17.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ladd McConkey",
            "pts": 6.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Juwan Johnson",
            "pts": 8.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DeVonta Smith",
            "pts": 16.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Hollywood Brown",
            "pts": 6.2
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Daniel Jones",
            "pts": 15.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Bucky Irving",
            "pts": 11.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jordan Mason",
            "pts": 23.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Nico Collins",
            "pts": 18.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Emeka Egbuka",
            "pts": 11.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Tyler Warren",
            "pts": 5.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Marvin Harrison Jr.",
            "pts": 5.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "George Pickens",
            "pts": 15.3
          }
        ]
      }
    ],
    "Week 4": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Fields",
            "pts": 27.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kenneth Walker III",
            "pts": 11.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Cam Skattebo",
            "pts": 12.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Malik Nabers",
            "pts": 3.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Puka Nacua",
            "pts": 29.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Mark Andrews",
            "pts": 6.5
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Kareem Hunt",
            "pts": 5.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jameson Williams",
            "pts": 4.7
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Drake Maye",
            "pts": 23.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jahmyr Gibbs",
            "pts": 16.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kyren Williams",
            "pts": 8.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Drake London",
            "pts": 21.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ricky Pearsall",
            "pts": 6.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Tucker Kraft",
            "pts": 8.1
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Chuba Hubbard",
            "pts": 8.4
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Tony Pollard",
            "pts": 9.1
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jordan Love",
            "pts": 26.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Omarion Hampton",
            "pts": 25.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Quinshon Judkins",
            "pts": 19.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Justin Jefferson",
            "pts": 17.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DK Metcalf",
            "pts": 21.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Brock Bowers",
            "pts": 7.1
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Trey Benson",
            "pts": 7.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Courtland Sutton",
            "pts": 16.6
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Caleb Williams",
            "pts": 11.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Saquon Barkley",
            "pts": 15.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Isiah Pacheco",
            "pts": 11.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "A.J. Brown",
            "pts": 1.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Zay Flowers",
            "pts": 10.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Trey McBride",
            "pts": 8.7
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Nick Chubb",
            "pts": 7.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Rome Odunze",
            "pts": 14.9
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Lamar Jackson",
            "pts": 10.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jonathan Taylor",
            "pts": 12.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Travis Etienne Jr.",
            "pts": 19.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jaxon Smith-Njigba",
            "pts": 11.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tetairoa McMillan",
            "pts": 8.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Harold Fannin Jr.",
            "pts": 3.5
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Derrick Henry",
            "pts": 6.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Deebo Samuel",
            "pts": 17.1
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Kyler Murray",
            "pts": 16.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Bijan Robinson",
            "pts": 26.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Cook III",
            "pts": 21.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tyreek Hill",
            "pts": 9.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Garrett Wilson",
            "pts": 17.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Travis Kelce",
            "pts": 7.3
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Breece Hall",
            "pts": 13.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Chris Olave",
            "pts": 7.5
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Patrick Mahomes",
            "pts": 27.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jacory Croskey-Merritt",
            "pts": 6.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Justice Hill",
            "pts": 26.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Brian Thomas Jr.",
            "pts": 8.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Romeo Doubs",
            "pts": 26.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Sam LaPorta",
            "pts": 5.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tee Higgins",
            "pts": 4.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Davante Adams",
            "pts": 13.6
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Josh Allen",
            "pts": 24.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Alvin Kamara",
            "pts": 9.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "D'Andre Swift",
            "pts": 14.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ja'Marr Chase",
            "pts": 4.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jakobi Meyers",
            "pts": 5.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Zach Ertz",
            "pts": 5.1
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Javonte Williams",
            "pts": 17.5
          },
          {
            "slot": "FLEX",
            "pos": "TE",
            "player": "David Njoku",
            "pts": 2.1
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Geno Smith",
            "pts": 9.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Ashton Jeanty",
            "pts": 32.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Josh Jacobs",
            "pts": 29.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Cooper Kupp",
            "pts": 4.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Keenan Allen",
            "pts": 6.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Hunter Henry",
            "pts": 10.9
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "David Montgomery",
            "pts": 1.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Xavier Worthy",
            "pts": 14.6
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jalen Hurts",
            "pts": 19.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "De'Von Achane",
            "pts": 16.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "J.K. Dobbins",
            "pts": 11.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Amon-Ra St. Brown",
            "pts": 22.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ladd McConkey",
            "pts": 1.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Juwan Johnson",
            "pts": 4.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DeVonta Smith",
            "pts": 3.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jerry Jeudy",
            "pts": 6.3
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Herbert",
            "pts": 12.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Christian McCaffrey",
            "pts": 23.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Chase Brown",
            "pts": 8.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Calvin Ridley",
            "pts": 4.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Travis Hunter",
            "pts": 5.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Jake Ferguson",
            "pts": 13.5
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Jaylen Warren",
            "pts": 0.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Khalil Shakir",
            "pts": 15.4
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Daniel Jones",
            "pts": 10.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Bucky Irving",
            "pts": 23.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jordan Mason",
            "pts": 8.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Nico Collins",
            "pts": 9.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Emeka Egbuka",
            "pts": 18.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Tyler Warren",
            "pts": 15.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Marvin Harrison Jr.",
            "pts": 15.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "George Pickens",
            "pts": 29.4
          }
        ]
      }
    ],
    "Week 5": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Drake Maye",
            "pts": 12.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jahmyr Gibbs",
            "pts": 15.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kyren Williams",
            "pts": 27.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jordan Addison",
            "pts": 12.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Michael Pittman Jr.",
            "pts": 12.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Taysom Hill",
            "pts": 0.5
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Tony Pollard",
            "pts": 13.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Troy Franklin",
            "pts": 7.0
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Bryce Young",
            "pts": 11.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Saquon Barkley",
            "pts": 16.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Nick Chubb",
            "pts": 12.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "A.J. Brown",
            "pts": 6.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Zay Flowers",
            "pts": 9.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Trey McBride",
            "pts": 6.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Stefon Diggs",
            "pts": 19.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Chris Godwin Jr.",
            "pts": 4.1
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Kyler Murray",
            "pts": 15.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Cook III",
            "pts": 4.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Breece Hall",
            "pts": 15.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Garrett Wilson",
            "pts": 16.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Olave",
            "pts": 9.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Travis Kelce",
            "pts": 15.6
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Rhamondre Stevenson",
            "pts": 13.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tre Tucker",
            "pts": 9.1
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Fields",
            "pts": 25.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kenneth Walker III",
            "pts": 9.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Cam Skattebo",
            "pts": 11.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Puka Nacua",
            "pts": 19.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jameson Williams",
            "pts": 1.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Mark Andrews",
            "pts": 3.2
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Rico Dowdle",
            "pts": 30.9
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Michael Carter",
            "pts": 15.8
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Josh Allen",
            "pts": 19.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Alvin Kamara",
            "pts": 7.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Javonte Williams",
            "pts": 26.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ja'Marr Chase",
            "pts": 26.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jakobi Meyers",
            "pts": 5.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Zach Ertz",
            "pts": 0.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Rachaad White",
            "pts": 21.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Wan'Dale Robinson",
            "pts": 5.7
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jaxson Dart",
            "pts": 15.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Omarion Hampton",
            "pts": 10.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Quinshon Judkins",
            "pts": 13.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Justin Jefferson",
            "pts": 15.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Courtland Sutton",
            "pts": 13.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dalton Kincaid",
            "pts": 13.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Marvin Mims Jr.",
            "pts": 2.9
          },
          {
            "slot": "FLEX",
            "pos": "TE",
            "player": "Brenton Strange",
            "pts": 2.7
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jalen Hurts",
            "pts": 19.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "De'Von Achane",
            "pts": 13.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "J.K. Dobbins",
            "pts": 14.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ladd McConkey",
            "pts": 12.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DeVonta Smith",
            "pts": 15.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Juwan Johnson",
            "pts": 2.7
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Woody Marks",
            "pts": 2.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Amon-Ra St. Brown",
            "pts": 14.0
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jared Goff",
            "pts": 20.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Derrick Henry",
            "pts": 9.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jonathan Taylor",
            "pts": 30.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jaxon Smith-Njigba",
            "pts": 23.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Quentin Johnston",
            "pts": 4.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Harold Fannin Jr.",
            "pts": 9.3
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Travis Etienne Jr.",
            "pts": 7.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Deebo Samuel",
            "pts": 19.6
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Daniel Jones",
            "pts": 16.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "TreVeyon Henderson",
            "pts": 3.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jordan Mason",
            "pts": 11.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Nico Collins",
            "pts": 14.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Emeka Egbuka",
            "pts": 27.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Tyler Warren",
            "pts": 12.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "George Pickens",
            "pts": 12.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jaylen Waddle",
            "pts": 20.0
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Patrick Mahomes",
            "pts": 26.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jacory Croskey-Merritt",
            "pts": 26.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Justice Hill",
            "pts": 1.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Brian Thomas Jr.",
            "pts": 10.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tee Higgins",
            "pts": 9.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Sam LaPorta",
            "pts": 17.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Davante Adams",
            "pts": 11.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Demarcus Robinson",
            "pts": 5.4
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Herbert",
            "pts": 14.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Christian McCaffrey",
            "pts": 23.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Chase Brown",
            "pts": 8.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Calvin Ridley",
            "pts": 15.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Travis Hunter",
            "pts": 7.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Jake Ferguson",
            "pts": 20.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Khalil Shakir",
            "pts": 8.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Rashid Shaheed",
            "pts": 19.4
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Dak Prescott",
            "pts": 28.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Ashton Jeanty",
            "pts": 13.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Emari Demercado",
            "pts": 6.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Cooper Kupp",
            "pts": 8.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Keenan Allen",
            "pts": 8.3
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Hunter Henry",
            "pts": 5.6
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "David Montgomery",
            "pts": 17.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Xavier Worthy",
            "pts": 8.1
          }
        ]
      }
    ],
    "Week 6": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Trevor Lawrence",
            "pts": 19.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Cook III",
            "pts": 8.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Breece Hall",
            "pts": 5.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Garrett Wilson",
            "pts": 2.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Olave",
            "pts": 12.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Travis Kelce",
            "pts": 10.8
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Bijan Robinson",
            "pts": 32.8
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Rhamondre Stevenson",
            "pts": 1.8
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Drake Maye",
            "pts": 27.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jahmyr Gibbs",
            "pts": 7.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kyren Williams",
            "pts": 15.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Drake London",
            "pts": 26.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Michael Pittman Jr.",
            "pts": 3.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Tucker Kraft",
            "pts": 11.3
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Tony Pollard",
            "pts": 5.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DJ Moore",
            "pts": 6.7
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Caleb Williams",
            "pts": 19.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Saquon Barkley",
            "pts": 7.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Isiah Pacheco",
            "pts": 5.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "A.J. Brown",
            "pts": 11.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Zay Flowers",
            "pts": 5.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Trey McBride",
            "pts": 17.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Rome Odunze",
            "pts": 4.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Stefon Diggs",
            "pts": 4.3
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Josh Allen",
            "pts": 15.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Alvin Kamara",
            "pts": 10.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Javonte Williams",
            "pts": 5.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ja'Marr Chase",
            "pts": 20.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jakobi Meyers",
            "pts": 5.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "David Njoku",
            "pts": 4.3
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "D'Andre Swift",
            "pts": 24.5
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Rachaad White",
            "pts": 16.1
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jayden Daniels",
            "pts": 21.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Cam Skattebo",
            "pts": 30.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rico Dowdle",
            "pts": 31.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Puka Nacua",
            "pts": 3.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jameson Williams",
            "pts": 15.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Darren Waller",
            "pts": 8.2
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Kenneth Walker III",
            "pts": 4.2
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Michael Carter",
            "pts": 7.4
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jalen Hurts",
            "pts": 20.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "De'Von Achane",
            "pts": 29.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "J.K. Dobbins",
            "pts": 4.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ladd McConkey",
            "pts": 19.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DeVonta Smith",
            "pts": 6.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Mason Taylor",
            "pts": 0.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Amon-Ra St. Brown",
            "pts": 9.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jauan Jennings",
            "pts": 1.2
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Baker Mayfield",
            "pts": 19.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Quinshon Judkins",
            "pts": 3.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kareem Hunt",
            "pts": 3.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Courtland Sutton",
            "pts": 2.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Marvin Mims Jr.",
            "pts": 3.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Theo Johnson",
            "pts": 3.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DK Metcalf",
            "pts": 17.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Kendrick Bourne",
            "pts": 16.7
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Daniel Jones",
            "pts": 22.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "TreVeyon Henderson",
            "pts": 4.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Hassan Haskins",
            "pts": 2.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "George Pickens",
            "pts": 27.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jaylen Waddle",
            "pts": 12.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Tyler Warren",
            "pts": 15.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Marvin Harrison Jr.",
            "pts": 4.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Emeka Egbuka",
            "pts": 3.4
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Matthew Stafford",
            "pts": 9.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Derrick Henry",
            "pts": 13.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jonathan Taylor",
            "pts": 21.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jaxon Smith-Njigba",
            "pts": 26.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tetairoa McMillan",
            "pts": 16.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Jake Tonges",
            "pts": 8.8
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Travis Etienne Jr.",
            "pts": 7.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Deebo Samuel",
            "pts": 3.4
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Herbert",
            "pts": 18.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Christian McCaffrey",
            "pts": 20.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Chase Brown",
            "pts": 7.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Calvin Ridley",
            "pts": 2.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Rashid Shaheed",
            "pts": 4.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Jake Ferguson",
            "pts": 10.8
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Jaylen Warren",
            "pts": 7.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Khalil Shakir",
            "pts": 4.8
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Patrick Mahomes",
            "pts": 31.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jacory Croskey-Merritt",
            "pts": 5.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kenneth Gainwell",
            "pts": 6.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Brian Thomas Jr.",
            "pts": 19.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tee Higgins",
            "pts": 8.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Sam LaPorta",
            "pts": 14.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Davante Adams",
            "pts": 5.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Romeo Doubs",
            "pts": 8.0
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Dak Prescott",
            "pts": 22.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Ashton Jeanty",
            "pts": 15.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Josh Jacobs",
            "pts": 29.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Xavier Worthy",
            "pts": 9.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Keenan Allen",
            "pts": 4.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dallas Goedert",
            "pts": 21.5
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "David Montgomery",
            "pts": 7.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Cooper Kupp",
            "pts": 11.0
          }
        ]
      }
    ],
    "Week 7": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Drake Maye",
            "pts": 23.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jahmyr Gibbs",
            "pts": 35.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kyren Williams",
            "pts": 7.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Drake London",
            "pts": 6.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Michael Pittman Jr.",
            "pts": 17.3
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Tucker Kraft",
            "pts": 14.3
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Chuba Hubbard",
            "pts": 6.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jordan Addison",
            "pts": 17.3
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jared Goff",
            "pts": 10.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Alvin Kamara",
            "pts": 4.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "D'Andre Swift",
            "pts": 20.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ja'Marr Chase",
            "pts": 30.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Rashee Rice",
            "pts": 19.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Zach Ertz",
            "pts": 11.2
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Javonte Williams",
            "pts": 18.3
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Rachaad White",
            "pts": 6.4
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jalen Hurts",
            "pts": 24.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "De'Von Achane",
            "pts": 11.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "J.K. Dobbins",
            "pts": 8.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ladd McConkey",
            "pts": 11.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DeVonta Smith",
            "pts": 28.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Cade Otton",
            "pts": 10.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Kimani Vidal",
            "pts": 5.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Amon-Ra St. Brown",
            "pts": 17.6
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Trevor Lawrence",
            "pts": 17.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Bijan Robinson",
            "pts": 18.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Breece Hall",
            "pts": 6.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Olave",
            "pts": 24.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tre Tucker",
            "pts": 5.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Travis Kelce",
            "pts": 6.9
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Rhamondre Stevenson",
            "pts": 15.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Chris Moore",
            "pts": 6.9
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Daniel Jones",
            "pts": 22.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "TreVeyon Henderson",
            "pts": 0.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jordan Mason",
            "pts": 11.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "George Pickens",
            "pts": 10.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jaylen Waddle",
            "pts": 2.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Tyler Warren",
            "pts": 14.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Nico Collins",
            "pts": 4.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Marvin Harrison Jr.",
            "pts": 6.8
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Caleb Williams",
            "pts": 4.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Saquon Barkley",
            "pts": 4.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Nick Chubb",
            "pts": 1.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "A.J. Brown",
            "pts": 26.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Rome Odunze",
            "pts": 4.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Trey McBride",
            "pts": 24.4
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Isiah Pacheco",
            "pts": 11.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Stefon Diggs",
            "pts": 10.4
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Herbert",
            "pts": 27.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Christian McCaffrey",
            "pts": 35.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Chase Brown",
            "pts": 11.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Travis Hunter",
            "pts": 20.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Rashid Shaheed",
            "pts": 6.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Jake Ferguson",
            "pts": 18.4
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Jaylen Warren",
            "pts": 17.8
          },
          {
            "slot": "FLEX",
            "pos": "TE",
            "player": "George Kittle",
            "pts": 0.0
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jayden Daniels",
            "pts": 17.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Cam Skattebo",
            "pts": 16.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rico Dowdle",
            "pts": 10.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jameson Williams",
            "pts": 0.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Elic Ayomanor",
            "pts": 3.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Darren Waller",
            "pts": 0.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Kenneth Walker III",
            "pts": 6.6
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Michael Carter",
            "pts": 4.6
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Dak Prescott",
            "pts": 23.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Ashton Jeanty",
            "pts": 3.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Josh Jacobs",
            "pts": 18.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Xavier Worthy",
            "pts": 6.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Keenan Allen",
            "pts": 23.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dallas Goedert",
            "pts": 3.3
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "David Montgomery",
            "pts": 4.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Cooper Kupp",
            "pts": 1.7
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Baker Mayfield",
            "pts": 11.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Quinshon Judkins",
            "pts": 26.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kareem Hunt",
            "pts": 1.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Justin Jefferson",
            "pts": 10.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Courtland Sutton",
            "pts": 13.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Theo Johnson",
            "pts": 14.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DK Metcalf",
            "pts": 6.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Kendrick Bourne",
            "pts": 2.4
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Patrick Mahomes",
            "pts": 26.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jacory Croskey-Merritt",
            "pts": 3.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kenneth Gainwell",
            "pts": 2.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Brian Thomas Jr.",
            "pts": 4.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tee Higgins",
            "pts": 18.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Sam LaPorta",
            "pts": 3.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Davante Adams",
            "pts": 24.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Romeo Doubs",
            "pts": 10.2
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Matthew Stafford",
            "pts": 27.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jonathan Taylor",
            "pts": 32.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Travis Etienne Jr.",
            "pts": 6.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tetairoa McMillan",
            "pts": 4.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Quentin Johnston",
            "pts": 10.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Harold Fannin Jr.",
            "pts": 5.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jaxon Smith-Njigba",
            "pts": 22.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Matthew Golden",
            "pts": 5.7
          }
        ]
      }
    ],
    "Week 8": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jalen Hurts",
            "pts": 25.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "De'Von Achane",
            "pts": 17.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kimani Vidal",
            "pts": 19.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ladd McConkey",
            "pts": 17.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DeVonta Smith",
            "pts": 11.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Cade Otton",
            "pts": 6.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "J.K. Dobbins",
            "pts": 13.1
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Woody Marks",
            "pts": 13.1
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Drake Maye",
            "pts": 26.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Chuba Hubbard",
            "pts": 9.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Tony Pollard",
            "pts": 5.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jordan Addison",
            "pts": 10.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Michael Pittman Jr.",
            "pts": 19.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Tucker Kraft",
            "pts": 29.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jaylin Noel",
            "pts": 8.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Christian Watson",
            "pts": 10.5
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Josh Allen",
            "pts": 23.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Alvin Kamara",
            "pts": 5.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "D'Andre Swift",
            "pts": 14.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ja'Marr Chase",
            "pts": 15.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Rashee Rice",
            "pts": 21.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Zach Ertz",
            "pts": 3.6
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Javonte Williams",
            "pts": 17.4
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Rachaad White",
            "pts": 7.1
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Daniel Jones",
            "pts": 23.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jordan Mason",
            "pts": 1.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kyle Monangai",
            "pts": 2.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jaylen Waddle",
            "pts": 18.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Emeka Egbuka",
            "pts": 5.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Tyler Warren",
            "pts": 7.3
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "TreVeyon Henderson",
            "pts": 5.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "George Pickens",
            "pts": 11.3
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Aaron Rodgers",
            "pts": 16.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Bijan Robinson",
            "pts": 4.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Breece Hall",
            "pts": 31.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Olave",
            "pts": 10.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chimere Dike",
            "pts": 12.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Travis Kelce",
            "pts": 18.9
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "James Cook III",
            "pts": 33.6
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Rhamondre Stevenson",
            "pts": 5.4
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Herbert",
            "pts": 25.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Christian McCaffrey",
            "pts": 8.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Chase Brown",
            "pts": 24.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Khalil Shakir",
            "pts": 17.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Rashid Shaheed",
            "pts": 10.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Jake Ferguson",
            "pts": 0.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Jaylen Warren",
            "pts": 8.3
          },
          {
            "slot": "FLEX",
            "pos": "TE",
            "player": "George Kittle",
            "pts": 12.3
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Caleb Williams",
            "pts": 11.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Saquon Barkley",
            "pts": 31.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Isiah Pacheco",
            "pts": 5.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Rome Odunze",
            "pts": 14.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Stefon Diggs",
            "pts": 8.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Kyle Pitts Sr.",
            "pts": 10.4
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Nick Chubb",
            "pts": 7.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Zay Flowers",
            "pts": 10.6
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Dak Prescott",
            "pts": 6.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Josh Jacobs",
            "pts": 12.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Emanuel Wilson",
            "pts": 10.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Xavier Worthy",
            "pts": 7.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Keenan Allen",
            "pts": 6.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dallas Goedert",
            "pts": 16.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Terry McLaurin",
            "pts": 12.9
          },
          {
            "slot": "FLEX",
            "pos": "TE",
            "player": "Hunter Henry",
            "pts": 7.2
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Fields",
            "pts": 20.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Cam Skattebo",
            "pts": 9.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rico Dowdle",
            "pts": 5.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Keon Coleman",
            "pts": 4.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Darnell Mooney",
            "pts": 1.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Oronde Gadsden",
            "pts": 16.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Josh Downs",
            "pts": 11.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Troy Franklin",
            "pts": 23.9
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Patrick Mahomes",
            "pts": 22.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jacory Croskey-Merritt",
            "pts": 2.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kenneth Gainwell",
            "pts": 2.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "CeeDee Lamb",
            "pts": 11.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tee Higgins",
            "pts": 10.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "T.J. Hockenson",
            "pts": 3.6
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Justice Hill",
            "pts": 0.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Romeo Doubs",
            "pts": 7.9
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Baker Mayfield",
            "pts": 4.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Quinshon Judkins",
            "pts": 3.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Samaje Perine",
            "pts": 16.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Justin Jefferson",
            "pts": 10.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Courtland Sutton",
            "pts": 8.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dalton Kincaid",
            "pts": 2.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Marvin Mims Jr.",
            "pts": 1.8
          },
          {
            "slot": "FLEX",
            "pos": "TE",
            "player": "Theo Johnson",
            "pts": 3.5
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jaxson Dart",
            "pts": 19.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Derrick Henry",
            "pts": 19.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jonathan Taylor",
            "pts": 36.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tetairoa McMillan",
            "pts": 13.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Quentin Johnston",
            "pts": 0.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dalton Schultz",
            "pts": 3.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Deebo Samuel",
            "pts": 2.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tez Johnson",
            "pts": 6.8
          }
        ]
      }
    ],
    "Week 9": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Drake Maye",
            "pts": 16.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jahmyr Gibbs",
            "pts": 4.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kyren Williams",
            "pts": 17.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Drake London",
            "pts": 34.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Michael Pittman Jr.",
            "pts": 16.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Tucker Kraft",
            "pts": 3.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jordan Addison",
            "pts": 7.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Christian Watson",
            "pts": 6.8
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Daniel Jones",
            "pts": 14.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "TreVeyon Henderson",
            "pts": 10.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kyle Monangai",
            "pts": 21.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "George Pickens",
            "pts": 10.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jaylen Waddle",
            "pts": 11.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Tyler Warren",
            "pts": 5.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Nico Collins",
            "pts": 11.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Marvin Harrison Jr.",
            "pts": 19.1
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Herbert",
            "pts": 27.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Christian McCaffrey",
            "pts": 31.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Chase Brown",
            "pts": 15.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Khalil Shakir",
            "pts": 7.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Rashid Shaheed",
            "pts": 9.3
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "George Kittle",
            "pts": 4.9
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Jaylen Warren",
            "pts": 15.9
          },
          {
            "slot": "FLEX",
            "pos": "TE",
            "player": "Jake Ferguson",
            "pts": 5.5
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Sam Darnold",
            "pts": 27.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "De'Von Achane",
            "pts": 13.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kimani Vidal",
            "pts": 3.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Amon-Ra St. Brown",
            "pts": 14.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ladd McConkey",
            "pts": 7.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Juwan Johnson",
            "pts": 10.6
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "J.K. Dobbins",
            "pts": 6.4
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Woody Marks",
            "pts": 2.7
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Dak Prescott",
            "pts": 15.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Josh Jacobs",
            "pts": 18.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "David Montgomery",
            "pts": 10.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Xavier Worthy",
            "pts": 4.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Keenan Allen",
            "pts": 5.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Hunter Henry",
            "pts": 7.1
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Ashton Jeanty",
            "pts": 17.4
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Aaron Jones Sr.",
            "pts": 10.8
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Josh Allen",
            "pts": 28.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Alvin Kamara",
            "pts": 0.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Javonte Williams",
            "pts": 6.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ja'Marr Chase",
            "pts": 14.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Wan'Dale Robinson",
            "pts": 9.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Zach Ertz",
            "pts": 6.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jakobi Meyers",
            "pts": 4.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Rashee Rice",
            "pts": 16.6
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Patrick Mahomes",
            "pts": 10.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jacory Croskey-Merritt",
            "pts": 4.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kenneth Gainwell",
            "pts": 5.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "CeeDee Lamb",
            "pts": 12.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tee Higgins",
            "pts": 29.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Sam LaPorta",
            "pts": 18.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Davante Adams",
            "pts": 20.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Romeo Doubs",
            "pts": 12.6
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Aaron Rodgers",
            "pts": 12.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Bijan Robinson",
            "pts": 13.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Cook III",
            "pts": 13.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Olave",
            "pts": 7.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chimere Dike",
            "pts": 7.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Travis Kelce",
            "pts": 10.6
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Tyjae Spears",
            "pts": 7.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tre Tucker",
            "pts": 5.3
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Lamar Jackson",
            "pts": 25.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Derrick Henry",
            "pts": 12.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jonathan Taylor",
            "pts": 6.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jaxon Smith-Njigba",
            "pts": 18.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tetairoa McMillan",
            "pts": 6.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Jonnu Smith",
            "pts": 4.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Kareem Hunt",
            "pts": 12.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Deebo Samuel",
            "pts": 6.9
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Caleb Williams",
            "pts": 37.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Nick Chubb",
            "pts": 3.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Ollie Gordon II",
            "pts": 1.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Rome Odunze",
            "pts": 0.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Stefon Diggs",
            "pts": 11.3
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Trey McBride",
            "pts": 14.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Zay Flowers",
            "pts": 8.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Kayshon Boutte",
            "pts": 0.0
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jordan Love",
            "pts": 8.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Tyrone Tracy Jr.",
            "pts": 5.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Samaje Perine",
            "pts": 0.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Justin Jefferson",
            "pts": 13.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DK Metcalf",
            "pts": 1.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Theo Johnson",
            "pts": 10.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Courtland Sutton",
            "pts": 9.5
          },
          {
            "slot": "FLEX",
            "pos": "TE",
            "player": "Brock Bowers",
            "pts": 37.3
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jayden Daniels",
            "pts": 15.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kenneth Walker III",
            "pts": 7.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rico Dowdle",
            "pts": 27.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jameson Williams",
            "pts": 14.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Josh Downs",
            "pts": 12.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Oronde Gadsden",
            "pts": 9.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Puka Nacua",
            "pts": 19.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Troy Franklin",
            "pts": 6.3
          }
        ]
      }
    ],
    "Week 10": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Herbert",
            "pts": 14.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Christian McCaffrey",
            "pts": 13.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jaylen Warren",
            "pts": 10.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Khalil Shakir",
            "pts": 9.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Rashid Shaheed",
            "pts": 2.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "George Kittle",
            "pts": 18.9
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Bam Knight",
            "pts": 3.8
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Devin Singletary",
            "pts": 8.8
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Drake Maye",
            "pts": 18.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jahmyr Gibbs",
            "pts": 36.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kyren Williams",
            "pts": 21.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Drake London",
            "pts": 21.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Michael Pittman Jr.",
            "pts": 2.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "AJ Barner",
            "pts": 0.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DJ Moore",
            "pts": 0.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jordan Addison",
            "pts": 5.0
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Daniel Jones",
            "pts": 15.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "TreVeyon Henderson",
            "pts": 27.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kyle Monangai",
            "pts": 8.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Nico Collins",
            "pts": 19.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Courtland Sutton",
            "pts": 3.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Brock Bowers",
            "pts": 3.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jaylen Waddle",
            "pts": 16.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Justin Jefferson",
            "pts": 5.7
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "J.J. McCarthy",
            "pts": 14.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Ashton Jeanty",
            "pts": 13.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "David Montgomery",
            "pts": 9.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Keenan Allen",
            "pts": 2.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Romeo Doubs",
            "pts": 1.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dallas Goedert",
            "pts": 6.3
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Josh Jacobs",
            "pts": 17.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Cooper Kupp",
            "pts": 8.4
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jalen Hurts",
            "pts": 11.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "De'Von Achane",
            "pts": 37.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "J.K. Dobbins",
            "pts": 8.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Amon-Ra St. Brown",
            "pts": 14.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ladd McConkey",
            "pts": 18.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Cade Otton",
            "pts": 12.7
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Kimani Vidal",
            "pts": 17.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DeVonta Smith",
            "pts": 14.9
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Bo Nix",
            "pts": 5.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jacory Croskey-Merritt",
            "pts": 3.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kenneth Gainwell",
            "pts": 1.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Brian Thomas Jr.",
            "pts": 0.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Davante Adams",
            "pts": 16.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Sam LaPorta",
            "pts": 7.8
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Aaron Jones Sr.",
            "pts": 14.4
          },
          {
            "slot": "FLEX",
            "pos": "TE",
            "player": "Hunter Henry",
            "pts": 1.4
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Josh Allen",
            "pts": 19.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Alvin Kamara",
            "pts": 13.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "D'Andre Swift",
            "pts": 12.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Wan'Dale Robinson",
            "pts": 9.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Calvin Austin III",
            "pts": 2.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Zach Ertz",
            "pts": 7.4
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Rachaad White",
            "pts": 7.9
          },
          {
            "slot": "FLEX",
            "pos": "TE",
            "player": "David Njoku",
            "pts": 9.1
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Lamar Jackson",
            "pts": 16.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Derrick Henry",
            "pts": 9.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jonathan Taylor",
            "pts": 48.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jaxon Smith-Njigba",
            "pts": 17.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tetairoa McMillan",
            "pts": 8.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Tyler Warren",
            "pts": 13.9
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Travis Etienne Jr.",
            "pts": 14.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Deebo Samuel",
            "pts": 10.9
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Sam Darnold",
            "pts": 4.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Bijan Robinson",
            "pts": 9.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Cook III",
            "pts": 8.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Garrett Wilson",
            "pts": 0.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Olave",
            "pts": 18.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dalton Schultz",
            "pts": 14.8
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Breece Hall",
            "pts": 19.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Darius Slayton",
            "pts": 10.9
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jaxson Dart",
            "pts": 26.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Tyrone Tracy Jr.",
            "pts": 7.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Quinshon Judkins",
            "pts": 9.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DK Metcalf",
            "pts": 5.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Emeka Egbuka",
            "pts": 20.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Theo Johnson",
            "pts": 11.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Parker Washington",
            "pts": 16.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Quentin Johnston",
            "pts": 6.7
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Caleb Williams",
            "pts": 25.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Saquon Barkley",
            "pts": 11.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Nick Chubb",
            "pts": 5.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Rome Odunze",
            "pts": 17.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Stefon Diggs",
            "pts": 13.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Trey McBride",
            "pts": 23.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "A.J. Brown",
            "pts": 2.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Zay Flowers",
            "pts": 10.1
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Fields",
            "pts": 6.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kenneth Walker III",
            "pts": 7.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rico Dowdle",
            "pts": 13.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jameson Williams",
            "pts": 20.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Josh Downs",
            "pts": 0.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Oronde Gadsden",
            "pts": 2.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Puka Nacua",
            "pts": 14.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Troy Franklin",
            "pts": 12.5
          }
        ]
      }
    ],
    "Week 11": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Drake Maye",
            "pts": 15.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jahmyr Gibbs",
            "pts": 17.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kyren Williams",
            "pts": 16.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Drake London",
            "pts": 15.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jordan Addison",
            "pts": 9.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "AJ Barner",
            "pts": 12.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DJ Moore",
            "pts": 2.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Ricky Pearsall",
            "pts": 0.5
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "J.J. McCarthy",
            "pts": 6.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Josh Jacobs",
            "pts": 4.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "David Montgomery",
            "pts": 4.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Keenan Allen",
            "pts": 7.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Romeo Doubs",
            "pts": 7.3
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dallas Goedert",
            "pts": 3.4
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Ashton Jeanty",
            "pts": 6.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Xavier Worthy",
            "pts": 4.0
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Patrick Mahomes",
            "pts": 13.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jacory Croskey-Merritt",
            "pts": 3.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Aaron Jones Sr.",
            "pts": 9.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Brian Thomas Jr.",
            "pts": 0.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Davante Adams",
            "pts": 6.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Isaiah Likely",
            "pts": 2.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "CeeDee Lamb",
            "pts": 15.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tee Higgins",
            "pts": 13.8
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Herbert",
            "pts": 3.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Christian McCaffrey",
            "pts": 32.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jaylen Warren",
            "pts": 7.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Khalil Shakir",
            "pts": 0.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Rashid Shaheed",
            "pts": 3.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "George Kittle",
            "pts": 21.7
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Chase Brown",
            "pts": 15.7
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Bam Knight",
            "pts": 12.5
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Lamar Jackson",
            "pts": 4.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Travis Etienne Jr.",
            "pts": 19.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Sean Tucker",
            "pts": 33.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jaxon Smith-Njigba",
            "pts": 16.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Deebo Samuel",
            "pts": 17.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Harold Fannin Jr.",
            "pts": 3.6
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Derrick Henry",
            "pts": 19.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tetairoa McMillan",
            "pts": 29.0
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Aaron Rodgers",
            "pts": 9.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "TreVeyon Henderson",
            "pts": 29.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kyle Monangai",
            "pts": 10.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Nico Collins",
            "pts": 19.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jaylen Waddle",
            "pts": 6.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Brock Bowers",
            "pts": 10.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Courtland Sutton",
            "pts": 7.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Justin Jefferson",
            "pts": 8.6
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Marcus Mariota",
            "pts": 15.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Tyrone Tracy Jr.",
            "pts": 15.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Quinshon Judkins",
            "pts": 5.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DK Metcalf",
            "pts": 7.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Emeka Egbuka",
            "pts": 6.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Theo Johnson",
            "pts": 5.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "George Pickens",
            "pts": 24.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Quentin Johnston",
            "pts": 0.0
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jalen Hurts",
            "pts": 14.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "De'Von Achane",
            "pts": 19.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Woody Marks",
            "pts": 5.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Amon-Ra St. Brown",
            "pts": 5.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ladd McConkey",
            "pts": 2.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Cade Otton",
            "pts": 3.8
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Kimani Vidal",
            "pts": 2.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DeVonta Smith",
            "pts": 1.3
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Brock Purdy",
            "pts": 19.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kenneth Walker III",
            "pts": 18.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rico Dowdle",
            "pts": 12.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Puka Nacua",
            "pts": 10.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jameson Williams",
            "pts": 17.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Oronde Gadsden",
            "pts": 5.1
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "RJ Harvey",
            "pts": 6.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Troy Franklin",
            "pts": 10.4
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Josh Allen",
            "pts": 42.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "D'Andre Swift",
            "pts": 9.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rachaad White",
            "pts": 7.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ja'Marr Chase",
            "pts": 4.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Wan'Dale Robinson",
            "pts": 5.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Zach Ertz",
            "pts": 6.2
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Javonte Williams",
            "pts": 9.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Rashee Rice",
            "pts": 6.8
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Caleb Williams",
            "pts": 10.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Saquon Barkley",
            "pts": 9.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kareem Hunt",
            "pts": 12.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Rome Odunze",
            "pts": 5.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Stefon Diggs",
            "pts": 15.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Trey McBride",
            "pts": 22.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "A.J. Brown",
            "pts": 8.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Zay Flowers",
            "pts": 9.8
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Tua Tagovailoa",
            "pts": 6.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Bijan Robinson",
            "pts": 28.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Cook III",
            "pts": 18.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tre Tucker",
            "pts": 12.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Malik Washington",
            "pts": 5.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Travis Kelce",
            "pts": 19.6
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Breece Hall",
            "pts": 7.4
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Rhamondre Stevenson",
            "pts": 0.0
          }
        ]
      }
    ],
    "Week 12": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Patrick Mahomes",
            "pts": 17.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kenneth Gainwell",
            "pts": 15.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Aaron Jones Sr.",
            "pts": 7.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Brian Thomas Jr.",
            "pts": 0.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Davante Adams",
            "pts": 20.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Hunter Henry",
            "pts": 21.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "CeeDee Lamb",
            "pts": 9.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tee Higgins",
            "pts": 5.6
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Drake Maye",
            "pts": 15.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jahmyr Gibbs",
            "pts": 49.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kyren Williams",
            "pts": 5.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Michael Pittman Jr.",
            "pts": 11.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Christian Watson",
            "pts": 7.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "AJ Barner",
            "pts": 2.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Ricky Pearsall",
            "pts": 1.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jordan Addison",
            "pts": 0.0
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Dak Prescott",
            "pts": 26.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "David Montgomery",
            "pts": 5.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Emanuel Wilson",
            "pts": 25.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Xavier Worthy",
            "pts": 7.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Romeo Doubs",
            "pts": 3.3
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dallas Goedert",
            "pts": 3.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Ashton Jeanty",
            "pts": 20.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Cooper Kupp",
            "pts": 3.4
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Lamar Jackson",
            "pts": 7.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Derrick Henry",
            "pts": 21.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jonathan Taylor",
            "pts": 7.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jaxon Smith-Njigba",
            "pts": 33.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jakobi Meyers",
            "pts": 13.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Tyler Warren",
            "pts": 7.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Travis Etienne Jr.",
            "pts": 19.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tetairoa McMillan",
            "pts": 10.5
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jacoby Brissett",
            "pts": 18.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Christian McCaffrey",
            "pts": 23.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jaylen Warren",
            "pts": 12.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Khalil Shakir",
            "pts": 13.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Darnell Mooney",
            "pts": 14.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "George Kittle",
            "pts": 10.8
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Chase Brown",
            "pts": 14.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Bam Knight",
            "pts": 11.2
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jordan Love",
            "pts": 6.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Tyrone Tracy Jr.",
            "pts": 14.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Quinshon Judkins",
            "pts": 16.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DK Metcalf",
            "pts": 11.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Michael Wilson",
            "pts": 16.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Theo Johnson",
            "pts": 9.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "George Pickens",
            "pts": 25.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Emeka Egbuka",
            "pts": 4.7
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Daniel Jones",
            "pts": 16.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "TreVeyon Henderson",
            "pts": 9.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kyle Monangai",
            "pts": 10.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Nico Collins",
            "pts": 7.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Justin Jefferson",
            "pts": 6.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Brock Bowers",
            "pts": 8.5
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Jordan Mason",
            "pts": 4.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Darius Slayton",
            "pts": 2.8
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Brock Purdy",
            "pts": 7.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kenneth Walker III",
            "pts": 11.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rico Dowdle",
            "pts": 9.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jameson Williams",
            "pts": 0.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Josh Downs",
            "pts": 2.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Mark Andrews",
            "pts": 1.6
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Michael Carter",
            "pts": 7.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Puka Nacua",
            "pts": 13.2
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jalen Hurts",
            "pts": 30.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Woody Marks",
            "pts": 7.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Blake Corum",
            "pts": 2.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Amon-Ra St. Brown",
            "pts": 25.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Alec Pierce",
            "pts": 3.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Cade Otton",
            "pts": 4.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DeVonta Smith",
            "pts": 11.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jauan Jennings",
            "pts": 12.6
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Caleb Williams",
            "pts": 21.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Saquon Barkley",
            "pts": 8.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kareem Hunt",
            "pts": 18.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Rome Odunze",
            "pts": 6.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Stefon Diggs",
            "pts": 3.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Trey McBride",
            "pts": 12.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "A.J. Brown",
            "pts": 21.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Zay Flowers",
            "pts": 9.4
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Josh Allen",
            "pts": 8.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "D'Andre Swift",
            "pts": 1.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Javonte Williams",
            "pts": 11.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Rashee Rice",
            "pts": 20.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Wan'Dale Robinson",
            "pts": 26.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Brock Wright",
            "pts": 4.4
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Alvin Kamara",
            "pts": 2.5
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Rachaad White",
            "pts": 4.7
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Sam Darnold",
            "pts": 17.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Bijan Robinson",
            "pts": 13.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Cook III",
            "pts": 20.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Olave",
            "pts": 11.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tre Tucker",
            "pts": 4.3
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Travis Kelce",
            "pts": 6.4
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Breece Hall",
            "pts": 11.9
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Rhamondre Stevenson",
            "pts": 1.5
          }
        ]
      }
    ],
    "Week 13": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Drake Maye",
            "pts": 20.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jahmyr Gibbs",
            "pts": 10.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kyren Williams",
            "pts": 13.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DJ Moore",
            "pts": 3.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Christian Watson",
            "pts": 16.3
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dalton Kincaid",
            "pts": 0.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Michael Pittman Jr.",
            "pts": 1.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Parker Washington",
            "pts": 3.1
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Matthew Stafford",
            "pts": 11.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Derrick Henry",
            "pts": 16.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jonathan Taylor",
            "pts": 13.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tetairoa McMillan",
            "pts": 10.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jayden Higgins",
            "pts": 9.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Tyler Warren",
            "pts": 9.7
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Travis Etienne Jr.",
            "pts": 4.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jaxon Smith-Njigba",
            "pts": 3.3
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jaxson Dart",
            "pts": 13.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Tyrone Tracy Jr.",
            "pts": 3.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Quinshon Judkins",
            "pts": 14.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "George Pickens",
            "pts": 13.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Emeka Egbuka",
            "pts": 6.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Harold Fannin Jr.",
            "pts": 9.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DK Metcalf",
            "pts": 4.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Michael Wilson",
            "pts": 5.1
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Patrick Mahomes",
            "pts": 29.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kenneth Gainwell",
            "pts": 5.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Aaron Jones Sr.",
            "pts": 2.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Brian Thomas Jr.",
            "pts": 3.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Davante Adams",
            "pts": 19.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Hunter Henry",
            "pts": 9.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "CeeDee Lamb",
            "pts": 20.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tez Johnson",
            "pts": 1.0
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "C.J. Stroud",
            "pts": 9.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kenneth Walker III",
            "pts": 8.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rico Dowdle",
            "pts": 8.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jameson Williams",
            "pts": 23.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Troy Franklin",
            "pts": 3.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Mark Andrews",
            "pts": 6.7
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "RJ Harvey",
            "pts": 19.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Puka Nacua",
            "pts": 10.2
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Dak Prescott",
            "pts": 20.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "David Montgomery",
            "pts": 11.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Emanuel Wilson",
            "pts": 1.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Xavier Worthy",
            "pts": 9.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Romeo Doubs",
            "pts": 10.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dallas Goedert",
            "pts": 3.7
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Ashton Jeanty",
            "pts": 9.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Cooper Kupp",
            "pts": 3.9
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Caleb Williams",
            "pts": 9.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Saquon Barkley",
            "pts": 5.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kareem Hunt",
            "pts": 8.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Rome Odunze",
            "pts": 1.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Stefon Diggs",
            "pts": 4.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Trey McBride",
            "pts": 18.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "A.J. Brown",
            "pts": 30.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Zay Flowers",
            "pts": -0.4
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Herbert",
            "pts": 12.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Christian McCaffrey",
            "pts": 15.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jaylen Warren",
            "pts": 11.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Khalil Shakir",
            "pts": 1.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Darnell Mooney",
            "pts": 3.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "George Kittle",
            "pts": 8.7
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Chase Brown",
            "pts": 14.8
          },
          {
            "slot": "FLEX",
            "pos": "TE",
            "player": "Jake Ferguson",
            "pts": 6.1
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Sam Darnold",
            "pts": 3.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Bijan Robinson",
            "pts": 27.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Breece Hall",
            "pts": 14.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Olave",
            "pts": 12.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tre Tucker",
            "pts": 3.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Travis Kelce",
            "pts": 13.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "James Cook III",
            "pts": 17.2
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Rhamondre Stevenson",
            "pts": 9.5
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Baker Mayfield",
            "pts": 14.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Bucky Irving",
            "pts": 15.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "TreVeyon Henderson",
            "pts": 10.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Nico Collins",
            "pts": 19.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jaylen Waddle",
            "pts": 5.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Brock Bowers",
            "pts": 20.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Marvin Harrison Jr.",
            "pts": 9.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Justin Jefferson",
            "pts": 1.4
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Josh Allen",
            "pts": 16.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "D'Andre Swift",
            "pts": 20.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Javonte Williams",
            "pts": 15.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ja'Marr Chase",
            "pts": 14.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Rashee Rice",
            "pts": 25.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Zach Ertz",
            "pts": 15.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Wan'Dale Robinson",
            "pts": 6.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Chimere Dike",
            "pts": -0.6
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jalen Hurts",
            "pts": 16.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "De'Von Achane",
            "pts": 19.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Woody Marks",
            "pts": 7.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Amon-Ra St. Brown",
            "pts": 0.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DeVonta Smith",
            "pts": 7.3
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Brenton Strange",
            "pts": 12.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Ladd McConkey",
            "pts": 11.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jauan Jennings",
            "pts": 11.9
          }
        ]
      }
    ],
    "Week 14": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jordan Love",
            "pts": 19.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Quinshon Judkins",
            "pts": 8.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Dylan Sampson",
            "pts": 7.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "George Pickens",
            "pts": 6.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Emeka Egbuka",
            "pts": 2.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Harold Fannin Jr.",
            "pts": 21.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DK Metcalf",
            "pts": 18.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Michael Wilson",
            "pts": 31.7
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jacoby Brissett",
            "pts": 19.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jahmyr Gibbs",
            "pts": 33.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kyren Williams",
            "pts": 16.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Michael Pittman Jr.",
            "pts": 12.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Christian Watson",
            "pts": 22.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dalton Kincaid",
            "pts": 12.1
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Michael Carter",
            "pts": 4.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DJ Moore",
            "pts": 0.1
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Matthew Stafford",
            "pts": 23.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Derrick Henry",
            "pts": 10.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jonathan Taylor",
            "pts": 11.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jaxon Smith-Njigba",
            "pts": 24.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Deebo Samuel",
            "pts": 4.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Tyler Warren",
            "pts": 2.7
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Travis Etienne Jr.",
            "pts": 20.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jakobi Meyers",
            "pts": 12.8
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jayden Daniels",
            "pts": 2.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kenneth Walker III",
            "pts": 3.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "RJ Harvey",
            "pts": 19.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jameson Williams",
            "pts": 13.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Troy Franklin",
            "pts": 2.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Oronde Gadsden",
            "pts": 1.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Puka Nacua",
            "pts": 32.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Luther Burden III",
            "pts": 9.0
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Bo Nix",
            "pts": 15.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kenneth Gainwell",
            "pts": 13.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Aaron Jones Sr.",
            "pts": 7.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Brian Thomas Jr.",
            "pts": 10.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Davante Adams",
            "pts": 4.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Isaiah Likely",
            "pts": 10.5
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Chris Rodriguez Jr.",
            "pts": 5.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "CeeDee Lamb",
            "pts": 15.1
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Joe Burrow",
            "pts": 23.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Saquon Barkley",
            "pts": 18.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kareem Hunt",
            "pts": 9.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "A.J. Brown",
            "pts": 13.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Zay Flowers",
            "pts": 16.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Trey McBride",
            "pts": 8.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Chris Godwin Jr.",
            "pts": 8.0
          },
          {
            "slot": "FLEX",
            "pos": "TE",
            "player": "Kyle Pitts Sr.",
            "pts": 12.0
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Dak Prescott",
            "pts": 18.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "David Montgomery",
            "pts": 13.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Emanuel Wilson",
            "pts": 1.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Xavier Worthy",
            "pts": 7.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Romeo Doubs",
            "pts": 0.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dallas Goedert",
            "pts": 11.8
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Ashton Jeanty",
            "pts": 4.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Cooper Kupp",
            "pts": 10.5
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Trevor Lawrence",
            "pts": 19.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Bijan Robinson",
            "pts": 8.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Breece Hall",
            "pts": 4.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Olave",
            "pts": 4.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tre Tucker",
            "pts": 3.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Travis Kelce",
            "pts": 1.3
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "James Cook III",
            "pts": 10.1
          },
          {
            "slot": "FLEX",
            "pos": "TE",
            "player": "Dalton Schultz",
            "pts": 3.7
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Herbert",
            "pts": 12.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Chase Brown",
            "pts": 17.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jaylen Warren",
            "pts": 13.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Khalil Shakir",
            "pts": 8.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "John Metchie III",
            "pts": 5.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Jake Ferguson",
            "pts": 8.3
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Bam Knight",
            "pts": 4.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Darnell Mooney",
            "pts": 1.1
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Josh Allen",
            "pts": 37.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "D'Andre Swift",
            "pts": 9.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Javonte Williams",
            "pts": 13.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ja'Marr Chase",
            "pts": 7.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Adonai Mitchell",
            "pts": 2.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Zach Ertz",
            "pts": 1.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Rashee Rice",
            "pts": 5.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jayden Higgins",
            "pts": 4.9
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Daniel Jones",
            "pts": 0.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Bucky Irving",
            "pts": 15.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Omarion Hampton",
            "pts": 13.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jaylen Waddle",
            "pts": 15.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Justin Jefferson",
            "pts": 2.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Brock Bowers",
            "pts": 12.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Nico Collins",
            "pts": 14.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Courtland Sutton",
            "pts": 9.2
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jalen Hurts",
            "pts": 0.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "De'Von Achane",
            "pts": 17.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Devin Neal",
            "pts": 14.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Amon-Ra St. Brown",
            "pts": 12.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ladd McConkey",
            "pts": 1.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Brenton Strange",
            "pts": 4.2
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Woody Marks",
            "pts": 14.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DeVonta Smith",
            "pts": 5.7
          }
        ]
      }
    ],
    "round1": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Josh Allen",
            "pts": 24.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "D'Andre Swift",
            "pts": 22.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Javonte Williams",
            "pts": 15.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ja'Marr Chase",
            "pts": 18.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Wan'Dale Robinson",
            "pts": 13.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Colby Parkinson",
            "pts": 22.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Rashee Rice",
            "pts": 8.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jayden Higgins",
            "pts": 0.9
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Trevor Lawrence",
            "pts": 44.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Bijan Robinson",
            "pts": 25.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Breece Hall",
            "pts": 4.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Olave",
            "pts": 17.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tre Tucker",
            "pts": 0.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Travis Kelce",
            "pts": 10.5
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "James Cook III",
            "pts": 30.1
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Rhamondre Stevenson",
            "pts": 9.2
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Herbert",
            "pts": 10.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Christian McCaffrey",
            "pts": 15.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Chase Brown",
            "pts": 12.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Khalil Shakir",
            "pts": 9.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "John Metchie III",
            "pts": 4.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "George Kittle",
            "pts": 18.8
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Jaylen Warren",
            "pts": 6.3
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Devin Singletary",
            "pts": 1.9
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Joe Burrow",
            "pts": 5.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Saquon Barkley",
            "pts": 16.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kareem Hunt",
            "pts": 2.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "A.J. Brown",
            "pts": 11.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Zay Flowers",
            "pts": 14.3
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Trey McBride",
            "pts": 31.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Stefon Diggs",
            "pts": 4.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Chris Godwin Jr.",
            "pts": 12.0
          }
        ]
      }
    ],
    "round2": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Bryce Young",
            "pts": 17.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Cook III",
            "pts": 25.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Breece Hall",
            "pts": 7.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Olave",
            "pts": 31.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jalen Coker",
            "pts": 6.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Travis Kelce",
            "pts": 1.1
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Bijan Robinson",
            "pts": 26.3
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Rhamondre Stevenson",
            "pts": 16.8
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Lamar Jackson",
            "pts": 4.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Derrick Henry",
            "pts": 22.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Travis Etienne Jr.",
            "pts": 14.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jaxon Smith-Njigba",
            "pts": 19.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tetairoa McMillan",
            "pts": 16.3
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Tyler Warren",
            "pts": 4.5
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Jonathan Taylor",
            "pts": 15.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jakobi Meyers",
            "pts": 6.6
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Joe Burrow",
            "pts": 28.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Saquon Barkley",
            "pts": 21.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Michael Carter",
            "pts": 6.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "A.J. Brown",
            "pts": 14.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Zay Flowers",
            "pts": 17.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Trey McBride",
            "pts": 4.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Chris Godwin Jr.",
            "pts": 5.5
          },
          {
            "slot": "FLEX",
            "pos": "TE",
            "player": "Kyle Pitts Sr.",
            "pts": 15.2
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Drake Maye",
            "pts": 23.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jahmyr Gibbs",
            "pts": 17.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kyren Williams",
            "pts": 10.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Drake London",
            "pts": 4.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Michael Pittman Jr.",
            "pts": 5.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dalton Kincaid",
            "pts": 0.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Tony Pollard",
            "pts": 10.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Christian Watson",
            "pts": 2.7
          }
        ]
      }
    ],
    "round3": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Trevor Lawrence",
            "pts": 23.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Cook III",
            "pts": 8.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rhamondre Stevenson",
            "pts": 24.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Olave",
            "pts": 21.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tre Tucker",
            "pts": 7.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Taysom Hill",
            "pts": 0.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Bijan Robinson",
            "pts": 37.4
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Breece Hall",
            "pts": 19.9
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Joe Burrow",
            "pts": 20.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Saquon Barkley",
            "pts": 6.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Michael Carter",
            "pts": 5.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "A.J. Brown",
            "pts": 9.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Zay Flowers",
            "pts": 11.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Trey McBride",
            "pts": 18.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Stefon Diggs",
            "pts": 19.1
          },
          {
            "slot": "FLEX",
            "pos": "TE",
            "player": "Kyle Pitts Sr.",
            "pts": 2.6
          }
        ]
      }
    ],
    "thirdPlace": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Drake Maye",
            "pts": 32.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jahmyr Gibbs",
            "pts": 5.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kyren Williams",
            "pts": 14.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Drake London",
            "pts": 0.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Michael Pittman Jr.",
            "pts": 2.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Michael Mayer",
            "pts": 13.4
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Tony Pollard",
            "pts": 10.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DJ Moore",
            "pts": 1.2
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Matthew Stafford",
            "pts": 12.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Derrick Henry",
            "pts": 45.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Travis Etienne Jr.",
            "pts": 10.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jaxon Smith-Njigba",
            "pts": 11.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tetairoa McMillan",
            "pts": 1.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Tyler Warren",
            "pts": 6.8
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Jonathan Taylor",
            "pts": 15.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jakobi Meyers",
            "pts": 4.9
          }
        ]
      }
    ]
  },
  "2024": {
    "Week 1": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Caleb Williams",
            "pts": 7.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Alvin Kamara",
            "pts": 19.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jordan Mason",
            "pts": 21.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Davante Adams",
            "pts": 8.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Calvin Ridley",
            "pts": 6.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Brock Bowers",
            "pts": 8.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Malik Nabers",
            "pts": 9.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Keenan Allen",
            "pts": 4.9
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Patrick Mahomes",
            "pts": 14.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "De'Von Achane",
            "pts": 19.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Cook",
            "pts": 11.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "CeeDee Lamb",
            "pts": 11.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Xavier Worthy",
            "pts": 19.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dalton Kincaid",
            "pts": 1.6
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "James Conner",
            "pts": 17.8
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Tony Pollard",
            "pts": 16.9
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Kyler Murray",
            "pts": 14.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jonathan Taylor",
            "pts": 10.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Travis Etienne Jr.",
            "pts": 10.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DK Metcalf",
            "pts": 4.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tank Dell",
            "pts": 7.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Sam LaPorta",
            "pts": 6.5
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Austin Ekeler",
            "pts": 8.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Amari Cooper",
            "pts": 2.6
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Josh Allen",
            "pts": 31.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Josh Jacobs",
            "pts": 11.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "David Montgomery",
            "pts": 15.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tyreek Hill",
            "pts": 22.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Zay Flowers",
            "pts": 8.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Jake Ferguson",
            "pts": 3.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Zack Moss",
            "pts": 13.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Stefon Diggs",
            "pts": 18.9
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Joe Burrow",
            "pts": 7.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Saquon Barkley",
            "pts": 32.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Aaron Jones",
            "pts": 17.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Puka Nacua",
            "pts": 6.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Diontae Johnson",
            "pts": 2.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "David Njoku",
            "pts": 6.4
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Tyjae Spears",
            "pts": 5.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Deebo Samuel Sr.",
            "pts": 16.2
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jayden Daniels",
            "pts": 28.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Bijan Robinson",
            "pts": 13.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Najee Harris",
            "pts": 8.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jaylen Waddle",
            "pts": 13.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Rashee Rice",
            "pts": 13.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Taysom Hill",
            "pts": 4.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Nico Collins",
            "pts": 14.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Cooper Kupp",
            "pts": 25.0
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Anthony Richardson",
            "pts": 26.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jahmyr Gibbs",
            "pts": 15.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Zamir White",
            "pts": 3.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Garrett Wilson",
            "pts": 9.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Brandon Aiyuk",
            "pts": 3.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "George Kittle",
            "pts": 6.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DJ Moore",
            "pts": 7.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jayden Reed",
            "pts": 31.1
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jordan Love",
            "pts": 16.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Isiah Pacheco",
            "pts": 14.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Joe Mixon",
            "pts": 25.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Justin Jefferson",
            "pts": 13.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Godwin",
            "pts": 18.3
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Travis Kelce",
            "pts": 4.9
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Rhamondre Stevenson",
            "pts": 20.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Christian Watson",
            "pts": 8.8
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Lamar Jackson",
            "pts": 25.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Raheem Mostert",
            "pts": 2.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jerome Ford",
            "pts": 15.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ja'Marr Chase",
            "pts": 9.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Marvin Harrison Jr.",
            "pts": 0.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Trey McBride",
            "pts": 5.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Mike Evans",
            "pts": 20.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Drake London",
            "pts": 2.5
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "C.J. Stroud",
            "pts": 18.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Breece Hall",
            "pts": 15.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kenneth Walker III",
            "pts": 17.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Olave",
            "pts": 2.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DeVonta Smith",
            "pts": 11.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Kyle Pitts",
            "pts": 10.1
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Brian Robinson Jr.",
            "pts": 16.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jaxon Smith-Njigba",
            "pts": 2.9
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Dak Prescott",
            "pts": 11.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Derrick Henry",
            "pts": 10.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rachaad White",
            "pts": 13.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Amon-Ra St. Brown",
            "pts": 2.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "George Pickens",
            "pts": 10.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Mark Andrews",
            "pts": 2.4
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Jaylen Warren",
            "pts": 3.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DeAndre Hopkins",
            "pts": 1.3
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jalen Hurts",
            "pts": 16.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "D'Andre Swift",
            "pts": 5.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Devin Singletary",
            "pts": 7.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "A.J. Brown",
            "pts": 20.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Michael Pittman Jr.",
            "pts": 5.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Evan Engram",
            "pts": 1.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Kyren Williams",
            "pts": 12.9
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Chuba Hubbard",
            "pts": 1.4
          }
        ]
      }
    ],
    "Week 2": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Kyler Murray",
            "pts": 28.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jonathan Taylor",
            "pts": 14.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Travis Etienne Jr.",
            "pts": 13.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DK Metcalf",
            "pts": 23.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tank Dell",
            "pts": 1.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Sam LaPorta",
            "pts": 2.3
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Austin Ekeler",
            "pts": 10.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Amari Cooper",
            "pts": 2.6
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Matthew Stafford",
            "pts": 6.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Alvin Kamara",
            "pts": 43.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jordan Mason",
            "pts": 16.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Davante Adams",
            "pts": 21.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Calvin Ridley",
            "pts": 22.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Brock Bowers",
            "pts": 14.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Malik Nabers",
            "pts": 23.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Keenan Allen",
            "pts": 0.0
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Patrick Mahomes",
            "pts": 12.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "De'Von Achane",
            "pts": 26.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Cook",
            "pts": 28.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "CeeDee Lamb",
            "pts": 17.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Xavier Worthy",
            "pts": 3.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dalton Kincaid",
            "pts": 5.3
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "James Conner",
            "pts": 18.9
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Tony Pollard",
            "pts": 12.7
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Joe Burrow",
            "pts": 17.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Saquon Barkley",
            "pts": 15.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Aaron Jones",
            "pts": 7.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Diontae Johnson",
            "pts": 3.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Demarcus Robinson",
            "pts": 6.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Pat Freiermuth",
            "pts": 5.9
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Tyjae Spears",
            "pts": 4.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Deebo Samuel Sr.",
            "pts": 14.0
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Josh Allen",
            "pts": 9.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Josh Jacobs",
            "pts": 13.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "David Montgomery",
            "pts": 15.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tyreek Hill",
            "pts": 5.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Zay Flowers",
            "pts": 18.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Cade Otton",
            "pts": -0.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Stefon Diggs",
            "pts": 5.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jameson Williams",
            "pts": 11.9
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Anthony Richardson",
            "pts": 9.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jahmyr Gibbs",
            "pts": 14.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "J.K. Dobbins",
            "pts": 19.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Garrett Wilson",
            "pts": 8.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Brandon Aiyuk",
            "pts": 6.3
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "George Kittle",
            "pts": 17.1
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Zach Charbonnet",
            "pts": 15.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DJ Moore",
            "pts": 8.3
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jayden Daniels",
            "pts": 13.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Bijan Robinson",
            "pts": 14.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Najee Harris",
            "pts": 7.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jaylen Waddle",
            "pts": 6.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Rashee Rice",
            "pts": 16.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Isaiah Likely",
            "pts": 3.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Nico Collins",
            "pts": 23.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Cooper Kupp",
            "pts": 5.7
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Lamar Jackson",
            "pts": 16.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jerome Ford",
            "pts": 6.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jeff Wilson Jr.",
            "pts": 2.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ja'Marr Chase",
            "pts": 5.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Mike Evans",
            "pts": 5.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Trey McBride",
            "pts": 15.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Marvin Harrison Jr.",
            "pts": 27.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Drake London",
            "pts": 14.4
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Baker Mayfield",
            "pts": 18.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Isiah Pacheco",
            "pts": 13.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Joe Mixon",
            "pts": 6.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Justin Jefferson",
            "pts": 21.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Godwin",
            "pts": 21.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Travis Kelce",
            "pts": 1.1
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Rhamondre Stevenson",
            "pts": 16.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Christian Watson",
            "pts": 0.0
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Dak Prescott",
            "pts": 12.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Derrick Henry",
            "pts": 16.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rachaad White",
            "pts": 2.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Amon-Ra St. Brown",
            "pts": 17.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "George Pickens",
            "pts": 3.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Mark Andrews",
            "pts": 7.1
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Jaylen Warren",
            "pts": 7.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DeAndre Hopkins",
            "pts": 1.4
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "C.J. Stroud",
            "pts": 14.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Breece Hall",
            "pts": 20.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Brian Robinson Jr.",
            "pts": 14.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Olave",
            "pts": 10.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DeVonta Smith",
            "pts": 17.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Kyle Pitts",
            "pts": 3.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jaxon Smith-Njigba",
            "pts": 17.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Brandin Cooks",
            "pts": 2.6
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jalen Hurts",
            "pts": 23.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Devin Singletary",
            "pts": 14.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Chuba Hubbard",
            "pts": 9.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Michael Pittman Jr.",
            "pts": 3.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Courtland Sutton",
            "pts": 3.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dallas Goedert",
            "pts": 5.3
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Kyren Williams",
            "pts": 13.2
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "D'Andre Swift",
            "pts": 6.2
          }
        ]
      }
    ],
    "Week 3": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Derek Carr",
            "pts": 7.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Alvin Kamara",
            "pts": 14.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jordan Mason",
            "pts": 9.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Davante Adams",
            "pts": 6.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Calvin Ridley",
            "pts": 1.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Brock Bowers",
            "pts": 5.6
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Javonte Williams",
            "pts": 4.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Malik Nabers",
            "pts": 24.2
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Joe Burrow",
            "pts": 25.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Saquon Barkley",
            "pts": 31.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Aaron Jones",
            "pts": 23.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Diontae Johnson",
            "pts": 22.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Demarcus Robinson",
            "pts": 3.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Pat Freiermuth",
            "pts": 5.3
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Tyjae Spears",
            "pts": 8.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tee Higgins",
            "pts": 5.4
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Anthony Richardson",
            "pts": 5.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jahmyr Gibbs",
            "pts": 16.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "J.K. Dobbins",
            "pts": 6.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Garrett Wilson",
            "pts": 11.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Brandon Aiyuk",
            "pts": 7.3
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Colby Parkinson",
            "pts": 3.6
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Zach Charbonnet",
            "pts": 24.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DJ Moore",
            "pts": 11.2
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Kyler Murray",
            "pts": 14.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jonathan Taylor",
            "pts": 26.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Travis Etienne Jr.",
            "pts": 10.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DK Metcalf",
            "pts": 18.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tank Dell",
            "pts": 8.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Sam LaPorta",
            "pts": 4.6
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Austin Ekeler",
            "pts": 12.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Amari Cooper",
            "pts": 24.1
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Lamar Jackson",
            "pts": 25.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jerome Ford",
            "pts": 8.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Cam Akers",
            "pts": 9.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ja'Marr Chase",
            "pts": 26.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Mike Evans",
            "pts": 2.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Trey McBride",
            "pts": 4.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Marvin Harrison Jr.",
            "pts": 14.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Drake London",
            "pts": 15.7
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Patrick Mahomes",
            "pts": 16.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "De'Von Achane",
            "pts": 7.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Cook",
            "pts": 16.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "CeeDee Lamb",
            "pts": 6.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Xavier Worthy",
            "pts": 4.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dalton Kincaid",
            "pts": 11.6
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "James Conner",
            "pts": 3.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Tony Pollard",
            "pts": 4.4
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Dak Prescott",
            "pts": 29.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Derrick Henry",
            "pts": 29.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rachaad White",
            "pts": 6.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Amon-Ra St. Brown",
            "pts": 17.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "George Pickens",
            "pts": 8.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Mark Andrews",
            "pts": 0.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Gabe Davis",
            "pts": 2.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Alec Pierce",
            "pts": 4.9
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Josh Allen",
            "pts": 30.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Josh Jacobs",
            "pts": 5.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "David Montgomery",
            "pts": 19.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tyreek Hill",
            "pts": 5.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Zay Flowers",
            "pts": 3.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Jake Ferguson",
            "pts": 12.5
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Zack Moss",
            "pts": 18.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jameson Williams",
            "pts": 0.7
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jalen Hurts",
            "pts": 10.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kyren Williams",
            "pts": 30.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "D'Andre Swift",
            "pts": 5.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Michael Pittman Jr.",
            "pts": 5.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Courtland Sutton",
            "pts": 10.3
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dallas Goedert",
            "pts": 22.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Devin Singletary",
            "pts": 16.8
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Chuba Hubbard",
            "pts": 25.4
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jayden Daniels",
            "pts": 27.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Bijan Robinson",
            "pts": 12.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Najee Harris",
            "pts": 11.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jaylen Waddle",
            "pts": 4.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Rashee Rice",
            "pts": 23.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Isaiah Likely",
            "pts": 0.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Nico Collins",
            "pts": 10.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Terry McLaurin",
            "pts": 18.0
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "C.J. Stroud",
            "pts": 9.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Breece Hall",
            "pts": 16.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Brian Robinson Jr.",
            "pts": 10.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Olave",
            "pts": 17.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DeVonta Smith",
            "pts": 11.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Kyle Pitts",
            "pts": 6.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jaxon Smith-Njigba",
            "pts": 5.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jauan Jennings",
            "pts": 41.0
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Baker Mayfield",
            "pts": 8.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rhamondre Stevenson",
            "pts": 0.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Alexander Mattison",
            "pts": 11.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Justin Jefferson",
            "pts": 17.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Godwin",
            "pts": 14.3
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Travis Kelce",
            "pts": 5.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Romeo Doubs",
            "pts": 2.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Allen Lazard",
            "pts": 12.3
          }
        ]
      }
    ],
    "Week 4": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Anthony Richardson",
            "pts": 5.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jahmyr Gibbs",
            "pts": 19.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "J.K. Dobbins",
            "pts": 7.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Garrett Wilson",
            "pts": 4.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Brandon Aiyuk",
            "pts": 5.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "George Kittle",
            "pts": 12.5
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Carson Steele",
            "pts": -0.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DJ Moore",
            "pts": 9.7
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Sam Darnold",
            "pts": 20.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Alvin Kamara",
            "pts": 21.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jordan Mason",
            "pts": 23.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Calvin Ridley",
            "pts": 2.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Malik Nabers",
            "pts": 17.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Brock Bowers",
            "pts": 4.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Keenan Allen",
            "pts": 3.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tre Tucker",
            "pts": 12.9
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Joe Burrow",
            "pts": 16.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Saquon Barkley",
            "pts": 12.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Aaron Jones",
            "pts": 15.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Diontae Johnson",
            "pts": 17.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Demarcus Robinson",
            "pts": 4.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Pat Freiermuth",
            "pts": 14.2
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Bucky Irving",
            "pts": 12.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tee Higgins",
            "pts": 9.0
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Lamar Jackson",
            "pts": 23.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jerome Ford",
            "pts": 12.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Cam Akers",
            "pts": 5.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ja'Marr Chase",
            "pts": 16.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Mike Evans",
            "pts": 19.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dalton Schultz",
            "pts": 4.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Marvin Harrison Jr.",
            "pts": 13.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Drake London",
            "pts": 9.4
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Kyler Murray",
            "pts": 9.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jonathan Taylor",
            "pts": 18.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Travis Etienne Jr.",
            "pts": 6.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DK Metcalf",
            "pts": 11.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Rome Odunze",
            "pts": 1.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Sam LaPorta",
            "pts": 7.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Amari Cooper",
            "pts": 5.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Darnell Mooney",
            "pts": 7.1
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Dak Prescott",
            "pts": 16.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Derrick Henry",
            "pts": 34.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rachaad White",
            "pts": 9.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Amon-Ra St. Brown",
            "pts": 17.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "George Pickens",
            "pts": 12.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Mark Andrews",
            "pts": 0.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DeAndre Hopkins",
            "pts": 4.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Gabe Davis",
            "pts": 0.3
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Patrick Mahomes",
            "pts": 13.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "De'Von Achane",
            "pts": 4.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Cook",
            "pts": 5.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "CeeDee Lamb",
            "pts": 20.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Xavier Worthy",
            "pts": 14.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dalton Kincaid",
            "pts": 7.2
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "James Conner",
            "pts": 17.8
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Tony Pollard",
            "pts": 17.8
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jalen Hurts",
            "pts": 16.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "D'Andre Swift",
            "pts": 26.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Devin Singletary",
            "pts": 4.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Courtland Sutton",
            "pts": 13.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Khalil Shakir",
            "pts": 8.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dallas Goedert",
            "pts": 9.7
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Kyren Williams",
            "pts": 18.4
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Chuba Hubbard",
            "pts": 20.1
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Josh Allen",
            "pts": 7.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Josh Jacobs",
            "pts": 9.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Zack Moss",
            "pts": 15.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Stefon Diggs",
            "pts": 16.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Zay Flowers",
            "pts": 1.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Jake Ferguson",
            "pts": 8.4
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "David Montgomery",
            "pts": 14.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tyreek Hill",
            "pts": 6.2
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "C.J. Stroud",
            "pts": 23.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Breece Hall",
            "pts": 2.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Brian Robinson Jr.",
            "pts": 18.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Olave",
            "pts": 12.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jaxon Smith-Njigba",
            "pts": 9.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Kyle Pitts",
            "pts": 0.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Kenneth Walker III",
            "pts": 31.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jauan Jennings",
            "pts": 10.3
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jayden Daniels",
            "pts": 23.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Bijan Robinson",
            "pts": 9.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Najee Harris",
            "pts": 8.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Nico Collins",
            "pts": 27.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Rashee Rice",
            "pts": 0.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Isaiah Likely",
            "pts": 3.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jaylen Waddle",
            "pts": 5.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Terry McLaurin",
            "pts": 14.7
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jordan Love",
            "pts": 28.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rhamondre Stevenson",
            "pts": 6.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Alexander Mattison",
            "pts": 6.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Justin Jefferson",
            "pts": 17.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Godwin",
            "pts": 9.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Travis Kelce",
            "pts": 12.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Christian Watson",
            "pts": 0.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Romeo Doubs",
            "pts": 5.9
          }
        ]
      }
    ],
    "Week 5": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Sam Darnold",
            "pts": 4.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Alvin Kamara",
            "pts": 9.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jordan Mason",
            "pts": 8.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tre Tucker",
            "pts": 3.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Josh Downs",
            "pts": 11.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Brock Bowers",
            "pts": 19.7
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Javonte Williams",
            "pts": 13.6
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Antonio Gibson",
            "pts": 6.1
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Lamar Jackson",
            "pts": 33.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jerome Ford",
            "pts": 6.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Braelon Allen",
            "pts": 3.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ja'Marr Chase",
            "pts": 36.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Mike Evans",
            "pts": 20.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Trey McBride",
            "pts": 8.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Marvin Harrison Jr.",
            "pts": 4.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Drake London",
            "pts": 27.4
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Dak Prescott",
            "pts": 16.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Derrick Henry",
            "pts": 16.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rachaad White",
            "pts": 8.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "George Pickens",
            "pts": 4.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Michael Wilson",
            "pts": 10.3
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Zach Ertz",
            "pts": 2.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Gabe Davis",
            "pts": 3.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tutu Atwell",
            "pts": 9.5
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Brock Purdy",
            "pts": 12.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Zach Charbonnet",
            "pts": 4.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Carson Steele",
            "pts": 1.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Garrett Wilson",
            "pts": 22.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Brandon Aiyuk",
            "pts": 18.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "George Kittle",
            "pts": 16.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DJ Moore",
            "pts": 25.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jayden Reed",
            "pts": 11.7
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Fields",
            "pts": 15.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "D'Andre Swift",
            "pts": 19.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Chuba Hubbard",
            "pts": 15.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Michael Pittman Jr.",
            "pts": 12.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Courtland Sutton",
            "pts": 4.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Mike Gesicki",
            "pts": 4.1
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Kyren Williams",
            "pts": 15.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Tyrone Tracy Jr.",
            "pts": 13.5
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Joe Burrow",
            "pts": 33.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Aaron Jones",
            "pts": 5.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Bucky Irving",
            "pts": 4.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Diontae Johnson",
            "pts": 4.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Demarcus Robinson",
            "pts": 10.3
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Pat Freiermuth",
            "pts": 7.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Deebo Samuel Sr.",
            "pts": 2.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tee Higgins",
            "pts": 24.8
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "C.J. Stroud",
            "pts": 15.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Breece Hall",
            "pts": 5.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Brian Robinson Jr.",
            "pts": 13.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Olave",
            "pts": 2.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jaxon Smith-Njigba",
            "pts": 11.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Kyle Pitts",
            "pts": 12.3
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Kenneth Walker III",
            "pts": 11.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jauan Jennings",
            "pts": 1.8
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Kyler Murray",
            "pts": 24.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Travis Etienne Jr.",
            "pts": 9.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Austin Ekeler",
            "pts": 10.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DK Metcalf",
            "pts": 5.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Amari Cooper",
            "pts": 8.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Tyler Conklin",
            "pts": 8.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Rome Odunze",
            "pts": 6.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Darnell Mooney",
            "pts": 27.0
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jordan Love",
            "pts": 15.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rhamondre Stevenson",
            "pts": 17.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Alexander Mattison",
            "pts": 9.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Justin Jefferson",
            "pts": 12.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Godwin",
            "pts": 9.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Travis Kelce",
            "pts": 11.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Allen Lazard",
            "pts": 11.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Dontayvion Wicks",
            "pts": 3.0
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Patrick Mahomes",
            "pts": 13.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "De'Von Achane",
            "pts": 2.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Cook",
            "pts": 16.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "CeeDee Lamb",
            "pts": 8.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Xavier Worthy",
            "pts": 10.3
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dalton Kincaid",
            "pts": 4.4
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "James Conner",
            "pts": 13.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Brian Thomas Jr.",
            "pts": 20.7
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jayden Daniels",
            "pts": 19.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Bijan Robinson",
            "pts": 9.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Najee Harris",
            "pts": 8.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Nico Collins",
            "pts": 14.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jaylen Waddle",
            "pts": 6.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Tucker Kraft",
            "pts": 22.8
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Chase Brown",
            "pts": 14.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Terry McLaurin",
            "pts": 11.4
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Josh Allen",
            "pts": 14.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Josh Jacobs",
            "pts": 15.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Trey Sermon",
            "pts": 15.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tyreek Hill",
            "pts": 9.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Zay Flowers",
            "pts": 15.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Jake Ferguson",
            "pts": 10.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Stefon Diggs",
            "pts": 11.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Wan'Dale Robinson",
            "pts": 13.0
          }
        ]
      }
    ],
    "Week 6": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Dak Prescott",
            "pts": 3.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Derrick Henry",
            "pts": 25.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jaylen Warren",
            "pts": 3.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Amon-Ra St. Brown",
            "pts": 11.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "George Pickens",
            "pts": 6.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Zach Ertz",
            "pts": 8.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DeAndre Hopkins",
            "pts": 7.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Gabe Davis",
            "pts": 19.0
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Kirk Cousins",
            "pts": 12.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Alvin Kamara",
            "pts": 14.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jordan Mason",
            "pts": 8.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Josh Downs",
            "pts": 16.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Darius Slayton",
            "pts": 8.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Brock Bowers",
            "pts": 11.6
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Javonte Williams",
            "pts": 3.1
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Antonio Gibson",
            "pts": 5.8
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Lamar Jackson",
            "pts": 18.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jerome Ford",
            "pts": 1.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Trey Sermon",
            "pts": 2.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ja'Marr Chase",
            "pts": 9.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Mike Evans",
            "pts": 4.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Trey McBride",
            "pts": 13.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Marvin Harrison Jr.",
            "pts": 0.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Drake London",
            "pts": 16.4
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jalen Hurts",
            "pts": 21.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "D'Andre Swift",
            "pts": 19.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Chuba Hubbard",
            "pts": 12.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Michael Pittman Jr.",
            "pts": 11.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Courtland Sutton",
            "pts": 13.3
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dallas Goedert",
            "pts": 0.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Tyrone Tracy Jr.",
            "pts": 19.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "A.J. Brown",
            "pts": 20.6
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Brock Purdy",
            "pts": 24.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jahmyr Gibbs",
            "pts": 10.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "J.K. Dobbins",
            "pts": 17.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Garrett Wilson",
            "pts": 20.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Brandon Aiyuk",
            "pts": 4.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "George Kittle",
            "pts": 20.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DJ Moore",
            "pts": 4.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jayden Reed",
            "pts": 11.8
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Geno Smith",
            "pts": 12.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Breece Hall",
            "pts": 19.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kenneth Walker III",
            "pts": 16.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DeVonta Smith",
            "pts": 13.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jaxon Smith-Njigba",
            "pts": 7.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Kyle Pitts",
            "pts": 8.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Chris Olave",
            "pts": -1.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Quentin Johnston",
            "pts": 3.7
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Joe Burrow",
            "pts": 19.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Saquon Barkley",
            "pts": 6.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Bucky Irving",
            "pts": 17.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tee Higgins",
            "pts": 11.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Diontae Johnson",
            "pts": 16.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "David Njoku",
            "pts": 5.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Deebo Samuel Sr.",
            "pts": 19.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jalen Tolbert",
            "pts": 6.3
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jordan Love",
            "pts": 25.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Joe Mixon",
            "pts": 26.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Alexander Mattison",
            "pts": 15.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Godwin",
            "pts": 30.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Romeo Doubs",
            "pts": 18.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Cole Kmet",
            "pts": 21.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Allen Lazard",
            "pts": 20.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Dontayvion Wicks",
            "pts": 1.4
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Kyler Murray",
            "pts": 11.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Travis Etienne Jr.",
            "pts": -0.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Austin Ekeler",
            "pts": 8.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DK Metcalf",
            "pts": 6.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jakobi Meyers",
            "pts": 0.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Sam LaPorta",
            "pts": 11.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tank Dell",
            "pts": 15.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Darnell Mooney",
            "pts": 5.3
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jayden Daniels",
            "pts": 20.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Bijan Robinson",
            "pts": 24.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Najee Harris",
            "pts": 19.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Terry McLaurin",
            "pts": 20.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Xavier Legette",
            "pts": 9.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Tucker Kraft",
            "pts": 2.5
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Chase Brown",
            "pts": 13.4
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Tyler Allgeier",
            "pts": 19.3
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Caleb Williams",
            "pts": 28.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Conner",
            "pts": 4.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Ray Davis",
            "pts": 16.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "CeeDee Lamb",
            "pts": 12.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Brian Thomas Jr.",
            "pts": 4.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dalton Kincaid",
            "pts": 8.1
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Tony Pollard",
            "pts": 16.3
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Rico Dowdle",
            "pts": 8.0
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Josh Allen",
            "pts": 24.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Josh Jacobs",
            "pts": 10.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "David Montgomery",
            "pts": 20.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Stefon Diggs",
            "pts": 16.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Zay Flowers",
            "pts": 17.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Jake Ferguson",
            "pts": 2.6
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Zack Moss",
            "pts": 0.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Wan'Dale Robinson",
            "pts": 7.5
          }
        ]
      }
    ],
    "Week 7": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Kirk Cousins",
            "pts": 7.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Alvin Kamara",
            "pts": 5.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Javonte Williams",
            "pts": 24.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Davante Adams",
            "pts": 4.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Malik Nabers",
            "pts": 6.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Brock Bowers",
            "pts": 14.3
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Jordan Mason",
            "pts": 7.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Josh Downs",
            "pts": 0.8
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jalen Hurts",
            "pts": 22.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Devin Singletary",
            "pts": 2.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Chuba Hubbard",
            "pts": 11.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Michael Pittman Jr.",
            "pts": 7.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Courtland Sutton",
            "pts": 0.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Cade Otton",
            "pts": 14.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Kyren Williams",
            "pts": 19.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "A.J. Brown",
            "pts": 17.4
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Geno Smith",
            "pts": 17.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Breece Hall",
            "pts": 23.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kenneth Walker III",
            "pts": 22.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DeVonta Smith",
            "pts": 0.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jaxon Smith-Njigba",
            "pts": 3.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Kyle Pitts",
            "pts": 10.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Brian Robinson Jr.",
            "pts": 13.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Rashod Bateman",
            "pts": 20.1
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Herbert",
            "pts": 14.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Derrick Henry",
            "pts": 24.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jaylen Warren",
            "pts": 6.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Amon-Ra St. Brown",
            "pts": 21.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "George Pickens",
            "pts": 19.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Evan Engram",
            "pts": 6.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DeAndre Hopkins",
            "pts": 0.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Gabe Davis",
            "pts": 1.8
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jordan Love",
            "pts": 16.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Joe Mixon",
            "pts": 25.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rhamondre Stevenson",
            "pts": 3.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Justin Jefferson",
            "pts": 17.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Godwin",
            "pts": 10.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Travis Kelce",
            "pts": 3.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Christian Watson",
            "pts": 1.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Romeo Doubs",
            "pts": 13.4
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Lamar Jackson",
            "pts": 34.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Raheem Mostert",
            "pts": 3.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Tyler Goodson",
            "pts": 11.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ja'Marr Chase",
            "pts": 15.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Mike Evans",
            "pts": 9.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Trey McBride",
            "pts": 7.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Marvin Harrison Jr.",
            "pts": 3.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Drake London",
            "pts": 15.3
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jayden Daniels",
            "pts": 5.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Bijan Robinson",
            "pts": 21.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Tank Bigsby",
            "pts": 23.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Terry McLaurin",
            "pts": 12.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Xavier Legette",
            "pts": 1.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Tucker Kraft",
            "pts": 10.8
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Najee Harris",
            "pts": 16.2
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Chase Brown",
            "pts": 6.3
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Brock Purdy",
            "pts": 17.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jahmyr Gibbs",
            "pts": 30.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "J.K. Dobbins",
            "pts": 8.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Garrett Wilson",
            "pts": 10.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Brandon Aiyuk",
            "pts": 3.3
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "George Kittle",
            "pts": 12.2
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Zamir White",
            "pts": 3.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jayden Reed",
            "pts": 2.0
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Josh Allen",
            "pts": 20.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Josh Jacobs",
            "pts": 17.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "David Montgomery",
            "pts": 6.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Stefon Diggs",
            "pts": 4.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jameson Williams",
            "pts": 0.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dalton Schultz",
            "pts": 3.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tyreek Hill",
            "pts": 1.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Zay Flowers",
            "pts": 3.5
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Joe Burrow",
            "pts": 14.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Saquon Barkley",
            "pts": 25.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Aaron Jones",
            "pts": 19.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tee Higgins",
            "pts": 16.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Diontae Johnson",
            "pts": 2.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "David Njoku",
            "pts": 18.6
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Bucky Irving",
            "pts": 15.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Deebo Samuel Sr.",
            "pts": 0.0
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Patrick Mahomes",
            "pts": 11.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "De'Von Achane",
            "pts": 9.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Tony Pollard",
            "pts": 7.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Xavier Worthy",
            "pts": 3.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Brian Thomas Jr.",
            "pts": 19.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dalton Kincaid",
            "pts": 6.7
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "James Cook",
            "pts": 9.2
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Kareem Hunt",
            "pts": 21.3
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Kyler Murray",
            "pts": 20.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Travis Etienne Jr.",
            "pts": 0.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Austin Ekeler",
            "pts": 3.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DK Metcalf",
            "pts": 17.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Amari Cooper",
            "pts": 14.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Sam LaPorta",
            "pts": 3.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tank Dell",
            "pts": 0.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Darnell Mooney",
            "pts": 7.1
          }
        ]
      }
    ],
    "Week 8": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "C.J. Stroud",
            "pts": 12.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Breece Hall",
            "pts": 9.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kenneth Walker III",
            "pts": 6.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DeVonta Smith",
            "pts": 17.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jaxon Smith-Njigba",
            "pts": 9.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Kyle Pitts",
            "pts": 23.1
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Brian Robinson Jr.",
            "pts": 8.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Chris Olave",
            "pts": 14.7
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Kirk Cousins",
            "pts": 28.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Alvin Kamara",
            "pts": 15.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Javonte Williams",
            "pts": 7.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Davante Adams",
            "pts": 7.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Malik Nabers",
            "pts": 10.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Brock Bowers",
            "pts": 8.3
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Nick Chubb",
            "pts": 5.2
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Jordan Mason",
            "pts": 1.8
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jalen Hurts",
            "pts": 35.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kyren Williams",
            "pts": 20.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Chuba Hubbard",
            "pts": 8.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "A.J. Brown",
            "pts": 10.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tyler Lockett",
            "pts": 1.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Cade Otton",
            "pts": 24.6
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "D'Andre Swift",
            "pts": 18.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Courtland Sutton",
            "pts": 13.0
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jordan Love",
            "pts": 5.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Joe Mixon",
            "pts": 21.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Alexander Mattison",
            "pts": 6.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Justin Jefferson",
            "pts": 15.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Romeo Doubs",
            "pts": 8.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Travis Kelce",
            "pts": 20.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Christian Watson",
            "pts": 5.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Allen Lazard",
            "pts": 0.0
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Herbert",
            "pts": 23.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Derrick Henry",
            "pts": 14.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rachaad White",
            "pts": 13.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Amon-Ra St. Brown",
            "pts": 7.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "George Pickens",
            "pts": 9.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Evan Engram",
            "pts": 11.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DeAndre Hopkins",
            "pts": 3.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Gabe Davis",
            "pts": 0.0
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Bo Nix",
            "pts": 29.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Bijan Robinson",
            "pts": 20.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Tank Bigsby",
            "pts": 9.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jaylen Waddle",
            "pts": 6.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Cooper Kupp",
            "pts": 13.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Tucker Kraft",
            "pts": 15.3
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Najee Harris",
            "pts": 14.6
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Chase Brown",
            "pts": 10.4
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Lamar Jackson",
            "pts": 24.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Raheem Mostert",
            "pts": 15.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Justice Hill",
            "pts": 2.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ja'Marr Chase",
            "pts": 15.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ladd McConkey",
            "pts": 26.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Trey McBride",
            "pts": 16.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Marvin Harrison Jr.",
            "pts": 20.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Drake London",
            "pts": 5.4
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Josh Allen",
            "pts": 19.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Josh Jacobs",
            "pts": 25.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "David Montgomery",
            "pts": 14.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Stefon Diggs",
            "pts": 10.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Wan'Dale Robinson",
            "pts": 5.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Jake Ferguson",
            "pts": 5.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tyreek Hill",
            "pts": 10.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Zay Flowers",
            "pts": 15.0
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Brock Purdy",
            "pts": 26.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jahmyr Gibbs",
            "pts": 19.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "J.K. Dobbins",
            "pts": 14.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Garrett Wilson",
            "pts": 13.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jayden Reed",
            "pts": 6.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "George Kittle",
            "pts": 21.8
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Zach Charbonnet",
            "pts": 9.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DJ Moore",
            "pts": 4.4
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Patrick Mahomes",
            "pts": 18.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "De'Von Achane",
            "pts": 23.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Conner",
            "pts": 13.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "CeeDee Lamb",
            "pts": 33.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Brian Thomas Jr.",
            "pts": 13.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dalton Kincaid",
            "pts": 11.1
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "James Cook",
            "pts": 26.8
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Kareem Hunt",
            "pts": 12.8
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Joe Burrow",
            "pts": 12.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Saquon Barkley",
            "pts": 11.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Aaron Jones",
            "pts": 10.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Deebo Samuel Sr.",
            "pts": 10.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "David Njoku",
            "pts": 14.6
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Bucky Irving",
            "pts": 11.9
          },
          {
            "slot": "ADJ",
            "pos": "WR",
            "player": "Jerry Jeudy",
            "pts": 10.4
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Kyler Murray",
            "pts": 22.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jonathan Taylor",
            "pts": 18.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Austin Ekeler",
            "pts": 6.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tank Dell",
            "pts": 11.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Amari Cooper",
            "pts": 0.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Sam LaPorta",
            "pts": 13.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Rome Odunze",
            "pts": 6.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Darnell Mooney",
            "pts": 16.6
          }
        ]
      }
    ],
    "Week 9": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Kirk Cousins",
            "pts": 17.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Alvin Kamara",
            "pts": 24.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Javonte Williams",
            "pts": 9.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Davante Adams",
            "pts": 18.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Malik Nabers",
            "pts": 10.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Brock Bowers",
            "pts": 13.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Nick Chubb",
            "pts": 4.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Josh Downs",
            "pts": 9.0
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jordan Love",
            "pts": 10.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Joe Mixon",
            "pts": 16.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rhamondre Stevenson",
            "pts": 19.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Justin Jefferson",
            "pts": 18.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Romeo Doubs",
            "pts": 4.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Travis Kelce",
            "pts": 15.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Alexander Mattison",
            "pts": 3.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Christian Watson",
            "pts": 7.2
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jayden Daniels",
            "pts": 19.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Bijan Robinson",
            "pts": 18.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Chase Brown",
            "pts": 24.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jaylen Waddle",
            "pts": 6.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Terry McLaurin",
            "pts": 14.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Tucker Kraft",
            "pts": 5.6
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Tyler Allgeier",
            "pts": 7.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Cooper Kupp",
            "pts": 15.9
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Geno Smith",
            "pts": 22.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kenneth Walker III",
            "pts": 12.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jeremy McNichols",
            "pts": 2.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Olave",
            "pts": 1.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DeVonta Smith",
            "pts": 16.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Kyle Pitts",
            "pts": 1.6
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Breece Hall",
            "pts": 9.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jaxon Smith-Njigba",
            "pts": 33.5
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Josh Allen",
            "pts": 22.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Josh Jacobs",
            "pts": 11.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "David Montgomery",
            "pts": 11.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Keon Coleman",
            "pts": 4.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Cedric Tillman",
            "pts": 16.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Jake Ferguson",
            "pts": 10.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tyreek Hill",
            "pts": 10.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Zay Flowers",
            "pts": 27.2
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jalen Hurts",
            "pts": 29.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Chuba Hubbard",
            "pts": 20.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Tyrone Tracy Jr.",
            "pts": 7.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "A.J. Brown",
            "pts": 4.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Courtland Sutton",
            "pts": 19.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Cade Otton",
            "pts": 17.7
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Kyren Williams",
            "pts": 10.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "D'Andre Swift",
            "pts": 11.2
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Patrick Mahomes",
            "pts": 24.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "De'Von Achane",
            "pts": 28.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Conner",
            "pts": 13.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "CeeDee Lamb",
            "pts": 12.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Brian Thomas Jr.",
            "pts": 5.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dalton Kincaid",
            "pts": 5.2
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "James Cook",
            "pts": 9.4
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Kareem Hunt",
            "pts": 18.2
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Herbert",
            "pts": 19.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Derrick Henry",
            "pts": 25.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rachaad White",
            "pts": 11.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Amon-Ra St. Brown",
            "pts": 15.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DeAndre Hopkins",
            "pts": 24.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Evan Engram",
            "pts": 9.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Gabe Davis",
            "pts": 0.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Michael Wilson",
            "pts": 0.0
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Kyler Murray",
            "pts": 4.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jonathan Taylor",
            "pts": 7.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Austin Ekeler",
            "pts": 15.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DK Metcalf",
            "pts": 0.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tank Dell",
            "pts": 15.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Sam LaPorta",
            "pts": 3.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Rome Odunze",
            "pts": 12.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Darnell Mooney",
            "pts": 17.3
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Lamar Jackson",
            "pts": 23.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Raheem Mostert",
            "pts": 7.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jaleel McLaughlin",
            "pts": 3.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ja'Marr Chase",
            "pts": 7.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ladd McConkey",
            "pts": 8.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Trey McBride",
            "pts": 11.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Marvin Harrison Jr.",
            "pts": 2.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Drake London",
            "pts": 9.7
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Joe Burrow",
            "pts": 29.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Saquon Barkley",
            "pts": 31.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Aaron Jones",
            "pts": 10.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Puka Nacua",
            "pts": 1.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Diontae Johnson",
            "pts": 0.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "David Njoku",
            "pts": 5.4
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Bucky Irving",
            "pts": 4.9
          },
          {
            "slot": "FLEX",
            "pos": "TE",
            "player": "Taysom Hill",
            "pts": 14.0
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Sam Darnold",
            "pts": 19.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jahmyr Gibbs",
            "pts": 14.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "J.K. Dobbins",
            "pts": 23.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Garrett Wilson",
            "pts": 25.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jayden Reed",
            "pts": 13.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Hunter Henry",
            "pts": 9.1
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Zach Charbonnet",
            "pts": 4.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DJ Moore",
            "pts": 5.3
          }
        ]
      }
    ],
    "Week 10": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jayden Daniels",
            "pts": 8.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Bijan Robinson",
            "pts": 27.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Chase Brown",
            "pts": 17.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jaylen Waddle",
            "pts": 7.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Terry McLaurin",
            "pts": 13.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Mike Gesicki",
            "pts": 5.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Najee Harris",
            "pts": 11.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Cooper Kupp",
            "pts": 11.5
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Kirk Cousins",
            "pts": 10.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Christian McCaffrey",
            "pts": 13.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Alvin Kamara",
            "pts": 13.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Davante Adams",
            "pts": 6.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Malik Nabers",
            "pts": 7.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Tyler Conklin",
            "pts": 1.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Calvin Ridley",
            "pts": 22.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Josh Downs",
            "pts": 10.7
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Baker Mayfield",
            "pts": 8.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Joe Mixon",
            "pts": 16.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rhamondre Stevenson",
            "pts": 8.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Justin Jefferson",
            "pts": 7.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Sterling Shepard",
            "pts": 1.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Travis Kelce",
            "pts": 16.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Rashod Bateman",
            "pts": 14.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Alec Pierce",
            "pts": 16.1
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Josh Allen",
            "pts": 18.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "David Montgomery",
            "pts": 12.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Chris Rodriguez Jr.",
            "pts": 0.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Zay Flowers",
            "pts": 5.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Wan'Dale Robinson",
            "pts": 7.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Jake Ferguson",
            "pts": 2.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tyreek Hill",
            "pts": 10.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jameson Williams",
            "pts": 6.8
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "C.J. Stroud",
            "pts": 9.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Breece Hall",
            "pts": 10.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Tyjae Spears",
            "pts": 6.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DeVonta Smith",
            "pts": 2.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jordan Addison",
            "pts": 3.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "T.J. Hockenson",
            "pts": 11.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Quentin Johnston",
            "pts": 9.4
          },
          {
            "slot": "FLEX",
            "pos": "TE",
            "player": "Kyle Pitts",
            "pts": 7.5
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Patrick Mahomes",
            "pts": 16.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Cook",
            "pts": 15.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kareem Hunt",
            "pts": 13.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "CeeDee Lamb",
            "pts": 5.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Brian Thomas Jr.",
            "pts": 2.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dalton Kincaid",
            "pts": 3.4
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "De'Von Achane",
            "pts": 7.7
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "James Conner",
            "pts": 19.8
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jalen Hurts",
            "pts": 29.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Chuba Hubbard",
            "pts": 22.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Tyrone Tracy Jr.",
            "pts": 14.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "A.J. Brown",
            "pts": 13.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Khalil Shakir",
            "pts": 8.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Cade Otton",
            "pts": 6.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Kyren Williams",
            "pts": 8.7
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "D'Andre Swift",
            "pts": 7.0
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Kyler Murray",
            "pts": 28.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jonathan Taylor",
            "pts": 13.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Austin Ekeler",
            "pts": 17.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tank Dell",
            "pts": 5.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Darnell Mooney",
            "pts": 12.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Sam LaPorta",
            "pts": 14.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Rome Odunze",
            "pts": 3.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Mason Tipton",
            "pts": 0.0
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Herbert",
            "pts": 19.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Derrick Henry",
            "pts": 13.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rachaad White",
            "pts": 16.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Amon-Ra St. Brown",
            "pts": 15.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "George Pickens",
            "pts": 18.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Evan Engram",
            "pts": 7.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Jaylen Warren",
            "pts": 8.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DeAndre Hopkins",
            "pts": 7.6
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Joe Burrow",
            "pts": 33.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Saquon Barkley",
            "pts": 8.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Aaron Jones",
            "pts": 11.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Puka Nacua",
            "pts": 14.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Deebo Samuel Sr.",
            "pts": 10.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Taysom Hill",
            "pts": 6.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Bucky Irving",
            "pts": 16.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Diontae Johnson",
            "pts": 1.1
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Lamar Jackson",
            "pts": 32.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Raheem Mostert",
            "pts": 4.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Justice Hill",
            "pts": 0.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ja'Marr Chase",
            "pts": 49.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ladd McConkey",
            "pts": 6.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Trey McBride",
            "pts": 9.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Marvin Harrison Jr.",
            "pts": 13.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Drake London",
            "pts": 13.7
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Brock Purdy",
            "pts": 23.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jahmyr Gibbs",
            "pts": 11.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "J.K. Dobbins",
            "pts": 7.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Garrett Wilson",
            "pts": 6.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DJ Moore",
            "pts": 4.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "George Kittle",
            "pts": 13.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Noah Brown",
            "pts": 4.8
          },
          {
            "slot": "FLEX",
            "pos": "TE",
            "player": "Hunter Henry",
            "pts": 1.9
          }
        ]
      }
    ],
    "Week 11": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Kirk Cousins",
            "pts": 4.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Christian McCaffrey",
            "pts": 12.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Alvin Kamara",
            "pts": 10.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Davante Adams",
            "pts": 10.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Calvin Ridley",
            "pts": 7.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Brock Bowers",
            "pts": 24.8
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Nick Chubb",
            "pts": 5.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Josh Downs",
            "pts": 16.9
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Josh Allen",
            "pts": 23.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Josh Jacobs",
            "pts": 21.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "David Montgomery",
            "pts": 23.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Zay Flowers",
            "pts": 10.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Cedric Tillman",
            "pts": 6.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Jake Ferguson",
            "pts": 1.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tyreek Hill",
            "pts": 15.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jameson Williams",
            "pts": 20.6
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Patrick Mahomes",
            "pts": 15.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Cook",
            "pts": 17.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kareem Hunt",
            "pts": 6.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "CeeDee Lamb",
            "pts": 14.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Brian Thomas Jr.",
            "pts": 11.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dawson Knox",
            "pts": 6.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "De'Von Achane",
            "pts": 18.5
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Tony Pollard",
            "pts": 3.9
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jayden Daniels",
            "pts": 13.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Bijan Robinson",
            "pts": 8.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Najee Harris",
            "pts": 11.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Cooper Kupp",
            "pts": 25.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Terry McLaurin",
            "pts": 1.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Tucker Kraft",
            "pts": 0.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Chase Brown",
            "pts": 16.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Nico Collins",
            "pts": 7.4
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Bo Nix",
            "pts": 28.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jonathan Taylor",
            "pts": 6.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Austin Ekeler",
            "pts": 13.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tank Dell",
            "pts": 7.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Darnell Mooney",
            "pts": 3.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Will Dissly",
            "pts": 16.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Travis Etienne Jr.",
            "pts": 4.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DK Metcalf",
            "pts": 10.5
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jordan Love",
            "pts": 20.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Joe Mixon",
            "pts": 34.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rhamondre Stevenson",
            "pts": 10.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Justin Jefferson",
            "pts": 11.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Romeo Doubs",
            "pts": 2.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Travis Kelce",
            "pts": 1.8
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Alexander Mattison",
            "pts": 8.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Christian Watson",
            "pts": 17.0
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Joe Burrow",
            "pts": 29.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Saquon Barkley",
            "pts": 32.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Aaron Jones",
            "pts": 4.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Puka Nacua",
            "pts": 21.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Deebo Samuel Sr.",
            "pts": 4.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "David Njoku",
            "pts": 14.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tee Higgins",
            "pts": 25.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jerry Jeudy",
            "pts": 23.2
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "C.J. Stroud",
            "pts": 10.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Breece Hall",
            "pts": 27.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kenneth Walker III",
            "pts": 12.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DeVonta Smith",
            "pts": 4.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jaxon Smith-Njigba",
            "pts": 16.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "T.J. Hockenson",
            "pts": 2.3
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Brian Robinson Jr.",
            "pts": 13.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Quentin Johnston",
            "pts": 11.8
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Brock Purdy",
            "pts": 18.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jahmyr Gibbs",
            "pts": 18.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "J.K. Dobbins",
            "pts": 18.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Garrett Wilson",
            "pts": 3.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DJ Moore",
            "pts": 10.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "George Kittle",
            "pts": 0.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jayden Reed",
            "pts": 8.8
          },
          {
            "slot": "FLEX",
            "pos": "TE",
            "player": "Hunter Henry",
            "pts": 9.3
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jalen Hurts",
            "pts": 18.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kyren Williams",
            "pts": 8.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "D'Andre Swift",
            "pts": 15.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "A.J. Brown",
            "pts": 9.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tyler Lockett",
            "pts": 2.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dallas Goedert",
            "pts": 8.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Courtland Sutton",
            "pts": 11.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Khalil Shakir",
            "pts": 11.0
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Lamar Jackson",
            "pts": 14.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Raheem Mostert",
            "pts": -0.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Gus Edwards",
            "pts": 2.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ja'Marr Chase",
            "pts": 23.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ladd McConkey",
            "pts": 15.3
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dalton Schultz",
            "pts": 5.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Drake London",
            "pts": 7.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jauan Jennings",
            "pts": 20.1
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Herbert",
            "pts": 24.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Derrick Henry",
            "pts": 10.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jaylen Warren",
            "pts": 8.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Amon-Ra St. Brown",
            "pts": 33.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "George Pickens",
            "pts": 12.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Evan Engram",
            "pts": 5.3
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Audric Estime",
            "pts": 4.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DeAndre Hopkins",
            "pts": 4.4
          }
        ]
      }
    ],
    "Week 12": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Patrick Mahomes",
            "pts": 28.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Conner",
            "pts": 7.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kareem Hunt",
            "pts": 10.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "CeeDee Lamb",
            "pts": 11.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Xavier Worthy",
            "pts": 7.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Luke Schoonmaker",
            "pts": 13.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "De'Von Achane",
            "pts": 19.1
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Tony Pollard",
            "pts": 20.4
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jameis Winston",
            "pts": 13.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Christian McCaffrey",
            "pts": 6.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Javonte Williams",
            "pts": 1.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Malik Nabers",
            "pts": 9.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Josh Downs",
            "pts": 4.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Brock Bowers",
            "pts": 5.8
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Nick Chubb",
            "pts": 18.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Calvin Ridley",
            "pts": 11.8
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jared Goff",
            "pts": 10.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Josh Jacobs",
            "pts": 28.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "David Montgomery",
            "pts": 14.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Zay Flowers",
            "pts": 8.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Cedric Tillman",
            "pts": 1.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Jonnu Smith",
            "pts": 19.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tyreek Hill",
            "pts": 7.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jameson Williams",
            "pts": 9.3
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Bo Nix",
            "pts": 19.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jonathan Taylor",
            "pts": 3.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Austin Ekeler",
            "pts": 3.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tank Dell",
            "pts": 8.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jakobi Meyers",
            "pts": 17.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Will Dissly",
            "pts": 6.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DK Metcalf",
            "pts": 7.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Rome Odunze",
            "pts": 6.4
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jayden Daniels",
            "pts": 30.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Najee Harris",
            "pts": 6.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Trey Benson",
            "pts": 1.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Nico Collins",
            "pts": 17.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Terry McLaurin",
            "pts": 18.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Tucker Kraft",
            "pts": 9.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jaylen Waddle",
            "pts": 24.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Cooper Kupp",
            "pts": 16.0
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Russell Wilson",
            "pts": 13.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Aaron Jones",
            "pts": 18.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Bucky Irving",
            "pts": 24.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Deebo Samuel Sr.",
            "pts": 2.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jerry Jeudy",
            "pts": 11.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "David Njoku",
            "pts": 3.4
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Saquon Barkley",
            "pts": 44.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Puka Nacua",
            "pts": 16.2
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jordan Love",
            "pts": 14.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Joe Mixon",
            "pts": 7.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rhamondre Stevenson",
            "pts": 3.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Justin Jefferson",
            "pts": 3.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Romeo Doubs",
            "pts": 6.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Travis Kelce",
            "pts": 9.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Christian Watson",
            "pts": 0.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Rashod Bateman",
            "pts": 11.3
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Anthony Richardson",
            "pts": 12.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jahmyr Gibbs",
            "pts": 23.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "J.K. Dobbins",
            "pts": 7.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DJ Moore",
            "pts": 23.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jayden Reed",
            "pts": 4.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "George Kittle",
            "pts": 17.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Noah Brown",
            "pts": 10.1
          },
          {
            "slot": "FLEX",
            "pos": "TE",
            "player": "Hunter Henry",
            "pts": 6.9
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Geno Smith",
            "pts": 12.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kenneth Walker III",
            "pts": 11.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Brian Robinson Jr.",
            "pts": 2.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jaxon Smith-Njigba",
            "pts": 16.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tre Tucker",
            "pts": 11.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "T.J. Hockenson",
            "pts": 14.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jordan Addison",
            "pts": 26.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Quentin Johnston",
            "pts": 0.0
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Lamar Jackson",
            "pts": 22.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Justice Hill",
            "pts": 13.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Cam Akers",
            "pts": 3.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Marvin Harrison Jr.",
            "pts": 6.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Mike Evans",
            "pts": 9.3
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Trey McBride",
            "pts": 19.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Ladd McConkey",
            "pts": 11.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jauan Jennings",
            "pts": 6.5
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jalen Hurts",
            "pts": 14.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kyren Williams",
            "pts": 11.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "D'Andre Swift",
            "pts": 8.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "A.J. Brown",
            "pts": 19.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Courtland Sutton",
            "pts": 25.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Cade Otton",
            "pts": 3.5
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Chuba Hubbard",
            "pts": 14.5
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Tyrone Tracy Jr.",
            "pts": 7.0
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Herbert",
            "pts": 17.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Derrick Henry",
            "pts": 14.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rachaad White",
            "pts": 11.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Amon-Ra St. Brown",
            "pts": 9.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "George Pickens",
            "pts": 6.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Zach Ertz",
            "pts": 12.8
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Jaylen Warren",
            "pts": 13.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DeAndre Hopkins",
            "pts": 12.0
          }
        ]
      }
    ],
    "Week 13": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Kirk Cousins",
            "pts": 2.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Christian McCaffrey",
            "pts": 7.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Alvin Kamara",
            "pts": 13.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Davante Adams",
            "pts": 15.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Malik Nabers",
            "pts": 11.3
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Brock Bowers",
            "pts": 25.2
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Nick Chubb",
            "pts": 11.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Calvin Ridley",
            "pts": 5.5
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Bo Nix",
            "pts": 12.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jonathan Taylor",
            "pts": 16.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Travis Etienne Jr.",
            "pts": 7.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tank Dell",
            "pts": 2.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jakobi Meyers",
            "pts": 12.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Sam LaPorta",
            "pts": 14.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DK Metcalf",
            "pts": 8.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Darnell Mooney",
            "pts": 3.5
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Joe Burrow",
            "pts": 19.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Saquon Barkley",
            "pts": 18.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Aaron Jones",
            "pts": 8.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Puka Nacua",
            "pts": 14.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Deebo Samuel Sr.",
            "pts": 2.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Taysom Hill",
            "pts": 7.2
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Bucky Irving",
            "pts": 26.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tee Higgins",
            "pts": 15.4
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Patrick Mahomes",
            "pts": 16.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Cook",
            "pts": 18.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Conner",
            "pts": 9.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "CeeDee Lamb",
            "pts": 4.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Brian Thomas Jr.",
            "pts": 16.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Luke Schoonmaker",
            "pts": 5.8
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "De'Von Achane",
            "pts": 17.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Tony Pollard",
            "pts": 6.8
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Brock Purdy",
            "pts": 2.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jahmyr Gibbs",
            "pts": 9.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kimani Vidal",
            "pts": 2.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Garrett Wilson",
            "pts": 6.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jayden Reed",
            "pts": 18.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "George Kittle",
            "pts": 1.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DJ Moore",
            "pts": 19.7
          },
          {
            "slot": "FLEX",
            "pos": "TE",
            "player": "Hunter Henry",
            "pts": 11.0
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Josh Allen",
            "pts": 28.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Josh Jacobs",
            "pts": 19.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "David Montgomery",
            "pts": 13.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tyreek Hill",
            "pts": 17.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jameson Williams",
            "pts": 7.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Jonnu Smith",
            "pts": 16.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Zay Flowers",
            "pts": 8.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Xavier Legette",
            "pts": 7.3
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Lamar Jackson",
            "pts": 25.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Justice Hill",
            "pts": 4.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Gus Edwards",
            "pts": 3.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ja'Marr Chase",
            "pts": 17.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Drake London",
            "pts": 12.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Trey McBride",
            "pts": 15.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Mike Evans",
            "pts": 21.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Ladd McConkey",
            "pts": 16.2
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jayden Daniels",
            "pts": 27.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Najee Harris",
            "pts": 21.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Chase Brown",
            "pts": 17.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Nico Collins",
            "pts": 15.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Terry McLaurin",
            "pts": 23.3
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Tucker Kraft",
            "pts": 10.8
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Bijan Robinson",
            "pts": 22.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Cooper Kupp",
            "pts": 3.2
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Herbert",
            "pts": 7.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Derrick Henry",
            "pts": 12.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rachaad White",
            "pts": 8.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Amon-Ra St. Brown",
            "pts": 9.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "George Pickens",
            "pts": 14.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Zach Ertz",
            "pts": 11.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Jaylen Warren",
            "pts": 8.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DeAndre Hopkins",
            "pts": 11.0
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Baker Mayfield",
            "pts": 10.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Joe Mixon",
            "pts": 19.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rhamondre Stevenson",
            "pts": 10.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Justin Jefferson",
            "pts": 13.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Christian Watson",
            "pts": 7.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Travis Kelce",
            "pts": 10.3
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Alexander Mattison",
            "pts": 0.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Alec Pierce",
            "pts": 8.6
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jalen Hurts",
            "pts": 17.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "D'Andre Swift",
            "pts": 8.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Tyrone Tracy Jr.",
            "pts": 13.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "A.J. Brown",
            "pts": 9.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Courtland Sutton",
            "pts": 13.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Cade Otton",
            "pts": 4.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Kyren Williams",
            "pts": 17.8
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Chuba Hubbard",
            "pts": 2.3
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "C.J. Stroud",
            "pts": 14.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Breece Hall",
            "pts": 6.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kenneth Walker III",
            "pts": 5.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jaxon Smith-Njigba",
            "pts": 9.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jordan Addison",
            "pts": 7.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "T.J. Hockenson",
            "pts": 4.3
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Brian Robinson Jr.",
            "pts": 17.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Quentin Johnston",
            "pts": 2.2
          }
        ]
      }
    ],
    "Week 14": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Joe Burrow",
            "pts": 24.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Saquon Barkley",
            "pts": 14.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Aaron Jones",
            "pts": 15.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Puka Nacua",
            "pts": 35.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jerry Jeudy",
            "pts": 14.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "David Njoku",
            "pts": 13.7
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Bucky Irving",
            "pts": 2.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tee Higgins",
            "pts": 3.3
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jameis Winston",
            "pts": 15.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Alvin Kamara",
            "pts": 10.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Nick Chubb",
            "pts": 4.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Davante Adams",
            "pts": 21.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Malik Nabers",
            "pts": 12.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Brock Bowers",
            "pts": 6.7
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Braelon Allen",
            "pts": 10.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Calvin Ridley",
            "pts": 9.4
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Kyler Murray",
            "pts": 17.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Travis Etienne Jr.",
            "pts": 9.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Tyjae Spears",
            "pts": 2.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Rome Odunze",
            "pts": 18.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jakobi Meyers",
            "pts": 10.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Sam LaPorta",
            "pts": 7.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DK Metcalf",
            "pts": 6.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Darnell Mooney",
            "pts": 17.2
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Brock Purdy",
            "pts": 22.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jahmyr Gibbs",
            "pts": 16.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kimani Vidal",
            "pts": 3.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Garrett Wilson",
            "pts": 14.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jayden Reed",
            "pts": 0.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "George Kittle",
            "pts": 18.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DJ Moore",
            "pts": 7.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Nick Westbrook-Ikhine",
            "pts": 2.4
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Patrick Mahomes",
            "pts": 14.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Cook",
            "pts": 3.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Conner",
            "pts": 20.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "CeeDee Lamb",
            "pts": 18.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Brian Thomas Jr.",
            "pts": 12.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dalton Kincaid",
            "pts": 0.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "De'Von Achane",
            "pts": 15.9
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Tony Pollard",
            "pts": 13.4
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Sam Darnold",
            "pts": 34.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Gus Edwards",
            "pts": 9.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Tank Bigsby",
            "pts": 12.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ja'Marr Chase",
            "pts": 38.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Drake London",
            "pts": 9.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Trey McBride",
            "pts": 10.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Marvin Harrison Jr.",
            "pts": 6.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Mike Evans",
            "pts": 8.9
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Josh Allen",
            "pts": 51.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Josh Jacobs",
            "pts": 24.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "David Montgomery",
            "pts": 16.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tyreek Hill",
            "pts": 23.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jameson Williams",
            "pts": 10.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Jonnu Smith",
            "pts": 11.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Calvin Austin III",
            "pts": 0.9
          },
          {
            "slot": "FLEX",
            "pos": "TE",
            "player": "Jake Ferguson",
            "pts": 4.7
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Herbert",
            "pts": 13.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rachaad White",
            "pts": 23.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jaylen Warren",
            "pts": 8.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Amon-Ra St. Brown",
            "pts": 7.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "George Pickens",
            "pts": 0.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Evan Engram",
            "pts": 5.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DeAndre Hopkins",
            "pts": 11.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Michael Wilson",
            "pts": 12.7
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Cooper Rush",
            "pts": 13.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Najee Harris",
            "pts": 11.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Chase Brown",
            "pts": 21.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jaylen Waddle",
            "pts": 16.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Cooper Kupp",
            "pts": 17.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Tucker Kraft",
            "pts": 11.6
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Bijan Robinson",
            "pts": 19.1
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Isaac Guerendo",
            "pts": 25.8
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jalen Hurts",
            "pts": 24.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Chuba Hubbard",
            "pts": 18.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Tyrone Tracy Jr.",
            "pts": 16.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "A.J. Brown",
            "pts": 6.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Khalil Shakir",
            "pts": 19.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Cade Otton",
            "pts": 8.5
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Kyren Williams",
            "pts": 22.7
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "D'Andre Swift",
            "pts": 4.5
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jordan Love",
            "pts": 14.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Isiah Pacheco",
            "pts": 7.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Alexander Mattison",
            "pts": 0.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Justin Jefferson",
            "pts": 28.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Christian Watson",
            "pts": 11.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Travis Kelce",
            "pts": 7.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Dontayvion Wicks",
            "pts": 6.9
          },
          {
            "slot": "FLEX",
            "pos": "TE",
            "player": "Cole Kmet",
            "pts": 0.0
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Baker Mayfield",
            "pts": 19.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Isaiah Davis",
            "pts": 14.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Sincere McCormick",
            "pts": 9.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jaxon Smith-Njigba",
            "pts": 17.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jordan Addison",
            "pts": 35.3
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "T.J. Hockenson",
            "pts": 6.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DeVonta Smith",
            "pts": 11.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Quentin Johnston",
            "pts": 13.3
          }
        ]
      }
    ],
    "round1": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Aaron Rodgers",
            "pts": 29.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Breece Hall",
            "pts": 12.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Brian Robinson Jr.",
            "pts": 10.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jaxon Smith-Njigba",
            "pts": 13.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jordan Addison",
            "pts": 9.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "T.J. Hockenson",
            "pts": 7.7
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Sincere McCormick",
            "pts": 3.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DeVonta Smith",
            "pts": 22.5
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Lamar Jackson",
            "pts": 36.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Gus Edwards",
            "pts": 2.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Tank Bigsby",
            "pts": 4.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ja'Marr Chase",
            "pts": 13.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jauan Jennings",
            "pts": 4.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Trey McBride",
            "pts": 13.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Mike Evans",
            "pts": 32.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Drake London",
            "pts": 12.8
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Joe Burrow",
            "pts": 16.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Saquon Barkley",
            "pts": 8.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Aaron Jones",
            "pts": 17.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Puka Nacua",
            "pts": 14.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Deebo Samuel Sr.",
            "pts": 3.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dalton Schultz",
            "pts": 2.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tee Higgins",
            "pts": 17.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jerry Jeudy",
            "pts": 16.3
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Patrick Mahomes",
            "pts": 15.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Cook",
            "pts": 25.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Conner",
            "pts": 28.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "CeeDee Lamb",
            "pts": 22.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Brian Thomas Jr.",
            "pts": 27.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Juwan Johnson",
            "pts": 2.2
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "De'Von Achane",
            "pts": 11.1
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Tony Pollard",
            "pts": 8.5
          }
        ]
      }
    ],
    "round2": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Lamar Jackson",
            "pts": 20.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Tank Bigsby",
            "pts": 9.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jerome Ford",
            "pts": 21.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ja'Marr Chase",
            "pts": 19.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Drake London",
            "pts": 8.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Trey McBride",
            "pts": 3.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Mike Evans",
            "pts": 9.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jauan Jennings",
            "pts": 7.1
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jalen Hurts",
            "pts": 4.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kyren Williams",
            "pts": 19.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Chuba Hubbard",
            "pts": 30.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "A.J. Brown",
            "pts": 19.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Courtland Sutton",
            "pts": 7.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Pat Freiermuth",
            "pts": 3.1
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "D'Andre Swift",
            "pts": 6.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Khalil Shakir",
            "pts": 3.2
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Patrick Mahomes",
            "pts": 23.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "De'Von Achane",
            "pts": 28.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Conner",
            "pts": 24.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "CeeDee Lamb",
            "pts": 14.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Brian Thomas Jr.",
            "pts": 23.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dalton Kincaid",
            "pts": 3.5
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "James Cook",
            "pts": 26.1
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Rico Dowdle",
            "pts": 6.6
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jayden Daniels",
            "pts": 34.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Bijan Robinson",
            "pts": 23.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Chase Brown",
            "pts": 12.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Nico Collins",
            "pts": 9.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Cooper Kupp",
            "pts": 3.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Brenton Strange",
            "pts": 1.2
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Kendre Miller",
            "pts": 4.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Terry McLaurin",
            "pts": 14.5
          }
        ]
      }
    ],
    "round3": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Lamar Jackson",
            "pts": 29.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Tank Bigsby",
            "pts": 3.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jerome Ford",
            "pts": 2.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ja'Marr Chase",
            "pts": 14.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ladd McConkey",
            "pts": 25.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Trey McBride",
            "pts": 24.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Mike Evans",
            "pts": 25.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Drake London",
            "pts": 14.1
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Patrick Mahomes",
            "pts": 26.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Cook",
            "pts": 11.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rico Dowdle",
            "pts": 9.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Brian Thomas Jr.",
            "pts": 20.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Kayshon Boutte",
            "pts": 4.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dalton Kincaid",
            "pts": 3.4
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "De'Von Achane",
            "pts": 4.8
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "James Conner",
            "pts": 1.8
          }
        ]
      }
    ],
    "thirdPlace": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jayden Daniels",
            "pts": 31.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Bijan Robinson",
            "pts": 23.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Chase Brown",
            "pts": 11.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Nico Collins",
            "pts": 7.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Cooper Kupp",
            "pts": 3.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Tucker Kraft",
            "pts": 6.3
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Isaac Guerendo",
            "pts": 11.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Terry McLaurin",
            "pts": 1.0
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Sam Darnold",
            "pts": 24.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kyren Williams",
            "pts": 14.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "D'Andre Swift",
            "pts": 10.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "A.J. Brown",
            "pts": 11.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Courtland Sutton",
            "pts": 14.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Payne Durham",
            "pts": 10.6
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Tyrone Tracy Jr.",
            "pts": 8.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Khalil Shakir",
            "pts": 4.0
          }
        ]
      }
    ]
  },
  "2023": {
    "Week 1": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Deshaun Watson",
            "pts": 20.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Joe Mixon",
            "pts": 8.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jahmyr Gibbs",
            "pts": 7.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Justin Jefferson",
            "pts": 19.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DeAndre Hopkins",
            "pts": 10.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "David Njoku",
            "pts": 3.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Drake London",
            "pts": 0.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Brandon Aiyuk",
            "pts": 28.9
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Josh Allen",
            "pts": 9.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Conner",
            "pts": 9.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "AJ Dillon",
            "pts": 4.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tyreek Hill",
            "pts": 39.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "A.J. Brown",
            "pts": 11.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Darren Waller",
            "pts": 5.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Keenan Allen",
            "pts": 11.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Michael Thomas",
            "pts": 8.6
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Trevor Lawrence",
            "pts": 17.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Tony Pollard",
            "pts": 21.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "J.K. Dobbins",
            "pts": 10.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Deebo Samuel",
            "pts": 8.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Calvin Ridley",
            "pts": 20.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Tyler Higbee",
            "pts": 6.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Stefon Diggs",
            "pts": 21.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Terry McLaurin",
            "pts": 4.1
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Russell Wilson",
            "pts": 15.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Aaron Jones",
            "pts": 25.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kenneth Walker III",
            "pts": 8.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Amon-Ra St. Brown",
            "pts": 16.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DJ Moore",
            "pts": 3.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Juwan Johnson",
            "pts": 5.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Mike Williams",
            "pts": 6.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Christian Kirk",
            "pts": 1.4
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Joe Burrow",
            "pts": 3.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Miles Sanders",
            "pts": 9.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "David Montgomery",
            "pts": 13.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Davante Adams",
            "pts": 9.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Mike Evans",
            "pts": 15.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Evan Engram",
            "pts": 7.4
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Saquon Barkley",
            "pts": 7.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Courtland Sutton",
            "pts": 11.2
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Dak Prescott",
            "pts": 6.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Najee Harris",
            "pts": 4.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Travis Etienne Jr.",
            "pts": 18.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ja'Marr Chase",
            "pts": 6.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Amari Cooper",
            "pts": 5.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Pat Freiermuth",
            "pts": 6.8
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Rachaad White",
            "pts": 5.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tyler Lockett",
            "pts": 2.0
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Kirk Cousins",
            "pts": 16.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Cam Akers",
            "pts": 8.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Javonte Williams",
            "pts": 7.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DK Metcalf",
            "pts": 12.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Michael Pittman Jr.",
            "pts": 19.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dalton Schultz",
            "pts": 1.4
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Brian Robinson Jr.",
            "pts": 13.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Van Jefferson",
            "pts": 4.4
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Fields",
            "pts": 14.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Nick Chubb",
            "pts": 14.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rhamondre Stevenson",
            "pts": 11.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "CeeDee Lamb",
            "pts": 9.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Diontae Johnson",
            "pts": 6.3
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Isaiah Likely",
            "pts": 0.9
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Khalil Herbert",
            "pts": 9.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jahan Dotson",
            "pts": 6.5
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Patrick Mahomes",
            "pts": 19.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Christian McCaffrey",
            "pts": 24.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jamaal Williams",
            "pts": 6.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jaylen Waddle",
            "pts": 9.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Allen Lazard",
            "pts": 5.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dallas Goedert",
            "pts": 0.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Isiah Pacheco",
            "pts": 7.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Odell Beckham Jr.",
            "pts": 4.7
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Lamar Jackson",
            "pts": 6.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Bijan Robinson",
            "pts": 17.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Cook",
            "pts": 8.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Garrett Wilson",
            "pts": 11.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DeVonta Smith",
            "pts": 14.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "T.J. Hockenson",
            "pts": 7.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Marquise Brown",
            "pts": 7.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jordan Addison",
            "pts": 14.1
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Herbert",
            "pts": 20.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Austin Ekeler",
            "pts": 24.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Dameon Pierce",
            "pts": 5.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Olave",
            "pts": 15.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tee Higgins",
            "pts": 0.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "George Kittle",
            "pts": 3.4
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Dalvin Cook",
            "pts": 7.4
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Raheem Mostert",
            "pts": 12.0
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jalen Hurts",
            "pts": 12.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Derrick Henry",
            "pts": 12.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Josh Jacobs",
            "pts": 8.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Godwin",
            "pts": 7.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Skyy Moore",
            "pts": 0.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Kyle Pitts",
            "pts": 5.4
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Alexander Mattison",
            "pts": 11.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jakobi Meyers",
            "pts": 24.6
          }
        ]
      }
    ],
    "Week 2": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Trevor Lawrence",
            "pts": 9.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "D'Andre Swift",
            "pts": 25.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Joshua Kelley",
            "pts": 3.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Stefon Diggs",
            "pts": 10.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Calvin Ridley",
            "pts": 4.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Tyler Higbee",
            "pts": 2.7
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Tony Pollard",
            "pts": 16.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Deebo Samuel",
            "pts": 19.1
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Deshaun Watson",
            "pts": 11.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Joe Mixon",
            "pts": 11.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jahmyr Gibbs",
            "pts": 9.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Justin Jefferson",
            "pts": 19.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DeAndre Hopkins",
            "pts": 6.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "David Njoku",
            "pts": 4.8
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Breece Hall",
            "pts": 0.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Brandon Aiyuk",
            "pts": 5.8
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Josh Allen",
            "pts": 23.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Conner",
            "pts": 16.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "AJ Dillon",
            "pts": 6.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tyreek Hill",
            "pts": 12.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "A.J. Brown",
            "pts": 4.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Darren Waller",
            "pts": 10.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Keenan Allen",
            "pts": 27.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Michael Thomas",
            "pts": 9.0
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Joe Burrow",
            "pts": 15.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Saquon Barkley",
            "pts": 24.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "David Montgomery",
            "pts": 11.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Davante Adams",
            "pts": 17.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Mike Evans",
            "pts": 26.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Evan Engram",
            "pts": 8.7
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Miles Sanders",
            "pts": 6.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Courtland Sutton",
            "pts": 9.1
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jared Goff",
            "pts": 22.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kenneth Walker III",
            "pts": 17.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Tyler Allgeier",
            "pts": 4.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Amon-Ra St. Brown",
            "pts": 11.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DJ Moore",
            "pts": 13.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Travis Kelce",
            "pts": 10.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Mike Williams",
            "pts": 12.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Puka Nacua",
            "pts": 22.6
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Kirk Cousins",
            "pts": 28.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Javonte Williams",
            "pts": 6.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Brian Robinson Jr.",
            "pts": 27.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DK Metcalf",
            "pts": 10.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Michael Pittman Jr.",
            "pts": 9.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Hunter Henry",
            "pts": 14.2
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Zack Moss",
            "pts": 18.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Kendrick Bourne",
            "pts": 4.9
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Daniel Jones",
            "pts": 30.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Najee Harris",
            "pts": 4.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Travis Etienne Jr.",
            "pts": 5.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ja'Marr Chase",
            "pts": 5.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Amari Cooper",
            "pts": 12.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Pat Freiermuth",
            "pts": 0.7
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Rachaad White",
            "pts": 18.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tyler Lockett",
            "pts": 21.9
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Patrick Mahomes",
            "pts": 21.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Christian McCaffrey",
            "pts": 21.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jamaal Williams",
            "pts": 2.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jaylen Waddle",
            "pts": 10.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Odell Beckham Jr.",
            "pts": 4.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Luke Musgrave",
            "pts": 3.5
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Isiah Pacheco",
            "pts": 7.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Gabe Davis",
            "pts": 18.2
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Fields",
            "pts": 14.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Nick Chubb",
            "pts": 6.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rhamondre Stevenson",
            "pts": 13.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "CeeDee Lamb",
            "pts": 19.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Nico Collins",
            "pts": 24.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Mark Andrews",
            "pts": 13.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Khalil Herbert",
            "pts": 6.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jahan Dotson",
            "pts": 3.7
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Herbert",
            "pts": 22.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Dameon Pierce",
            "pts": 4.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Raheem Mostert",
            "pts": 25.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Olave",
            "pts": 11.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tee Higgins",
            "pts": 24.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "George Kittle",
            "pts": 4.5
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Dalvin Cook",
            "pts": -0.3
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Gus Edwards",
            "pts": 12.2
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Lamar Jackson",
            "pts": 22.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Bijan Robinson",
            "pts": 19.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Cook",
            "pts": 17.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DeVonta Smith",
            "pts": 21.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jordan Addison",
            "pts": 14.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "T.J. Hockenson",
            "pts": 22.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Garrett Wilson",
            "pts": 15.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Zay Flowers",
            "pts": 8.8
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jalen Hurts",
            "pts": 25.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Derrick Henry",
            "pts": 17.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Josh Jacobs",
            "pts": 7.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jerry Jeudy",
            "pts": 4.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Godwin",
            "pts": 8.3
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Kyle Pitts",
            "pts": 2.5
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Alexander Mattison",
            "pts": 3.4
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Jerick McKinnon",
            "pts": 3.7
          }
        ]
      }
    ],
    "Week 3": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Deshaun Watson",
            "pts": 21.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Joe Mixon",
            "pts": 13.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jahmyr Gibbs",
            "pts": 8.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Justin Jefferson",
            "pts": 24.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DeAndre Hopkins",
            "pts": 6.3
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "David Njoku",
            "pts": 4.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Breece Hall",
            "pts": 3.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Drake London",
            "pts": 4.1
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Joe Burrow",
            "pts": 8.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Miles Sanders",
            "pts": 14.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Samaje Perine",
            "pts": 3.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "George Pickens",
            "pts": 9.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Courtland Sutton",
            "pts": 15.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Evan Engram",
            "pts": 10.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Davante Adams",
            "pts": 35.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Mike Evans",
            "pts": 14.5
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Kirk Cousins",
            "pts": 25.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Javonte Williams",
            "pts": 7.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Brian Robinson Jr.",
            "pts": 7.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DK Metcalf",
            "pts": 14.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Michael Pittman Jr.",
            "pts": 12.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Hunter Henry",
            "pts": 2.7
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Zack Moss",
            "pts": 21.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Kendrick Bourne",
            "pts": 6.6
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Trevor Lawrence",
            "pts": 14.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Tony Pollard",
            "pts": 13.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Joshua Kelley",
            "pts": 2.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Deebo Samuel",
            "pts": 22.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Calvin Ridley",
            "pts": 5.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Sam LaPorta",
            "pts": 18.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Stefon Diggs",
            "pts": 15.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Terry McLaurin",
            "pts": 7.1
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Patrick Mahomes",
            "pts": 25.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Christian McCaffrey",
            "pts": 20.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Isiah Pacheco",
            "pts": 14.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Gabe Davis",
            "pts": 9.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Allen Lazard",
            "pts": 5.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dallas Goedert",
            "pts": 6.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Adam Thielen",
            "pts": 26.0
          },
          {
            "slot": "FLEX",
            "pos": "TE",
            "player": "Luke Musgrave",
            "pts": 7.9
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Josh Allen",
            "pts": 21.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "AJ Dillon",
            "pts": 3.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kyren Williams",
            "pts": 7.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tyreek Hill",
            "pts": 26.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Keenan Allen",
            "pts": 36.3
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Darren Waller",
            "pts": 3.5
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "James Conner",
            "pts": 18.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "A.J. Brown",
            "pts": 17.6
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Herbert",
            "pts": 29.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Raheem Mostert",
            "pts": 41.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Gus Edwards",
            "pts": 5.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Olave",
            "pts": 14.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tee Higgins",
            "pts": 3.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "George Kittle",
            "pts": 12.5
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Dalvin Cook",
            "pts": 4.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jayden Reed",
            "pts": 7.8
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jared Goff",
            "pts": 17.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kenneth Walker III",
            "pts": 29.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Tyler Allgeier",
            "pts": 3.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Amon-Ra St. Brown",
            "pts": 15.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Mike Williams",
            "pts": 21.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Travis Kelce",
            "pts": 16.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DJ Moore",
            "pts": 11.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Puka Nacua",
            "pts": 9.7
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jalen Hurts",
            "pts": 19.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Derrick Henry",
            "pts": 2.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Josh Jacobs",
            "pts": 9.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jerry Jeudy",
            "pts": 10.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Godwin",
            "pts": 6.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Kyle Pitts",
            "pts": 6.2
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Alexander Mattison",
            "pts": 15.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Kenneth Gainwell",
            "pts": 5.3
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Tua Tagovailoa",
            "pts": 28.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Najee Harris",
            "pts": 6.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Travis Etienne Jr.",
            "pts": 15.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ja'Marr Chase",
            "pts": 20.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Amari Cooper",
            "pts": 21.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Pat Freiermuth",
            "pts": 11.6
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Rachaad White",
            "pts": 5.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tyler Lockett",
            "pts": 6.9
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Lamar Jackson",
            "pts": 28.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Bijan Robinson",
            "pts": 8.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Cook",
            "pts": 12.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Garrett Wilson",
            "pts": 7.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jordan Addison",
            "pts": 8.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "T.J. Hockenson",
            "pts": 9.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DeVonta Smith",
            "pts": 4.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Zay Flowers",
            "pts": 9.0
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Fields",
            "pts": 10.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rhamondre Stevenson",
            "pts": 6.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jerome Ford",
            "pts": 18.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "CeeDee Lamb",
            "pts": 8.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Nico Collins",
            "pts": 4.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Mark Andrews",
            "pts": 5.5
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Khalil Herbert",
            "pts": 2.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jahan Dotson",
            "pts": 3.1
          }
        ]
      }
    ],
    "Week 4": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Kirk Cousins",
            "pts": 9.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Alvin Kamara",
            "pts": 14.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Zack Moss",
            "pts": 9.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DK Metcalf",
            "pts": 10.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Michael Pittman Jr.",
            "pts": 4.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Zach Ertz",
            "pts": 8.3
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Javonte Williams",
            "pts": 2.4
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Brian Robinson Jr.",
            "pts": 12.1
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Russell Wilson",
            "pts": 22.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Joe Mixon",
            "pts": 8.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jahmyr Gibbs",
            "pts": 7.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Justin Jefferson",
            "pts": 23.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DeAndre Hopkins",
            "pts": 8.3
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "David Njoku",
            "pts": 7.6
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Breece Hall",
            "pts": 8.4
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "De'Von Achane",
            "pts": 25.5
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Joe Burrow",
            "pts": 4.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Miles Sanders",
            "pts": 4.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "David Montgomery",
            "pts": 33.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "George Pickens",
            "pts": 4.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Courtland Sutton",
            "pts": 10.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Evan Engram",
            "pts": 9.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Davante Adams",
            "pts": 11.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Mike Evans",
            "pts": 5.5
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Patrick Mahomes",
            "pts": 13.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Christian McCaffrey",
            "pts": 45.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Isiah Pacheco",
            "pts": 23.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jaylen Waddle",
            "pts": 6.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Gabe Davis",
            "pts": 13.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Luke Musgrave",
            "pts": 0.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Christian Watson",
            "pts": 9.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Adam Thielen",
            "pts": 11.7
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Trevor Lawrence",
            "pts": 16.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Tony Pollard",
            "pts": 7.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "D'Andre Swift",
            "pts": 15.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Calvin Ridley",
            "pts": 10.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Terry McLaurin",
            "pts": 18.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Sam LaPorta",
            "pts": 7.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Stefon Diggs",
            "pts": 33.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Deebo Samuel",
            "pts": 0.6
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Herbert",
            "pts": 23.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Austin Ekeler",
            "pts": 0.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Raheem Mostert",
            "pts": 4.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Olave",
            "pts": 0.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tee Higgins",
            "pts": 2.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "George Kittle",
            "pts": 1.4
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Dameon Pierce",
            "pts": 11.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jayden Reed",
            "pts": 9.0
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Josh Allen",
            "pts": 36.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Conner",
            "pts": 6.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kyren Williams",
            "pts": 26.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tyreek Hill",
            "pts": 8.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Keenan Allen",
            "pts": 10.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Darren Waller",
            "pts": 3.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "A.J. Brown",
            "pts": 34.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Joshua Palmer",
            "pts": 9.2
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jalen Hurts",
            "pts": 24.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Derrick Henry",
            "pts": 23.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Josh Jacobs",
            "pts": 23.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jerry Jeudy",
            "pts": 6.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Godwin",
            "pts": 15.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Kyle Pitts",
            "pts": 3.1
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Alexander Mattison",
            "pts": 10.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jakobi Meyers",
            "pts": 4.3
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Brock Purdy",
            "pts": 21.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Aaron Jones",
            "pts": 1.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kenneth Walker III",
            "pts": 13.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Amon-Ra St. Brown",
            "pts": 14.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Christian Kirk",
            "pts": 12.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Travis Kelce",
            "pts": 9.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DJ Moore",
            "pts": 23.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Puka Nacua",
            "pts": 26.8
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Anthony Richardson",
            "pts": 29.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Bijan Robinson",
            "pts": 16.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Cook",
            "pts": 14.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DeVonta Smith",
            "pts": 11.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tutu Atwell",
            "pts": 4.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "T.J. Hockenson",
            "pts": 3.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Marquise Brown",
            "pts": 13.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Zay Flowers",
            "pts": 6.5
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Tua Tagovailoa",
            "pts": 13.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Najee Harris",
            "pts": 10.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Travis Etienne Jr.",
            "pts": 8.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ja'Marr Chase",
            "pts": 10.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Amari Cooper",
            "pts": 2.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Pat Freiermuth",
            "pts": 2.2
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Rachaad White",
            "pts": 9.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tyler Lockett",
            "pts": 7.4
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Fields",
            "pts": 27.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rhamondre Stevenson",
            "pts": 5.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jerome Ford",
            "pts": 7.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "CeeDee Lamb",
            "pts": 12.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Nico Collins",
            "pts": 32.3
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Mark Andrews",
            "pts": 22.5
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Khalil Herbert",
            "pts": 20.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tank Dell",
            "pts": 3.4
          }
        ]
      }
    ],
    "Week 5": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Russell Wilson",
            "pts": 18.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Joe Mixon",
            "pts": 11.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "De'Von Achane",
            "pts": 21.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Justin Jefferson",
            "pts": 4.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Brandon Aiyuk",
            "pts": 7.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Jake Ferguson",
            "pts": 4.3
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Breece Hall",
            "pts": 26.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DeAndre Hopkins",
            "pts": 18.0
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jordan Love",
            "pts": 4.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Christian McCaffrey",
            "pts": 12.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Isiah Pacheco",
            "pts": 12.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jaylen Waddle",
            "pts": 12.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Christian Watson",
            "pts": 10.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Mark Andrews",
            "pts": 9.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Gabe Davis",
            "pts": 19.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Adam Thielen",
            "pts": 22.2
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Joshua Dobbs",
            "pts": 8.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Raheem Mostert",
            "pts": 14.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Gus Edwards",
            "pts": 4.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Olave",
            "pts": 8.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jayden Reed",
            "pts": 1.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "George Kittle",
            "pts": 26.2
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Dameon Pierce",
            "pts": 8.7
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Dalvin Cook",
            "pts": 2.3
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Kirk Cousins",
            "pts": 19.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Alvin Kamara",
            "pts": 17.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Brian Robinson Jr.",
            "pts": 6.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Cooper Kupp",
            "pts": 15.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Michael Pittman Jr.",
            "pts": 7.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Zach Ertz",
            "pts": 8.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Jonathan Taylor",
            "pts": 3.9
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Matt Breida",
            "pts": 2.9
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jalen Hurts",
            "pts": 27.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Derrick Henry",
            "pts": 7.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Josh Jacobs",
            "pts": 17.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jerry Jeudy",
            "pts": 8.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jakobi Meyers",
            "pts": 17.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Kyle Pitts",
            "pts": 12.2
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Alexander Mattison",
            "pts": 11.6
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Kenneth Gainwell",
            "pts": 2.9
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "C.J. Stroud",
            "pts": 14.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Miles Sanders",
            "pts": 1.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "David Montgomery",
            "pts": 19.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Davante Adams",
            "pts": 6.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "George Pickens",
            "pts": 23.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Evan Engram",
            "pts": 4.8
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Samaje Perine",
            "pts": 9.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Courtland Sutton",
            "pts": 1.8
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Lamar Jackson",
            "pts": 9.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Bijan Robinson",
            "pts": 10.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Cook",
            "pts": 3.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DeVonta Smith",
            "pts": 1.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Zay Flowers",
            "pts": 9.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "T.J. Hockenson",
            "pts": 7.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Garrett Wilson",
            "pts": 6.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Marquise Brown",
            "pts": 14.1
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Trevor Lawrence",
            "pts": 15.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Tony Pollard",
            "pts": 6.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "D'Andre Swift",
            "pts": 13.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Stefon Diggs",
            "pts": 20.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Terry McLaurin",
            "pts": 6.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Sam LaPorta",
            "pts": 18.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Deebo Samuel",
            "pts": 10.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Calvin Ridley",
            "pts": 17.1
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Patrick Mahomes",
            "pts": 19.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rhamondre Stevenson",
            "pts": 2.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Khalil Herbert",
            "pts": 7.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "CeeDee Lamb",
            "pts": 6.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Nico Collins",
            "pts": 5.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dallas Goedert",
            "pts": 21.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Romeo Doubs",
            "pts": 0.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tank Dell",
            "pts": 6.8
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Josh Allen",
            "pts": 27.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Conner",
            "pts": 4.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kyren Williams",
            "pts": 6.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tyreek Hill",
            "pts": 28.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "A.J. Brown",
            "pts": 15.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Darren Waller",
            "pts": 12.6
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "AJ Dillon",
            "pts": 13.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Michael Thomas",
            "pts": 8.5
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Tua Tagovailoa",
            "pts": 16.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Najee Harris",
            "pts": 4.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Travis Etienne Jr.",
            "pts": 34.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ja'Marr Chase",
            "pts": 44.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Robert Woods",
            "pts": 4.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Jonnu Smith",
            "pts": 7.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Zay Jones",
            "pts": 9.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Michael Wilson",
            "pts": 2.3
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Brock Purdy",
            "pts": 26.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jaleel McLaughlin",
            "pts": 16.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Patrick Taylor",
            "pts": 1.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DJ Moore",
            "pts": 45.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Christian Kirk",
            "pts": 11.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Travis Kelce",
            "pts": 17.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Puka Nacua",
            "pts": 16.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Josh Reynolds",
            "pts": 15.6
          }
        ]
      }
    ],
    "Week 6": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Herbert",
            "pts": 18.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Austin Ekeler",
            "pts": 8.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Raheem Mostert",
            "pts": 32.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Olave",
            "pts": 13.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jonathan Mingo",
            "pts": 3.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Cole Kmet",
            "pts": 1.9
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Dameon Pierce",
            "pts": 3.4
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Gus Edwards",
            "pts": 5.8
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Russell Wilson",
            "pts": 6.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Joe Mixon",
            "pts": 7.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Tyler Allgeier",
            "pts": 5.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Drake London",
            "pts": 17.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Brandon Aiyuk",
            "pts": 9.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Jake Ferguson",
            "pts": 2.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Breece Hall",
            "pts": 17.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DeAndre Hopkins",
            "pts": 2.5
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jared Goff",
            "pts": 22.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Christian McCaffrey",
            "pts": 12.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Isiah Pacheco",
            "pts": 12.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jaylen Waddle",
            "pts": 14.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Gabe Davis",
            "pts": 1.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Mark Andrews",
            "pts": 8.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Adam Thielen",
            "pts": 23.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Josh Downs",
            "pts": 10.6
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jalen Hurts",
            "pts": 19.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Derrick Henry",
            "pts": 18.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Josh Jacobs",
            "pts": 10.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jerry Jeudy",
            "pts": 2.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jakobi Meyers",
            "pts": 14.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Kyle Pitts",
            "pts": 12.3
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Alexander Mattison",
            "pts": 9.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Chris Godwin",
            "pts": 10.7
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Kirk Cousins",
            "pts": 8.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jonathan Taylor",
            "pts": 9.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Alvin Kamara",
            "pts": 13.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Cooper Kupp",
            "pts": 24.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DK Metcalf",
            "pts": 8.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Zach Ertz",
            "pts": 3.2
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Brian Robinson Jr.",
            "pts": 12.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Michael Pittman Jr.",
            "pts": 15.4
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Lamar Jackson",
            "pts": 17.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Bijan Robinson",
            "pts": 10.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Cook",
            "pts": 7.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jordan Addison",
            "pts": 10.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Zay Flowers",
            "pts": 14.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "T.J. Hockenson",
            "pts": 8.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DeVonta Smith",
            "pts": 6.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Marquise Brown",
            "pts": 5.4
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Joe Burrow",
            "pts": 13.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Saquon Barkley",
            "pts": 11.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "David Montgomery",
            "pts": 3.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Courtland Sutton",
            "pts": 12.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "K.J. Osborn",
            "pts": 6.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Evan Engram",
            "pts": 7.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Davante Adams",
            "pts": 3.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Mike Evans",
            "pts": 6.9
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Patrick Mahomes",
            "pts": 17.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rhamondre Stevenson",
            "pts": 15.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jerome Ford",
            "pts": 10.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "CeeDee Lamb",
            "pts": 15.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Nico Collins",
            "pts": 10.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dallas Goedert",
            "pts": 6.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jahan Dotson",
            "pts": 0.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jaxon Smith-Njigba",
            "pts": 6.8
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Trevor Lawrence",
            "pts": 14.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Tony Pollard",
            "pts": 14.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "D'Andre Swift",
            "pts": 13.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Deebo Samuel",
            "pts": 1.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Terry McLaurin",
            "pts": 11.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Sam LaPorta",
            "pts": 5.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Stefon Diggs",
            "pts": 15.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Calvin Ridley",
            "pts": 4.6
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Tua Tagovailoa",
            "pts": 22.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Travis Etienne Jr.",
            "pts": 21.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rachaad White",
            "pts": 5.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ja'Marr Chase",
            "pts": 11.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Robert Woods",
            "pts": 7.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Jonnu Smith",
            "pts": 11.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Amari Cooper",
            "pts": 12.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tyler Lockett",
            "pts": 12.4
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Josh Allen",
            "pts": 13.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Ezekiel Elliott",
            "pts": 11.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kyren Williams",
            "pts": 21.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tyreek Hill",
            "pts": 25.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "A.J. Brown",
            "pts": 16.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Darren Waller",
            "pts": 6.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Keenan Allen",
            "pts": 18.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Michael Thomas",
            "pts": 7.0
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Matthew Stafford",
            "pts": 13.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kenneth Walker III",
            "pts": 16.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Tyjae Spears",
            "pts": 6.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DJ Moore",
            "pts": 7.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Christian Kirk",
            "pts": 12.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Travis Kelce",
            "pts": 16.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Amon-Ra St. Brown",
            "pts": 24.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Puka Nacua",
            "pts": 4.6
          }
        ]
      }
    ],
    "Week 7": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Deshaun Watson",
            "pts": -1.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jahmyr Gibbs",
            "pts": 23.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Tyler Allgeier",
            "pts": 12.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Drake London",
            "pts": 8.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Brandon Aiyuk",
            "pts": 8.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "David Njoku",
            "pts": 7.9
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Jeff Wilson Jr.",
            "pts": 0.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Kendrick Bourne",
            "pts": 13.3
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jalen Hurts",
            "pts": 23.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Josh Jacobs",
            "pts": 4.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Alexander Mattison",
            "pts": 5.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jerry Jeudy",
            "pts": 8.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jakobi Meyers",
            "pts": 14.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Kyle Pitts",
            "pts": 6.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Chris Godwin",
            "pts": 9.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Rondale Moore",
            "pts": 3.6
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Lamar Jackson",
            "pts": 33.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Bijan Robinson",
            "pts": 0.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Cook",
            "pts": 17.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jordan Addison",
            "pts": 27.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Zay Flowers",
            "pts": 9.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "T.J. Hockenson",
            "pts": 14.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DeVonta Smith",
            "pts": 6.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Marquise Brown",
            "pts": 6.4
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Herbert",
            "pts": 10.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Austin Ekeler",
            "pts": 5.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Raheem Mostert",
            "pts": 5.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Olave",
            "pts": 9.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Odell Beckham Jr.",
            "pts": 7.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Cole Kmet",
            "pts": 0.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Gus Edwards",
            "pts": 20.9
          },
          {
            "slot": "FLEX",
            "pos": "TE",
            "player": "George Kittle",
            "pts": 10.5
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Patrick Mahomes",
            "pts": 33.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rhamondre Stevenson",
            "pts": 11.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jerome Ford",
            "pts": 16.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Diontae Johnson",
            "pts": 10.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Romeo Doubs",
            "pts": 10.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dallas Goedert",
            "pts": 16.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jahan Dotson",
            "pts": 6.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jaxon Smith-Njigba",
            "pts": 14.3
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jordan Love",
            "pts": 15.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Christian McCaffrey",
            "pts": 21.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Isiah Pacheco",
            "pts": 14.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jaylen Waddle",
            "pts": 9.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Christian Watson",
            "pts": 4.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Mark Andrews",
            "pts": 20.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Gabe Davis",
            "pts": 1.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Josh Downs",
            "pts": 21.0
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Tua Tagovailoa",
            "pts": 10.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Travis Etienne Jr.",
            "pts": 21.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rachaad White",
            "pts": 12.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tyler Lockett",
            "pts": 5.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Michael Wilson",
            "pts": 4.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Jonnu Smith",
            "pts": 4.2
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Najee Harris",
            "pts": 14.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Amari Cooper",
            "pts": 3.2
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Kirk Cousins",
            "pts": 20.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jonathan Taylor",
            "pts": 19.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Alvin Kamara",
            "pts": 23.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Cooper Kupp",
            "pts": 5.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DK Metcalf",
            "pts": 0.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Zach Ertz",
            "pts": 3.4
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Brian Robinson Jr.",
            "pts": 8.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Michael Pittman Jr.",
            "pts": 15.3
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Matthew Stafford",
            "pts": 14.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Aaron Jones",
            "pts": 7.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kenneth Walker III",
            "pts": 12.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DJ Moore",
            "pts": 9.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Christian Kirk",
            "pts": 16.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Travis Kelce",
            "pts": 29.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Amon-Ra St. Brown",
            "pts": 16.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Puka Nacua",
            "pts": 19.4
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Brock Purdy",
            "pts": 12.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Saquon Barkley",
            "pts": 17.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Craig Reynolds",
            "pts": 3.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Davante Adams",
            "pts": 9.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Mike Evans",
            "pts": 17.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Evan Engram",
            "pts": 7.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "George Pickens",
            "pts": 13.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Courtland Sutton",
            "pts": 16.6
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Josh Allen",
            "pts": 24.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "AJ Dillon",
            "pts": 10.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Latavius Murray",
            "pts": 3.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Keenan Allen",
            "pts": 7.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Michael Thomas",
            "pts": 11.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Darren Waller",
            "pts": 19.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tyreek Hill",
            "pts": 20.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "A.J. Brown",
            "pts": 24.7
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Geno Smith",
            "pts": 13.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "D'Andre Swift",
            "pts": 9.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jaylen Warren",
            "pts": 9.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Calvin Ridley",
            "pts": 1.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Terry McLaurin",
            "pts": 12.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Sam LaPorta",
            "pts": 8.2
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "D'Onta Foreman",
            "pts": 31.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Stefon Diggs",
            "pts": 14.8
          }
        ]
      }
    ],
    "Week 8": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Lamar Jackson",
            "pts": 11.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Bijan Robinson",
            "pts": 12.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Cook",
            "pts": 7.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jordan Addison",
            "pts": 17.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Zay Flowers",
            "pts": 4.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "T.J. Hockenson",
            "pts": 17.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Garrett Wilson",
            "pts": 14.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DeVonta Smith",
            "pts": 19.4
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Russell Wilson",
            "pts": 17.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Joe Mixon",
            "pts": 18.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jahmyr Gibbs",
            "pts": 27.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Drake London",
            "pts": 8.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Brandon Aiyuk",
            "pts": 13.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "David Njoku",
            "pts": 15.7
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Breece Hall",
            "pts": 18.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DeAndre Hopkins",
            "pts": 32.8
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jalen Hurts",
            "pts": 27.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Derrick Henry",
            "pts": 14.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Josh Jacobs",
            "pts": 15.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Godwin",
            "pts": 15.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jakobi Meyers",
            "pts": 2.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Kyle Pitts",
            "pts": 5.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Alexander Mattison",
            "pts": 3.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jerry Jeudy",
            "pts": 12.0
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Patrick Mahomes",
            "pts": 5.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rhamondre Stevenson",
            "pts": 6.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jerome Ford",
            "pts": 4.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Diontae Johnson",
            "pts": 12.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Nico Collins",
            "pts": 5.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dallas Goedert",
            "pts": 5.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "CeeDee Lamb",
            "pts": 35.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tank Dell",
            "pts": 4.6
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Herbert",
            "pts": 23.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Austin Ekeler",
            "pts": 19.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Raheem Mostert",
            "pts": 10.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Olave",
            "pts": 7.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tee Higgins",
            "pts": 9.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "George Kittle",
            "pts": 19.4
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Dameon Pierce",
            "pts": 4.6
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Gus Edwards",
            "pts": 28.4
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Tua Tagovailoa",
            "pts": 21.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Travis Etienne Jr.",
            "pts": 24.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rachaad White",
            "pts": 14.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ja'Marr Chase",
            "pts": 20.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tyler Lockett",
            "pts": 18.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Jonnu Smith",
            "pts": 1.8
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Najee Harris",
            "pts": 8.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Amari Cooper",
            "pts": 11.9
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jared Goff",
            "pts": 12.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Christian McCaffrey",
            "pts": 26.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Isiah Pacheco",
            "pts": 5.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jaylen Waddle",
            "pts": 21.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Christian Watson",
            "pts": 4.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Mark Andrews",
            "pts": 12.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Adam Thielen",
            "pts": 11.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Josh Downs",
            "pts": 10.7
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "C.J. Stroud",
            "pts": 12.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Aaron Jones",
            "pts": 6.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kenneth Walker III",
            "pts": 7.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Christian Kirk",
            "pts": 6.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Puka Nacua",
            "pts": 5.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Travis Kelce",
            "pts": 8.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Amon-Ra St. Brown",
            "pts": 13.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DJ Moore",
            "pts": 7.5
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Kirk Cousins",
            "pts": 19.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jonathan Taylor",
            "pts": 10.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Alvin Kamara",
            "pts": 25.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Cooper Kupp",
            "pts": 4.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DK Metcalf",
            "pts": 9.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dalton Schultz",
            "pts": 1.5
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Javonte Williams",
            "pts": 17.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Michael Pittman Jr.",
            "pts": 14.0
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Josh Allen",
            "pts": 28.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "AJ Dillon",
            "pts": 7.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Latavius Murray",
            "pts": 1.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tyreek Hill",
            "pts": 21.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "A.J. Brown",
            "pts": 29.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Darren Waller",
            "pts": 0.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Keenan Allen",
            "pts": 10.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Michael Thomas",
            "pts": 8.8
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Joe Burrow",
            "pts": 27.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Saquon Barkley",
            "pts": 14.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Miles Sanders",
            "pts": 0.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Mike Evans",
            "pts": 11.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "George Pickens",
            "pts": 8.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Evan Engram",
            "pts": 11.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Davante Adams",
            "pts": 1.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Courtland Sutton",
            "pts": 9.9
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Trevor Lawrence",
            "pts": 14.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Tony Pollard",
            "pts": 6.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "D'Andre Swift",
            "pts": 13.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Calvin Ridley",
            "pts": 11.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Terry McLaurin",
            "pts": 14.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Sam LaPorta",
            "pts": 15.7
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "D'Onta Foreman",
            "pts": 4.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Stefon Diggs",
            "pts": 11.5
          }
        ]
      }
    ],
    "Week 9": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Sam Howell",
            "pts": 17.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Joe Mixon",
            "pts": 15.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Roschon Johnson",
            "pts": 2.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DeAndre Hopkins",
            "pts": 8.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DeMario Douglas",
            "pts": 8.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "David Njoku",
            "pts": 10.6
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Breece Hall",
            "pts": 8.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Tyler Allgeier",
            "pts": 10.0
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Patrick Mahomes",
            "pts": 15.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rhamondre Stevenson",
            "pts": 20.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jerome Ford",
            "pts": 10.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Diontae Johnson",
            "pts": 18.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Nico Collins",
            "pts": 12.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dallas Goedert",
            "pts": 6.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "CeeDee Lamb",
            "pts": 22.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jahan Dotson",
            "pts": 14.9
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Tua Tagovailoa",
            "pts": 12.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Najee Harris",
            "pts": 14.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rachaad White",
            "pts": 25.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ja'Marr Chase",
            "pts": 6.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tyler Lockett",
            "pts": 4.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Jonnu Smith",
            "pts": 18.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Amari Cooper",
            "pts": 22.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Brandin Cooks",
            "pts": 1.2
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Lamar Jackson",
            "pts": 11.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Bijan Robinson",
            "pts": 4.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Cook",
            "pts": 5.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DeVonta Smith",
            "pts": 12.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Zay Flowers",
            "pts": 1.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "T.J. Hockenson",
            "pts": 10.4
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Darrell Henderson Jr.",
            "pts": 4.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Garrett Wilson",
            "pts": 9.5
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "C.J. Stroud",
            "pts": 41.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Aaron Jones",
            "pts": 15.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kenneth Walker III",
            "pts": 2.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DJ Moore",
            "pts": 3.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Rashee Rice",
            "pts": 8.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Travis Kelce",
            "pts": 2.9
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Kareem Hunt",
            "pts": 9.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Puka Nacua",
            "pts": 4.7
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jalen Hurts",
            "pts": 25.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Derrick Henry",
            "pts": 17.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Josh Jacobs",
            "pts": 21.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Godwin",
            "pts": 2.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jakobi Meyers",
            "pts": 12.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Kyle Pitts",
            "pts": 7.6
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Alexander Mattison",
            "pts": 16.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Rondale Moore",
            "pts": 1.3
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Josh Allen",
            "pts": 24.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "AJ Dillon",
            "pts": 4.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Devin Singletary",
            "pts": 3.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tyreek Hill",
            "pts": 8.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "A.J. Brown",
            "pts": 16.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Logan Thomas",
            "pts": 5.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Keenan Allen",
            "pts": 11.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Michael Thomas",
            "pts": 0.0
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Herbert",
            "pts": 7.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Austin Ekeler",
            "pts": 20.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Raheem Mostert",
            "pts": 14.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Olave",
            "pts": 13.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tee Higgins",
            "pts": 15.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Cole Kmet",
            "pts": 20.5
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Gus Edwards",
            "pts": 17.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Marquez Valdes-Scantling",
            "pts": 3.2
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Geno Smith",
            "pts": 2.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Tony Pollard",
            "pts": 7.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jaylen Warren",
            "pts": 12.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Stefon Diggs",
            "pts": 19.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Terry McLaurin",
            "pts": 9.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Jake Ferguson",
            "pts": 18.6
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "D'Andre Swift",
            "pts": 8.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Elijah Moore",
            "pts": 2.4
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jordan Love",
            "pts": 13.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Isiah Pacheco",
            "pts": 6.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Justice Hill",
            "pts": 4.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jaylen Waddle",
            "pts": 6.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Gabe Davis",
            "pts": 0.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Mark Andrews",
            "pts": 12.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Adam Thielen",
            "pts": 5.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Josh Downs",
            "pts": 1.5
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Joe Burrow",
            "pts": 22.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Saquon Barkley",
            "pts": 12.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Keaontay Ingram",
            "pts": 0.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Mike Evans",
            "pts": 10.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "George Pickens",
            "pts": 0.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Tyler Higbee",
            "pts": 0.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Davante Adams",
            "pts": 5.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "K.J. Osborn",
            "pts": 2.7
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Derek Carr",
            "pts": 16.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jonathan Taylor",
            "pts": 15.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Alvin Kamara",
            "pts": 9.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Cooper Kupp",
            "pts": 5.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DK Metcalf",
            "pts": 5.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dalton Kincaid",
            "pts": 11.1
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Zack Moss",
            "pts": 2.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Michael Pittman Jr.",
            "pts": 10.4
          }
        ]
      }
    ],
    "Week 10": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Dak Prescott",
            "pts": 37.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Najee Harris",
            "pts": 17.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rachaad White",
            "pts": 16.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ja'Marr Chase",
            "pts": 20.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tyler Lockett",
            "pts": 19.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Jonnu Smith",
            "pts": 0.6
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Travis Etienne Jr.",
            "pts": 5.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Amari Cooper",
            "pts": 12.8
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Sam Howell",
            "pts": 24.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Joe Mixon",
            "pts": 11.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jahmyr Gibbs",
            "pts": 24.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DeAndre Hopkins",
            "pts": 4.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Drake London",
            "pts": 5.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "David Njoku",
            "pts": 8.8
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Breece Hall",
            "pts": 9.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Brandon Aiyuk",
            "pts": 13.0
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Will Levis",
            "pts": 5.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rhamondre Stevenson",
            "pts": 11.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jerome Ford",
            "pts": 11.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Diontae Johnson",
            "pts": 2.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jahan Dotson",
            "pts": 0.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Gerald Everett",
            "pts": 0.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "CeeDee Lamb",
            "pts": 34.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tank Dell",
            "pts": 15.9
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "C.J. Stroud",
            "pts": 19.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Aaron Jones",
            "pts": 7.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kenneth Walker III",
            "pts": 19.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Amon-Ra St. Brown",
            "pts": 26.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DJ Moore",
            "pts": 8.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Cade Otton",
            "pts": 2.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Kareem Hunt",
            "pts": 9.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Christian Kirk",
            "pts": 11.4
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Lamar Jackson",
            "pts": 12.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Bijan Robinson",
            "pts": 17.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Cook",
            "pts": 11.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Garrett Wilson",
            "pts": 13.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Zay Flowers",
            "pts": 9.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "T.J. Hockenson",
            "pts": 24.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Marquise Brown",
            "pts": 3.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jordan Addison",
            "pts": 8.9
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Josh Allen",
            "pts": 14.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Conner",
            "pts": 7.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Devin Singletary",
            "pts": 22.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Keenan Allen",
            "pts": 35.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Michael Thomas",
            "pts": 1.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Logan Thomas",
            "pts": 6.5
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "AJ Dillon",
            "pts": 8.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Curtis Samuel",
            "pts": 1.6
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Baker Mayfield",
            "pts": 18.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Derrick Henry",
            "pts": 2.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Josh Jacobs",
            "pts": 11.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Godwin",
            "pts": 7.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jakobi Meyers",
            "pts": 3.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Kyle Pitts",
            "pts": 4.5
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Alexander Mattison",
            "pts": 3.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jerry Jeudy",
            "pts": 5.0
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Trevor Lawrence",
            "pts": 2.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Tony Pollard",
            "pts": 5.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jaylen Warren",
            "pts": 18.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Deebo Samuel",
            "pts": 13.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Calvin Ridley",
            "pts": 3.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Sam LaPorta",
            "pts": 6.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Stefon Diggs",
            "pts": 4.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Terry McLaurin",
            "pts": 5.3
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Herbert",
            "pts": 28.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Austin Ekeler",
            "pts": 19.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Gus Edwards",
            "pts": 9.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Olave",
            "pts": 18.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Trenton Irwin",
            "pts": 12.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Cole Kmet",
            "pts": 7.1
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Tyjae Spears",
            "pts": 8.0
          },
          {
            "slot": "FLEX",
            "pos": "TE",
            "player": "George Kittle",
            "pts": 19.1
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Joe Burrow",
            "pts": 19.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Saquon Barkley",
            "pts": 6.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "David Montgomery",
            "pts": 17.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Mike Evans",
            "pts": 23.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "George Pickens",
            "pts": 6.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Evan Engram",
            "pts": 3.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Davante Adams",
            "pts": 11.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Courtland Sutton",
            "pts": 13.3
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jared Goff",
            "pts": 21.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Christian McCaffrey",
            "pts": 17.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rico Dowdle",
            "pts": 13.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Christian Watson",
            "pts": 3.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Gabe Davis",
            "pts": 8.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Mark Andrews",
            "pts": 5.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Adam Thielen",
            "pts": 7.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DJ Chark Jr.",
            "pts": 0.0
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Derek Carr",
            "pts": 5.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jonathan Taylor",
            "pts": 14.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Alvin Kamara",
            "pts": 15.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DK Metcalf",
            "pts": 13.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Michael Pittman Jr.",
            "pts": 12.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dalton Kincaid",
            "pts": 13.6
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Javonte Williams",
            "pts": 19.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Brian Robinson Jr.",
            "pts": 24.7
          }
        ]
      }
    ],
    "Week 11": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Sam Howell",
            "pts": 17.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Joe Mixon",
            "pts": 18.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jahmyr Gibbs",
            "pts": 18.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DeAndre Hopkins",
            "pts": 13.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Brandon Aiyuk",
            "pts": 24.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "David Njoku",
            "pts": 9.1
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Breece Hall",
            "pts": 15.8
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "De'Von Achane",
            "pts": 1.0
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "C.J. Stroud",
            "pts": 15.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Aaron Jones",
            "pts": 2.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kenneth Walker III",
            "pts": 2.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Amon-Ra St. Brown",
            "pts": 17.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DJ Moore",
            "pts": 19.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Travis Kelce",
            "pts": 11.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Christian Kirk",
            "pts": 6.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Puka Nacua",
            "pts": 16.2
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Josh Allen",
            "pts": 22.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Conner",
            "pts": 7.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Devin Singletary",
            "pts": 18.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tyreek Hill",
            "pts": 25.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Keenan Allen",
            "pts": 22.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Logan Thomas",
            "pts": 6.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "A.J. Brown",
            "pts": 1.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Curtis Samuel",
            "pts": 1.0
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Dak Prescott",
            "pts": 16.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Najee Harris",
            "pts": 4.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rachaad White",
            "pts": 14.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ja'Marr Chase",
            "pts": 8.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tyler Lockett",
            "pts": 7.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Chigoziem Okonkwo",
            "pts": 1.1
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Travis Etienne Jr.",
            "pts": 7.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Amari Cooper",
            "pts": 5.4
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Trevor Lawrence",
            "pts": 32.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Tony Pollard",
            "pts": 16.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "D'Andre Swift",
            "pts": 18.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Deebo Samuel",
            "pts": 7.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Calvin Ridley",
            "pts": 27.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Sam LaPorta",
            "pts": 5.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Stefon Diggs",
            "pts": 4.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Terry McLaurin",
            "pts": 6.8
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Patrick Mahomes",
            "pts": 16.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Khalil Herbert",
            "pts": 5.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jerome Ford",
            "pts": 10.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Diontae Johnson",
            "pts": 2.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Nico Collins",
            "pts": 10.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Tyler Conklin",
            "pts": 2.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "CeeDee Lamb",
            "pts": 13.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tank Dell",
            "pts": 24.9
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Joe Burrow",
            "pts": 8.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Saquon Barkley",
            "pts": 28.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "David Montgomery",
            "pts": 16.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Mike Evans",
            "pts": 12.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "George Pickens",
            "pts": 5.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Evan Engram",
            "pts": 4.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Davante Adams",
            "pts": 17.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Courtland Sutton",
            "pts": 14.6
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Lamar Jackson",
            "pts": 23.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Cook",
            "pts": 17.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Darrell Henderson Jr.",
            "pts": 10.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DeVonta Smith",
            "pts": 12.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Marquise Brown",
            "pts": 2.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "T.J. Hockenson",
            "pts": 7.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Garrett Wilson",
            "pts": -0.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jordan Addison",
            "pts": 5.9
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Joshua Dobbs",
            "pts": 16.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Javonte Williams",
            "pts": 6.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Brian Robinson Jr.",
            "pts": 16.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Cooper Kupp",
            "pts": 1.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DK Metcalf",
            "pts": 17.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dalton Kincaid",
            "pts": 7.6
          },
          {
            "slot": "FLEX",
            "pos": "TE",
            "player": "Dalton Schultz",
            "pts": 10.2
          },
          {
            "slot": "FLEX",
            "pos": "TE",
            "player": "Trey McBride",
            "pts": 6.8
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jalen Hurts",
            "pts": 18.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Derrick Henry",
            "pts": 4.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Josh Jacobs",
            "pts": 5.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Godwin",
            "pts": 6.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jakobi Meyers",
            "pts": 6.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Luke Musgrave",
            "pts": 4.8
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Alexander Mattison",
            "pts": 6.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jerry Jeudy",
            "pts": 8.3
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jared Goff",
            "pts": 13.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Christian McCaffrey",
            "pts": 18.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Isiah Pacheco",
            "pts": 9.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jaylen Waddle",
            "pts": 7.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Christian Watson",
            "pts": 9.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Mark Andrews",
            "pts": 3.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Gabe Davis",
            "pts": 0.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Adam Thielen",
            "pts": 11.4
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Herbert",
            "pts": 25.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Austin Ekeler",
            "pts": 6.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Gus Edwards",
            "pts": 20.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Marquez Valdes-Scantling",
            "pts": 0.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Trenton Irwin",
            "pts": 5.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Cole Kmet",
            "pts": 3.5
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Raheem Mostert",
            "pts": 9.8
          },
          {
            "slot": "FLEX",
            "pos": "TE",
            "player": "George Kittle",
            "pts": 18.9
          }
        ]
      }
    ],
    "Week 12": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Josh Allen",
            "pts": 39.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Conner",
            "pts": 5.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Devin Singletary",
            "pts": 10.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tyreek Hill",
            "pts": 20.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "A.J. Brown",
            "pts": 12.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Logan Thomas",
            "pts": 2.5
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Kyren Williams",
            "pts": 35.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Keenan Allen",
            "pts": 15.6
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Sam Howell",
            "pts": 17.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Joe Mixon",
            "pts": 7.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jahmyr Gibbs",
            "pts": 9.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DeAndre Hopkins",
            "pts": 6.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Brandon Aiyuk",
            "pts": 12.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "David Njoku",
            "pts": 8.9
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Breece Hall",
            "pts": 8.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DeMario Douglas",
            "pts": 7.9
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "C.J. Stroud",
            "pts": 30.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kareem Hunt",
            "pts": 2.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Zach Charbonnet",
            "pts": 7.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Amon-Ra St. Brown",
            "pts": 14.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DJ Moore",
            "pts": 16.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Travis Kelce",
            "pts": 12.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Christian Kirk",
            "pts": 10.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Puka Nacua",
            "pts": 4.7
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Trevor Lawrence",
            "pts": 24.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Tony Pollard",
            "pts": 19.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "D'Andre Swift",
            "pts": 8.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Deebo Samuel",
            "pts": 18.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Calvin Ridley",
            "pts": 19.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Sam LaPorta",
            "pts": 15.2
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Jaylen Warren",
            "pts": 5.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Stefon Diggs",
            "pts": 16.4
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Dak Prescott",
            "pts": 32.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Najee Harris",
            "pts": 15.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rachaad White",
            "pts": 12.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ja'Marr Chase",
            "pts": 10.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tyler Lockett",
            "pts": 4.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Jonnu Smith",
            "pts": 0.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Travis Etienne Jr.",
            "pts": 10.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Amari Cooper",
            "pts": 2.6
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Brock Purdy",
            "pts": 10.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Saquon Barkley",
            "pts": 5.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "David Montgomery",
            "pts": 15.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Davante Adams",
            "pts": 9.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Mike Evans",
            "pts": 22.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Evan Engram",
            "pts": 7.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "George Pickens",
            "pts": 7.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Courtland Sutton",
            "pts": 7.6
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Patrick Mahomes",
            "pts": 20.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Khalil Herbert",
            "pts": 4.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jerome Ford",
            "pts": 9.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "CeeDee Lamb",
            "pts": 15.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Nico Collins",
            "pts": 19.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Tyler Conklin",
            "pts": 5.3
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Rhamondre Stevenson",
            "pts": 19.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tank Dell",
            "pts": 14.7
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Joshua Dobbs",
            "pts": 4.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jonathan Taylor",
            "pts": 21.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Alvin Kamara",
            "pts": 13.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Cooper Kupp",
            "pts": 3.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DK Metcalf",
            "pts": 4.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dalton Kincaid",
            "pts": 6.3
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Javonte Williams",
            "pts": 8.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Michael Pittman Jr.",
            "pts": 15.7
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Lamar Jackson",
            "pts": 14.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Bijan Robinson",
            "pts": 25.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Cook",
            "pts": 13.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DeVonta Smith",
            "pts": 20.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Zay Flowers",
            "pts": 20.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "T.J. Hockenson",
            "pts": 13.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Garrett Wilson",
            "pts": 13.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jordan Addison",
            "pts": 6.9
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jared Goff",
            "pts": 18.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Christian McCaffrey",
            "pts": 28.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Isiah Pacheco",
            "pts": 23.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jaylen Waddle",
            "pts": 15.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Christian Watson",
            "pts": 17.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Cade Otton",
            "pts": 6.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Gabe Davis",
            "pts": 19.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Adam Thielen",
            "pts": 0.7
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jalen Hurts",
            "pts": 34.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Derrick Henry",
            "pts": 20.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Josh Jacobs",
            "pts": 20.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Godwin",
            "pts": 6.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jakobi Meyers",
            "pts": 17.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Luke Musgrave",
            "pts": 0.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Alexander Mattison",
            "pts": 7.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jerry Jeudy",
            "pts": 2.1
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Herbert",
            "pts": 13.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Austin Ekeler",
            "pts": 6.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Gus Edwards",
            "pts": 4.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Olave",
            "pts": 14.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Rashid Shaheed",
            "pts": 1.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "George Kittle",
            "pts": 3.4
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Raheem Mostert",
            "pts": 21.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jayden Reed",
            "pts": 13.0
          }
        ]
      }
    ],
    "Week 13": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Sam Howell",
            "pts": 19.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Joe Mixon",
            "pts": 26.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jahmyr Gibbs",
            "pts": 5.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DeAndre Hopkins",
            "pts": 16.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Brandon Aiyuk",
            "pts": 13.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "David Njoku",
            "pts": 2.7
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Breece Hall",
            "pts": 7.5
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "De'Von Achane",
            "pts": 23.8
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Trevor Lawrence",
            "pts": 25.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Tony Pollard",
            "pts": 15.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "D'Andre Swift",
            "pts": 3.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Deebo Samuel",
            "pts": 33.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Calvin Ridley",
            "pts": 5.3
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Sam LaPorta",
            "pts": 24.5
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Jaylen Warren",
            "pts": 6.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Terry McLaurin",
            "pts": 0.0
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Brock Purdy",
            "pts": 29.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "David Montgomery",
            "pts": 12.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Miles Sanders",
            "pts": 3.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Mike Evans",
            "pts": 25.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Courtland Sutton",
            "pts": 14.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Evan Engram",
            "pts": 18.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "George Pickens",
            "pts": 10.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Noah Brown",
            "pts": 0.0
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Kenny Pickett",
            "pts": 3.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Conner",
            "pts": 22.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Devin Singletary",
            "pts": 4.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tyreek Hill",
            "pts": 29.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Keenan Allen",
            "pts": 8.3
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Logan Thomas",
            "pts": 2.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Kyren Williams",
            "pts": 18.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "A.J. Brown",
            "pts": 15.4
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Matthew Stafford",
            "pts": 22.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Alvin Kamara",
            "pts": 25.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Zack Moss",
            "pts": 6.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Cooper Kupp",
            "pts": 12.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DK Metcalf",
            "pts": 34.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Trey McBride",
            "pts": 18.9
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Javonte Williams",
            "pts": 8.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Michael Pittman Jr.",
            "pts": 22.0
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "C.J. Stroud",
            "pts": 15.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Zach Charbonnet",
            "pts": 16.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "D'Ernest Johnson",
            "pts": 1.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Amon-Ra St. Brown",
            "pts": 11.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Puka Nacua",
            "pts": 21.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Travis Kelce",
            "pts": 10.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Christian Kirk",
            "pts": 3.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Rashee Rice",
            "pts": 10.4
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jared Goff",
            "pts": 16.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Christian McCaffrey",
            "pts": 20.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Isiah Pacheco",
            "pts": 19.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jaylen Waddle",
            "pts": 7.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Christian Watson",
            "pts": 24.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Cade Otton",
            "pts": 0.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Adam Thielen",
            "pts": 4.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Josh Downs",
            "pts": 2.9
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Dak Prescott",
            "pts": 28.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Najee Harris",
            "pts": 8.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rachaad White",
            "pts": 18.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ja'Marr Chase",
            "pts": 26.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tyler Lockett",
            "pts": 7.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Jonnu Smith",
            "pts": 2.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Travis Etienne Jr.",
            "pts": 15.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Amari Cooper",
            "pts": 4.9
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Herbert",
            "pts": 7.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Austin Ekeler",
            "pts": 3.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Raheem Mostert",
            "pts": 11.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Olave",
            "pts": 14.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jayden Reed",
            "pts": 3.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "George Kittle",
            "pts": 8.8
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Dameon Pierce",
            "pts": 10.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Curtis Samuel",
            "pts": 8.5
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Patrick Mahomes",
            "pts": 13.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rhamondre Stevenson",
            "pts": 2.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jerome Ford",
            "pts": 12.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "CeeDee Lamb",
            "pts": 26.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Nico Collins",
            "pts": 29.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Pat Freiermuth",
            "pts": 4.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tank Dell",
            "pts": 0.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jaxon Smith-Njigba",
            "pts": 9.7
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jalen Hurts",
            "pts": 23.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Derrick Henry",
            "pts": 24.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Antonio Gibson",
            "pts": 9.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Godwin",
            "pts": 7.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jonathan Mingo",
            "pts": 9.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Kyle Pitts",
            "pts": 7.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jerry Jeudy",
            "pts": 6.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jalen Guyton",
            "pts": 1.0
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Gardner Minshew",
            "pts": 18.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Bijan Robinson",
            "pts": 9.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Chuba Hubbard",
            "pts": 22.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DeVonta Smith",
            "pts": 20.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Marquise Brown",
            "pts": 0.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Taysom Hill",
            "pts": 14.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Garrett Wilson",
            "pts": 6.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Elijah Moore",
            "pts": 10.3
          }
        ]
      }
    ],
    "Week 14": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Brock Purdy",
            "pts": 21.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Saquon Barkley",
            "pts": 21.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "David Montgomery",
            "pts": 10.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Mike Evans",
            "pts": 1.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "George Pickens",
            "pts": 4.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Evan Engram",
            "pts": 27.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Davante Adams",
            "pts": 8.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Courtland Sutton",
            "pts": 13.7
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Russell Wilson",
            "pts": 15.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Joe Mixon",
            "pts": 20.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jahmyr Gibbs",
            "pts": 15.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Justin Jefferson",
            "pts": 3.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Brandon Aiyuk",
            "pts": 13.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "David Njoku",
            "pts": 24.1
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Breece Hall",
            "pts": 22.6
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "De'Von Achane",
            "pts": 9.6
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Joshua Dobbs",
            "pts": 4.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Tony Pollard",
            "pts": 13.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jaylen Warren",
            "pts": 6.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Stefon Diggs",
            "pts": 4.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Deebo Samuel",
            "pts": 30.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Sam LaPorta",
            "pts": 3.7
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "D'Andre Swift",
            "pts": 3.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Calvin Ridley",
            "pts": 7.3
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Matthew Stafford",
            "pts": 23.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Alvin Kamara",
            "pts": 12.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Zack Moss",
            "pts": 7.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Cooper Kupp",
            "pts": 21.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DK Metcalf",
            "pts": 12.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dalton Kincaid",
            "pts": 4.6
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Javonte Williams",
            "pts": 16.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Michael Pittman Jr.",
            "pts": 15.5
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Josh Allen",
            "pts": 20.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Ezekiel Elliott",
            "pts": 23.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kyren Williams",
            "pts": 12.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tyreek Hill",
            "pts": 8.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Keenan Allen",
            "pts": 9.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Isaiah Likely",
            "pts": 16.8
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Devin Singletary",
            "pts": 12.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "A.J. Brown",
            "pts": 11.9
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jordan Love",
            "pts": 8.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Christian McCaffrey",
            "pts": 15.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rico Dowdle",
            "pts": 11.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jaylen Waddle",
            "pts": 10.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Romeo Doubs",
            "pts": 5.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Cade Otton",
            "pts": 8.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Gabe Davis",
            "pts": 0.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Adam Thielen",
            "pts": 9.9
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "C.J. Stroud",
            "pts": 3.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Keaton Mitchell",
            "pts": 6.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Clyde Edwards-Helaire",
            "pts": 7.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Amon-Ra St. Brown",
            "pts": 3.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DJ Moore",
            "pts": 23.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Travis Kelce",
            "pts": 11.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Puka Nacua",
            "pts": 11.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Rashee Rice",
            "pts": 14.7
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Herbert",
            "pts": 1.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Austin Ekeler",
            "pts": 18.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Raheem Mostert",
            "pts": 22.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Olave",
            "pts": 10.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tee Higgins",
            "pts": 8.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "George Kittle",
            "pts": 15.1
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Dameon Pierce",
            "pts": 1.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jayden Reed",
            "pts": 16.5
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Dak Prescott",
            "pts": 17.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Najee Harris",
            "pts": 6.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rachaad White",
            "pts": 20.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ja'Marr Chase",
            "pts": 4.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tyler Lockett",
            "pts": 11.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Chigoziem Okonkwo",
            "pts": 7.1
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Travis Etienne Jr.",
            "pts": 15.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Amari Cooper",
            "pts": 9.2
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jalen Hurts",
            "pts": 8.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Derrick Henry",
            "pts": 17.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Josh Jacobs",
            "pts": 6.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Godwin",
            "pts": 7.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jakobi Meyers",
            "pts": 5.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Kyle Pitts",
            "pts": 13.2
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Alexander Mattison",
            "pts": 6.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jerry Jeudy",
            "pts": 2.6
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Patrick Mahomes",
            "pts": 13.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jerome Ford",
            "pts": 10.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Roschon Johnson",
            "pts": 0.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "CeeDee Lamb",
            "pts": 16.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Nico Collins",
            "pts": 1.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Pat Freiermuth",
            "pts": 5.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Diontae Johnson",
            "pts": 13.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jaxon Smith-Njigba",
            "pts": 4.5
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Lamar Jackson",
            "pts": 31.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Bijan Robinson",
            "pts": 17.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Chuba Hubbard",
            "pts": 10.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DeVonta Smith",
            "pts": 7.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Zay Flowers",
            "pts": 17.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "T.J. Hockenson",
            "pts": 7.8
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "James Cook",
            "pts": 22.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Garrett Wilson",
            "pts": 15.6
          }
        ]
      }
    ],
    "round1": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Will Levis",
            "pts": 14.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Austin Ekeler",
            "pts": 5.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Raheem Mostert",
            "pts": 17.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Olave",
            "pts": 0.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Odell Beckham Jr.",
            "pts": 1.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "George Kittle",
            "pts": 6.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tee Higgins",
            "pts": 20.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jayden Reed",
            "pts": 14.2
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Dak Prescott",
            "pts": 5.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Najee Harris",
            "pts": 1.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rachaad White",
            "pts": 20.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ja'Marr Chase",
            "pts": 8.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tyler Lockett",
            "pts": 3.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Chigoziem Okonkwo",
            "pts": 5.1
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Travis Etienne Jr.",
            "pts": 7.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Amari Cooper",
            "pts": 18.9
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Kyler Murray",
            "pts": 13.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Aaron Jones",
            "pts": 8.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Antonio Gibson",
            "pts": 6.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Amon-Ra St. Brown",
            "pts": 20.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DJ Moore",
            "pts": 7.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Travis Kelce",
            "pts": 5.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Puka Nacua",
            "pts": 7.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Rashee Rice",
            "pts": 19.6
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Trevor Lawrence",
            "pts": 14.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Tony Pollard",
            "pts": 6.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jaylen Warren",
            "pts": 9.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Stefon Diggs",
            "pts": 6.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Deebo Samuel",
            "pts": 19.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Sam LaPorta",
            "pts": 26.1
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "D'Andre Swift",
            "pts": 8.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Calvin Ridley",
            "pts": 6.4
          }
        ]
      }
    ],
    "round2": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Joe Flacco",
            "pts": 24.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Austin Ekeler",
            "pts": 10.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Raheem Mostert",
            "pts": 11.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Olave",
            "pts": 18.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tee Higgins",
            "pts": 22.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "George Kittle",
            "pts": 16.1
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Gus Edwards",
            "pts": 13.5
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Tyjae Spears",
            "pts": 9.2
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Josh Allen",
            "pts": 24.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Devin Singletary",
            "pts": 7.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kyren Williams",
            "pts": 16.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tyreek Hill",
            "pts": 14.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "A.J. Brown",
            "pts": 11.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Isaiah Likely",
            "pts": 7.1
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "James Conner",
            "pts": 19.7
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Ezekiel Elliott",
            "pts": 16.5
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Trevor Lawrence",
            "pts": 9.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Tony Pollard",
            "pts": 4.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Ty Chandler",
            "pts": 7.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Stefon Diggs",
            "pts": 5.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Calvin Ridley",
            "pts": 22.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Sam LaPorta",
            "pts": 3.3
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "D'Andre Swift",
            "pts": 15.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Deebo Samuel",
            "pts": 7.4
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Matthew Stafford",
            "pts": 20.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jonathan Taylor",
            "pts": 10.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Alvin Kamara",
            "pts": 6.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Cooper Kupp",
            "pts": 7.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DK Metcalf",
            "pts": 13.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Trey McBride",
            "pts": 6.1
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Javonte Williams",
            "pts": 9.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Alec Pierce",
            "pts": 4.5
          }
        ]
      }
    ],
    "round3": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Derek Carr",
            "pts": 15.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Austin Ekeler",
            "pts": 3.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Gus Edwards",
            "pts": 10.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Olave",
            "pts": 4.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tee Higgins",
            "pts": 2.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "George Kittle",
            "pts": 4.4
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Tyjae Spears",
            "pts": 4.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jayden Reed",
            "pts": 23.9
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Matthew Stafford",
            "pts": 12.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jonathan Taylor",
            "pts": 16.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Alvin Kamara",
            "pts": 5.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Cooper Kupp",
            "pts": 10.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DK Metcalf",
            "pts": 13.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Trey McBride",
            "pts": 7.8
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Javonte Williams",
            "pts": 7.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Michael Pittman Jr.",
            "pts": 7.1
          }
        ]
      }
    ],
    "thirdPlace": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jaren Hall",
            "pts": -1.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Tony Pollard",
            "pts": 5.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Ty Chandler",
            "pts": 7.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Stefon Diggs",
            "pts": 5.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Terry McLaurin",
            "pts": 14.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Sam LaPorta",
            "pts": 11.9
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "D'Andre Swift",
            "pts": 7.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Deebo Samuel",
            "pts": 15.7
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Josh Allen",
            "pts": 21.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Conner",
            "pts": 25.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kyren Williams",
            "pts": 29.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tyreek Hill",
            "pts": 10.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "A.J. Brown",
            "pts": 7.3
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Isaiah Likely",
            "pts": 17.2
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Ezekiel Elliott",
            "pts": 11.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Devin Singletary",
            "pts": 10.1
          }
        ]
      }
    ]
  },
  "2022": {
    "Week 1": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Josh Allen",
            "pts": 31.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Christian McCaffrey",
            "pts": 13.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Josh Jacobs",
            "pts": 7.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Deebo Samuel",
            "pts": 11.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Michael Thomas",
            "pts": 20.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Darren Waller",
            "pts": 9.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Rashod Bateman",
            "pts": 12.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Alec Pierce",
            "pts": 0.0
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Russell Wilson",
            "pts": 17.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jonathan Taylor",
            "pts": 25.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Conner",
            "pts": 14.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jerry Jeudy",
            "pts": 18.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Adam Thielen",
            "pts": 5.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Hunter Henry",
            "pts": 3.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Nick Chubb",
            "pts": 14.8
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Clyde Edwards-Helaire",
            "pts": 20.9
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Joe Burrow",
            "pts": 18.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Alvin Kamara",
            "pts": 6.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Javonte Williams",
            "pts": 14.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Keenan Allen",
            "pts": 8.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Darnell Mooney",
            "pts": 1.3
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "T.J. Hockenson",
            "pts": 5.8
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Miles Sanders",
            "pts": 17.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Christian Kirk",
            "pts": 14.7
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Kyler Murray",
            "pts": 20.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Najee Harris",
            "pts": 9.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Damien Harris",
            "pts": 6.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Stefon Diggs",
            "pts": 22.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DJ Moore",
            "pts": 6.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Zach Ertz",
            "pts": 10.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jaylen Waddle",
            "pts": 15.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Brandin Cooks",
            "pts": 11.7
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Aaron Rodgers",
            "pts": 3.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Derrick Henry",
            "pts": 8.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Cam Akers",
            "pts": 0.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tyreek Hill",
            "pts": 14.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DK Metcalf",
            "pts": 5.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Cole Kmet",
            "pts": 0.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Kareem Hunt",
            "pts": 21.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Marquise Brown",
            "pts": 12.3
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Patrick Mahomes",
            "pts": 34.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Leonard Fournette",
            "pts": 14.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Travis Etienne Jr.",
            "pts": 7.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Cooper Kupp",
            "pts": 25.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Diontae Johnson",
            "pts": 9.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dalton Schultz",
            "pts": 9.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Amari Cooper",
            "pts": 3.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jarvis Landry",
            "pts": 14.9
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Lamar Jackson",
            "pts": 20.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "D'Andre Swift",
            "pts": 25.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Chase Edmonds",
            "pts": 8.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Davante Adams",
            "pts": 25.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "A.J. Brown",
            "pts": 20.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Robert Tonyan",
            "pts": 5.1
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "AJ Dillon",
            "pts": 17.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Mike Williams",
            "pts": 2.0
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Herbert",
            "pts": 23.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Austin Ekeler",
            "pts": 9.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Antonio Gibson",
            "pts": 16.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Mike Evans",
            "pts": 15.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Courtland Sutton",
            "pts": 9.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Mark Andrews",
            "pts": 7.7
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Rashaad Penny",
            "pts": 7.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Elijah Moore",
            "pts": 7.4
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jalen Hurts",
            "pts": 24.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Aaron Jones",
            "pts": 9.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Devin Singletary",
            "pts": 7.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ja'Marr Chase",
            "pts": 23.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Michael Pittman Jr.",
            "pts": 22.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dallas Goedert",
            "pts": 7.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Terry McLaurin",
            "pts": 12.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Hunter Renfrow",
            "pts": 3.6
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Trey Lance",
            "pts": 9.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Joe Mixon",
            "pts": 18.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Breece Hall",
            "pts": 7.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "JuJu Smith-Schuster",
            "pts": 8.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Allen Robinson II",
            "pts": 1.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Travis Kelce",
            "pts": 22.1
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "David Montgomery",
            "pts": 6.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Drake London",
            "pts": 9.9
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Tom Brady",
            "pts": 10.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Dalvin Cook",
            "pts": 12.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Saquon Barkley",
            "pts": 30.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Amon-Ra St. Brown",
            "pts": 16.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Godwin",
            "pts": 5.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Kyle Pitts",
            "pts": 2.9
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Ezekiel Elliott",
            "pts": 5.4
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Cordarrelle Patterson",
            "pts": 21.1
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Dak Prescott",
            "pts": 4.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Elijah Mitchell",
            "pts": 4.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Dameon Pierce",
            "pts": 4.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Justin Jefferson",
            "pts": 34.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "CeeDee Lamb",
            "pts": 3.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dawson Knox",
            "pts": 1.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tee Higgins",
            "pts": 3.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Gabe Davis",
            "pts": 16.8
          }
        ]
      }
    ],
    "Week 2": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Joe Burrow",
            "pts": 16.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Javonte Williams",
            "pts": 9.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Miles Sanders",
            "pts": 10.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Keenan Allen",
            "pts": 0.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Darnell Mooney",
            "pts": 0.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "T.J. Hockenson",
            "pts": 4.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Christian Kirk",
            "pts": 22.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Chase Claypool",
            "pts": 4.6
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Josh Allen",
            "pts": 29.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Christian McCaffrey",
            "pts": 14.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Josh Jacobs",
            "pts": 8.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Deebo Samuel",
            "pts": 12.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Michael Thomas",
            "pts": 15.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Darren Waller",
            "pts": 14.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Rashod Bateman",
            "pts": 18.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Treylon Burks",
            "pts": 6.7
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Russell Wilson",
            "pts": 10.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jonathan Taylor",
            "pts": 6.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Clyde Edwards-Helaire",
            "pts": 13.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jerry Jeudy",
            "pts": 1.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Adam Thielen",
            "pts": 7.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Hunter Henry",
            "pts": 0.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "James Conner",
            "pts": 6.1
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Nick Chubb",
            "pts": 30.8
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Aaron Rodgers",
            "pts": 16.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Derrick Henry",
            "pts": 8.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kareem Hunt",
            "pts": 8.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tyreek Hill",
            "pts": 36.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DK Metcalf",
            "pts": 5.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Taysom Hill",
            "pts": 1.4
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Jamaal Williams",
            "pts": 6.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Marquise Brown",
            "pts": 9.8
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Kyler Murray",
            "pts": 25.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Najee Harris",
            "pts": 11.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Damien Harris",
            "pts": 15.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Stefon Diggs",
            "pts": 38.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DJ Moore",
            "pts": 11.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Zach Ertz",
            "pts": 11.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jaylen Waddle",
            "pts": 34.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Brandin Cooks",
            "pts": 7.4
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Lamar Jackson",
            "pts": 42.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "D'Andre Swift",
            "pts": 15.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Chase Edmonds",
            "pts": 4.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Davante Adams",
            "pts": 8.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Mike Williams",
            "pts": 21.3
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Tyler Higbee",
            "pts": 10.6
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "AJ Dillon",
            "pts": 7.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "A.J. Brown",
            "pts": 9.4
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Patrick Mahomes",
            "pts": 17.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Leonard Fournette",
            "pts": 8.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Darrell Henderson Jr.",
            "pts": 10.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Cooper Kupp",
            "pts": 26.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Diontae Johnson",
            "pts": 10.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dalton Schultz",
            "pts": 0.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Amari Cooper",
            "pts": 20.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jarvis Landry",
            "pts": 4.5
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jalen Hurts",
            "pts": 32.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Aaron Jones",
            "pts": 30.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Devin Singletary",
            "pts": 3.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ja'Marr Chase",
            "pts": 8.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Terry McLaurin",
            "pts": 10.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dallas Goedert",
            "pts": 10.7
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "James Robinson",
            "pts": 14.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Hunter Renfrow",
            "pts": 7.4
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Herbert",
            "pts": 23.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Austin Ekeler",
            "pts": 13.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Antonio Gibson",
            "pts": 11.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Mike Evans",
            "pts": 7.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Courtland Sutton",
            "pts": 16.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Mark Andrews",
            "pts": 21.2
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Rashaad Penny",
            "pts": 1.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Elijah Moore",
            "pts": 5.0
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Tom Brady",
            "pts": 9.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Dalvin Cook",
            "pts": 5.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Saquon Barkley",
            "pts": 10.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Amon-Ra St. Brown",
            "pts": 34.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Sterling Shepard",
            "pts": 6.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Kyle Pitts",
            "pts": 2.9
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Ezekiel Elliott",
            "pts": 5.4
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Cordarrelle Patterson",
            "pts": 4.1
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Trey Lance",
            "pts": 2.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Joe Mixon",
            "pts": 9.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "David Montgomery",
            "pts": 14.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "JuJu Smith-Schuster",
            "pts": 2.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Allen Robinson II",
            "pts": 13.3
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Travis Kelce",
            "pts": 7.6
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Jeff Wilson Jr.",
            "pts": 11.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Drake London",
            "pts": 20.6
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Carson Wentz",
            "pts": 27.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Dameon Pierce",
            "pts": 8.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rex Burkhead",
            "pts": 1.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Justin Jefferson",
            "pts": 7.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "CeeDee Lamb",
            "pts": 11.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dawson Knox",
            "pts": 6.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tee Higgins",
            "pts": 16.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Joshua Palmer",
            "pts": 11.0
          }
        ]
      }
    ],
    "Week 3": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Josh Allen",
            "pts": 26.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Christian McCaffrey",
            "pts": 12.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Josh Jacobs",
            "pts": 12.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Deebo Samuel",
            "pts": 10.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Michael Thomas",
            "pts": 7.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Darren Waller",
            "pts": 3.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Rashod Bateman",
            "pts": 4.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Treylon Burks",
            "pts": 2.6
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Aaron Rodgers",
            "pts": 16.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Derrick Henry",
            "pts": 22.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kareem Hunt",
            "pts": 7.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tyreek Hill",
            "pts": 4.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DK Metcalf",
            "pts": 14.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Gerald Everett",
            "pts": 3.5
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Cam Akers",
            "pts": 10.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Marquise Brown",
            "pts": 21.0
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Lamar Jackson",
            "pts": 39.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "D'Andre Swift",
            "pts": 6.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "AJ Dillon",
            "pts": 4.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Davante Adams",
            "pts": 11.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "A.J. Brown",
            "pts": 17.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Tyler Higbee",
            "pts": 8.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Mike Williams",
            "pts": 8.0
          },
          {
            "slot": "FLEX",
            "pos": "TE",
            "player": "George Kittle",
            "pts": 4.8
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Joe Burrow",
            "pts": 23.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Alvin Kamara",
            "pts": 6.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Javonte Williams",
            "pts": 7.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Christian Kirk",
            "pts": 16.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Marvin Jones Jr.",
            "pts": 11.3
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "T.J. Hockenson",
            "pts": 9.3
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "J.K. Dobbins",
            "pts": 5.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Miles Sanders",
            "pts": 4.9
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jalen Hurts",
            "pts": 27.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Aaron Jones",
            "pts": 4.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Devin Singletary",
            "pts": 19.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ja'Marr Chase",
            "pts": 9.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Curtis Samuel",
            "pts": 9.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Pat Freiermuth",
            "pts": 5.1
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "James Robinson",
            "pts": 19.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Michael Pittman Jr.",
            "pts": 11.2
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Russell Wilson",
            "pts": 8.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jonathan Taylor",
            "pts": 10.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Nick Chubb",
            "pts": 17.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Adam Thielen",
            "pts": 15.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DeVonta Smith",
            "pts": 26.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Logan Thomas",
            "pts": 1.5
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "James Conner",
            "pts": 7.2
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Clyde Edwards-Helaire",
            "pts": 12.4
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jared Goff",
            "pts": 13.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Dalvin Cook",
            "pts": 13.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Saquon Barkley",
            "pts": 20.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Amon-Ra St. Brown",
            "pts": 10.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Sterling Shepard",
            "pts": 7.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Kyle Pitts",
            "pts": 11.2
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Ezekiel Elliott",
            "pts": 14.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Cordarrelle Patterson",
            "pts": 21.8
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Kyler Murray",
            "pts": 13.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Najee Harris",
            "pts": 11.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Damien Harris",
            "pts": 11.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Stefon Diggs",
            "pts": 10.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DJ Moore",
            "pts": 2.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Zach Ertz",
            "pts": 7.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jaylen Waddle",
            "pts": 13.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Brandin Cooks",
            "pts": 3.2
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Mac Jones",
            "pts": 15.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Dameon Pierce",
            "pts": 17.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Tony Pollard",
            "pts": 10.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Justin Jefferson",
            "pts": 2.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "CeeDee Lamb",
            "pts": 18.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dawson Knox",
            "pts": 4.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tee Higgins",
            "pts": 11.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Gabe Davis",
            "pts": 5.2
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Patrick Mahomes",
            "pts": 17.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Leonard Fournette",
            "pts": 9.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Darrell Henderson Jr.",
            "pts": 1.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Cooper Kupp",
            "pts": 14.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Diontae Johnson",
            "pts": 12.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Evan Engram",
            "pts": 3.4
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Travis Etienne Jr.",
            "pts": 9.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Amari Cooper",
            "pts": 19.6
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Kirk Cousins",
            "pts": 18.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Joe Mixon",
            "pts": 5.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "David Montgomery",
            "pts": 1.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Drake London",
            "pts": 12.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Garrett Wilson",
            "pts": 9.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Travis Kelce",
            "pts": 15.9
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Jeff Wilson Jr.",
            "pts": 10.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tyler Lockett",
            "pts": 12.1
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Herbert",
            "pts": 12.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Austin Ekeler",
            "pts": 9.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Antonio Gibson",
            "pts": 10.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Courtland Sutton",
            "pts": 13.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Brandon Aiyuk",
            "pts": 11.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Mark Andrews",
            "pts": 24.9
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Rashaad Penny",
            "pts": 7.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Elijah Moore",
            "pts": 6.9
          }
        ]
      }
    ],
    "Week 4": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Lamar Jackson",
            "pts": 12.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Khalil Herbert",
            "pts": 10.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Mark Ingram II",
            "pts": 5.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "A.J. Brown",
            "pts": 12.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Mike Williams",
            "pts": 15.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "George Kittle",
            "pts": 3.4
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "AJ Dillon",
            "pts": 8.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Davante Adams",
            "pts": 15.0
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Josh Allen",
            "pts": 23.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Christian McCaffrey",
            "pts": 21.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Josh Jacobs",
            "pts": 32.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Deebo Samuel",
            "pts": 20.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Richie James",
            "pts": -0.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Darren Waller",
            "pts": 3.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Rashod Bateman",
            "pts": 3.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Treylon Burks",
            "pts": 2.8
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Aaron Rodgers",
            "pts": 16.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Derrick Henry",
            "pts": 22.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jamaal Williams",
            "pts": 23.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tyreek Hill",
            "pts": 20.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DK Metcalf",
            "pts": 18.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Gerald Everett",
            "pts": 14.6
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Kareem Hunt",
            "pts": 7.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Marquise Brown",
            "pts": 17.8
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jalen Hurts",
            "pts": 15.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Aaron Jones",
            "pts": 13.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Devin Singletary",
            "pts": 9.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ja'Marr Chase",
            "pts": 10.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Curtis Samuel",
            "pts": 5.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Pat Freiermuth",
            "pts": 12.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "James Robinson",
            "pts": 2.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Michael Pittman Jr.",
            "pts": 4.6
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Joe Burrow",
            "pts": 20.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Javonte Williams",
            "pts": 3.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Miles Sanders",
            "pts": 28.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Christian Kirk",
            "pts": 7.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chase Claypool",
            "pts": 0.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "T.J. Hockenson",
            "pts": 35.9
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "J.K. Dobbins",
            "pts": 20.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Marvin Jones Jr.",
            "pts": 0.0
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Tom Brady",
            "pts": 25.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Dalvin Cook",
            "pts": 9.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Saquon Barkley",
            "pts": 17.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Godwin",
            "pts": 9.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Mack Hollins",
            "pts": 4.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Kyle Pitts",
            "pts": 3.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Ezekiel Elliott",
            "pts": 9.1
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Cordarrelle Patterson",
            "pts": 9.8
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Russell Wilson",
            "pts": 26.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jonathan Taylor",
            "pts": 2.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Nick Chubb",
            "pts": 19.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jerry Jeudy",
            "pts": 13.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DeVonta Smith",
            "pts": 3.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Logan Thomas",
            "pts": 4.4
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "James Conner",
            "pts": 9.2
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Clyde Edwards-Helaire",
            "pts": 21.9
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Daniel Jones",
            "pts": 21.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Dameon Pierce",
            "pts": 22.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Tony Pollard",
            "pts": 1.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Justin Jefferson",
            "pts": 26.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "CeeDee Lamb",
            "pts": 18.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Tyler Higbee",
            "pts": 12.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tee Higgins",
            "pts": 21.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Gabe Davis",
            "pts": 1.8
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Kyler Murray",
            "pts": 22.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Najee Harris",
            "pts": 7.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Damien Harris",
            "pts": 14.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Stefon Diggs",
            "pts": 8.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DJ Moore",
            "pts": 9.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Zach Ertz",
            "pts": 13.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jaylen Waddle",
            "pts": 4.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Brandin Cooks",
            "pts": 15.2
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Trevor Lawrence",
            "pts": 5.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Joe Mixon",
            "pts": 15.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Breece Hall",
            "pts": 14.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Drake London",
            "pts": 2.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Garrett Wilson",
            "pts": 5.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Travis Kelce",
            "pts": 19.7
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Jeff Wilson Jr.",
            "pts": 13.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tyler Lockett",
            "pts": 10.1
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Patrick Mahomes",
            "pts": 23.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Leonard Fournette",
            "pts": 14.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Travis Etienne Jr.",
            "pts": 3.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Cooper Kupp",
            "pts": 19.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Diontae Johnson",
            "pts": 3.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Evan Engram",
            "pts": 2.1
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Melvin Gordon III",
            "pts": -1.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Amari Cooper",
            "pts": 1.4
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Herbert",
            "pts": 21.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Austin Ekeler",
            "pts": 31.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Antonio Gibson",
            "pts": 7.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Mike Evans",
            "pts": 26.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Courtland Sutton",
            "pts": 13.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Mark Andrews",
            "pts": 2.5
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Rashaad Penny",
            "pts": 28.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Brandon Aiyuk",
            "pts": 5.7
          }
        ]
      }
    ],
    "Week 5": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Josh Allen",
            "pts": 35.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Christian McCaffrey",
            "pts": 19.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Josh Jacobs",
            "pts": 27.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Deebo Samuel",
            "pts": 10.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Rondale Moore",
            "pts": 9.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Darren Waller",
            "pts": 0.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Tyler Allgeier",
            "pts": 4.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "George Pickens",
            "pts": 11.3
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jalen Hurts",
            "pts": 27.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Aaron Jones",
            "pts": 9.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Devin Singletary",
            "pts": 5.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ja'Marr Chase",
            "pts": 8.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Curtis Samuel",
            "pts": 9.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dallas Goedert",
            "pts": 13.5
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "James Robinson",
            "pts": 4.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Michael Pittman Jr.",
            "pts": 8.4
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Tom Brady",
            "pts": 19.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Dalvin Cook",
            "pts": 25.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Saquon Barkley",
            "pts": 18.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Amon-Ra St. Brown",
            "pts": 3.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Godwin",
            "pts": 9.3
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Tyler Conklin",
            "pts": 0.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Ezekiel Elliott",
            "pts": 7.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Zay Jones",
            "pts": 2.7
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Lamar Jackson",
            "pts": 14.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "AJ Dillon",
            "pts": 3.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Khalil Herbert",
            "pts": 1.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Mike Williams",
            "pts": 18.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Romeo Doubs",
            "pts": 4.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "George Kittle",
            "pts": 5.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Davante Adams",
            "pts": 25.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "A.J. Brown",
            "pts": 4.7
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Derek Carr",
            "pts": 17.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Dameon Pierce",
            "pts": 18.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Tony Pollard",
            "pts": 14.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Justin Jefferson",
            "pts": 24.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "CeeDee Lamb",
            "pts": 7.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Tyler Higbee",
            "pts": 8.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tee Higgins",
            "pts": 0.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Chris Olave",
            "pts": 13.4
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Aaron Rodgers",
            "pts": 16.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Derrick Henry",
            "pts": 26.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jamaal Williams",
            "pts": 5.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tyreek Hill",
            "pts": 9.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DK Metcalf",
            "pts": 15.3
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Gerald Everett",
            "pts": 0.7
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Kareem Hunt",
            "pts": 13.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Marquise Brown",
            "pts": 17.8
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Trevor Lawrence",
            "pts": 10.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Joe Mixon",
            "pts": 10.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Breece Hall",
            "pts": 26.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Drake London",
            "pts": 5.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Garrett Wilson",
            "pts": 4.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Travis Kelce",
            "pts": 30.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Jeff Wilson Jr.",
            "pts": 19.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tyler Lockett",
            "pts": 24.9
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Joe Burrow",
            "pts": 17.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Alvin Kamara",
            "pts": 20.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Miles Sanders",
            "pts": 7.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Christian Kirk",
            "pts": 1.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Marvin Jones Jr.",
            "pts": 13.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "T.J. Hockenson",
            "pts": 1.1
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "J.K. Dobbins",
            "pts": 4.4
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Raheem Mostert",
            "pts": 18.7
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Herbert",
            "pts": 14.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Austin Ekeler",
            "pts": 33.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rashaad Penny",
            "pts": 5.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Mike Evans",
            "pts": 10.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Courtland Sutton",
            "pts": 9.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Mark Andrews",
            "pts": 18.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Elijah Moore",
            "pts": 1.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Robert Woods",
            "pts": 5.7
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Russell Wilson",
            "pts": 9.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Conner",
            "pts": 6.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Nick Chubb",
            "pts": 25.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jerry Jeudy",
            "pts": 6.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DeVonta Smith",
            "pts": 13.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Hunter Henry",
            "pts": 7.4
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Clyde Edwards-Helaire",
            "pts": 5.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Rhamondre Stevenson",
            "pts": 18.5
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Patrick Mahomes",
            "pts": 30.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Leonard Fournette",
            "pts": 30.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Travis Etienne Jr.",
            "pts": 12.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Cooper Kupp",
            "pts": 22.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Diontae Johnson",
            "pts": 8.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dalton Schultz",
            "pts": 0.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Melvin Gordon III",
            "pts": 11.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Amari Cooper",
            "pts": 17.1
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Kyler Murray",
            "pts": 16.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Najee Harris",
            "pts": 5.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Damien Harris",
            "pts": 1.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Stefon Diggs",
            "pts": 20.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jaylen Waddle",
            "pts": 3.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Zach Ertz",
            "pts": 7.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DJ Moore",
            "pts": 8.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Brandin Cooks",
            "pts": 4.0
          }
        ]
      }
    ],
    "Week 6": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Tom Brady",
            "pts": 13.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Dalvin Cook",
            "pts": 14.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Saquon Barkley",
            "pts": 17.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Godwin",
            "pts": 12.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Isaiah McKenzie",
            "pts": 1.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Kyle Pitts",
            "pts": 9.4
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Ezekiel Elliott",
            "pts": 15.1
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Deon Jackson",
            "pts": 23.1
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Josh Allen",
            "pts": 26.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Christian McCaffrey",
            "pts": 19.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kenneth Walker III",
            "pts": 18.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Deebo Samuel",
            "pts": 12.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Rondale Moore",
            "pts": 7.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Hayden Hurst",
            "pts": 3.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "George Pickens",
            "pts": 4.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Zay Jones",
            "pts": 6.7
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jalen Hurts",
            "pts": 16.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Aaron Jones",
            "pts": 5.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Devin Singletary",
            "pts": 12.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ja'Marr Chase",
            "pts": 28.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Curtis Samuel",
            "pts": 1.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dallas Goedert",
            "pts": 3.2
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "James Robinson",
            "pts": 6.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Michael Pittman Jr.",
            "pts": 19.9
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Daniel Jones",
            "pts": 13.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Tony Pollard",
            "pts": 6.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rachaad White",
            "pts": 3.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Justin Jefferson",
            "pts": 13.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "CeeDee Lamb",
            "pts": 10.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Tyler Higbee",
            "pts": 1.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Gabe Davis",
            "pts": 14.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Joshua Palmer",
            "pts": 10.2
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Lamar Jackson",
            "pts": 16.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "AJ Dillon",
            "pts": 7.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Eno Benjamin",
            "pts": 8.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "A.J. Brown",
            "pts": 15.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Mike Williams",
            "pts": 2.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "George Kittle",
            "pts": 12.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Romeo Doubs",
            "pts": 4.1
          },
          {
            "slot": "FLEX",
            "pos": "TE",
            "player": "David Njoku",
            "pts": 7.3
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Kirk Cousins",
            "pts": 16.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Joe Mixon",
            "pts": 14.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Breece Hall",
            "pts": 19.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Drake London",
            "pts": 5.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tyler Lockett",
            "pts": 2.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Travis Kelce",
            "pts": 15.2
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "David Montgomery",
            "pts": 8.5
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Jeff Wilson Jr.",
            "pts": 0.5
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Aaron Rodgers",
            "pts": 11.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Cam Akers",
            "pts": 0.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kareem Hunt",
            "pts": 1.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tyreek Hill",
            "pts": 23.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DK Metcalf",
            "pts": 4.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Gerald Everett",
            "pts": 5.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Marquise Brown",
            "pts": 9.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Devin Duvernay",
            "pts": 1.9
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Herbert",
            "pts": 8.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Austin Ekeler",
            "pts": 19.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Mike Boone",
            "pts": 0.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Mike Evans",
            "pts": 6.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Courtland Sutton",
            "pts": 2.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Mark Andrews",
            "pts": 20.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Brandon Aiyuk",
            "pts": 24.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tyler Boyd",
            "pts": 9.6
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Joe Burrow",
            "pts": 32.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Alvin Kamara",
            "pts": 15.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Miles Sanders",
            "pts": 13.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Christian Kirk",
            "pts": 8.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chase Claypool",
            "pts": 19.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Noah Fant",
            "pts": 7.5
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "J.K. Dobbins",
            "pts": 1.5
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Raheem Mostert",
            "pts": 5.3
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Patrick Mahomes",
            "pts": 19.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Leonard Fournette",
            "pts": 19.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Darrell Henderson Jr.",
            "pts": 12.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Cooper Kupp",
            "pts": 13.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Diontae Johnson",
            "pts": 6.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Taysom Hill",
            "pts": 4.5
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Melvin Gordon III",
            "pts": 0.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Amari Cooper",
            "pts": 12.4
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Russell Wilson",
            "pts": 13.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Nick Chubb",
            "pts": 7.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rhamondre Stevenson",
            "pts": 23.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jerry Jeudy",
            "pts": 6.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DeVonta Smith",
            "pts": 12.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dawson Knox",
            "pts": 11.2
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Clyde Edwards-Helaire",
            "pts": 3.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Adam Thielen",
            "pts": 13.6
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Kyler Murray",
            "pts": 14.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Najee Harris",
            "pts": 11.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Joshua Kelley",
            "pts": 0.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Stefon Diggs",
            "pts": 25.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jaylen Waddle",
            "pts": 13.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Zach Ertz",
            "pts": 10.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DJ Moore",
            "pts": 2.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jakobi Meyers",
            "pts": 8.0
          }
        ]
      }
    ],
    "Week 7": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Matt Ryan",
            "pts": 9.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Christian McCaffrey",
            "pts": 7.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Josh Jacobs",
            "pts": 35.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Deebo Samuel",
            "pts": 6.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Wan'Dale Robinson",
            "pts": 8.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Hayden Hurst",
            "pts": 7.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "George Pickens",
            "pts": 15.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Rondale Moore",
            "pts": 3.6
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Dak Prescott",
            "pts": 12.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Tony Pollard",
            "pts": 11.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rachaad White",
            "pts": 3.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "CeeDee Lamb",
            "pts": 8.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Olave",
            "pts": 14.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Juwan Johnson",
            "pts": 17.7
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Dameon Pierce",
            "pts": 13.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tee Higgins",
            "pts": 11.8
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Trevor Lawrence",
            "pts": 18.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Joe Mixon",
            "pts": 16.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Breece Hall",
            "pts": 13.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "JuJu Smith-Schuster",
            "pts": 21.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tyler Lockett",
            "pts": 8.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Travis Kelce",
            "pts": 12.8
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "David Montgomery",
            "pts": 12.2
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Jeff Wilson Jr.",
            "pts": 5.4
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Tom Brady",
            "pts": 11.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Saquon Barkley",
            "pts": 15.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Ezekiel Elliott",
            "pts": 17.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Amon-Ra St. Brown",
            "pts": 0.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DeAndre Hopkins",
            "pts": 15.3
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Kyle Pitts",
            "pts": 2.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Chris Godwin",
            "pts": 8.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Alec Pierce",
            "pts": 5.2
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Herbert",
            "pts": 17.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Austin Ekeler",
            "pts": 30.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kenyan Drake",
            "pts": 0.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Mike Evans",
            "pts": 14.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Courtland Sutton",
            "pts": 3.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Mark Andrews",
            "pts": 0.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Brandon Aiyuk",
            "pts": 11.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Josh Reynolds",
            "pts": 1.3
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jared Goff",
            "pts": 1.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Aaron Jones",
            "pts": 24.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Robinson",
            "pts": 0.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Ja'Marr Chase",
            "pts": 29.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Curtis Samuel",
            "pts": 10.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Pat Freiermuth",
            "pts": 11.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Michael Pittman Jr.",
            "pts": 6.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Terry McLaurin",
            "pts": 15.8
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Patrick Mahomes",
            "pts": 26.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Leonard Fournette",
            "pts": 3.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Travis Etienne Jr.",
            "pts": 18.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Diontae Johnson",
            "pts": 7.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Allen Lazard",
            "pts": 8.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Taysom Hill",
            "pts": 9.5
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Melvin Gordon III",
            "pts": 6.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Amari Cooper",
            "pts": 8.9
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Lamar Jackson",
            "pts": 10.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Eno Benjamin",
            "pts": 21.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kenneth Walker III",
            "pts": 28.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Davante Adams",
            "pts": 13.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Mike Williams",
            "pts": 18.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "George Kittle",
            "pts": 18.8
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "AJ Dillon",
            "pts": 1.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Michael Gallup",
            "pts": 0.0
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Kyler Murray",
            "pts": 17.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Najee Harris",
            "pts": 9.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Damien Harris",
            "pts": 1.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jaylen Waddle",
            "pts": 10.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Brandin Cooks",
            "pts": 6.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Zach Ertz",
            "pts": 5.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DJ Moore",
            "pts": 16.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jakobi Meyers",
            "pts": 10.4
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Aaron Rodgers",
            "pts": 15.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Derrick Henry",
            "pts": 15.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jamaal Williams",
            "pts": 6.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tyreek Hill",
            "pts": 10.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DK Metcalf",
            "pts": 1.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Gerald Everett",
            "pts": 8.8
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Kareem Hunt",
            "pts": 7.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Devin Duvernay",
            "pts": 5.2
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Daniel Jones",
            "pts": 28.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jonathan Taylor",
            "pts": 12.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Nick Chubb",
            "pts": 17.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jerry Jeudy",
            "pts": 13.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Robert Woods",
            "pts": 4.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Evan Engram",
            "pts": 8.7
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Clyde Edwards-Helaire",
            "pts": 9.2
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Rhamondre Stevenson",
            "pts": 19.8
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Joe Burrow",
            "pts": 39.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Alvin Kamara",
            "pts": 14.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Raheem Mostert",
            "pts": 18.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Christian Kirk",
            "pts": 13.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chase Claypool",
            "pts": 6.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "T.J. Hockenson",
            "pts": 6.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Keenan Allen",
            "pts": 2.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Darnell Mooney",
            "pts": 6.8
          }
        ]
      }
    ],
    "Week 8": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Kirk Cousins",
            "pts": 23.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Joe Mixon",
            "pts": 9.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Brian Robinson Jr.",
            "pts": 2.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tyler Lockett",
            "pts": 12.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Garrett Wilson",
            "pts": 14.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Greg Dulcich",
            "pts": 10.7
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "David Montgomery",
            "pts": 7.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Drake London",
            "pts": 5.1
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Josh Allen",
            "pts": 17.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Christian McCaffrey",
            "pts": 36.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Josh Jacobs",
            "pts": 6.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "George Pickens",
            "pts": 0.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "A.J. Brown",
            "pts": 36.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Hayden Hurst",
            "pts": 6.2
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Tyler Allgeier",
            "pts": 16.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Wan'Dale Robinson",
            "pts": 2.5
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Dak Prescott",
            "pts": 25.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Dameon Pierce",
            "pts": 12.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Tony Pollard",
            "pts": 33.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Justin Jefferson",
            "pts": 12.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "CeeDee Lamb",
            "pts": 16.3
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Tyler Higbee",
            "pts": 2.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tee Higgins",
            "pts": 12.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Chris Olave",
            "pts": 7.7
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Derek Carr",
            "pts": 1.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Antonio Gibson",
            "pts": 17.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Gus Edwards",
            "pts": 6.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Mike Evans",
            "pts": 15.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Courtland Sutton",
            "pts": 1.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Mark Andrews",
            "pts": 4.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Brandon Aiyuk",
            "pts": 17.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tyler Boyd",
            "pts": 11.3
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Tom Brady",
            "pts": 17.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Dalvin Cook",
            "pts": 22.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Saquon Barkley",
            "pts": 13.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Godwin",
            "pts": 10.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DeAndre Hopkins",
            "pts": 27.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Kyle Pitts",
            "pts": 16.5
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Michael Carter",
            "pts": 8.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Amon-Ra St. Brown",
            "pts": 10.4
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Marcus Mariota",
            "pts": 22.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Leonard Fournette",
            "pts": 13.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Travis Etienne Jr.",
            "pts": 23.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Cooper Kupp",
            "pts": 18.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Diontae Johnson",
            "pts": 6.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Taysom Hill",
            "pts": 7.7
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Darrell Henderson Jr.",
            "pts": 4.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Amari Cooper",
            "pts": 19.6
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jalen Hurts",
            "pts": 28.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Aaron Jones",
            "pts": 17.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Devin Singletary",
            "pts": 8.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Hunter Renfrow",
            "pts": 1.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Curtis Samuel",
            "pts": 9.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Pat Freiermuth",
            "pts": 7.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Michael Pittman Jr.",
            "pts": 8.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Terry McLaurin",
            "pts": 13.6
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Kyler Murray",
            "pts": 24.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Najee Harris",
            "pts": 8.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Damien Harris",
            "pts": 6.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Stefon Diggs",
            "pts": 19.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jaylen Waddle",
            "pts": 26.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Zach Ertz",
            "pts": 11.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DJ Moore",
            "pts": 24.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Brandin Cooks",
            "pts": 9.3
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Lamar Jackson",
            "pts": 21.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "D'Andre Swift",
            "pts": 11.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kenneth Walker III",
            "pts": 11.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Davante Adams",
            "pts": 0.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Rashod Bateman",
            "pts": 0.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "George Kittle",
            "pts": 11.4
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Eno Benjamin",
            "pts": 6.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Isaiah McKenzie",
            "pts": 7.5
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Daniel Jones",
            "pts": 9.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Nick Chubb",
            "pts": 24.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rhamondre Stevenson",
            "pts": 17.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jerry Jeudy",
            "pts": 15.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DeVonta Smith",
            "pts": 4.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dawson Knox",
            "pts": 8.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Jonathan Taylor",
            "pts": 5.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Adam Thielen",
            "pts": 9.7
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Aaron Rodgers",
            "pts": 15.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Derrick Henry",
            "pts": 35.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jamaal Williams",
            "pts": 21.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tyreek Hill",
            "pts": 25.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DK Metcalf",
            "pts": 14.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Mike Gesicki",
            "pts": 11.3
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Kareem Hunt",
            "pts": 9.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Devin Duvernay",
            "pts": 14.4
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Joe Burrow",
            "pts": 13.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Alvin Kamara",
            "pts": 38.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Raheem Mostert",
            "pts": 7.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Christian Kirk",
            "pts": 5.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chase Claypool",
            "pts": 10.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "T.J. Hockenson",
            "pts": 9.5
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Miles Sanders",
            "pts": 13.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Darnell Mooney",
            "pts": 9.5
          }
        ]
      }
    ],
    "Week 9": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Josh Allen",
            "pts": 24.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Josh Jacobs",
            "pts": 10.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Tyler Allgeier",
            "pts": 12.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "A.J. Brown",
            "pts": 13.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Romeo Doubs",
            "pts": 2.3
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Hayden Hurst",
            "pts": 6.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DeAndre Carter",
            "pts": 7.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "K.J. Osborn",
            "pts": 0.0
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Herbert",
            "pts": 12.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Austin Ekeler",
            "pts": 20.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Antonio Gibson",
            "pts": 5.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Mike Evans",
            "pts": 6.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tyler Boyd",
            "pts": 6.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Robert Tonyan",
            "pts": 4.4
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Kenyan Drake",
            "pts": 23.9
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Khalil Herbert",
            "pts": 2.3
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Patrick Mahomes",
            "pts": 34.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Leonard Fournette",
            "pts": 8.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Travis Etienne Jr.",
            "pts": 25.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Cooper Kupp",
            "pts": 22.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Allen Lazard",
            "pts": 16.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Taysom Hill",
            "pts": 1.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Caleb Huntley",
            "pts": 3.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Rondale Moore",
            "pts": 10.9
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Kirk Cousins",
            "pts": 16.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Joe Mixon",
            "pts": 53.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "David Montgomery",
            "pts": 4.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "JuJu Smith-Schuster",
            "pts": 13.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tyler Lockett",
            "pts": 15.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Travis Kelce",
            "pts": 15.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Drake London",
            "pts": 1.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Garrett Wilson",
            "pts": 13.9
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Kyler Murray",
            "pts": 19.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Damien Harris",
            "pts": 0.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Nyheim Hines",
            "pts": 0.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Stefon Diggs",
            "pts": 11.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jaylen Waddle",
            "pts": 17.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Zach Ertz",
            "pts": 12.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DJ Moore",
            "pts": 3.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jakobi Meyers",
            "pts": 4.9
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Fields",
            "pts": 42.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Dameon Pierce",
            "pts": 13.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rachaad White",
            "pts": 4.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Justin Jefferson",
            "pts": 22.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Joshua Palmer",
            "pts": 14.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Tyler Higbee",
            "pts": 0.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tee Higgins",
            "pts": 9.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Chris Olave",
            "pts": 10.1
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Marcus Mariota",
            "pts": 7.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "James Conner",
            "pts": 8.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rhamondre Stevenson",
            "pts": 14.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Adam Thielen",
            "pts": 8.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DeVonta Smith",
            "pts": 3.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dawson Knox",
            "pts": 4.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Clyde Edwards-Helaire",
            "pts": 2.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Robert Woods",
            "pts": 0.0
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Tom Brady",
            "pts": 15.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Dalvin Cook",
            "pts": 12.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "D'Onta Foreman",
            "pts": 3.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Amon-Ra St. Brown",
            "pts": 7.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DeAndre Hopkins",
            "pts": 11.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Kyle Pitts",
            "pts": 3.7
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Michael Carter",
            "pts": 15.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Chris Godwin",
            "pts": 7.2
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Joe Burrow",
            "pts": 19.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Alvin Kamara",
            "pts": 7.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Raheem Mostert",
            "pts": 8.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Christian Kirk",
            "pts": 17.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chase Claypool",
            "pts": 2.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "T.J. Hockenson",
            "pts": 11.5
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Miles Sanders",
            "pts": 15.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Darnell Mooney",
            "pts": 14.0
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jalen Hurts",
            "pts": 19.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Aaron Jones",
            "pts": 5.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Devin Singletary",
            "pts": 6.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Hunter Renfrow",
            "pts": 4.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Curtis Samuel",
            "pts": 15.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dallas Goedert",
            "pts": 20.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Michael Pittman Jr.",
            "pts": 3.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Terry McLaurin",
            "pts": 8.1
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Aaron Rodgers",
            "pts": 13.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Derrick Henry",
            "pts": 23.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jamaal Williams",
            "pts": 10.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tyreek Hill",
            "pts": 23.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DK Metcalf",
            "pts": 12.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Gerald Everett",
            "pts": 6.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Devin Duvernay",
            "pts": 1.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Sammy Watkins",
            "pts": 1.4
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Lamar Jackson",
            "pts": 17.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kenneth Walker III",
            "pts": 26.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Deon Jackson",
            "pts": 4.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Davante Adams",
            "pts": 31.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Terrace Marshall Jr.",
            "pts": 12.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Isaiah Likely",
            "pts": 8.9
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "AJ Dillon",
            "pts": 5.4
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Eno Benjamin",
            "pts": 3.2
          }
        ]
      }
    ],
    "Week 10": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Patrick Mahomes",
            "pts": 31.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Leonard Fournette",
            "pts": 10.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Travis Etienne Jr.",
            "pts": 8.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Cooper Kupp",
            "pts": 1.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Allen Lazard",
            "pts": 6.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dalton Schultz",
            "pts": 14.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Diontae Johnson",
            "pts": 8.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Amari Cooper",
            "pts": 4.7
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Josh Allen",
            "pts": 19.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Christian McCaffrey",
            "pts": 15.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Josh Jacobs",
            "pts": 19.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Deebo Samuel",
            "pts": 6.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "A.J. Brown",
            "pts": 1.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Cole Kmet",
            "pts": 21.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "George Pickens",
            "pts": 13.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Wan'Dale Robinson",
            "pts": 2.5
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Herbert",
            "pts": 12.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Austin Ekeler",
            "pts": 9.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Antonio Gibson",
            "pts": 13.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Mike Evans",
            "pts": 7.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Courtland Sutton",
            "pts": 9.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Robert Tonyan",
            "pts": 1.3
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Khalil Herbert",
            "pts": 5.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Brandon Aiyuk",
            "pts": 9.4
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jimmy Garoppolo",
            "pts": 15.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Najee Harris",
            "pts": 9.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Eno Benjamin",
            "pts": 0.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Stefon Diggs",
            "pts": 18.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DJ Moore",
            "pts": 4.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Zach Ertz",
            "pts": 1.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jaylen Waddle",
            "pts": 8.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Brandin Cooks",
            "pts": 6.2
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Kirk Cousins",
            "pts": 15.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "David Montgomery",
            "pts": 4.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jeff Wilson Jr.",
            "pts": 21.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "JuJu Smith-Schuster",
            "pts": 4.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tyler Lockett",
            "pts": 11.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Travis Kelce",
            "pts": 17.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Drake London",
            "pts": 12.3
          },
          {
            "slot": "FLEX",
            "pos": "TE",
            "player": "Greg Dulcich",
            "pts": 1.6
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Russell Wilson",
            "pts": 14.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jonathan Taylor",
            "pts": 23.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Nick Chubb",
            "pts": 13.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Adam Thielen",
            "pts": 7.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DeVonta Smith",
            "pts": 10.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Evan Engram",
            "pts": 2.9
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "James Conner",
            "pts": 22.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jerry Jeudy",
            "pts": 0.0
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Fields",
            "pts": 39.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Dameon Pierce",
            "pts": 11.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Tony Pollard",
            "pts": 20.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Justin Jefferson",
            "pts": 30.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "CeeDee Lamb",
            "pts": 32.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Tyler Higbee",
            "pts": 11.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Chris Olave",
            "pts": 5.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Joshua Palmer",
            "pts": 5.9
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Tua Tagovailoa",
            "pts": 23.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Alvin Kamara",
            "pts": 6.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Raheem Mostert",
            "pts": 16.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Christian Kirk",
            "pts": 27.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chase Claypool",
            "pts": 1.3
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "T.J. Hockenson",
            "pts": 8.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Miles Sanders",
            "pts": 5.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Darnell Mooney",
            "pts": 7.7
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Tom Brady",
            "pts": 15.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Dalvin Cook",
            "pts": 22.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Saquon Barkley",
            "pts": 22.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Amon-Ra St. Brown",
            "pts": 17.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DeAndre Hopkins",
            "pts": 14.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Kyle Pitts",
            "pts": 3.8
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Cordarrelle Patterson",
            "pts": 2.5
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "D'Onta Foreman",
            "pts": 19.0
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Aaron Rodgers",
            "pts": 19.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Derrick Henry",
            "pts": 7.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jamaal Williams",
            "pts": 11.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tyreek Hill",
            "pts": 12.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DK Metcalf",
            "pts": 10.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Gerald Everett",
            "pts": 3.3
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Kareem Hunt",
            "pts": 2.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Samori Toure",
            "pts": 0.0
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jalen Hurts",
            "pts": 21.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Aaron Jones",
            "pts": 22.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Devin Singletary",
            "pts": 15.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Michael Pittman Jr.",
            "pts": 8.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Parris Campbell",
            "pts": 17.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dallas Goedert",
            "pts": 7.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Terry McLaurin",
            "pts": 16.8
          },
          {
            "slot": "FLEX",
            "pos": "TE",
            "player": "Pat Freiermuth",
            "pts": 5.6
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Geno Smith",
            "pts": 19.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Chuba Hubbard",
            "pts": 1.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kenneth Walker III",
            "pts": 10.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Davante Adams",
            "pts": 23.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Terrace Marshall Jr.",
            "pts": 4.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "George Kittle",
            "pts": 2.6
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "D'Andre Swift",
            "pts": 7.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Donovan Peoples-Jones",
            "pts": 12.4
          }
        ]
      }
    ],
    "Week 11": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Josh Allen",
            "pts": 12.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Christian McCaffrey",
            "pts": 14.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Josh Jacobs",
            "pts": 17.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Deebo Samuel",
            "pts": 18.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "A.J. Brown",
            "pts": 6.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Cole Kmet",
            "pts": 5.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "George Pickens",
            "pts": 16.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Darius Slayton",
            "pts": 11.1
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jimmy Garoppolo",
            "pts": 25.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Najee Harris",
            "pts": 25.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Damien Harris",
            "pts": 10.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Stefon Diggs",
            "pts": 12.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DJ Moore",
            "pts": 3.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Foster Moreau",
            "pts": 3.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Brandin Cooks",
            "pts": 8.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jakobi Meyers",
            "pts": 7.2
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Russell Wilson",
            "pts": 10.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jonathan Taylor",
            "pts": 14.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Nick Chubb",
            "pts": 8.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Adam Thielen",
            "pts": 3.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DeVonta Smith",
            "pts": 10.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dawson Knox",
            "pts": 10.5
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "James Conner",
            "pts": 12.4
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Rhamondre Stevenson",
            "pts": 11.2
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Patrick Mahomes",
            "pts": 27.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Melvin Gordon III",
            "pts": 9.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Darrell Henderson Jr.",
            "pts": 0.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Allen Lazard",
            "pts": 8.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Rondale Moore",
            "pts": -0.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dalton Schultz",
            "pts": 3.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Diontae Johnson",
            "pts": 4.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Amari Cooper",
            "pts": 27.3
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Joe Burrow",
            "pts": 26.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Alvin Kamara",
            "pts": 10.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Miles Sanders",
            "pts": 5.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Keenan Allen",
            "pts": 9.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chase Claypool",
            "pts": 2.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "T.J. Hockenson",
            "pts": 5.9
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Latavius Murray",
            "pts": 15.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Darnell Mooney",
            "pts": 10.9
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Herbert",
            "pts": 19.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Austin Ekeler",
            "pts": 17.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Antonio Gibson",
            "pts": 11.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Courtland Sutton",
            "pts": 10.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Brandon Aiyuk",
            "pts": 15.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Mark Andrews",
            "pts": 9.3
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Kenyan Drake",
            "pts": 6.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tyler Boyd",
            "pts": 5.2
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Aaron Rodgers",
            "pts": 19.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Derrick Henry",
            "pts": 24.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jamaal Williams",
            "pts": 24.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Devin Duvernay",
            "pts": 1.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Christian Watson",
            "pts": 19.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Gerald Everett",
            "pts": 0.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Kareem Hunt",
            "pts": 6.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Van Jefferson",
            "pts": 5.6
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Kirk Cousins",
            "pts": 2.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Joe Mixon",
            "pts": 7.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "David Montgomery",
            "pts": 19.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Kadarius Toney",
            "pts": 0.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Garrett Wilson",
            "pts": 2.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Travis Kelce",
            "pts": 32.5
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Brian Robinson Jr.",
            "pts": 5.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Drake London",
            "pts": 6.7
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Lamar Jackson",
            "pts": 15.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "D'Andre Swift",
            "pts": 10.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Isiah Pacheco",
            "pts": 10.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Davante Adams",
            "pts": 29.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Mike Williams",
            "pts": 2.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "George Kittle",
            "pts": 22.4
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Jaylen Warren",
            "pts": 1.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Donovan Peoples-Jones",
            "pts": 14.6
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Fields",
            "pts": 22.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Dameon Pierce",
            "pts": 2.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Tony Pollard",
            "pts": 33.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Justin Jefferson",
            "pts": 4.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "CeeDee Lamb",
            "pts": 7.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Tyler Higbee",
            "pts": 6.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tee Higgins",
            "pts": 19.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Gabe Davis",
            "pts": 9.3
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jalen Hurts",
            "pts": 24.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Aaron Jones",
            "pts": 11.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Devin Singletary",
            "pts": 16.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Michael Pittman Jr.",
            "pts": 10.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Parris Campbell",
            "pts": 9.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Pat Freiermuth",
            "pts": 11.9
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "James Robinson",
            "pts": 1.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Terry McLaurin",
            "pts": 7.6
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Daniel Jones",
            "pts": 24.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Dalvin Cook",
            "pts": 7.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Saquon Barkley",
            "pts": 4.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Amon-Ra St. Brown",
            "pts": 11.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DeAndre Hopkins",
            "pts": 13.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Kyle Pitts",
            "pts": 5.8
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Cordarrelle Patterson",
            "pts": 10.9
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "D'Onta Foreman",
            "pts": 2.4
          }
        ]
      }
    ],
    "Week 12": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Russell Wilson",
            "pts": 8.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Nick Chubb",
            "pts": 19.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rhamondre Stevenson",
            "pts": 15.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Adam Thielen",
            "pts": 16.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DeVonta Smith",
            "pts": 7.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dawson Knox",
            "pts": 2.7
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Jonathan Taylor",
            "pts": 17.3
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "James Conner",
            "pts": 19.5
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Josh Allen",
            "pts": 29.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Christian McCaffrey",
            "pts": 6.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Josh Jacobs",
            "pts": 45.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Deebo Samuel",
            "pts": 5.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "A.J. Brown",
            "pts": 10.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Cole Kmet",
            "pts": 4.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Darius Slayton",
            "pts": 7.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Treylon Burks",
            "pts": 15.0
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Kyler Murray",
            "pts": 25.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Najee Harris",
            "pts": 10.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Damien Harris",
            "pts": 1.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Stefon Diggs",
            "pts": 17.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jakobi Meyers",
            "pts": 7.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Foster Moreau",
            "pts": 10.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jaylen Waddle",
            "pts": 11.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Zay Jones",
            "pts": 22.0
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Joe Burrow",
            "pts": 18.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Alvin Kamara",
            "pts": 4.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Miles Sanders",
            "pts": 29.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Keenan Allen",
            "pts": 13.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Christian Kirk",
            "pts": 6.1
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "T.J. Hockenson",
            "pts": 12.8
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Raheem Mostert",
            "pts": 0.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Latavius Murray",
            "pts": 10.3
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Patrick Mahomes",
            "pts": 18.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Travis Etienne Jr.",
            "pts": 0.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Marlon Mack",
            "pts": 1.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Allen Lazard",
            "pts": 3.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Mack Hollins",
            "pts": 14.3
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dalton Schultz",
            "pts": 17.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Diontae Johnson",
            "pts": 7.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Amari Cooper",
            "pts": 12.9
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Aaron Rodgers",
            "pts": 9.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Derrick Henry",
            "pts": 13.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jamaal Williams",
            "pts": 10.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tyreek Hill",
            "pts": 12.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DK Metcalf",
            "pts": 14.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Juwan Johnson",
            "pts": 0.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Marquise Brown",
            "pts": 7.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Christian Watson",
            "pts": 19.0
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Herbert",
            "pts": 28.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Antonio Gibson",
            "pts": 6.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Samaje Perine",
            "pts": 17.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Mike Evans",
            "pts": 4.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Courtland Sutton",
            "pts": 10.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Mark Andrews",
            "pts": 9.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Austin Ekeler",
            "pts": 19.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Brandon Aiyuk",
            "pts": 9.0
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Lamar Jackson",
            "pts": 22.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "D'Andre Swift",
            "pts": 8.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kenneth Walker III",
            "pts": 16.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Davante Adams",
            "pts": 10.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Donovan Peoples-Jones",
            "pts": 2.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "George Kittle",
            "pts": 4.1
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Isiah Pacheco",
            "pts": 15.1
          },
          {
            "slot": "FLEX",
            "pos": "TE",
            "player": "David Njoku",
            "pts": 11.4
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Trevor Lawrence",
            "pts": 24.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "David Montgomery",
            "pts": 12.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Brian Robinson Jr.",
            "pts": 19.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "JuJu Smith-Schuster",
            "pts": 5.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Garrett Wilson",
            "pts": 23.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Travis Kelce",
            "pts": 13.7
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Jeff Wilson Jr.",
            "pts": 11.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tyler Lockett",
            "pts": 14.3
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jalen Hurts",
            "pts": 29.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Aaron Jones",
            "pts": 17.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Devin Singletary",
            "pts": 8.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Michael Pittman Jr.",
            "pts": 15.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Parris Campbell",
            "pts": 2.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Pat Freiermuth",
            "pts": 5.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Terry McLaurin",
            "pts": 7.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Curtis Samuel",
            "pts": 1.3
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Dak Prescott",
            "pts": 14.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Dameon Pierce",
            "pts": 3.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Tony Pollard",
            "pts": 7.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Justin Jefferson",
            "pts": 24.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "CeeDee Lamb",
            "pts": 14.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Tyler Higbee",
            "pts": 0.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tee Higgins",
            "pts": 20.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Gabe Davis",
            "pts": 5.8
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Tom Brady",
            "pts": 18.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Dalvin Cook",
            "pts": 7.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Saquon Barkley",
            "pts": 13.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Amon-Ra St. Brown",
            "pts": 23.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DeAndre Hopkins",
            "pts": 16.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Austin Hooper",
            "pts": 4.5
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Ezekiel Elliott",
            "pts": 16.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Michael Carter",
            "pts": 4.6
          }
        ]
      }
    ],
    "Week 13": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Josh Allen",
            "pts": 16.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Christian McCaffrey",
            "pts": 24.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Josh Jacobs",
            "pts": 20.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Deebo Samuel",
            "pts": 9.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "A.J. Brown",
            "pts": 27.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Cole Kmet",
            "pts": 10.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "George Pickens",
            "pts": 0.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Treylon Burks",
            "pts": 9.0
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Joe Burrow",
            "pts": 30.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Alvin Kamara",
            "pts": 4.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Miles Sanders",
            "pts": 10.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Keenan Allen",
            "pts": 17.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Christian Kirk",
            "pts": 13.4
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "T.J. Hockenson",
            "pts": 5.3
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Raheem Mostert",
            "pts": 3.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Latavius Murray",
            "pts": 8.1
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Aaron Rodgers",
            "pts": 13.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Derrick Henry",
            "pts": 4.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jamaal Williams",
            "pts": 9.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tyreek Hill",
            "pts": 25.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DK Metcalf",
            "pts": 22.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Gerald Everett",
            "pts": 10.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Van Jefferson",
            "pts": 4.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Christian Watson",
            "pts": 22.9
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Derek Carr",
            "pts": 16.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Nick Chubb",
            "pts": 8.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rhamondre Stevenson",
            "pts": 10.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Adam Thielen",
            "pts": 3.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DeVonta Smith",
            "pts": 18.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dawson Knox",
            "pts": 0.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Jonathan Taylor",
            "pts": 11.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jerry Jeudy",
            "pts": 8.5
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Lamar Jackson",
            "pts": 1.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "D'Andre Swift",
            "pts": 19.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Kenneth Walker III",
            "pts": 3.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Davante Adams",
            "pts": 33.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Donovan Peoples-Jones",
            "pts": 11.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "George Kittle",
            "pts": 3.2
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Isiah Pacheco",
            "pts": 15.2
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Kyren Williams",
            "pts": 0.9
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jimmy Garoppolo",
            "pts": 2.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Najee Harris",
            "pts": 9.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Zonovan Knight",
            "pts": 14.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Stefon Diggs",
            "pts": 18.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jakobi Meyers",
            "pts": 3.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Foster Moreau",
            "pts": 3.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jaylen Waddle",
            "pts": 1.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Zay Jones",
            "pts": 2.6
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jalen Hurts",
            "pts": 34.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Aaron Jones",
            "pts": 7.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Devin Singletary",
            "pts": 11.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Michael Pittman Jr.",
            "pts": 2.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Parris Campbell",
            "pts": 6.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Pat Freiermuth",
            "pts": 9.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Ja'Marr Chase",
            "pts": 13.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Terry McLaurin",
            "pts": 20.5
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Patrick Mahomes",
            "pts": 19.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Leonard Fournette",
            "pts": 11.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Travis Etienne Jr.",
            "pts": 6.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Allen Lazard",
            "pts": 9.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Mack Hollins",
            "pts": 6.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dalton Schultz",
            "pts": 4.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Diontae Johnson",
            "pts": 8.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Amari Cooper",
            "pts": 6.0
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Tom Brady",
            "pts": 17.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Dalvin Cook",
            "pts": 15.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Saquon Barkley",
            "pts": 16.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Amon-Ra St. Brown",
            "pts": 29.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Godwin",
            "pts": 10.3
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Austin Hooper",
            "pts": 3.7
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Ezekiel Elliott",
            "pts": 16.6
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Cordarrelle Patterson",
            "pts": 6.0
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Herbert",
            "pts": 18.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Austin Ekeler",
            "pts": 10.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Antonio Gibson",
            "pts": 6.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Mike Evans",
            "pts": 7.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Courtland Sutton",
            "pts": 0.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Mark Andrews",
            "pts": 7.4
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Samaje Perine",
            "pts": 18.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Brandon Aiyuk",
            "pts": 7.1
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Fields",
            "pts": 19.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Dameon Pierce",
            "pts": 11.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Tony Pollard",
            "pts": 23.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Justin Jefferson",
            "pts": 15.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tee Higgins",
            "pts": 11.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Tyler Higbee",
            "pts": 2.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "CeeDee Lamb",
            "pts": 17.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Chris Olave",
            "pts": 8.5
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Trevor Lawrence",
            "pts": 16.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "David Montgomery",
            "pts": 14.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Brian Robinson Jr.",
            "pts": 12.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "JuJu Smith-Schuster",
            "pts": 5.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Garrett Wilson",
            "pts": 20.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Travis Kelce",
            "pts": 5.6
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Jeff Wilson Jr.",
            "pts": 0.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tyler Lockett",
            "pts": 23.3
          }
        ]
      }
    ],
    "Week 14": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Ryan Tannehill",
            "pts": 17.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Derrick Henry",
            "pts": 19.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jamaal Williams",
            "pts": 3.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tyreek Hill",
            "pts": 22.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DK Metcalf",
            "pts": 15.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Gerald Everett",
            "pts": 5.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Marquise Brown",
            "pts": 5.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Van Jefferson",
            "pts": 11.4
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Josh Allen",
            "pts": 20.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Christian McCaffrey",
            "pts": 28.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Josh Jacobs",
            "pts": 18.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Deebo Samuel",
            "pts": 12.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "A.J. Brown",
            "pts": 15.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Evan Engram",
            "pts": 33.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "George Pickens",
            "pts": 9.3
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Darius Slayton",
            "pts": 5.2
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Joe Burrow",
            "pts": 16.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Miles Sanders",
            "pts": 28.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Latavius Murray",
            "pts": 4.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Keenan Allen",
            "pts": 15.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Christian Kirk",
            "pts": 7.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "T.J. Hockenson",
            "pts": 8.7
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Raheem Mostert",
            "pts": 4.9
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Marvin Jones Jr.",
            "pts": 2.7
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Geno Smith",
            "pts": 20.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "D'Andre Swift",
            "pts": 5.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Travis Homer",
            "pts": 4.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Davante Adams",
            "pts": 8.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Mike Williams",
            "pts": 20.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "George Kittle",
            "pts": 4.8
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Isiah Pacheco",
            "pts": 10.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Corey Davis",
            "pts": 2.0
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Derek Carr",
            "pts": 2.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Nick Chubb",
            "pts": 6.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rhamondre Stevenson",
            "pts": 2.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Adam Thielen",
            "pts": 16.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DeVonta Smith",
            "pts": 14.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dawson Knox",
            "pts": 12.1
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "James Conner",
            "pts": 20.4
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jerry Jeudy",
            "pts": 29.3
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jalen Hurts",
            "pts": 30.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Devin Singletary",
            "pts": 4.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Chuba Hubbard",
            "pts": 17.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Isaiah McKenzie",
            "pts": 4.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Trent Sherfield",
            "pts": 1.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Pat Freiermuth",
            "pts": 10.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Ja'Marr Chase",
            "pts": 23.5
          },
          {
            "slot": "FLEX",
            "pos": "TE",
            "player": "Greg Dulcich",
            "pts": 5.7
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Kyler Murray",
            "pts": 0.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Najee Harris",
            "pts": 12.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Zonovan Knight",
            "pts": 14.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Stefon Diggs",
            "pts": 5.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "DJ Moore",
            "pts": 0.6
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Foster Moreau",
            "pts": 0.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Jaylen Waddle",
            "pts": 4.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Zay Jones",
            "pts": 17.7
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Tom Brady",
            "pts": 10.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Dalvin Cook",
            "pts": 8.1
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Saquon Barkley",
            "pts": 5.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Amon-Ra St. Brown",
            "pts": 10.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Godwin",
            "pts": 7.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Noah Fant",
            "pts": 0.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Ezekiel Elliott",
            "pts": 15.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DeAndre Hopkins",
            "pts": 9.4
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Patrick Mahomes",
            "pts": 19.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Leonard Fournette",
            "pts": 7.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Travis Etienne Jr.",
            "pts": 3.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Mack Hollins",
            "pts": 7.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Kendall Hinton",
            "pts": 6.3
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Dalton Schultz",
            "pts": 11.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Diontae Johnson",
            "pts": 11.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Amari Cooper",
            "pts": 5.2
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Dak Prescott",
            "pts": 13.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Dameon Pierce",
            "pts": 11.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Tony Pollard",
            "pts": 20.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Justin Jefferson",
            "pts": 27.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Tee Higgins",
            "pts": 0.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Tyler Higbee",
            "pts": 2.1
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "CeeDee Lamb",
            "pts": 5.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Gabe Davis",
            "pts": 4.6
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Herbert",
            "pts": 19.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Austin Ekeler",
            "pts": 20.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Cam Akers",
            "pts": 8.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Mike Evans",
            "pts": 6.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Brandon Aiyuk",
            "pts": 12.7
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Mark Andrews",
            "pts": 2.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tyler Boyd",
            "pts": 0.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Michael Gallup",
            "pts": 5.0
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Kirk Cousins",
            "pts": 25.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Joe Mixon",
            "pts": 11.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Jeff Wilson Jr.",
            "pts": 2.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "JuJu Smith-Schuster",
            "pts": 17.9
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Garrett Wilson",
            "pts": 10.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Travis Kelce",
            "pts": 9.1
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "James Cook",
            "pts": 2.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tyler Lockett",
            "pts": 14.5
          }
        ]
      }
    ],
    "round1": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Jalen Hurts",
            "pts": 34.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Aaron Jones",
            "pts": 18.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Devin Singletary",
            "pts": 8.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Michael Pittman Jr.",
            "pts": 14.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Terry McLaurin",
            "pts": 10.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Pat Freiermuth",
            "pts": 0.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Chuba Hubbard",
            "pts": 8.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Ja'Marr Chase",
            "pts": 15.5
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Fields",
            "pts": 23.5
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Tony Pollard",
            "pts": 12.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rachaad White",
            "pts": 4.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Justin Jefferson",
            "pts": 24.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Olave",
            "pts": 6.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Tyler Higbee",
            "pts": 10.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "CeeDee Lamb",
            "pts": 16.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tee Higgins",
            "pts": 13.8
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Kirk Cousins",
            "pts": 32.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Joe Mixon",
            "pts": 7.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "David Montgomery",
            "pts": 22.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "JuJu Smith-Schuster",
            "pts": 11.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Garrett Wilson",
            "pts": 11.8
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Travis Kelce",
            "pts": 15.5
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Brian Robinson Jr.",
            "pts": 11.2
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tyler Lockett",
            "pts": 10.3
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Herbert",
            "pts": 8.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Austin Ekeler",
            "pts": 14.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Cam Akers",
            "pts": 11.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Mike Evans",
            "pts": 10.8
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Brandon Aiyuk",
            "pts": 2.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Mark Andrews",
            "pts": 4.6
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Antonio Gibson",
            "pts": 3.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Michael Gallup",
            "pts": 0.7
          }
        ]
      }
    ],
    "round2": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Fields",
            "pts": 9.7
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Tony Pollard",
            "pts": 11.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rachaad White",
            "pts": 13.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Justin Jefferson",
            "pts": 25.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "CeeDee Lamb",
            "pts": 29.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Tyler Higbee",
            "pts": 25.9
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Zack Moss",
            "pts": 7.5
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tee Higgins",
            "pts": 22.8
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Tom Brady",
            "pts": 11.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Dalvin Cook",
            "pts": 9.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Saquon Barkley",
            "pts": 23.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Amon-Ra St. Brown",
            "pts": 11.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Godwin",
            "pts": 10.3
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Noah Fant",
            "pts": 8.2
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Ezekiel Elliott",
            "pts": 12.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "DeAndre Hopkins",
            "pts": 0.9
          }
        ]
      },
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Kirk Cousins",
            "pts": 24.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Joe Mixon",
            "pts": 14.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "David Montgomery",
            "pts": 8.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "JuJu Smith-Schuster",
            "pts": 4.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Garrett Wilson",
            "pts": 3.0
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Travis Kelce",
            "pts": 14.3
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Brian Robinson Jr.",
            "pts": 5.8
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Drake London",
            "pts": 11.1
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Josh Allen",
            "pts": 22.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Christian McCaffrey",
            "pts": 12.8
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Josh Jacobs",
            "pts": 5.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "A.J. Brown",
            "pts": 13.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Darius Slayton",
            "pts": 9.9
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Evan Engram",
            "pts": 14.8
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Tyler Allgeier",
            "pts": 13.7
          },
          {
            "slot": "FLEX",
            "pos": "TE",
            "player": "Darren Waller",
            "pts": 7.8
          }
        ]
      }
    ],
    "round3": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Justin Fields",
            "pts": 16.2
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Rachaad White",
            "pts": 7.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Zack Moss",
            "pts": 7.4
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Justin Jefferson",
            "pts": 2.0
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "CeeDee Lamb",
            "pts": 15.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Tyler Higbee",
            "pts": 2.6
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Tee Higgins",
            "pts": 0.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Gabe Davis",
            "pts": 0.0
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Josh Allen",
            "pts": 0.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Christian McCaffrey",
            "pts": 28.3
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Josh Jacobs",
            "pts": 17.5
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "A.J. Brown",
            "pts": 17.7
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Jahan Dotson",
            "pts": 5.2
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Evan Engram",
            "pts": 3.4
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Tyler Allgeier",
            "pts": 16.0
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Isaiah Hodgins",
            "pts": 12.2
          }
        ]
      }
    ],
    "thirdPlace": [
      {
        "away": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Kirk Cousins",
            "pts": 7.9
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Joe Mixon",
            "pts": 0.0
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "David Montgomery",
            "pts": 4.6
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "JuJu Smith-Schuster",
            "pts": 3.1
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Garrett Wilson",
            "pts": 3.3
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Travis Kelce",
            "pts": 7.8
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Brian Robinson Jr.",
            "pts": 8.7
          },
          {
            "slot": "FLEX",
            "pos": "WR",
            "player": "Drake London",
            "pts": 7.2
          }
        ],
        "home": [
          {
            "slot": "QB",
            "pos": "QB",
            "player": "Tom Brady",
            "pts": 37.6
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Dalvin Cook",
            "pts": 5.4
          },
          {
            "slot": "RB",
            "pos": "RB",
            "player": "Saquon Barkley",
            "pts": 6.3
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Amon-Ra St. Brown",
            "pts": 8.2
          },
          {
            "slot": "WR",
            "pos": "WR",
            "player": "Chris Godwin",
            "pts": 16.5
          },
          {
            "slot": "TE",
            "pos": "TE",
            "player": "Noah Fant",
            "pts": 5.0
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "Ezekiel Elliott",
            "pts": 9.7
          },
          {
            "slot": "FLEX",
            "pos": "RB",
            "player": "D'Onta Foreman",
            "pts": 3.5
          }
        ]
      }
    ]
  }
};
