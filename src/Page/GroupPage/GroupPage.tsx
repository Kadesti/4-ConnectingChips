import { styled } from "styled-components";
import { useFindGroup } from "../../Hooks/useFindGroup";
import { GroupHeader } from "../../Component/Mission/GroupHeader";
import GroupContent from "../../Component/Mission/GroupContent";

/** 2023-08-22 GroupPage.tsx - 메인 컴프 */
const GroupPage = (): JSX.Element => {
  const { intro, rule, url } = useFindGroup();

  return (
    <div>
      <GroupHeader />
      <GroupImageS url={url} />
      <GroupContent intro={intro} rule={rule} selected={[0, 1]} sort="Active"/>
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

