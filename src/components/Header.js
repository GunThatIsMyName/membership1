import React from "react";
import { Link,withRouter } from "react-router-dom";
import styled from "styled-components";

const Top = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgba(20, 20, 20, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;
const Ul = styled.ul`
  display: flex;
`;
const Li = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
  border-bottom: 5px solid ${props=> props.current? "#1FC7D4" : "transparent"};
  transition: border-bottom 0.3s linear;
`;
const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Header({location:{pathname}}) {
    return (
        <Top>
      <Ul>
        <Li current={pathname === "/"}>
          <SLink to="/">Home</SLink>
        </Li>
        <Li current={pathname==="/tv"}>
          <SLink to="/tv">Tv</SLink>
        </Li>
        <Li current={pathname==="/search"}>
          <SLink to="/search">Search</SLink>
        </Li>
        <Li current={pathname === "/details"}>
          <SLink to="/details">Details</SLink>
        </Li>
      </Ul>
    </Top>
  );
}

export default withRouter(Header);
