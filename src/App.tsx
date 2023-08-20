import { styled } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Page/Home/Home";
import Feed from "./Page/Feed/Feed";
import MyPage from "./Page/MyPage/MyPage";
import GNB from "./Component/GNB";

function App() {
  return (
    <MobileS>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
      <GNB />
    </BrowserRouter>
    </MobileS>

  );
}

export default App;

/** 2023-08-20 App.tsx 모바일 케이스 */
const MobileS = styled.div`
  width: 432px;
  height: 768px;

  border: solid 1px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

