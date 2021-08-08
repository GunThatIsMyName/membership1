import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "components/Loader";
import Section from "components/Section";

const Container =styled.div``;
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
}) => <Container>
  <Form onSubmit={handleSubmit}>
    <Input placeholder="Search Tv show or Movies" value={searchTerm} onChange={updateTerm} />
    </Form>
    {loading? <Loader /> : <>
      {movieResults && movieResults.length>0 && <Section title="Movie Results" >{movieResults.map(movie=><span key={movie.id} >{movie.title}</span>)}</Section>}
      {tvResults && tvResults.length>0 && <Section title="Tv Show Results">{tvResults.map(movie=><span key={movie.id}>{movie.name}</span>)}</Section>}
    </>}
</Container>;

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  searchTerm: PropTypes.string,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm:PropTypes.func.isRequired,
};

export default SearchPresenter;
