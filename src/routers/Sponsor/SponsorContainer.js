import styled from "styled-components";

const Container = styled.div``;
const Logo=styled.div`
    background-image:url(${props=>props.logo});
`;

const SponsorContainer = ({logo}) =>{
    return(
        <Container>
            <Logo logo={logo}></Logo>
        </Container>
    )
}

export default SponsorContainer;