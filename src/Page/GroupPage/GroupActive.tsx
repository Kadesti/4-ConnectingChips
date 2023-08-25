import { styled } from "styled-components";
import postInfo from "../../data/postInfo";
import 기본프로필 from '../../image/예시사진모음/default_profile.svg'
import 자전거운동 from "../../image/예시사진모음/자전거운동.jpg";
import { PageSort } from "../../Type/MissionType";
import point3 from "../../image/Icon/3point_icon.svg";
import { likeIcon, commentIcon } from '../../Component/Like_CommentBarrel'

/** 2023-08-22 GroupActive.tsx - 작심 인증 글 */
const GroupActive = ({ passsort }: { passsort: PageSort }): JSX.Element => {
  const nowTime: string = new Date().toLocaleString();

  return (
    <GroupActiveS passsort={passsort}>
      <h2>작심 인증 글</h2>
      <PostS>
        <PostHeader nowTime={nowTime} />
        <PostImageS>
          <img src={자전거운동} alt="업로드 사진" />
        </PostImageS>
        <PostContent />
      </PostS>
    </GroupActiveS>
  );
};

export default GroupActive;

/** 2023-08-22 GroupActive.tsx - 작심 인증 프로필 + 더보기 */
const PostHeader = ({ nowTime }: { nowTime: string }): JSX.Element => {
  const [year, month, day, time] = nowTime.split(".");

  return (
    <PostHeaderS>
      <PostHeaderProfileS>
        <PostProfileImageS>
          <img src={기본프로필} alt="프로필 사진" />
        </PostProfileImageS>
        <div>
          <h2>{postInfo.nickName}</h2>
          <p>{`${year}년 ${month}월 ${day}일 `}</p>
        </div>
      </PostHeaderProfileS>
      <img src={point3} alt="point3_icon" />
    </PostHeaderS>
  );
};

/** 2023-08-22 GroupActive.tsx - 작심 인증 글 내용 */
const PostContent = (): JSX.Element => {
  return (
    <PostContentS>
      <p className="post">{postInfo.postText}</p>
      <PostLikeS>
        <PostLikeCountS>
          <p className="like">{postInfo.likeAmount}명이 응원하고 있어요!</p>
          <p className="like"> 댓글{postInfo.commentList.length}</p>
        </PostLikeCountS>
        <PostLikesViewS>
          <img src={likeIcon} alt="like"/>
          <img src={commentIcon} alt="comment"/>
        </PostLikesViewS>
      </PostLikeS>
    </PostContentS>
  );
};

const GroupActiveS = styled.div<{ passsort: PageSort }>`
  margin: ${(props) => (props.passsort === "Intro" ? "0 1rem 1rem 1rem" : "0 1rem")};
  margin-top: 1.25rem;
  h2 {
    margin-bottom: 0.5rem;
  }
`;

/** 2023-08-22 GroupActive.tsx - 그룹페이지 아티클 */
const PostS = styled.article`
  background-color: var(--color-bg);
`;

/** 2023-08-22 GroupActive.tsx - 그룹페이지 아티클 헤더 */
const PostHeaderS = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* margin: 1rem; */
  padding: 1rem;
`;

/** 2023-08-22 GroupActive.tsx - 그룹페이지 아티클 헤더 프로필 */
const PostHeaderProfileS = styled.div`
  display: flex;
  align-items: center;

  h2 {
    margin-right: 0.5rem;
    font-size: 0.875rem;
  }

  p {
    color: var(--font-color2);
  }
`;

/** 2023-08-22 GroupActive.tsx - 그룹페이지 아티클 인증 이미지(임시) */
const PostProfileImageS = styled.div`
  width: 3rem;
  aspect-ratio: 1/1;
  border-radius: 10rem;
  overflow: hidden;
  margin-right: 0.5rem;

  img {
    width: 3.5rem;
    transform: translateX(-0.25rem) translateY(-0.2rem);
  }
`;

/** 2023-08-22 GroupActive.tsx - 그룹페이지 아티클 인증 이미지(임시) */
const PostImageS = styled.div`
  width: 100%;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
  }
`;
/** 2023-08-22 GroupActive.tsx - 그룹페이지 아티클 내용 */
const PostContentS = styled.div`
  margin: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;

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
  gap:0.5rem
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
`;
