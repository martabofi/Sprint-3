// Exercise 1: Get the array of all directors.

function getAllDirectors(movies) {

  const result = movies.map(directors => directors.director);
  console.log("EXERCICE 1 ->", result);

  return result;

}


// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, valor) {

  const result = movies.filter(movie => movie.director === valor);
  console.log(result);

  return result;

}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, valor) {

  const directors = movies.filter(movie => movie.director === valor);
  const mitjana = directors.reduce((total, movie) => total + movie.score, 0) / directors.length;
  const mitjana2decimals = mitjana.toFixed(2);
  console.log(mitjana2decimals);

  return parseFloat(mitjana2decimals);

}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {

  const getMovies = movies.map(movie => movie.title);

  const orderMovies = getMovies.sort((a, b) => a.localeCompare(b));

  if (orderMovies.length < 20) {
    return orderMovies;
  }

  return orderMovies.slice(0, 20);

}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {

  const orderMovies = movies.slice().sort(function (a, b) {

    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    } else {
      return a.year - b.year;
    }
  })

  return orderMovies;

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, valor) {

  const getMoviesByCategory = movies.filter(movie => movie.genre.includes(valor));

  if (getMoviesByCategory.length === 0) {
    return 0;
  }

  const average = getMoviesByCategory.reduce((total, movie) => total + movie.score, 0) / getMoviesByCategory.length;
  console.log(average);

  return average;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {

  const moviesMinutes = movies.map(movie => {
    const splitHoursMinutes = movie.duration.split(' ');
    let totalMinutes = 0;

    splitHoursMinutes.forEach(split => {
      const number = parseInt(split, 10);
      if (split.includes("h")) {
        totalMinutes += number * 60;
      } else if (split.includes("min")) {
        totalMinutes += number;
      }
    });
    return { ...movie, duration: totalMinutes };
  });

  return moviesMinutes;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies, valor) {

  const getMovieByYear = movies.filter(movie => movie.year === valor);

  if (getMovieByYear.length === 0) {
    return [];
  }

  const theBest = getMovieByYear.reduce((best, movie) => {
    return (best.score < movie.score) ? movie : best;
  }, getMovieByYear[0]);
  return [theBest];
};



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
