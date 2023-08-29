import { styled } from "styled-components";

const Test2 = () => {
  const handleTouchStart: any = (e: React.MouseEvent<HTMLDivElement>) => {
    // console.log(e.nativeEvent.touches[0].clientX, "start!");
    console.log('start',e.clientX);
    
  };

  // const handleTouchMove: TouchEventHandler<HTMLDivElement> = (e) => {
  //   const currTouchX = e.nativeEvent.changedTouches[0].clientX;

  //   if (carouselRef.current !== null) {
  //     carouselRef.current.style.transform = `translateX(calc(-${currIndex}00% - ${(touchStartX - currTouchX) * 2 || 0}px))`;
  //   }
  // };

  const handleTouchEnd: any = (e: React.MouseEvent<HTMLDivElement>) => {
    // console.log(e.nativeEvent.changedTouches[0].clientX, "end!");
    console.log('end',e.clientX);
  };

  return <ContainerS onMouseDown={handleTouchStart} onMouseUp={handleTouchEnd} />;
  // return <ContainerS onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} />;
};

export default Test2;

const ContainerS = styled.div`
  width: 20rem;
  height: 20rem;

  background-color: var(--color-main);
`;
