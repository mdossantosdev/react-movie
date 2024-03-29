import React from 'react';
import PropTypes from 'prop-types';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.css';
import {
  StyledMovieInfo,
  MovieInfoContent,
  MovieInfoThumb,
  MovieInfoContainer,
  MovieInfoTitle,
  MovieInfoSubtitle,
  MovieInfoText,
  MovieInfoDetails,
  MovieInfoItems,
  MovieInfoRating,
  MovieTrailer,
} from './style';
import { MovieThumb } from '../../components/Thumb';
import { TrailerButton } from '../../components/Button/TrailerButton';
import { useModal } from '../../hooks/useModal';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import NoImage from '../../images/no_image.png';

const MovieInfo = ({ movie, directors, trailer }) => {
  const [isShowing, toggle] = useModal();

  return (
    <StyledMovieInfo backdrop={movie.backdrop_path}>
      <MovieInfoContent>
        <MovieInfoThumb>
          <MovieThumb
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : NoImage
            }
          />
        </MovieInfoThumb>

        <MovieInfoContainer>
          <MovieInfoTitle>{movie.original_title}</MovieInfoTitle>
          <MovieInfoSubtitle>SYNOPSIS</MovieInfoSubtitle>
          <MovieInfoText>{movie.overview}</MovieInfoText>

          <MovieInfoDetails>
            <MovieInfoItems>
              <MovieInfoSubtitle>IMDB RATING</MovieInfoSubtitle>
              <MovieInfoRating>{movie.vote_average.toFixed(1)}</MovieInfoRating>
            </MovieInfoItems>

            <MovieInfoItems>
              <MovieInfoSubtitle>
                DIRECTOR{directors.length > 1 ? 'S' : ''}
              </MovieInfoSubtitle>
              {directors
                ? directors.map((el) => (
                    <MovieInfoText key={el.credit_id}>{el.name}</MovieInfoText>
                  ))
                : null}
            </MovieInfoItems>
          </MovieInfoDetails>
          <MovieTrailer>
            <ModalVideo
              channel='youtube'
              autoplay
              isOpen={isShowing}
              videoId={trailer.key}
              onClose={() => toggle(false)}
            />
            <TrailerButton title='Trailer' onClick={() => toggle(true)} />
          </MovieTrailer>
        </MovieInfoContainer>
      </MovieInfoContent>
    </StyledMovieInfo>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.object,
  directors: PropTypes.array,
  trailer: PropTypes.object,
};

export default MovieInfo;
