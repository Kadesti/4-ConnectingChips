/** 2023-08-22 MissionType.tsx - 미션 그룹 멤버 정보 */
export interface MemberInfo {
  id: string;
  day: number;
  count: number;
}

interface Image {
  id: number;
  url: string;
  path: string;
}

export interface Post {
  id: number;
  title: string;
  images: Image[];
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