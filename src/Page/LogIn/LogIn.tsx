import { styled } from "styled-components";
import { useState } from "react";
import arrow from "../../image/Icon/Arrow_icon.svg";
import Banner from "../../Component/SignUp/Banner";
import { LogInS, LoginInputS } from "../../StyleComp/LoginInputS";
import { SignClearBtnS } from "../../StyleComp/SignBtnS";

/** 2023-08-24 LogIn.tsx - 로그인 페이지 */
const LogIn = (): JSX.Element => {
  const [inputState, setInputState] = useState("default");
  // const [password, setPassword] = useState("");
  // const [showPassword, setShowPassword] = useState(false);

  // const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setPassword(e.target.value);
  // };
  // const handleToggleShowPassword = (e: any) => {
  //   e.preventDefault();
  //   setShowPassword(!showPassword);
  // };

  const isDefault = inputState === "default";

  /** 2023-08-24 LogIn.tsx - 로그인 ID PW 입력창 컨테이너 */
  const LoginInputContainer = (): JSX.Element => {
    return (
      <LoginInputContainerS>
        <LoginInput sort="ID" isDefault={isDefault} />
        <LoginInput sort="PW" isDefault={isDefault} />
        {!isDefault && <p>아이디 혹은 비밀번호가 일치하지 않습니다</p>}
      </LoginInputContainerS>
    );
  };

  /** 2023-08-24 LogIn.tsx - 로그인 요청 핸들러 */
  const LoginSubmit = (e: React.MouseEvent<HTMLFormElement, MouseEvent>): void => {
    e.preventDefault();
  };

  return (
    <LogInS>
      <header>
        <h2>로그인</h2>
      </header>
      <Banner />
      <LoginContainerS>
        <LoginFormS onSubmit={LoginSubmit}>
          <LoginInputContainer />
          <SignClearBtnS type="submit">
            <p>로그인</p>
          </SignClearBtnS>
        </LoginFormS>
        <NudgeSignS>
          <p className="hoxy">회원이 아니신가요?</p>
          <p>회원가입</p>
          <img src={arrow} alt="arrowIcon" />
        </NudgeSignS>
      </LoginContainerS>
    </LogInS>
  );
};

export default LogIn;

/**
 * 2023-08-24 LogIn.tsx - 입력 창
 * @param sort id인지 password인지 식별
 * @param isDefault 기본값인지 한번 틀린상태인지 구분
 * @returns id입력창 또는 pw입력창
 */
const LoginInput = ({ sort, isDefault }: { sort: "ID" | "PW"; isDefault: boolean }): JSX.Element => {
  if (sort === "ID") return <LoginInputS placeholder="아이디를 입력해 주세요" className={isDefault ? "" : "failed"} />;

  return <LoginInputS placeholder="비밀번호를 입력해 주세요" className={isDefault ? "" : "failed"} type={isDefault ? "password" : "text"} />;
};

/** 2023-08-24 LogIn.tsx - 로그인 / 회원가입 배너 */
const LoginContainerS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
`;

/** 2023-08-24 LogIn.tsx - 로그인 입력폼 */
const LoginFormS = styled.form`
  display: flex;
  flex-direction: column;
  height: 13.75rem;
  width: 100%;
`;

/** 2023-08-24 LogIn.tsx - 로그인 입력 컨테이너 */
const LoginInputContainerS = styled.div`
  height: 9.56rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  p {
    color: var(--system-red);
  }
`;

/** 2023-08-24 LogIn.tsx - 회원가입 유도 */
const NudgeSignS = styled.div`
  margin-top: 4.25rem;
  display: flex;
  justify-content: center;
  p {
    font-size: 0.875rem;

    &.hoxy {
      color: var(--font-color3);
      margin-right: 0.13rem;
    }
  }
  img {
    margin-top: 0.3rem;
  }
`;

/* <LoginInputS placeholder="아이디를 입력해 주세요" className={isDefault ? "" : "failed"} />
        <LoginInputS placeholder="비밀번호를 입력해 주세요" className={isDefault ? "" : "failed"} type={isDefault ? "password" : "text"} /> */

/* <LoginInputPWS className={isDefault ? "" : "failed"}>
          <input placeholder="비밀번호를 입력해 주세요" type={showPassword ? "text" : "password"} value={password} onChange={handlePasswordChange} />
          <button onClick={handleToggleShowPassword}>{showPassword ? "H" : "S"}</button>
        </LoginInputPWS> */

/** 2023-08-24 LogIn.tsx - 로그인 비밀번호 */
/*
const LoginInputPWS = styled.div`
display: flex;
justify-content: space-between;

padding: 1rem;
border: 0.1rem solid;
border-radius: 0.5rem;

&:focus-within {
  outline: 0.15rem solid;
  border: none;
}
&.failed {
  border-color: var(--system-red);
}

input {
  font-size: 1rem;
  border: none;
  &:focus {
    outline: none;
  }
}
`;
*/
