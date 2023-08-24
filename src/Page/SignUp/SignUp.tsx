import axios from "axios";
import { styled } from "styled-components";
import { useEffect, useState } from "react";
import Banner from "../../Component/SignUp/Banner";
import { LogInS, LoginInputS } from "../../StyleComp/LoginInputS";
import { SignClearBtnS, SignNotClearBtnS } from "../../StyleComp/SignBtnS";

enum Error {
  ID = "ID",
  PW = "PW",
}

/** 2023-08-24 SignUp - 회원가입 페이지 */
const SignUp = (): JSX.Element => {
  const [isValid, setIsValid] = useState(false);
  const [inputState, setInputState] = useState("default");
  const isDefault = inputState === "default";

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passConfirm, setPassConfirm] = useState("");
  const idBind = { value: id, setValue: setId };
  const passBind = { value: password, setValue: setPassword };
  const confirmBind = { value: passConfirm, setValue: setPassConfirm };

  axios.defaults.baseURL = "http://52.78.19.133/";

  /** 2023-08-24 SignUp.tsx - 로그인 요청 핸들러 */
  const SignupSubmit = (e: React.MouseEvent<HTMLFormElement, MouseEvent>): void => {
    e.preventDefault();
    // axios.post("/", {
    //   id,
    //   password,
    // }).catch(error => error);
  };

  return (
    <LogInS>
      <header>
        <h2>회원가입</h2>
      </header>
      <Banner />
      <LoginFormS onSubmit={SignupSubmit}>
        <LoginInputContainerS>
          <h2>아이디</h2>
          <SignUpInput sort="ID" handlerBind={idBind} />
          {isDefault && <p>영문, 영문+숫자 중 1가지 2~10자 조합, 공백 불가</p>}
          {/* <p>이미 존재하는 아이디입니다</p> */}
        </LoginInputContainerS>
        <LoginInputContainerS>
          <h2>비밀번호</h2>
          <SignUpInput sort="PW" handlerBind={passBind} />
          {isDefault && <p>영문+숫자 10~20자 조합, 공백 불가</p>}
          {/* <p>영문+숫자 10~20자 조합, 공백 불가</p> */}
        </LoginInputContainerS>
        <LoginInputContainerS>
          <h2>비밀번호 확인</h2>
          <SignUpInput sort="PW" handlerBind={confirmBind} />
          {/* <p>비밀번호가 일치하지 않습니다</p> */}
        </LoginInputContainerS>

        {isValid ? (
          <SignClearBtnS type="submit">
            <p>회원가입</p>
          </SignClearBtnS>
        ) : (
          <SignNotClearBtnS type="submit">
            <p>회원가입</p>
          </SignNotClearBtnS>
        )}
      </LoginFormS>
    </LogInS>
  );
};

export default SignUp;

interface SignUpInputProps {
  sort: "ID" | "PW";
  handlerBind: {
    value: string;
    setValue: any;
  };
}

/**
 * 2023-08-24 SignUp.tsx - 입력 창
 * @param sort id인지 password인지 식별
 * @returns id입력창 또는 pw입력창
 */
const SignUpInput = ({ sort, handlerBind }: SignUpInputProps): JSX.Element => {
  const { value, setValue } = handlerBind;
  if (sort === "ID") return <LoginInputS placeholder="아이디를 입력해 주세요" value={value} onChange={setValue} />;

  return <LoginInputS placeholder="비밀번호를 입력해 주세요" type="password" value={value} onChange={setValue} />;
};

/** 2023-08-24 LogIn.tsx - 로그인 입력폼 */
const LoginFormS = styled.form`
  display: flex;
  flex-direction: column;
  height: 28.875rem;
  width: 100%;
  gap: 0.95rem;
`;

/** 2023-08-24 LogIn.tsx - 로그인 입력 컨테이너 */
const LoginInputContainerS = styled.div`
  height: 7.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  p {
    color: var(--font-color2);

    &.error {
      color: var(--system-red);
    }
  }
`;
