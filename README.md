<h1 align="center">
  <a href="https://git.io/typing-svg">
    <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=40&pause=1000&color=AB8BFF&center=true&vCenter=true&width=600&lines=MOVIE-SCRAPPER;Discover+Your+Next+Favorite+Movie;Built+with+React+%2B+Tailwind" alt="Typing SVG" />
  </a>
</h1>

<p align="center">
  <img src="https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Vite-latest-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/TailwindCSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/TMDB_API-v3-01B4E4?style=for-the-badge&logo=themoviedb&logoColor=white" />
</p>

![Demo Animation](https://raw.githubusercontent.com/requiremen/MOVIE-SCRAPPER/main/docs/demo.gif)

## Overview
A sleek, **responsive** movie‑search web app built with **React 18**, **Vite**, and **TailwindCSS**. It demonstrates modern React patterns (hooks, functional components), consumes the **TMDB (The Movie Database) API**, and showcases smooth UI animations using Tailwind utilities.

## ✨ Features
- **Live search** – type a movie name and instantly see matching results.
- **Animated hero section** with a gradient text effect.
- **Responsive grid** of movie cards (desktop, tablet, mobile).
- **TailwindCSS‑driven design** – no custom CSS bloat.
- **TMDB API integration** – fetches popular movies on load and filters by search term.
- **Dark‑mode ready** – uses a dark color palette.

## 🛠️ Tech Stack
| Technology | Version |
|------------|---------|
| React      | 18.x |
| Vite       | latest |
| TailwindCSS| 3.x |
| TMDB API   | v3 |
| JavaScript | ES2022 |

## 🚀 Getting Started
```bash
# Clone the repo
git clone https://github.com/your-username/js-mastery.git
cd js-mastery/react-app

# Install dependencies
npm install

# Create a .env file (copy from .env.example) and add your TMDB token
echo "VITE_TMDB_API_KEY=YOUR_TMDB_BEARER_TOKEN" > .env

# Run the dev server
npm run dev
```
Open `http://localhost:5173` in your browser.

## 🔑 API Integration
The app talks to **TMDB**:
```js
const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
};

// Example fetch – gets the most popular movies
const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
const response = await fetch(endpoint, API_OPTIONS);
const { results } = await response.json();
```
The fetched array is stored in a `movies` state and rendered by the `MovieCard` component.

## 📂 Code Highlights
### `src/App.jsx`
```tsx
import { useEffect, useState } from 'react';
import Search from './components/search';

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = { /* …headers as above… */ };

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
    const res = await fetch(endpoint, API_OPTIONS);
    const { results } = await res.json();
    setMovies(results);
  };

  useEffect(() => { fetchMovies(); }, []);

  return (
    <main className="relative bg-primary">
      <div className="pattern" />
      <div className="wrapper">
        <header>…</header>
        <Search search={searchTerm} setsearchmovie={setSearchTerm} />
        {/* Render movie cards here */}
      </div>
    </main>
  );
}
```
### `src/components/search.jsx`
```tsx
export default function Search({ search, setsearchmovie }) {
  return (
    <div className="search">
      <img src="./search.svg" alt="search" />
      <input
        type="text"
        placeholder="type your movie"
        value={search}
        onChange={e => setsearchmovie(e.target.value)}
      />
    </div>
  );
}
```
### Tailwind‑driven styling (`src/index.css`)
```css
@import "tailwindcss";

@layer base {
  body { @apply bg-[#030014] font-sans; }
  h1   { @apply text-5xl font-bold text-white; }
}

@layer components {
  .pattern   { @apply bg-hero-pattern absolute inset-0; }
  .wrapper   { @apply max-w-7xl mx-auto p-12 relative z-10; }
  .search    { @apply flex items-center gap-3; }
}
```
## 🎞️ Animations & Visuals
- **Hero gradient text** – `text-gradient` utility creates a smooth color transition.
- **Hover effects** on movie cards using Tailwind `hover:` and `transition` classes.
- **Scroll‑hide** for the trending carousel via a custom `hide-scrollbar` utility.

> **Tip:** Replace the placeholder demo GIF link above with a real screen‑capture of your app (`/docs/demo.gif`).

## 📄 License
MIT © 2026 **akshatrastogi**
