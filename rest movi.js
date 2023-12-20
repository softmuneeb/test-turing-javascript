const axios = require('axios');

async function bestInGenre(genre) {
  const res2 = await axios.get(
    `https://jsonmock.hackerrank.com/api/tvseries?page=1`,
  );
  let total_pages = res2.data.total_pages;

  let max = 0;
  let movie = '';

  for (let i = 1; i <= total_pages; i++) {
    const res = await axios.get(
      `https://jsonmock.hackerrank.com/api/tvseries?page=${i}`,
    );

    res.data.data.forEach((o) => {
      o.genre.includes(genre) &&
        console.log(o.imdb_rating + ',' + o.name + ',' + o.genre);
      if (o.genre.includes(genre)) {
        if (o.imdb_rating > max) {
          max = o.imdb_rating;
          movie = o.name;
        }
        if (o.imdb_rating === max) {
          if (o.name.localeCompare(movie) < 0) {
            max = o.imdb_rating;
            movie = o.name;
          }
        }
      }
    });
  }

  return movie;
}

bestInGenre('Action').then(console.log);
bestInGenre('Animation').then(console.log);
bestInGenre('Biography').then(console.log);
bestInGenre('History').then(console.log);
