import { styled } from "styled-components";
import { MissionSingleWide } from "../../Component/MissionTab";
import 달리기 from "../../image/예시사진모음/달리기.jpg";

/** 2023-08-21 GroupIntro.tsx - 메인 컴프 */
const GroupIntro = (): JSX.Element => {
  const groupText = "미션 소개글을 여기에다가 써주세요!\n어떤 목적으로 하는 미션인지를 적어주면 됩니다~\n00칼로리 소모하려면 몇 분 운동해야 하는지 적기!";
  const groupRule = "첫째, 칼로리 소모 00칼로리 해야 합니다\n둘째, 소모한 칼로리를 사진 혹은 글로 인증하면 끝!";
  return (
    <GroupIntroS img={달리기}>
      <BGDarkS>
        <GroupContainerS>
          <div>뒤로가기</div>
          <GroupArticleS>
            <HeadLine />
            <MissionIntro groupText={groupText} />
            <MissionRule groupRule={groupRule} />
            <MissionButtonS>참여하기</MissionButtonS>
          </GroupArticleS>
        </GroupContainerS>
      </BGDarkS>
    </GroupIntroS>
  );
};

export default GroupIntro;

/** 2023-08-21 GroupIntro.tsx - 그룹 정보 */
interface GroupInfoType {
  id: number;
  tab: string;
  title: string;
  member: number;
}
/** 2023-08-21 GroupIntro.tsx - 타이틀 / 태그 / n일차 */
const HeadLine = (): JSX.Element => {
  const groupInfo: GroupInfoType = {
    id: 0,
    tab: "헬스",
    title: "몸에서 닭다리 빼기",
    member: 10,
  };

  return (
    <HeadLineS>
      <MissionSingleWide text={groupInfo.tab} />
      <h1>{groupInfo.title}</h1>
      <p>{groupInfo.member}명과 함께 맛보기 중</p>
    </HeadLineS>
  );
};

/** 2023-08-21 GroupIntro.tsx - 미션 소개글 */
const MissionIntro = ({ groupText }: { groupText: string }): JSX.Element => {
  //   return <div>미션 소개글을 여기에다가 써주세요! <br />어떤 목적으로 하는 미션인지를 적어주면 됩니다~</div>;
  return <p className="intoduce">{groupText}</p>;
};

/** 2023-08-21 GroupIntro.tsx - 미션 규칙 */
const MissionRule = ({ groupRule }: { groupRule: string }): JSX.Element => {
  return (
    <MissionRuleS>
      <div>인증 글쓰기 규칙</div>
      <p className="rule">{groupRule}</p>
    </MissionRuleS>
  );
};

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

/** 2023-08-21 GroupIntro.tsx - 그룹 인트로 아티클 */
const HeadLineS = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  h1 {
    font-size: 1.5rem;
  }

  p {
    font-size: 0.75rem;
  }
`;

/** 2023-08-21 GroupIntro.tsx - 그룹 인트로 아티클 */
const GroupArticleS = styled.article`
  margin-bottom: 5.44rem;

  p {
    white-space: pre-line;
    font-size: 0.875rem;
  }
  p.intoduce {
    margin-top: 1rem;
  }
`;

/** 2023-08-21 GroupIntro.tsx - 그룹 아티클 규칙 */
const MissionRuleS = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  color: black;
  padding: 1rem;
  margin: 1.25rem 0;
  border-radius: 1rem;

  
  p {
    white-space: pre-line;
    font-size: 0.875rem;
  }

  .rule {
    color: #767676;
  }
`;

/** 2023-08-21 GroupIntro.tsx - 참여하기 버튼 */
const MissionButtonS = styled.button`
  background-color: #fb0;
  width: 100%;
  height: 3.5rem;

  font-size: 1rem;
  border-radius: 1.88rem;
`;
