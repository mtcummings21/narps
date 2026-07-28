# League of NARPS — League History Site

A free, static website with your fantasy football league's history: champions, all-time standings, and records/awards. No build tools, no dependencies — just HTML, CSS, and vanilla JS.

## What's included
- `index.html` — homepage with trophy case preview and section links
- `champions.html` — full 2011–2025 championship timeline
- `standings.html` — sortable all-time career standings for all 12 franchises
- `awards.html` — records and superlatives (highest score, best/worst point differential, playoff performance, title droughts, etc.)
- `assets/data.js` — all your league data in one file (easy to edit/update each season)
- `assets/style.css`, `assets/script.js` — shared styling and behavior

## Updating the data
Everything lives in `assets/data.js`. To add a new season:
1. Open `assets/data.js`
2. Add the new champion to the `CHAMPIONS` array
3. Update each franchise's stats in the `TEAMS` array (wins, losses, points, etc.)
4. Save and re-upload — no other files need to change

## Publishing for free with GitHub Pages

1. **Create a GitHub account** at github.com if you don't have one.
2. **Create a new repository**:
   - Click the "+" in the top right → "New repository"
   - Name it something like `league-of-narps` (this becomes part of your URL)
   - Set it to Public
   - Click "Create repository"
3. **Upload these files**:
   - On the new repo's page, click "uploading an existing file"
   - Drag in all the files and folders from this project (keep the `assets` folder structure intact)
   - Click "Commit changes"
4. **Turn on GitHub Pages**:
   - Go to the repo's "Settings" tab
   - Click "Pages" in the left sidebar
   - Under "Build and deployment" → "Source", choose "Deploy from a branch"
   - Branch: `main`, folder: `/ (root)` → Save
5. **Wait a minute or two**, then GitHub will give you a live URL, typically:
   `https://<your-username>.github.io/league-of-narps/`

That's it — the site is now live and free, and you can update it anytime by editing `assets/data.js` and re-uploading.

## Note on Head-to-Head records
The Head-to-Head page was left out of this version because the source spreadsheet's "Head2Head" tab doesn't reconcile with the career totals on the "Overall" tab (it appears to only cover part of league history, and has at least one internal contradiction between two owners' rows). Once that data's corrected, it'd be straightforward to add back in.
