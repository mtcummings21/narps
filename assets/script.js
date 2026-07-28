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

  const lastTitleYear = {};
  CHAMPIONS.forEach(c => { lastTitleYear[c.key] = Math.max(lastTitleYear[c.key]||0, c.year); });
  let droughtCandidates = TEAMS.filter(t=>t.champs>0).map(t => ({t, gap: LATEST_SEASON - lastTitleYear[t.key]}));
  droughtCandidates.sort((a,b)=>b.gap-a.gap);
  const longestDrought = droughtCandidates[0];

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

document.addEventListener('DOMContentLoaded', initNav);
