import React from "react";
import styled from "styled-components";
const Login = () => {
  return (
    <Container>
      <Nav>
        <a href="">
          <img src="/images/login-logo.svg" />
        </a>
        <div>
          <Join>Join Now</Join>
          <SignIn>Sign in</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcome to your professional community </h1>
        </Hero>
      </Section>
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
  & > div {
    display: flex;
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
const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #0a6c20;
  color: #0a66c2;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  padding: 10px 24px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
  }
`;
const Section = styled.section`
  display: flex;
  align-content: flex-start;
  min-height: 700px;
  padding-bottom: 13px;
  padding: 40px;
  padding: 60px 0px;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;
  @media screen and (max-width: 768px) {
    min-height: 0px;
    margin: auto;
  }
`;
export default Login;
