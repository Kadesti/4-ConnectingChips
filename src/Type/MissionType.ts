/** 2023-08-20 MissionType.tsx - 나의 작심 현황 항목 */
export type MyMissionType = {
  id: number;
  tag: string;
  title: string;
  image: string;
  day: number;
  count: number;
};

/** 2023-08-21 MissionType.tsx - 작심그룹 리스트 탭 */
export type CurrentMissionTab = {
  id: number;
  title: string;
};
