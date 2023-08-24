import { useState } from "react";

type handlerBind = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

/** 2023-08-24 SignUp - useSignup 리턴타입 */
interface useSignupType {
  [sortType: string]: handlerBind;
}

/** 2023-08-24 SignUp - 회원가입 입력값 Hooks */
const useSignup = (): useSignupType => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passConfirm, setPassConfirm] = useState("");

  const idBind = { value: id, setValue: setId };
  const passBind = { value: password, setValue: setPassword };
  const confirmBind = { value: passConfirm, setValue: setPassConfirm };

  return { idBind, passBind, confirmBind };
};

export { type handlerBind, useSignup };
