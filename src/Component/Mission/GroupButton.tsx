import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";
import { myGroupList } from "../../data/myInfo";

/** 2023-08-22 GroupButton.tsx - 참여하기 버튼 */
const JoinButtonCTA = (): JSX.Element => {
  const { uuid } = useParams();
  const [isLogin, setIsLogin] = useState(false);
  const [validJoin, setValidJoin] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      setIsLogin(true);

      if (myGroupList.length === 3) setValidJoin(false);
    }
  }, []);

  const joinGroup = async () => {
    if (!isLogin) return navigate("/logIn");

    try {
      await axios.post("/어딘가", {
        headers: { Authorization: localStorage.getIteme("access_token") },
      });

      navigate(`/groupPage/${uuid}`);
    } catch (error) {
      console.error("참여하기 실패: ", error);
    }
  };

  return <CTAButtonS valid={validJoin}>{validJoin ? <button onClick={joinGroup}>참여하기</button> : <button>최대 3개의 그룹까지 참여 가능합니다</button>}</CTAButtonS>;
};

/** 2023-08-22 GroupButton.tsx - 작심 인증하기 버튼 */
const PostButton = (): JSX.Element => {
  return <MissionButtonS href={`/uploadPost/1`}>작심 인증하기</MissionButtonS>;
};

/** 2023-08-22 GroupButton.tsx - 인증하기 버튼 */
const SubmitButtonCTA = (): JSX.Element => {
  return <CTAButtonS valid={true}>인증하기</CTAButtonS>;
};

export { JoinButtonCTA, PostButton, SubmitButtonCTA };

/** 2023-08-22 GroupButton.tsx - 버튼 공통 스타일 */
const LinkS = styled.a`
  height: 3.5rem;

  border-radius: 1.88rem;

  margin-top: 1.25rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

/** 2023-08-22 GroupArticle.tsx - CTA 버튼(참여하기, 인증하기) */
const CTAButtonS = styled(LinkS)<{ valid: boolean }>`
  background-color: ${(props) => (props.valid ? "var(--color-main)" : "var(--color-disabled2)")};
  margin: 0 1rem;
  margin-bottom: 1rem;
  position: sticky;
  bottom: 0rem;

  button {
    color: ${(props) => (props.valid ? "var(--font-color1)" : "var(--color-disabled1)")};
    font-size: 1rem;
  }
`;

/** 2023-08-22 GroupArticle.tsx - 작심 인증하기 버튼 */
const MissionButtonS = styled(LinkS)`
  border: 0.1rem solid;
  border-color: var(--color-main);

  width: 100%;
`;
