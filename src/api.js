import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org/3';
const url = 'https://api.themoviedb.org/3/search/movie';
const urlTrend = 'https://api.themoviedb.org/3/trending/movie/week';

const API_KEY = '3dbb532a96a0ccf3716bb91e4a79e508';

const options = {
  params: {
    api_key: API_KEY,
  },
};

export const getFilm = async query => {
  try {
    const response = await axios.get(url, {
      params: {
        ...options.params,
        query: query,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getTrendMovies = async query => {
  try {
    const response = await axios.get(urlTrend, {
      params: {
        ...options.params,
        query: query,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getMoviesId = async movieId => {
  try {
    const response = await axios.get(`${baseUrl}/MoviesDetailsPage/${movieId}`, {
      params: {
        ...options.params,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
getMoviesId(496450).then(item => {
  console.log(item);
});

export const getMoviesCast = async movieId => {
  try {
    const response = await axios.get(`${baseUrl}/MoviesDetailsPage/${movieId}/credits`, {
      params: {
        ...options.params,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getMoviesReviews = async movieId => {
  try {
    const response = await axios.get(`${baseUrl}/MoviesDetailsPage/${movieId}/reviews`, {
      params: {
        ...options.params,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};