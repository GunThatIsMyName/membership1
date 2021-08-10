import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "components/Loader";
import Helmet from "react-helmet";
import Message from "components/Message";
import { Box } from "./DetailStyle";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: calc(100vh - 50px);
  position: relative;
  width: 100%;
  padding: 100px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
`;
const Cover = styled.div`
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center center;
  width: 30%;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 20px;
`;
const Title = styled.span`
  display: block;
  font-size: 32px;
`;
const ItemContainer = styled.div`
  display: flex;
  align-items:center;
  font-size: 22px;
  margin: 20px 0px;
`;
const Item = styled.div`
  display:flex;
`;
const Divider = styled.span`
  margin: 0px 14px;
`;
const Overview = styled.p`
  width: 70%;
  line-height: 1.4;
`;

const DetailPresenter = ({ result, error, loading }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading . . .</title>
      </Helmet>
      <Loader />
    </>
  ) : error ? (
    <Message title="Holy Movie not found!" color="#515151" />
  ) : (
    <Container>
      <Helmet>
        <title>
          {result.original_title ? result.original_title : result.original_name}{" "}
          | HELLo
        </title>
      </Helmet>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original/${result.backdrop_path}`}
      />
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/w300/${result.poster_path}`
              : "image/noImage.jpeg"
          }
        />
        <Data>
          <Title>
            {result.original_title
              ? result.original_title
              : result.original_name}
          </Title>
          <ItemContainer>
              <Item>
                {result.release_date
                  ? result.release_date.substring(0, 4)
                  : result.first_air_date.substring(0, 4)}
              </Item>
              <Divider> · </Divider>
              <Item>
                {result.runtime
                  ? `${result.runtime}mins`
                  : `${result.episode_run_time} mins`}
              </Item>
              <Divider> · </Divider>
              <Item>
                {result.genres &&
                  result.genres.map((genre, index) =>
                    index === result.genres.length - 1
                      ? genre.name
                      : `${genre.name} , `
                  )}
              </Item>
          </ItemContainer>
          <ItemContainer>
                <Box href={`https://www.imdb.com/title/${result.imdb_id}/`} tmdb={"image/imdb.png"} />
                <Divider> · </Divider>
                <Box href={result.homepage }>🖥</Box>
                <Divider> · </Divider>
                <Link to={result.production_companies?"/sponsor":null} id={result.production_companies} logo={result.production_companies.map(company=>`https://image.tmdb.org/t/p/w200/${company.logo_path}`)} >
                  sponsor 
                </Link>
                  {/* {result.production_companies && result.production_companies.length >0 &&
                  result.production_companies.map(company=>
                  <Company key={company.id} logo={`https://image.tmdb.org/t/p/w200/${company.logo_path}`} />)} */}
                <Divider> · </Divider>
                <Item>
                    <h1>Hello</h1>
                </Item>
                <Item>
                    <h1>Hello</h1>
                </Item>
          </ItemContainer>
          <Overview>{result.overview}</Overview>
        </Data>
      </Content>
    </Container>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;
