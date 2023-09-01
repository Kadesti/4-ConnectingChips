import groupListData from "./groupListData";

type MyInfoType = {
  id: string;
  password: string;
  profileimg: string;
};

const myInfo: MyInfoType = {
  id: "aa11",
  password: "aaaaaaa777",
  profileimg: "",
};

const myGroupList = groupListData.filter((group) => group.memberList.some((member) => member.id === myInfo.id));
const myGroupIds = myGroupList.map((group) => group.id);

export { myInfo, myGroupList, myGroupIds };
