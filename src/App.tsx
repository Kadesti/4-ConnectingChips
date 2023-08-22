import { styled } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GNB, Home, GroupIntro, Feed, MyPage, GroupPage } from "./AppBarral";

function App() {
  return (
    <MobileS>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/groupIntro/:groupID" element={<GroupIntro />} />
          <Route path="/groupPage/:groupID" element={<GroupPage />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
        {/* <GNB /> */}
      </BrowserRouter>
    </MobileS>
  );
}

export default App;

/** 2023-08-20 App.tsx 모바일 케이스 */
const MobileS = styled.div`
  width: 375px;
  height: 812px;

  border: solid 1px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
