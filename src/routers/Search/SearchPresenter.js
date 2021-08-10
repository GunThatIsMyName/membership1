import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "components/Loader";
import Section from "components/Section";
import Message from "components/Message";
import Poster from "components/Poster";
import Helmet from "react-helmet";

const Container = styled.div``;
const Form = styled.form``;
const Input = styled.input``;

const SearchPresenter = ({
  movieResults,
  tvResults,
  searchTerm,
  error,
  loading,
  handleSubmit,
  updateTerm,
}) => (
  <Container>
    <Helmet>
      <title>Search | HELLo</title>
    </Helmet>
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Search Tv show or Movies"
        value={searchTerm}
        onChange={updateTerm}
      />
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <>
        {movieResults && movieResults.length > 0 && (
          <Section title="Movie Results">
            {movieResults.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                title={movie.original_title}
                rating={movie.vote_average}
                imageUrl={movie.poster_path}
                year={movie.release_date.substring(0,4)}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {tvResults && tvResults.length > 0 && (
          <Section title="Tv Show Results">
            {tvResults.map((show) => (
              <Poster
              key={show.id}
              id={show.id}
              title={show.original_name}
              rating={show.vote_average}
              year={show.first_air_date}
              imageUrl={show.poster_path}
              isMovie={false}
            />
            ))}
          </Section>
        )}
        {error && (
          <Message color="#4a4a4a" text="Video or movie can't find"></Message>
        )}
        {tvResults &&
          movieResults &&
          movieResults.length === 0 &&
          tvResults.length === 0 && (
            <Message
              color="#4a4a4a"
              text="Tv show or Movie can't find any..."
            ></Message>
          )}
      </>
    )}
  </Container>
);

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  searchTerm: PropTypes.string,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired,
};

export default SearchPresenter;
