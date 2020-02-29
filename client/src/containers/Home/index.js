import React, { useState } from 'react';
import HeroImage from '../HeroImage';
import SearchBar from '../SearchBar';
import Grid from '../Grid';
import { MovieThumb } from '../../components/Thumb';
import Spinner from '../../components/Spinner';
import { LoadMoreButton } from '../../components/Button';
import { useHomeFetch } from '../../hooks/useHomeFetch';
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config';

const Home = () => {
  const [
    {
      state: { movies, currentPage, totalPages, heroImage },
      loading,
      error
    },
    fetchMovie
  ] = useHomeFetch();

  if (error) return <div>ERROR</div>;

  if (!movies[0]) return <Spinner />;

  return (
    <>
      <HeroImage
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
        title={heroImage.original_title}
        text={heroImage.overview}
      />
      <SearchBar />
      <Grid>
        {movies.map(movie => (
          <MovieThumb
            image={
              movie.poster_path
              ? `${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.poster_path}`
              : null
            } />
        ))}
      </Grid>
      {loading && <Spinner />}
      <LoadMoreButton title={'Load More'} />
    </>
  )
};

export default Home;
