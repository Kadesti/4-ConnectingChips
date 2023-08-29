import { styled, useRef, useState } from "./CarreselBarrel";
import { co_bike, co_fit, co_walk } from "./CarreselBarrel";
import { ArrowLeft, Arrow_Right } from "./CarreselBarrel";
import CarreselList from "./CarreselList";

/** 2023-08-29 Carresel.tsx - 캐러셀 컴포넌트 */
const Carresel = () => {
  const IMG = [co_bike, co_fit, co_walk];
  const IMGLen = IMG.slice(1);
  const TOTAL_SLIDES = IMGLen.length;

  const [count, setCount] = useState(0);
  const [sort, setSort] = useState("");
  const slideRef = useRef(null);

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

  return (
    <CarreselS>
      {/* 이미지 리스트 */}
      <ImageBoxS ref={slideRef} count={count} sort={sort} length={TOTAL_SLIDES}>
        <CarreselList />
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
    </CarreselS>
  );
};

export default Carresel;

/** 2023-08-29 Carresel.tsx - 캐러셀 컴포넌트 */
const CarreselS = styled.div`
  overflow: hidden;
  width: 100%;
`;

/** 2023-08-29 Carresel.tsx - 캐러셀 이미지 컴포넌트 */
const ImageBoxS = styled.ul<{ count: number; sort: string; length: number }>`
  display: flex;

  transition: ${(props) => (props.sort === "next" ? (!props.count ? "" : "all 0.5s ease-in-out") : props.sort === "prev" ? (props.count === props.length ? "" : "all 0.5s ease-in-out") : "")};
  transform: ${(props) => "translateX(-" + props.count * 190 + "px)"};
`;

/** 2023-08-29 Carresel.tsx - 캐러셀 버튼 영역 */
const ButtonContainerS = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
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

