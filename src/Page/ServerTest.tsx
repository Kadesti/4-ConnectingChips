import { useEffect, useState } from "react";
import axios from "axios";
import { styled } from "styled-components";

function ServerTest() {
  const [text, setTest] = useState("");

//   useEffect(() => {
//     getServer();
//   }, []);

  const getServer = () => {
    // axios.get("http://52.78.19.133/");
    axios.get("http://52.78.19.133/").then((res) => setTest(res.data));
  };

  return (
    <div>
      <TestBtnS onClick={getServer}>서버 테스트</TestBtnS>
      <h2>{text}</h2>
    </div>
  );
}

export default ServerTest;

/** 2023-08-24 ServerTest.tsx - 서버테스트 */
const TestBtnS = styled.button`
  background-color: var(--color-main);
  height: 3.5rem;
  width: 100%;
  margin-top: 1rem;
  border-radius: 2rem;

  color: var(--font-color1);
  font-size: 1.3rem;
`;
