import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Container = styled.div`
font-size:12px;
`;

const Image = styled.div`
  background-image: url(${props=>props.bgUrl});
  height:180px;
  background-size:cover;
  background-position:center center;
  border-radius:4px;
  transition:all 0.2s ease-out;
  margin-bottom:5px;
`;
const Rating = styled.span`
  position:absolute;
  bottom:5px;
  right:5px;
  opacity:0;
  transition:all 0.2s ease-in;
`;
const ImageContainer = styled.div`
  margin-bottom:5px;
  position:relative;
  &:hover{
    ${Image}{
      opacity:0.3;
    }
    ${Rating}{
      opacity:1;
    }
  }
`;


const Title = styled.span`
  display:block;
  font-size:16px;
  margin-bottom:4px;
  overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
`;

const Year = styled.span`
  display:block;
  color:#515151;
`;

const Poster = ({ id, title, rating, year, imageUrl, isMovie }) => (
  <Link to={isMovie? `/movie/${id}` : `/show/${id}`} >
    <Container>
      <ImageContainer>
        <Image bgUrl={imageUrl? `https://image.tmdb.org/t/p/w300${imageUrl}` : "image/noImage.jpeg" } />
        <Rating>
          <span role="img" aria-label="rating">
            ⭐️
          </span>{" "}
          {rating}/10
        </Rating>
      </ImageContainer>
      <Title>{title}</Title>
      <Year>{year}</Year>
    </Container>
  </Link>
);

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  imageUrl: PropTypes.string,
  isMovie: PropTypes.bool,
};

export default Poster;
