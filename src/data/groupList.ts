import 역도 from "../image/예시사진모음/역도.jpg";
import 달리기 from "../image/예시사진모음/달리기.jpg";
import 삼대운동 from "../image/예시사진모음/삼대운동.jpg";
import 빨간벽 from "../image/예시사진모음/빨간벽.jpg";
import { GroupInfoType } from "../Type/MissionType";

/** 2023-08-23 groupList.ts - 전체 그룹 리스트  */
const groupList: GroupInfoType[] = [
  {
    id: 44123,
    tag: "헬스",
    title: "헬스 모여라!",
    intro: "미션 소개글을 여기에다가 써주세요!\n어떤 목적으로 하는 미션인지를 적어주면 됩니다~\n00칼로리 소모하려면 몇 분 운동해야 하는지 적기!",
    rule: "첫째, 칼로리 소모 00칼로리 해야 합니다\n둘째, 소모한 칼로리를 사진 혹은 글로 인증하면 끝!",
    defaultImageid: 0,
    memberList: [
      {
        id: 42186,
        day: 6,
        count: 3,
      },
      {
        id: 18235,
        day: 2,
        count: 2,
      },
    ],
    posts: [
      {
        id: 0,
        title: "인증 이름1",

        images: [
          {
            id: 0,
            url: 역도,
            path: "/wwjkrn131",
          },
          {
            id: 1,
            url: "",
            path: "/sdnjk3n14",
          },
          {
            id: 2,
            url: "",
            path: "/sdnjk3n14",
          },
        ],
      },
      {
        id: 1,
        title: "인증 이름2",

        images: [
          {
            id: 0,
            url: 역도,
            path: "/wwjkrn131",
          },
          {
            id: 1,
            url: "",
            path: "/sdnjk3n14",
          },
          {
            id: 2,
            url: "",
            path: "/sdnjk3n14",
          },
        ],
      },
    ],
  },
  {
    id: 17850,
    tag: "걷기",
    title: "걷기는 재밌단말이지비",
    intro: "미션 소개글을 여기에다가 써주세요!\n어떤 목적으로 하는 미션인지를 적어주면 됩니다~\n00칼로리 소모하려면 몇 분 운동해야 하는지 적기!",
    rule: "첫째, 칼로리 소모 00칼로리 해야 합니다\n둘째, 소모한 칼로리를 사진 혹은 글로 인증하면 끝!",
    defaultImageid: 0,
    memberList: [
      {
        id: 42186,
        day: 2,
        count: 2,
      },
      {
        id: 18235,
        day: 2,
        count: 2,
      },
    ],
    posts: [
      {
        id: 0,
        title: "인증 이름3",

        images: [
          {
            id: 0,
            url: 달리기,
            path: "/wwjkrn131",
          },
          {
            id: 1,
            url: "",
            path: "/sdnjk3n14",
          },
          {
            id: 2,
            url: "",
            path: "/sdnjk3n14",
          },
        ],
      },
      {
        id: 1,
        title: "인증 이름4",

        images: [
          {
            id: 0,
            url: 달리기,
            path: "/wwjkrn131",
          },
          {
            id: 1,
            url: "",
            path: "/sdnjk3n14",
          },
          {
            id: 2,
            url: "",
            path: "/sdnjk3n14",
          },
        ],
      },
    ],
  },
];

export default groupList;
