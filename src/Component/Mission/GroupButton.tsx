import { useParams } from "react-router-dom";
import { styled } from "styled-components";

/** 2023-08-22 GroupButton.tsx - 참여하기 버튼 */
const JoinButtonCTA = (): JSX.Element => {
  const { uuid } = useParams();

  return (
    <CTAButtonS href={`/groupPage/${uuid}`}>
      <button>참여하기</button>
    </CTAButtonS>
  );
};

/** 2023-08-22 GroupButton.tsx - 작심 인증하기 버튼 */
const PostButton = (): JSX.Element => {
  return <MissionButtonS href={`/uploadPost/1`}>작심 인증하기</MissionButtonS>;
};

/** 2023-08-22 GroupButton.tsx - 인증하기 버튼 */
const SubmitButtonCTA = (): JSX.Element => {
  return <CTAButtonS>인증하기</CTAButtonS>;
};

export { JoinButtonCTA, PostButton, SubmitButtonCTA };

/** 2023-08-22 GroupButton.tsx - 버튼 공통 스타일 */
const LinkS = styled.a`
  height: 3.5rem;

  border-radius: 1.88rem;

  margin-top: 1.25rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

/** 2023-08-22 GroupArticle.tsx - CTA 버튼(참여하기, 인증하기) */
const CTAButtonS = styled(LinkS)`
  background-color: var(--color-main);
  margin: 0 1rem;
  margin-bottom: 1rem;
  position: sticky;
  bottom: 0rem;
`;

/** 2023-08-22 GroupArticle.tsx - 작심 인증하기 버튼 */
const MissionButtonS = styled(LinkS)`
  border: 0.1rem solid;
  border-color: var(--color-main);

  width: 100%;
`;
