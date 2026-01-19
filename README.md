## The Loozer’s Club - Meghahatuburu Premier League (MPL) Auction App

Full-stack local web application for running and displaying the MPL cricket auction on a big screen.

### Tech Stack

- **Backend**: Node.js, Express, MongoDB, Mongoose
- **Frontend**: React + TypeScript (Vite), Tailwind CSS, React Router
- **API**: REST JSON

### Project Structure

- `server/` – Express API + MongoDB via Mongoose
- `client/` – React + Vite + Tailwind UI
- Root `package.json` – helper scripts to run both together

### Backend Setup (`server/`)

1. **Install dependencies**

```bash
cd server
npm install
```

2. **Configure MongoDB**

Create `server/.env`:

```env
MONGODB_URI=mongodb://127.0.0.1:27017/mpl_auction
PORT=5000
```

Adjust the URI if needed for your MongoDB instance.

3. **Seed sample data**

From the project root:

```bash
npm run seed
```

This creates:

- A few teams with budgets
- Several player sets (including **Unsold Players**)
- Sample players assigned to sets

4. **Run the backend**

```bash
cd server
npm run dev
```

API base URL (default): `http://localhost:5000`

### Frontend Setup (`client/`)

1. **Install dependencies**

```bash
cd client
npm install
```

2. **Configure API base URL (optional)**

Create `client/.env` (optional if using default):

```env
VITE_API_URL=http://localhost:5000
```

3. **Run the frontend**

```bash
cd client
npm run dev
```

Frontend dev URL (default Vite port): `http://localhost:5173`

### Run Both (from Root)

At the project root:

```bash
npm install   # installs root dev tools like concurrently
npm run dev   # starts server (5000) and client (5173) together
```

### Core Features

- **Two-line heading on all pages**
  - Top line: **“The Loozer’s Club”**
  - Second line: **“Meghahatuburu Premier League (MPL)”**
- **Dark neon theme** suitable for projector:
  - Black / very dark background
  - Neon green accents (buttons, borders, highlights)
- **Persistent MongoDB storage**:
  - Teams (budgets, remainingBudget)
  - Player sets
  - Players (with statuses, basePrice, soldPrice, soldToTeam, etc.)
  - Bid logs for each player

### Pages & Flow

#### 1. Auction Display (`/`)

- Polls `GET /api/auction/current-state` periodically.
- Shows **current player card** in the center:
  - Photo with **glow animation** when `auctionStatus === "In Progress"`
  - Name, age, battingStyle, bowlingStyle, role
  - Base price and current bid
  - Current set name
- Side grid shows **all teams** from `GET /api/teams`:
  - Team name
  - Remaining vs starting budget
  - Player count
  - Visual budget bar

#### 2. Admin Panel (`/admin`)

- **Set & player selection**
  - Dropdown of sets (`GET /api/sets`)
  - List of players within selected set (`GET /api/sets/:id/players`)
  - Click a player to make them the **current** selection
  - Previous / Next buttons to move in the set order
- **Auction controls**
  - `Start Auction` → `POST /api/auction/start`
  - `Increase Bid` → `POST /api/auction/bid { type: "increment" }`
  - Custom bid input + `Set Bid` → `POST /api/auction/bid { type: "custom", customAmount }`
  - Shows live current bid using `/api/auction/current-state`
- **Sell / Unsold**
  - Team dropdown from `GET /api/teams`
  - `Sell to Team` → `POST /api/auction/sell { playerId, teamId }`
  - `Mark Unsold` → `POST /api/auction/unsold { playerId }`
  - Unsold players are moved to the **"Unsold Players"** set.

#### 3. Summary (`/summary`)

- **By Set**
  - Select a set
  - `GET /api/summary/by-set/:setId`
  - Table of players: name, status, soldPrice, soldToTeam
- **By Team**
  - Select a team
  - `GET /api/summary/by-team/:teamId`
  - Table of players: name, role, set, soldPrice
  - Totals: totalSpent, remainingBudget, playerCount
- **Global**
  - `GET /api/summary/global`
  - Aggregates: totalPlayers, totalSold, totalUnsold, totalMoneySpent

### Behavior & Persistence

- All auction actions are stored in MongoDB:
  - Player statuses, sold price, sold-to team
  - Team budgets
  - Bid logs
- Restarting the server or refreshing the browser **does not lose data**.
- To reset everything, re-run the seed script:
```bash
npm run seed
```


## 🚀 Running as a Desktop App (Windows)

You can create a simple "launcher" file to start the auction system with a single double-click, just like a normal application.

1. Create a new file in the root folder named `Start_MPL_Auction.bat`.
2. Right-click it and select **Edit** (or open with Notepad).
3. Paste the following code:

```bat
@echo off
TITLE MPL Auction System
COLOR 0A
echo =====================================================
echo    THE LOOZER'S CLUB - MPL AUCTION SYSTEM
echo =====================================================
echo.
echo [1/2] Starting Database and Server...
echo [2/2] Opening Application Dashboard...
echo.
echo *****************************************************
echo * Admin Panel: http://localhost:5173/admin     *
echo * Display View: http://localhost:5173          *
echo *****************************************************
echo.
echo Don't close this window while the auction is running!
echo.

:: Move to current directory
cd /d "%~dp0"

:: Open the browser automatically after 5 seconds
timeout /t 5 >nul
start "" "http://localhost:5173"
start "" "http://localhost:5173/admin"

:: Run the application
call npm run dev
pause