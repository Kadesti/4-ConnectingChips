import GroupArticle from "../Component/Mission/GroupArticle";
import { useParams } from "react-router-dom";
import missionList from "../data/groupList";
import { styled } from "styled-components";
import { PostInfo } from "../Type/PostInfo";

/** 2023-08-22 GroupPage.tsx - 메인 컴프 */
const GroupPage = (): JSX.Element => {
  const { groupID } = useParams();
  if (groupID === undefined) {
    return <>잘못오셨습니다</>;
  }

  const groupMission = missionList.find((mission) => String(mission.groupID) === groupID);
  if (groupMission === undefined) {
    return <>잘못된 id입니다</>;
  }

  const { intro, rule } = groupMission;

  return (
    <GroupPageS>
      <GroupHeaderS>
        <div>뒤로가기</div>
        <div>글작성</div>
      </GroupHeaderS>
      <GroupImageS url={groupMission.image} />
      <GroupContentS>
        <GroupArticle groupText={intro} groupRule={rule} selected={[0, 1, 3]} state="post" />
        <GroupActive />
      </GroupContentS>
    </GroupPageS>
  );
};

export default GroupPage;



/** 2023-08-22 GroupPage.tsx - 작심 인증 글 */
const GroupActive = (): JSX.Element => {
  const nowTime: string = new Date().toLocaleString();
  const [year, month, day, time] = nowTime.split(".");

  const postInfo: PostInfo = {
    nickName: "커넥팅칩스",
    postText: "오늘도 2일째 운동 조지고 왔습니다!!!\n작심삼일도 꾸준히 하면 계속 할 수 있다",
    likeAmount: 30,
    commentList: [
      {
        id: 0,
        user: "가나다",
        text: "정말 그래요",
      },
      {
        id: 1,
        user: "가나다",
        text: "정말 그래요",
      },
      {
        id: 2,
        user: "가나다",
        text: "정말 그래요",
      },
    ],
  };

  return (
    <section>
      <h2>작심 인증 글</h2>
      <PostS>
        <PostHeaderS>
          <PostHeaderProfileS>
            <h2>프로필</h2>
            <div>
              <h2>{postInfo.nickName}</h2>
              <p>{`${year}년 ${month}월 ${day}일 ${time}`}</p>
            </div>
          </PostHeaderProfileS>
          <div>더보기</div>
        </PostHeaderS>
        <PostImageS>사진</PostImageS>
        <PostContents>
          <p className="post">{postInfo.postText}</p>
          <PostLikeS>
            <PostLikeCountS>
              <p>{postInfo.likeAmount}명이 응원하고 있어요!</p>
              <p>댓글{postInfo.commentList.length}</p>
            </PostLikeCountS>
            <PostLikesViewS>
              <div>icon1</div>
              <div>icon2</div>
            </PostLikesViewS>
          </PostLikeS>
        </PostContents>
      </PostS>
    </section>
  );
};

/** 2023-08-22 GroupPage.tsx - 메인 컴프 */
const GroupPageS = styled.div`
  overflow-y: scroll;
  position: relative;

  ::-webkit-scrollbar {
    display: none;
  }
`;

/** 2023-08-22 GroupPage.tsx - 그룹페이지 상단 고정 */
const GroupHeaderS = styled.header`
  position: sticky;
  top: 0;

  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 1rem 1.2rem;

  /* // 자연스럽게 붙이기
  padding-top: 3rem;
  top: -2rem;

  // 아래 비치게 하기
  opacity: 0.7;
  backdrop-filter: blur(2rem); */
`;

/** 2023-08-22 GroupPage.tsx - 그룹페이지 대표 이미지 */
const GroupImageS = styled.div<{ url: string }>`
  background-image: url(${(props) => props.url});
  background-size: 25rem;
  background-position: 0 -1rem;
  height: 10rem;
`;

/** 2023-08-22 GroupPage.tsx - 그룹페이지 아티클 + 인증 글 */
const GroupContentS = styled.div`
  margin: 0 1rem;
`;

/** 2023-08-22 GroupPage.tsx - 그룹페이지 아티클 */
const PostS = styled.article`
  background-color: var(--color-bg);
`;

/** 2023-08-22 GroupPage.tsx - 그룹페이지 아티클 헤더 */
const PostHeaderS = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* margin: 1rem; */
  padding: 1rem;
`;

/** 2023-08-22 GroupPage.tsx - 그룹페이지 아티클 헤더 프로필 */
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

/** 2023-08-22 GroupPage.tsx - 그룹페이지 아티클 인증 이미지(임시) */
const PostImageS = styled.div`
  aspect-ratio: 1/1;
  background-color: var(--color-main);
`;
/** 2023-08-22 GroupPage.tsx - 그룹페이지 아티클 내용 */
const PostContents = styled.div`
  margin: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;

  p.post {
    font-size: 0.875rem;
  }
`;

/** 2023-08-22 GroupPage.tsx - 그룹페이지 좋아요 */
const PostLikeS = styled.div`
  width: 10.625rem;
  height: 3.3125rem;
`;

/** 2023-08-22 GroupPage.tsx - 그룹페이지 좋아요 / 댓글 수 */
const PostLikeCountS = styled.div`
  display: flex;
  justify-content: space-between;
`;

/** 2023-08-22 GroupPage.tsx - 그룹페이지 좋아요 / 댓글 보기 */
const PostLikesViewS = styled.div`
  display: flex;
`;
