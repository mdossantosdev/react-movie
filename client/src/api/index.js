import axios from 'axios';
import { BASE_URL } from '../config';

export const getMovies = async (searchTerm, page) => {
  const endpoint = searchTerm
    ? `${BASE_URL}/search/movie?query=${searchTerm}&page=${page}`
    : `${BASE_URL}?page=${page}`;
  const { data } = await axios.get(endpoint);
  return data;
};

export const getMovie = async (movieID) => {
  const endpoint = `${BASE_URL}${movieID}`;
  const { data } = await axios.get(endpoint);
  return data;
};

export const getMovieCredits = async (movieID) => {
  const endpoint = `${BASE_URL}${movieID}/credits`;
  const { data } = await axios.get(endpoint);
  return data;
};

export const getMovieTrailer = async (movieID) => {
  const endpoint = `${BASE_URL}${movieID}/videos`;
  const { data } = await axios.get(endpoint);
  return data;
};
