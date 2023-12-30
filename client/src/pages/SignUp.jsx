import { useContext } from "react";
import { LoginContext } from "../App";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./SignUp.css";
export default function SignUp() {
  const { isLoggedIn, setisLoggedIn } = useContext(LoginContext);
  return (
    <>
      <div className="sign-up">
        <img src="/assets/logo.svg" alt="" />
        <div className="sign-up-card">
          <h1>Sign Up</h1>
          <div className="sign-up-inputs">
            {" "}
            <TextField
              id="standard-basic"
              label="Email address"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Password"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Repeat password"
              variant="standard"
            />
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "rgb(252, 71, 71);",
                color: "rgb(255, 255, 255)",
                textTransform: "none",
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
