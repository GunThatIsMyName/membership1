import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import  Section  from "components/Section";
import Loader from "components/Loader";

const Container = styled.div``;

const TvPresenter = ({ topRated, popular, airingToday, error, loading }) => 
loading?<Loader />:
<Container>
  {topRated && topRated.length >0 && <Section title="Top Rated Tv Show">{topRated.map(show=>show.name)}</Section>}
  {popular && popular.length > 0 && <Section title="Popuar Tv Show">{popular.map(show=>show.name)}</Section>}
  {airingToday && airingToday.length >0 && <Section title="Airing Today">{airingToday.map(show=>show.name)}</Section>}
</Container>
;

TvPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  error: PropTypes.bool.isRequired,
  loading: PropTypes.string,
};

export default TvPresenter;
