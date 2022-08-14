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
  padding-top: 80px;
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
    color: #0a66c2;
    font-size: 14px;
    a {
      font-weight: 700;
    }
  }
  p {
    font-size: 14px;
    color: #434649;
    font-weight: 600;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
  }
`;
export default Home;
