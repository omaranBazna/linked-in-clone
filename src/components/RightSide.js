import styled from "styled-components";

import React from "react";

const RightSide = () => {
  return (
    <Container>
      <FollowCard>rightside</FollowCard>
    </Container>
  );
};
const Container = styled.div`
  grid-area: rightside;
`;
const FollowCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0, 0, 0, 0.65), 0 0 0 rgb(0, 0, 0, 0.2);
  padding: 12px;
`;
export default RightSide;
