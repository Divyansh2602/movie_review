# 🎬 Movie Search Web App (TMDB API)

A **Node.js + Express** based web application that allows users to **search movies**, view **detailed movie information**, and explore results in a clean UI powered by **The Movie Database (TMDB) API**.

This project demonstrates **API integration**, **server-side rendering with EJS**, and a **full Express-based backend**.

---

## 🚀 Features

- 🔍 Search any movie by name  
- 📄 View complete movie details (overview, rating, release date, etc.)  
- 🎞 Real-time results from TMDB  
- 🧠 Server-side rendering using **EJS**  
- 🖼 Static assets served via Express  
- 📂 Clean route separation (`/`, `/search`, `/movie/:id`, `/about`, `/contact`)  

---

## 🧰 Tech Stack

- Node.js  
- Express.js  
- Axios  
- EJS  
- TMDB API  
- HTML, CSS, JavaScript  

---

## 📁 Project Structure

movie-search-app/
│
├── public/ # CSS, images, client-side JS
├── views/ # EJS templates
│ ├── index.ejs
│ ├── movie.ejs
│ ├── about.ejs
│ └── contact.ejs
│
├── app.js # Main server file
├── package.json
└── README.md


---

## 🔑 API Used

This project uses **The Movie Database (TMDB) API**

Get your free API key from:  
https://www.themoviedb.org/settings/api

---

## ⚙ Setup & Run Locally

### 1. Clone the repository
git clone https://github.com/yourusername/movie-search-app.git
cd movie-search-app


### 2. Install dependencies
npm install


### 3. Add your TMDB API key

In `app.js`:
```js
const API_KEY = "YOUR_TMDB_API_KEY"
```
node app.js
http://localhost:3000

📸 How It Works

User enters a movie name

Express sends request to TMDB

Axios fetches results

Movies are rendered on the page

Clicking a movie shows full details

🛡 Why This Project is Valuable

This project shows:

API handling

Backend + frontend integration

Real-world API usage

Server-side rendering

Clean routing and Express logic

Perfect for resume, portfolio, and web dev interviews.

🧠 Future Enhancements

Pagination

User login

Favorite movies

Ratings & reviews

Dark mode
