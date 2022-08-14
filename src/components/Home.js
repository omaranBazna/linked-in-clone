import styled from "styled-components";
import React from "react";

const Home = () => {
  return (
    <Container>
      <Section>
        <h5>
          <a>Hiring in a hurry ?-</a>
        </h5>
        <p>find talented in record time with Upwork and keep business moving</p>
      </Section>
    </Container>
  );
};
const Container = styled.div`
  padding-top: 52px;
  max-width: 100%;
`;
const Content = styled.div`
  max-width: 1128px;
  margin-left: auto;
  margin-right: auto;
`;
const Section = styled.div`
  min-height: 50px;
  box-sizing: content-box;
  text-align: center;
  text-decoration: underline;
  display: flex;
  justify-content: center;
  h5 {
    color: #0a660a;
    font-size: 14px;
    a {
      font-weight: 700;
    }
  }
`;
export default Home;
