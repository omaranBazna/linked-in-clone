import styled from "styled-components";

import React from "react";

const LeftSide = () => {
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground />
          <a>
            <Photo />
            <Link>Welcome there</Link>
          </a>
          <a>
            <AddPhotoText>add Photo</AddPhotoText>
          </a>
        </UserInfo>
      </ArtCard>
    </Container>
  );
};
const Container = styled.div`
  grid-area: leftside;
`;

const ArtCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;

  background-color: #fff;
  border-radius: 5px;
  transition: box-shadow 3s;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0, 0, 0, 0.15), 0 0 0 rgb(0, 0, 0, 0.2);
`;
const UserInfo = styled.div``;
export default LeftSide;