import GroupArticle from "../../Component/Mission/GroupArticle";
import { GroupHeader } from "../../Component/Mission/GroupHeader";
import groupList from "../../data/groupList";
import { useParams } from "react-router-dom";

const CreatePost = () => {
  const { postID } = useParams();

  if (postID === undefined) {
    return <>잘못오셨습니다</>;
  }

  const groupMission = groupList.find((item) => String(item) === postID);
  if (groupMission === undefined) {
    return <>잘못된 id입니다</>;
  }
  const { intro, rule } = groupMission;
  return (
    <div>
      <GroupHeader />
      <GroupArticle groupText={intro} groupRule={rule} selected={[0, 1, 2, 3]} />
    </div>
  );
};

export default CreatePost;
