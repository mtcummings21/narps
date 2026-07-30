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
    <td>${t.gamesW}-${t.gamesL}${t.gamesT ? '-'+t.gamesT : ''}</td>
    <td>${fmtPct(t.winPct)}</td>
    <td>${t.diff > 0 ? '+' : ''}${t.diff}</td>
    <td>${t.gameAvgPF}</td>
    <td>${fmtPct(t.playoffWinPct)}</td>
    <td>${t.highScore}</td>
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
        <th data-key="record">Record</th>
        <th data-key="winPct">Win%</th>
        <th data-key="diff">Pt Diff/G</th>
        <th data-key="gameAvgPF">Avg PF</th>
        <th data-key="playoffWinPct">Playoff%</th>
        <th data-key="highScore">Best Gm</th>
      </tr></thead>
      <tbody>${data.map(standingsRowHTML).join('')}</tbody>
    </table></div>
    <p class="muted" style="font-size:0.82rem;margin-top:10px;">Click a column header to sort. Playoff% reflects career playoff-game win rate.</p>`;

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
      <div class="card-eyebrow">${y} Season</div>
      <h3>${s.champion.owner}</h3>
      <p>${s.champion.team} — League Champion. Full standings, schedule, and playoff bracket inside.</p>
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

  const playoffRounds = ['round1','round2','round3'].map(rk => {
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
  const sorted = TEAMS.slice().sort((a,b) => b.winPct - a.winPct);
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

  const statCards = `<div class="card-grid" style="margin-bottom:32px;">
    <div class="award-card"><div class="medal">Career Record</div><div class="headline-stat">${t.gamesW}-${t.gamesL}${t.gamesT ? '-'+t.gamesT : ''}</div><p>${fmtPct(t.winPct)} win rate across ${t.seasons} seasons</p></div>
    <div class="award-card"><div class="medal">Championships</div><div class="headline-stat">${t.champs}</div><p>${titles.length ? titles.map(x=>x.year).join(', ') : 'None yet'}</p></div>
    <div class="award-card"><div class="medal">Playoff Record</div><div class="headline-stat">${t.playoffW}-${t.playoffL}</div><p>${fmtPct(t.playoffWinPct)} playoff win rate, ${t.playoffApp} appearances</p></div>
    <div class="award-card"><div class="medal">Scoring</div><div class="headline-stat">${t.gameAvgPF}</div><p>pts/gm career average (${t.diff > 0 ? '+' : ''}${t.diff} diff/gm)</p></div>
  </div>`;

  const champGrid = titles.length ? `<div class="trophy-case">${titles.map(c => `
    <div class="plaque">
      <div class="yr">${c.year} CHAMPION</div>
      <div class="owner">${c.owner}</div>
      <div class="team">${c.team}</div>
    </div>`).join('')}</div>` : `<p class="muted">No championships yet — but there's always next year.</p>`;

  const years = Object.keys(SEASONS).sort((a,b) => b - a);
  const seasonRows = years.map(y => {
    const s = SEASONS[y];
    const row = s.standings.find(r => r.team === t.team);
    if(!row) return '';
    const rank = s.standings.indexOf(row) + 1;
    let finish = `${rank}${rank===1?'st':rank===2?'nd':rank===3?'rd':'th'} place`;
    if(s.champion.team === t.team) finish = 'Champion 🏆';
    else if(s.second.team === t.team) finish = 'Runner-up';
    else if(s.third.team === t.team) finish = 'Third place';
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

document.addEventListener('DOMContentLoaded', initNav);
