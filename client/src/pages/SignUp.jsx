import { useContext } from "react";
import { LoginContext } from "../App";
import "./SignUp.css";
export default function SignUp() {
  const { isLoggedIn, setisLoggedIn } = useContext(LoginContext);
  return (
    <>
      <div className="sign-up">
        <img src="/assets/logo.svg" alt="" />
        <div className="sign-up-card">
          <h1>Sign Up</h1>
          <div className="sign-up-inputs"></div>
        </div>
      </div>
    </>
  );
}
