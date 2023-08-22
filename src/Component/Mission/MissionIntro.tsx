/** 2023-08-22 MissionIntro.tsx - 미션 소개글 */
const MissionIntro = ({ groupText }: { groupText: string }): JSX.Element => {
  //   return <div>미션 소개글을 여기에다가 써주세요! <br />어떤 목적으로 하는 미션인지를 적어주면 됩니다~</div>;
  return <p className="intoduce">{groupText}</p>;
};

export default MissionIntro;
