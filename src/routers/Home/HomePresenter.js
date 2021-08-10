import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "styled-components";
import Section from "../../components/Section";
import Loader from "components/Loader";
import Message from "components/Message";
import Poster from "components/Poster";

const Container = styled.div``;

const HomePresenter = ({ nowPlaying, popular, upcoming, error, loading }) => (
  <>
    <Helmet>
      <title>Movies | HELLo</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        {nowPlaying && nowPlaying.length > 0 && (
          <Section title="Now playing">
            {nowPlaying.map((movie) => (
              <Poster
                id={movie.id}
                key={movie.id}
                title={movie.original_title}
                rating={movie.vote_average}
                imageUrl={movie.poster_path}
                year={movie.release_date.substring(0, 4)}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {popular && popular.length > 0 && (
          <Section title="Popular Movie">
            {popular.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                title={movie.original_title}
                rating={movie.vote_average}
                imageUrl={movie.poster_path}
                year={movie.release_date.substring(0, 4)}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {upcoming && upcoming.length > 0 && (
          <Section title="Upcoming Movie">
            {upcoming.map((movie) => (
              <Poster
                id={movie.id}
                key={movie.id}
                title={movie.original_title}
                rating={movie.vote_average}
                imageUrl={movie.poster_path}
                year={movie.release_date.substring(0, 4)}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {error && (
          <Message color="#de1414" text="Video or movie can't find"></Message>
        )}
      </Container>
    )}
  </>
);

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  popular: PropTypes.array,
  upcoming: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default HomePresenter;
