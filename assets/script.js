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

// ---------- Nav dropdown (League History) ----------
function initNavDropdowns(){
  const dropdowns = document.querySelectorAll('.nav-dropdown');
  dropdowns.forEach(dd => {
    const toggle = dd.querySelector('.nav-dropdown-toggle');
    if(!toggle) return;
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = dd.classList.contains('open');
      dropdowns.forEach(other => {
        other.classList.remove('open');
        const t = other.querySelector('.nav-dropdown-toggle');
        if(t) t.setAttribute('aria-expanded', 'false');
      });
      if(!isOpen){
        dd.classList.add('open');
        toggle.setAttribute('aria-expanded', 'true');
      }
    });
  });
  document.addEventListener('click', () => {
    dropdowns.forEach(dd => {
      dd.classList.remove('open');
      const t = dd.querySelector('.nav-dropdown-toggle');
      if(t) t.setAttribute('aria-expanded', 'false');
    });
  });
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape'){
      dropdowns.forEach(dd => {
        dd.classList.remove('open');
        const t = dd.querySelector('.nav-dropdown-toggle');
        if(t) t.setAttribute('aria-expanded', 'false');
      });
    }
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
    return `<div class="plaque plaque--recent">
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
    <td class="name-cell"><a href="team.html?team=${encodeURIComponent(t.key)}" class="owner-link">${t.owner}</a><div class="muted" style="font-size:0.78rem;font-family:var(--body);font-weight:400;">${t.team}</div></td>
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
// ---------- Newsletters ----------
function renderVolumesList(containerId){
  const el = document.getElementById(containerId);
  if(!el) return;
  const vols = Array.from(new Set(NEWSLETTERS.map(n => n.vol))).sort((a,b) => a - b);
  el.innerHTML = `<div class="card-grid">` + vols.map(v => {
    const issues = NEWSLETTERS.filter(n => n.vol === v).sort((a,b) => a.no - b.no);
    const years = Array.from(new Set(issues.map(n => n.year))).sort((a,b) => a - b);
    const yearLabel = years.length > 1 ? `${years[0]}–${years[years.length-1]}` : String(years[0]);
    return `<a class="nav-card" href="volume.html?vol=${v}">
      <div class="card-eyebrow">${yearLabel}</div>
      <h3>Volume ${v}</h3>
      <p>${issues.length} issue${issues.length !== 1 ? 's' : ''}</p>
    </a>`;
  }).join('') + `</div>`;
}

function renderVolumeDetail(containerId){
  const el = document.getElementById(containerId);
  if(!el) return;
  const params = new URLSearchParams(window.location.search);
  const vols = Array.from(new Set(NEWSLETTERS.map(n => n.vol))).sort((a,b) => a - b);
  const vol = Number(params.get('vol')) || vols[vols.length - 1];
  const issues = NEWSLETTERS.filter(n => n.vol === vol).sort((a,b) => a.no - b.no);
  if(!issues.length){ el.innerHTML = `<p>No newsletters found for Volume ${vol}.</p>`; return; }

  document.title = `Volume ${vol} — League of NARPS`;
  const titleEl = document.getElementById('volume-title');
  if(titleEl) titleEl.textContent = `Volume ${vol}`;

  el.innerHTML = `<div class="table-scroll"><table>
    <thead><tr><th>Issue</th><th>Title</th><th>Season</th><th></th></tr></thead>
    <tbody>
      ${issues.map(n => `<tr>
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
  const seasonYears = Object.keys(SEASONS).sort((a,b) => b - a);
  const upcomingYears = (typeof DRAFT_ORDER !== 'undefined' ? Object.keys(DRAFT_ORDER) : [])
    .filter(y => !SEASONS[y])
    .sort((a,b) => b - a);

  const upcomingCards = upcomingYears.map(y => {
    const draftInfo = (typeof DRAFT_DATES !== 'undefined' && DRAFT_DATES[y]) || null;
    return `<a class="nav-card" href="season.html?year=${y}">
      <h3>${y}</h3>
      <p style="margin:0;">🏈 Draft Day${draftInfo ? '<br>' + draftInfo.label : ''}</p>
    </a>`;
  }).join('');

  const seasonCards = seasonYears.map(y => {
    const s = SEASONS[y];
    const started = (s.standings || []).some(t => (t.w||0) + (t.l||0) + (t.t||0) > 0);
    if(!started){
      const draftInfo = (typeof DRAFT_DATES !== 'undefined' && DRAFT_DATES[y]) || null;
      return `<a class="nav-card" href="season.html?year=${y}">
        <h3>${y}</h3>
        <p style="margin:0;">🏈 Season in progress${draftInfo ? '<br>Draft Day: ' + draftInfo.label : ''}</p>
      </a>`;
    }
    return `<a class="nav-card" href="season.html?year=${y}">
      <h3>${y}</h3>
      <p style="margin:0;">
        🥇 <strong>${s.champion.owner}</strong><br>
        🥈 ${s.second.owner}<br>
        🥉 ${s.third.owner}
      </p>
    </a>`;
  }).join('');

  el.innerHTML = `<div class="card-grid">${upcomingCards}${seasonCards}</div>`;
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
  if(!s){
    if(typeof DRAFT_ORDER !== 'undefined' && DRAFT_ORDER[year]){
      document.title = `${year} Season — League of NARPS`;
      const titleEl = document.getElementById('season-title');
      if(titleEl) titleEl.textContent = `${year} Season`;
      const draftInfo = (typeof DRAFT_DATES !== 'undefined' && DRAFT_DATES[year]) || null;
      el.innerHTML = `
        <p class="muted" style="max-width:65ch; margin-bottom:24px;">The ${year} season hasn't kicked off yet — here's the countdown to draft day and this year's draft order.</p>
        ${draftInfo ? `<div class="countdown-card" style="margin-bottom:32px;">
          <div class="countdown-title">Draft Day — ${draftInfo.label}</div>
          <div id="season-draft-countdown"></div>
        </div>` : ''}
        <h2 class="section-title" style="margin-top:8px;">Draft Order</h2>
        <div id="season-draft-order" style="margin-top:16px;"></div>
      `;
      if(draftInfo) renderCountdown('season-draft-countdown', draftInfo.iso);
      renderDraftOrder('season-draft-order', year);
      return;
    }
    el.innerHTML = `<p>No data found for ${year}.</p>`;
    return;
  }

  document.title = `${year} Season — League of NARPS`;
  const titleEl = document.getElementById('season-title');
  if(titleEl) titleEl.textContent = `${year} Season`;

  const seasonStarted = (s.standings || []).some(t => (t.w||0) + (t.l||0) + (t.t||0) > 0);

  const podium = `<div class="trophy-case">
    <div class="plaque plaque--recent">
      <div class="yr">CHAMPION</div>
      <div class="owner">${s.champion.owner}</div>
      <div class="team">${s.champion.team}</div>
    </div>
    <div class="plaque plaque--silver">
      <div class="yr">RUNNER-UP</div>
      <div class="owner">${s.second.owner}</div>
      <div class="team">${s.second.team}</div>
    </div>
    <div class="plaque plaque--bronze">
      <div class="yr">THIRD PLACE</div>
      <div class="owner">${s.third.owner}</div>
      <div class="team">${s.third.team}</div>
    </div>
  </div>`;

  const seasonPts = {};
  Object.values(s.schedule || {}).forEach(games => games.forEach(g => {
    const ak = lastNameOf(g.awayMgr), hk = lastNameOf(g.homeMgr);
    if(!seasonPts[ak]) seasonPts[ak] = { pf: 0, pa: 0 };
    if(!seasonPts[hk]) seasonPts[hk] = { pf: 0, pa: 0 };
    seasonPts[ak].pf += g.awayScore; seasonPts[ak].pa += g.homeScore;
    seasonPts[hk].pf += g.homeScore; seasonPts[hk].pa += g.awayScore;
  }));

  const keyByLastName = {};
  TEAMS.forEach(team => { keyByLastName[lastNameOf(team.owner)] = team.key; });

  const standingsTable = `<div class="table-scroll"><table>
    <thead><tr><th>#</th><th>Team</th><th>Owner</th><th>Record</th><th>Pct</th><th>PF</th><th>PA</th></tr></thead>
    <tbody>${s.standings.map((t,i) => {
      const pts = seasonPts[lastNameOf(t.owner)] || { pf: 0, pa: 0 };
      const teamKey = keyByLastName[lastNameOf(t.owner)];
      const teamLink = teamKey ? `<a href="team.html?team=${encodeURIComponent(teamKey)}" class="owner-link">${t.team}</a>` : t.team;
      return `<tr>
      <td class="pos">${i+1}</td>
      <td class="name-cell">${teamLink}</td>
      <td class="pos">${t.owner}</td>
      <td>${t.w}-${t.l}${t.t ? '-'+t.t : ''}</td>
      <td>${t.pct.toFixed(3)}</td>
      <td>${pts.pf.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}</td>
      <td>${pts.pa.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}</td>
    </tr>`;
    }).join('')}</tbody>
  </table></div>`;

  const playoffRounds = ['round1','round2','round3','thirdPlace'].map(rk => {
    const r = (s.playoffs || {})[rk];
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

  const draftInfo = (typeof DRAFT_DATES !== 'undefined' && DRAFT_DATES[year]) || null;
  const hasDraftOrder = typeof DRAFT_ORDER !== 'undefined' && DRAFT_ORDER[year];
  const draftSection = (!seasonStarted && hasDraftOrder) ? `
    ${draftInfo ? `<div class="countdown-card" style="margin:24px 0 32px;">
      <div class="countdown-title">Draft Day — ${draftInfo.label}</div>
      <div id="season-draft-countdown"></div>
    </div>` : ''}
    <h2 class="section-title" style="margin-top:8px;">Draft Order</h2>
    <div id="season-draft-order" style="margin-top:16px;"></div>
  ` : '';

  el.innerHTML = `
    ${podium}
    ${!seasonStarted ? `<p class="muted" style="max-width:65ch; margin:16px 0 0;">The ${year} season hasn't kicked off yet — champion and standings will fill in once games are played.</p>` : ''}
    ${draftSection}
    <h2 class="section-title" style="margin-top:40px;">${seasonStarted ? 'Final Regular Season Standings' : 'Standings'}</h2>
    ${standingsTable}
    ${playoffRounds ? `<h2 class="section-title" style="margin-top:40px;">Playoffs</h2>
    ${playoffRounds}` : ''}
    <h2 class="section-title" style="margin-top:40px;">Full Schedule</h2>
    <p class="muted" style="font-size:0.85rem; margin-bottom:12px;">Click a week to expand.${seasonStarted ? ' Bold indicates the winning team.' : ''}</p>
    ${scheduleWeeks}
  `;

  if(!seasonStarted && hasDraftOrder){
    if(draftInfo) renderCountdown('season-draft-countdown', draftInfo.iso);
    renderDraftOrder('season-draft-order', year);
  }
}

// ---------- Draft order ----------
function renderDraftOrder(containerId, forYear){
  const el = document.getElementById(containerId);
  if(!el) return;
  const years = Object.keys(DRAFT_ORDER).sort((a,b) => b - a);
  const year = forYear && DRAFT_ORDER[forYear] ? forYear : years[0];
  const order = DRAFT_ORDER[year];
  if(!order){ el.innerHTML = ''; return; }

  const draftInfo = (typeof DRAFT_DATES !== 'undefined' && DRAFT_DATES[year]) || null;
  const dateBlock = draftInfo ? `<div class="draft-order-datetime">${draftInfo.label}</div>` : '';

  el.innerHTML = `${dateBlock}<div class="draft-order-list">${order.map((p, i) => {
    const hasPage = p.key && p.team !== 'TBD';
    const ownerHTML = hasPage ? `<a href="team.html?team=${encodeURIComponent(p.key)}" class="owner-link">${p.owner}</a>` : p.owner;
    return `
    <div class="draft-order-row">
      <div class="draft-order-pick">${i+1}</div>
      <div class="draft-order-info">
        <div class="draft-order-owner">${ownerHTML}</div>
        <div class="draft-order-team">${p.team}</div>
      </div>
    </div>`;
  }).join('')}</div>`;
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
  const scoringTitleYears = (allTimeRecords.scoringTitleYears[key] || []).slice().sort((a,b) => a - b);

  // Most-drafted player (2011-2025 draft history) — handles ties across multiple players.
  let mostDraftedHeadline = '—';
  let mostDraftedSub = 'No draft data recorded';
  const md = t.mostDrafted;
  if(md && md.entries && md.entries.length){
    const names = md.entries.map(e => e.player);
    if(names.length === 1){
      mostDraftedHeadline = names[0];
      mostDraftedSub = `Drafted ${md.count}x (${md.entries[0].years.join(', ')})`;
    } else {
      mostDraftedHeadline = `${names.length}-way tie`;
      const joined = names.length === 2 ? `${names[0]} & ${names[1]}` : `${names.slice(0,-1).join(', ')} & ${names[names.length-1]}`;
      mostDraftedSub = `${joined} — ${md.count}x each`;
    }
  }

  const statCards = `<div class="card-grid" style="margin-bottom:32px;">
    <div class="award-card"><div class="medal">Career Record</div><div class="headline-stat">${t.gamesW}-${t.gamesL}${t.gamesT ? '-'+t.gamesT : ''}</div><p>${fmtPct(t.winPct)} win rate across ${t.seasons} seasons</p></div>
    <div class="award-card"><div class="medal">Championships</div><div class="headline-stat">${t.champs}</div><p>${titles.length ? titles.map(x=>x.year).join(', ') : 'None yet'}</p></div>
    <div class="award-card"><div class="medal">Top 3 Finishes</div><div class="headline-stat">${top3Count}</div><p>Times finishing 1st, 2nd, or 3rd in the league</p></div>
    <div class="award-card"><div class="medal">Playoff Record</div><div class="headline-stat">${t.playoffW}-${t.playoffL}</div><p>${fmtPct(t.playoffWinPct)} playoff win rate, ${t.playoffApp} appearances</p></div>
    <div class="award-card"><div class="medal">Scoring</div><div class="headline-stat">${t.gameAvgPF.toFixed(1)}</div><p>pts/gm career average (${(() => { const d = t.diff.toFixed(1); return d === '-0.0' ? '0.0' : (t.diff > 0 ? '+' + d : d); })()} diff/gm)</p></div>
    <div class="award-card"><div class="medal">Scoring Titles</div><div class="headline-stat">${scoringTitleYears.length}</div><p>${scoringTitleYears.length ? scoringTitleYears.join(', ') : 'Never led the league in points scored'}</p></div>
    <div class="award-card"><div class="medal">Most Drafted Player</div><div class="headline-stat">${mostDraftedHeadline}</div><p>${mostDraftedSub}</p></div>
  </div>`;

  const champGrid = titles.length ? `<div class="champ-grid">${titles.map(c => `
    <div class="champ-pennant">
      <div class="champ-pennant-inner">
        <div class="champ-grommet champ-grommet--left"></div>
        <div class="champ-grommet champ-grommet--right"></div>
        <div class="champ-headline">NARPS<br>CHAMPION</div>
        <div class="champ-ribbon">${t.owner.toUpperCase()}</div>
        <div class="champ-pennant-year">${c.year}</div>
      </div>
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

  const leaderCards = buildRecordCards().filter(c => c.leaderKeys.includes(key));
  const recordLeaderSection = leaderCards.length ? `
    <h2 class="section-title" style="margin-top:40px;">All-Time Record Leader</h2>
    <p class="muted" style="font-size:0.85rem; margin-bottom:12px;">${t.owner} currently holds the following league record${leaderCards.length > 1 ? 's' : ''}.</p>
    <div class="award-grid" id="team-leader-grid">${leaderCards.map(c => `<div class="award-card ${c.cls}">
      <div class="medal">${c.medal}</div>
      <h3>${c.title}</h3>
      <div class="headline-stat">${c.stat}</div>
    </div>`).join('')}</div>
  ` : '';

  el.innerHTML = `
    ${statCards}
    <h2 class="section-title" style="margin-top:8px;">Championships</h2>
    <div style="margin:20px 0 40px;">${champGrid}</div>
    ${recordLeaderSection}
    <h2 class="section-title" style="margin-top:40px;">Season by Season</h2>
    <p class="muted" style="font-size:0.85rem; margin-bottom:12px;">Only seasons with full data entered so far are shown here.</p>
    ${seasonTable}
  `;
}

// ---------- Survivor ----------
const NFL_LOGO_ABBR = {
  '49ers': 'sf', 'Bears': 'chi', 'Bengals': 'cin', 'Bills': 'buf', 'Broncos': 'den',
  'Buccaneers': 'tb', 'Cardinals': 'ari', 'Chargers': 'lac', 'Chiefs': 'kc', 'Colts': 'ind',
  'Commanders': 'wsh', 'Cowboys': 'dal', 'Dolphins': 'mia', 'Eagles': 'phi', 'Falcons': 'atl',
  'Giants': 'nyg', 'Jaguars': 'jax', 'Jets': 'nyj', 'Lions': 'det', 'Packers': 'gb',
  'Panthers': 'car', 'Patriots': 'ne', 'Raiders': 'lv', 'Rams': 'lar', 'Ravens': 'bal',
  'Saints': 'no', 'Seahawks': 'sea', 'Steelers': 'pit', 'Texans': 'hou', 'Titans': 'ten',
  'Vikings': 'min', 'Redskins': 'wsh', 'Football Team': 'wsh'
};
function nflLogo(teamName, opts = {}){
  if(!teamName || teamName === '—') return '—';
  const abbr = NFL_LOGO_ABBR[teamName];
  const size = opts.size || 26;
  if(!abbr) return teamName;
  const lossClass = opts.loss ? ' pick-logo--loss' : '';
  const label = opts.loss ? `${teamName} (loss)` : teamName;
  return `<span class="pick-logo${lossClass}" style="width:${size}px;height:${size}px;" title="${label}"><img src="https://a.espncdn.com/i/teamlogos/nfl/500/${abbr}.png" alt="${label}" loading="lazy"></span>`;
}
function renderSurvivor(containerId){
  const el = document.getElementById(containerId);
  if(!el) return;
  const years = Object.keys(SURVIVOR).sort((a,b) => b - a);
  const params = new URLSearchParams(window.location.search);
  const requestedYear = params.get('year');
  const year = (requestedYear && SURVIVOR[requestedYear]) ? requestedYear : years[0];
  const s = SURVIVOR[year];
  if(!s){ el.innerHTML = `<p class="muted">No survivor data yet.</p>`; return; }

  document.title = `${year} Survivor — League of NARPS`;

  const yearSwitcher = years.length > 1 ? `<div style="display:flex; gap:8px; margin-bottom:24px;">${years.map(y => `
    <a href="survivor.html?year=${y}" style="font-family:var(--mono); font-size:0.85rem; padding:6px 14px; border-radius:20px; text-decoration:none; ${y === year ? 'background:var(--navy); color:var(--white);' : 'background:var(--panel); color:var(--text-soft); border:1px solid var(--line);'}">${y}</a>`).join('')}</div>` : '';

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
    const lossPicks = p.picks.filter(pk => pk.loss);
    const losingPick = lossPicks.length
      ? `<div style="display:flex; gap:6px; justify-content:center; flex-wrap:wrap;">${lossPicks.map(pk => nflLogo(pk.team, { size: 24, loss: true })).join('')}</div>`
      : '—';
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

  const maxWeek = Math.max(...sorted.flatMap(p => p.picks.map(pk => pk.week)));
  const weekCols = Array.from({ length: maxWeek }, (_, i) => i + 1);

  const picksTableRows = sorted.map(p => {
    const cells = weekCols.map(w => {
      const pk = p.picks.find(x => x.week === w);
      if(!pk) return `<td class="pos">—</td>`;
      return `<td class="pos">${nflLogo(pk.team, { size: 24, loss: pk.loss })}</td>`;
    }).join('');
    return `<tr>
      <td class="name-cell">${p.name}</td>
      ${cells}
    </tr>`;
  }).join('');

  const picksTable = `<div class="table-scroll"><table>
    <thead><tr><th>Player</th>${weekCols.map(w => `<th>Wk ${w}</th>`).join('')}</tr></thead>
    <tbody>${picksTableRows}</tbody>
  </table></div>`;

  el.innerHTML = `
    ${yearSwitcher}
    ${champCard}
    <h2 class="section-title" style="margin-top:40px;">${year} Leaderboard</h2>
    ${leaderboard}
    <h2 class="section-title" style="margin-top:40px;">Weekly Picks</h2>
    <p class="muted" style="font-size:0.85rem; margin-bottom:12px;">Every pick each player made, week by week. Losses are struck through — two losses means elimination.</p>
    ${picksTable}
  `;
}

// ---------- Head-to-head (computed from verified season data) ----------
function lastNameOf(n){ return (n || '').trim().split(/\s+/).pop().toLowerCase(); }

// ---------- All-Time Records (computed from verified season data) ----------
function computeAllTimeRecords(){
  const keyByLastName = {};
  TEAMS.forEach(t => { keyByLastName[lastNameOf(t.owner)] = t.key; });

  const regPoints = {}, playoffWins = {}, playoffPoints = {}, hundredPlusWeeks = {}, topThree = {}, scoringTitles = {}, weeklyScoringTitles = {}, scoringTitleYears = {};
  let highestWeek = { key: null, score: -Infinity, opponentInfo: '', holders: [] };
  let lowestWeek = { score: Infinity, holders: [] };
  let bestSeasonWins = { wins: -Infinity, holders: [] };
  let bestSeasonPoints = { points: -Infinity, holders: [] };

  // Raw entry lists used for tiered (1st/2nd/3rd, with ties) ranking in renderAllTimeRecords
  const gameScoreEntries = [];   // every regular-season individual game score: {key, year, week, value}
  const seasonWinEntries = [];   // every team-season regular-season win total: {key, year, value}
  const seasonPointsEntries = []; // every team-season regular-season point total: {key, year, value}
  const blowoutEntries = [];     // every decided regular-season game: {winnerKey, loserKey, winnerScore, loserScore, margin, year, week}

  TEAMS.forEach(t => {
    regPoints[t.key] = 0; playoffWins[t.key] = 0; playoffPoints[t.key] = 0;
    hundredPlusWeeks[t.key] = 0; topThree[t.key] = 0; scoringTitles[t.key] = 0; weeklyScoringTitles[t.key] = 0;
    scoringTitleYears[t.key] = [];
  });

  function addRegScore(mgr, score, week, year){
    const k = keyByLastName[lastNameOf(mgr)];
    if(!k) return;
    regPoints[k] += score;
    if(score >= 100) hundredPlusWeeks[k]++;
    gameScoreEntries.push({ key: k, year, week, value: score });
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

  // ---- Longest regular-season winning/losing streaks (chronological, spans seasons) ----
  const weekNum = (wk) => { const m = String(wk).match(/\d+/); return m ? Number(m[0]) : 0; };
  const sortedYears = Object.keys(SEASONS).map(Number).sort((a,b) => a - b);
  const resultsByTeam = {};
  TEAMS.forEach(t => { resultsByTeam[t.key] = []; });

  sortedYears.forEach(year => {
    const s = SEASONS[year];
    const weeks = Object.keys(s.schedule || {}).sort((a,b) => weekNum(a) - weekNum(b));
    weeks.forEach(wk => {
      (s.schedule[wk] || []).forEach(g => {
        const ak = keyByLastName[lastNameOf(g.awayMgr)];
        const hk = keyByLastName[lastNameOf(g.homeMgr)];
        let aRes, hRes;
        if(g.awayScore > g.homeScore){ aRes = 'W'; hRes = 'L'; }
        else if(g.homeScore > g.awayScore){ aRes = 'L'; hRes = 'W'; }
        else { aRes = 'T'; hRes = 'T'; }
        if(ak) resultsByTeam[ak].push({ year, week: wk, result: aRes });
        if(hk) resultsByTeam[hk].push({ year, week: wk, result: hRes });
      });
    });
  });

  const winStreakEntries = [];  // {key, value, startYear, endYear}
  const lossStreakEntries = [];
  Object.entries(resultsByTeam).forEach(([key, results]) => {
    let curType = null, curLen = 0, curStart = null;
    let bestW = { len: 0, start: null, end: null };
    let bestL = { len: 0, start: null, end: null };
    results.forEach(r => {
      if(r.result === curType){ curLen++; }
      else { curType = r.result; curLen = 1; curStart = r; }
      if(curType === 'W' && curLen > bestW.len) bestW = { len: curLen, start: curStart, end: r };
      if(curType === 'L' && curLen > bestL.len) bestL = { len: curLen, start: curStart, end: r };
    });
    if(bestW.len > 0) winStreakEntries.push({ key, value: bestW.len, startYear: bestW.start.year, endYear: bestW.end.year });
    if(bestL.len > 0) lossStreakEntries.push({ key, value: bestL.len, startYear: bestL.start.year, endYear: bestL.end.year });
  });

  Object.entries(SEASONS).forEach(([year, s]) => {
    const seasonPoints = {};
    Object.entries(s.schedule || {}).forEach(([week, games]) => {
      const weekScores = [];
      games.forEach(g => {
        addRegScore(g.awayMgr, g.awayScore, week, year);
        addRegScore(g.homeMgr, g.homeScore, week, year);
        const ak = keyByLastName[lastNameOf(g.awayMgr)];
        const hk = keyByLastName[lastNameOf(g.homeMgr)];
        if(ak) seasonPoints[ak] = (seasonPoints[ak]||0) + g.awayScore;
        if(hk) seasonPoints[hk] = (seasonPoints[hk]||0) + g.homeScore;
        if(ak) weekScores.push({ key: ak, score: g.awayScore });
        if(hk) weekScores.push({ key: hk, score: g.homeScore });

        // Biggest blowout tracking (regular season, decided games only)
        if(ak && hk && g.awayScore !== g.homeScore){
          const margin = Math.round(Math.abs(g.homeScore - g.awayScore) * 100) / 100;
          const winnerKey = g.awayScore > g.homeScore ? ak : hk;
          const loserKey = g.awayScore > g.homeScore ? hk : ak;
          const winnerScore = Math.max(g.awayScore, g.homeScore);
          const loserScore = Math.min(g.awayScore, g.homeScore);
          blowoutEntries.push({ winnerKey, loserKey, winnerScore, loserScore, margin, year, week });
        }
      });
      // Weekly scoring title: whoever posted the highest score across the league that week
      if(weekScores.length){
        const weekMax = Math.max(...weekScores.map(w => w.score));
        weekScores.filter(w => w.score === weekMax).forEach(w => {
          weeklyScoringTitles[w.key] = (weeklyScoringTitles[w.key]||0) + 1;
        });
      }
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
      seasonWinEntries.push({ key: k, year, value: row.w });
      if(row.w > bestSeasonWins.wins){
        bestSeasonWins = { wins: row.w, holders: [{ key: k, year }] };
      } else if(row.w === bestSeasonWins.wins){
        bestSeasonWins.holders.push({ key: k, year });
      }
    });

    Object.entries(seasonPoints).forEach(([k, pts]) => {
      seasonPointsEntries.push({ key: k, year, value: pts });
    });

    const seasonLeaderEntry = Object.entries(seasonPoints).sort((a,b) => b[1]-a[1])[0];
    if(seasonLeaderEntry){
      const [leaderKey, leaderPoints] = seasonLeaderEntry;
      scoringTitles[leaderKey] = (scoringTitles[leaderKey]||0) + 1;
      if(!scoringTitleYears[leaderKey]) scoringTitleYears[leaderKey] = [];
      scoringTitleYears[leaderKey].push(Number(year));
      if(leaderPoints > bestSeasonPoints.points){
        bestSeasonPoints = { points: leaderPoints, holders: [{ key: leaderKey, year }] };
      } else if(leaderPoints === bestSeasonPoints.points){
        bestSeasonPoints.holders.push({ key: leaderKey, year });
      }
    }
  });

  return {
    regPoints, playoffWins, playoffPoints, hundredPlusWeeks, topThree, scoringTitles, scoringTitleYears, weeklyScoringTitles,
    highestWeek, lowestWeek, bestSeasonWins, bestSeasonPoints,
    gameScoreEntries, seasonWinEntries, seasonPointsEntries, blowoutEntries,
    winStreakEntries, lossStreakEntries
  };
}

function buildRecordCards(){
  const r = computeAllTimeRecords();
  const nameOf = k => (TEAMS.find(t => t.key === k) || {}).owner || k;
  const fmtNum = n => Number(n).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 1 });
  const fmtNum1 = n => Number(n).toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  const joinNames = (names) => names.length <= 1 ? (names[0]||'') :
    names.length === 2 ? `${names[0]} & ${names[1]}` :
    `${names.slice(0,-1).join(', ')} & ${names[names.length-1]}`;

  // Groups entries into ranked tiers by value, keeping every tie together. Stops once
  // `n` distinct value-tiers have been collected (a tied tier can hold any number of names).
  const topTiers = (entries, n, dir) => {
    const sorted = entries.slice().sort((a,b) => dir === 'asc' ? a.value - b.value : b.value - a.value);
    const tiers = [];
    sorted.forEach(e => {
      const last = tiers[tiers.length - 1];
      if(last && last.value === e.value){ last.items.push(e); }
      else if(tiers.length < n){ tiers.push({ value: e.value, items: [e] }); }
    });
    return tiers;
  };
  // Formats a tier's tied names, appending each item's note (year/game info) when present.
  const tierNames = (tier) => tier.items.map(it => it.note ? `${it.owner} (${it.note})` : it.owner);
  // Unique team keys represented in a tier — used to flag "leader" status on team pages.
  const tierKeys = (tier) => Array.from(new Set(tier.items.map(it => it.key).filter(Boolean)));

  const rankLine = (place, tier, fmt) => tier ? `<div class="rank-line"><span class="rank-num">${place}</span>${(fmt||fmtNum)(tier.value)} — ${joinNames(tierNames(tier))}</div>` : '';

  const buildCard = (medal, title, entries, opts) => {
    opts = opts || {};
    const dir = opts.dir || 'desc';
    const fmt = opts.forceDecimal ? fmtNum1 : fmtNum;
    const tiers = topTiers(entries, 3, dir);
    const t0 = tiers[0] || { value: 0, items: [] };
    const body = `<strong>${joinNames(tierNames(t0))}</strong>`;
    return {
      medal, title,
      stat: fmt(t0.value),
      body,
      extra: rankLine('2nd', tiers[1], fmt) + rankLine('3rd', tiers[2], fmt),
      leaderKeys: tierKeys(t0)
    };
  };

  // ---- Career totals (per-team, one entry each) ----
  const regWinEntries = TEAMS.map(t => ({ owner: t.owner, value: t.gamesW, key: t.key }));
  const regPtsEntries = TEAMS.map(t => ({ owner: t.owner, value: r.regPoints[t.key] || 0, key: t.key }));
  const scoringTitleEntries = TEAMS.map(t => ({ owner: t.owner, value: r.scoringTitles[t.key] || 0, key: t.key }));
  const weeklyTitleEntries = TEAMS.map(t => ({ owner: t.owner, value: r.weeklyScoringTitles[t.key] || 0, key: t.key }));
  const playoffAppEntries = TEAMS.map(t => ({ owner: t.owner, value: t.playoffApp, key: t.key }));
  const playoffWinEntries = TEAMS.map(t => ({ owner: t.owner, value: t.playoffW, key: t.key }));
  const playoffPtsEntries = TEAMS.map(t => ({ owner: t.owner, value: r.playoffPoints[t.key] || 0, key: t.key }));
  const champEntries = TEAMS.map(t => ({ owner: t.owner, value: t.champs, key: t.key }));
  const top3Entries = TEAMS.map(t => ({ owner: t.owner, value: r.topThree[t.key] || 0, key: t.key }));
  const hundredEntries = TEAMS.map(t => ({ owner: t.owner, value: r.hundredPlusWeeks[t.key] || 0, key: t.key }));

  // ---- Single-season / single-game entries (carry a year or game note) ----
  const seasonWinEntries = r.seasonWinEntries.map(e => ({ owner: nameOf(e.key), value: e.value, note: String(e.year), key: e.key }));
  const seasonPtsEntries = r.seasonPointsEntries.map(e => ({ owner: nameOf(e.key), value: e.value, note: String(e.year), key: e.key }));
  const highScoreEntries = r.gameScoreEntries.map(e => ({ owner: nameOf(e.key), value: e.value, note: `${e.year}, ${e.week}`, key: e.key }));
  const lowScoreEntries = r.gameScoreEntries
    .filter(e => Number(e.year) !== 2026) // exclude the not-yet-played 2026 season (placeholder 0-0 scores)
    .map(e => ({ owner: nameOf(e.key), value: e.value, note: `${e.year}, ${e.week}`, key: e.key }));
  const blowoutDisplayEntries = r.blowoutEntries.map(b => ({
    owner: `${nameOf(b.winnerKey)} def. ${nameOf(b.loserKey)} ${fmtNum(b.winnerScore)}-${fmtNum(b.loserScore)}`,
    value: b.margin,
    note: `${b.year}, ${b.week}`,
    key: b.winnerKey
  }));

  // ---- Streaks (per-team best, can span multiple seasons) ----
  const winStreakEntries = r.winStreakEntries.map(e => ({
    owner: nameOf(e.key), value: e.value,
    note: e.startYear === e.endYear ? String(e.startYear) : `${e.startYear}–${e.endYear}`,
    key: e.key
  }));
  const lossStreakEntries = r.lossStreakEntries.map(e => ({
    owner: nameOf(e.key), value: e.value,
    note: e.startYear === e.endYear ? String(e.startYear) : `${e.startYear}–${e.endYear}`,
    key: e.key
  }));

  const cards = [
    buildCard('Regular Season', 'Most Regular Season Wins', regWinEntries, { body: n => `${n} — most regular season wins in league history.` }),
    buildCard('Regular Season', 'Most Regular Season Points', regPtsEntries, { body: n => `${n} — most total regular season points scored, career.` }),
    buildCard('Single Season', 'Most Wins in a Season', seasonWinEntries, { body: n => `${n} — most regular season wins in a single year.` }),
    buildCard('Single Season', 'Most Points Scored in a Season', seasonPtsEntries, { forceDecimal: true, body: n => `${n} — most total regular season points in a single year.` }),
    buildCard('Single Season', 'Most Scoring Titles', scoringTitleEntries, { body: n => `${n} — led the league in points scored the most times.` }),
    buildCard('Weekly', 'Most Weekly Scoring Titles', weeklyTitleEntries, { body: n => `${n} — most weeks leading the league in scoring, career.` }),
    buildCard('Playoffs', 'Most Playoff Appearances', playoffAppEntries, { body: n => `${n} — most playoff appearances in league history.` }),
    buildCard('Playoffs', 'Most Playoff Wins', playoffWinEntries, { body: n => `${n} — most playoff wins in league history.` }),
    buildCard('Playoffs', 'Most Playoff Points', playoffPtsEntries, { body: n => `${n} — most total points scored across all playoff games.` }),
    buildCard('Championships', 'Most Championships', champEntries, { body: n => `${n} — most league titles won.` }),
    buildCard('Championships', 'Most Top-3 Finishes', top3Entries, { body: n => `${n} — most 1st, 2nd, or 3rd place finishes.` }),
    buildCard('Single Game', 'Highest Scoring Week (Regular Season)', highScoreEntries, { forceDecimal: true, body: n => `${n} — highest single-week score in league history.` }),
    buildCard('Single Game', 'Lowest Scoring Week (Regular Season)', lowScoreEntries, { dir: 'asc', body: n => `${n} — lowest single-week score in league history.` }),
    buildCard('Single Game', 'Biggest Blowout (Regular Season)', blowoutDisplayEntries, { forceDecimal: true, body: n => `${n} — largest margin of victory in a single game, regular season.` }),
    buildCard('Consistency', 'Most 100+ Point Weeks (Regular Season)', hundredEntries, { body: n => `${n} — most weeks scoring 100+ points, career.` }),
    buildCard('Streaks', 'Longest Regular Season Winning Streak', winStreakEntries, { body: n => `${n} — longest run of consecutive regular season wins, can span multiple seasons.` }),
    buildCard('Streaks', 'Longest Regular Season Losing Streak', lossStreakEntries, { body: n => `${n} — longest run of consecutive regular season losses, can span multiple seasons.` }),
  ];

  const categoryOrder = ['Regular Season', 'Single Season', 'Weekly', 'Playoffs', 'Championships', 'Single Game', 'Consistency', 'Streaks'];
  const categorySlug = {
    'Regular Season': 'cat-regular-season',
    'Single Season': 'cat-single-season',
    'Weekly': 'cat-weekly',
    'Playoffs': 'cat-playoffs',
    'Championships': 'cat-championships',
    'Single Game': 'cat-single-game',
    'Consistency': 'cat-consistency',
    'Streaks': 'cat-streaks'
  };
  cards.sort((a, b) => categoryOrder.indexOf(a.medal) - categoryOrder.indexOf(b.medal));
  cards.forEach(c => { c.cls = categorySlug[c.medal] || ''; });

  return cards;
}

function renderAllTimeRecords(containerId){
  const el = document.getElementById(containerId);
  if(!el) return;
  const cards = buildRecordCards();

  el.innerHTML = `<div class="award-grid">` + cards.map(c => `<div class="award-card ${c.cls}">
    <div class="medal">${c.medal}</div>
    <h3>${c.title}</h3>
    <div class="headline-stat">${c.stat}</div>
    <p>${c.body}</p>
    ${c.extra}
  </div>`).join('') + `</div>`;
}

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

// ---------- Draft History ----------
function renderDraftHistory(containerId){
  const el = document.getElementById(containerId);
  if(!el) return;
  const years = Object.keys(DRAFT_HISTORY).sort((a,b) => b - a);
  const params = new URLSearchParams(window.location.search);
  const requestedYear = params.get('year');
  const year = (requestedYear && DRAFT_HISTORY[requestedYear]) ? requestedYear : years[0];

  document.title = `${year} Draft — League of NARPS`;

  const yearSwitcher = `<div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:24px;">${years.map(y => `
    <a href="draft.html?year=${y}" style="font-family:var(--mono); font-size:0.85rem; padding:6px 14px; border-radius:20px; text-decoration:none; ${y === year ? 'background:var(--navy); color:var(--white);' : 'background:var(--panel); color:var(--text-soft); border:1px solid var(--line);'}">${y}</a>`).join('')}</div>`;

  let data = DRAFT_HISTORY[year].slice();
  let sortKey = 'overall';
  let sortDir = 'asc';

  function sortData(){
    data.sort((a,b) => {
      let av = a[sortKey], bv = b[sortKey];
      if(typeof av === 'string') return sortDir === 'asc' ? av.localeCompare(bv) : bv.localeCompare(av);
      return sortDir === 'asc' ? av - bv : bv - av;
    });
  }

  const tableEl = document.createElement('div');

  function draw(){
    sortData();
    const rows = data.map(p => `<tr>
      <td class="pos">${p.round}</td>
      <td class="pos">${p.pick}</td>
      <td class="pos">${p.overall}</td>
      <td class="name-cell">${p.player}</td>
      <td class="pos">${p.position}</td>
      <td class="pos">${p.nflTeam}</td>
      <td class="name-cell">${p.fantasyTeam}</td>
      <td>${p.owner}</td>
    </tr>`).join('');

    tableEl.innerHTML = `<div class="table-scroll"><table id="draft-table">
      <thead><tr>
        <th data-key="round">Rd</th>
        <th data-key="pick">Pk</th>
        <th data-key="overall">Overall</th>
        <th data-key="player">Player</th>
        <th data-key="position">Pos</th>
        <th data-key="nflTeam">NFL</th>
        <th data-key="fantasyTeam">Fantasy Team</th>
        <th data-key="owner">Owner</th>
      </tr></thead>
      <tbody>${rows}</tbody>
    </table></div>
    <p class="muted" style="font-size:0.82rem;margin-top:10px;">Click a column header to sort — by round/pick (default) or by team.</p>`;

    tableEl.querySelectorAll('thead th').forEach(th => {
      const key = th.dataset.key;
      th.addEventListener('click', () => {
        if(sortKey === key){ sortDir = sortDir === 'asc' ? 'desc' : 'asc'; }
        else { sortKey = key; sortDir = 'asc'; }
        draw();
      });
      if(key === sortKey) th.classList.add(sortDir === 'asc' ? 'sorted-asc' : 'sorted-desc');
    });
  }
  draw();

  el.innerHTML = '';
  const switcherWrap = document.createElement('div');
  switcherWrap.innerHTML = yearSwitcher;
  el.appendChild(switcherWrap);
  el.appendChild(tableEl);
}

// ---------- Rules & Bylaws History ----------
function renderRulesHistory(containerId){
  const el = document.getElementById(containerId);
  if(!el) return;
  const years = RULES_HISTORY.slice().sort((a,b) => b.year - a.year).map(y => String(y.year));
  const params = new URLSearchParams(window.location.search);
  const requestedYear = params.get('year');
  const year = (requestedYear && years.includes(requestedYear)) ? requestedYear : years[0];
  const yearData = RULES_HISTORY.find(y => String(y.year) === year);

  document.title = `${year} Rules & Bylaws — League of NARPS`;

  const yearSwitcher = `<div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:24px;">${years.map(y => `
    <a href="rules.html?year=${y}" style="font-family:var(--mono); font-size:0.85rem; padding:6px 14px; border-radius:20px; text-decoration:none; ${y === year ? 'background:var(--navy); color:var(--white);' : 'background:var(--panel); color:var(--text-soft); border:1px solid var(--line);'}">${y}</a>`).join('')}</div>`;

  const outcomePill = (v) => {
    if(v.passed === true) return `<span class="rule-pill rule-passed">Passed</span>`;
    if(v.passed === false) return `<span class="rule-pill rule-rejected">Rejected</span>`;
    return `<span class="rule-pill rule-plurality">Voted</span>`;
  };

  const roundsHtml = yearData ? yearData.rounds.map(r => {
    const outcomeRank = (v) => v.passed === true ? 0 : v.passed === false ? 1 : 2;
    const sortedVotes = r.votes.slice().sort((a, b) => outcomeRank(a) - outcomeRank(b));
    const votesHtml = sortedVotes.map(v => {
      const outcomeClass = v.passed === true ? 'vote-row--passed' : v.passed === false ? 'vote-row--rejected' : 'vote-row--voted';
      return `
      <div class="vote-row ${outcomeClass}">
        <div class="vote-row-main">
          <span class="vote-category">${v.category}</span>
          <p class="vote-question">${v.question}</p>
          <p class="vote-options">${v.options.join(' &nbsp;·&nbsp; ')}</p>
          ${v.result ? `<p class="vote-result">${v.result}</p>` : ''}
          ${v.note ? `<p class="vote-note">${v.note}</p>` : ''}
        </div>
        ${outcomePill(v)}
      </div>
    `;
    }).join('');
    return `<div class="rules-round">
      <h4 class="rules-round-label">${r.label}</h4>
      <div class="vote-list">${votesHtml}</div>
    </div>`;
  }).join('') : '<p class="muted">No rule changes recorded for this year.</p>';

  el.innerHTML = yearSwitcher + roundsHtml;
}

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initNavDropdowns();
});
