import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Banner as BannerImage, Logo_002 } from "./HomeImageBarrel";
import groupListData from "../../data/groupListData";
import { MyMisson, GroupList } from "./HomeBarrel";
import { GroupInfoType } from "../../Type/MissionType";
import { GNB } from "../../AppBarral";
import scrollTop from "../../Hooks/scrollTop";
import { group } from "console";
import testData from "../../data/testData";

type MyInfoType = {
  id: string;
  password: string;
  profileimg: string;
};

/** 2023-08-20 Home.tsx - 메인 컴프 */
const Home = (): JSX.Element => {
  const [isLogin, setIsLogin] = useState(false);

  const myInfo: MyInfoType = {
    id: "aadd1234",
    password: "abcd1234ef56",
    profileimg: "",
  };

  console.log("groupListData: ", groupListData);
  const myGroupList: GroupInfoType[] = groupListData.filter((group) => group.memberList.filter((member) => member.id === myInfo.id));
  // const myGroupList = groupListData.map((group) => group.memberList.filter((member) => console.log(member.id === myInfo.id)));
  console.log("myGroupList: ", myGroupList);

  // const testResult = testData.flatMap((item) => item.memberList.filter((member) => member.id === myInfo.id));
  // console.log("testResult: ", testResult);

  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <HomeS>
      <HomeHeaderS>
        <img src={Logo_002} alt="logo" />
        {isLogin ? (
          <button>로그아웃</button>
        ) : (
          <Link to="/login">
            <button>로그인</button>
          </Link>
        )}
      </HomeHeaderS>
      <HomeContentS>
        <WelcomeTextS>
          {isLogin ? (
            <h1>반가워요 {myInfo.id} 님! 오늘도 함께 작심을 성공해볼까요?</h1>
          ) : (
            <h1>
              반가워요 칩스!
              <br /> 아래 리스트에서 작심을 시작해볼까요?
            </h1>
          )}
        </WelcomeTextS>
        {/* {myGroupList && <MyMisson myGroupList={myGroupList} myID={myInfo.id} />} */}
        <Banner />
        <GroupList />
      </HomeContentS>

      {/* <div className="CTA">
        <GNB />
      </div> */}
    </HomeS>
  );
};

export default Home;

// const baseurl = process.env.REACT_APP_BASE_URL;

/** 2023-08-22 Home.tsx - 설문조사 배너 */
const Banner = (): JSX.Element => {
  return (
    <BannerS href={"https://docs.google.com/forms/d/e/1FAIpQLSfUEWLC19oM9kPgzitmki705aZxY8Wn5jkH1YtkMObi-1FHIg/viewform"} target="_blank">
      {/* <BannerS href={baseurl} target="_blank"> */}
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

    h2 {
      cursor: pointer;
    }
    p {
      cursor: pointer;
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
    word-break: keep-all;
  }
`;
