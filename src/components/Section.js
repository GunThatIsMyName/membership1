import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  :not(:last-child){
    margin-bottom:50px
  }
`;
const Title = styled.span`
  color:#fff;
  font-weight:700;
  font-size:24px;
`;
const Grid = styled.div`
  margin-top:20px;
  font-size:16px;
  display:grid;
  grid-template-columns:repeat(auto-fill,125px);
  grid-gap:25px;
`;

export const Section = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <Grid>{children}</Grid>
  </Container>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
