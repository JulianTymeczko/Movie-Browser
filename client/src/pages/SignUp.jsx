import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../App";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./SignUp.css";
import Input from "@mui/material/Input";
import { useNavigate } from "react-router-dom";
export default function SignUp() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const { isLoggedIn, setisLoggedIn } = useContext(LoginContext);
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);
  return (
    <>
      <div className="sign-up">
        <img src="/assets/logo.svg" alt="" />
        <div className="sign-up-card">
          <h1>Sign Up</h1>
          <div className="sign-up-inputs">
            {" "}
            <Input
              placeholder="Email address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Input
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Input
              placeholder="Repeat password"
              value={repeatPassword}
              onChange={(e) => {
                setRepeatPassword(e.target.value);
              }}
            />
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "rgb(252, 71, 71);",
                color: "rgb(255, 255, 255)",
                textTransform: "none",
              }}
              onClick={() => {
                console.log(email);
                console.log(password);
                console.log(password === repeatPassword);
                if (email && password && repeatPassword === password) {
                  setisLoggedIn(true);
                }
              }}
            >
              Create an account
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
