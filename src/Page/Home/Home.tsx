import { styled } from "styled-components";
import MyMisson from "./MyMisson";
import CurrentMission from "./CurrentMission";

/** 2023-08-20 Home.tsx - 메인 컴프 */
const Home = (): JSX.Element => {
  const nickNmae = "김형욱";
  return (
    <HomeS>
      <LogoContainerS>
        <h1>Logo</h1>
      </LogoContainerS>
      <WelcomeTextS>
        반가워요 {nickNmae} 칩스!
        <br />
        아래 리스트 중에서
        <br />
        작심을 골라볼까요?
      </WelcomeTextS>
      <MyMisson />
      <CurrentMission />
    </HomeS>
  );
};

export default Home;

/** 2023-08-20 Home.tsx - 메인 컴프 스타일 */
const HomeS = styled.section`
  padding: 1rem;
  height: 100%;
  /* border: 1px solid blue; */
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

/** 2023-08-20 Home.tsx - 로고 위치 잡는 div */
const LogoContainerS = styled.div`
  display: flex;
  justify-content: center;
`;

/** 2023-08-20 Home.tsx - 오늘도 득근한 하루 되세요 */
const WelcomeTextS = styled.div`
  width: 70%;
  font-size: 1.5rem;
  padding: 2rem 0;
`;
