import { styled } from "styled-components";

/** 2023-08-22 GroupButton.tsx - 참여하기 버튼 */
const JoinButtonCTA = (): JSX.Element => {
  return <CTAButtonS>참여하기</CTAButtonS>;
};

/** 2023-08-22 GroupButton.tsx - 작심 인증하기 버튼 */
const PostButton = (): JSX.Element => {
  return <MissionButtonS>작심 인증하기</MissionButtonS>;
};

/** 2023-08-22 GroupButton.tsx - 인증하기 버튼 */
const SubmitButtonCTA = (): JSX.Element => {
  return <CTAButtonS>인증하기</CTAButtonS>;
};

export { JoinButtonCTA, PostButton, SubmitButtonCTA };

/** 2023-08-22 GroupButton.tsx - 버튼 공통 스타일 */
const Button = styled.button`
  height: 3.5rem;

  font-size: 1rem;
  border-radius: 1.88rem;

  margin-top: 1.25rem;
`;

/** 2023-08-22 GroupArticle.tsx - CTA 버튼(참여하기, 인증하기) */
const CTAButtonS = styled(Button)`
  background-color: var(--color-main);
  margin: 0 1rem;
  position: sticky;
  bottom: 0;
`;

/** 2023-08-22 GroupArticle.tsx - 작심 인증하기 버튼 */
const MissionButtonS = styled(Button)`
  border: 0.1rem solid;
  border-color: var(--color-main);

  width: 100%;
`;
