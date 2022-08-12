import React from "react";
import styled from "styled-components";
const Login = () => {
  return (
    <Container>
      <Nav>
        <a href="">
          <img src="/images/login-logo.svg" />
        </a>

        <Join>Join Now</Join>
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
  flex-wrap: nowrap;
  & > a {
    width: 135px;
    height: 34px;
    @media (max-width: 76px) {
      padding: 0 5px;
    }
  }
`;
const Join = styled.div`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
  }
`;
export default Login;
