import 역도 from "../image/예시사진모음/역도.jpg";
import 달리기 from "../image/예시사진모음/달리기.jpg";
import 삼대운동 from "../image/예시사진모음/삼대운동.jpg";
import 빨간벽 from "../image/예시사진모음/빨간벽.jpg";
import { GroupInfoType } from "../Type/MissionType";

import { co_bike, co_fit, co_walk } from "./CoverBarrel";

/** 2023-08-23 groupList.ts - 전체 그룹 리스트  */
const groupListData: GroupInfoType[] = [
  {
    id: 44123,
    tag: "자전거",
    title: "자전거 모여라!",
    intro: "미션 소개글을 여기에다가 써주세요!\n어떤 목적으로 하는 미션인지를 적어주면 됩니다~\n00칼로리 소모하려면 몇 분 운동해야 하는지 적기!",
    rule: "첫째, 칼로리 소모 00칼로리 해야 합니다\n둘째, 소모한 칼로리를 사진 혹은 글로 인증하면 끝!",
    defaultImageid: 0,
    memberList: [
      {
        id: "aa11",
        day: 6,
        count: 3,
        done: true,
      },
      {
        id: "aa222",
        day: 2,
        count: 2,
        done: false,
      },
    ],
    posts: [
      {
        id: 0,
        title: "인증 이름1",

        image: {
          id: 0,
          url: co_bike,
          path: "/wwjkrn131",
        },
      },
      {
        id: 1,
        title: "인증 이름2",

        image: {
          id: 0,
          url: 역도,
          path: "/wwjkrn131",
        },
      },
    ],
  },
  {
    id: 17850,
    tag: "헬스",
    title: "헬스는 재밌단말이지비",
    intro: "미션 소개글을 여기에다가 써주세요!\n어떤 목적으로 하는 미션인지를 적어주면 됩니다~\n00칼로리 소모하려면 몇 분 운동해야 하는지 적기!",
    rule: "첫째, 칼로리 소모 00칼로리 해야 합니다\n둘째, 소모한 칼로리를 사진 혹은 글로 인증하면 끝!",
    defaultImageid: 0,
    memberList: [
      {
        id: "aa11",
        day: 2,
        count: 2,
        done: false,
      },
      {
        id: "aa222",
        day: 2,
        count: 2,
        done: true,
      },
    ],
    posts: [
      {
        id: 0,
        title: "인증 이름3",

        image: {
          id: 0,
          url: co_fit,
          path: "/wwjkrn131",
        },
      },
      {
        id: 1,
        title: "인증 이름4",

        image: {
          id: 0,
          url: 달리기,
          path: "/wwjkrn131",
        },
      },
    ],
  },
  {
    id: 785125,
    tag: "걷기",
    title: "걷기 걷기",
    intro: "이수영 접영 배영",
    rule: "돌아라! \n 수영장을! \n 헤엄쳐서!",
    defaultImageid: 0,
    memberList: [
      {
        id: "aa11",
        day: 2,
        count: 2,
        done: true,
      },
      {
        id: "aa222",
        day: 2,
        count: 2,
        done: true,
      },
    ],
    posts: [
      {
        id: 0,
        title: "인증 이름3",

        image: {
          id: 0,
          url: co_walk,
          path: "/wwjkrn131",
        },
      },
      {
        id: 1,
        title: "인증 이름4",

        image: {
          id: 0,
          url: 달리기,
          path: "/wwjkrn131",
        },
      },
    ],
  },
  {
    id: 858415,
    tag: "땀방울",
    title: "응애응애!",
    intro: "나에게 휴식을 달라!",
    rule: "첫째, 취업하기\n둘째, 월급받기!",
    defaultImageid: 0,
    memberList: [],
    posts: [
      {
        id: 0,
        title: "인증 이름1",

        image: {
          id: 0,
          url: 역도,
          path: "/wwjkrn131",
        },
      },
      {
        id: 1,
        title: "인증 이름2",

        image: {
          id: 0,
          url: 역도,
          path: "/wwjkrn131",
        },
      },
    ],
  },
  {
    id: 4785125,
    tag: "눈망울",
    title: "재워줘!",
    intro: "이러다 다 죽어!",
    rule: "첫째, 취업하기\n둘째, 월급받기!",
    defaultImageid: 0,
    memberList: [
      {
        id: "aa222",
        day: 2,
        count: 2,
        done: false,
      },
    ],
    posts: [
      {
        id: 0,
        title: "인증 이름1",

        image: {
          id: 0,
          url: 역도,
          path: "/wwjkrn131",
        },
      },
      {
        id: 1,
        title: "인증 이름2",

        image: {
          id: 0,
          url: 역도,
          path: "/wwjkrn131",
        },
      },
    ],
  },
];

export default groupListData;
