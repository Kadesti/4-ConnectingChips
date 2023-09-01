import { styled } from "styled-components";
import { useEffect, useRef, useState } from "react";
import { co_bike, co_fit, co_walk } from "./TestBarrel";
import { ArrowLeft, Arrow_Right } from "./TestBarrel";

const Test = () => {
  const IMG = [co_bike, co_fit, co_walk];
  const IMGLen = IMG.slice(1);
  const TOTAL_SLIDES = IMGLen.length;

  const [count, setCount] = useState(0);
  const [sort, setSort] = useState("");
  // const [mouseX, setMouseX] = useState(0);
  const slideRef = useRef(null);

  useEffect(() => {
    console.log("count: ", count);
  }, [count]);

  const nextSlide = () => {
    setSort("next");

    if (count >= TOTAL_SLIDES) {
      setCount(0);
    } else {
      setCount((prev) => prev + 1);
    }
  };
  const prevSlide = () => {
    setSort("prev");

    if (count === 0) {
      setCount(TOTAL_SLIDES);
    } else {
      setCount((prev) => prev - 1);
    }
  };

  // const handleTouchStart: any = (e: React.MouseEvent<HTMLDivElement>) => {
  //   console.log("start");
  //   setMouseX(e.clientX);
  // };
  // const handleTouchEnd: any = (e: React.MouseEvent<HTMLDivElement>) => {
  //   console.log("end");
  //   if (mouseX < e.clientX) setCount((prev) => prev + 1);
  //   else if (mouseX > e.clientX) setCount((prev) => prev - 1);
  // };

  return (
    <ContainerS>
      {/* <input type="radio" name="slider" id="slider1" />
      <input type="radio" name="slider" id="slider2" />
      <input type="radio" name="slider" id="slider3" /> */}
      <ImageBoxS ref={slideRef} count={count} sort={sort} length={TOTAL_SLIDES}>
        {IMG.map((el, idx) => {
          return (
            <li key={idx}>
              <img src={el} alt="img" />
            </li>
          );
        })}
      </ImageBoxS>
      {/* <BulletS length={TOTAL_SLIDES}>
        {IMGLen.map((_, i) => {
          const seleted = count === i;
          return (
            <LabelS htmlFor={`slider${i + 1}`} key={i} seleted={seleted}>
              &nbsp;
            </LabelS>
          );
        })}
      </BulletS> */}
      <ButtonContainerS>
        <ButtonInnerS>
          <ButtonS onClick={prevSlide} isvalid={`${count !== 0}`}>
            <img src={ArrowLeft} alt="ArrowLeft" />
          </ButtonS>
          <ButtonS onClick={nextSlide} isvalid={`${count !== TOTAL_SLIDES - 1}`}>
            <img src={Arrow_Right} alt="ArrowRight" />
          </ButtonS>
        </ButtonInnerS>
      </ButtonContainerS>
    </ContainerS>
  );
};

export default Test;

const ContainerS = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const ImageBoxS = styled.ul<{ count: number; sort: string; length: number }>`
  display: flex;

  transition: ${(props) => (props.sort === "next" ? (!props.count ? "" : "all 0.5s ease-in-out") : props.sort === "prev" ? (props.count === props.length ? "" : "all 0.5s ease-in-out") : "")};
  transform: ${(props) => "translateX(-" + props.count * 196 + "px)"};

  li {
    margin-right: 1rem;
  }
`;

// const BulletS = styled.div<{ length: number }>`
//   position: absolute;
//   display: flex;
//   bottom: 10px;
//   left: ${(props) => (props.length % 2 === 1 ? `${375 / 2 - props.length * 16 * (2 / 3) * 2}px` : `${375 / 2 - ((props.length * 16) / 2) * 2}px`)};
//   gap: 2rem;
// `;

// const LabelS = styled.label<{ seleted: boolean }>`
//   display: inline-block;
//   border-radius: 50%;
//   background-color: ${(props) => (props.seleted ? "var(--color-main)" : "var(--color-bg)")};
//   width: 10px;
//   height: 10px;
//   margin-top: 5px;
//   cursor: pointer;
// `;

const ButtonContainerS = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

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

const ButtonS = styled.button<{ isvalid: string }>`
  visibility: ${(props) => (props.isvalid === "true" ? "" : "hidden")};
`;
