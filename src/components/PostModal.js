import styled from "styled-components";
import React from "react";

const PostModal = () => {
  return (
    <Container>
      <Content></Content>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10000;
  color: black;
  background-color: rgba(0, 0, 0, 0.8);
`;
const Content = styled.div`
  width: 100%;
  max-width: 552px;
  background-color: white;
`;
export default PostModal;
