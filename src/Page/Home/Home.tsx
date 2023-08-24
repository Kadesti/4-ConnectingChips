import { styled } from "styled-components";
import MyMisson from "./MyMisson";
import CurrentMission from "./CurrentMission";
import { Banner as BannerImage, Logo_002 } from "./HomeImageBarrel";
import groupList from "../../data/groupList";
import { GroupInfoType } from "../../Type/MissionType";
import { GNB } from "../../AppBarral";

/** 2023-08-20 Home.tsx - 메인 컴프 */
const Home = (): JSX.Element => {
  const nickNmae: string = "김형욱";
  const myID: number = 42186;
  const myGroupList: GroupInfoType[] = groupList.filter((group) => group.memberList.find((member) => member.id === myID));

  return (
    <HomeS>
      <HomeHeaderS>
        <img src={Logo_002} alt="logo" />
        <button>로그인</button>
      </HomeHeaderS>
      <HomeContentS>
        <WelcomeTextS>
          <h1>
            {nickNmae} 님,
            <br />
            오늘도 득근한 하루되세요!
          </h1>
        </WelcomeTextS>
        {myGroupList && <MyMisson myGroupList={myGroupList} myID={myID} />}
        <Banner />
        <CurrentMission />
      </HomeContentS>

      <div className="CTA">
        <GNB />
      </div>
    </HomeS>
  );
};

export default Home;

/** 2023-08-22 Home.tsx - 설문조사 배너 */
const Banner = (): JSX.Element => {
  return (
    <BannerS href={"http://52.78.19.133/"} target="_blank">
      <div className="bannerText">
        <h2>칩스님의 의견을 들려주세요</h2>
        <p>작심삼칩을 부탁해</p>
      </div>
      <img src={BannerImage} alt="bannerImage" />
    </BannerS>
  );
};

/** 2023-08-22 Home.tsx - 설문조사 배너 */
const BannerS = styled.a`
  display: block;
  height: 5.5rem;
  background-color: var(--color-line);

  padding: 1rem;
  margin-bottom: 1.25rem;

  .bannerText {
    width: 7.9375rem;

    p {
      font-size: 0.8125rem;
      margin-top: 0.25rem;
    }
  }
  img {
    width: 10.5625rem;
    position: absolute;
    transform: translateX(9.5rem) translateY(-5.7rem);
  }
`;

/** 2023-08-20 Home.tsx - 메인 컴프 스타일 */
const HomeS = styled.section`
  height: 100%;

  .CTA {
    position: sticky;
    /* position: fixed; */
    max-width: var(--width-mobile);
    width: var(--width-mobile);
    bottom: 0;
  }
`;

/** 2023-08-20 Home.tsx - 홈화면 헤더 */
const HomeHeaderS = styled.header`
  display: flex;
  height: 2.7rem;
  justify-content: space-between;
  align-items: center;

  background-color: var(--font-color1);
  padding: 1rem;

  position: sticky;
  top: 0;

  img {
    height: 1.8rem;
  }

  button {
    color: var(--color-bg);
    width: 5.125rem;
    height: 2rem;
    border: 0.1rem solid var(--color-bg);
    border-radius: 2rem;
  }
`;

/** 2023-08-20 Home.tsx - WelcomeTextS, MyMisson, CurrentMission 컨테이너 */
const HomeContentS = styled.div`
  margin: 0 1rem;
  margin-bottom: 5rem;
`;

/** 2023-08-20 Home.tsx - 오늘도 득근한 하루 되세요 */
const WelcomeTextS = styled.div`
  width: 70%;
  padding: 2rem 0;

  h1 {
    display: block;
  }
`;
