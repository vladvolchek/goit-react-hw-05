import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org/3';
const url = 'https://api.themoviedb.org/3/search/movie';
const urlTrend = 'https://api.themoviedb.org/3/trending/movie/week';

const API_KEY = '3e29d1368b4df9e4dcbc5ad16f462ff1';

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
    const response = await axios.get(`${baseUrl}/movie/${movieId}`, {
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
    const response = await axios.get(`${baseUrl}/movie/${movieId}/credits`, {
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
    const response = await axios.get(`${baseUrl}/movie/${movieId}/reviews`, {
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