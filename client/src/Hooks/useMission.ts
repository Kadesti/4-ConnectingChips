import { useEffect, useMemo, useRef, useState } from "react";
import co_bike from '../image/커버 이미지/co_bike_work/co_bike_work_main.jpg'
import co_fit from '../image/커버 이미지/co_fit_enter/co_fit_enter_main.jpg'
import co_walk from '../image/커버 이미지/co_walk_stroll/co_walk_stroll_main.jpg'

/** 2023-09-02 useMission.ts 나의 작심현황의 데이터/캐러셀 상태 관리 Hook - Kadesti */
const useMission = () => {
  /** 캐러샐 UI 상태 관리 */
  const slideRef = useRef(null);
  const [count, setCount] = useState(0);
  const [sort, setSort] = useState("");

  /** Mylist - 내 작심 삼일 상태 관리 */
  const [doneList, setDoneList] = useState([false]);
  const [countList, setCountList] = useState([0]);
  const [uuidList, setUuidList] = useState([""]);

  // TODO: 네트워크 데이터로 교체될 부분
  const IMG = useMemo(() => {
    return [co_bike, co_fit, co_walk];
  }, []);

  const IMGLen = IMG.slice(1);
  const TOTAL_SLIDES = IMGLen.length;

  const doneBind = useMemo(() => {
    return { doneList, setDoneList };
  }, [doneList]);

  const countBind = useMemo(() => {
    return { countList, setCountList };
  }, [countList]);

  const uuidBind = useMemo(() => {
    return { uuidList, setUuidList };
  }, [uuidList]);

  const initCommonData = {
    slideRef,
    count,
    sort,
    TOTAL_SLIDES,
  };
  const initCarreselData = {
    ...initCommonData,
    setCount,
    setSort,
    doneBind,
    countBind,
    uuidBind,
  };
  const initButtonData = {
    ...initCommonData,
    doneList,
    uuidList,
    countList,
    IMG,
  };

  const [carreselProps, setCarreselProps] = useState(initCarreselData);
  const [buttonDataProps, setButtonDataProps] = useState(initButtonData);

  useEffect(() => {
    const commonProps = { slideRef, count, sort, TOTAL_SLIDES };
    const carreselProps = { ...commonProps, setCount, setSort, doneBind, countBind, uuidBind };
    setCarreselProps(carreselProps);

    const buttonListProps = { ...commonProps, IMG, doneList, uuidList, countList };
    setButtonDataProps(buttonListProps);
  }, [IMG, TOTAL_SLIDES, count, countBind, countList, doneBind, doneList, sort, uuidBind, uuidList]);

  return { carreselProps, buttonDataProps };
};

export default useMission;