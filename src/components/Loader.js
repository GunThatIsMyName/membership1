import React from "react"
import Styled from "styled-components";

const Container = Styled.div`
    height:100vh;
    width:100vw;
    display:flex;
    font-size:150px;
    justify-content:center;
`;

const Loader = () => {
    return(
        <Container>🌝</Container>
    )
}

export default Loader;