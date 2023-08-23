import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { initGroup } from "../data/initialData";
import { GroupInfoType } from "../Type/MissionType";
import groupList from "../data/groupList";

interface FindGroupHook {
  intro: string;
  rule: string;
  url: string;
}

/** 2023-08-23 useFindGroup.ts - uuid를 받아 intro rule url 뱉는 함수 */
const useFindGroup = (): FindGroupHook => {
  const { uuid } = useParams();
  const [group, setGroup] = useState(initGroup);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (uuid) {
      const { group, imageUrl } = FindGroup(uuid, initGroup);
      setGroup(group);
      setImageUrl(imageUrl);
    }
  }, [uuid]);

  const { intro, rule } = group;
  return { intro, rule, url: imageUrl };
};


/**
 * 2023-08-23 useFindGroup.ts - 파라미터로 그룹과 썸네일 찾는 함수 
 * @param uuid 접속한 그룹 페이지의 파라미터
 * @param initGroup 예외처리를 위한 초기 값
 * @returns 내가 속한 그룹, 썸네일Url
 */
const FindGroup = (uuid: string | undefined, initGroup: GroupInfoType): { group: GroupInfoType; imageUrl: string } => {
  const initValue = { group: initGroup, imageUrl: "" };
  if (uuid === undefined) return initValue;

  const group = groupList.find((group) => group.id === Number(uuid));
  if (group === undefined) return initValue;

  const imageUrl = findUrl(group);
  return { group, imageUrl };
};

/** 2023-08-23 useFindGroup.ts - 그룹 썸네일 찾는 함수  */

/**
 * 2023-08-23 useFindGroup.ts - 그룹 썸네일 찾는 함수
 * @param myGroup 참여중인 그룹
 * @returns 썸네일Url
 */
const findUrl = (myGroup: GroupInfoType): string => {
  const thumbnailId = myGroup.defaultImageid;

  const post = myGroup.posts.find((post) => post.images.find((image) => image.id === thumbnailId));
  if (post === undefined) return "";
  const image = post.images.find((image) => image.id === thumbnailId);
  if (image === undefined) return "";

  return image.url;
};

export { useFindGroup, findUrl };
