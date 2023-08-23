/** 2023-08-22 MissionType.tsx - 미션 그룹 멤버 정보 */
export interface MemberInfo {
  memberid: number;
  day: number;
  count: number;
}

/** 2023-08-20 MissionType.tsx - 미션 그룹 정보 */
export interface GroupInfoType {
  groupID: number;
  tag: string;
  title: string;
  intro: string;
  rule: string;

  image: string;
  url: "/어디로든 문";
  memberAmount: number;
  memberList: MemberInfo[];
}

/** 2023-08-21 MissionType.tsx - 작심그룹 리스트 탭 */
export type CurrentMissionTab = {
  id: number;
  title: string;
};
