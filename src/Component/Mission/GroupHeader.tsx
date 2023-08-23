import { styled } from "styled-components";

const GroupHeader = (): JSX.Element => {
  return (
    <GroupBGHeaderS>
      <div>뒤로가기</div>
      <div>글작성</div>
    </GroupBGHeaderS>
  );
};

/** 2023-08-22 GroupIntro.tsx - 그룹 인트로 뒤로가기 */
const GroupIntroHeader = (): JSX.Element => {
  return <GroupHeaderS>뒤로가기</GroupHeaderS>;
};

export { GroupHeader, GroupIntroHeader };

/** 2023-08-22 GroupIntro.tsx - 그룹 인트로 뒤로가기 */
const GroupHeaderS = styled.header`
  position: sticky;
  top: 0;

  display: flex;
  justify-content: space-between;
  /* background-color: white; */
  padding: 1rem 1.2rem;
`;

/** 2023-08-22 GroupPage.tsx - 그룹페이지 상단 고정 */
const GroupBGHeaderS = styled(GroupHeaderS)`
  position: sticky;
  top: 0;

  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 1rem 1.2rem;

  // 자연스럽게 붙이기
  /* padding-top: 3rem;
top: -2rem; */

  // 아래 비치게 하기
  opacity: 0.7;
  backdrop-filter: blur(10px);
  /* -webkit-backdrop-filter: blur(10px); */
`;
