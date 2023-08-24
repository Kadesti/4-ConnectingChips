import GroupArticle from "../../Component/Mission/GroupArticle";
import { GroupHeader } from "../../Component/Mission/GroupHeader";
import groupList from "../../data/groupList";
import { useParams } from "react-router-dom";
import 자전거운동 from "../../image/예시사진모음/자전거운동.jpg";
import { styled } from "styled-components";
import GroupContent from "../../Component/Mission/GroupContent";

/** 2023-08-24 CreatePost.tsx - 인증글쓰기 페이지 */
const CreatePost = () => {
  const { postID } = useParams();

  // if (postID === undefined) {
  //   return <>잘못오셨습니다</>;
  // }

  // const groupMission = groupList.find((item) => String(item) === postID);
  // if (groupMission === undefined) {
  //   return <>잘못된 id입니다</>;
  // }
  // const { intro, rule } = groupMission;

  const { intro, rule } = groupList[0];

  return (
    <CreatePostS>
      <GroupHeader />
      <GroupContent intro={intro} rule={rule} selected={[0, 2]} sort="Create"/>
      <div>
        <div>인증샷 올리기</div>
        <div>오늘의 작심은 어땠나요?</div>
        <button>인증하기</button>
      </div>
    </CreatePostS>
  );
};

export default CreatePost;

/** 2023-08-22 GroupActive.tsx - 작심 인증 글 */
const GroupActive = (): JSX.Element => {
  return (
    <PostS>
      <h2>인증 사진 예시</h2>
      <PostImageS>
        <img src={자전거운동} alt="업로드 사진" />
      </PostImageS>
    </PostS>
  );
};

/** 2023-08-24 CreatePost.tsx - 인증글쓰기 페이지 */
const CreatePostS = styled.div`
  border: 1px solid;
`;

const PostContainerS = styled.div``;

/** 2023-08-22 GroupActive.tsx - 그룹페이지 아티클 */
const PostS = styled.article`
  background-color: var(--color-bg);
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
