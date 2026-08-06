@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

:root{
  --navy:       #0B2447;   /* deep navy, headers/dark panels */
  --navy-soft:  #16345E;
  --blue:       #2F6FED;   /* modern accent blue */
  --blue-lt:    #6FA0FF;
  --red:        #D62839;   /* accent red */
  --red-dk:     #B01F2E;
  --white:      #FFFFFF;
  --bg:         #F5F7FA;   /* page background */
  --panel:      #FFFFFF;   /* card background */
  --line:       #E2E6ED;
  --text:       #10192B;
  --text-soft:  #5B6577;
  --radius:     14px;
  --radius-sm:  10px;
  --shadow:     0 1px 2px rgba(11,36,71,0.06), 0 8px 24px rgba(11,36,71,0.06);
  --shadow-hover: 0 4px 10px rgba(11,36,71,0.08), 0 16px 32px rgba(11,36,71,0.10);

  --display: 'Space Grotesk', 'Inter', sans-serif;
  --body: 'Inter', -apple-system, sans-serif;
  --mono: 'JetBrains Mono', 'Courier New', monospace;
}

// ---------- Trophy case ----------
function renderTrophyCase(containerId, limit){
  const el = document.getElementById(containerId);
  if(!el) return;
  const list = limit ? CHAMPIONS.slice(-limit) : CHAMPIONS.slice();
  list.reverse();
  el.innerHTML = list.map((c, i) => {
    const titleCount = CHAMPIONS.filter(x => x.key === c.key && x.year <= c.year).length;
    const tag = titleCount > 1 ? `<span class="repeat-tag">×${titleCount}</span>` : '';
    const recentClass = i === 0 ? ' plaque--recent' : '';
    return `<div class="plaque${recentClass}">
      <div class="yr">${c.year} CHAMPION</div>
      <div class="owner">${c.owner}</div>
      <div class="team">${c.team}</div>
      ${tag}
    </div>`;
  }).join('');
}

@media (prefers-reduced-motion: reduce){
  html{ scroll-behavior:auto; }
  *{ animation-duration:0.001ms !important; transition-duration:0.001ms !important; }
}

a{ color: inherit; }
img{ max-width:100%; display:block; }

.wrap{
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
}

/* ---------- Header / nav ---------- */
.site-header{
  background: var(--white);
  color: var(--navy);
  border-bottom: 1px solid var(--line);
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(8px);
}
.site-header .wrap{
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding-top:16px;
  padding-bottom:16px;
  gap: 16px;
}
.brand{
  display:flex;
  align-items:baseline;
  gap:10px;
  font-family: var(--display);
  font-weight: 700;
  letter-spacing: -0.3px;
  font-size: 1.4rem;
  text-decoration:none;
  color: var(--navy);
}
.brand::before{
  content: "";
  display: inline-block;
  width: 10px;
  height: 22px;
  background: linear-gradient(180deg, var(--red) 0 33%, var(--white) 33% 66%, var(--blue) 66% 100%);
  border-radius: 3px;
  margin-right: 2px;
  border: 1px solid var(--line);
  vertical-align: -4px;
}
.brand small{
  font-family: var(--mono);
  font-weight: 600;
  font-size: 0.62rem;
  letter-spacing: 1.5px;
  color: var(--text-soft);
}
.nav{
  display:flex;
  gap: 2px;
  flex-wrap: wrap;
}
.nav a{
  font-family: var(--body);
  font-weight: 600;
  font-size: 0.86rem;
  letter-spacing: 0.1px;
  text-decoration:none;
  color: var(--text-soft);
  padding: 8px 14px;
  border-radius: 999px;
  transition: color 0.15s ease, background 0.15s ease;
}
.nav a:hover, .nav a:focus-visible{ color: var(--navy); background: var(--bg); }
.nav a[aria-current="page"]{ color: var(--white); background: var(--navy); }

.nav-toggle{ display:none; }

@media (max-width: 720px){
  .nav-toggle{
    display:inline-flex;
    background: var(--bg);
    border: 1px solid var(--line);
    color: var(--navy);
    font-family: var(--body);
    font-weight:600;
    font-size: 0.8rem;
    padding: 8px 14px;
    border-radius: 999px;
  }
  .nav{
    display:none;
    flex-direction: column;
    width: 100%;
    order: 3;
    padding-top: 12px;
    gap: 4px;
  }
  .nav.open{ display:flex; }
  .nav a{ text-align: left; }
  .site-header .wrap{ flex-wrap: wrap; }
}

/* ---------- Hero ---------- */
.hero{
  background: linear-gradient(150deg, var(--navy) 0%, var(--navy-soft) 100%);
  color: var(--white);
  padding: 72px 0 52px;
  position: relative;
  overflow: hidden;
}
.hero::after{
  content:"";
  position:absolute;
  right: -80px; top: -80px;
  width: 360px; height: 360px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(214,40,57,0.35), transparent 70%);
  pointer-events:none;
}
.hero::before{
  content:"";
  position:absolute;
  left: -60px; bottom: -120px;
  width: 320px; height: 320px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(47,111,237,0.30), transparent 70%);
  pointer-events:none;
}
.hero .eyebrow{
  font-family: var(--mono);
  font-weight:600;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 0.72rem;
  color: var(--blue-lt);
  margin: 0 0 14px;
  position: relative;
}
.hero h1{
  font-family: var(--display);
  font-weight: 700;
  font-size: clamp(2.6rem, 6.5vw, 4.6rem);
  line-height: 1.02;
  margin: 0 0 18px;
  letter-spacing: -1px;
  position: relative;
}
.hero p.lede{
  max-width: 60ch;
  font-size: 1.1rem;
  color: rgba(255,255,255,0.78);
  margin: 0 0 30px;
  position: relative;
}

.stat-row{
  display:flex;
  flex-wrap:wrap;
  gap: 14px;
  margin-top: 8px;
  position:relative;
}
.stat{
  min-width: 108px;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.14);
  border-radius: var(--radius-sm);
  padding: 12px 18px;
}
.stat .num{
  font-family: var(--display);
  font-weight: 700;
  font-size: 2.1rem;
  color: var(--white);
  line-height:1;
}
.stat .label{
  font-family: var(--mono);
  font-weight:500;
  font-size: 0.65rem;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: rgba(255,255,255,0.6);
  margin-top: 5px;
}

/* ---------- Kickoff countdown ---------- */
.countdown-card{
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 26px 28px;
  margin: 28px 0;
  box-shadow: var(--shadow);
}
.countdown-title{
  font-family: var(--mono);
  font-weight:600;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 0.78rem;
  color: var(--navy);
  text-align:center;
  margin-bottom: 18px;
}
.countdown-grid{
  display:flex;
  justify-content:center;
  gap: 14px;
  flex-wrap: wrap;
}
.countdown-unit{
  background: var(--bg);
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  min-width: 84px;
  padding: 12px 8px;
  text-align:center;
}
.countdown-unit:nth-child(1){ border-top: 3px solid var(--red); }
.countdown-unit:nth-child(2){ border-top: 3px solid var(--navy); }
.countdown-unit:nth-child(3){ border-top: 3px solid var(--blue); }
.countdown-unit:nth-child(4){ border-top: 3px solid var(--red); }
.countdown-num{
  font-family: var(--display);
  font-weight: 700;
  font-size: 2.4rem;
  color: var(--navy);
  line-height:1;
  font-variant-numeric: tabular-nums;
}
.countdown-label{
  font-family: var(--mono);
  font-weight:600;
  font-size: 0.63rem;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: var(--text-soft);
  margin-top: 5px;
}
.kickoff-live{
  text-align:center;
  font-family: var(--display);
  font-weight: 700;
  font-size: 1.5rem;
  color: var(--red);
  padding: 10px 0;
}

/* ---------- Sections ---------- */
section{ padding: 52px 0; }
section + section{ border-top: 1px solid var(--line); }

.section-head{
  display:flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 26px;
  flex-wrap: wrap;
}
h2.section-title{
  font-family: var(--display);
  font-weight: 700;
  font-size: 1.9rem;
  margin: 0;
  letter-spacing: -0.5px;
  color: var(--navy);
}
.section-sub{
  font-family: var(--mono);
  font-weight:500;
  font-size: 0.75rem;
  color: var(--text-soft);
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* ---------- Nav cards on home ---------- */
.card-grid{
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}
.nav-card{
  display:block;
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 22px;
  text-decoration:none;
  color: var(--text);
  box-shadow: var(--shadow);
  transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;
}
.nav-card:hover, .nav-card:focus-visible{
  transform: translateY(-3px);
  box-shadow: var(--shadow-hover);
  border-color: var(--blue-lt);
}
.nav-card .card-eyebrow{
  font-family: var(--mono);
  font-weight:600;
  font-size: 0.65rem;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: var(--blue);
}
.nav-card h3{
  font-family: var(--display);
  font-weight: 700;
  font-size: 1.4rem;
  margin: 8px 0 6px;
  letter-spacing: -0.3px;
  color: var(--navy);
}
.nav-card p{ margin:0; font-size: 0.93rem; color: var(--text-soft); }

  document.title = `${year} Season — League of NARPS`;
  const titleEl = document.getElementById('season-title');
  if(titleEl) titleEl.textContent = `${year} Season`;

  const podium = `<div class="trophy-case">
    <div class="plaque" style="border-top-color:var(--gold);">
      <div class="yr">CHAMPION</div>
      <div class="owner">${s.champion.owner}</div>
      <div class="team">${s.champion.team}</div>
    </div>
    <div class="plaque">
      <div class="yr">RUNNER-UP</div>
      <div class="owner">${s.second.owner}</div>
      <div class="team">${s.second.team}</div>
    </div>
    <div class="plaque">
      <div class="yr">THIRD PLACE</div>
      <div class="owner">${s.third.owner}</div>
      <div class="team">${s.third.team}</div>
    </div>
  </div>`;

  const standingsTable = `<div class="table-scroll"><table>
    <thead><tr><th>#</th><th>Team</th><th>Owner</th><th>Record</th><th>Pct</th></tr></thead>
    <tbody>${s.standings.map((t,i) => `<tr>
      <td class="pos">${i+1}</td>
      <td class="name-cell">${t.team}</td>
      <td class="pos">${t.owner}</td>
      <td>${t.w}-${t.l}${t.t ? '-'+t.t : ''}</td>
      <td>${t.pct.toFixed(3)}</td>
    </tr>`).join('')}</tbody>
  </table></div>`;

  const playoffRounds = ['round1','round2','round3','thirdPlace'].map(rk => {
    const r = s.playoffs[rk];
    if(!r) return '';
    const byes = r.byes ? `<p class="muted" style="font-size:0.85rem;">Bye: ${r.byes.map(b=>`${b.team} (${b.pts} pts)`).join(', ')}</p>` : '';
    return `<h3 style="font-family:var(--display); font-size:1.3rem; margin:24px 0 10px;">${r.label}</h3>
    <div class="table-scroll"><table>
      <thead><tr><th>Away</th><th></th><th></th><th></th><th>Home</th></tr></thead>
      <tbody>${r.games.map(matchupRow).join('')}</tbody>
    </table></div>
    ${byes}`;
  }).join('');

  const scheduleWeeks = Object.keys(s.schedule).map(wk => {
    const games = s.schedule[wk];
    return `<details style="margin-bottom:8px;">
      <summary style="cursor:pointer; font-family:var(--mono); font-size:0.85rem; padding:10px 12px; background:var(--parchment-2); border:1px solid var(--line); border-radius:var(--radius);">${wk}</summary>
      <div class="table-scroll" style="margin-top:8px;"><table>
        <thead><tr><th>Away</th><th></th><th></th><th></th><th>Home</th></tr></thead>
        <tbody>${games.map(matchupRow).join('')}</tbody>
      </table></div>
    </details>`;
  }).join('');

  el.innerHTML = `
    ${podium}
    <h2 class="section-title" style="margin-top:40px;">Final Regular Season Standings</h2>
    ${standingsTable}
    <h2 class="section-title" style="margin-top:40px;">Playoffs</h2>
    ${playoffRounds}
    <h2 class="section-title" style="margin-top:40px;">Full Schedule</h2>
    <p class="muted" style="font-size:0.85rem; margin-bottom:12px;">Click a week to expand. Bold indicates the winning team.</p>
    ${scheduleWeeks}
  `;
}

/* Most recent champion — gold plaque */
.plaque--recent{
  background: linear-gradient(150deg, #E9C766 0%, #F7E2A0 45%, #C9A238 100%);
  border-top: 3px solid #A9822B;
  box-shadow: var(--shadow), 0 0 0 1px rgba(169,130,43,0.25);
}
.plaque--recent .yr{ color: var(--navy-soft); }
.plaque--recent .owner{ color: var(--navy); }
.plaque--recent .team{ color: rgba(11,36,71,0.62); }
.plaque--recent .repeat-tag{
  color: var(--white);
  background: var(--navy);
}

// ---------- Team pages ----------
function renderTeamsList(containerId){
  const el = document.getElementById(containerId);
  if(!el) return;
  const sorted = TEAMS.slice().sort((a,b) => b.winPct - a.winPct);
  el.innerHTML = `<div class="card-grid">` + sorted.map(t => `
    <a class="nav-card" href="team.html?team=${encodeURIComponent(t.key)}">
      <div class="card-eyebrow">${t.champs > 0 ? `${t.champs}x Champion` : `${t.seasons} Seasons`}</div>
      <h3>${t.owner}</h3>
      <p>${t.team} — ${t.gamesW}-${t.gamesL}${t.gamesT ? '-'+t.gamesT : ''} all-time (${fmtPct(t.winPct)})</p>
    </a>`).join('') + `</div>`;
}
}

/* ---------- Awards ---------- */
.award-grid{
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
}
.award-card{
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 22px;
  box-shadow: var(--shadow);
  border-top: 3px solid var(--blue);
}
.award-card .medal{
  font-family: var(--mono);
  font-weight:600;
  font-size: 0.65rem;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: var(--red);
}
.award-card h3{
  font-family: var(--display);
  font-weight: 700;
  font-size: 1.3rem;
  margin: 8px 0 10px;
  color: var(--navy);
  letter-spacing: -0.3px;
}
.award-card .headline-stat{
  font-family: var(--display);
  font-weight: 700;
  font-size: 2.1rem;
  color: var(--blue);
  line-height: 1;
  margin-bottom: 6px;
}
.award-card p{ margin:0; color: var(--text-soft); font-size: 0.91rem; }

  document.title = `${t.owner} — League of NARPS`;
  const titleEl = document.getElementById('team-title');
  if(titleEl) titleEl.textContent = `${t.owner}`;
  const subEl = document.getElementById('team-subtitle');
  if(subEl) subEl.textContent = t.team;

  const titles = CHAMPIONS.filter(c => c.key === key).sort((a,b) => a.year - b.year);
  const allTimeRecords = computeAllTimeRecords();
  const top3Count = allTimeRecords.topThree[key] || 0;

  const statCards = `<div class="card-grid" style="margin-bottom:32px;">
    <div class="award-card"><div class="medal">Career Record</div><div class="headline-stat">${t.gamesW}-${t.gamesL}${t.gamesT ? '-'+t.gamesT : ''}</div><p>${fmtPct(t.winPct)} win rate across ${t.seasons} seasons</p></div>
    <div class="award-card"><div class="medal">Championships</div><div class="headline-stat">${t.champs}</div><p>${titles.length ? titles.map(x=>x.year).join(', ') : 'None yet'}</p></div>
    <div class="award-card"><div class="medal">Top 3 Finishes</div><div class="headline-stat">${top3Count}</div><p>Times finishing 1st, 2nd, or 3rd in the league</p></div>
    <div class="award-card"><div class="medal">Playoff Record</div><div class="headline-stat">${t.playoffW}-${t.playoffL}</div><p>${fmtPct(t.playoffWinPct)} playoff win rate, ${t.playoffApp} appearances</p></div>
    <div class="award-card"><div class="medal">Scoring</div><div class="headline-stat">${t.gameAvgPF}</div><p>pts/gm career average (${t.diff > 0 ? '+' : ''}${t.diff} diff/gm)</p></div>
  </div>`;

  const champGrid = titles.length ? `<div class="trophy-case">${titles.map(c => `
    <div class="plaque" style="text-align:center;">
      <div class="owner" style="font-size:1.8rem; margin:6px 0;">${c.year}</div>
    </div>`).join('')}</div>` : `<p class="muted">No championships yet — but there's always next year.</p>`;

  const lastName = n => (n || '').trim().split(/\s+/).pop().toLowerCase();
  const years = Object.keys(SEASONS).sort((a,b) => b - a);
  const seasonRows = years.map(y => {
    const s = SEASONS[y];
    const row = s.standings.find(r => lastName(r.owner) === lastName(t.owner));
    if(!row) return '';
    const rank = s.standings.indexOf(row) + 1;
    let finish = `${rank}${rank===1?'st':rank===2?'nd':rank===3?'rd':'th'} place`;
    if(lastName(s.champion.owner) === lastName(t.owner)) finish = 'Champion 🏆';
    else if(lastName(s.second.owner) === lastName(t.owner)) finish = 'Runner-up';
    else if(lastName(s.third.owner) === lastName(t.owner)) finish = 'Third place';
    return `<tr>
      <td class="pos">${y}</td>
      <td>${row.w}-${row.l}${row.t ? '-'+row.t : ''}</td>
      <td>${row.pct.toFixed(3)}</td>
      <td class="name-cell">${finish}</td>
      <td><a href="season.html?year=${y}" style="font-family:var(--mono); font-size:0.8rem; text-decoration:underline; color:var(--blue);">View season →</a></td>
    </tr>`;
  }).join('');

  const seasonTable = years.length ? `<div class="table-scroll"><table>
    <thead><tr><th>Year</th><th>Record</th><th>Pct</th><th>Finish</th><th></th></tr></thead>
    <tbody>${seasonRows}</tbody>
  </table></div>` : `<p class="muted">Detailed season-by-season data not added yet.</p>`;

  el.innerHTML = `
    ${statCards}
    <h2 class="section-title" style="margin-top:8px;">Championships</h2>
    <div style="margin:20px 0 40px;">${champGrid}</div>
    <h2 class="section-title">Season by Season</h2>
    <p class="muted" style="font-size:0.85rem; margin-bottom:12px;">Only seasons with full data entered so far are shown here.</p>
    ${seasonTable}
  `;
}

/* ---------- Footer ---------- */
footer{
  background: var(--navy);
  color: rgba(255,255,255,0.6);
  padding: 26px 0;
  font-family: var(--mono);
  font-weight:500;
  font-size: 0.75rem;
  text-align:center;
}
footer a{ color: var(--blue-lt); text-decoration:none; }

// ---------- Head-to-head (computed from verified season data) ----------
function lastNameOf(n){ return (n || '').trim().split(/\s+/).pop().toLowerCase(); }

// ---------- All-Time Records (computed from verified season data) ----------
function computeAllTimeRecords(){
  const keyByLastName = {};
  TEAMS.forEach(t => { keyByLastName[lastNameOf(t.owner)] = t.key; });

  const regPoints = {}, playoffWins = {}, playoffPoints = {}, hundredPlusWeeks = {}, topThree = {}, scoringTitles = {};
  let highestWeek = { key: null, score: -Infinity, opponentInfo: '', holders: [] };
  let lowestWeek = { score: Infinity, holders: [] };
  let bestSeasonWins = { wins: -Infinity, holders: [] };
  let bestSeasonPoints = { points: -Infinity, holders: [] };

  TEAMS.forEach(t => {
    regPoints[t.key] = 0; playoffWins[t.key] = 0; playoffPoints[t.key] = 0;
    hundredPlusWeeks[t.key] = 0; topThree[t.key] = 0; scoringTitles[t.key] = 0;
  });

  function addRegScore(mgr, score, week, year){
    const k = keyByLastName[lastNameOf(mgr)];
    if(!k) return;
    regPoints[k] += score;
    if(score >= 100) hundredPlusWeeks[k]++;
    if(score > highestWeek.score){
      highestWeek = { score, holders: [{ key: k, info: `${year}, ${week}` }] };
    } else if(score === highestWeek.score){
      highestWeek.holders.push({ key: k, info: `${year}, ${week}` });
    }
    if(score < lowestWeek.score){
      lowestWeek = { score, holders: [{ key: k, info: `${year}, ${week}` }] };
    } else if(score === lowestWeek.score){
      lowestWeek.holders.push({ key: k, info: `${year}, ${week}` });
    }
  }

  Object.entries(SEASONS).forEach(([year, s]) => {
    const seasonPoints = {};
    Object.entries(s.schedule || {}).forEach(([week, games]) => {
      games.forEach(g => {
        addRegScore(g.awayMgr, g.awayScore, week, year);
        addRegScore(g.homeMgr, g.homeScore, week, year);
        const ak = keyByLastName[lastNameOf(g.awayMgr)];
        const hk = keyByLastName[lastNameOf(g.homeMgr)];
        if(ak) seasonPoints[ak] = (seasonPoints[ak]||0) + g.awayScore;
        if(hk) seasonPoints[hk] = (seasonPoints[hk]||0) + g.homeScore;
      });
    });
    Object.values(s.playoffs || {}).forEach(round => {
      (round.games || []).forEach(g => {
        const ak = keyByLastName[lastNameOf(g.awayMgr)];
        const hk = keyByLastName[lastNameOf(g.homeMgr)];
        if(ak){ playoffPoints[ak] += g.awayScore; }
        if(hk){ playoffPoints[hk] += g.homeScore; }
        if(g.awayScore > g.homeScore && ak) playoffWins[ak]++;
        else if(g.homeScore > g.awayScore && hk) playoffWins[hk]++;
      });
    });
    [s.champion, s.second, s.third].forEach(p => {
      const k = keyByLastName[lastNameOf(p.owner)];
      if(k) topThree[k]++;
    });

    (s.standings || []).forEach(row => {
      const k = keyByLastName[lastNameOf(row.owner)];
      if(!k) return;
      if(row.w > bestSeasonWins.wins){
        bestSeasonWins = { wins: row.w, holders: [{ key: k, year }] };
      } else if(row.w === bestSeasonWins.wins){
        bestSeasonWins.holders.push({ key: k, year });
      }
    });

    const seasonLeaderEntry = Object.entries(seasonPoints).sort((a,b) => b[1]-a[1])[0];
    if(seasonLeaderEntry){
      const [leaderKey, leaderPoints] = seasonLeaderEntry;
      scoringTitles[leaderKey] = (scoringTitles[leaderKey]||0) + 1;
      if(leaderPoints > bestSeasonPoints.points){
        bestSeasonPoints = { points: leaderPoints, holders: [{ key: leaderKey, year }] };
      } else if(leaderPoints === bestSeasonPoints.points){
        bestSeasonPoints.holders.push({ key: leaderKey, year });
      }
    }
  });

  return { regPoints, playoffWins, playoffPoints, hundredPlusWeeks, topThree, highestWeek, lowestWeek, bestSeasonWins, bestSeasonPoints, scoringTitles };
}

function renderAllTimeRecords(containerId){
  const el = document.getElementById(containerId);
  if(!el) return;
  const r = computeAllTimeRecords();
  const nameOf = k => (TEAMS.find(t => t.key === k) || {}).owner || k;
  const fmtNum = n => Number(n).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 1 });
  const joinNames = (names) => names.length <= 1 ? (names[0]||'') :
    names.length === 2 ? `${names[0]} & ${names[1]}` :
    `${names.slice(0,-1).join(', ')} & ${names[names.length-1]}`;

  // Returns {value, owners:[names]} for every TEAMS entry tied at the max of `field`
  const allMaxTeamsField = (field) => {
    const maxVal = Math.max(...TEAMS.map(t => t[field]));
    return { value: maxVal, owners: TEAMS.filter(t => t[field] === maxVal).map(t => t.owner) };
  };
  // Returns {value, owners:[names]} for every key tied at the max value in a computed dict
  const allMaxComputed = (obj) => {
    const maxVal = Math.max(...Object.values(obj));
    const owners = Object.entries(obj).filter(([,v]) => v === maxVal).map(([k]) => nameOf(k));
    return { value: maxVal, owners };
  };

  const mostRegWins = allMaxTeamsField('gamesW');
  const mostRegPts = allMaxComputed(r.regPoints);
  const mostPlayoffApp = allMaxTeamsField('playoffApp');
  const mostPlayoffWins = allMaxTeamsField('playoffW');
  const mostPlayoffPts = allMaxComputed(r.playoffPoints);
  const mostChamps = allMaxTeamsField('champs');
  const mostTop3 = allMaxComputed(r.topThree);
  const most100 = allMaxComputed(r.hundredPlusWeeks);
  const mostScoringTitles = allMaxComputed(r.scoringTitles);

  const seasonWinHolders = r.bestSeasonWins.holders.map(h => `${nameOf(h.key)} (${h.year})`);
  const seasonPtsHolders = r.bestSeasonPoints.holders.map(h => `${nameOf(h.key)} (${h.year})`);

  const cards = [
    { medal: 'Regular Season', title: 'Most Regular Season Wins', stat: fmtNum(mostRegWins.value), body: `${joinNames(mostRegWins.owners)} — most regular season wins in league history.` },
    { medal: 'Regular Season', title: 'Most Regular Season Points', stat: fmtNum(mostRegPts.value), body: `${joinNames(mostRegPts.owners)} — most total regular season points scored, career.` },
    { medal: 'Single Season', title: 'Most Wins in a Season', stat: fmtNum(r.bestSeasonWins.wins), body: `${joinNames(seasonWinHolders)} — most regular season wins in a single year.` },
    { medal: 'Single Season', title: 'Most Points Scored in a Season', stat: fmtNum(r.bestSeasonPoints.points), body: `${joinNames(seasonPtsHolders)} — most total regular season points in a single year.` },
    { medal: 'Single Season', title: 'Most Scoring Titles', stat: fmtNum(mostScoringTitles.value), body: `${joinNames(mostScoringTitles.owners)} — led the league in points scored the most times.` },
    { medal: 'Playoffs', title: 'Most Playoff Appearances', stat: fmtNum(mostPlayoffApp.value), body: `${joinNames(mostPlayoffApp.owners)} — most playoff appearances in league history.` },
    { medal: 'Playoffs', title: 'Most Playoff Wins', stat: fmtNum(mostPlayoffWins.value), body: `${joinNames(mostPlayoffWins.owners)} — most playoff wins in league history.` },
    { medal: 'Playoffs', title: 'Most Playoff Points', stat: fmtNum(mostPlayoffPts.value), body: `${joinNames(mostPlayoffPts.owners)} — most total points scored across all playoff games.` },
    { medal: 'Championships', title: 'Most Championships', stat: fmtNum(mostChamps.value), body: `${joinNames(mostChamps.owners)} — most league titles won.` },
    { medal: 'Championships', title: 'Most Top-3 Finishes', stat: fmtNum(mostTop3.value), body: `${joinNames(mostTop3.owners)} — most 1st, 2nd, or 3rd place finishes.` },
    { medal: 'Single Game', title: 'Highest Scoring Week (Regular Season)', stat: fmtNum(r.highestWeek.score), body: `${joinNames(r.highestWeek.holders.map(h => `${nameOf(h.key)} (${h.info})`))} — highest single-week score in league history.` },
    { medal: 'Single Game', title: 'Lowest Scoring Week (Regular Season)', stat: fmtNum(r.lowestWeek.score), body: `${joinNames(r.lowestWeek.holders.map(h => `${nameOf(h.key)} (${h.info})`))} — lowest single-week score in league history.` },
    { medal: 'Consistency', title: 'Most 100+ Point Weeks (Regular Season)', stat: fmtNum(most100.value), body: `${joinNames(most100.owners)} — most weeks scoring 100+ points, career.` },
  ];

  el.innerHTML = `<div class="award-grid">` + cards.map(c => `<div class="award-card">
    <div class="medal">${c.medal}</div>
    <h3>${c.title}</h3>
    <div class="headline-stat">${c.stat}</div>
    <p>${c.body}</p>
  </div>`).join('') + `</div>`;
}
}
.h2h-grid thead th{
  background: var(--navy);
  color: var(--white);
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-size: 0.68rem;
  padding: 8px 6px;
  position: static;
}
.h2h-grid tbody th{
  background: var(--bg);
  text-align:left;
  font-family: var(--body);
  font-weight:600;
  writing-mode: horizontal-tb;
  white-space: nowrap;
  padding: 8px 10px;
}
.h2h-grid td{ cursor: default; }
.h2h-grid td.self{ background: repeating-linear-gradient(45deg, var(--line), var(--line) 4px, var(--panel) 4px, var(--panel) 8px); }
.h2h-grid td.dominant{ background: rgba(47,111,237,0.12); font-weight:600; color: var(--navy); }
.h2h-grid td.trouble{ background: rgba(214,40,57,0.10); color: var(--red-dk); }
.h2h-grid td:hover:not(.self){ outline: 2px solid var(--blue); outline-offset:-2px; }
.h2h-legend{
  display:flex; gap:18px; flex-wrap:wrap; margin-top:14px;
  font-family: var(--mono); font-size: 0.75rem; color: var(--text-soft);
}
.h2h-legend span{ display:inline-flex; align-items:center; gap:6px; }
.h2h-swatch{ width:12px; height:12px; border-radius:2px; display:inline-block; }

/* ---------- utility ---------- */
.muted{ color: var(--text-soft); }
.center{ text-align:center; }
:focus-visible{ outline: 2px solid var(--blue); outline-offset: 2px; }
