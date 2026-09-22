// Box scores (individual player lines), split out from data.js by season.
// Structure: BOXSCORES[year][week] = array of {away:[...], home:[...]} in the SAME
// order as SEASONS[year].schedule[week], so index i here matches game i there.
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
    ]
  }
};
