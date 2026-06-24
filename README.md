# Zerodha Clone — Frontend

Marketing and authentication site for the Zerodha clone project. Built with React 18 and deployed as a static site on Render.

**Live:** https://zerodha-clone-frontend-vk1h.onrender.com

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, stats, awards, education, pricing overview |
| `/about` | About page with team section |
| `/products` | Products page |
| `/pricing` | Brokerage & pricing breakdown |
| `/support` | Support page with ticket creation |
| `/login` | Login form |
| `/signup` | Signup form |

---

## Tech Stack

- **React 18** with React Router v6
- **Axios** for API calls
- **React Toastify** for notifications
- Create React App build toolchain

---

## Auth Flow

1. User logs in or signs up → backend returns a JWT in the response body
2. Token is saved to `localStorage` as `authToken`
3. The "Dashboard" link in the navbar appends `?token=<jwt>` to the dashboard URL so the separately deployed dashboard app can authenticate the user cross-domain

---

## Project Structure

```
src/
├── config.js                   # BACKEND_URL (env var or auto-detect)
├── Login.js                    # Login page
├── landing_page/
│   ├── Navbar.js               # Top nav with dashboard link
│   ├── Footer.js
│   ├── home/                   # Home page sections
│   ├── about/
│   ├── products/
│   ├── pricing/
│   ├── support/
│   └── signup/
└── index.js
public/
└── _redirects                  # SPA routing for Render Static Site
```

---

## Local Development

```bash
npm install
npm start          # http://localhost:3000
```

Requires the backend running at `http://localhost:3002` (or set `REACT_APP_BACKEND_URL`).

---

## Environment Variables

| Variable | Default | Description |
|---|---|---|
| `REACT_APP_BACKEND_URL` | `https://backend-p8j1.onrender.com` (prod) / `http://localhost:3002` (dev) | Backend API base URL |

---

## Deployment (Render Static Site)

| Setting | Value |
|---|---|
| Build Command | `npm install && npm run build` |
| Publish Directory | `build` |

SPA routing is handled by `public/_redirects`:
```
/* /index.html 200
```

---

## Related Repos

- [Backend](https://github.com/Drishti84/Zerodha-Clone-backend) — Express + MongoDB API
- [Dashboard](https://github.com/Drishti84/Zerodha-Clone-dashboard) — Trading dashboard app
