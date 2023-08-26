import { styled } from "styled-components";
import postInfo from "../../data/postInfo";
import { likeIcon, commentIcon } from "../../Component/Like_CommentBarrel";
import { useState } from "react";

/** 2023-08-22 GroupActive.tsx - 작심 인증 글 내용 */
const PostContent = (): JSX.Element => {
  const [isLiked, setIsLiked] = useState(false);
  const [Commented, setCommented] = useState(false);
  /*
  const BtnIconArr = [
    {
      id: 0,
      src: likeIcon,
      alt: "like",
    },
    {
      id: 1,
      src: commentIcon,
      alt: "comment",
    },
  ];
  */

  const handlerLiked = (type: "cancel" | "add") => {
    setIsLiked((prev) => !prev);
    if (type === "cancel") return;
    if (type === "add") return;
  };

  const handlerCommented = () => {
    setCommented((prev) => !prev);
  };
  return (
    <PostContentS>
      <p className="post">{postInfo.postText}</p>
      <PostLikeS>
        <PostLikeCountS>
          <p className="like">{postInfo.likeAmount}명이 응원하고 있어요!</p>
          <p className="like"> 댓글 {postInfo.commentList.length}</p>
        </PostLikeCountS>
        <PostLikesViewS>
          {isLiked ? (
            <button onClick={() => handlerLiked("cancel")}>
              <img src={likeIcon} alt="like" />
            </button>
          ) : (
            <button onClick={() => handlerLiked("add")}>
              <img src={likeIcon} alt="like" />
            </button>
          )}
          {Commented ? (
            <button onClick={handlerCommented}>
              <img src={commentIcon} alt="comment" />
            </button>
          ) : (
            <button onClick={handlerCommented}>
              <img src={commentIcon} alt="comment" />
            </button>
          )}
        </PostLikesViewS>
      </PostLikeS>
    </PostContentS>
  );
};

export default PostContent;

/** 2023-08-22 GroupActive.tsx - 그룹페이지 아티클 내용 */
const PostContentS = styled.div`
  margin: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.06rem;

  /* height: 8rem; */

  p {
    &.like {
      color: var(--font-color3);
    }
    &.post {
      font-size: 0.875rem;
    }
  }
`;

/** 2023-08-22 GroupActive.tsx - 그룹페이지 좋아요 */
const PostLikeS = styled.div`
  width: 10.625rem;
  margin-bottom: 1.13rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

/** 2023-08-22 GroupActive.tsx - 그룹페이지 좋아요 / 댓글 수 */
const PostLikeCountS = styled.div`
  display: flex;
  justify-content: space-between;
`;

/** 2023-08-22 GroupActive.tsx - 그룹페이지 좋아요 / 댓글 보기 */
const PostLikesViewS = styled.div`
  display: flex;
  gap: 0.7rem;

  button {
    padding: 0;
  }
`;
