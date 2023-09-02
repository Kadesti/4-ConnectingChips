/** 2023-08-22 MissionType.tsx - 미션 그룹 멤버 정보 */
export interface MemberInfo {
  id: string;
  day: number;
  count: number;
  done: boolean;
}

interface Image {
  id: number;
  url: string;
  path: string;
}

export interface Post {
  id: number;
  title: string;
  image: Image;
}

/** 2023-08-20 MissionType.tsx - 미션 그룹 정보 */
export interface GroupInfoType {
  id: number;
  tag: string;
  title: string;
  intro: string;
  rule: string;
  memberList: MemberInfo[];
  posts: Post[];
  defaultImageid: number;
}

/** 2023-08-21 MissionType.tsx - 작심그룹 리스트 탭 */
export type GroupListTab = {
  id: number;
  title: string;
};

export type PageSort = "Page" | "Intro" | "Create";

export type doneBind = {
  doneList: boolean[];
  setDoneList: React.Dispatch<React.SetStateAction<boolean[]>>;
};
export type countBind = {
  countList: number[];
  setCountList: React.Dispatch<React.SetStateAction<number[]>>;
};
export type uuidBind = {
  uuidList: string[];
  setUuidList: React.Dispatch<React.SetStateAction<string[]>>;
};

interface CommonProps {
  slideRef: React.MutableRefObject<null>;
  count: number;
  sort: string;
  TOTAL_SLIDES: number;
}

export interface CarreselProps extends CommonProps {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  setSort: React.Dispatch<React.SetStateAction<string>>;
  doneBind: doneBind;
  countBind: countBind;
  uuidBind: uuidBind;
}

export interface ButtonListProps extends CommonProps {
  doneList: boolean[];
  uuidList: string[];
  countList: number[];
  IMG: string[];
}
