import styled from "styled-components";

import React from "react";

const RightSide = () => {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h2>Add to your feed</h2>
          <img src="/images/feed-icon.svg" />
        </Title>
        <FeedList>
          <li>
            <a>
              <Avatar></Avatar>
            </a>
            <div>
              <span>#LinkedIn</span>
              <button>Follow</button>
            </div>
          </li>
          <li>
            <a>
              <Avatar></Avatar>
            </a>
            <div>
              <span>#Videos</span>
              <button>follow</button>
            </div>
          </li>
        </FeedList>
      </FollowCard>
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
const Title = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  width: 100%;
  color: rgba(0, 0, 0, 0.6);
`;
const FeedList = styled.ul`
  margin-top: 60px;
  display: flex;
  align-items: center;
  margin: 12px 0;
  position: relative;
  font-size: 14px;
  & > div {
    display: flex;
    flex-direction: column;
  }
  button {
    background-color: transparent;
    color: rgb(0, 0, 0, 0.6);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);
  }
`;
const Avatar = styled.div``;
export default RightSide;
