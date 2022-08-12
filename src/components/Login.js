import React from "react";
import styled from "styled-components";
const Login = () => {
  return (
    <Container>
      <Nav>
        <a href="">
          <img src="/images/login-logo.svg" />
        </a>
      </Nav>
    </Container>
  );
};
const Container = styled.div`
  padding: 0;
`;

const Nav = styled.nav`
  max-width: 1128px;
  margin: 0;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flew-wrap: nowrap;
  & > a {
    width: 135px;
    height: 34px;
    @media (max-width: 76px) {
      padding: 0 5px;
    }
  }
`;
export default Login;
