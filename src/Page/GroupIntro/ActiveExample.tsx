import { styled } from "styled-components";
import 자전거운동 from "../../image/예시사진모음/자전거운동.jpg";

/** 2023-08-22 ActiveExample.tsx - 작심 인증 글 */
const ActiveExample = (): JSX.Element => {
  //   const nowTime: string = new Date().toLocaleString();

  return (
    <PostS>
      <h2>인증 사진 예시</h2>
      <PostImageS>
        <img src={자전거운동} alt="업로드 사진" />
      </PostImageS>
    </PostS>
  );
};

export default ActiveExample;

/** 2023-08-22 ActiveExample.tsx - 그룹페이지 아티클 */
const PostS = styled.article`
  background-color: rgba(255, 255, 255, 0.7);
  color: var(--font-color1);
  padding: 1rem;
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

/** 2023-08-22 ActiveExample.tsx - 그룹페이지 아티클 인증 이미지(임시) */
const PostImageS = styled.div`
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
  }
`;
