import { styled } from "styled-components";
import 달리기 from "../../image/예시사진모음/달리기.jpg";
import GroupArticle from "../../Component/Mission/GroupArticle";

/** 2023-08-21 GroupIntro.tsx - 메인 컴프 */
const GroupIntro = (): JSX.Element => {
  const groupText = "미션 소개글을 여기에다가 써주세요!\n어떤 목적으로 하는 미션인지를 적어주면 됩니다~\n00칼로리 소모하려면 몇 분 운동해야 하는지 적기!";
  const groupRule = "첫째, 칼로리 소모 00칼로리 해야 합니다\n둘째, 소모한 칼로리를 사진 혹은 글로 인증하면 끝!";
  return (
    <GroupIntroS img={달리기}>
      <BGDarkS>
        <GroupContainerS>
          <div>뒤로가기</div>
          <GroupArticle groupText={groupText} groupRule={groupRule} />
        </GroupContainerS>
      </BGDarkS>
    </GroupIntroS>
  );
};

export default GroupIntro;

/** 2023-08-21 GroupIntro.tsx - 메인 컴프 */
const GroupIntroS = styled.div<{ img: string }>`
  position: relative;
  color: white;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border: 1px solid;
  height: 100%;

  background-image: url(${(props) => props.img});
  background-size: 78rem;
  background-position-x: -25rem;
`;

/** 2023-08-21 GroupIntro.tsx - 백 어두운 레이어 추가 */
const BGDarkS = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.3);
`;

/** 2023-08-21 GroupIntro.tsx - 그룹 인트로 뒤로가기&컨텐츠 담긴 컨테이너 */
const GroupContainerS = styled.div`
  padding: 1rem;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
