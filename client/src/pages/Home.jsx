import { useContext, useEffect } from "react";
import { LoginContext } from "../App";
import { useNavigate } from "react-router-dom";
export default function Home() {
  let navigate = useNavigate();
  const { isLoggedIn } = useContext(LoginContext);
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/sign-up");
    }
  }, [isLoggedIn]);
  return (
    <>
      <h1>he</h1>
      <h1>he</h1>
    </>
  );
}
