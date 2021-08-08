import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {Section} from "../../components/Section"

const Container = styled.div``;

const HomePresenter = ({ nowPlaying, popular, upcoming, error, loading }) =>
  loading ? null : 
  <Container>
      {nowPlaying && nowPlaying.length >0 && (<Section title="Now playing">{nowPlaying.map(movie=>movie.title)}</Section>)}
      {popular && popular.length >0 && (<Section title="Popular Movie">{popular.map(movie=>movie.title)}</Section>)}
      {upcoming && upcoming.length >0 && (<Section title="Upcoming Movie">{upcoming.map(movie=>movie.title)}</Section> )}
  </Container>;


HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  popular: PropTypes.array,
  upcoming: PropTypes.array,
  error: PropTypes.bool.isRequired,
  loading: PropTypes.string,
};

export default HomePresenter;
