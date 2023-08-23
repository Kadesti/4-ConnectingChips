import { styled } from "styled-components";

const GroupHeader = (): JSX.Element => {
  return (
    <GroupBGHeaderS>
      <div>뒤</div>
      <div>글</div>
    </GroupBGHeaderS>
  );
};

/** 2023-08-22 GroupIntro.tsx - 그룹 인트로 뒤로가기 */
const GroupIntroHeader = (): JSX.Element => {
  return <GroupHeaderS>뒤</GroupHeaderS>;
};

export { GroupHeader, GroupIntroHeader };

/** 2023-08-22 GroupIntro.tsx - 그룹 인트로 뒤로가기 */
const GroupHeaderS = styled.header`
  /* position: fixed; */
  position: sticky;
  top: 0;

  height: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  
  // 아래 비치게 하기
  backdrop-filter: blur(10px);
`;

/** 2023-08-22 GroupPage.tsx - 그룹페이지 상단 고정 */
const GroupBGHeaderS = styled(GroupHeaderS)`
  background-color: rgba(255, 255, 255, 0.5);

  // 자연스럽게 붙이기
  /* padding-top: 3rem;
top: -2rem; */

  // 아래 비치게 하기
  backdrop-filter: blur(10px);
`;
