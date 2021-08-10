import styled from "styled-components";

export const Box = styled.a`
    width:50px;
    height:30px;
    line-height:30px;
    display:flex;
    justify-content:center;
    background-image:url(${props=>props.tmdb});
    background-position:center center;
    background-size:cover;
    border-radius:10px;
`;

export const Company = styled.div`
    width:50px;
    height:50px;
    margin-right:10px;
    display:block;
    background-image:url(${props=>props.logo});
    background-position:center center;
    background-size:cover;
`;