const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

const API_KEY = '506d58df2e0c59fba25366ff265345b9'; 

app.get('/', (req, res) => {
  res.render('index', { movies: [] });
});

app.post('/search', (req, res) => {
  const movieName = req.body.movieName;
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movieName}`;

  axios.get(url)
    .then(response => {
      const movies = response.data.results;
      res.render('index', { movies });
    })
    .catch(error => {
      console.error(error);
      res.render('index', { movies: [] });
    });
});

app.get('/movie/:id', (req, res) => {
  const movieId = req.params.id;
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;

  axios.get(url)
    .then(response => {
      const movie = response.data;
      res.render('movie', { movie });
    })
    .catch(error => {
      console.error(error);
      res.redirect('/');
    });
});

app.get("/about", (req, res) => {
  res.render("about");
})

app.get("/contact", (req, res) => {
  res.render("contact");
})



app.listen(3000, () => {
  console.log('Server running on port 3000');
});

