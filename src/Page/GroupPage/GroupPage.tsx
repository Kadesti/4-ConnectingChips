import { useEffect } from "react";
import { styled } from "styled-components";
import { useFindGroup } from "../../Hooks/useFindGroup";
import { GroupHeader } from "../../Component/Mission/GroupHeader";
import GroupContent from "../../Component/Mission/GroupContent";
import Comment from "./Comment";
import scrollTop from "../../Hooks/scrollTop";

/** 2023-08-22 GroupPage.tsx - 메인 컴프 */
const GroupPage = (): JSX.Element => {
  const { intro, rule, url } = useFindGroup();

  useEffect(() => {
    // scrollTop();
  }, []);

  return (
    <GroupPageS>
      <GroupHeader />
      <GroupImageS url={url} />
      <GroupContent intro={intro} rule={rule} selected={[0, 1, 3]} passsort="Page" />
      <Comment />
    </GroupPageS>
  );
};

export default GroupPage;

const GroupPageS = styled.div`
  width: var(--width-mobile);
  position: relative;

  border: 1px solid;
`;

/** 2023-08-22 GroupPage.tsx - 그룹페이지 대표 이미지 */
const GroupImageS = styled.div<{ url: string }>`
  background-image: url(${(props) => props.url});
  background-size: 25rem;
  background-position: 0 -1rem;
  height: 10rem;
`;
