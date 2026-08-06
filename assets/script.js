// ---------- Nav toggle (mobile) ----------
function initNav(){
  const btn = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if(!btn || !nav) return;
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// ---------- Trophy case ----------
function renderTrophyCase(containerId, limit){
  const el = document.getElementById(containerId);
  if(!el) return;
  const list = limit ? CHAMPIONS.slice(-limit) : CHAMPIONS.slice();
  list.reverse();
  el.innerHTML = list.map(c => {
    const titleCount = CHAMPIONS.filter(x => x.key === c.key && x.year <= c.year).length;
    const tag = titleCount > 1 ? `<span class="repeat-tag">×${titleCount}</span>` : '';
    return `<div class="plaque">
      <div class="yr">${c.year} CHAMPION</div>
      <div class="owner">${c.owner}</div>
      <div class="team">${c.team}</div>
      ${tag}
    </div>`;
  }).join('');
}

// ---------- Standings table ----------
function fmtPct(v){ return v == null ? '—' : (v*100).toFixed(1)+'%'; }

function standingsRowHTML(t, i){
  return `<tr>
    <td class="pos">${i+1}</td>
    <td class="name-cell">${t.owner}<div class="muted" style="font-size:0.78rem;font-family:var(--body);font-weight:400;">${t.team}</div></td>
    <td class="pos">${t.seasons} yrs</td>
    <td>${t.champs > 0 ? `<span class="pill">${t.champs}★</span>` : '—'}</td>
    <td class="pos">${t.playoffApp}</td>
    <td>${t.gamesW}-${t.gamesL}${t.gamesT ? '-'+t.gamesT : ''}</td>
    <td>${fmtPct(t.winPct)}</td>
    <td>${t.diff > 0 ? '+' : ''}${t.diff.toFixed(1)}</td>
    <td>${t.gameAvgPF.toFixed(1)}</td>
    <td>${t.playoffW}-${t.playoffL}</td>
    <td>${t.highScore.toFixed(1)}</td>
  </tr>`;
}

function renderStandings(containerId){
  const el = document.getElementById(containerId);
  if(!el) return;
  let data = TEAMS.slice();
  let sortKey = 'winPct';
  let sortDir = 'desc';

  function sortData(){
    data.sort((a,b) => {
      let av = sortKey === 'record' ? a.winPct : a[sortKey];
      let bv = sortKey === 'record' ? b.winPct : b[sortKey];
      if(typeof av === 'string') return sortDir === 'asc' ? av.localeCompare(bv) : bv.localeCompare(av);
      av = av == null ? -Infinity : av;
      bv = bv == null ? -Infinity : bv;
      return sortDir === 'asc' ? av - bv : bv - av;
    });
  }

  function draw(){
    sortData();
    el.innerHTML = `<div class="table-scroll"><table id="standings-table">
      <thead><tr>
        <th data-key="rank">#</th>
        <th data-key="owner">Owner / Team</th>
        <th data-key="seasons">Seasons</th>
        <th data-key="champs">Titles</th>
        <th data-key="playoffApp">Playoffs</th>
        <th data-key="record">Record</th>
        <th data-key="winPct">Win%</th>
        <th data-key="diff">Pt Diff/G</th>
        <th data-key="gameAvgPF">Avg PF</th>
        <th data-key="playoffW">Playoff Record</th>
        <th data-key="highScore">Best Gm</th>
      </tr></thead>
      <tbody>${data.map(standingsRowHTML).join('')}</tbody>
    </table></div>
    <p class="muted" style="font-size:0.82rem;margin-top:10px;">Click a column header to sort. Playoff Record reflects career playoff wins-losses.</p>`;

    el.querySelectorAll('thead th').forEach(th => {
      const key = th.dataset.key;
      if(key === 'rank') return; // position column isn't sortable
      th.addEventListener('click', () => {
        if(sortKey === key){ sortDir = sortDir === 'asc' ? 'desc' : 'asc'; }
        else { sortKey = key; sortDir = 'desc'; }
        draw();
      });
      if(key === sortKey) th.classList.add(sortDir === 'asc' ? 'sorted-asc' : 'sorted-desc');
    });
  }
  draw();
}

// ---------- Awards ----------
function renderAwards(containerId){
  const el = document.getElementById(containerId);
  if(!el) return;

  const byMax = (key) => TEAMS.slice().sort((a,b)=>b[key]-a[key])[0];
  const byMin = (key) => TEAMS.slice().sort((a,b)=>a[key]-b[key])[0];
  const byMaxPlayoff = TEAMS.filter(t=>t.playoffApp >= 5).sort((a,b)=>b.playoffWinPct-a.playoffWinPct)[0];
  const byMinPlayoff = TEAMS.filter(t=>t.playoffApp >= 5).sort((a,b)=>a.playoffWinPct-b.playoffWinPct)[0];

  const highScore = byMax('highScore');
  const bestDiff = byMax('diff');
  const worstDiff = byMin('diff');
  const bestWinPct = byMax('winPct');
  const worstWinPct = byMin('winPct');
  const mostTitles = byMax('champs');
  const bestOffense = byMax('gameAvgPF');

  // longest current title drought among teams with a past title
  const lastTitleYear = {};
  CHAMPIONS.forEach(c => { lastTitleYear[c.key] = Math.max(lastTitleYear[c.key]||0, c.year); });
  let droughtCandidates = TEAMS.filter(t=>t.champs>0).map(t => ({t, gap: LATEST_SEASON - lastTitleYear[t.key]}));
  droughtCandidates.sort((a,b)=>b.gap-a.gap);
  const longestDrought = droughtCandidates[0];

  // never-champion with most playoff appearances (bad luck award)
  const badLuck = TEAMS.filter(t=>t.champs===0).sort((a,b)=>b.playoffApp-a.playoffApp)[0];

  const cards = [
    {
      medal: 'Single-Game Record', title: 'Highest Score Ever',
      stat: `${highScore.highScore} pts`,
      body: `${highScore.owner} (${highScore.team}) put up the biggest single-game total in league history.`
    },
    {
      medal: 'Hall of Fame', title: 'Most Championships',
      stat: `${mostTitles.champs} titles`,
      body: `${mostTitles.owner} leads the league with ${mostTitles.champs} championships across ${mostTitles.seasons} seasons.`
    },
    {
      medal: 'Best Point Differential', title: 'Most Dominant Scorer',
      stat: `+${bestDiff.diff}/gm`,
      body: `${bestDiff.owner} outscores opponents by ${bestDiff.diff} points per game on average — the best margin in NARPS history.`
    },
    {
      medal: 'Worst Point Differential', title: 'Running Up the Score (Against Them)',
      stat: `${worstDiff.diff}/gm`,
      body: `${worstDiff.owner} has been outscored by ${Math.abs(worstDiff.diff)} points per game on average, the toughest margin in the league.`
    },
    {
      medal: 'Best Winning Percentage', title: 'Most Consistent Winner',
      stat: fmtPct(bestWinPct.winPct),
      body: `${bestWinPct.owner} has the best all-time regular-record winning percentage in the league.`
    },
    {
      medal: 'Worst Winning Percentage', title: 'Cellar Dweller',
      stat: fmtPct(worstWinPct.winPct),
      body: `${worstWinPct.owner} carries the league's toughest all-time record.`
    },
    {
      medal: 'Clutch Factor', title: 'Best Playoff Win%',
      stat: fmtPct(byMaxPlayoff.playoffWinPct),
      body: `${byMaxPlayoff.owner} turns it on in the postseason, winning ${fmtPct(byMaxPlayoff.playoffWinPct)} of playoff games (min. 5 appearances).`
    },
    {
      medal: 'Choke Artist', title: 'Worst Playoff Win%',
      stat: fmtPct(byMinPlayoff.playoffWinPct),
      body: `${byMinPlayoff.owner} has struggled most once the postseason arrives (min. 5 appearances).`
    },
    {
      medal: 'Best Offense', title: 'Highest Career Scoring Average',
      stat: `${bestOffense.gameAvgPF} pts/gm`,
      body: `${bestOffense.owner} has the highest career average points per game in NARPS history.`
    },
    {
      medal: 'Bad Beat', title: 'Playoff Regular, Zero Rings',
      stat: `${badLuck.playoffApp} appearances`,
      body: `${badLuck.owner} has made the playoffs ${badLuck.playoffApp} times without ever winning it all.`
    },
    {
      medal: 'Championship Drought', title: 'Longest Time Since a Title',
      stat: `${longestDrought.gap} yrs`,
      body: `${longestDrought.t.owner} last won it all in ${lastTitleYear[longestDrought.t.key]} — ${longestDrought.gap} seasons and counting.`
    },
  ];

  el.innerHTML = cards.map(c => `<div class="award-card">
    <div class="medal">${c.medal}</div>
    <h3>${c.title}</h3>
    <div class="headline-stat">${c.stat}</div>
    <p>${c.body}</p>
  </div>`).join('');
}

// ---------- Newsletters ----------
function renderNewsletters(containerId){
  const el = document.getElementById(containerId);
  if(!el) return;
  const sorted = NEWSLETTERS.slice().sort((a,b) => (a.vol - b.vol) || (a.no - b.no));
  el.innerHTML = `<div class="table-scroll"><table>
    <thead><tr><th>Issue</th><th>Title</th><th>Season</th><th></th></tr></thead>
    <tbody>
      ${sorted.map(n => `<tr>
        <td class="pos">Vol. ${n.vol}, No. ${n.no}</td>
        <td class="name-cell">${n.title}</td>
        <td class="pos">${n.year}</td>
        <td><a href="${n.url}" target="_blank" rel="noopener" style="font-family:var(--mono); font-size:0.8rem; text-decoration:underline; color:var(--field); white-space:nowrap;">Read →</a></td>
      </tr>`).join('')}
    </tbody>
  </table></div>`;
}

// ---------- Seasons ----------
function renderSeasonsList(containerId){
  const el = document.getElementById(containerId);
  if(!el) return;
  const years = Object.keys(SEASONS).sort((a,b) => b - a);
  el.innerHTML = `<div class="card-grid">` + years.map(y => {
    const s = SEASONS[y];
    return `<a class="nav-card" href="season.html?year=${y}">
      <h3>${y}</h3>
      <p style="margin:0;">
        🥇 <strong>${s.champion.owner}</strong><br>
        🥈 ${s.second.owner}<br>
        🥉 ${s.third.owner}
      </p>
    </a>`;
  }).join('') + `</div>`;
}

function matchupRow(g){
  const awayWin = g.awayScore > g.homeScore;
  return `<tr>
    <td class="${awayWin ? 'name-cell' : ''}" style="${awayWin ? 'font-weight:700;' : ''}">${g.away}</td>
    <td class="pos">${g.awayScore}</td>
    <td class="pos">–</td>
    <td class="pos">${g.homeScore}</td>
    <td class="${!awayWin ? 'name-cell' : ''}" style="${!awayWin ? 'font-weight:700;' : ''}">${g.home}</td>
  </tr>`;
}

function renderSeasonDetail(containerId){
  const el = document.getElementById(containerId);
  if(!el) return;
  const params = new URLSearchParams(window.location.search);
  const year = params.get('year') || Object.keys(SEASONS).sort((a,b)=>b-a)[0];
  const s = SEASONS[year];
  if(!s){ el.innerHTML = `<p>No data found for ${year}.</p>`; return; }

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

// ---------- Kickoff countdown ----------
function renderCountdown(containerId, targetDateStr){
  const el = document.getElementById(containerId);
  if(!el) return;
  const target = new Date(targetDateStr).getTime();

  function update(){
    const diff = target - Date.now();
    if(diff <= 0){
      el.innerHTML = `<div class="kickoff-live">🏈 Kickoff is here — let's go!</div>`;
      clearInterval(timer);
      return;
    }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff / 3600000) % 24);
    const m = Math.floor((diff / 60000) % 60);
    const s = Math.floor((diff / 1000) % 60);
    el.innerHTML = `<div class="countdown-grid">
      <div class="countdown-unit"><div class="countdown-num">${d}</div><div class="countdown-label">Days</div></div>
      <div class="countdown-unit"><div class="countdown-num">${String(h).padStart(2,'0')}</div><div class="countdown-label">Hrs</div></div>
      <div class="countdown-unit"><div class="countdown-num">${String(m).padStart(2,'0')}</div><div class="countdown-label">Min</div></div>
      <div class="countdown-unit"><div class="countdown-num">${String(s).padStart(2,'0')}</div><div class="countdown-label">Sec</div></div>
    </div>`;
  }
  update();
  const timer = setInterval(update, 1000);
}

// ---------- Team pages ----------
function renderTeamsList(containerId){
  const el = document.getElementById(containerId);
  if(!el) return;
  const sorted = TEAMS.slice().sort((a,b) => lastNameOf(a.owner).localeCompare(lastNameOf(b.owner)));
  el.innerHTML = `<div class="card-grid">` + sorted.map(t => `
    <a class="nav-card" href="team.html?team=${encodeURIComponent(t.key)}">
      <div class="card-eyebrow">${t.champs > 0 ? `${t.champs}x Champion` : `${t.seasons} Seasons`}</div>
      <h3>${t.owner}</h3>
      <p>${t.team} — ${t.gamesW}-${t.gamesL}${t.gamesT ? '-'+t.gamesT : ''} all-time (${fmtPct(t.winPct)})</p>
    </a>`).join('') + `</div>`;
}

function renderTeamDetail(containerId){
  const el = document.getElementById(containerId);
  if(!el) return;
  const params = new URLSearchParams(window.location.search);
  const key = params.get('team');
  const t = TEAMS.find(x => x.key === key);
  if(!t){ el.innerHTML = `<p>No team found. <a href="teams.html">Back to all teams</a></p>`; return; }

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

// ---------- Survivor ----------
function renderSurvivor(containerId){
  const el = document.getElementById(containerId);
  if(!el) return;
  const years = Object.keys(SURVIVOR).sort((a,b) => b - a);
  const year = years[0];
  const s = SURVIVOR[year];
  if(!s){ el.innerHTML = `<p class="muted">No survivor data yet.</p>`; return; }

  const sorted = s.players.slice().sort((a,b) => {
    if(a.result === 'Winner') return -1;
    if(b.result === 'Winner') return 1;
    return (b.eliminatedWeek || 0) - (a.eliminatedWeek || 0);
  });

  const champCard = `<div class="trophy-case">
    <div class="plaque">
      <div class="yr">${year} SURVIVOR CHAMPION</div>
      <div class="owner">${s.champion}</div>
      <div class="team">Last one standing</div>
    </div>
  </div>`;

  const leaderboardRows = sorted.map((p, i) => {
    const result = p.result === 'Winner' ? 'Winner 🏆' : `Eliminated — Week ${p.eliminatedWeek}`;
    const losingPick = p.result === 'Winner' ? '—' : (p.picks.find(pk => pk.week === p.eliminatedWeek) || {}).team || '—';
    return `<tr>
      <td class="pos">${i+1}</td>
      <td class="name-cell">${p.name}</td>
      <td>${result}</td>
      <td class="pos">${losingPick}</td>
      <td class="pos">${p.picks.length} picks made</td>
    </tr>`;
  }).join('');

  const leaderboard = `<div class="table-scroll"><table>
    <thead><tr><th>#</th><th>Player</th><th>Result</th><th>Losing Pick</th><th>Survived</th></tr></thead>
    <tbody>${leaderboardRows}</tbody>
  </table></div>`;

  const pickDetails = sorted.map(p => {
    const rows = p.picks.map(pk => `<tr>
      <td class="pos">Week ${pk.week}</td>
      <td class="${pk.loss ? '' : 'name-cell'}" style="${pk.loss ? 'color:var(--red); text-decoration:line-through;' : ''}">${pk.team}${pk.loss ? ' (loss)' : ''}</td>
    </tr>`).join('');
    return `<details style="margin-bottom:8px;">
      <summary style="cursor:pointer; font-family:var(--mono); font-size:0.85rem; padding:10px 12px; background:var(--panel); border:1px solid var(--line); border-radius:var(--radius);">${p.name} — ${p.result === 'Winner' ? 'Winner' : 'Eliminated Week ' + p.eliminatedWeek}</summary>
      <div class="table-scroll" style="margin-top:8px;"><table>
        <thead><tr><th>Week</th><th>Pick</th></tr></thead>
        <tbody>${rows}</tbody>
      </table></div>
    </details>`;
  }).join('');

  el.innerHTML = `
    ${champCard}
    <h2 class="section-title" style="margin-top:40px;">${year} Leaderboard</h2>
    ${leaderboard}
    <h2 class="section-title" style="margin-top:40px;">Weekly Picks</h2>
    <p class="muted" style="font-size:0.85rem; margin-bottom:12px;">Click a player to see every pick they made, week by week. Losses are struck through — two losses means elimination.</p>
    ${pickDetails}
  `;
}

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

  // Full instance lists power the 2nd/3rd place tiers on the records page.
  const seasonWinInstances = [];   // {key, year, wins}
  const seasonPointInstances = []; // {key, year, points}
  const gameScoreInstances = [];   // {key, year, week, score} (regular season, both sides)

  TEAMS.forEach(t => {
    regPoints[t.key] = 0; playoffWins[t.key] = 0; playoffPoints[t.key] = 0;
    hundredPlusWeeks[t.key] = 0; topThree[t.key] = 0; scoringTitles[t.key] = 0;
  });

  function addRegScore(mgr, score, week, year){
    const k = keyByLastName[lastNameOf(mgr)];
    if(!k) return;
    regPoints[k] += score;
    if(score >= 100) hundredPlusWeeks[k]++;
    gameScoreInstances.push({ key: k, year, week, score });
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

  // Chronological order (year, then week number) so win/loss streaks can be
  // tracked correctly across season boundaries.
  const years = Object.keys(SEASONS).sort((a,b) => Number(a) - Number(b));
  const weekNum = w => parseInt(String(w).replace(/\D/g, ''), 10) || 0;

  const gameLog = {}; // key -> ordered array of 'W'|'L'|'T' with context
  TEAMS.forEach(t => { gameLog[t.key] = []; });

  years.forEach(year => {
    const s = SEASONS[year];
    const seasonPoints = {};
    const weeks = Object.keys(s.schedule || {}).sort((a,b) => weekNum(a) - weekNum(b));
    weeks.forEach(week => {
      (s.schedule[week] || []).forEach(g => {
        addRegScore(g.awayMgr, g.awayScore, week, year);
        addRegScore(g.homeMgr, g.homeScore, week, year);
        const ak = keyByLastName[lastNameOf(g.awayMgr)];
        const hk = keyByLastName[lastNameOf(g.homeMgr)];
        if(ak) seasonPoints[ak] = (seasonPoints[ak]||0) + g.awayScore;
        if(hk) seasonPoints[hk] = (seasonPoints[hk]||0) + g.homeScore;

        let aRes, hRes;
        if(g.awayScore > g.homeScore){ aRes = 'W'; hRes = 'L'; }
        else if(g.homeScore > g.awayScore){ aRes = 'L'; hRes = 'W'; }
        else { aRes = 'T'; hRes = 'T'; }
        if(ak) gameLog[ak].push({ r: aRes, year, week });
        if(hk) gameLog[hk].push({ r: hRes, year, week });
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
      seasonWinInstances.push({ key: k, year, wins: row.w });
      if(row.w > bestSeasonWins.wins){
        bestSeasonWins = { wins: row.w, holders: [{ key: k, year }] };
      } else if(row.w === bestSeasonWins.wins){
        bestSeasonWins.holders.push({ key: k, year });
      }
    });

    Object.entries(seasonPoints).forEach(([k, points]) => {
      seasonPointInstances.push({ key: k, year, points });
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

  // Longest regular-season win/loss streaks, allowed to span multiple seasons.
  // A tie ("T") breaks both streaks. Each team's own best streak (and the
  // games that produced it) is recorded.
  const winStreak = {}, lossStreak = {};
  TEAMS.forEach(t => {
    winStreak[t.key] = { best: 0, start: null, end: null };
    lossStreak[t.key] = { best: 0, start: null, end: null };
  });

  Object.keys(gameLog).forEach(k => {
    let curW = 0, curL = 0, startW = null, startL = null;
    gameLog[k].forEach(g => {
      if(g.r === 'W'){
        if(curW === 0) startW = g;
        curW++; curL = 0;
        if(curW > winStreak[k].best) winStreak[k] = { best: curW, start: startW, end: g };
      } else if(g.r === 'L'){
        if(curL === 0) startL = g;
        curL++; curW = 0;
        if(curL > lossStreak[k].best) lossStreak[k] = { best: curL, start: startL, end: g };
      } else {
        curW = 0; curL = 0;
      }
    });
  });

  return {
    regPoints, playoffWins, playoffPoints, hundredPlusWeeks, topThree, scoringTitles,
    highestWeek, lowestWeek, bestSeasonWins, bestSeasonPoints,
    seasonWinInstances, seasonPointInstances, gameScoreInstances,
    winStreak, lossStreak
  };
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
  const ordinal = n => n === 2 ? '2nd' : n === 3 ? '3rd' : `${n}th`;

  // Groups {value, label} items into the top-3 *distinct* values (descending
  // by default), keeping every tied label within each tier. Used to surface
  // 1st/2nd/3rd place — including ties — for every record category.
  const tiersFromItems = (items, desc = true) => {
    const sorted = items.slice().sort((a,b) => desc ? b.value - a.value : a.value - b.value);
    const distinctValues = [...new Set(sorted.map(i => i.value))].slice(0, 3);
    return distinctValues.map((value, idx) => ({
      rank: idx + 1,
      value,
      labels: sorted.filter(i => i.value === value).map(i => i.label)
    }));
  };
  const tiersFromTeamsField = (field) => tiersFromItems(TEAMS.map(t => ({ value: t[field], label: t.owner })));
  const tiersFromComputed = (obj) => tiersFromItems(Object.entries(obj).map(([k,v]) => ({ value: v, label: nameOf(k) })));
  const tiersFromInstances = (instances, valueField, labelFn, desc = true) =>
    tiersFromItems(instances.map(inst => ({ value: inst[valueField], label: labelFn(inst) })), desc);

  const winStreakVals = {}; Object.entries(r.winStreak).forEach(([k,v]) => winStreakVals[k] = v.best);
  const lossStreakVals = {}; Object.entries(r.lossStreak).forEach(([k,v]) => lossStreakVals[k] = v.best);
  const rangeText = (rng) => rng.start.year === rng.end.year
    ? `${rng.start.year}, ${rng.start.week}–${rng.end.week}`
    : `${rng.start.year} ${rng.start.week} – ${rng.end.year} ${rng.end.week}`;
  // Same as tiersFromComputed, but the rank-1 tier's labels include the date
  // range for each holder's streak.
  const tiersForStreak = (dict) => {
    const vals = {}; Object.entries(dict).forEach(([k,v]) => { vals[k] = v.best; });
    const tiers = tiersFromItems(Object.entries(vals).map(([k,v]) => ({ value: v, label: k })));
    return tiers.map(t => ({
      ...t,
      labels: t.labels.map(k => t.rank === 1 ? `${nameOf(k)} (${rangeText(dict[k])})` : nameOf(k))
    }));
  };

  const cards = [
    { medal: 'Regular Season', title: 'Most Regular Season Wins', unit: 'most regular season wins in league history.', tiers: tiersFromTeamsField('gamesW') },
    { medal: 'Regular Season', title: 'Most Regular Season Points', unit: 'most total regular season points scored, career.', tiers: tiersFromComputed(r.regPoints) },
    { medal: 'Streaks', title: 'Longest Regular Season Winning Streak', unit: 'consecutive regular season wins (can span multiple seasons).', tiers: tiersForStreak(r.winStreak) },
    { medal: 'Streaks', title: 'Longest Regular Season Losing Streak', unit: 'consecutive regular season losses (can span multiple seasons).', tiers: tiersForStreak(r.lossStreak) },
    { medal: 'Single Season', title: 'Most Wins in a Season', unit: 'most regular season wins in a single year.', tiers: tiersFromInstances(r.seasonWinInstances, 'wins', i => `${nameOf(i.key)} (${i.year})`) },
    { medal: 'Single Season', title: 'Most Points Scored in a Season', unit: 'most total regular season points in a single year.', tiers: tiersFromInstances(r.seasonPointInstances, 'points', i => `${nameOf(i.key)} (${i.year})`) },
    { medal: 'Single Season', title: 'Most Scoring Titles', unit: 'led the league in points scored the most times.', tiers: tiersFromComputed(r.scoringTitles) },
    { medal: 'Playoffs', title: 'Most Playoff Appearances', unit: 'most playoff appearances in league history.', tiers: tiersFromTeamsField('playoffApp') },
    { medal: 'Playoffs', title: 'Most Playoff Wins', unit: 'most playoff wins in league history.', tiers: tiersFromTeamsField('playoffW') },
    { medal: 'Playoffs', title: 'Most Playoff Points', unit: 'most total points scored across all playoff games.', tiers: tiersFromComputed(r.playoffPoints) },
    { medal: 'Championships', title: 'Most Championships', unit: 'most league titles won.', tiers: tiersFromTeamsField('champs') },
    { medal: 'Championships', title: 'Most Top-3 Finishes', unit: 'most 1st, 2nd, or 3rd place finishes.', tiers: tiersFromComputed(r.topThree) },
    { medal: 'Single Game', title: 'Highest Scoring Week (Regular Season)', unit: 'highest single-week score in league history.', tiers: tiersFromInstances(r.gameScoreInstances, 'score', i => `${nameOf(i.key)} (${i.year}, ${i.week})`, true) },
    { medal: 'Single Game', title: 'Lowest Scoring Week (Regular Season)', unit: 'lowest single-week score in league history.', tiers: tiersFromInstances(r.gameScoreInstances, 'score', i => `${nameOf(i.key)} (${i.year}, ${i.week})`, false) },
    { medal: 'Consistency', title: 'Most 100+ Point Weeks (Regular Season)', unit: 'most weeks scoring 100+ points, career.', tiers: tiersFromComputed(r.hundredPlusWeeks) },
  ];

  el.innerHTML = `<div class="award-grid">` + cards.map(c => {
    const first = c.tiers[0] || { value: 0, labels: [] };
    const runnersUp = c.tiers.slice(1).map(t => `
      <div class="runner-row"><span class="rank-tag">${ordinal(t.rank)}</span> ${joinNames(t.labels)} <span class="runner-val">(${fmtNum(t.value)})</span></div>
    `).join('');
    return `<div class="award-card cat-${slug(c.medal)}">
      <div class="medal">${c.medal}</div>
      <h3>${c.title}</h3>
      <div class="headline-stat">${fmtNum(first.value)}</div>
      <p>${joinNames(first.labels)} — ${c.unit}</p>
      ${runnersUp ? `<div class="award-runnerups">${runnersUp}</div>` : ''}
    </div>`;
  }).join('') + `</div>`;
}
function slug(s){ return s.toLowerCase().replace(/[^a-z0-9]+/g, '-'); }

function computeH2H(){
  const keyByLastName = {};
  TEAMS.forEach(t => { keyByLastName[lastNameOf(t.owner)] = t.key; });

  const matrix = {};
  TEAMS.forEach(t => { matrix[t.key] = {}; });

  function record(g) {
    const awayKey = keyByLastName[lastNameOf(g.awayMgr)];
    const homeKey = keyByLastName[lastNameOf(g.homeMgr)];
    if(!awayKey || !homeKey || awayKey === homeKey) return;
    if(!matrix[awayKey][homeKey]) matrix[awayKey][homeKey] = {w:0,l:0,t:0};
    if(!matrix[homeKey][awayKey]) matrix[homeKey][awayKey] = {w:0,l:0,t:0};
    if(g.awayScore > g.homeScore){ matrix[awayKey][homeKey].w++; matrix[homeKey][awayKey].l++; }
    else if(g.homeScore > g.awayScore){ matrix[homeKey][awayKey].w++; matrix[awayKey][homeKey].l++; }
    else { matrix[awayKey][homeKey].t++; matrix[homeKey][awayKey].t++; }
  }

  Object.values(SEASONS).forEach(s => {
    Object.values(s.schedule || {}).forEach(games => games.forEach(record));
  });

  return matrix;
}

function renderH2H(containerId){
  const el = document.getElementById(containerId);
  if(!el) return;
  const matrix = computeH2H();
  const order = TEAMS.slice().sort((a,b) => a.key.localeCompare(b.key)).map(t => t.key);

  const headCells = order.map(k => `<th>${k}</th>`).join('');
  const rows = order.map(rowKey => {
    const cells = order.map(colKey => {
      if(rowKey === colKey) return `<td class="self" title="—"></td>`;
      const rec = matrix[rowKey][colKey];
      if(!rec) return `<td>—</td>`;
      const { w, l, t } = rec;
      let cls = '';
      if(w > l) cls = 'dominant';
      else if(l > w) cls = 'trouble';
      const label = t ? `${w}-${l}-${t}` : `${w}-${l}`;
      return `<td class="${cls}" title="${rowKey} vs ${colKey}: ${label}">${label}</td>`;
    }).join('');
    return `<tr><th>${rowKey}</th>${cells}</tr>`;
  }).join('');

  el.innerHTML = `<div class="h2h-wrap"><table class="h2h-grid">
    <thead><tr><th></th>${headCells}</tr></thead>
    <tbody>${rows}</tbody>
  </table></div>
  <div class="h2h-legend">
    <span><span class="h2h-swatch" style="background:rgba(47,111,237,0.3)"></span> Winning record vs opponent</span>
    <span><span class="h2h-swatch" style="background:rgba(214,40,57,0.25)"></span> Losing record vs opponent</span>
    <span>Read as: row's record vs. column · computed from all regular season and playoff games, 2011–2025</span>
  </div>`;
}

document.addEventListener('DOMContentLoaded', initNav);
