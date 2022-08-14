import styled from "styled-components";

import React from "react";

const Main = () => {
  return (
    <Container>
      <ShareBox>
        <div>
          <img src="/images/user.svg" />
          <button>start a post</button>
        </div>
        <div>
          <button>
            <img src="/images/photo-icon.svg" />
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
      </ShareBox>
      <div>
        <Article>
          <SharedActor>
            <a>
              <img src="/images/user.svg" />
              <div>
                <span>Title</span>
                <span>Info</span>
                <span>Date</span>
              </div>
              <button></button>
            </a>
          </SharedActor>
        </Article>
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
  padding: 5px 15px;
  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 50px;
      background: transparent;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 1px 8px 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.3);
        background-color: white;
        text-align: left;
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;

      button {
        border-radius: 3px;
        img {
          margin: 0 4px 0 -2px;
        }
        span {
          color: #70b5f9;
        }
        cursor: pointer;
        &:hover {
          background: rgba(0, 0, 0, 0.11);
        }
      }
    }
  }
`;
const Article = styled(CommentCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;
const SharedActor = styled.div``;
export default Main;
