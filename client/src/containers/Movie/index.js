import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../Navigation';
import MovieInfo from '../MovieInfo';
import Grid from '../Grid';
import MovieInfoBar from '../MovieInfoBar';
import { useMovieFetch } from '../../hooks/useMovieFetch';
import { Spinner } from '../../components/Spinner';
import Actor from '../Actor';

const Movie = ({ location }) => {
  const [movie, loading, error] = useMovieFetch(location.state.movieID);

  if (error) return <div>Error</div>;

  if (loading) return <Spinner />;

  return (
    <>
      <Navigation movie={movie.original_title} />
      <MovieInfo  movie={movie} />
      <MovieInfoBar
        time={movie.runtime}
        date={movie.release_date}
      />
      <Grid title='Actors'>
        {movie.actors.map(actor => (
          <Actor
            key={actor.id}
            actor={actor}
          />
        ))}
      </Grid>
    </>
  )
};

Movie.propTypes = {
  location: PropTypes.object
}

export default Movie;
