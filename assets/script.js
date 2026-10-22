// Apply any stored theme preference immediately, before the rest of the page's
// scripts run, to minimize a flash of the wrong theme on load.
(function(){
  try {
    const stored = window.localStorage.getItem('lon-theme');
    if(stored === 'light' || stored === 'dark') document.documentElement.setAttribute('data-theme', stored);
  } catch(e) {}
})();

// ---------- Owner names ----------
// ESPN listed some owners under other names over the years (George/Sonny Wright,
// Zachary/Zach Sizemore, Joseph/Joe Garton, Zachary/Z Hickman). Show everyone by the
// name on their TEAMS entry, matched by last name like the rest of the site.
(function normalizeOwnerNames(){
  if(typeof TEAMS === 'undefined') return;
  const byLast = {};
  TEAMS.forEach(t => { byLast[lastNameOf(t.owner)] = t.owner; });
  const fix = n => (n && byLast[lastNameOf(n)]) || n;
  if(typeof SEASONS !== 'undefined') Object.values(SEASONS).forEach(s => {
    ['champion', 'second', 'third'].forEach(k => { if(s[k] && s[k].owner) s[k].owner = fix(s[k].owner); });
    (s.standings || []).forEach(r => { r.owner = fix(r.owner); });
    const games = [...Object.values(s.schedule || {}).flat(), ...Object.values(s.playoffs || {}).flatMap(r => r.games || [])];
    games.forEach(g => { g.awayMgr = fix(g.awayMgr); g.homeMgr = fix(g.homeMgr); });
  });
  if(typeof DRAFT_HISTORY !== 'undefined') Object.values(DRAFT_HISTORY).forEach(list => list.forEach(p => { p.owner = fix(p.owner); }));
})();

// ---------- Theme (light/dark mode) ----------
function getStoredTheme(){
  try {
    return window.localStorage.getItem('lon-theme');
  } catch(e) {
    return null;
  }
}
function setStoredTheme(theme){
  try {
    window.localStorage.setItem('lon-theme', theme);
  } catch(e) {
    // storage unavailable (private browsing, etc.) — theme just won't persist
  }
}
function currentEffectiveTheme(){
  const stored = getStoredTheme();
  if(stored === 'light' || stored === 'dark') return stored;
  return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
}
function applyTheme(theme){
  if(theme === 'light' || theme === 'dark'){
    document.documentElement.setAttribute('data-theme', theme);
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
  const btn = document.querySelector('.theme-toggle');
  if(btn){
    const effective = currentEffectiveTheme();
    btn.innerHTML = effective === 'dark'
      ? '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>'
      : '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';
    btn.setAttribute('aria-label', effective === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }
}
function initThemeToggle(){
  const stored = getStoredTheme();
  if(stored === 'light' || stored === 'dark') applyTheme(stored);

  const navWrap = document.querySelector('.site-header .wrap');
  if(!navWrap || document.querySelector('.theme-toggle')) return;
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'theme-toggle';
  navWrap.appendChild(btn);
  applyTheme(getStoredTheme());
  btn.addEventListener('click', () => {
    const next = currentEffectiveTheme() === 'dark' ? 'light' : 'dark';
    setStoredTheme(next);
    applyTheme(next);
  });
}

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

// ---------- Homepage hero stats ----------
// Total regular-season games played across all seasons to date (excludes playoffs
// and excludes unplayed/placeholder 0-0 weeks of an in-progress season). Rendered
// live so the homepage stat never needs a manual update after adding a week's results.
function totalRegularSeasonGamesPlayed(){
  let count = 0;
  Object.values(SEASONS || {}).forEach(s => {
    Object.values(s.schedule || {}).forEach(games => {
      games.forEach(g => { if(!(g.awayScore === 0 && g.homeScore === 0)) count++; });
    });
  });
  return count;
}

function renderTotalGamesStat(elId){
  const el = document.getElementById(elId);
  if(!el) return;
  el.textContent = totalRegularSeasonGamesPlayed().toLocaleString('en-US');
}

// ---------- Standings table ----------
function fmtPct(v){ return v == null ? '—' : (v*100).toFixed(1)+'%'; }

// Longest regular-season winning streak per franchise (consecutive regular-season
// wins in chronological order, carrying across seasons; a loss or tie ends it;
// unplayed 0-0 games are skipped). Playoff games are not part of SEASONS.schedule.
function computeLongestWinStreaks(){
  const keyByLast = {};
  TEAMS.forEach(t => { keyByLast[lastNameOf(t.owner)] = t.key; });
  const weekNum = wk => parseInt(String(wk).replace(/\D/g,''),10) || 0;
  const cur = {}, best = {};
  Object.keys(SEASONS || {}).sort((a,b) => a - b).forEach(yr => {
    const sched = SEASONS[yr].schedule || {};
    Object.keys(sched).sort((a,b) => weekNum(a) - weekNum(b)).forEach(wk => {
      sched[wk].forEach(g => {
        if(g.awayScore === 0 && g.homeScore === 0) return;
        [[g.awayMgr, g.awayScore, g.homeScore], [g.homeMgr, g.homeScore, g.awayScore]].forEach(([m, pf, pa]) => {
          const k = keyByLast[lastNameOf(m)];
          if(!k) return;
          if(pf > pa){ cur[k] = (cur[k] || 0) + 1; if(cur[k] > (best[k] || 0)) best[k] = cur[k]; }
          else cur[k] = 0;
        });
      });
    });
  });
  return best;
}

// All-time median and all-play records per franchise, from every played regular-season
// week (same rules as the season standings): median = beat/lose to that week's league
// median score (equal = tie); all-play = compare against every other team's score that week.
// Also tracks each franchise's best regular-season game (Best Gm), so it never needs hand-entering.
function computeAllTimeMedianAllPlay(){
  const keyByLast = {};
  TEAMS.forEach(t => { keyByLast[lastNameOf(t.owner)] = t.key; });
  const med = {}, ap = {}, hi = {};
  TEAMS.forEach(t => { med[t.key] = { w:0, l:0, t:0 }; ap[t.key] = { w:0, l:0, t:0 }; hi[t.key] = 0; });
  Object.values(SEASONS || {}).forEach(s => {
    Object.values(s.schedule || {}).forEach(games => {
      const wk = [];
      games.forEach(g => {
        if(g.awayScore === 0 && g.homeScore === 0) return; // unplayed placeholder
        wk.push([keyByLast[lastNameOf(g.awayMgr)], g.awayScore]);
        wk.push([keyByLast[lastNameOf(g.homeMgr)], g.homeScore]);
      });
      if(!wk.length) return;
      const sorted = wk.map(x => x[1]).sort((a,b) => a - b);
      const mid = Math.floor(sorted.length / 2);
      const median = sorted.length % 2 === 0 ? (sorted[mid-1] + sorted[mid]) / 2 : sorted[mid];
      wk.forEach(([k, sc], i) => {
        if(!k) return;
        if(sc > hi[k]) hi[k] = sc;
        if(sc > median) med[k].w++; else if(sc < median) med[k].l++; else med[k].t++;
        wk.forEach(([, oSc], j) => {
          if(i === j) return;
          if(sc > oSc) ap[k].w++; else if(sc < oSc) ap[k].l++; else ap[k].t++;
        });
      });
    });
  });
  const pct = r => { const g = r.w + r.l + r.t; return g ? (r.w + 0.5 * r.t) / g : 0; };
  const str = r => `${r.w}-${r.l}${r.t ? '-' + r.t : ''}`;
  const out = {};
  TEAMS.forEach(t => {
    out[t.key] = { medianStr: str(med[t.key]), medianW: med[t.key].w, medianPct: pct(med[t.key]), allPlayStr: str(ap[t.key]), allPlayW: ap[t.key].w, allPlayPct: pct(ap[t.key]), highScore: hi[t.key] };
  });
  return out;
}

function standingsRowHTML(t, i){
  return `<tr>
    <td class="pos">${i+1}</td>
    <td class="name-cell"><a href="team.html?team=${encodeURIComponent(t.key)}" class="owner-link">${t.owner}</a><div class="muted" style="font-size:0.78rem;font-family:var(--body);font-weight:400;">${t.team}</div></td>
    <td class="pos">${t.seasons} yrs</td>
    <td>${t.champs > 0 ? `<span class="pill">${t.champs}★</span>` : '—'}</td>
    <td class="pos">${t.playoffApp}</td>
    <td class="num grp-l">${t.gamesW}-${t.gamesL}${t.gamesT ? '-'+t.gamesT : ''}</td>
    <td class="num">${fmtPct(t.winPct)}</td>
    <td class="num grp-l">${t.totalPF.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}</td>
    <td class="num">${t.gameAvgPF.toFixed(1)}</td>
    <td>${t.diff > 0 ? '+' : ''}${t.diff.toFixed(1)}</td>
    <td class="num grp-l">${t.medianStr}</td>
    <td class="num">${fmtPct(t.medianPct)}</td>
    <td class="num grp-l">${t.allPlayStr}</td>
    <td class="num grp-r">${fmtPct(t.allPlayPct)}</td>
    <td class="pos">${t.winStreak}</td>
    <td>${t.highScore.toFixed(1)}</td>
  </tr>`;
}

function playoffRowHTML(t, i){
  return `<tr>
    <td class="pos">${i+1}</td>
    <td class="name-cell"><a href="team.html?team=${encodeURIComponent(t.key)}" class="owner-link">${t.owner}</a><div class="muted" style="font-size:0.78rem;font-family:var(--body);font-weight:400;">${t.team}</div></td>
    <td>${t.champs > 0 ? `<span class="pill">${t.champs}★</span>` : '—'}</td>
    <td class="pos">${t.playoffApp}</td>
    <td class="pos">${t.byes}</td>
    <td>${t.playoffW}-${t.playoffL}</td>
    <td>${fmtPct(t.playoffWinPct)}</td>
    <td>${t.playoffPF.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}</td>
    <td class="pos">${t.champGameApp}</td>
    <td>${t.champGameW}-${t.champGameL}</td>
  </tr>`;
}

function renderStandings(containerId){
  const el = document.getElementById(containerId);
  if(!el) return;
  let mode = 'regular';
  let sortKey = 'winPct';
  let sortDir = 'desc';
  const streaks = computeLongestWinStreaks();
  const medAp = computeAllTimeMedianAllPlay();
  const HIDE_STORE = 'lon-standings-hidden-cols';
  const ALWAYS_SHOWN = ['rank', 'owner'];
  let hidden = { regular: [], playoffs: [] };
  try {
    const saved = JSON.parse(window.localStorage.getItem(HIDE_STORE) || 'null');
    if(saved && Array.isArray(saved.regular) && Array.isArray(saved.playoffs)) hidden = saved;
  } catch(e) {}
  const saveHidden = () => { try { window.localStorage.setItem(HIDE_STORE, JSON.stringify(hidden)); } catch(e) {} };
  let pickerOpen = false;

  // Rate columns need a 10-game minimum: owners below it sort after qualified owners.
  const RATE_KEYS = ['winPct', 'gameAvgPF', 'diff', 'medianPct', 'allPlayPct'];
  const MIN_GAMES = 10;
  const qualifies = t => ((t.gamesW || 0) + (t.gamesL || 0) + (t.gamesT || 0)) >= MIN_GAMES;
  function sortData(list, key, dir){
    list.sort((a,b) => {
      if(RATE_KEYS.includes(key) && qualifies(a) !== qualifies(b)) return qualifies(a) ? -1 : 1;
      let av = key === 'record' ? a.gamesW : a[key];
      let bv = key === 'record' ? b.gamesW : b[key];
      if(typeof av === 'string') return dir === 'asc' ? av.localeCompare(bv) : bv.localeCompare(av);
      av = av == null ? -Infinity : av;
      bv = bv == null ? -Infinity : bv;
      return dir === 'asc' ? av - bv : bv - av;
    });
    return list;
  }

  function draw(){
    const isRegular = mode === 'regular';
    const sourceList = isRegular
      ? TEAMS.map(t => ({ ...t, winStreak: streaks[t.key] || 0, ...medAp[t.key] }))
      : TEAMS.map(t => ({ ...t, playoffPF: computeAllTimeRecords().playoffPoints[t.key] || 0 }));
    const data = sortData(sourceList, sortKey, sortDir);

    const tabsHtml = `<div class="standings-tabs">
      <button type="button" class="standings-tab${isRegular ? ' active' : ''}" data-mode="regular">Regular Season</button>
      <button type="button" class="standings-tab${!isRegular ? ' active' : ''}" data-mode="playoffs">Playoffs</button>
    </div>`;

    const theadHtml = isRegular ? `<tr>
        <th data-key="rank">#</th>
        <th data-key="owner">Owner / Team</th>
        <th data-key="seasons">Seasons</th>
        <th data-key="champs">Titles</th>
        <th data-key="playoffApp">Playoffs</th>
        <th data-key="record" class="grp-l">Record</th>
        <th data-key="winPct">Win%</th>
        <th data-key="totalPF" class="grp-l">Total PF</th>
        <th data-key="gameAvgPF">Avg PF</th>
        <th data-key="diff">Pt Diff/G</th>
        <th data-key="medianW" class="grp-l">Median Record</th>
        <th data-key="medianPct">Median Win%</th>
        <th data-key="allPlayW" class="grp-l">All-Play Record</th>
        <th data-key="allPlayPct" class="grp-r">All-Play Win%</th>
        <th data-key="winStreak">Longest Win Streak</th>
        <th data-key="highScore">Best Gm</th>
      </tr>` : `<tr>
        <th data-key="rank">#</th>
        <th data-key="owner">Owner / Team</th>
        <th data-key="champs">Titles</th>
        <th data-key="playoffApp">Playoff Apps</th>
        <th data-key="byes">Byes</th>
        <th data-key="playoffW">Playoff Record</th>
        <th data-key="playoffWinPct">Playoff Win%</th>
        <th data-key="playoffPF">Total Playoff PF</th>
        <th data-key="champGameApp">Champ. Gm Apps</th>
        <th data-key="champGameW">Champ. Gm Record</th>
      </tr>`;

    const rowFn = isRegular ? standingsRowHTML : playoffRowHTML;
    const footnote = isRegular
      ? 'Owners with fewer than 10 regular-season games are listed last when sorting by Win%, averages or rates. Median Record: record against each week\'s league median score. All-Play Record: record if you played every team every week. Longest Win Streak counts consecutive regular-season wins across seasons.'
      : 'Playoff Win% and Championship Game Record cover playoff games only.';

    const colDefs = [...theadHtml.matchAll(/<th data-key="([^"]+)"[^>]*>([^<]+)<\/th>/g)].map(m => ({ key: m[1], label: m[2] }));
    const hiddenNow = hidden[mode].filter(k => colDefs.some(c => c.key === k));
    const pickerHtml = `<details class="col-picker"${pickerOpen ? ' open' : ''}>
      <summary>Columns${hiddenNow.length ? ` <span class="col-picker-count">${hiddenNow.length} hidden</span>` : ''}</summary>
      <div class="col-picker-menu">
        ${colDefs.filter(c => !ALWAYS_SHOWN.includes(c.key)).map(c =>
          `<label><input type="checkbox" data-col="${c.key}"${hiddenNow.includes(c.key) ? '' : ' checked'}> ${c.label}</label>`).join('')}
        ${hiddenNow.length ? '<button type="button" class="col-picker-reset">Show all</button>' : ''}
      </div>
    </details>`;

    el.innerHTML = `<div class="standings-toolbar">${tabsHtml}${pickerHtml}</div>
    <div class="table-scroll"><table id="standings-table">
      <thead>${theadHtml}</thead>
      <tbody>${data.map(rowFn).join('')}</tbody>
    </table></div>
    <p class="muted" style="font-size:0.82rem;margin-top:10px;">${footnote}</p>`;

    // Hide chosen columns (header + every cell in that column position)
    const table = el.querySelector('#standings-table');
    colDefs.forEach((c, idx) => {
      if(!hiddenNow.includes(c.key)) return;
      table.querySelectorAll(`tr > :nth-child(${idx + 1})`).forEach(cell => { cell.style.display = 'none'; });
    });
    const picker = el.querySelector('.col-picker');
    picker.addEventListener('toggle', () => { pickerOpen = picker.open; });
    picker.querySelectorAll('input[data-col]').forEach(cb => {
      cb.addEventListener('change', () => {
        const k = cb.dataset.col;
        hidden[mode] = cb.checked ? hidden[mode].filter(x => x !== k) : [...new Set([...hidden[mode], k])];
        saveHidden();
        draw();
      });
    });
    const resetBtn = picker.querySelector('.col-picker-reset');
    if(resetBtn) resetBtn.addEventListener('click', () => { hidden[mode] = []; saveHidden(); draw(); });

    el.querySelectorAll('.standings-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        const newMode = btn.dataset.mode;
        if(newMode === mode) return;
        mode = newMode;
        pickerOpen = false;
        sortKey = mode === 'regular' ? 'winPct' : 'playoffWinPct';
        sortDir = 'desc';
        draw();
      });
    });

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
// ---------- Newsletters ----------
// ---------- Newsletters ----------
function renderVolumesList(containerId){
  const el = document.getElementById(containerId);
  if(!el) return;
  const vols = Array.from(new Set(NEWSLETTERS.map(n => n.vol))).sort((a,b) => b - a);
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

  document.title = `Volume ${vol} | League of NARPS`;
  const titleEl = document.getElementById('volume-title');
  if(titleEl) titleEl.textContent = `Volume ${vol}`;

  el.innerHTML = `<div class="table-scroll"><table>
    <thead><tr><th>Issue</th><th>Title</th><th>Season</th><th></th></tr></thead>
    <tbody>
      ${issues.map(n => `<tr onclick="if(event.target.tagName !== 'A') window.open('${n.url}', '_blank')" style="cursor:pointer;">
        <td class="pos">Vol. ${n.vol}, No. ${n.no}</td>
        <td class="name-cell">${n.title}</td>
        <td class="pos">${n.year}</td>
        <td><a href="${n.url}" target="_blank" rel="noopener" style="font-size:0.85rem; text-decoration:underline; color:var(--field); white-space:nowrap;">Read</a></td>
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
      <p style="margin:0;">Draft Day${draftInfo ? '<br>' + draftInfo.label : ''}</p>
    </a>`;
  }).join('');

  const seasonCards = seasonYears.map(y => {
    const s = SEASONS[y];
    const started = (s.standings || []).some(t => (t.w||0) + (t.l||0) + (t.t||0) > 0);
    if(!started){
      const draftInfo = (typeof DRAFT_DATES !== 'undefined' && DRAFT_DATES[y]) || null;
      return `<a class="nav-card" href="season.html?year=${y}">
        <h3>${y}</h3>
        <p style="margin:0;">Season in progress${draftInfo ? '<br>Draft Day: ' + draftInfo.label : ''}</p>
      </a>`;
    }
    if(!s.champion || s.champion.owner === 'TBD'){
      return `<a class="nav-card" href="season.html?year=${y}">
        <h3>${y}</h3>
        <p style="margin:0;">Season in progress</p>
      </a>`;
    }
    return `<a class="nav-card" href="season.html?year=${y}">
      <h3>${y}</h3>
      <p style="margin:0;">
        <span class="place">1st</span><strong>${s.champion.owner}</strong><br>
        <span class="place">2nd</span>${s.second.owner}<br>
        <span class="place">3rd</span>${s.third.owner}
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

function boxscoreSideTable(teamName, score, players, bench){
  const line = (p, cls) => `<tr${cls ? ` class="${cls}"` : ''}>
    <td class="pos" style="font-family:var(--mono); font-size:0.78rem; color:var(--text-soft);">${p.slot}</td>
    <td>${playerLink(p.player)}</td>
    <td class="pos center">${p.pts.toFixed(1)}</td>
  </tr>`;
  const rows = players.map(p => line(p)).join('');
  const benchTotal = (bench || []).reduce((a, p) => a + p.pts, 0);
  const benchRows = bench && bench.length ? `<tr class="bs-bench-head"><td colspan="2">Bench</td><td class="pos center">${benchTotal.toFixed(1)}</td></tr>
    ${bench.map(p => line(p, 'bs-bench')).join('')}` : '';
  return `<div class="table-scroll"><table>
    <thead><tr><th colspan="3" style="text-align:left;">${teamName} · ${score}</th></tr></thead>
    <tbody>${rows}${benchRows}</tbody>
  </table></div>`;
}

function matchupCard(g){
  const awayWin = g.awayScore > g.homeScore;
  return `<details style="margin-bottom:8px;">
    <summary style="cursor:pointer; padding:10px 12px; background:var(--panel); color:var(--text); border:1px solid var(--line); border-radius:var(--radius); display:grid; grid-template-columns:1fr auto 1fr; align-items:center; gap:16px; font-size:12px;">
      <span style="${awayWin ? 'font-weight:700;' : ''}">${g.away} ${g.awayScore}</span>
      <span style="color:var(--text-soft); text-align:center;">at</span>
      <span style="${!awayWin ? 'font-weight:700;' : ''} text-align:right;">${g.home} ${g.homeScore}</span>
    </summary>
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-top:8px;">
      ${boxscoreSideTable(g.away, g.awayScore, g.boxscore.away, g.boxscore.awayBench)}
      ${boxscoreSideTable(g.home, g.homeScore, g.boxscore.home, g.boxscore.homeBench)}
    </div>
  </details>`;
}

// ---------- Standings race chart (weekly rank tracker) ----------
// Only shown once a season has at least 3 completed weeks of results.
const RACE_CHART_MIN_WEEKS = 3;

function computeWeeklyRanks(s){
  const weekNum = (wk) => parseInt(wk.replace(/\D/g, ''), 10) || 0;
  const weekKeys = Object.keys(s.schedule || {})
    .filter(wk => (s.schedule[wk] || []).some(g => Math.max(g.awayScore, g.homeScore) > 0))
    .sort((a,b) => weekNum(a) - weekNum(b));
  if(!weekKeys.length) return null;

  const owners = s.standings.map(r => r.owner);
  const record = {}, points = {};
  owners.forEach(o => { record[o] = { w:0, l:0, t:0 }; points[o] = 0; });

  const rankHistory = {}; // owner -> [rank at week1, week2, ...]
  const pointsHistory = {}; // owner -> [cumulative points after week1, week2, ...]
  const pointsRankHistory = {}; // owner -> [rank by cumulative points after each week]
  owners.forEach(o => { rankHistory[o] = []; pointsHistory[o] = []; pointsRankHistory[o] = []; });

  weekKeys.forEach(wk => {
    (s.schedule[wk] || []).forEach(g => {
      if(Math.max(g.awayScore, g.homeScore) <= 0) return;
      points[g.awayMgr] = (points[g.awayMgr] || 0) + g.awayScore;
      points[g.homeMgr] = (points[g.homeMgr] || 0) + g.homeScore;
      if(g.awayScore > g.homeScore){ record[g.awayMgr].w++; record[g.homeMgr].l++; }
      else if(g.homeScore > g.awayScore){ record[g.homeMgr].w++; record[g.awayMgr].l++; }
      else { record[g.awayMgr].t++; record[g.homeMgr].t++; }
    });

    // Apply the league's seeding rule as of this week: top 5 by record (points
    // tiebreak), remaining teams ranked purely by cumulative points.
    const byRecord = owners.slice().sort((a,b) => (record[b].w - record[a].w) || (points[b] - points[a]));
    const top5 = byRecord.slice(0, 5);
    const rest = byRecord.slice(5).sort((a,b) => points[b] - points[a]);
    const order = top5.concat(rest);
    order.forEach((o, i) => rankHistory[o].push(i + 1));

    // Total points scored race: pure rank by cumulative points.
    owners.forEach(o => pointsHistory[o].push(points[o]));
    owners.slice().sort((a,b) => points[b] - points[a]).forEach((o, i) => pointsRankHistory[o].push(i + 1));
  });

  return { weekKeys, rankHistory, pointsHistory, pointsRankHistory, teamCount: owners.length };
}

const RACE_CHART_COLORS = [
  '#2F6FED', '#D62839', '#1F9E5A', '#B8860B', '#7C3AED', '#0EA5A5',
  '#DB2777', '#EA580C', '#4B5563', '#059669', '#9333EA', '#C2410C', '#0284C7'
];

function weekNumLabel(wk){
  const n = parseInt(wk.replace(/\D/g, ''), 10);
  return isNaN(n) ? wk : `Wk ${n}`;
}

function renderStandingsRaceChart(s, keyByLastName, lastNameOf){
  return renderRaceChart(s, 'standings');
}

// Points Race: each team's cumulative points ahead of that week's lowest scorer.
// Y axis is actual points ahead (0 = last place, at the bottom), so the leader climbs.
function renderPointsRaceChart(s){
  const data = computeWeeklyRanks(s);
  if(!data || data.weekKeys.length < RACE_CHART_MIN_WEEKS) return '';
  const { weekKeys, pointsHistory, teamCount } = data;
  const owners = Object.keys(pointsHistory);
  const fmtPts = (v) => v.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  const round1 = (v) => Math.round(v * 10) / 10;

  // ahead[owner][i] = this owner's cumulative points after week i minus the lowest scorer's
  const floorPts = weekKeys.map((_, i) => Math.min(...owners.map(o => pointsHistory[o][i])));
  const ahead = {};
  owners.forEach(o => { ahead[o] = pointsHistory[o].map((p, i) => round1(p - floorPts[i])); });

  // Y scale: 0 at the bottom up to a rounded-up max lead, with ~5 evenly spaced ticks
  const maxAhead = Math.max(1, ...owners.map(o => Math.max(...ahead[o])));
  const step = [5, 10, 20, 25, 50, 100, 200, 250, 500].find(st => maxAhead / st <= 6) || 1000;
  const yMax = Math.ceil(maxAhead / step) * step;

  const padL = 56, padR = 220, padT = 16, padB = 30;
  const chartW = 860, chartH = 60 + teamCount * 26;
  const innerW = chartW - padL - padR, innerH = chartH - padT - padB;
  const xStep = weekKeys.length > 1 ? innerW / (weekKeys.length - 1) : 0;
  const xAt = (i) => padL + i * xStep;
  const yAt = (v) => padT + innerH - (v / yMax) * innerH;

  const ownerColor = {};
  owners.forEach((o, i) => { ownerColor[o] = RACE_CHART_COLORS[i % RACE_CHART_COLORS.length]; });

  const gridLines = weekKeys.map((wk, i) => `<line x1="${xAt(i)}" y1="${padT}" x2="${xAt(i)}" y2="${padT+innerH}" stroke="var(--line)" stroke-width="1" />`).join('');
  const ticks = [];
  for(let v = 0; v <= yMax; v += step) ticks.push(v);
  const yGrid = ticks.map(v => `
    <line x1="${padL}" y1="${yAt(v)}" x2="${padL+innerW}" y2="${yAt(v)}" stroke="var(--line)" stroke-width="1" />
    <text x="${padL - 8}" y="${yAt(v) + 3.5}" font-size="10" font-family="var(--mono)" fill="var(--text-soft)" text-anchor="end">${v === 0 ? '0' : '+' + v}</text>`).join('');
  const yTitle = `<text transform="translate(12 ${padT + innerH / 2}) rotate(-90)" font-size="10" font-family="var(--mono)" fill="var(--text-soft)" text-anchor="middle">Points ahead of last place</text>`;
  const weekLabels = weekKeys.map((wk, i) => `<text x="${xAt(i)}" y="${padT+innerH+20}" font-size="10" font-family="var(--mono)" fill="var(--text-soft)" text-anchor="middle">${weekNumLabel(wk)}</text>`).join('');

  // End-of-line labels, nudged apart so teams bunched near each other stay readable
  const last = weekKeys.length - 1;
  const labelGap = 13;
  const labels = owners
    .map(o => ({ o, y: yAt(ahead[o][last]) }))
    .sort((a, b) => a.y - b.y);
  labels.forEach((l, i) => { l.ly = i === 0 ? l.y : Math.max(l.y, labels[i-1].ly + labelGap); });
  const overflow = labels.length ? labels[labels.length-1].ly - (padT + innerH + 4) : 0;
  if(overflow > 0){
    for(let i = labels.length - 1; i >= 0; i--){
      const cap = i === labels.length - 1 ? labels[i].ly - overflow : labels[i+1].ly - labelGap;
      labels[i].ly = Math.min(labels[i].ly, cap);
    }
  }
  const labelY = {};
  labels.forEach(l => { labelY[l.o] = l.ly; });

  const teamPaths = owners.map(o => {
    const vals = ahead[o];
    const teamName = (s.standings.find(row => row.owner === o) || {}).team || o;
    const lastVal = vals[last];
    const endLabel = lastVal === 0 ? `${teamName} · Last` : `${teamName} · +${fmtPts(lastVal)}`;
    const pts = vals.map((v, i) => `${xAt(i)},${yAt(v)}`).join(' ');
    const weekDots = vals.map((v, i) => `<circle cx="${xAt(i)}" cy="${yAt(v)}" r="5" fill="${ownerColor[o]}" fill-opacity="0.001"><title>${teamName}, ${weekNumLabel(weekKeys[i])}: ${v === 0 ? 'last place' : fmtPts(v) + ' ahead of last'} (${fmtPts(pointsHistory[o][i])} pts)</title></circle>`).join('');
    return `
      <g class="race-team">
        <polyline points="${pts}" fill="none" stroke="${ownerColor[o]}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round">
          <title>${endLabel}</title>
        </polyline>
        <circle cx="${xAt(last)}" cy="${yAt(lastVal)}" r="3.5" fill="${ownerColor[o]}" />
        ${weekDots}
        <text x="${xAt(last) + 10}" y="${labelY[o] + 4}" font-size="11" font-family="var(--body)" font-weight="600" fill="${ownerColor[o]}">${endLabel}</text>
      </g>
    `;
  }).join('');

  return `<div class="table-scroll">
    <svg class="race-chart" viewBox="0 0 ${chartW} ${chartH}" style="width:100%; height:auto; min-width:700px;">
      ${gridLines}${yGrid}${yTitle}${weekLabels}${teamPaths}
    </svg>
  </div>`;
}

// mode 'standings': rank by the league's seeding rule. mode 'points': rank by total points scored,
// with each team's running point total shown in the label and tooltips.
function renderRaceChart(s, mode){
  const data = computeWeeklyRanks(s);
  if(!data || data.weekKeys.length < RACE_CHART_MIN_WEEKS) return '';
  const isPoints = mode === 'points';
  const { weekKeys, teamCount } = data;
  const rankHistory = isPoints ? data.pointsRankHistory : data.rankHistory;
  const owners = Object.keys(rankHistory);
  const fmtPts = (v) => v.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 });

  const padL = 36, padR = isPoints ? 200 : 130, padT = 16, padB = 30;
  const chartW = 860, chartH = 60 + teamCount * 26;
  const innerW = chartW - padL - padR, innerH = chartH - padT - padB;
  const xStep = weekKeys.length > 1 ? innerW / (weekKeys.length - 1) : 0;
  const yStep = teamCount > 1 ? innerH / (teamCount - 1) : 0;
  const xAt = (i) => padL + i * xStep;
  const yAt = (rank) => padT + (rank - 1) * yStep;

  const ownerColor = {};
  owners.forEach((o, i) => { ownerColor[o] = RACE_CHART_COLORS[i % RACE_CHART_COLORS.length]; });

  const gridLines = weekKeys.map((wk, i) => `<line x1="${xAt(i)}" y1="${padT}" x2="${xAt(i)}" y2="${padT+innerH}" stroke="var(--line)" stroke-width="1" />`).join('');
  const rankLines = Array.from({length: teamCount}, (_, i) => i+1).map(r =>
    `<line x1="${padL}" y1="${yAt(r)}" x2="${padL+innerW}" y2="${yAt(r)}" stroke="var(--line)" stroke-width="1" />`
  ).join('');
  const weekLabels = weekKeys.map((wk, i) => `<text x="${xAt(i)}" y="${padT+innerH+20}" font-size="10" font-family="var(--mono)" fill="var(--text-soft)" text-anchor="middle">${weekNumLabel(wk)}</text>`).join('');

  const teamPaths = owners.map(o => {
    const ranks = rankHistory[o];
    const pts = ranks.map((r, i) => `${xAt(i)},${yAt(r)}`).join(' ');
    const lastRank = ranks[ranks.length - 1];
    const teamName = (s.standings.find(row => row.owner === o) || {}).team || o;
    const totalPts = isPoints ? data.pointsHistory[o][ranks.length - 1] : null;
    const endLabel = isPoints ? `${teamName} · ${fmtPts(totalPts)}` : teamName;
    const weekDots = isPoints ? ranks.map((r, i) => `<circle cx="${xAt(i)}" cy="${yAt(r)}" r="4" fill="${ownerColor[o]}" fill-opacity="0.001"><title>${teamName}, ${weekNumLabel(weekKeys[i])}: ${fmtPts(data.pointsHistory[o][i])} pts (#${r})</title></circle>`).join('') : '';
    return `
      <g class="race-team">
        <polyline points="${pts}" fill="none" stroke="${ownerColor[o]}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round">
          <title>${endLabel}</title>
        </polyline>
        <circle cx="${xAt(ranks.length-1)}" cy="${yAt(lastRank)}" r="3.5" fill="${ownerColor[o]}" />
        ${weekDots}
        <text x="${xAt(ranks.length-1) + 10}" y="${yAt(lastRank) + 4}" font-size="11" font-family="var(--body)" font-weight="600" fill="${ownerColor[o]}">${endLabel}</text>
      </g>
    `;
  }).join('');

  return `<div class="table-scroll">
    <svg class="race-chart" viewBox="0 0 ${chartW} ${chartH}" style="width:100%; height:auto; min-width:700px;">
      ${gridLines}${rankLines}${weekLabels}${teamPaths}
    </svg>
  </div>`;
}

// Merges the lazily-loaded BOXSCORES (from assets/data-boxscores.js) into SEASONS,
// so game objects get their .boxscore field attached the same way it used to live
// inline in data.js. Safe to call multiple times or when BOXSCORES isn't loaded yet.
let _boxscoresAttached = false;
function attachBoxscores(){
  if(_boxscoresAttached) return;
  if(typeof BOXSCORES === 'undefined' || typeof SEASONS === 'undefined') return;
  Object.keys(BOXSCORES).forEach(year => {
    const season = SEASONS[year];
    if(!season || !season.schedule) return;
    Object.keys(BOXSCORES[year]).forEach(week => {
      // Keys are schedule weeks ("Week 1") or playoff round keys ("round1", "thirdPlace").
      const games = season.schedule[week] || ((season.playoffs || {})[week] || {}).games;
      if(!games) return;
      BOXSCORES[year][week].forEach((bs, i) => {
        if(games[i] && bs) games[i].boxscore = bs;
      });
    });
  });
  _boxscoresAttached = true;
}

// ---------- Playoff bracket (desktop) ----------
// Columns for each round present (Round 1, Round 2, Championship), with connector
// lines between them and the 3rd place game under the championship. Round 1 games
// are reordered so each lines up with the Round 2 game its winner played in.
// Clicking a game that has a box score shows it under the bracket.
function renderPlayoffBracket(s){
  const p = s.playoffs || {};
  if(!p.round1 || !p.round3) return '';
  const seedOf = (team, mgr) => {
    const i = (s.standings || []).findIndex(r => r.owner === mgr || r.team === team);
    return i >= 0 ? i + 1 : '';
  };
  const winnerOf = g => g.awayScore > g.homeScore ? g.away : (g.homeScore > g.awayScore ? g.home : null);
  const splitLabel = (label, fallback) => {
    const m = (label || '').match(/^(.*?)\s*\(([^)]*)\)\s*$/);
    const head = (m ? m[1] : (label || fallback)).split('/').pop().trim();
    return { title: head || fallback, sub: m ? m[2] : '' };
  };

  const r2 = p.round2 ? p.round2.games : null;
  let r1 = p.round1.games.slice();
  if(r2){
    r1 = r2.map(g2 => r1.find(g1 => [g2.away, g2.home].includes(winnerOf(g1)))).filter(Boolean);
    p.round1.games.forEach(g1 => { if(!r1.includes(g1)) r1.push(g1); });
  }

  const gameBox = (g, roundKey, extraCls = '') => {
    const idx = (p[roundKey].games || []).indexOf(g);
    const w = winnerOf(g);
    const side = (team, mgr, score) => `<div class="bk-team${team === w ? ' bk-win' : ''}">
        <span class="bk-seed">${seedOf(team, mgr)}</span>
        <span class="bk-name">${team}</span>
        <span class="bk-score">${Number(score).toFixed(1)}</span>
      </div>`;
    const inner = side(g.away, g.awayMgr, g.awayScore) + side(g.home, g.homeMgr, g.homeScore);
    return g.boxscore
      ? `<button type="button" class="bk-game ${extraCls}" data-bk="${roundKey}:${idx}" aria-label="${g.away} vs ${g.home} box score">${inner}</button>`
      : `<div class="bk-game ${extraCls}">${inner}</div>`;
  };

  const col = (roundKey, games, rows) => {
    const lab = splitLabel(p[roundKey].label, roundKey);
    return `<div class="bk-col-head" style="grid-column:${rows.col};">${lab.title}<span>${lab.sub}</span></div>` +
      games.map((g, i) => `<div class="bk-cell" style="grid-column:${rows.col}; grid-row:${rows.at[i]};">${gameBox(g, roundKey)}</div>`).join('');
  };

  let cells = '', cols = '';
  let c = 1;
  // Round 1
  cells += col('round1', r1, { col: c, at: ['2 / 4', '4 / 6'] });
  cols += 'minmax(0,1fr) ';
  c++;
  if(r2){
    // straight connectors Round 1 -> Round 2 (each Round 2 game also has a bye seed)
    cells += `<div class="bk-link bk-link--straight" style="grid-column:${c}; grid-row:2 / 4;"></div>
              <div class="bk-link bk-link--straight" style="grid-column:${c}; grid-row:4 / 6;"></div>`;
    cols += '28px '; c++;
    cells += col('round2', r2, { col: c, at: ['2 / 4', '4 / 6'] });
    cols += 'minmax(0,1fr) '; c++;
  }
  // pair connector into the championship
  cells += `<div class="bk-link bk-link--join" style="grid-column:${c}; grid-row:2 / 6;"></div>`;
  cols += '28px '; c++;
  const champ = splitLabel(p.round3.label, 'Championship');
  cells += `<div class="bk-col-head" style="grid-column:${c};">${champ.title}<span>${champ.sub}</span></div>
            <div class="bk-cell" style="grid-column:${c}; grid-row:2 / 6;">${gameBox(p.round3.games[0], 'round3', 'bk-final')}</div>
            ${p.thirdPlace ? `<div class="bk-third" style="grid-column:${c};"><div class="bk-third-head">3rd Place</div>${gameBox(p.thirdPlace.games[0], 'thirdPlace')}</div>` : ''}`;
  cols += 'minmax(0,1fr)';

  const byes = p.round1.byes ? `<p class="muted bk-byes">Round 1 byes: ${p.round1.byes.map(b => `${b.team} (${b.pts} pts)`).join(', ')}</p>` : '';
  const anyBox = Object.values(p).some(r => (r.games || []).some(g => g.boxscore));
  return `<div class="bracket-wrap">
    <div class="bracket" style="grid-template-columns:${cols};">${cells}</div>
    ${byes}
    ${anyBox ? `<p class="muted bk-hint">Select a game to see its box score.</p><div class="bk-boxscore" id="bk-boxscore"></div>` : ''}
  </div>`;
}

function wirePlayoffBracket(root, s){
  const out = root.querySelector('#bk-boxscore');
  if(!out) return;
  root.querySelectorAll('.bk-game[data-bk]').forEach(btn => {
    btn.addEventListener('click', () => {
      const [rk, i] = btn.getAttribute('data-bk').split(':');
      const g = ((s.playoffs || {})[rk] || {}).games[Number(i)];
      if(!g || !g.boxscore) return;
      const wasActive = btn.classList.contains('bk-active');
      root.querySelectorAll('.bk-game.bk-active').forEach(b => b.classList.remove('bk-active'));
      if(wasActive){ out.innerHTML = ''; return; }
      btn.classList.add('bk-active');
      const label = (s.playoffs[rk].label || '').replace(/^Round \d+\s*\/\s*/, '');
      out.innerHTML = `<h3 class="bk-box-title">${label}: ${g.away} vs ${g.home}</h3>
        <div class="bk-box-grid">
          ${boxscoreSideTable(g.away, g.awayScore, g.boxscore.away, g.boxscore.awayBench)}
          ${boxscoreSideTable(g.home, g.homeScore, g.boxscore.home, g.boxscore.homeBench)}
        </div>`;
    });
  });
}

// "← 2024 · All Seasons · 2026 →" beside the season title.
function renderSeasonPrevNext(year){
  const nav = document.getElementById('season-nav');
  if(!nav || typeof SEASONS === 'undefined') return;
  const years = Object.keys(SEASONS).map(Number).sort((a,b) => a - b);
  const y = Number(year);
  const prev = years.filter(v => v < y).pop();
  const next = years.find(v => v > y);
  nav.innerHTML = [
    prev ? `<a class="back-link" href="season.html?year=${prev}">← ${prev}</a>` : '',
    `<a class="back-link" href="seasons.html">All Seasons</a>`,
    next ? `<a class="back-link" href="season.html?year=${next}">${next} →</a>` : '',
  ].filter(Boolean).join('');
}

function renderSeasonDetail(containerId){
  attachBoxscores();
  const el = document.getElementById(containerId);
  if(!el) return;
  const params = new URLSearchParams(window.location.search);
  const year = params.get('year') || Object.keys(SEASONS).sort((a,b)=>b-a)[0];
  const s = SEASONS[year];
  if(!s){
    if(typeof DRAFT_ORDER !== 'undefined' && DRAFT_ORDER[year]){
      document.title = `${year} Season | League of NARPS`;
      const titleEl = document.getElementById('season-title');
      if(titleEl) titleEl.textContent = `${year} Season`;
      renderSeasonPrevNext(year);
      const draftInfo = (typeof DRAFT_DATES !== 'undefined' && DRAFT_DATES[year]) || null;
      el.innerHTML = `
        <p class="muted" style="max-width:65ch; margin-bottom:24px;">The ${year} season hasn't kicked off yet. Here's the countdown to draft day and this year's draft order.</p>
        ${draftInfo ? `<div class="countdown-card" style="margin-bottom:32px;">
          <div class="countdown-title">Draft Day: ${draftInfo.label}</div>
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

  document.title = `${year} Season | League of NARPS`;
  const titleEl = document.getElementById('season-title');
  if(titleEl) titleEl.textContent = `${year} Season`;
  renderSeasonPrevNext(year);

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
  const weeklyHighs = {};
  const medianRecord = {};
  const allPlayRecord = {};
  Object.values(s.schedule || {}).forEach(games => games.forEach(g => {
    const ak = lastNameOf(g.awayMgr), hk = lastNameOf(g.homeMgr);
    if(!seasonPts[ak]) seasonPts[ak] = { pf: 0, pa: 0 };
    if(!seasonPts[hk]) seasonPts[hk] = { pf: 0, pa: 0 };
    seasonPts[ak].pf += g.awayScore; seasonPts[ak].pa += g.homeScore;
    seasonPts[hk].pf += g.homeScore; seasonPts[hk].pa += g.awayScore;
  }));
  Object.values(s.schedule || {}).forEach(games => {
    const weekScores = [];
    games.forEach(g => {
      weekScores.push([lastNameOf(g.awayMgr), g.awayScore]);
      weekScores.push([lastNameOf(g.homeMgr), g.homeScore]);
    });
    if(!weekScores.length) return;
    const maxScore = Math.max(...weekScores.map(([,sc]) => sc));
    if(maxScore <= 0) return;
    weekScores.forEach(([mgr, sc]) => {
      if(sc === maxScore) weeklyHighs[mgr] = (weeklyHighs[mgr] || 0) + 1;
    });

    // Median record: win if above the week's median score, loss if below, push if equal.
    const scoresOnly = weekScores.map(([,sc]) => sc).slice().sort((a,b) => a - b);
    const mid = Math.floor(scoresOnly.length / 2);
    const median = scoresOnly.length % 2 === 0 ? (scoresOnly[mid - 1] + scoresOnly[mid]) / 2 : scoresOnly[mid];
    weekScores.forEach(([mgr, sc]) => {
      if(!medianRecord[mgr]) medianRecord[mgr] = { w: 0, l: 0, t: 0 };
      if(sc > median) medianRecord[mgr].w++;
      else if(sc < median) medianRecord[mgr].l++;
      else medianRecord[mgr].t++;
    });

    // All-play record: compare each team's score against every other team's score that week.
    weekScores.forEach(([mgr, sc], idx) => {
      if(!allPlayRecord[mgr]) allPlayRecord[mgr] = { w: 0, l: 0, t: 0 };
      weekScores.forEach(([oppMgr, oppSc], oppIdx) => {
        if(idx === oppIdx) return;
        if(sc > oppSc) allPlayRecord[mgr].w++;
        else if(sc < oppSc) allPlayRecord[mgr].l++;
        else allPlayRecord[mgr].t++;
      });
    });
  });

  const keyByLastName = {};
  TEAMS.forEach(team => { keyByLastName[lastNameOf(team.owner)] = team.key; });

  // ---- Season highlights: league avg PPM, current streaks, highest/lowest single-week score ----
  const weekKeys = Object.keys(s.schedule || {}).filter(wk => (s.schedule[wk] || []).length > 0);
  const weekNum = (wk) => parseInt(wk.replace(/\D/g, ''), 10) || 0;
  const sortedWeekKeys = weekKeys.slice().sort((a,b) => weekNum(a) - weekNum(b));

  function computeResultsByMgr(season){
    const out = {};
    const wks = Object.keys(season.schedule || {}).filter(wk => (season.schedule[wk] || []).length > 0)
      .sort((a,b) => weekNum(a) - weekNum(b));
    wks.forEach(wk => {
      const games = season.schedule[wk] || [];
      const weekMax = Math.max(0, ...games.flatMap(g => [g.awayScore, g.homeScore]));
      if(weekMax <= 0) return;
      games.forEach(g => {
        const ak = lastNameOf(g.awayMgr), hk = lastNameOf(g.homeMgr);
        if(g.awayScore !== g.homeScore){
          const winner = g.awayScore > g.homeScore ? ak : hk;
          const loser = g.awayScore > g.homeScore ? hk : ak;
          (out[winner] = out[winner] || []).push('W');
          (out[loser] = out[loser] || []).push('L');
        } else {
          (out[ak] = out[ak] || []).push('T');
          (out[hk] = out[hk] || []).push('T');
        }
      });
    });
    return out;
  }

  let allScoresSum = 0, allScoresCount = 0;
  let highGame = null, lowGame = null;
  const resultsByMgr = {}; // mgr -> ordered array of 'W'/'L'/'T'

  sortedWeekKeys.forEach(wk => {
    const games = s.schedule[wk] || [];
    const weekMax = Math.max(0, ...games.flatMap(g => [g.awayScore, g.homeScore]));
    if(weekMax <= 0) return; // week hasn't actually been played yet
    games.forEach(g => {
      const ak = lastNameOf(g.awayMgr), hk = lastNameOf(g.homeMgr);
      [[ak, g.awayScore, g.awayMgr], [hk, g.homeScore, g.homeMgr]].forEach(([mgr, sc, fullName]) => {
        allScoresSum += sc; allScoresCount++;
        if(!highGame || sc > highGame.score) highGame = { owner: fullName, score: sc, week: wk };
        if(!lowGame || sc < lowGame.score) lowGame = { owner: fullName, score: sc, week: wk };
      });
      if(g.awayScore !== g.homeScore){
        const winner = g.awayScore > g.homeScore ? ak : hk;
        const loser = g.awayScore > g.homeScore ? hk : ak;
        (resultsByMgr[winner] = resultsByMgr[winner] || []).push('W');
        (resultsByMgr[loser] = resultsByMgr[loser] || []).push('L');
      } else {
        (resultsByMgr[ak] = resultsByMgr[ak] || []).push('T');
        (resultsByMgr[hk] = resultsByMgr[hk] || []).push('T');
      }
    });
  });

  const leagueAvgPPM = allScoresCount ? allScoresSum / allScoresCount : 0;

  // Longest active win/loss streaks — if this season's entire history for a team is one
  // unbroken streak, extend the count back into last season's trailing results too.
  function trailingStreak(results){
    if(!results.length) return { type: null, len: 0, full: false };
    const type = results[results.length - 1];
    let len = 0;
    for(let i = results.length - 1; i >= 0 && results[i] === type; i--) len++;
    return { type, len, full: len === results.length };
  }

  const prevYearKey = String((parseInt(year, 10) || 0) - 1);
  const prevSeason = SEASONS[prevYearKey];
  const prevResultsByMgr = prevSeason ? computeResultsByMgr(prevSeason) : {};

  let longestWinStreak = { owner: null, len: 0 };
  let longestLossStreak = { owner: null, len: 0 };
  const allStreakMgrs = new Set([...Object.keys(resultsByMgr), ...Object.keys(prevResultsByMgr)]);
  allStreakMgrs.forEach(mgr => {
    const cur = trailingStreak(resultsByMgr[mgr] || []);
    if(!cur.type) return;
    let len = cur.len;
    if(cur.full){
      const prev = trailingStreak(prevResultsByMgr[mgr] || []);
      if(prev.type === cur.type) len += prev.len;
    }
    const ownerName = TEAMS.find(t => lastNameOf(t.owner) === mgr)?.owner || mgr;
    if(cur.type === 'W' && len > longestWinStreak.len) longestWinStreak = { owner: ownerName, len };
    if(cur.type === 'L' && len > longestLossStreak.len) longestLossStreak = { owner: ownerName, len };
  });

  const hasResults = allScoresCount > 0;
  const highlightsSection = hasResults ? `<h2 class="section-title" id="highlights" style="margin-top:40px;">${year} Season Highlights</h2>
  <ul style="margin:0 0 32px; padding:0; list-style:none; font-size:0.95rem; line-height:2;">
    <li><strong>League Team Avg. Points Per Matchup:</strong> ${leagueAvgPPM.toFixed(1)}</li>
    <li><strong>Longest Current Winning Streak:</strong> ${longestWinStreak.len || '—'}${longestWinStreak.owner ? ` (${longestWinStreak.owner})` : ''}</li>
    <li><strong>Longest Current Losing Streak:</strong> ${longestLossStreak.len || '—'}${longestLossStreak.owner ? ` (${longestLossStreak.owner})` : ''}</li>
    <li><strong>Highest Weekly Score:</strong> ${highGame ? `${highGame.score.toFixed(1)} (${highGame.owner}, ${highGame.week})` : '—'}</li>
    <li><strong>Lowest Weekly Score:</strong> ${lowGame ? `${lowGame.score.toFixed(1)} (${lowGame.owner}, ${lowGame.week})` : '—'}</li>
  </ul>` : '';

  const paidKeys = (typeof PAID_STATUS !== 'undefined' && PAID_STATUS[year]) || [];
  const paidLastNames = paidKeys.map(k => k.toLowerCase());
  const payRules = (typeof PAYOUT_RULES !== 'undefined' && PAYOUT_RULES[year]) || null;
  const showPayouts = !!payRules;
  const seasonDone = !!(s.champion && s.champion.owner && s.champion.owner !== 'TBD');
  const endOfSeasonPay = {};
  if(payRules && seasonDone){
    const add = (owner, amt) => { if(owner && amt){ const k = lastNameOf(owner); endOfSeasonPay[k] = (endOfSeasonPay[k] || 0) + amt; } };
    (s.standings || []).slice(0, payRules.playoffTeams || 0).forEach(r => add(r.owner, payRules.playoffBerth || 0));
    [s.champion, s.second, s.third].forEach((p, i) => add(p && p.owner, (payRules.place || [])[i] || 0));
    const topKey = Object.keys(seasonPts).sort((a, b) => seasonPts[b].pf - seasonPts[a].pf)[0];
    if(topKey && payRules.seasonTopScorer) endOfSeasonPay[topKey] = (endOfSeasonPay[topKey] || 0) + payRules.seasonTopScorer;
  }

  // Week-over-week rank movement, shown only for the current (latest) season once 2+ weeks are played.
  const isLatestSeason = year === Object.keys(SEASONS).sort((a,b) => b - a)[0];
  const weeklyRanks = isLatestSeason ? computeWeeklyRanks(s) : null;
  const showMoves = !!(weeklyRanks && weeklyRanks.weekKeys.length >= 2);

  const standingsRows = s.standings.map((t,i) => {
    let move = null;
    if(showMoves){
      const h = weeklyRanks.rankHistory[t.owner] || [];
      if(h.length >= 2) move = h[h.length - 2] - h[h.length - 1];
    }
    const pts = seasonPts[lastNameOf(t.owner)] || { pf: 0, pa: 0 };
    const highs = weeklyHighs[lastNameOf(t.owner)] || 0;
    const mr = medianRecord[lastNameOf(t.owner)] || { w: 0, l: 0, t: 0 };
    const ap = allPlayRecord[lastNameOf(t.owner)] || { w: 0, l: 0, t: 0 };
    const teamKey = keyByLastName[lastNameOf(t.owner)];
    const paidBadge = paidLastNames.includes(lastNameOf(t.owner)) ? `<span class="paid-badge">Paid</span>` : '';
    const teamLink = teamKey ? `<a href="team.html?team=${encodeURIComponent(teamKey)}" class="owner-link">${t.team}</a>${paidBadge}` : `${t.team}${paidBadge}`;
    return {
      rank: i + 1,
      move,
      teamName: t.team,
      teamLink,
      wins: t.w, losses: t.l, ties: t.t,
      recordStr: `${t.w}-${t.l}${t.t ? '-'+t.t : ''}`,
      pct: t.pct,
      pf: pts.pf, pa: pts.pa,
      medianWins: mr.w, medianStr: `${mr.w}-${mr.l}${mr.t ? '-'+mr.t : ''}`,
      allPlayWins: ap.w, allPlayStr: `${ap.w}-${ap.l}${ap.t ? '-'+ap.t : ''}`,
      topWeeklyScorer: highs,
      payout: payRules ? highs * (payRules.weeklyHigh || 0) + (endOfSeasonPay[lastNameOf(t.owner)] || 0) : 0,
    };
  });

  const playoffRounds = ['round1','round2','round3','thirdPlace'].map(rk => {
    const r = (s.playoffs || {})[rk];
    if(!r) return '';
    const byes = r.byes ? `<p class="muted" style="font-size:0.85rem;">Bye: ${r.byes.map(b=>`${b.team} (${b.pts} pts)`).join(', ')}</p>` : '';
    const body = r.games.some(g => g.boxscore)
      ? r.games.map(g => g.boxscore ? matchupCard(g) : `<div class="table-scroll"><table><tbody>${matchupRow(g)}</tbody></table></div>`).join('')
      : `<div class="table-scroll"><table>
      <thead><tr><th>Away</th><th></th><th></th><th></th><th>Home</th></tr></thead>
      <tbody>${r.games.map(matchupRow).join('')}</tbody>
    </table></div>`;
    return `<h3 style="font-family:var(--display); font-size:1.3rem; margin:24px 0 10px;">${r.label}</h3>
    ${body}
    ${byes}`;
  }).join('');

  const playoffBracket = playoffRounds ? renderPlayoffBracket(s) : '';

  // Week picker: one week's matchups at a time. Defaults to ?week=N, else the latest
  // week with scores (current season) or Week 1 (no scores yet).
  const schedWeeks = Object.keys(s.schedule);
  const weekScored = wk => (s.schedule[wk] || []).some(g => g.awayScore || g.homeScore);
  const scoredWeeks = schedWeeks.filter(weekScored);
  const reqWeek = parseInt(new URLSearchParams(window.location.search).get('week'), 10);
  const defaultWeek = schedWeeks.includes(`Week ${reqWeek}`) ? `Week ${reqWeek}`
    : (scoredWeeks.length ? scoredWeeks[scoredWeeks.length - 1] : schedWeeks[0]);
  const weekPanel = wk => {
    const games = s.schedule[wk];
    const body = games.some(g => g.boxscore)
      ? games.map(matchupCard).join('')
      : `<div class="table-scroll"><table>
          <thead><tr><th>Away</th><th></th><th></th><th></th><th>Home</th></tr></thead>
          <tbody>${games.map(matchupRow).join('')}</tbody>
        </table></div>`;
    return `<div class="week-panel" data-week="${wk}"${wk === defaultWeek ? '' : ' hidden'}>${body}</div>`;
  };
  const scheduleWeeks = schedWeeks.length ? `<div class="week-picker" role="tablist" aria-label="Choose a week">
      ${schedWeeks.map(wk => `<button type="button" role="tab" class="week-btn${wk === defaultWeek ? ' active' : ''}${weekScored(wk) ? '' : ' upcoming'}" data-week="${wk}" aria-selected="${wk === defaultWeek}">${wk.replace('Week ', '')}</button>`).join('')}
    </div>
    ${schedWeeks.map(weekPanel).join('')}` : '';

  const draftInfo = (typeof DRAFT_DATES !== 'undefined' && DRAFT_DATES[year]) || null;
  const hasDraftOrder = typeof DRAFT_ORDER !== 'undefined' && DRAFT_ORDER[year];
  const hasDraftResults = typeof DRAFT_RESULTS_YEARS !== 'undefined'
    ? DRAFT_RESULTS_YEARS.includes(String(year))
    : (typeof DRAFT_HISTORY !== 'undefined' && DRAFT_HISTORY[year] && DRAFT_HISTORY[year].length > 0);
  const draftSection = (!seasonStarted && hasDraftOrder && !hasDraftResults) ? `
    ${draftInfo ? `<div class="countdown-card" style="margin:24px 0 32px;">
      <div class="countdown-title">Draft Day: ${draftInfo.label}</div>
      <div id="season-draft-countdown"></div>
    </div>` : ''}
    <h2 class="section-title" style="margin-top:8px;">Draft Order</h2>
    <div id="season-draft-order" style="margin-top:16px;"></div>
  ` : '';

  function computeTopStartersByPosition(season){
    const totals = {}; // "player|pos" -> { player, pos, pts, teamName }
    Object.values(season.schedule || {}).forEach(games => {
      games.forEach(g => {
        if(!g.boxscore) return;
        ['away', 'home'].forEach(side => {
          const teamName = g[side];
          (g.boxscore[side] || []).forEach(p => {
            const key = p.player + '|' + p.pos;
            if(!totals[key]) totals[key] = { player: p.player, pos: p.pos, pts: 0, teamName };
            totals[key].pts += p.pts;
          });
        });
      });
    });
    const byPos = { QB: [], RB: [], WR: [], TE: [] };
    Object.values(totals).forEach(t => {
      if(byPos[t.pos]) byPos[t.pos].push(t);
    });
    const top = {};
    ['QB', 'RB', 'WR', 'TE'].forEach(pos => {
      byPos[pos].sort((a,b) => b.pts - a.pts);
      // Leader(s) and runner(s)-up, keeping ties together.
      const r = n => Math.round(n * 10) / 10;
      const list = byPos[pos];
      const first = list.length ? r(list[0].pts) : null;
      const leaders = list.filter(t => r(t.pts) === first);
      const rest = list.filter(t => r(t.pts) < first);
      const second = rest.length ? r(rest[0].pts) : null;
      top[pos] = leaders.length ? { first: leaders, second: rest.filter(t => r(t.pts) === second) } : null;
    });
    return top;
  }

  const raceChartSvg = hasResults ? renderStandingsRaceChart(s, keyByLastName, lastNameOf) : '';
  const raceChartSection = raceChartSvg ? `<h2 class="section-title" id="standings-race" style="margin-top:40px;">Standings Race</h2>
  <p class="muted" style="font-size:0.85rem; margin-bottom:12px;">Each team's rank after every week of the season.</p>
  ${raceChartSvg}` : '';
  const pointsRaceSvg = hasResults ? renderPointsRaceChart(s) : '';
  const pointsRaceSection = pointsRaceSvg ? `<h2 class="section-title" id="points-race" style="margin-top:40px;">Points Race</h2>
  <p class="muted" style="font-size:0.85rem; margin-bottom:12px;">How far each team is ahead of the season's lowest scorer after every week.</p>
  ${pointsRaceSvg}` : '';

  const topStarters = hasResults ? computeTopStartersByPosition(s) : null;
  const hasTopStarters = topStarters && Object.values(topStarters).some(v => v);
  const topStartersSection = hasTopStarters ? `<h2 class="section-title" id="top-starters" style="margin-top:40px;">Top Scoring Starters</h2>
  <p class="muted" style="font-size:0.85rem; margin-bottom:12px;">Season points scored while in a starting lineup.</p>
  <div class="table-scroll" style="max-width:820px; margin-bottom:32px;"><table class="ts-table">
    <thead><tr><th>Pos</th><th>1st</th><th class="num">Pts</th><th>2nd</th><th class="num">Pts</th></tr></thead>
    <tbody>${['QB','RB','WR','TE'].map(pos => {
      const t = topStarters[pos];
      if(!t) return `<tr><td><strong>${pos}</strong></td><td>—</td><td></td><td>—</td><td></td></tr>`;
      const names = arr => arr.map(x => `${playerLink(x.player)} <span class="muted">(${x.teamName})</span>`).join('<br>');
      return `<tr><td><strong>${pos}</strong></td><td>${names(t.first)}</td><td class="num"><strong>${t.first[0].pts.toFixed(1)}</strong></td><td>${t.second.length ? names(t.second) : '—'}</td><td class="num">${t.second.length ? t.second[0].pts.toFixed(1) : ''}</td></tr>`;
    }).join('')}</tbody>
  </table></div>` : '';

  // Gold/silver/bronze plaques only once the season has a champion.
  const decided = !!(s.champion && s.champion.owner && s.champion.owner !== 'TBD');
  const jumpLinks = seasonStarted ? [
    ['standings', 'Standings', true],
    ['highlights', 'Highlights', !!highlightsSection],
    ['top-starters', 'Top Starters', !!topStartersSection],
    ['standings-race', 'Standings Race', !!raceChartSection],
    ['points-race', 'Points Race', !!pointsRaceSection],
    ['playoffs', 'Playoffs', !!playoffRounds],
    ['schedule', 'Schedule', true],
  ].filter(j => j[2]).map(([id, label]) => `<a href="#${id}">${label}</a>`).join('') : '';
  el.innerHTML = `
    ${jumpLinks ? `<nav class="season-jump" aria-label="Jump to section">${jumpLinks}</nav>` : ''}
    ${decided ? podium : ''}
    ${!seasonStarted ? `<p class="muted" style="max-width:65ch; margin:16px 0 0;">The ${year} season hasn't kicked off yet.</p>` : ''}
    ${draftSection}
    <h2 class="section-title" id="standings" style="margin-top:${decided ? 40 : 0}px;">${seasonStarted ? ((s.champion && s.champion.owner === 'TBD') ? 'Current Regular Season Standings' : 'Final Regular Season Standings') : 'Standings'}</h2>
    <div id="season-standings-mount"></div>
    <p class="muted" style="font-size:0.85rem; margin:12px 0 0;"><strong>Median Record:</strong> record against each week's league median score. <strong>All-Play Record:</strong> record if you played every team every week.</p>
    ${highlightsSection}
    ${topStartersSection}
    ${raceChartSection}
    ${pointsRaceSection}
    ${playoffRounds ? `<h2 class="section-title" id="playoffs" style="margin-top:40px;">Playoffs</h2>
    ${playoffBracket}
    <div class="playoffs-list${playoffBracket ? ' has-bracket' : ''}">${playoffRounds}</div>` : ''}
    <h2 class="section-title" id="schedule" style="margin-top:40px;">Schedule</h2>
    ${seasonStarted ? '<p class="muted" style="font-size:0.85rem; margin-bottom:12px;">Pick a week. Winners in bold; select a game to see its box score.</p>' : ''}
    ${scheduleWeeks}
  `;

  if(!seasonStarted && hasDraftOrder && !hasDraftResults){
    if(draftInfo) renderCountdown('season-draft-countdown', draftInfo.iso);
    renderDraftOrder('season-draft-order', year);
  }
  renderSortableStandingsTable('season-standings-mount', standingsRows, showPayouts);
  wirePlayoffBracket(el, s);
  el.querySelectorAll('.week-btn').forEach(btn => btn.addEventListener('click', () => {
    const wk = btn.getAttribute('data-week');
    el.querySelectorAll('.week-btn').forEach(b => { const on = b === btn; b.classList.toggle('active', on); b.setAttribute('aria-selected', on); });
    el.querySelectorAll('.week-panel').forEach(p => { p.hidden = p.getAttribute('data-week') !== wk; });
    try { const u = new URL(window.location.href); u.searchParams.set('week', wk.replace('Week ', '')); history.replaceState(null, '', u); } catch(e) {}
  }));
}

function renderSortableStandingsTable(containerId, rows, showPayouts){
  const el = document.getElementById(containerId);
  if(!el) return;
  const data = rows.slice();
  let sortKey = 'rank';
  let sortDir = 'asc';

  const columns = [
    { key: 'rank', label: '#', align: '' },
    { key: 'teamName', label: 'Team', align: '' },
    { key: 'wins', label: 'Record', align: 'center' },
    { key: 'pct', label: 'Pct', align: 'center' },
    { key: 'pf', label: 'PF', align: 'center' },
    { key: 'pa', label: 'PA', align: 'center' },
    { key: 'medianWins', label: 'Median Record', align: 'center' },
    { key: 'allPlayWins', label: 'All-Play Record', align: 'center' },
    { key: 'topWeeklyScorer', label: 'Top Weekly Scorer', align: 'center' },
  ];
  if(showPayouts) columns.push({ key: 'payout', label: 'Payouts', align: 'center' });

  function sortData(){
    data.sort((a,b) => {
      const av = a[sortKey], bv = b[sortKey];
      if(typeof av === 'string') return sortDir === 'asc' ? av.localeCompare(bv) : bv.localeCompare(av);
      return sortDir === 'asc' ? av - bv : bv - av;
    });
  }

  function cellValue(row, key){
    switch(key){
      case 'rank': {
        if(row.move === null || row.move === undefined) return row.rank;
        const mv = row.move > 0 ? `<span class="rank-move up" title="Up ${row.move} from last week">&#9650;${row.move}</span>`
          : row.move < 0 ? `<span class="rank-move down" title="Down ${-row.move} from last week">&#9660;${-row.move}</span>`
          : `<span class="rank-move same" title="No change from last week">&ndash;</span>`;
        return `<span class="rank-with-move">${row.rank}${mv}</span>`;
      }
      case 'teamName': return row.teamLink;
      case 'wins': return row.recordStr;
      case 'pct': return row.pct.toFixed(3);
      case 'pf': return row.pf.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
      case 'pa': return row.pa.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
      case 'medianWins': return row.medianStr;
      case 'allPlayWins': return row.allPlayStr;
      case 'topWeeklyScorer': return row.topWeeklyScorer > 0 ? row.topWeeklyScorer : '-';
      case 'payout': return row.payout > 0 ? '$' + row.payout.toLocaleString('en-US') : '-';
      default: return '';
    }
  }

  function draw(){
    sortData();
    el.innerHTML = `<div class="table-scroll"><table>
      <thead><tr>
        ${columns.map(c => `<th data-key="${c.key}" class="${c.align} sortable-th">${c.label}</th>`).join('')}
      </tr></thead>
      <tbody>${data.map(row => `<tr>
        ${columns.map(c => `<td class="${c.key === 'teamName' ? 'name-cell' : 'pos ' + c.align}">${cellValue(row, c.key)}</td>`).join('')}
      </tr>`).join('')}</tbody>
    </table></div>`;

    el.querySelectorAll('thead th').forEach(th => {
      const key = th.dataset.key;
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

  const paidKeys = (typeof PAID_STATUS !== 'undefined' && PAID_STATUS[year]) || [];

  el.innerHTML = `${dateBlock}<div class="draft-order-list">${order.map((p, i) => {
    const hasPage = p.key && p.team !== 'TBD';
    const ownerHTML = hasPage ? `<a href="team.html?team=${encodeURIComponent(p.key)}" class="owner-link">${p.owner}</a>` : p.owner;
    const paidBadge = paidKeys.includes(p.key) ? `<span class="paid-badge">Paid</span>` : '';
    return `
    <div class="draft-order-row">
      <div class="draft-order-pick">${i+1}</div>
      <div class="draft-order-info">
        <div class="draft-order-owner">${ownerHTML}${paidBadge}</div>
        <div class="draft-order-team">${p.team}</div>
      </div>
    </div>`;
  }).join('')}</div>`;
}

// ---------- Kickoff countdown ----------
function renderCountdown(containerId, targetDateStr, liveMessage){
  const el = document.getElementById(containerId);
  if(!el) return;
  const target = new Date(targetDateStr).getTime();
  const message = liveMessage || 'Kickoff is here.';
  let timer;

  function update(){
    const diff = target - Date.now();
    if(diff <= 0){
      el.innerHTML = `<div class="kickoff-live">${message}</div>`;
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
  timer = setInterval(update, 1000);
}

// ---------- Homepage: current-season button in the hero ----------
// Points to the most recent season in SEASONS and shows how far it has gone,
// so it updates itself each week and rolls over to next year automatically.
function renderCurrentSeasonCTA(containerId){
  const el = document.getElementById(containerId);
  if(!el || typeof SEASONS === 'undefined') return;
  const year = Object.keys(SEASONS).sort((a,b) => b - a)[0];
  const s = SEASONS[year];
  if(!s) return;
  const weekNum = wk => parseInt(String(wk).replace(/\D/g, ''), 10) || 0;
  const played = Object.keys(s.schedule || {})
    .filter(wk => (s.schedule[wk] || []).some(g => Math.max(g.awayScore, g.homeScore) > 0))
    .map(weekNum);
  const lastWeek = played.length ? Math.max(...played) : 0;
  const finished = s.champion && s.champion.owner && s.champion.owner !== 'TBD';
  const status = finished ? `Champion: ${s.champion.team}`
    : lastWeek ? `Through Week ${lastWeek}` : 'Season kicks off soon';
  el.innerHTML = `<a class="season-cta" href="season.html?year=${year}">
    <span class="season-cta-main">${year} Season</span>
    <span class="season-cta-sub">${status} · Standings, scores &amp; box scores</span>
  </a>`;
}

// ---------- Top Headlines (homepage NFL news widget) ----------
function renderHeadlines(containerId){
  const el = document.getElementById(containerId);
  if(!el) return;
  if(typeof NFL_HEADLINES === 'undefined' || !NFL_HEADLINES.length){ el.innerHTML = ''; return; }

  const latestYear = (typeof SEASONS !== 'undefined') ? Object.keys(SEASONS).sort((a,b) => b - a)[0] : null;
  const s = latestYear ? SEASONS[latestYear] : null;
  const seasonPts = {};
  if(s){
    Object.values(s.schedule || {}).forEach(games => games.forEach(g => {
      const ak = lastNameOf(g.awayMgr), hk = lastNameOf(g.homeMgr);
      seasonPts[ak] = (seasonPts[ak] || 0) + g.awayScore;
      seasonPts[hk] = (seasonPts[hk] || 0) + g.homeScore;
    }));
  }
  const standingsCol = (s && s.standings && s.standings.length) ? `
    <a class="standings-col" href="season.html?year=${latestYear}">
      <div class="headlines-header">${latestYear} Standings</div>
      <div class="standings-mini-headers"><span>Team</span><span>Record</span><span><span class="full-label">Points Scored</span><span class="short-label">PF</span></span></div>
      <ul class="standings-mini-list">
        ${s.standings.map((t,i) => {
          const pf = seasonPts[lastNameOf(t.owner)] || 0;
          return `<li><span>${i+1}. ${t.team}</span><span>${t.w}-${t.l}${t.t ? '-'+t.t : ''}</span><span>${pf.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}</span></li>`;
        }).join('')}
      </ul>
      <div class="standings-col-more">Full ${latestYear} season, with scores, box scores and charts</div>
    </a>` : '';

  // Latest issue in NEWSLETTERS (highest vol, then highest no), so a new issue only needs a data.js entry.
  const latestNl = (typeof NEWSLETTERS !== 'undefined' ? NEWSLETTERS : []).slice().sort((a,b) => (b.vol - a.vol) || (b.no - a.no))[0];
  const newsletterBanner = latestNl ? `
    <a class="newsletter-banner" href="${latestNl.url}">
      Read the latest newsletter: Vol. ${latestNl.vol}, No. ${latestNl.no}, “${latestNl.title}”
    </a>` : '';

  el.innerHTML = `
    ${newsletterBanner}
    <div class="headlines-card">
      <div class="headlines-split">
        <div class="headlines-col">
          <div class="headlines-header">Top headlines</div>
          <ul class="headlines-list">
            ${NFL_HEADLINES.map(h => {
              const isExternal = /^https?:\/\//i.test(h.url);
              const linkAttrs = isExternal ? ' target="_blank" rel="noopener"' : '';
              return `<li><a href="${h.url}"${linkAttrs}>${h.title}</a></li>`;
            }).join('')}
          </ul>
        </div>
        ${standingsCol}
      </div>
    </div>
  `;
}

// ---------- Team pages ----------
function renderTeamsList(containerId){
  const el = document.getElementById(containerId);
  if(!el) return;
  const sorted = TEAMS.slice().sort((a,b) => lastNameOf(a.owner).localeCompare(lastNameOf(b.owner)));
  el.innerHTML = `<div class="table-scroll"><table class="teams-table">
    <thead><tr><th>Owner</th><th>Team</th><th>Seasons</th><th>Titles</th><th>Playoffs</th><th>Record</th><th>Win%</th></tr></thead>
    <tbody>${sorted.map(t => `<tr data-href="team.html?team=${encodeURIComponent(t.key)}">
      <td class="name-cell"><a href="team.html?team=${encodeURIComponent(t.key)}">${t.owner}</a></td>
      <td>${t.team}</td>
      <td class="num">${t.seasons}</td>
      <td class="num">${t.champs || '–'}</td>
      <td class="num">${t.playoffApp}</td>
      <td class="num">${t.gamesW}-${t.gamesL}${t.gamesT ? '-'+t.gamesT : ''}</td>
      <td class="num">${fmtPct(t.winPct)}</td>
    </tr>`).join('')}</tbody></table></div>`;
  // Whole row opens the team page (the name stays a real link for keyboard/new-tab use).
  el.querySelectorAll('tr[data-href]').forEach(tr => tr.addEventListener('click', e => {
    if(e.target.closest('a')) return;
    window.location.href = tr.dataset.href;
  }));
}

function renderTeamDetail(containerId){
  attachBoxscores();
  const el = document.getElementById(containerId);
  if(!el) return;
  const params = new URLSearchParams(window.location.search);
  const key = params.get('team');
  const t = TEAMS.find(x => x.key === key);
  if(!t){ el.innerHTML = `<p>No team found. <a href="teams.html">Back to all teams</a></p>`; return; }

  document.title = `${t.owner} | League of NARPS`;
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
      mostDraftedSub = `${joined}, ${md.count}x each`;
    }
  }

  // NFL Survivor titles: survivor entries use short names, mapped here to league franchises.
  const SURVIVOR_NAME_TO_KEY = { 'Aaron': 'Burns', 'Clay': 'Clay', 'Seth': 'Thacker', 'Z': 'Hickman', 'Z Hickman': 'Hickman',
    'Zach': 'Sizemore', 'Sizemore': 'Sizemore', 'Cummings': 'Cummings', 'Luke': 'Rapp', 'Geiger': 'Geiger', 'Prino': 'Prino',
    'Twest': 'West', 'Walid': 'Salameh', 'Sonny': 'Wright', 'Garton': 'Garton' };
  const survivorYears = (typeof SURVIVOR !== 'undefined') ? Object.keys(SURVIVOR).sort((a,b) => a - b)
    .filter(y => (SURVIVOR[y].players || []).some(p => p.result === 'Winner' && SURVIVOR_NAME_TO_KEY[p.name] === key)) : [];
  const survivorCard = `<div class="award-card"><div class="medal">NFL Survivor Titles</div><div class="headline-stat">${survivorYears.length}</div><p>${survivorYears.length ? `<a href="survivor.html?year=${survivorYears[survivorYears.length - 1]}" style="color:inherit;">${survivorYears.join(', ')}</a>` : (key === 'Geiger' ? 'No survivor wins' : 'No survivor wins yet')}</p></div>`;

  const mostDraftedCard = key !== 'Thacker' ? `<div class="award-card"><div class="medal">Most Drafted Player</div><div class="headline-stat headline-stat--name">${mostDraftedHeadline}</div><p>${mostDraftedSub}</p></div>` : '';

  // Every 1st/2nd/3rd place finish, shown as medal badges: all 1sts, then 2nds, then 3rds (oldest first within each).
  const lnTop = n => (n || '').trim().split(/\s+/).pop().toLowerCase();
  const podium = [];
  Object.keys(SEASONS).forEach(y => {
    const s = SEASONS[y];
    if(!(s.champion && s.champion.owner && s.champion.owner !== 'TBD')) return;
    const place = finalPlacements(s)[lnTop(t.owner)];
    if(place >= 1 && place <= 3) podium.push({ y, place });
  });
  podium.sort((a,b) => (a.place - b.place) || (a.y - b.y));
  const ordShort = ['', '1st', '2nd', '3rd'];
  const top3Badges = podium.length
    ? `<div class="podium-badges">${podium.map(f => `<span class="podium-badge podium-badge--${f.place}" title="${ordShort[f.place]} place, ${f.y}"><b>${ordShort[f.place]}</b></span>`).join('')}</div>`
    : '<p>No top-3 finishes yet</p>';

  const statCards = `<div class="card-grid" style="margin-bottom:32px;">
    <div class="award-card"><div class="medal">Career Record</div><div class="headline-stat">${t.gamesW}-${t.gamesL}${t.gamesT ? '-'+t.gamesT : ''}</div><p>${fmtPct(t.winPct)} win rate across ${t.seasons} seasons</p></div>
    <div class="award-card"><div class="medal">Championships</div><div class="headline-stat">${t.champs}</div><p>${titles.length ? titles.map(x=>x.year).join(', ') : (key === 'Geiger' ? 'None' : 'None yet')}</p></div>
    <div class="award-card"><div class="medal">Top 3 Finishes</div><div class="headline-stat">${top3Count}</div>${top3Badges}</div>
    <div class="award-card"><div class="medal">Playoff Record</div><div class="headline-stat">${t.playoffW}-${t.playoffL}</div><p>${fmtPct(t.playoffWinPct)} playoff win rate, ${t.playoffApp} appearances</p></div>
    <div class="award-card"><div class="medal">Scoring</div><div class="headline-stat">${t.gameAvgPF.toFixed(1)}</div><p>pts/gm career average (${(() => { const d = t.diff.toFixed(1); return d === '-0.0' ? '0.0' : (t.diff > 0 ? '+' + d : d); })()} diff/gm)</p></div>
    <div class="award-card"><div class="medal">Scoring Titles</div><div class="headline-stat">${scoringTitleYears.length}</div><p>${scoringTitleYears.length ? scoringTitleYears.join(', ') : 'Never led the league in points scored'}</p></div>
    ${survivorCard}
    ${mostDraftedCard}
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
    </div>`).join('')}</div>` : `<p class="muted">${key === 'Geiger' ? 'No championships.' : 'No championships yet.'}</p>`;

  const lastName = n => (n || '').trim().split(/\s+/).pop().toLowerCase();
  const years = Object.keys(SEASONS).sort((a,b) => b - a);
  const seasonRows = years.map(y => {
    const s = SEASONS[y];
    const row = s.standings.find(r => lastName(r.owner) === lastName(t.owner));
    if(!row) return '';
    const seasonStarted = s.standings.some(r => (r.w||0) + (r.l||0) + (r.t||0) > 0);
    let finish = 'TBD';
    if(seasonStarted){
      const ord = n => `${n}${n%100>=11&&n%100<=13?'th':n%10===1?'st':n%10===2?'nd':n%10===3?'rd':'th'}`;
      const seasonDone = s.champion && s.champion.owner && s.champion.owner !== 'TBD';
      if(seasonDone){
        const place = finalPlacements(s)[lastName(t.owner)];
        finish = place === 1 ? '🥇 <span class="champ-tag">Champion</span>' : place === 2 ? '🥈 2nd Place' : place === 3 ? '🥉 3rd Place' : `${ord(place)} place`;
      } else {
        finish = `${ord(s.standings.indexOf(row) + 1)} (in progress)`;
      }
    }
    let pf = 0, pa = 0;
    Object.values(s.schedule || {}).forEach(gs => gs.forEach(g => {
      if(!(g.awayScore || g.homeScore)) return;
      if(lastName(g.awayMgr) === lastName(t.owner)){ pf += g.awayScore; pa += g.homeScore; }
      else if(lastName(g.homeMgr) === lastName(t.owner)){ pf += g.homeScore; pa += g.awayScore; }
    }));
    const pts = v => seasonStarted ? v.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 }) : '–';
    return `<tr>
      <td class="pos"><a class="year-link" href="season.html?year=${y}">${y}</a></td>
      <td>${row.team}</td>
      <td>${row.w}-${row.l}${row.t ? '-'+row.t : ''}</td>
      <td>${row.pct.toFixed(3)}</td>
      <td class="num">${pts(pf)}</td>
      <td class="num">${pts(pa)}</td>
      <td class="name-cell">${finish}</td>
    </tr>`;
  }).join('');

  const seasonTable = years.length ? `<div class="table-scroll"><table>
    <thead><tr><th>Year</th><th>Team</th><th>Record</th><th>Pct</th><th class="num">PF</th><th class="num">PA</th><th>Finish</th></tr></thead>
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

  // Head-to-head vs every other owner: regular season and playoffs, average score, last meeting.
  const games = allPlayedGames().filter(x => x.awayKey === key || x.homeKey === key);
  const vs = {};
  games.forEach(x => {
    const mine = x.awayKey === key ? 'away' : 'home', theirs = mine === 'away' ? 'home' : 'away';
    const opp = x[theirs + 'Key']; if(!opp || opp === key) return;
    const my = x.g[mine + 'Score'], their = x.g[theirs + 'Score'];
    const v = vs[opp] = vs[opp] || { rw:0, rl:0, rt:0, pw:0, pl:0, pf:0, pa:0, n:0, last:null };
    const res = my > their ? 'w' : my < their ? 'l' : 't';
    if(x.playoff){ if(res !== 't') v['p' + res]++; } else v['r' + res]++;
    v.pf += my; v.pa += their; v.n++;
    v.last = { year: x.year, week: x.week, my, their, res, playoff: x.playoff };
  });
  const teamByKey = {}; TEAMS.forEach(o => { teamByKey[o.key] = o; });
  const h2hRows = Object.entries(vs).map(([opp, v]) => ({ opp, ...v, pct: (v.rw + 0.5 * v.rt) / Math.max(1, v.rw + v.rl + v.rt) }))
    .sort((a, b) => (b.pct - a.pct) || ((b.rw + b.rl) - (a.rw + a.rl)));
  const f1 = v => v.toFixed(1);
  const h2hTable = h2hRows.length ? `<div class="table-scroll"><table class="team-h2h">
    <thead><tr><th>Opponent</th><th>Regular Season</th><th>Playoffs</th><th class="num">Avg Score</th><th>Last Meeting</th></tr></thead>
    <tbody>${h2hRows.map(r => {
      const o = teamByKey[r.opp];
      const L = r.last;
      const lastTxt = L ? `<span class="h2h-res h2h-${L.res}">${L.res.toUpperCase()}</span> ${f1(L.my)}–${f1(L.their)} <span class="muted">${L.year} ${L.week}</span>` : '';
      return `<tr>
        <td class="name-cell"><a href="team.html?team=${encodeURIComponent(r.opp)}" class="owner-link">${o ? o.owner : r.opp}</a></td>
        <td>${r.rw}-${r.rl}${r.rt ? '-' + r.rt : ''}</td>
        <td>${(r.pw + r.pl) ? `${r.pw}-${r.pl}` : '–'}</td>
        <td class="num">${f1(r.pf / r.n)}–${f1(r.pa / r.n)}</td>
        <td>${lastTxt}</td>
      </tr>`;
    }).join('')}</tbody>
  </table></div>` : '<p class="muted">No games played yet.</p>';

  // Top starters for this owner, from box scores (2017 onward).
  const starters = {};
  games.forEach(x => {
    if(!x.g.boxscore) return;
    const side = x.awayKey === key ? 'away' : 'home';
    (x.g.boxscore[side] || []).forEach(p => {
      const a = starters[p.player] = starters[p.player] || { player: p.player, pos: p.pos, starts: 0, pts: 0, best: null, years: new Set() };
      a.starts++; a.pts += p.pts; a.years.add(x.year);
      if(!a.best || p.pts > a.best.pts) a.best = { pts: p.pts, year: x.year, week: x.week };
    });
  });
  const topStarters = Object.values(starters).sort((a, b) => b.pts - a.pts).slice(0, 15);
  const yearsSpan = set => { const ys = [...set].sort(); return ys[0] === ys[ys.length - 1] ? `${ys[0]}` : `${ys[0]}–${ys[ys.length - 1]}`; };
  const startersTable = topStarters.length ? `<div class="table-scroll"><table>
    <thead><tr><th>Player</th><th>Pos</th><th>Seasons</th><th class="num">Starts</th><th class="num">Points</th><th>Best Game</th></tr></thead>
    <tbody>${topStarters.map(a => `<tr>
      <td class="name-cell">${playerLink(a.player)}</td>
      <td>${a.pos}</td>
      <td>${yearsSpan(a.years)}</td>
      <td class="num">${a.starts}</td>
      <td class="num">${a.pts.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}</td>
      <td>${f1(a.best.pts)} <span class="muted">${a.best.year} ${a.best.week}</span></td>
    </tr>`).join('')}</tbody>
  </table></div>` : '';

  el.innerHTML = `
    ${statCards}
    <h2 class="section-title" style="margin-top:8px;">Championships</h2>
    <div style="margin:20px 0 40px;">${champGrid}</div>
    ${recordLeaderSection}
    <h2 class="section-title" style="margin-top:40px;">Season by Season</h2>
    ${seasonTable}
    <h2 class="section-title" style="margin-top:40px;">Head-to-Head</h2>
    <p class="muted" style="font-size:0.85rem; margin-bottom:12px;">Record against every other owner. Avg Score is ${t.owner}'s average points for and against in those games.</p>
    ${h2hTable}
    ${startersTable ? `<h2 class="section-title" style="margin-top:40px;">Top Starters</h2>
    <p class="muted" style="font-size:0.85rem; margin-bottom:12px;">Most points scored while in ${t.owner}'s starting lineup, regular season and playoffs, 2017 onward.</p>
    ${startersTable}` : ''}
  `;
}

// ---------- Survivor ----------
const NFL_LOGO_ABBR = {
  '49ers': 'sf', 'Bears': 'chi', 'Bengals': 'cin', 'Bills': 'buf', 'Broncos': 'den',
  'Browns': 'cle', 'Buccaneers': 'tb', 'Cardinals': 'ari', 'Chargers': 'lac', 'Chiefs': 'kc', 'Colts': 'ind',
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
  const resultClass = opts.loss === true ? ' pick-logo--loss' : (opts.loss === false ? ' pick-logo--win' : ' pick-logo--pending');
  const label = opts.loss === true ? `${teamName} (loss)` : (opts.loss === false ? `${teamName} (win)` : `${teamName} (pending)`);
  return `<span class="pick-logo${resultClass}" style="width:${size}px;height:${size}px;" title="${label}"><img src="https://a.espncdn.com/i/teamlogos/nfl/500/${abbr}.png" alt="${label}" loading="lazy"></span>`;
}
// ---------- March Madness pool ----------
const MM_REGIONS = ['East', 'West', 'South', 'Midwest'];
function mmScore(pool, entry){
  const seed = {}, field = {};
  MM_REGIONS.forEach(r => { field[r] = pool.field[r].map(([t, s]) => { seed[t] = s; return t; }); });
  const R = pool.results, P = pool.points;
  const D = pool.gameDays || null;
  const bonusOn = pool.upsetBonus !== false;
  const out = { byRound: [0,0,0,0,0,0], correct: [0,0,0,0,0,0], bonus: 0, upsets: [], byDay: (pool.days || []).map(() => 0) };
  const credit = (rd, win, lose, pick, day) => {
    if(pick !== win) return;
    out.byRound[rd] += P[rd]; out.correct[rd]++;
    let pts = P[rd];
    if(bonusOn && seed[win] > seed[lose]){ const b = seed[win] - seed[lose]; out.bonus += b; pts += b; out.upsets.push({ win, lose, b, rd }); }
    if(day != null && out.byDay.length) out.byDay[day] += pts;
  };
  MM_REGIONS.forEach(r => {
    let prev = field[r];
    for(let rd = 0; rd < 4; rd++){
      R[r][rd].forEach((win, i) => { const a = prev[2*i], b = prev[2*i+1]; credit(rd, win, win === a ? b : a, entry[r][rd][i], D ? D[r][rd][i] : null); });
      prev = R[r][rd];
    }
  });
  const semis = [[R.East[3][0], R.South[3][0]], [R.West[3][0], R.Midwest[3][0]]];
  semis.forEach(([a, b], i) => { const win = R.F4[i]; credit(4, win, win === a ? b : a, entry.F4[i], D ? D.F4[i] : null); });
  const [a, b] = R.F4; credit(5, R.Champion, R.Champion === a ? b : a, entry.Champion, D ? D.Champion : null);
  out.total = out.byRound.reduce((x, y) => x + y, 0) + out.bonus;
  out.seed = seed;
  return out;
}

// Pool race: running total after each tournament day for every entry. Colors follow the entry
// (assigned by final standing), every line is direct-labelled at its end, hover highlights one entry.
function renderMarchMadnessRace(pool, rows){
  if(!pool.days || !pool.gameDays || rows.length < 2) return '';
  const days = pool.days;
  const series = rows.map((x, i) => {
    let run = 0;
    return { name: x.name, slot: (i % 8) + 1, pts: [0, ...x.s.byDay.map(v => (run += v))], day: x.s.byDay };
  });
  const maxPts = Math.max(...series.map(x => x.pts[x.pts.length - 1]));
  const step = [20, 50, 100, 200, 250, 500].find(s => maxPts / s <= 10) || 1000, yMax = Math.ceil(maxPts / step) * step;
  const padL = 40, padR = 150, padT = 14, padB = 46;
  const chartW = 760, chartH = 420;
  const innerW = chartW - padL - padR, innerH = chartH - padT - padB;
  const xAt = i => padL + (i / days.length) * innerW;
  const yAt = v => padT + innerH - (v / yMax) * innerH;
  const roundOf = ['R64', 'R64', 'R32', 'R32', 'S16', 'S16', 'E8', 'E8', 'F4', 'Final'];
  const grid = Array.from({ length: yMax / step + 1 }, (_, i) => i * step).map(v => `
    <line x1="${padL}" y1="${yAt(v)}" x2="${padL + innerW}" y2="${yAt(v)}" stroke="var(--line)" stroke-width="1" />
    <text x="${padL - 8}" y="${yAt(v) + 3.5}" font-size="10" font-family="var(--mono)" fill="var(--text-soft)" text-anchor="end">${v}</text>`).join('');
  const xLabels = ['Start', ...days].map((d, i) => `
    <text x="${xAt(i)}" y="${padT + innerH + 18}" font-size="10" font-family="var(--mono)" fill="var(--text-soft)" text-anchor="middle">${d}</text>
    ${i ? `<text x="${xAt(i)}" y="${padT + innerH + 32}" font-size="9" font-family="var(--mono)" fill="var(--text-soft)" text-anchor="middle" opacity="0.75">${roundOf[i - 1]}</text>` : ''}`).join('');
  const gap = 17, labelX = padL + innerW + 12;
  const labels = series.map(x => ({ x, y: yAt(x.pts[x.pts.length - 1]) })).sort((a, b) => a.y - b.y);
  labels.forEach((l, i) => { l.ly = i === 0 ? l.y : Math.max(l.y, labels[i-1].ly + gap); });
  const lines = labels.map(({ x, ly }) => {
    const col = `var(--mm-s${x.slot})`;
    const last = x.pts[x.pts.length - 1];
    const poly = x.pts.map((v, i) => `${xAt(i)},${yAt(v)}`).join(' ');
    const dots = x.pts.slice(1).map((v, i) => `<circle cx="${xAt(i + 1)}" cy="${yAt(v)}" r="7" fill="transparent"><title>${x.name}, ${days[i]}: +${x.day[i]} (${v} total)</title></circle>`).join('');
    return `<g class="mm-race-entry">
      <polyline points="${poly}" fill="none" stroke="${col}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" />
      <circle cx="${xAt(days.length)}" cy="${yAt(last)}" r="3.5" fill="${col}" />
      <path d="M${xAt(days.length) + 4},${yAt(last)} L${labelX - 3},${ly}" stroke="var(--line)" fill="none" />
      <rect x="${labelX}" y="${ly - 4.5}" width="9" height="9" rx="2" fill="${col}" />
      <text x="${labelX + 14}" y="${ly + 4}" font-size="11" font-family="var(--body)" font-weight="600" fill="var(--text)">${x.name} <tspan font-family="var(--mono)" font-weight="700">${last}</tspan></text>
      ${dots}
    </g>`;
  }).join('');
  return `<h3>Pool Race</h3>
    <p class="muted" style="margin-top:-4px;">Running total after each day of the tournament (correct picks${pool.upsetBonus === false ? '' : ' plus upset bonuses'}).</p>
    <div class="table-scroll" style="border:0;">
      <svg class="mm-race" viewBox="0 0 ${chartW} ${chartH}" style="width:100%; max-width:${chartW}px; height:auto; min-width:600px;" role="img" aria-label="March Madness pool points by tournament day">
        ${grid}${xLabels}${lines}
      </svg>
    </div>`;
}

function renderMarchMadness(containerId){
  const el = document.getElementById(containerId);
  if(!el || typeof MARCH_MADNESS === 'undefined') return;
  const years = Object.keys(MARCH_MADNESS).sort((a,b) => b - a);
  const params = new URLSearchParams(window.location.search);
  // Ties on points are broken by record (correct picks), per the page's tiebreaker rule.
  const wins = x => x.s.correct.reduce((a, b) => a + b, 0);
  const mmRank = pool => Object.entries(pool.entries).map(([name, e]) => ({ name, e, s: mmScore(pool, e) }))
    .sort((a,b) => b.s.total - a.s.total || wins(b) - wins(a) || a.name.localeCompare(b.name));

  // Landing view: one card per tournament, newest first, styled like the Super Bowl Squares cards.
  if(!params.get('year') || !MARCH_MADNESS[params.get('year')]){
    const logo = t => (typeof NCAA_LOGO_ID !== 'undefined' && NCAA_LOGO_ID[t]) ? `<img class="sb-logo" src="https://a.espncdn.com/i/teamlogos/ncaa/500/${NCAA_LOGO_ID[t]}.png" alt="" loading="lazy" onerror="this.remove()">` : '';
    el.innerHTML = `<h3>Tournaments</h3><div class="sb-list">${years.map(y => {
      const p = MARCH_MADNESS[y], top = mmRank(p), champ = p.results.Champion;
      const finalists = [champ, ...p.results.F4.filter(t => t !== champ)];
      const team = t => `<div class="sb-card-team${t === champ ? ' won' : ''}">${logo(t)}<span>${t}</span><strong>${p.final ? p.final[t] : ''}</strong></div>`;
      return `<a class="nav-card sb-card" href="march-madness.html?year=${y}">
        <div class="sb-card-head">${p.logo ? `<img class="sb-card-logo" src="${p.logo}" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.remove()">` : ''}<div><span class="sb-card-name">${y} Final Four</span>${p.site ? `<span class="muted">${p.site}</span>` : ''}</div></div>
        ${finalists.map(team).join('')}
        <dl class="sb-card-winners">${['1st', '2nd', '3rd'].map((pl, i) => top[i] ? `<dt>${pl}</dt><dd>${top[i].name}</dd>` : '').join('')}</dl>
      </a>`;
    }).join('')}</div>`;
    return;
  }

  const year = params.get('year');
  const pool = MARCH_MADNESS[year];
  const R = pool.results;
  const rows = mmRank(pool);
  const sub = document.getElementById('mm-sub');
  if(sub) sub.innerHTML = `<a class="back-link" href="march-madness.html">← All Tournaments</a>`;
  const pot = rows.length * (pool.entryFee || 0);
  const pay = (pool.payouts && pool.payouts[pot]) || [];
  let rank = 0;
  rows.forEach((x, i) => { if(i === 0 || x.s.total !== rows[i-1].s.total || wins(x) !== wins(rows[i-1])) rank = i + 1; x.rank = rank; x.pay = pay[rank - 1] || 0; });
  const seed = rows.length ? rows[0].s.seed : {};
  const team = t => `<span class="mm-seed">${seed[t] || ''}</span> ${t}`;
  const actualF4 = new Set(MM_REGIONS.map(r => R[r][3][0]));
  const bonusOn = pool.upsetBonus !== false;
  const pickTag = (t, ok) => `<span class="mm-pick ${ok ? 'mm-pick--ok' : 'mm-pick--miss'}">${team(t)}</span>`;

  // Standings: click a column header to sort by it, click again to flip (same pattern as season standings).
  const cols = [{ k: 'rank', l: '#' }, { k: 'name', l: 'Entry' }, { k: 'record', l: 'Record' },
    ...['R64', 'R32', 'S16', 'E8', 'F4', 'Champ'].map((l, i) => ({ k: 'r' + i, l })),
    ...(bonusOn ? [{ k: 'bonus', l: 'Upsets' }] : []), { k: 'total', l: 'Total' }];
  const val = (x, k) => k === 'rank' ? x.rank : k === 'name' ? x.name : k === 'record' ? wins(x) : k === 'bonus' ? x.s.bonus : k === 'total' ? x.s.total : x.s.byRound[+k.slice(1)];
  let sortKey = 'rank', sortDir = 'asc';
  const drawStandings = () => {
    const wrap = el.querySelector('#mm-standings');
    const d = rows.slice().sort((a, b) => {
      const av = val(a, sortKey), bv = val(b, sortKey);
      const c = typeof av === 'string' ? av.localeCompare(bv) : av - bv;
      return (sortDir === 'asc' ? c : -c) || a.rank - b.rank || a.name.localeCompare(b.name);
    });
    wrap.innerHTML = `<table class="mm-table mm-standings">
      <thead><tr>${cols.map(c => `<th data-key="${c.k}"${c.k === sortKey ? ` class="sorted-${sortDir}"` : ''}>${c.l}</th>`).join('')}</tr></thead>
      <tbody>${d.map(x => `<tr>
        <td class="pos">${x.rank}</td>
        <td class="name-cell">${x.name}</td>
        <td>${wins(x)}-${63 - wins(x)}</td>
        ${x.s.byRound.map(v => `<td>${v}</td>`).join('')}
        ${bonusOn ? `<td>${x.s.bonus}</td>` : ''}
        <td><strong>${x.s.total}</strong></td>
      </tr>`).join('')}</tbody>
    </table>`;
    wrap.querySelectorAll('thead th').forEach(th => th.addEventListener('click', () => {
      const k = th.dataset.key;
      if(k === sortKey) sortDir = sortDir === 'asc' ? 'desc' : 'asc';
      else { sortKey = k; sortDir = (k === 'rank' || k === 'name') ? 'asc' : 'desc'; }
      drawStandings();
    }));
  };

  const picks = rows.map(x => {
    const f4 = MM_REGIONS.map(r => x.e[r][3][0]);
    return `<tr>
      <td class="name-cell">${x.name}</td>
      ${f4.map((t, i) => `<td class="mm-pick-cell${i === 0 ? ' mm-group-start' : ''}">${pickTag(t, actualF4.has(t))}</td>`).join('')}
      ${x.e.F4.map((t, i) => `<td class="mm-pick-cell${i === 0 ? ' mm-group-start' : ''}">${pickTag(t, R.F4.includes(t))}</td>`).join('')}
      <td class="mm-pick-cell mm-group-start">${pickTag(x.e.Champion, x.e.Champion === R.Champion)}</td>
    </tr>`;
  }).join('');

  const allUps = rows.flatMap(x => x.s.upsets.map(u => ({ ...u, who: x.name })));
  const byGame = {};
  allUps.forEach(u => { const k = u.win + '|' + u.lose; (byGame[k] = byGame[k] || { ...u, who: [] }).who.push(u.who); });
  const roundName = ['First Round', 'Second Round', 'Sweet 16', 'Elite 8', 'Final Four', 'Championship'];
  const upsetRows = Object.values(byGame).sort((a,b) => b.b - a.b || a.who.length - b.who.length).slice(0, 8).map(u => `<tr>
      <td>${team(u.win)} over ${team(u.lose)}</td>
      <td>${roundName[u.rd]}</td>
      <td>+${u.b}</td>
      <td>${u.who.join(', ')}</td>
    </tr>`).join('');

  const plaque = (x, cls, label) => x ? `<div class="plaque ${cls}">
      <div class="yr">${label}</div>
      <div class="owner">${x.name}</div>
      <div class="team">${x.s.total} pts</div>
    </div>` : '';
  const podium = `<div class="trophy-case mm-podium">
    ${plaque(rows[0], 'plaque--recent', `${year} CHAMPION`)}
    ${plaque(rows[1], 'plaque--silver', 'RUNNER-UP')}
    ${plaque(rows[2], 'plaque--bronze', 'THIRD PLACE')}
  </div>`;
  el.innerHTML = `
    ${podium}
    <div class="mm-summary">
      <div><div class="mm-label">${year} National Champion</div><div class="mm-big">${team(R.Champion)}</div></div>
      <div><div class="mm-label">Final Four</div><div>${MM_REGIONS.map(r => team(R[r][3][0])).join(' · ')}</div></div>
    </div>
    <h3>${year} Standings</h3>
    <div class="table-scroll" id="mm-standings"></div>
    <p class="muted" style="font-size:0.8rem;">${rows.length} entries. Record is correct picks out of 63 games; round columns are points for correct picks in that round; ${bonusOn ? 'Upsets is the seed-difference bonus.' : `in ${year} rounds were worth ${pool.points.join(' / ')} points, with no upset bonus.`}</p>
    ${renderMarchMadnessRace(pool, rows)}
    <h3>Final Four Picks</h3>
    <div class="table-scroll"><table class="mm-table mm-picks-table">
      <thead>
        <tr><th rowspan="2">Entry</th><th colspan="4" class="mm-group-start">Final Four</th><th colspan="2" class="mm-group-start">Title Game</th><th rowspan="2" class="mm-group-start">Champion</th></tr>
        <tr class="mm-subhead"><th class="mm-group-start">East</th><th>West</th><th>South</th><th>Midwest</th><th class="mm-group-start">East/South</th><th>West/Midwest</th></tr>
      </thead>
      <tbody>${picks}</tbody>
    </table></div>
    ${bonusOn ? `<h3>Best Upset Calls</h3>
    <div class="table-scroll"><table class="mm-table">
      <thead><tr><th class="mm-center">Upset</th><th>Round</th><th>Bonus</th><th>Called by</th></tr></thead>
      <tbody>${upsetRows}</tbody>
    </table></div>` : ''}`;
  drawStandings();
}

// ---------- Super Bowl Squares ----------
function renderSuperBowlSquares(containerId){
  const el = document.getElementById(containerId);
  if(!el || typeof SUPER_BOWL_SQUARES === 'undefined') return;
  const years = Object.keys(SUPER_BOWL_SQUARES).sort((a,b) => b - a);
  const params = new URLSearchParams(window.location.search);
  const logo = t => (typeof NFL_LOGO_ABBR !== 'undefined' && NFL_LOGO_ABBR[t]) ? `<img class="sb-logo" src="https://a.espncdn.com/i/teamlogos/nfl/500/${NFL_LOGO_ABBR[t]}.png" alt="">` : '';
  const Q = ['1st', '2nd', '3rd', '4th'];
  const winnersOf = g => g.noContest ? [] : (g.scores || []).map(sc => {
    const r = g.side.digits.indexOf(sc.side % 10), c = g.top.digits.indexOf(sc.top % 10);
    return (r >= 0 && c >= 0) ? g.grid[r][c] : null;
  });

  // Landing view: one card per Super Bowl, newest first. Clicking a card opens its grid.
  if(!params.get('year') || !SUPER_BOWL_SQUARES[params.get('year')]){
    el.innerHTML = `<h3>Past Super Bowls</h3><div class="sb-list">${years.map(y => {
      const g = SUPER_BOWL_SQUARES[y];
      const f = g.finalScore || (g.scores && g.scores[3]);
      const sideWon = f && f.side > f.top;
      const team = (t, pts, won) => `<div class="sb-card-team${won ? ' won' : ''}">${logo(t.team)}<span>${t.team}</span><strong>${f ? pts : ''}</strong></div>`;
      const w = winnersOf(g);
      return `<a class="nav-card sb-card" href="super-bowl-squares.html?year=${y}">
        <div class="sb-card-head">${g.logo ? `<img class="sb-card-logo" src="${g.logo}" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.remove()">` : ''}<div><span class="sb-card-name">${g.name}</span><span class="muted">${y - 1} season</span></div></div>
        ${sideWon ? team(g.side, f.side, true) + team(g.top, f.top, false) : team(g.top, f && f.top, !!f) + team(g.side, f && f.side, false)}
        ${g.noContest ? `<p class="muted sb-card-none">No contest this year</p>` : `<dl class="sb-card-winners">${Q.map((q, i) => `<dt>${q} Qtr</dt><dd>${w[i] || '—'}</dd>`).join('')}</dl>`}
      </a>`;
    }).join('')}</div>`;
    return;
  }

  const year = params.get('year');
  const g = SUPER_BOWL_SQUARES[year];
  const abbr = t => ((typeof NFL_LOGO_ABBR !== 'undefined' && NFL_LOGO_ABBR[t]) || t.slice(0,3)).toUpperCase();
  const wins = g.noContest ? [] : (g.scores || []).map((sc, q) => {
    const r = g.side.digits.indexOf(sc.side % 10), c = g.top.digits.indexOf(sc.top % 10);
    return { q, sc, r, c, who: (r >= 0 && c >= 0) ? g.grid[r][c] : null, pay: (g.payouts || [])[q] || 0 };
  });
  const winAt = {};
  wins.forEach(w => { (winAt[w.r + ',' + w.c] = winAt[w.r + ',' + w.c] || []).push(w); });
  const final = g.finalScore || (g.scores && g.scores[3]);
  const dateStr = g.date ? new Date(g.date + 'T12:00:00').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : '';
  const yearSwitcher = years.length > 1 ? `<select id="sb-year" class="sb-year">${years.map(y => `<option value="${y}"${y === year ? ' selected' : ''}>${SUPER_BOWL_SQUARES[y].name} (${y - 1})</option>`).join('')}</select>` : '';

  const winnerRows = wins.map(w => `<tr>
      <td>${Q[w.q]}</td>
      <td style="white-space:nowrap;">${w.sc.side} – ${w.sc.top}</td>
      <td><span class="sb-digit">${w.sc.side % 10}</span> / <span class="sb-digit">${w.sc.top % 10}</span></td>
      <td class="name-cell">${w.who || '—'}</td>
      ${g.payouts ? `<td>$${w.pay}</td>` : ''}
    </tr>`).join('');

  // Money won per person
  const won = {};
  wins.forEach(w => { if(w.who) won[w.who] = (won[w.who] || 0) + w.pay; });

  const head = g.noContest ? '' : `<tr><th class="sb-corner"></th>${g.top.digits.map(d => `<th class="sb-col">${d}</th>`).join('')}</tr>`;
  const body = g.noContest ? '' : g.grid.map((row, r) => `<tr><th class="sb-row">${g.side.digits[r]}</th>${row.map((name, c) => {
      const w = winAt[r + ',' + c];
      const tag = w ? `<span class="sb-q">${w.map(x => 'Q' + (x.q + 1)).join(' ')}</span>` : '';
      return `<td class="${w ? 'sb-win' : ''}" title="${name} · ${g.side.team} ${g.side.digits[r]}, ${g.top.team} ${g.top.digits[c]}">${tag}<span class="sb-name">${name}</span></td>`;
    }).join('')}</tr>`).join('');

  const sideWon = final && final.side > final.top;
  const fin = (t, pts, won) => won ? `<strong>${t} ${pts}</strong>` : `${t} ${pts}`;
  el.innerHTML = `
    <p class="sb-back"><a href="super-bowl-squares.html">← All Super Bowls</a></p>
    ${yearSwitcher}
    <div class="sb-summary">
      <div class="sb-title">${g.name}</div>
      <div class="sb-final">${logo(g.side.team)}${fin(g.side.team, final ? final.side : '', sideWon)}<span class="muted">–</span>${fin(g.top.team, final ? final.top : '', final && !sideWon)}${logo(g.top.team)}</div>
      <div class="muted">${dateStr}${final && final.ot ? ' · Overtime' : ''}</div>
    </div>
    ${g.note ? `<p class="muted sb-note">${g.note}</p>` : ''}
    ${g.noContest ? `<p class="sb-note">No contest this year</p>` : `<h3>Winners</h3>
    <div class="table-scroll"><table class="sb-winners">
      <thead><tr><th>Qtr</th><th>${abbr(g.side.team)}–${abbr(g.top.team)}</th><th>Digits</th><th>Winner</th>${g.payouts ? '<th>Payout</th>' : ''}</tr></thead>
      <tbody>${winnerRows}</tbody>
    </table></div>
    <h3>The Grid</h3>
    <p class="muted" style="margin-top:-4px;">${logo(g.side.team)} ${g.side.full} down the side &nbsp;·&nbsp; ${logo(g.top.team)} ${g.top.full} across the top. Highlighted squares won.</p>
    <div class="table-scroll" style="border:0;"><table class="sb-grid">
      <thead>${head}</thead><tbody>${body}</tbody>
    </table></div>`}`;
  const sel = el.querySelector('#sb-year');
  if(sel) sel.addEventListener('change', e => { const u = new URL(window.location.href); u.searchParams.set('year', e.target.value); window.location.href = u; });
}

// ---------- Premier League pick'em ----------
function plLogo(team, size = 20){
  const id = (typeof PL_LOGO_ID !== 'undefined') ? PL_LOGO_ID[team] : null;
  if(!id) return '';
  return `<img class="pl-logo" src="https://a.espncdn.com/i/teamlogos/soccer/500/${id}.png" alt="" width="${size}" height="${size}" loading="lazy">`;
}
function plClubUrl(club){ return `premier-league-club.html?club=${encodeURIComponent(club)}`; }
function plClubLink(club, html = club){ return `<a class="pl-club-link" href="${plClubUrl(club)}">${html}</a>`; }

// Cumulative points race. Each player's line starts at 0 and steps through the weeks they have a
// settled pick; each point carries the crest of the club picked that week.
function renderPremierLeagueRace(s){
  const PTS = { W: 3, D: 1, L: 0 };
  const series = s.players.map((p, i) => {
    let run = 0;
    const pts = [{ week: 0, total: 0 }];
    p.picks.filter(pk => pk.result).sort((a,b) => a.week - b.week).forEach(pk => {
      run += PTS[pk.result];
      pts.push({ week: pk.week, total: run, pick: pk });
    });
    return { name: p.name, color: RACE_CHART_COLORS[i % RACE_CHART_COLORS.length], pts };
  }).filter(x => x.pts.length > 1);
  if(!series.length) return '';

  const maxWeek = Math.max(...series.flatMap(x => x.pts.map(pt => pt.week)));
  const maxPts = Math.max(3, ...series.flatMap(x => x.pts.map(pt => pt.total)));
  const yMax = Math.ceil(maxPts / 3) * 3;
  const padL = 40, padR = 90, padT = 24, padB = 46;
  const chartW = 640, chartH = 310;
  const innerW = chartW - padL - padR, innerH = chartH - padT - padB;
  const xAt = w => padL + (maxWeek ? w / maxWeek : 0) * innerW;
  const yAt = v => padT + innerH - (v / yMax) * innerH;

  const yTicks = Array.from({ length: yMax / 3 + 1 }, (_, i) => i * 3);
  const grid = yTicks.map(v => `
    <line x1="${padL}" y1="${yAt(v)}" x2="${padL + innerW}" y2="${yAt(v)}" stroke="var(--line)" stroke-width="1" />
    <text x="${padL - 8}" y="${yAt(v) + 3.5}" font-size="10" font-family="var(--mono)" fill="var(--text-soft)" text-anchor="end">${v}</text>`).join('');
  const xLabels = Array.from({ length: maxWeek + 1 }, (_, w) =>
    `<text x="${xAt(w)}" y="${padT + innerH + 34}" font-size="10" font-family="var(--mono)" fill="var(--text-soft)" text-anchor="middle">${w === 0 ? 'Start' : 'Wk ' + w}</text>`).join('');
  const yTitle = `<text transform="translate(12 ${padT + innerH / 2}) rotate(-90)" font-size="10" font-family="var(--mono)" fill="var(--text-soft)" text-anchor="middle">Points</text>`;

  // Nudge crests apart horizontally when two players sit on the same spot.
  const spotCount = {};
  series.forEach(x => x.pts.forEach(pt => { const k = pt.week + ':' + pt.total; spotCount[k] = (spotCount[k] || 0) + 1; }));
  const spotSeen = {};
  const crest = 22;

  const labelX = padL + innerW + 26;
  const labels = series.map(x => ({ x, y: yAt(x.pts[x.pts.length - 1].total) })).sort((a,b) => a.y - b.y);
  labels.forEach((l, i) => { l.ly = i === 0 ? l.y : Math.max(l.y, labels[i-1].ly + 20); });
  const labelY = new Map(labels.map(l => [l.x, l.ly]));

  const lines = series.map(x => {
    const poly = x.pts.map(pt => `${xAt(pt.week)},${yAt(pt.total)}`).join(' ');
    const marks = x.pts.map(pt => {
      const cx = xAt(pt.week), cy = yAt(pt.total);
      if(!pt.pick) return `<circle cx="${cx}" cy="${cy}" r="3.5" fill="${x.color}" />`;
      const k = pt.week + ':' + pt.total;
      const n = spotCount[k], idx = spotSeen[k] = (spotSeen[k] || 0) + 1;
      const dx = n > 1 ? (idx - (n + 1) / 2) * (crest + 4) : 0;
      const id = (typeof PL_LOGO_ID !== 'undefined') ? PL_LOGO_ID[pt.pick.team] : null;
      const tip = `${x.name}, Wk ${pt.week}: ${pt.pick.team} (${pt.pick.result}${pt.pick.score ? ' ' + pt.pick.score : ''}) · ${pt.total} pts`;
      const r = crest / 2 + 2;
      return `<g><title>${tip}</title>
        <circle cx="${cx + dx}" cy="${cy}" r="${r}" class="pl-crest-bg" fill="var(--panel)" stroke="${x.color}" stroke-width="2" />
        ${id ? `<image href="https://a.espncdn.com/i/teamlogos/soccer/500/${id}.png" x="${cx + dx - crest / 2 + 2}" y="${cy - crest / 2 + 2}" width="${crest - 4}" height="${crest - 4}" />` : ''}
      </g>`;
    }).join('');
    const last = x.pts[x.pts.length - 1];
    return `<g class="race-team">
      <polyline points="${poly}" fill="none" stroke="${x.color}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round" />
      ${marks}
      <rect x="${labelX}" y="${labelY.get(x) - 5}" width="10" height="10" rx="2" fill="${x.color}" />
      <text x="${labelX + 15}" y="${labelY.get(x) + 4}" font-size="12" font-family="var(--body)" font-weight="700" fill="var(--text)">${x.name} · ${last.total}</text>
    </g>`;
  }).join('');

  return `<h3>Points Race</h3>
    <div class="table-scroll" style="border:0;">
      <svg class="race-chart pl-race" viewBox="0 0 ${chartW} ${chartH}" style="width:100%; height:auto; min-width:520px;" role="img" aria-label="Cumulative points by week">
        ${grid}${yTitle}${xLabels}${lines}
      </svg>
    </div>`;
}

// League standings after a given matchweek, computed from PREMIER_LEAGUE[year].results.
function plStandingsAfter(s, week){
  const t = {};
  const row = c => t[c] || (t[c] = { club: c, p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0 });
  (s.clubs || []).forEach(row);
  Object.keys(s.results || {}).map(Number).filter(w => w <= week).forEach(w => {
    s.results[w].forEach(([home, hg, ag, away]) => {
      [[home, hg, ag], [away, ag, hg]].forEach(([c, f, a]) => {
        const r = row(c);
        r.p++; r.gf += f; r.ga += a;
        if(f > a) r.w++; else if(f === a) r.d++; else r.l++;
      });
    });
  });
  return Object.values(t).map(r => ({ ...r, gd: r.gf - r.ga, pts: r.w * 3 + r.d }))
    .sort((a,b) => b.pts - a.pts || b.gd - a.gd || b.gf - a.gf || a.club.localeCompare(b.club));
}

// League Table tab: the actual Premier League standings.
function renderPremierLeagueTablePage(containerId){
  const el = document.getElementById(containerId);
  if(!el || typeof PREMIER_LEAGUE === 'undefined') return;
  const params = new URLSearchParams(window.location.search);
  const years = Object.keys(PREMIER_LEAGUE).sort((a,b) => b - a);
  const year = (params.get('year') && PREMIER_LEAGUE[params.get('year')]) ? params.get('year') : years[0];
  const s = PREMIER_LEAGUE[year];
  el.innerHTML = (renderPremierLeagueTable(s) || '<p class="muted">No results yet.</p>') + renderPremierLeaguePointsRace(s);
}

// Cumulative points by matchweek for every club. Lines are neutral; each club is labelled with its crest
// and name at the end of its line, and hovering a club highlights it. A club's line stops at the last
// matchweek it has actually played (so a game in hand doesn't read as a 0-point week).
function renderPremierLeaguePointsRace(s){
  const weeks = Object.keys(s.results || {}).map(Number).sort((a,b) => a - b);
  if(weeks.length < 2) return '';
  const clubs = (s.clubs && s.clubs.length) ? s.clubs.slice() : [...new Set(weeks.flatMap(w => s.results[w].flatMap(r => [r[0], r[3]])))];
  const series = clubs.map(c => {
    let pts = 0;
    const pts0 = [{ i: 0, pts: 0 }];
    weeks.forEach((w, wi) => {
      const g = s.results[w].find(r => r[0] === c || r[3] === c);
      if(!g) return;
      const [f, a] = g[0] === c ? [g[1], g[2]] : [g[2], g[1]];
      pts += f > a ? 3 : f === a ? 1 : 0;
      pts0.push({ i: wi + 1, pts, w, res: f > a ? 'W' : f === a ? 'D' : 'L', score: `${f}–${a}`, opp: g[0] === c ? g[3] : g[0], home: g[0] === c });
    });
    return { club: c, pts: pts0 };
  });
  const order = plStandingsAfter(s, weeks[weeks.length - 1]).map(r => r.club);
  series.sort((a,b) => order.indexOf(a.club) - order.indexOf(b.club));

  const maxPts = Math.max(3, ...series.map(x => x.pts[x.pts.length - 1].pts));
  const yMax = Math.ceil(maxPts / 3) * 3;
  const padL = 36, padR = 190, padT = 14, padB = 30;
  const chartW = 700, chartH = 560;
  const innerW = chartW - padL - padR, innerH = chartH - padT - padB;
  const xAt = i => padL + (i / weeks.length) * innerW;
  const yAt = v => padT + innerH - (v / yMax) * innerH;

  const grid = Array.from({ length: yMax / 3 + 1 }, (_, i) => i * 3).map(v => `
    <line x1="${padL}" y1="${yAt(v)}" x2="${padL + innerW}" y2="${yAt(v)}" stroke="var(--line)" stroke-width="1" />
    <text x="${padL - 8}" y="${yAt(v) + 3.5}" font-size="10" font-family="var(--mono)" fill="var(--text-soft)" text-anchor="end">${v}</text>`).join('');
  const xLabels = [0, ...weeks].map((w, i) => `<text x="${xAt(i)}" y="${padT + innerH + 20}" font-size="10" font-family="var(--mono)" fill="var(--text-soft)" text-anchor="middle">${i === 0 ? 'Start' : 'Wk ' + w}</text>`).join('');
  const yTitle = `<text transform="translate(11 ${padT + innerH / 2}) rotate(-90)" font-size="10" font-family="var(--mono)" fill="var(--text-soft)" text-anchor="middle">Points</text>`;

  // End labels: nudge apart so tied clubs stay readable, keeping table order within a tie.
  const gap = 24, labelX = padL + innerW + 34;
  const labels = series.map(x => ({ x, y: yAt(x.pts[x.pts.length - 1].pts) }));
  labels.forEach((l, i) => { l.ly = i === 0 ? l.y : Math.max(l.y, labels[i-1].ly + gap); });
  const over = labels.length ? labels[labels.length - 1].ly - (padT + innerH) : 0;
  if(over > 0){
    for(let i = labels.length - 1; i >= 0; i--){
      const cap = i === labels.length - 1 ? labels[i].ly - over : labels[i+1].ly - gap;
      labels[i].ly = Math.min(labels[i].ly, cap);
    }
  }
  const crest = 18;
  const lines = labels.map(({ x, ly }, rank) => {
    const last = x.pts[x.pts.length - 1];
    const poly = x.pts.map(p => `${xAt(p.i)},${yAt(p.pts)}`).join(' ');
    const dots = x.pts.slice(1).map(p => `<circle cx="${xAt(p.i)}" cy="${yAt(p.pts)}" r="6" fill="transparent"><title>${x.club}, Wk ${p.w}: ${p.res} ${p.score} ${p.home ? 'vs' : 'at'} ${p.opp} · ${p.pts} pts</title></circle>`).join('');
    const id = (typeof PL_LOGO_ID !== 'undefined') ? PL_LOGO_ID[x.club] : null;
    const name = (typeof PL_SHORT_NAME !== 'undefined' && PL_SHORT_NAME[x.club]) || x.club;
    return `<g class="pl-prace-club">
      <polyline points="${poly}" fill="none" stroke="var(--text-soft)" stroke-opacity="0.4" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" />
      <circle class="pl-prace-end" cx="${xAt(last.i)}" cy="${yAt(last.pts)}" r="3" fill="var(--text-soft)" />
      <path d="M${xAt(last.i) + 4},${yAt(last.pts)} L${labelX - crest / 2 - 6},${ly}" stroke="var(--line)" stroke-width="1" fill="none" />
      ${id ? `<circle class="pl-crest-bg" cx="${labelX}" cy="${ly}" r="${crest / 2 + 1}" fill="var(--panel)" stroke="var(--line)" stroke-width="1" /><image href="https://a.espncdn.com/i/teamlogos/soccer/500/${id}.png" x="${labelX - crest / 2 + 2}" y="${ly - crest / 2 + 2}" width="${crest - 4}" height="${crest - 4}" />` : ''}
      <text x="${labelX + crest / 2 + 6}" y="${ly + 4}" font-size="11" font-family="var(--body)" font-weight="600" fill="var(--text)">${name} <tspan font-family="var(--mono)" font-weight="700">${last.pts}</tspan></text>
      ${dots}
      <a href="${plClubUrl(x.club)}"><rect x="${labelX - crest / 2 - 2}" y="${ly - gap / 2}" width="${padR - 30}" height="${gap}" fill="transparent" style="cursor:pointer;"><title>${x.club}: ${last.pts} pts</title></rect></a>
    </g>`;
  }).join('');

  return `<h3 style="margin-top:32px;">Points Race</h3>
    <p class="muted" style="margin-top:-4px;">Each club's running points total by matchweek.</p>
    <div class="table-scroll" style="border:0;">
      <svg class="pl-prace" viewBox="0 0 ${chartW} ${chartH}" style="width:100%; height:auto; min-width:560px;" role="img" aria-label="Premier League points by matchweek for every club">
        ${grid}${yTitle}${xLabels}${lines}
      </svg>
    </div>`;
}

function renderPremierLeagueTable(s){
  const weeks = Object.keys(s.results || {}).map(Number).sort((a,b) => a - b);
  if(!weeks.length) return '';
  const last = weeks[weeks.length - 1];
  const rows = plStandingsAfter(s, last);
  const fmtGd = v => v > 0 ? '+' + v : v < 0 ? '−' + Math.abs(v) : '0';
  const body = rows.map((r, i) => `<tr>
      <td class="pos">${i + 1}</td>
      <td class="name-cell">${plClubLink(r.club, `${plLogo(r.club, 18)} ${(typeof PL_SHORT_NAME !== 'undefined' && PL_SHORT_NAME[r.club]) ? `<span class="pl-name-full">${r.club}</span><span class="pl-name-short">${PL_SHORT_NAME[r.club]}</span>` : r.club}`)}</td>
      <td><strong>${r.pts}</strong></td>
      <td>${r.p}</td><td>${r.w}</td><td>${r.d}</td><td>${r.l}</td>
      <td>${r.gf}</td><td>${r.ga}</td><td>${fmtGd(r.gd)}</td>
    </tr>`).join('');
  const played = s.results[last].length, total = (s.fixtures && s.fixtures[last]) ? s.fixtures[last].length : played;
  const asOf = played < total ? `Through Matchweek ${last} · ${played} of ${total} matches played` : `After Matchweek ${last}`;
  return `<p class="muted" style="margin-top:0;">${asOf}</p>
    <div class="table-scroll"><table class="pl-table">
      <thead><tr><th>#</th><th>Club</th><th>Pts</th><th>P</th><th>W</th><th>D</th><th>L</th><th>GF</th><th>GA</th><th>GD</th></tr></thead>
      <tbody>${body}</tbody>
    </table></div>`;
}

// Premier League schedule: one matchweek at a time, grouped by day in the viewer's timezone.
function renderPremierLeagueSchedule(containerId){
  const el = document.getElementById(containerId);
  if(!el || typeof PREMIER_LEAGUE === 'undefined') return;
  const params = new URLSearchParams(window.location.search);
  const years = Object.keys(PREMIER_LEAGUE).sort((a,b) => b - a);
  const year = (params.get('year') && PREMIER_LEAGUE[params.get('year')]) ? params.get('year') : years[0];
  const s = PREMIER_LEAGUE[year];
  if(!s || !s.fixtures){ el.innerHTML = '<p class="muted">No schedule yet.</p>'; return; }
  const weeks = Object.keys(s.fixtures).map(Number).sort((a,b) => a - b);

  // Current week = first matchweek whose last kickoff was less than ~3 hours ago (or later).
  const now = Date.now();
  const current = weeks.find(w => Math.max(...s.fixtures[w].map(f => Date.parse(f[0]))) + 3 * 3600e3 > now) || weeks[weeks.length - 1];
  let week = parseInt(params.get('week'), 10);
  if(!weeks.includes(week)) week = current;

  const dayFmt = new Intl.DateTimeFormat('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
  const shortFmt = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' });
  const timeFmt = new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: '2-digit' });
  const tzName = (() => { try { return new Intl.DateTimeFormat('en-US', { timeZoneName: 'short' }).formatToParts(new Date(s.fixtures[week][0][0])).find(x => x.type === 'timeZoneName').value; } catch(e){ return ''; } })();
  const range = w => {
    const ds = s.fixtures[w].map(f => new Date(f[0]));
    const a = shortFmt.format(ds[0]), b = shortFmt.format(ds[ds.length - 1]);
    if(a === b) return a;
    return a.split(' ')[0] === b.split(' ')[0] ? `${a}–${b.split(' ')[1]}` : `${a} – ${b}`;
  };
  // For a club: each player's season pick count, and whether that player picked it in week w.
  const usage = (team, w) => (s.players || []).map(p => ({
    name: p.name,
    n: p.picks.filter(pk => pk.team === team).length,
    now: p.picks.some(pk => pk.team === team && pk.week === w)
  })).filter(u => u.n > 0);

  function draw(){
    const games = s.fixtures[week].slice().sort((a,b) => Date.parse(a[0]) - Date.parse(b[0]));
    const results = (s.results && s.results[week]) || [];
    const scoreOf = (h, a) => results.find(r => r[0] === h && r[3] === a);
    const nameHtml = team => {
      const short = (typeof PL_SHORT_NAME !== 'undefined') ? PL_SHORT_NAME[team] : null;
      return short ? `<span class="pl-name-full">${team}</span><span class="pl-name-short">${short}</span>` : team;
    };
    const chips = team => {
      const u = usage(team, week);
      return u.length ? `<span class="pl-chips">${u.map(x => `<span class="pl-pick-chip pl-pick-chip--${x.name}${x.now ? ' pl-pick-chip--now' : ''}${x.n >= 2 ? ' pl-pick-chip--max' : ''}" title="${x.name} has picked ${team} ${x.n} of 2 times${x.now ? ' (picked this week)' : ''}">${x.name} ${x.n}/2</span>`).join('')}</span>` : '';
    };
    let lastDay = '';
    const rows = games.map(([ko, h, a]) => {
      const d = new Date(ko);
      const day = dayFmt.format(d);
      const head = day !== lastDay ? `<div class="pl-sched-day">${day}</div>` : '';
      lastDay = day;
      const r = scoreOf(h, a);
      const mid = r ? `<span class="pl-sched-score">${r[1]} – ${r[2]}</span>` : `<span class="pl-sched-time">${timeFmt.format(d)}</span>`;
      return `${head}<div class="pl-sched-row">
          <span class="pl-sched-team pl-sched-home"><a class="pl-sched-line pl-club-link" href="${plClubUrl(h)}"><span class="pl-sched-name">${nameHtml(h)}</span>${plLogo(h, 20)}</a>${chips(h)}</span>
          ${mid}
          <span class="pl-sched-team pl-sched-away"><a class="pl-sched-line pl-club-link" href="${plClubUrl(a)}">${plLogo(a, 20)}<span class="pl-sched-name">${nameHtml(a)}</span></a>${chips(a)}</span>
        </div>`;
    }).join('');
    const opts = weeks.map(w => `<option value="${w}"${w === week ? ' selected' : ''}>Week ${w} · ${range(w)}${w === current ? ' · Current' : ''}</option>`).join('');
    el.innerHTML = `
      <div class="pl-sched-nav">
        <button type="button" class="pl-sched-step" data-step="-1" ${week === weeks[0] ? 'disabled' : ''} aria-label="Previous matchweek">&larr;</button>
        <select id="pl-week-select" aria-label="Matchweek">${opts}</select>
        <button type="button" class="pl-sched-step" data-step="1" ${week === weeks[weeks.length - 1] ? 'disabled' : ''} aria-label="Next matchweek">&rarr;</button>
      </div>
      <div class="pl-sched">${rows}</div>
      <p class="muted" style="font-size:0.8rem; margin-top:14px;">Times shown in your local time zone${tzName ? ` (${tzName})` : ''}. Kickoff times for later matchweeks are provisional and may move for TV.<br><span class="pl-pick-chip pl-pick-chip--TC pl-pick-chip--now">TC 1/2</span> <span class="pl-pick-chip pl-pick-chip--BD pl-pick-chip--now">BD 1/2</span> picked this week &nbsp; <span class="pl-pick-chip pl-pick-chip--TC">TC 1/2</span> <span class="pl-pick-chip pl-pick-chip--BD">BD 1/2</span> picked in another week &nbsp; <span class="pl-pick-chip pl-pick-chip--max">2/2</span> used up</p>`;
    el.querySelector('#pl-week-select').addEventListener('change', e => go(parseInt(e.target.value, 10)));
    el.querySelectorAll('.pl-sched-step').forEach(b => b.addEventListener('click', () => go(week + parseInt(b.dataset.step, 10))));
  }
  function go(w){
    if(!weeks.includes(w)) return;
    week = w;
    try { const u = new URL(window.location.href); u.searchParams.set('week', w); history.replaceState(null, '', u); } catch(e){}
    draw();
  }
  draw();
}

function renderPremierLeague(containerId){
  const el = document.getElementById(containerId);
  if(!el || typeof PREMIER_LEAGUE === 'undefined') return;
  const years = Object.keys(PREMIER_LEAGUE).sort((a,b) => b - a);
  const params = new URLSearchParams(window.location.search);
  const year = (params.get('year') && PREMIER_LEAGUE[params.get('year')]) ? params.get('year') : years[0];
  const s = PREMIER_LEAGUE[year];
  if(!s){ el.innerHTML = ''; return; }
  const PTS = { W: 3, D: 1, L: 0 };

  const rows = s.players.map(p => {
    const done = p.picks.filter(pk => pk.result);
    const count = r => done.filter(pk => pk.result === r).length;
    return { name: p.name, picks: p.picks.length, w: count('W'), d: count('D'), l: count('L'),
             pts: done.reduce((t, pk) => t + PTS[pk.result], 0) };
  }).sort((a,b) => b.pts - a.pts || b.w - a.w);

  let rank = 0;
  const standingsRows = rows.map((r, i) => {
    if(i === 0 || r.pts !== rows[i-1].pts) rank = i + 1;
    return `<tr><td class="pos">${rank}</td><td class="name-cell"><a href="premier-league-player.html?player=${encodeURIComponent(r.name)}">${r.name}</a></td><td>${r.picks}</td><td>${r.w}</td><td>${r.d}</td><td>${r.l}</td><td><strong>${r.pts}</strong></td></tr>`;
  }).join('');

  const maxWeek = Math.max(0, ...s.players.flatMap(p => p.picks.map(pk => pk.week)));
  const pickCell = (p, w) => {
    const pk = p.picks.find(x => x.week === w);
    if(!pk) return '<td class="muted">—</td>';
    const res = pk.result ? `<span class="pl-res pl-res--${pk.result}">${pk.result}</span>` : '<span class="pl-res">TBD</span>';
    const detail = pk.opponent ? `<div class="pl-detail">${pk.venue === 'A' ? 'at' : 'vs'} ${pk.opponent}${pk.score ? ' · ' + pk.score : ''}</div>` : '';
    return `<td>${res} ${plClubLink(pk.team, `${plLogo(pk.team, 18)} ${pk.team}`)}${detail}</td>`;
  };
  const weekRows = Array.from({ length: maxWeek }, (_, i) => maxWeek - i)
    .map(w => `<tr><td class="pos">${w}</td>${s.players.map(p => pickCell(p, w)).join('')}</tr>`).join('');

  // Club Usage follows the current league table order.
  const tableOrder = plStandingsAfter(s, Math.max(0, ...Object.keys(s.results || {}).map(Number))).map(r => r.club);
  const clubs = [...new Set([...tableOrder, ...s.players.flatMap(p => p.picks.map(pk => pk.team))])];
  const usageRows = clubs.map(c => `<tr><td class="name-cell">${plClubLink(c, `${plLogo(c, 18)} ${c}`)}</td>${s.players.map(p => {
    const n = p.picks.filter(pk => pk.team === c).length;
    return `<td${n >= 2 ? ' class="pl-maxed"' : ''}>${n ? n + ' / 2' : '—'}</td>`;
  }).join('')}</tr>`).join('');

  el.innerHTML = `
    <h3>${s.season} Standings</h3>
    <div class="table-scroll"><table>
      <thead><tr><th>#</th><th>Player</th><th>Picks</th><th>W</th><th>D</th><th>L</th><th>Pts</th></tr></thead>
      <tbody>${standingsRows}</tbody>
    </table></div>
    ${renderPremierLeagueRace(s)}
    ${maxWeek ? `<h3>Weekly Picks</h3>
    <div class="table-scroll"><table>
      <thead><tr><th>Wk</th>${s.players.map(p => `<th><a href="premier-league-player.html?player=${encodeURIComponent(p.name)}" style="color:inherit;">${p.name}</a></th>`).join('')}</tr></thead>
      <tbody>${weekRows}</tbody>
    </table></div>
    <h3>Club Usage</h3>
    <div class="table-scroll"><table class="pl-usage">
      <thead><tr><th>Club</th>${s.players.map(p => `<th>${p.name}</th>`).join('')}</tr></thead>
      <tbody>${usageRows}</tbody>
    </table></div>` : ''}`;
}

function renderPremierLeaguePlayer(containerId){
  const el = document.getElementById(containerId);
  if(!el || typeof PREMIER_LEAGUE === 'undefined') return;
  const params = new URLSearchParams(window.location.search);
  const years = Object.keys(PREMIER_LEAGUE).sort((a,b) => b - a);
  const year = (params.get('year') && PREMIER_LEAGUE[params.get('year')]) ? params.get('year') : years[0];
  const s = PREMIER_LEAGUE[year];
  const p = s && s.players.find(x => x.name === params.get('player'));
  if(!p){
    el.innerHTML = `<p class="muted">Player not found. <a href="premier-league.html">Back to Premier Pick 2</a></p>`;
    return;
  }
  const PTS = { W: 3, D: 1, L: 0 };
  const total = pl => pl.picks.filter(pk => pk.result).reduce((t, pk) => t + PTS[pk.result], 0);
  const pts = total(p);
  const rank = 1 + s.players.filter(x => total(x) > pts).length;
  const count = r => p.picks.filter(pk => pk.result === r).length;

  document.title = `${p.name} | Premier Pick 2 | League of NARPS`;
  const titleEl = document.getElementById('pl-player-title');
  if(titleEl) titleEl.textContent = p.name;
  const subEl = document.getElementById('pl-player-sub');
  if(subEl) subEl.textContent = `${s.season} Pick'em`;

  const clubs = (s.clubs || [...new Set(p.picks.map(pk => pk.team))]).map(c => {
    const used = p.picks.filter(pk => pk.team === c);
    return { club: c, n: used.length, weeks: used.map(pk => pk.week),
             pts: used.filter(pk => pk.result).reduce((t, pk) => t + PTS[pk.result], 0) };
  }).sort((a,b) => b.n - a.n || a.club.localeCompare(b.club));
  const clubRows = clubs.map(c => `<tr>
      <td class="name-cell">${plClubLink(c.club, `${plLogo(c.club, 18)} ${c.club}`)}</td>
      <td${c.n >= 2 ? ' class="pl-maxed"' : ''}>${c.n}</td>
      <td>${Math.max(0, 2 - c.n)}</td>
      <td>${c.weeks.length ? c.weeks.join(', ') : '—'}</td>
      <td>${c.n ? c.pts : '—'}</td>
    </tr>`).join('');

  let running = 0;
  const weekRows = p.picks.slice().sort((a,b) => a.week - b.week).map(pk => {
    const wp = pk.result ? PTS[pk.result] : null;
    if(wp !== null) running += wp;
    const res = pk.result ? `<span class="pl-res pl-res--${pk.result}">${pk.result}</span>` : '<span class="pl-res">TBD</span>';
    return `<tr>
      <td class="pos">${pk.week}</td>
      <td class="name-cell">${plClubLink(pk.team, `${plLogo(pk.team, 18)} ${pk.team}`)}</td>
      <td>${pk.opponent ? (pk.venue === 'A' ? 'at ' : 'vs ') + pk.opponent : '—'}</td>
      <td>${pk.score || '—'}</td>
      <td>${res}</td>
      <td>${wp === null ? '—' : wp}</td>
      <td><strong>${running}</strong></td>
    </tr>`;
  }).join('');

  el.innerHTML = `
    <p class="muted"><strong>${pts} pts</strong> · ${count('W')}–${count('D')}–${count('L')} · ${rank === 1 ? '1st' : rank === 2 ? '2nd' : rank === 3 ? '3rd' : rank + 'th'} of ${s.players.length}</p>
    <h3>Clubs Picked</h3>
    <div class="table-scroll"><table>
      <thead><tr><th>Club</th><th>Times Picked</th><th>Left</th><th>Weeks</th><th>Pts</th></tr></thead>
      <tbody>${clubRows}</tbody>
    </table></div>
    <h3>Weekly Picks</h3>
    ${p.picks.length ? `<div class="table-scroll"><table>
      <thead><tr><th>Wk</th><th>Club</th><th>Opponent</th><th>Score</th><th>Result</th><th>Pts</th><th>Total</th></tr></thead>
      <tbody>${weekRows}</tbody>
    </table></div>` : '<p class="muted">No picks yet.</p>'}
    <p style="margin-top:24px;"><a href="premier-league.html">&larr; Back to Premier Pick 2</a></p>`;
}

// Club page: a club's results so far and its remaining fixtures, from PREMIER_LEAGUE[year].fixtures/results.
function renderPremierLeagueClub(containerId){
  const el = document.getElementById(containerId);
  if(!el || typeof PREMIER_LEAGUE === 'undefined') return;
  const params = new URLSearchParams(window.location.search);
  const years = Object.keys(PREMIER_LEAGUE).sort((a,b) => b - a);
  const year = (params.get('year') && PREMIER_LEAGUE[params.get('year')]) ? params.get('year') : years[0];
  const s = PREMIER_LEAGUE[year];
  const club = params.get('club');
  if(!s || !club || !(s.clubs || []).includes(club)){
    el.innerHTML = `<p class="muted">Club not found. <a href="premier-league-table.html">Back to the League Table</a></p>`;
    return;
  }

  document.title = `${club} | Premier Pick 2 | League of NARPS`;
  const titleEl = document.getElementById('pl-club-title');
  if(titleEl) titleEl.textContent = club;
  const subEl = document.getElementById('pl-club-sub');
  if(subEl) subEl.textContent = `${s.season} Premier League`;
  const id = (typeof PL_LOGO_ID !== 'undefined') ? PL_LOGO_ID[club] : null;
  const crestEl = document.querySelector('.title-logo');
  if(crestEl && id){ crestEl.src = `https://a.espncdn.com/i/teamlogos/soccer/500/${id}.png`; crestEl.alt = club; crestEl.classList.add('pl-logo'); }

  const nameHtml = team => {
    const short = (typeof PL_SHORT_NAME !== 'undefined') ? PL_SHORT_NAME[team] : null;
    return short ? `<span class="pl-name-full">${team}</span><span class="pl-name-short">${short}</span>` : team;
  };
  const opp = (team, home) => `${home ? 'vs' : 'at'} ${plClubLink(team, `${plLogo(team, 18)} ${nameHtml(team)}`)}`;
  const dateFmt = new Intl.DateTimeFormat('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  const timeFmt = new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: '2-digit' });

  // Kickoff lookup so played games can show their date.
  const kickoff = {};
  Object.values(s.fixtures || {}).forEach(fx => fx.forEach(([ko, h, a]) => { kickoff[h + '|' + a] = ko; }));

  // Results: every entered match involving the club, in matchweek order.
  const played = new Set();
  const results = [];
  Object.keys(s.results || {}).map(Number).sort((a,b) => a - b).forEach(w => {
    s.results[w].forEach(([h, hg, ag, a]) => {
      if(h !== club && a !== club) return;
      played.add(h + '|' + a);
      const home = h === club, f = home ? hg : ag, g = home ? ag : hg;
      results.push({ w, home, opp: home ? a : h, f, g, res: f > g ? 'W' : f === g ? 'D' : 'L', ko: kickoff[h + '|' + a] });
    });
  });

  // Remaining fixtures: anything on the schedule without an entered result.
  const upcoming = [];
  Object.keys(s.fixtures || {}).map(Number).sort((a,b) => a - b).forEach(w => {
    s.fixtures[w].forEach(([ko, h, a]) => {
      if((h !== club && a !== club) || played.has(h + '|' + a)) return;
      upcoming.push({ w, ko, home: h === club, opp: h === club ? a : h });
    });
  });
  upcoming.sort((a,b) => Date.parse(a.ko) - Date.parse(b.ko));

  const lastWeek = Math.max(0, ...Object.keys(s.results || {}).map(Number));
  const table = plStandingsAfter(s, lastWeek);
  const pos = table.findIndex(r => r.club === club) + 1;
  const r = table[pos - 1];
  const ord = n => n + (n % 100 >= 11 && n % 100 <= 13 ? 'th' : ['th','st','nd','rd'][n % 10] || 'th');
  const fmtGd = v => v > 0 ? '+' + v : v < 0 ? '−' + Math.abs(v) : '0';
  const usage = (s.players || []).map(p => {
    const wks = p.picks.filter(pk => pk.team === club).map(pk => pk.week);
    return `<span style="white-space:nowrap;"><span class="pl-pick-chip pl-pick-chip--${p.name}${wks.length >= 2 ? ' pl-pick-chip--max' : ''}">${p.name} ${wks.length}/2</span>${wks.length ? ` <span class="muted" style="font-size:0.8rem;">Wk ${wks.join(', ')}</span>` : ''}</span>`;
  }).join(' &nbsp; ');

  const resultRows = results.map(x => `<tr>
      <td class="pos">${x.w}</td>
      <td>${x.ko ? dateFmt.format(new Date(x.ko)) : '—'}</td>
      <td class="name-cell">${opp(x.opp, x.home)}</td>
      <td><strong>${x.f}–${x.g}</strong></td>
      <td><span class="pl-res pl-res--${x.res}">${x.res}</span></td>
    </tr>`).join('');
  const upcomingRows = upcoming.map(x => `<tr>
      <td class="pos">${x.w}</td>
      <td>${dateFmt.format(new Date(x.ko))}</td>
      <td>${timeFmt.format(new Date(x.ko))}</td>
      <td class="name-cell">${opp(x.opp, x.home)}</td>
    </tr>`).join('');

  el.innerHTML = `
    <p class="muted">${r && r.p ? `<strong>${ord(pos)}</strong> · ${r.pts} pts · ${r.w}–${r.d}–${r.l} · GD ${fmtGd(r.gd)} &nbsp;·&nbsp; ` : ''}Picked: ${usage}</p>
    <h3>Results</h3>
    ${results.length ? `<div class="table-scroll"><table class="pl-club-table">
      <thead><tr><th>Wk</th><th>Date</th><th>Opponent</th><th>Score</th><th>Result</th></tr></thead>
      <tbody>${resultRows}</tbody>
    </table></div>` : '<p class="muted">No results yet.</p>'}
    <h3>Upcoming Fixtures</h3>
    ${upcoming.length ? `<div class="table-scroll"><table class="pl-club-table">
      <thead><tr><th>Wk</th><th>Date</th><th>Kickoff</th><th>Opponent</th></tr></thead>
      <tbody>${upcomingRows}</tbody>
    </table></div>
    <p class="muted" style="font-size:0.8rem; margin-top:10px;">Kickoff times in your local time zone. Times for later matchweeks are provisional and may move for TV.</p>` : '<p class="muted">No fixtures remaining.</p>'}
    <p style="margin-top:24px;"><a href="premier-league-table.html">&larr; Back to the League Table</a></p>`;
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

  document.title = `${year} NFL Survivor | League of NARPS`;

  const yearSwitcher = years.length > 1 ? `<div style="margin-bottom:24px;">
    <select id="survivor-year-select" style="font-family:var(--mono); font-size:0.85rem; padding:8px 14px; border-radius:8px; border:1px solid var(--line); background:var(--panel); color:var(--text); cursor:pointer;">
      ${years.map(y => `<option value="${y}" ${y === year ? 'selected' : ''}>${y}</option>`).join('')}
    </select>
  </div>` : '';

  const sorted = s.players.slice().sort((a,b) => {
    if(a.result === 'Winner') return -1;
    if(b.result === 'Winner') return 1;
    return (b.eliminatedWeek || 0) - (a.eliminatedWeek || 0);
  });

  const champCard = s.champion ? `<div class="trophy-case">
    <div class="plaque">
      <div class="yr">${year} SURVIVOR CHAMPION</div>
      <div class="owner">${s.champion}</div>
      <div class="team">Last one standing</div>
    </div>
  </div>` : '';

  const leaderboardRows = sorted.map((p, i) => {
    const result = p.result === 'Winner' ? '<span class="champ-tag">Winner</span>'
      : p.result === 'Active' ? 'Active, no picks yet'
      : `Eliminated Week ${p.eliminatedWeek}`;
    const lossPicks = p.picks.filter(pk => pk.loss);
    const losingPick = lossPicks.length
      ? `<div style="display:flex; gap:6px; justify-content:center; flex-wrap:wrap;">${lossPicks.map(pk => nflLogo(pk.team, { size: 29, loss: true })).join('')}</div>`
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

  const hasPicks = sorted.some(p => p.picks.length > 0);
  const actualMaxWeek = hasPicks ? Math.max(...sorted.flatMap(p => p.picks.map(pk => pk.week))) : 0;
  const maxWeek = year === '2026' ? Math.max(10, actualMaxWeek) : actualMaxWeek;
  const weekCols = Array.from({ length: maxWeek }, (_, i) => i + 1);
  const revealTimes = s.weekRevealTimes || {};
  const now = Date.now();
  const isLocked = (w) => {
    const rt = revealTimes[w];
    return rt ? now < new Date(rt).getTime() : false;
  };
  // Per-team early reveal (e.g. a Thursday-night game) overrides the weekly reveal time
  const teamRevealTimes = s.teamRevealTimes || {};
  const pickRevealTime = (w, team) => (teamRevealTimes[w] && teamRevealTimes[w][team]) || revealTimes[w];
  const isPickLocked = (w, team) => {
    const rt = pickRevealTime(w, team);
    return rt ? now < new Date(rt).getTime() : false;
  };

  const pinnedNames = ['Aaron', 'Zach', 'Ronnie'];
  const picksSorted = sorted.slice().sort((a,b) => {
    // Every year: survivors on top; eliminated players by most recent elimination, earliest at the bottom
    const aOut = a.result === 'Eliminated', bOut = b.result === 'Eliminated';
    if(aOut !== bOut) return aOut ? 1 : -1;
    if(aOut && bOut) return ((b.eliminatedWeek || 0) - (a.eliminatedWeek || 0)) || a.name.localeCompare(b.name);
    const aIdx = pinnedNames.indexOf(a.name);
    const bIdx = pinnedNames.indexOf(b.name);
    if(aIdx !== -1 || bIdx !== -1){
      if(aIdx === -1) return 1;
      if(bIdx === -1) return -1;
      return aIdx - bIdx;
    }

    const aLoss = a.picks.some(pk => pk.loss);
    const bLoss = b.picks.some(pk => pk.loss);
    if(aLoss !== bLoss) return aLoss ? 1 : -1;

    const aLatest = a.picks.length ? a.picks[a.picks.length - 1].team : null;
    const bLatest = b.picks.length ? b.picks[b.picks.length - 1].team : null;
    if(aLatest && !bLatest) return -1;
    if(!aLatest && bLatest) return 1;
    if(aLatest && bLatest && aLatest !== bLatest) return aLatest.localeCompare(bLatest);
    return a.name.localeCompare(b.name);
  });

  const picksTableRows = picksSorted.map(p => {
    const cells = weekCols.map(w => {
      const pk = p.picks.find(x => x.week === w);
      if(!pk){
        if(year === '2026' && p.result === 'Eliminated' && p.eliminatedWeek != null && w > p.eliminatedWeek){
          return `<td class="pos center" title="Eliminated Week ${p.eliminatedWeek}" style="color:var(--red); font-weight:700; font-size:1.1rem;">X</td>`;
        }
        return `<td class="pos center">—</td>`;
      }
      if(isPickLocked(w, pk.team)) return `<td class="pos center" title="Picks reveal ${new Date(pickRevealTime(w, pk.team)).toLocaleString('en-US', { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit', timeZone: 'America/New_York' })} ET">🔒</td>`;
      return `<td class="pos center">${nflLogo(pk.team, { size: 29, loss: pk.loss })}<div class="pick-name">${pk.team}</div></td>`;
    }).join('');
    return `<tr>
      <td class="name-cell picks-name-cell">${p.name}</td>
      ${cells}
    </tr>`;
  }).join('');

  const lockedWeeks = weekCols.filter(isLocked);
  const lockNote = lockedWeeks.length ? `<p class="muted" style="font-size:0.85rem; margin-bottom:12px;">🔒 Week ${lockedWeeks.join(', ')} picks are locked and will reveal ${new Date(revealTimes[lockedWeeks[0]]).toLocaleString('en-US', { weekday: 'long', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit', timeZone: 'America/New_York' })} ET.</p>` : '';

  const picksTable = hasPicks ? `<div class="table-scroll"><table>
    <thead><tr><th>Player</th>${weekCols.map(w => `<th class="center">Wk ${w}</th>`).join('')}</tr></thead>
    <tbody>${picksTableRows}</tbody>
  </table></div>` : `<p class="muted">No picks made yet.</p>`;

  const leaderboardSection = year === '2026' ? '' : `
    <h2 class="section-title" style="margin-top:40px;">${year} Leaderboard</h2>
    ${leaderboard}`;

  el.innerHTML = `
    ${yearSwitcher}
    ${champCard}
    ${leaderboardSection}
    <h2 class="section-title" style="margin-top:40px;">Weekly Picks</h2>
    <p class="muted" style="font-size:0.85rem; margin-bottom:12px;">Every pick each player made, week by week. Losses are struck through. Two losses and you're out.</p>
    ${lockNote}
    ${picksTable}
  `;

  const select = document.getElementById('survivor-year-select');
  if(select){
    select.addEventListener('change', () => {
      window.location.href = `survivor.html?year=${select.value}`;
    });
  }
}

// ---------- Players and games (shared by team and player pages) ----------
function playerHref(name){ return `player.html?name=${encodeURIComponent(name)}`; }
function playerLink(name){ return `<a class="player-link" href="${playerHref(name)}">${name}</a>`; }

// Every played game (regular season and playoffs) with both owners' TEAMS keys.
function allPlayedGames(){
  const keyByLast = {};
  TEAMS.forEach(t => { keyByLast[lastNameOf(t.owner)] = t.key; });
  const out = [];
  Object.keys(SEASONS).sort().forEach(y => {
    const s = SEASONS[y];
    const add = (g, week, playoff) => {
      if(!(g.awayScore || g.homeScore)) return;
      out.push({ year: +y, week, playoff, g, awayKey: keyByLast[lastNameOf(g.awayMgr)], homeKey: keyByLast[lastNameOf(g.homeMgr)] });
    };
    Object.entries(s.schedule || {}).forEach(([wk, gs]) => gs.forEach(g => add(g, wk, false)));
    Object.values(s.playoffs || {}).forEach(r => (r.games || []).forEach(g => add(g, (r.label || '').replace(/^.*\(|\)$/g, ''), r.label || 'Playoffs')));
  });
  return out;
}

// ---------- NFL player pages ----------
// Built from box scores (2017 onward) and draft history (2011 onward). Names are matched
// loosely (case, periods, apostrophes, Jr./Sr./II/III) so "Kyle Pitts" and "Kyle Pitts Sr." meet.
function normPlayerName(n){
  return (n || '').toLowerCase().replace(/[.'’]/g, '').replace(/\b(jr|sr|ii|iii|iv|v)\b/g, '').replace(/\s+/g, ' ').trim();
}
function buildPlayerIndex(){
  if(typeof attachBoxscores === 'function') attachBoxscores();
  const keyByLast = {};
  TEAMS.forEach(t => { keyByLast[lastNameOf(t.owner)] = t.key; });
  const idx = {};
  const get = (name, pos) => {
    const k = normPlayerName(name);
    const o = idx[k] = idx[k] || { key: k, name, pos: pos || '', starts: [], bench: [], drafts: [] };
    if(pos && !o.pos) o.pos = pos;
    return o;
  };
  allPlayedGames().forEach(x => {
    const b = x.g.boxscore; if(!b) return;
    ['away', 'home'].forEach(side => {
      const other = side === 'away' ? 'home' : 'away';
      const ctx = { year: x.year, week: x.week, playoff: x.playoff, ownerKey: x[side + 'Key'], team: x.g[side],
        opp: x.g[other], oppKey: x[other + 'Key'], teamScore: x.g[side + 'Score'], oppScore: x.g[other + 'Score'] };
      (b[side] || []).forEach(p => { const o = get(p.player, p.pos); o.name = p.player; o.starts.push({ ...ctx, slot: p.slot, pts: p.pts }); });
      (b[side + 'Bench'] || []).forEach(p => { get(p.player, p.pos).bench.push({ ...ctx, pts: p.pts }); });
    });
  });
  if(typeof DRAFT_HISTORY !== 'undefined') Object.entries(DRAFT_HISTORY).forEach(([y, list]) => list.forEach(d => {
    get(d.player, d.position).drafts.push({ year: +y, round: d.round, pick: d.pick, overall: d.overall, ownerKey: keyByLast[lastNameOf(d.owner)], team: d.fantasyTeam, nfl: d.nflTeam });
  }));
  return idx;
}

function renderPlayerPage(containerId){
  const el = document.getElementById(containerId);
  if(!el) return;
  const idx = buildPlayerIndex();
  const all = Object.values(idx);
  const ownerOf = {}; TEAMS.forEach(t => { ownerOf[t.key] = t; });
  const ownerLink = k => ownerOf[k] ? `<a href="team.html?team=${encodeURIComponent(k)}" class="owner-link">${ownerOf[k].owner}</a>` : '–';
  const f1 = v => v.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  const sum = arr => arr.reduce((a, x) => a + x.pts, 0);
  const weekNum = w => { const m = String(w).match(/(\d+)/); return m ? m[1] : ''; };
  const gameLink = s => `season.html?year=${s.year}${s.playoff ? '#playoffs' : `&week=${weekNum(s.week)}#schedule`}`;

  const names = all.map(o => o.name).sort((a, b) => a.localeCompare(b));
  const search = `<div class="player-search">
    <label for="player-q" class="sr-only">Find a player</label>
    <input id="player-q" type="search" list="player-names" placeholder="Find a player" autocomplete="off">
    <datalist id="player-names">${names.map(n => `<option value="${n.replace(/"/g, '&quot;')}">`).join('')}</datalist>
    <p class="player-search-msg muted" hidden>No NARPS starts or draft picks found for that name.</p>
  </div>`;
  const wireSearch = () => {
    const q = el.querySelector('#player-q'), msg = el.querySelector('.player-search-msg');
    const go = () => {
      const hit = idx[normPlayerName(q.value)];
      if(hit){ window.location.href = playerHref(hit.name); } else if(q.value.trim()){ msg.hidden = false; }
    };
    q.addEventListener('change', go);
    q.addEventListener('keydown', e => { if(e.key === 'Enter') go(); });
    q.addEventListener('input', () => { msg.hidden = true; });
  };

  const titleEl = document.getElementById('player-title');
  const subEl = document.getElementById('player-subtitle');
  const want = new URLSearchParams(window.location.search).get('name');
  const pl = want ? idx[normPlayerName(want)] : null;

  if(!pl){
    // Index: search plus the all-time leaders in points started.
    document.title = 'Players | League of NARPS';
    if(titleEl) titleEl.textContent = 'Players';
    const back = document.getElementById('player-back'); if(back && !want) back.hidden = true;
    if(subEl) subEl.textContent = 'Every NFL player started in a NARPS box score (2017 onward) or drafted (2011 onward)';
    const leaders = all.filter(o => o.starts.length).sort((a, b) => sum(b.starts) - sum(a.starts)).slice(0, 50);
    el.innerHTML = `${want ? `<p class="muted">No NARPS starts or draft picks found for “${want.replace(/</g, '&lt;')}”.</p>` : ''}
      ${search}
      <h3 class="rules-h" style="margin-top:28px;">Most Points Started, 2017 Onward</h3>
      <div class="table-scroll"><table>
        <thead><tr><th>#</th><th>Player</th><th>Pos</th><th class="num">Starts</th><th class="num">Points</th><th class="num">Avg</th><th>Started For</th></tr></thead>
        <tbody>${leaders.map((o, i) => {
          const owners = [...new Set(o.starts.map(x => x.ownerKey))];
          return `<tr><td class="pos">${i + 1}</td><td class="name-cell">${playerLink(o.name)}</td><td>${o.pos}</td>
            <td class="num">${o.starts.length}</td><td class="num">${f1(sum(o.starts))}</td><td class="num">${f1(sum(o.starts) / o.starts.length)}</td>
            <td>${owners.length === 1 ? ownerLink(owners[0]) : `${owners.length} owners`}</td></tr>`;
        }).join('')}</tbody>
      </table></div>`;
    wireSearch();
    return;
  }

  document.title = `${pl.name} | League of NARPS`;
  if(titleEl) titleEl.textContent = pl.name;
  const startYears = [...new Set(pl.starts.map(x => x.year))].sort();
  if(subEl) subEl.textContent = [pl.pos, startYears.length ? `NARPS starts ${startYears[0]}${startYears.length > 1 ? '–' + startYears[startYears.length - 1] : ''}` : ''].filter(Boolean).join(' · ');

  const total = sum(pl.starts), best = pl.starts.slice().sort((a, b) => b.pts - a.pts)[0];
  const benchPts = sum(pl.bench);
  const firstDraft = pl.drafts.slice().sort((a, b) => a.overall - b.overall)[0];
  const cards = `<div class="card-grid" style="margin-bottom:32px;">
    <div class="award-card"><div class="medal">NARPS Starts</div><div class="headline-stat">${pl.starts.length}</div><p>${startYears.length ? `${startYears.length} season${startYears.length > 1 ? 's' : ''}, regular season and playoffs` : 'No starts in box scores (2017 onward)'}</p></div>
    <div class="award-card"><div class="medal">Points Started</div><div class="headline-stat">${f1(total)}</div><p>${pl.starts.length ? `${f1(total / pl.starts.length)} per start` : '–'}</p></div>
    <div class="award-card"><div class="medal">Best Game</div><div class="headline-stat">${best ? f1(best.pts) : '–'}</div><p>${best ? `${best.year} ${best.week} for ${ownerOf[best.ownerKey] ? ownerOf[best.ownerKey].owner : best.team}` : 'No starts recorded'}</p></div>
    <div class="award-card"><div class="medal">Times Drafted</div><div class="headline-stat">${pl.drafts.length}</div><p>${firstDraft ? `Highest pick: No. ${firstDraft.overall} (${firstDraft.year})` : 'Never drafted in NARPS'}</p></div>
    ${pl.bench.length ? `<div class="award-card"><div class="medal">Bench Points</div><div class="headline-stat">${f1(benchPts)}</div><p>${pl.bench.length} week${pl.bench.length > 1 ? 's' : ''} on a NARPS bench</p></div>` : ''}
  </div>`;

  const byYear = {};
  pl.starts.forEach(x => { (byYear[x.year] = byYear[x.year] || []).push(x); });
  const seasonRows = Object.keys(byYear).sort((a, b) => b - a).map(y => {
    const list = byYear[y], owners = [...new Set(list.map(x => x.ownerKey))], b = list.slice().sort((a, c) => c.pts - a.pts)[0];
    return `<tr><td class="pos"><a class="year-link" href="season.html?year=${y}">${y}</a></td><td>${owners.map(ownerLink).join(', ')}</td>
      <td class="num">${list.length}</td><td class="num">${f1(sum(list))}</td><td class="num">${f1(sum(list) / list.length)}</td><td>${f1(b.pts)} <span class="muted">${b.week}</span></td></tr>`;
  }).join('');

  const byOwner = {};
  pl.starts.forEach(x => { (byOwner[x.ownerKey] = byOwner[x.ownerKey] || []).push(x); });
  const ownerRows = Object.entries(byOwner).sort((a, b) => sum(b[1]) - sum(a[1])).map(([k, list]) => {
    const w = list.filter(x => x.teamScore > x.oppScore).length, l = list.filter(x => x.teamScore < x.oppScore).length;
    return `<tr><td class="name-cell">${ownerLink(k)}</td><td class="num">${list.length}</td><td class="num">${f1(sum(list))}</td><td>${w}-${l}</td></tr>`;
  }).join('');

  const topGames = pl.starts.slice().sort((a, b) => b.pts - a.pts).slice(0, 10).map(x => `<tr>
    <td class="num">${f1(x.pts)}</td><td><a class="year-link" href="${gameLink(x)}">${x.year} ${x.week}</a></td>
    <td>${ownerLink(x.ownerKey)}</td>
    <td><span class="h2h-res h2h-${x.teamScore > x.oppScore ? 'w' : x.teamScore < x.oppScore ? 'l' : 't'}">${x.teamScore > x.oppScore ? 'W' : x.teamScore < x.oppScore ? 'L' : 'T'}</span> ${f1(x.teamScore)}–${f1(x.oppScore)} vs ${x.opp}</td></tr>`).join('');

  const draftRows = pl.drafts.slice().sort((a, b) => b.year - a.year).map(d => `<tr>
    <td class="pos"><a class="year-link" href="draft.html?year=${d.year}">${d.year}</a></td><td>Rd ${d.round}, Pk ${d.pick} <span class="muted">(No. ${d.overall})</span></td>
    <td>${ownerLink(d.ownerKey)}</td><td>${d.team}</td><td>${d.nfl || ''}</td></tr>`).join('');

  const section = (title, note, head, rows) => rows ? `<h2 class="section-title" style="margin-top:40px;">${title}</h2>
    ${note ? `<p class="muted" style="font-size:0.85rem; margin-bottom:12px;">${note}</p>` : ''}
    <div class="table-scroll"><table><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table></div>` : '';

  el.innerHTML = `${search}${cards}
    ${section('By Season', 'Starts only. Box scores begin in 2017.', '<th>Year</th><th>Started For</th><th class="num">Starts</th><th class="num">Points</th><th class="num">Avg</th><th>Best</th>', seasonRows)}
    ${section('By Owner', 'Record is the owner\'s result in the weeks they started him.', '<th>Owner</th><th class="num">Starts</th><th class="num">Points</th><th>Record</th>', ownerRows)}
    ${section('Top Games', '', '<th class="num">Pts</th><th>Week</th><th>Started For</th><th>Result</th>', topGames)}
    ${section('Draft History', '', '<th>Year</th><th>Pick</th><th>Owner</th><th>Fantasy Team</th><th>NFL</th>', draftRows)}`;
  wireSearch();
}

// ---------- Head-to-head (computed from verified season data) ----------
function lastNameOf(n){ return (n || '').trim().split(/\s+/).pop().toLowerCase(); }

// ---------- Final season placement ----------
// Final league finish for every team in a completed season, keyed by owner last name.
// 1st-3rd come from champion/second/third, 4th is the 3rd-place-game loser. Other playoff
// teams rank by how far they advanced (later elimination round = better), then by
// regular-season standing. Non-playoff teams follow in regular-season standing order.
function finalPlacements(s){
  const ln = n => (n || '').trim().split(/\s+/).pop().toLowerCase();
  const out = {};
  const taken = new Set();
  const set = (name, place) => { const k = ln(name); if(k && !taken.has(k)){ out[k] = place; taken.add(k); } };
  set(s.champion && s.champion.owner, 1);
  set(s.second && s.second.owner, 2);
  set(s.third && s.third.owner, 3);
  const playoffs = s.playoffs || {};
  (playoffs.thirdPlace && playoffs.thirdPlace.games || []).forEach(g => {
    set(g.awayScore > g.homeScore ? g.homeMgr : g.awayMgr, 4);
  });
  const standIdx = {};
  (s.standings || []).forEach((r, i) => { standIdx[ln(r.owner)] = i; });
  const elim = {};
  Object.keys(playoffs).filter(k => k !== 'thirdPlace').sort().forEach((k, ri) => {
    (playoffs[k].games || []).forEach(g => {
      if(g.awayScore === g.homeScore) return;
      const loser = ln(g.awayScore > g.homeScore ? g.homeMgr : g.awayMgr);
      if(!taken.has(loser)) elim[loser] = ri;
    });
  });
  let next = taken.size + 1;
  Object.keys(elim).sort((a, b) => (elim[b] - elim[a]) || ((standIdx[a] ?? 99) - (standIdx[b] ?? 99)))
    .forEach(k => { out[k] = next++; taken.add(k); });
  (s.standings || []).forEach(r => { const k = ln(r.owner); if(!taken.has(k)){ out[k] = next++; taken.add(k); } });
  return out;
}

// ---------- Derived franchise playoff stats ----------
// Byes and championship-game appearances/record are computed from each season's
// playoff bracket (SEASONS[year].playoffs) instead of being hand-entered on TEAMS,
// so they update automatically when a new season's playoffs are added to data.js.
// A bye is any team listed in a round's `byes`; a championship game is any game in a
// round whose label contains "Championship" (the 3rd-place round is excluded).
function applyDerivedPlayoffStats(){
  if(typeof TEAMS === 'undefined' || typeof SEASONS === 'undefined') return;
  const keyByLast = {};
  TEAMS.forEach(t => {
    keyByLast[lastNameOf(t.owner)] = t.key;
    t.byes = 0; t.champGameApp = 0; t.champGameW = 0; t.champGameL = 0;
  });
  const byKey = {};
  TEAMS.forEach(t => { byKey[t.key] = t; });
  const normTeam = n => (n || '').replace(/^The\s+/i, '').trim().toLowerCase();
  Object.values(SEASONS).forEach(s => {
    const ownerByTeam = {};
    (s.standings || []).forEach(r => { ownerByTeam[normTeam(r.team)] = r.owner; });
    Object.entries(s.playoffs || {}).forEach(([roundKey, round]) => {
      (round.byes || []).forEach(b => {
        const t = byKey[keyByLast[lastNameOf(ownerByTeam[normTeam(b.team)])]];
        if(t) t.byes++;
      });
      if(roundKey === 'thirdPlace' || !/championship/i.test(round.label || '')) return;
      (round.games || []).forEach(g => {
        const away = byKey[keyByLast[lastNameOf(g.awayMgr)]];
        const home = byKey[keyByLast[lastNameOf(g.homeMgr)]];
        [away, home].forEach(t => { if(t) t.champGameApp++; });
        if(g.awayScore === g.homeScore) return;
        const [w, l] = g.awayScore > g.homeScore ? [away, home] : [home, away];
        if(w) w.champGameW++;
        if(l) l.champGameL++;
      });
    });
  });
}
applyDerivedPlayoffStats();

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
        // Skip placeholder/unplayed games (0-0) so an in-progress season's
        // future weeks don't inject phantom ties into streak calculations.
        if(g.awayScore === 0 && g.homeScore === 0) return;
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
        // Skip placeholder/unplayed games (0-0) so future weeks of an
        // in-progress season don't pollute weekly scoring titles or blowout data.
        if(g.awayScore === 0 && g.homeScore === 0) return;
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
    // Only credit a scoring title once the season has actually concluded —
    // an in-progress season (placeholder "TBD" champion) hasn't been decided yet.
    if(seasonLeaderEntry && s.champion && s.champion.owner !== 'TBD'){
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

  const rankLine = (place, tier, fmt) => tier ? `<div class="rank-line"><span class="rank-num">${place}</span>${(fmt||fmtNum)(tier.value)} · ${joinNames(tierNames(tier))}</div>` : '';

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
    buildCard('Regular Season', 'Most Regular Season Wins', regWinEntries, { body: n => `${n}: most regular season wins in league history.` }),
    buildCard('Regular Season', 'Most Regular Season Points', regPtsEntries, { body: n => `${n}: most total regular season points scored, career.` }),
    buildCard('Single Season', 'Most Wins in a Season', seasonWinEntries, { body: n => `${n}: most regular season wins in a single year.` }),
    buildCard('Single Season', 'Most Points Scored in a Season', seasonPtsEntries, { forceDecimal: true, body: n => `${n}: most total regular season points in a single year.` }),
    buildCard('Single Season', 'Most Scoring Titles', scoringTitleEntries, { body: n => `${n}: led the league in points scored the most times.` }),
    buildCard('Weekly', 'Most Weekly Scoring Titles', weeklyTitleEntries, { body: n => `${n}: most weeks leading the league in scoring, career.` }),
    buildCard('Playoffs', 'Most Playoff Appearances', playoffAppEntries, { body: n => `${n}: most playoff appearances in league history.` }),
    buildCard('Playoffs', 'Most Playoff Wins', playoffWinEntries, { body: n => `${n}: most playoff wins in league history.` }),
    buildCard('Playoffs', 'Most Playoff Points', playoffPtsEntries, { body: n => `${n}: most total points scored across all playoff games.` }),
    buildCard('Championships', 'Most Championships', champEntries, { body: n => `${n}: most league titles won.` }),
    buildCard('Championships', 'Most Top-3 Finishes', top3Entries, { body: n => `${n}: most 1st, 2nd, or 3rd place finishes.` }),
    buildCard('Single Game', 'Highest Scoring Week (Regular Season)', highScoreEntries, { forceDecimal: true, body: n => `${n}: highest single-week score in league history.` }),
    buildCard('Single Game', 'Lowest Scoring Week (Regular Season)', lowScoreEntries, { dir: 'asc', body: n => `${n}: lowest single-week score in league history.` }),
    buildCard('Single Game', 'Biggest Blowout (Regular Season)', blowoutDisplayEntries, { forceDecimal: true, body: n => `${n}: largest margin of victory in a single game, regular season.` }),
    buildCard('Consistency', 'Most 100+ Point Weeks (Regular Season)', hundredEntries, { body: n => `${n}: most weeks scoring 100+ points, career.` }),
    buildCard('Streaks', 'Longest Regular Season Winning Streak', winStreakEntries, { body: n => `${n}: longest run of consecutive regular season wins, can span multiple seasons.` }),
    buildCard('Streaks', 'Longest Regular Season Losing Streak', lossStreakEntries, { body: n => `${n}: longest run of consecutive regular season losses, can span multiple seasons.` }),
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
    // Skip games that haven't been played yet (placeholder 0-0 scores for
    // future/unplayed weeks, e.g. the current season's schedule loaded ahead of time).
    if(g.awayScore === 0 && g.homeScore === 0) return;
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

  document.title = `${year} Draft | League of NARPS`;

  const yearSwitcher = `<div style="margin-bottom:24px;">
    <select id="draft-year-select" style="font-family:var(--mono); font-size:0.85rem; padding:8px 14px; border-radius:8px; border:1px solid var(--line); background:var(--panel); color:var(--text); cursor:pointer;">
      ${years.map(y => `<option value="${y}" ${y === year ? 'selected' : ''}>${y}</option>`).join('')}
    </select>
  </div>`;

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
      <td class="name-cell">${playerLink(p.player)}</td>
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
    </table></div>`;

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

  const select = document.getElementById('draft-year-select');
  if(select){
    select.addEventListener('change', () => {
      window.location.href = `draft.html?year=${select.value}`;
    });
  }
}

// ---------- Rules & Bylaws History ----------
function renderRulesHistory(containerId){
  const el = document.getElementById(containerId);
  if(!el) return;
  document.title = 'Rules & Bylaws | League of NARPS';

  // Give every vote a stable id: <year>-<n>, n counting through all of that year's rounds.
  const years = RULES_HISTORY.slice().sort((a,b) => b.year - a.year);
  const all = [];
  years.forEach(y => {
    let n = 0;
    y.rounds.forEach(r => r.votes.forEach(v => { n++; all.push({ ...v, year: y.year, round: r.label, id: `${y.year}-${n}` }); }));
  });

  const status = v => {
    if(v.passed === true) return 'passed';
    if(v.passed === false) return 'nochange';
    if(/tie|runoff|no majority/i.test(v.result || '')) return 'tie';
    if(/moot/i.test(v.result || '')) return 'nochange';
    return 'passed';
  };
  const statusLabel = { passed: 'Passed', nochange: 'No change', tie: 'Tie / Runoff' };
  const counts = v => v.options.map(o => { const m = o.match(/\((\d+)\)\s*$/); return m ? +m[1] : 0; });
  const split = v => {
    const c = counts(v).filter(x => x > 0).sort((a,b) => b - a);
    return c.length ? c.join('–') : '';
  };
  const share = v => { const c = counts(v); const t = c.reduce((a,b) => a + b, 0); return t ? Math.max(...c) / t : 0; };

  // ----- Current rules -----
  const payYear = typeof PAYOUT_RULES !== 'undefined' ? Object.keys(PAYOUT_RULES).sort().pop() : null;
  const pay = payYear ? PAYOUT_RULES[payYear] : null;
  const money = n => '$' + Number(n).toLocaleString('en-US');
  const groups = (typeof CURRENT_RULES !== 'undefined' ? CURRENT_RULES : []).slice();
  if(pay){
    groups.push({ group: 'Payouts', items: [
      { label: '1st place', value: money(pay.place[0]) },
      { label: '2nd place', value: money(pay.place[1]) },
      { label: '3rd place', value: money(pay.place[2]) },
      { label: 'Weekly high score', value: money(pay.weeklyHigh) },
      { label: 'Season points leader', value: money(pay.seasonTopScorer) },
      { label: 'Playoff berth', value: `${money(pay.playoffBerth)} each` }
    ]});
  }
  const src = it => it.vote ? `<a class="cr-src" href="#vote-${it.vote}" data-vote="${it.vote}" title="See the ${it.vote.split('-')[0]} vote">${it.vote.split('-')[0]}</a>` : '';
  let currentHtml = '';
  if(groups.length){
    currentHtml = `
    <h3 class="rules-h">Current Rules</h3>
    <div class="ct">
      <div class="ct-tabs" role="tablist">${groups.map((g,i) => `<button type="button" role="tab" class="ct-tab${i ? '' : ' active'}" data-i="${i}">${g.group}</button>`).join('')}</div>
      <div class="ct-panels">${groups.map((g,i) => `
        <div class="ct-panel" data-i="${i}"${i ? ' hidden' : ''}>
          <h4 class="ct-title">${g.group}</h4>
          <dl>${g.items.map(it => `<div class="ct-item"><dt>${it.label}</dt><dd>${it.value}</dd>${src(it) || '<span></span>'}</div>`).join('')}</dl>
        </div>`).join('')}
      </div>
    </div>`;
  }

  // ----- Vote history -----
  const cats = {};
  all.forEach(v => { cats[v.category] = (cats[v.category] || 0) + 1; });
  const catOrder = Object.keys(cats).sort((a,b) => cats[b] - cats[a]);
  const chips = `<div class="vt-filters" role="group" aria-label="Filter by topic">
    <button type="button" class="vt-chip active" data-cat="">All <span>${all.length}</span></button>
    ${catOrder.map(c => `<button type="button" class="vt-chip" data-cat="${c}">${c} <span>${cats[c]}</span></button>`).join('')}
  </div>`;

  const rows = years.map(y => {
    const votes = all.filter(v => v.year === y.year);
    return `<div class="vt-year" data-year="${y.year}">
      <div class="vt-year-label">${y.year}</div>
      ${votes.map(v => {
        const st = status(v);
        return `<details class="vt-row" id="vote-${v.id}" data-cat="${v.category}">
          <summary>
            <span class="vt-cat">${v.category}</span>
            <span class="vt-title">${v.short || v.question}</span>
            <span class="vt-result">${v.result || ''}</span>
            <span class="vt-split">${split(v) ? `${split(v)}<i style="--w:${Math.round(share(v)*100)}%"></i>` : ''}</span>
            <span class="vt-status vt-${st}">${statusLabel[st]}</span>
          </summary>
          <div class="vt-detail">
            <p class="vt-q">${v.question}</p>
            <ul class="vt-opts">${v.options.map(o => `<li>${o}</li>`).join('')}</ul>
            ${v.note ? `<p class="vt-note">${v.note}</p>` : ''}
            <p class="vt-round">${v.round}</p>
          </div>
        </details>`;
      }).join('')}
    </div>`;
  }).join('');

  // Show the most recent years by default; "Show all" (or picking a topic) reveals the rest.
  const RECENT_YEARS = 3;
  const recentYears = years.slice(0, RECENT_YEARS).map(y => y.year);
  const olderCount = all.filter(v => !recentYears.includes(v.year)).length;
  let expanded = false;
  el.innerHTML = currentHtml + `
    <h3 class="rules-h" style="margin-top:44px;">Vote History</h3>
    ${chips}
    <div class="vt-list">${rows}</div>
    ${olderCount ? `<button type="button" class="vt-more">Show ${olderCount} older votes (${years[years.length - 1].year}–${years[RECENT_YEARS] ? years[RECENT_YEARS].year : ''})</button>` : ''}`;
  const moreBtn = el.querySelector('.vt-more');
  const applyView = () => {
    const active = el.querySelector('.vt-chip.active');
    const cat = active ? active.dataset.cat : '';
    el.querySelectorAll('.vt-row').forEach(r => { r.hidden = !!cat && r.dataset.cat !== cat; });
    el.querySelectorAll('.vt-year').forEach(y => {
      const older = !recentYears.includes(+y.dataset.year);
      y.hidden = !y.querySelector('.vt-row:not([hidden])') || (older && !expanded && !cat);
    });
    if(moreBtn) moreBtn.hidden = expanded || !!cat;
  };
  const expandAll = () => { expanded = true; applyView(); };
  if(moreBtn) moreBtn.addEventListener('click', expandAll);
  applyView();

  el.querySelectorAll('.ct-tab').forEach(btn => btn.addEventListener('click', () => {
    el.querySelectorAll('.ct-tab').forEach(b => b.classList.toggle('active', b === btn));
    el.querySelectorAll('.ct-panel').forEach(p => { p.hidden = p.dataset.i !== btn.dataset.i; });
  }));
  el.querySelectorAll('.vt-chip').forEach(btn => btn.addEventListener('click', () => {
    el.querySelectorAll('.vt-chip').forEach(b => b.classList.toggle('active', b === btn));
    applyView();
  }));

  const openVote = id => {
    const row = document.getElementById('vote-' + id);
    if(!row) return;
    if(row.hidden){ const all = el.querySelector('.vt-chip[data-cat=""]'); if(all) all.click(); }
    if(!expanded) expandAll();
    row.open = true;
    row.scrollIntoView({ block: 'center' });
  };
  el.querySelectorAll('.cr-src').forEach(a => a.addEventListener('click', e => { e.preventDefault(); openVote(a.dataset.vote); history.replaceState(null, '', '#vote-' + a.dataset.vote); }));
  if(location.hash.startsWith('#vote-')) openVote(location.hash.slice(6));
  // Old links like rules.html?year=2018 jump to that year.
  const yr = new URLSearchParams(location.search).get('year');
  if(yr && !location.hash){ const y = el.querySelector(`.vt-year[data-year="${yr}"]`); if(y){ expandAll(); y.scrollIntoView(); } }
}

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initNavDropdowns();
  initThemeToggle();
});


// ---------- Homepage scoreboard strip (latest completed week) ----------
function renderScoreStrip(containerId){
  const el = document.getElementById(containerId);
  if(!el || typeof SEASONS === 'undefined') return;
  const year = Object.keys(SEASONS).sort((a,b) => b - a)[0];
  const s = SEASONS[year];
  const num = w => parseInt(w.slice(5), 10);
  const allWeeks = Object.keys(s.schedule || {}).filter(w => /^Week \d+$/.test(w)).sort((a,b) => num(a) - num(b));
  const scored = allWeeks.filter(w => s.schedule[w].some(g => g.awayScore || g.homeScore));
  const lastScored = scored[scored.length - 1];
  // Next week's matchups take over at 6:00 AM ET on the Thursday that NFL week starts (before TNF).
  const nextWk = allWeeks.find(w => !scored.includes(w) && (!lastScored || num(w) > num(lastScored)));
  const wk1 = (typeof NFL_WEEK1_THURSDAY !== 'undefined') && NFL_WEEK1_THURSDAY[year];
  const flipAt = w => wk1 ? new Date(wk1 + 'T10:00:00Z').getTime() + (num(w) - 1) * 7 * 864e5 : Infinity;
  const showUpcoming = nextWk && Date.now() >= flipAt(nextWk);
  if(!lastScored && !showUpcoming){ el.remove(); return; }
  const stripWeek = showUpcoming ? nextWk : lastScored;
  const link = `season.html?year=${year}&week=${num(stripWeek)}#schedule`;
  const rank = {};
  (s.standings || []).forEach((r, i) => { rank[r.team] = i + 1; });
  const rk = team => rank[team] ? `<span class="ss-rank">${rank[team]}</span>` : '';
  let label, games;
  if(showUpcoming){
    const rec = {};
    (s.standings || []).forEach(r => { rec[r.team] = `${r.w}-${r.l}${r.t ? '-' + r.t : ''}`; });
    const live = (typeof LIVE_SCORES !== 'undefined' && LIVE_SCORES[year] && LIVE_SCORES[year][nextWk]) || null;
    const row = live
      ? team => `<span class="ss-team"><span class="ss-name">${rk(team)}${team}</span><span class="ss-pts">${Number(live[team] || 0).toFixed(1)}</span></span>`
      : team => `<span class="ss-team"><span class="ss-name">${rk(team)}${team}</span><span class="ss-pts ss-rec">${rec[team] || ''}</span></span>`;
    label = `${nextWk}<span>${live ? 'In progress' : 'This week'}</span>`;
    const done = (typeof LIVE_FINAL !== 'undefined' && LIVE_FINAL[year] && LIVE_FINAL[year][nextWk]) || [];
    const finalRow = (team, won) => `<span class="ss-team${won ? ' won' : ''}"><span class="ss-name">${rk(team)}${team}</span><span class="ss-pts">${Number(live[team] || 0).toFixed(1)}</span></span>`;
    games = s.schedule[nextWk].map(g => {
      if(live && (done.includes(g.away) || done.includes(g.home))){
        const a = live[g.away] || 0, h = live[g.home] || 0;
        return `<a class="ss-game" href="${link}">${h > a ? finalRow(g.home, true) + finalRow(g.away, false) : finalRow(g.away, a > h) + finalRow(g.home, false)}</a>`;
      }
      return `<a class="ss-game" href="${link}">${row(g.away)}${row(g.home)}</a>`;
    }).join('');
  } else {
    const fmt = n => Number(n).toFixed(1);
    const row = (team, pts, won) => `<span class="ss-team${won ? ' won' : ''}"><span class="ss-name">${rk(team)}${team}</span><span class="ss-pts">${fmt(pts)}</span></span>`;
    label = `${lastScored}<span>Final</span>`;
    games = s.schedule[lastScored].map(g => `<a class="ss-game" href="${link}">
      ${g.homeScore > g.awayScore ? row(g.home, g.homeScore, true) + row(g.away, g.awayScore, false) : row(g.away, g.awayScore, g.awayScore > g.homeScore) + row(g.home, g.homeScore, false)}</a>`).join('');
  }
  el.innerHTML = `<div class="wrap ss-wrap">
    <a class="ss-label" href="${link}">${label}</a>
    <div class="ss-games">${games}</div>
  </div>`;
}

// ---------- Premier Pick 2: scoreboard strip (latest matchweek with results) ----------
function renderPLScoreStrip(containerId){
  const el = document.getElementById(containerId);
  if(!el || typeof PREMIER_LEAGUE === 'undefined') return;
  const key = Object.keys(PREMIER_LEAGUE).sort((a,b) => b - a)[0];
  const pl = PREMIER_LEAGUE[key];
  const weeks = Object.keys(pl.results || {}).filter(w => (pl.results[w] || []).length).sort((a,b) => a - b);
  if(!weeks.length){ el.remove(); return; }
  const wk = weeks[weeks.length - 1];
  const short = t => (typeof PL_SHORT_NAME !== 'undefined' && PL_SHORT_NAME[t]) || t;
  const row = (team, goals, won) => `<span class="ss-team${won ? ' won' : ''}"><span class="ss-name">${plLogo(team, 16)} ${short(team)}</span><span class="ss-pts">${goals}</span></span>`;
  // While a matchweek is partly played, show every fixture: finished games with scores,
  // the rest with their kickoff time (viewer's local time).
  const fx = (pl.fixtures && pl.fixtures[wk]) || [];
  const done = pl.results[wk];
  const partial = fx.length > done.length;
  const kick = new Intl.DateTimeFormat('en-US', { weekday: 'short', hour: 'numeric', minute: '2-digit' });
  const finished = ([home, hg, ag, away]) => `<a class="ss-game ss-game--pl" href="premier-league-schedule.html">
      ${ag > hg ? row(away, ag, true) + row(home, hg, false) : row(home, hg, hg > ag) + row(away, ag, false)}</a>`;
  const games = partial
    ? fx.map(([t, home, away]) => {
        const r = done.find(x => x[0] === home && x[3] === away);
        if(r) return finished(r);
        const [day, ...tm] = kick.format(new Date(t)).replace(',', '').split(' ');
        const up = (team, txt) => `<span class="ss-team"><span class="ss-name">${plLogo(team, 16)} ${short(team)}</span><span class="ss-pts ss-rec">${txt}</span></span>`;
        return `<a class="ss-game ss-game--pl" href="premier-league-schedule.html">${up(home, day)}${up(away, tm.join(' '))}</a>`;
      }).join('')
    : done.map(finished).join('');
  el.innerHTML = `<div class="wrap ss-wrap">
    <a class="ss-label" href="premier-league-schedule.html">Matchweek ${wk}<span>${partial ? 'In progress' : 'Full time'}</span></a>
    <div class="ss-games">${games}</div>
  </div>`;
}
