import { useState } from "react";
import { styled } from "styled-components";
import { useParams } from "react-router-dom";
import { GroupHeader } from "../../Component/Mission/GroupHeader";
import groupList from "../../data/groupList";
import GroupContent from "../../Component/Mission/GroupContent";
import { SubmitButtonCTA } from "../../Component/Mission/GroupButton";

/** 2023-08-24 CreatePost.tsx - 인증글쓰기 페이지 */
const CreatePost = () => {
  const { postID } = useParams();

  const [imageUrl,setImageUrl] = useState('');
  const [text,setText] = useState('');

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
      <GroupContent intro={intro} rule={rule} selected={[0, 2]} PageSort="Create" />
      <CreateFormS>
        <CreateFormUploadS>
          <h2>인증샷 올리기</h2>
          <SampleImageS />
        </CreateFormUploadS>
        <CreateFormUploadS>
          <h2>오늘의 작심은 어땠나요?</h2>
          <textarea placeholder="오늘 작심 성공!" />
        </CreateFormUploadS>
        <SubmitButtonCTA />
      </CreateFormS>
    </CreatePostS>
  );
};

export default CreatePost;

/** 2023-08-24 CreatePost.tsx - 인증글쓰기 페이지 */
const CreatePostS = styled.div`
  width: var(--width-mobile);
  border: 1px solid;
  height: 100vh;
`;

/** 2023-08-25 CreatePost.tsx - 인증글쓰기 폼 */
const CreateFormS = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  /* height: 100%; */
`;

/** 2023-08-25 CreatePost.tsx - 인증글쓰기 이미지/채팅 컨테이너 */
const CreateFormUploadS = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0 1rem;

  textarea {
    height: 16.3125rem;
    border: 1px solid #e3e3e3;
    border-radius: 1rem;
  }
`;

/** 2023-08-25 CreatePost.tsx - 임시 확보한 이미지 공간 */
const SampleImageS = styled.div`
  height: 5.70525rem;
  width: 5.70525rem;

  border-radius: 1rem;
  background-color: var(--color-main);
`;
