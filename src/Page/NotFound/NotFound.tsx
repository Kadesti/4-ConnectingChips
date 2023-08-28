import { styled } from "styled-components";
import errorChips from "../../image/chips_404.svg";
import { ErrorCTA } from "../../Component/CTA/CTAContainer";

/** 2023-08-28 NotFound.tsx - 404 에러 페이지 */
const NotFound = () => {
  return (
    <NotFoundS>
      <NotFoundContentS>
        <img src={errorChips} alt="errorChips" />
        <div>잘못된 접근입니다</div>
        <button>이전 페이지로</button>
      </NotFoundContentS>

      <div className="CTA">
        <ErrorCTA />
      </div>
    </NotFoundS>
  );
};

export default NotFound;

/** 2023-08-28 NotFound.tsx - 404 에러 페이지 */
const NotFoundS = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  justify-content: center;
  align-items: center;

  border: 1px solid;

  width: var(--width-mobile);
  max-width: var(--width-mobile);

  position: relative;

  .CTA {
    position: absolute;
    bottom: 1rem;
  }
`;

/** 2023-08-28 NotFound.tsx - 404 에러 컨텐츠 */
const NotFoundContentS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
