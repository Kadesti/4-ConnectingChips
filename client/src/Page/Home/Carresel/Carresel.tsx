import { CarreselProps } from "../../../Type/MissionType";
import { MissionSingleWide, findUrl, myInfo, myGroupList, ChipList, styled } from "./CarreselBarrel";
import { ArrowLeft, Arrow_Right } from "./CarreselBarrel";
import useCarresel from "./useCarresel";

/** 2023-08-29 Carresel.tsx - 캐러셀 컨텐츠 리스트 */
const Carresel = ({ carreselProps }: { carreselProps: CarreselProps }) => {
  const { slideRef, count, setCount, sort, setSort, TOTAL_SLIDES, doneBind, countBind, uuidBind } = carreselProps;
  const { dateList, doneList, countList, uuidList } = useCarresel(doneBind, countBind, uuidBind);

  /** 2023-08-29 Carresel.tsx - 다음 이동 핸들러 */
  const nextSlide = () => {
    setSort("next");

    if (count >= TOTAL_SLIDES) setCount(0);
    else setCount((prev) => prev + 1);
  };

  /** 2023-08-29 Carresel.tsx - 이전 이동 핸들러 */
  const prevSlide = () => {
    setSort("prev");

    if (count === 0) setCount(TOTAL_SLIDES);
    else setCount((prev) => prev - 1);
  };

  /** 2023-09-22 Carresel.tsx - 내 작심 현황 - Kadesti */
  const Mylist = myGroupList.map((mygroup, index) => {
    const missionInfo = mygroup.memberList.find((member) => member.id === myInfo.id);
    if (missionInfo === undefined) return <></>;

    const imageUrl = findUrl(mygroup);
    const { tag, title } = mygroup;

    return (
      // <li key={uuidList[index]}>
      <li key={index}>
        <MyMissionInfoS href={`/groupPage/${uuidList[index]}`}>
          <img src={imageUrl} alt="co_bike" />
          <MissionContentS>
            <MissionSingleWide text={tag} />
            <h2>{title}</h2>
            <p>
              🔥 <span className="date">{dateList[index]}</span>일자 맛보기 중
            </p>
          </MissionContentS>
          <ChipList count={countList[index]} />
        </MyMissionInfoS>
      </li>
    );
  });

  return (
    <div>
      <MissionListS>
        {/* 나의 작심 컨텐츠 */}
        <ImageBoxS ref={slideRef} count={count} sort={sort} length={TOTAL_SLIDES}>
          {Mylist}
        </ImageBoxS>

        {/* 좌우 이동 버튼 */}
        <ButtonContainerS>
          <ButtonInnerS>
            <ButtonS onClick={prevSlide} isvalid={`${count !== 0}`}>
              <img src={ArrowLeft} alt="ArrowLeft" />
            </ButtonS>
            <ButtonS onClick={nextSlide} isvalid={`${count !== TOTAL_SLIDES}`}>
              <img src={Arrow_Right} alt="ArrowRight" />
            </ButtonS>
          </ButtonInnerS>
        </ButtonContainerS>
      </MissionListS>
    </div>
  );
};

export default Carresel;

/** 2023-09-02 Carresel.tsx - 캐러샐 영역 - Kadesti */
const MissionListS = styled.div`
  display: flex;
  position: relative;
`;

/** 2023-08-29 Carresel.tsx - 캐러셀 이미지 컴포넌트 */
const ImageBoxS = styled.ul<{ count: number; sort: string; length: number }>`
  display: flex;

  transition: ${(props) => (props.sort === "next" ? (!props.count ? "" : "all 0.5s ease-in-out") : props.sort === "prev" ? (props.count === props.length ? "" : "all 0.5s ease-in-out") : "")};
  transform: ${(props) => "translateX(-" + props.count * 190 + "px)"};
  gap: 0.75rem;
`;

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

/** 2023-08-29 Carresel.tsx - 캐러셀 좌우 버튼 */
const ButtonS = styled.button<{ isvalid: string }>`
  visibility: ${(props) => (props.isvalid === "true" ? "" : "hidden")};
`;
