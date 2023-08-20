import { styled } from "styled-components";

/** 2023-08-20 Global Navigator Bar */
const GNB = () => {
  const gnbIcon: string[] = ["홈", "피", "마"];
  return (
    <GNBS>
      {gnbIcon.map((icon, idx) => {
        return <li key={idx}>{icon}</li>;
      })}
    </GNBS>
  );
};

export default GNB;

/** 2023-08-20 Global Navigator Bar Style*/
const GNBS = styled.ul`
  display: flex;
  position: sticky;
  bottom: 0;
  width: 100%;
  height: 4rem;

  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
`;
