import axios from "axios";
import { styled } from "styled-components";
import { useEffect, useState } from "react";
import Banner from "../../Component/SignUp/Banner";
import { LogInS, LoginInputS } from "../../StyleComp/LoginInputS";
import { SignClearBtnS, SignNotClearBtnS } from "../../StyleComp/SignBtnS";
import { type handlerBind, useSignup } from "../../Hooks/useSignup";

enum Error {
  ID = "ID",
  PW = "PW",
}

/** 2023-08-24 SignUp - 회원가입 페이지 */
const SignUp = (): JSX.Element => {
  const [isValid, setIsValid] = useState(true);
  const [inputState, setInputState] = useState("failed");
  const isFailed = inputState === "failed";
  const { id, idBind, password, passBind, passConfirm, confirmBind } = useSignup();

  axios.defaults.baseURL = "http://52.78.19.133/";

  useEffect(() => {
    const isValidArr = [false, false, false];

    const idReg = /^(?!^\d+$)[a-zA-Z0-9]{2,10}$/;
    const passReg = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{10,20}$/;

    /** 2023-08-24 SignUp.tsx  조건 중 하나라도 안맞을시 false로 바꾸는 함수 */
    const setFalse = (index: number) => {
      setIsValid(false);
      isValidArr[index] = false;
    };

    // id는 영문, 영문+숫자 중 1가지 2~10자 조합, 공백 불가
    if (idReg.test(id) && id.length <= 10) isValidArr[0] = true;
    else return setFalse(0);

    // pw는 영문+숫자 10~20자 조합, 공백 불가
    if (passReg.test(password) === true) isValidArr[1] = true;
    else return setFalse(1);

    // pw는 pwconfirm과 동일해야함
    if (password === passConfirm) isValidArr[2] = true;
    else return setFalse(2);

    const findFalse = isValidArr.find((isvalid) => isvalid === false);
    if (findFalse === undefined) setIsValid(true);
  }, [id, password, passConfirm]);

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
          <SignUpInput sort="ID" handlerBind={idBind} isFailed={isFailed} />
          {!isFailed && <p>영문, 영문+숫자 중 1가지 2~10자 조합, 공백 불가</p>}
          {isFailed && <p className="error">이미 존재하는 아이디입니다</p>}
        </LoginInputContainerS>
        <LoginInputContainerS>
          <h2>비밀번호</h2>
          <SignUpInput sort="PW" handlerBind={passBind} />
          <p>영문+숫자 10~20자 조합, 공백 불가</p>
          {/* {isDefault && <p>영문+숫자 10~20자 조합, 공백 불가</p>} */}
          {/* {!isDefault && <p className="error">영문+숫자 10~20자 조합, 공백 불가</p>} */}
        </LoginInputContainerS>
        <LoginInputContainerS>
          <h2>비밀번호 확인</h2>
          <SignUpInput sort="PW" handlerBind={confirmBind} />
          {/* {!isDefault && <p className="error">비밀번호가 일치하지 않습니다</p>} */}
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

/** 2023-08-24 SignUp.tsx - 입력창 props */
interface SignUpInputProps {
  sort: "ID" | "PW";
  handlerBind: handlerBind;
  isFailed?: boolean;
}

/**
 * 2023-08-24 SignUp.tsx - 입력 창
 * @param sort id인지 password인지 식별
 * @returns id입력창 또는 pw입력창
 */
const SignUpInput = ({ sort, handlerBind, isFailed }: SignUpInputProps): JSX.Element => {
  const { value, setValue } = handlerBind;
  const handlerOnChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  if (sort === "ID") return <LoginInputS placeholder="아이디를 입력해 주세요" className={isFailed ? "failed" : ""} value={value} onChange={handlerOnChange} />;

  return <LoginInputS placeholder="비밀번호를 입력해 주세요" type="password" className={isFailed ? "failed" : ""} value={value} onChange={handlerOnChange} />;
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
