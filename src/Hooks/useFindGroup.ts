import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { initGroup, initImage } from "../data/initialData";
import { GroupInfoType } from "../Type/MissionType";
import groupList from "../data/groupList";

interface FindGroupHook {
  intro: string;
  rule: string;
  url: string;
};

/** 2023-08-23 useFindGroup.ts - uuid를 받아 intro rule url 뱉는 함수 */
const useFindGroup = (): FindGroupHook => {
  const { uuid } = useParams();
  const [group, setGroup] = useState(initGroup);
  const [image, setImage] = useState(initImage);

  useEffect(() => {
    if (uuid) {
      const { group, defaultImage } = FindGroup(uuid, initGroup);
      setGroup(group);
      setImage(defaultImage);
    }
  }, [uuid]);

  const { intro, rule } = group;
  const url = image.url;
  return { intro, rule, url };
};

export default useFindGroup;

/** 2023-08-23 useFindGroup.ts - 파라미터로 그룹과 썸네일 찾는 함수 */
const FindGroup = (uuid: string | undefined, initGroup: GroupInfoType): any => {
  // if (uuid === undefined) return <>잘못오셨습니다</>;
  if (uuid === undefined) return initGroup;

  const group = groupList.find((group) => group.id === Number(uuid));
  // if (group === undefined) return <>잘못된 id입니다</>;
  if (group === undefined) return initGroup;

  const { posts } = group;
  const defaultPost = posts.find((post) => post.images.find((image) => image.id === group.defaultImageid));
  // if (defaultPost === undefined) return <></>;
  if (defaultPost === undefined) return initGroup;

  const defaultImage = defaultPost.images.find((image) => image.id === group.defaultImageid);
  // if (defaultImage === undefined) return <></>;
  if (defaultImage === undefined) return initGroup;

  return { group, defaultImage };
};
