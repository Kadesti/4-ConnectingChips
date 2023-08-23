import { styled } from "styled-components";

import GroupActive from "./GroupActive";
import GroupArticle from "../../Component/Mission/GroupArticle";
import { GroupHeader } from "../../Component/Mission/GroupHeader";
import useFindGroup from "../../Hooks/useFindGroup";

/** 2023-08-22 GroupPage.tsx - 메인 컴프 */
const GroupPage = (): JSX.Element => {
  const { intro, rule, url } = useFindGroup();

  return (
    <div>
      <GroupHeader />
      <GroupImageS url={url} />
      <GroupContentS>
        <GroupArticle groupText={intro} groupRule={rule} selected={[0, 1, 3]} />
        <GroupActive />
      </GroupContentS>
    </div>
  );
};

export default GroupPage;

/** 2023-08-22 GroupPage.tsx - 그룹페이지 대표 이미지 */
const GroupImageS = styled.div<{ url: string }>`
  background-image: url(${(props) => props.url});
  background-size: 25rem;
  background-position: 0 -1rem;
  height: 10rem;
`;

/** 2023-08-22 GroupPage.tsx - 그룹페이지 아티클 + 인증 글 */
const GroupContentS = styled.div`
  margin: 0 1rem;
`;
