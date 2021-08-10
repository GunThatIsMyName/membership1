import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "components/Section";
import Loader from "components/Loader";
import Message from "components/Message";
import Poster from "components/Poster";
import Helmet from "react-helmet";

const Container = styled.div``;

const TvPresenter = ({ topRated, popular, airingToday, error, loading }) =>(
  <>
    <Helmet>
        <title>Tv show | HELLo</title>
    </Helmet>
    {loading ? (
    <Loader />
  ) : (
    <Container>
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated Tv Show">
          {topRated.map((show) => (
            <Poster
              key={show.id}
              id={show.id}
              title={show.original_name}
              rating={show.vote_average}
              year={show.first_air_date.substring(0,4)}
              imageUrl={show.poster_path}
              isMovie={false}
            />
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popuar Tv Show">
          {popular.map((show) => (
            <Poster
            key={show.id}
              id={show.id}
              title={show.original_name}
              rating={show.vote_average}
              year={show.first_air_date.substring(0,4)}
              imageUrl={show.poster_path}
              isMovie={false}
            />
          ))}
        </Section>
      )}
      {airingToday && airingToday.length > 0 && (
        <Section title="Airing Today">
          {airingToday.map((show) => (
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
        <Message color="#c71818" text="Video or movie can't find"></Message>
      )}
    </Container>
  )}
  </>
)
  
;
TvPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default TvPresenter;
