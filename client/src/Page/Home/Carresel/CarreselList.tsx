import { MissionSingleWide, findUrl, myInfo, myGroupList, ChipList, styled, Link } from "./CarreselBarrel";
import { ArrowLeft, Arrow_Right } from "./CarreselBarrel";

interface CarreselListProps {
  countBind: {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
  };
  setSort: React.Dispatch<React.SetStateAction<string>>;
  length: number;
}

/** 2023-08-29 Carresel.tsx - 캐러셀 컨텐츠 리스트 */
const CarreselList = ({ countBind, setSort, length }: CarreselListProps) => {
  const { count, setCount } = countBind;

  /** 2023-08-29 Carresel.tsx - 다음 이동 핸들러 */
  const nextSlide = () => {
    setSort("next");

    if (count >= length) setCount(0);
    else setCount((prev) => prev + 1);
  };

  /** 2023-08-29 Carresel.tsx - 이전 이동 핸들러 */
  const prevSlide = () => {
    setSort("prev");

    if (count === 0) setCount(length);
    else setCount((prev) => prev - 1);
  };

  const Mylist = myGroupList.map((mygroup) => {
    const missionInfo = mygroup.memberList.find((member) => member.id === myInfo.id);
    if (missionInfo === undefined) return <></>;

    const myDate = missionInfo.day;
    const myCount = missionInfo.count;
    const completedToday = missionInfo.done;

    const imageUrl = findUrl(mygroup);
    const { id, tag, title } = mygroup;

    return (
      <li key={id}>
        <MyMissionInfoS href={`/groupPage/${id}`}>
          <img src={imageUrl} alt="co_bike" />
          <MissionContentS>
            <MissionSingleWide text={tag} />
            <h2>{title}</h2>
            <p>
              🔥 <span className="date">{myDate}</span>일자 맛보기 중
            </p>
          </MissionContentS>
          <ChipList count={myCount} />
        </MyMissionInfoS>
      </li>
    );
  });

  return (
    <div>
      <div>
        {Mylist}
        {/* 좌우 이동 버튼 */}
        <ButtonContainerS>
          <ButtonInnerS>
            <ButtonS onClick={prevSlide} isvalid={`${count !== 0}`}>
              <img src={ArrowLeft} alt="ArrowLeft" />
            </ButtonS>
            <ButtonS onClick={nextSlide} isvalid={`${count !== length}`}>
              <img src={Arrow_Right} alt="ArrowRight" />
            </ButtonS>
          </ButtonInnerS>
        </ButtonContainerS>
      </div>
      {/* <CarreselBtnList /> */}
    </div>
  );
};

export default CarreselList;

// const CarreselBtnList = ({myCount}: {myCount: number}) => {
//   return (
//     <>
//       {myCount === 3 ? (
//         <Link to={`/groupPage/${id}`}>
//           <ClearBtnS>재작심하기</ClearBtnS>
//         </Link>
//       ) : completedToday ? (
//         <TodayClearBtnS>오늘 작심 성공!</TodayClearBtnS>
//       ) : (
//         <Link to="/uploadPost/1">
//           <NoneClearBtnS>작심 인증하기</NoneClearBtnS>
//         </Link>
//       )}
//     </>
//   );
// };

/** 2023-08-21 MyMisson.tsx - 나의 작심 현황 항목 정보 */
const MyMissionInfoS = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border: 0.1px solid;
  border-radius: 0.625rem;
  margin-bottom: 1rem;

  color: white;
  position: relative;

  cursor: pointer;

  h2 {
    font-size: 1.3rem;
    margin-top: 0.2rem;
    height: 4rem;
  }

  div,
  p,
  li,
  h2 {
    cursor: pointer;
  }

  span.date {
    color: var(--color-main);
  }
`;

/** 2023-08-29 MyMisson.tsx - 나의 작심 현황 텍스트 */
const MissionContentS = styled.div`
  position: absolute;
  padding: 1rem;
`;

/** 2023-08-29 Carresel.tsx - 캐러셀 버튼 영역 */
const ButtonContainerS = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  cursor: pointer;
`;

/** 2023-08-29 Carresel.tsx - 캐러셀 버튼 내부 위치잡기 */
const ButtonInnerS = styled.div`
  margin: 0 1rem;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    background-color: rgba(79, 79, 79, 0.4);
    border-radius: 10rem;
    padding: 0.5rem;
    width: 2rem;
    aspect-ratio: 1/1;
  }
`;

/** 2023-08-29 Carresel.tsx - 캐러셀 버튼 */
const ButtonS = styled.button<{ isvalid: string }>`
  visibility: ${(props) => (props.isvalid === "true" ? "" : "hidden")};
`;

/** 2023-08-21 MyMisson.tsx - 다른 작심 둘러보기 버튼 */
const ClearBtnS = styled.button`
  padding: 1rem;
  width: 100%;
  border-radius: 2rem;
  background-color: black;
  color: var(--color-main);
`;

/** 2023-08-27 MyMisson.tsx - 오늘 작심 성공! 버튼 */
const TodayClearBtnS = styled.button`
  padding: 1rem;
  width: 100%;
  border-radius: 2rem;
  background-color: var(--color-main);
  color: black;
  &:hover {
    cursor: default;
  }
`;

/** 2023-08-21 MyMisson.tsx - 작심 인증하기 버튼 */
const NoneClearBtnS = styled.button`
  border: 0.1rem solid yellow;
  padding: 1rem;
  width: 100%;
  border-radius: 2rem;
`;
