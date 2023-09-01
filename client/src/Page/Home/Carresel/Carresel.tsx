import { styled, useRef, useState } from "./CarreselBarrel";
import { co_bike, co_fit, co_walk } from "./CarreselBarrel";
import CarreselList from "./CarreselList";

/** 2023-08-29 Carresel.tsx - 캐러셀 컴포넌트 */
const Carresel = () => {
  const IMG = [co_bike, co_fit, co_walk];
  const IMGLen = IMG.slice(1);
  const TOTAL_SLIDES = IMGLen.length;

  const [count, setCount] = useState(0);
  const [sort, setSort] = useState("");
  const slideRef = useRef(null);

  const countBind = { count, setCount };

  return (
    <CarreselS>
      {/* 이미지 리스트 */}
      <ImageBoxS ref={slideRef} count={count} sort={sort} length={TOTAL_SLIDES}>
        <CarreselList countBind={countBind} setSort={setSort} length={TOTAL_SLIDES} />
      </ImageBoxS>
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
