import styled from "styled-components";

import React from "react";

const Main = () => {
  return (
    <Container>
      <ShareBox>shared</ShareBox>
      <div>
        <img src="/images/user.svg" />
        <button>start a post</button>
      </div>
      <div>
        <button>
          <img src="/images/photo.svg" />
          <span>Photo</span>
        </button>
        <button>
          <img src="/images/video.svg" />
          <span>Video</span>
        </button>
        <button>
          <img src="/images/job.svg" />
          <span>Jobs</span>
        </button>
        <button>
          <img src="/images/article.svg" />
          <span>Articles</span>
        </button>
      </div>
    </Container>
  );
};
const Container = styled.div`
  grid-area: "main";
`;

const CommentCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.15), 0 0 0 rgba(0, 0, 0, 0.2);
`;
const ShareBox = styled(CommentCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;
  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
    }
  }
`;
export default Main;
