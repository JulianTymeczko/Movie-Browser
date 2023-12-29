import "./reset.css";
import "./App.css";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";

import Bookmarked from "./pages/Bookmarked";
import TV from "./pages/TV";
import Movies from "./pages/Movies";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
export const LoginContext = createContext();
function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  return (
    <>
      <Router>
        <LoginContext.Provider value={{ isLoggedIn, setisLoggedIn }}>
          {" "}
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/sign-up" element={<SignUp></SignUp>}></Route>

            <Route path="/movies" element={<Bookmarked></Bookmarked>}></Route>
            <Route path="/tv" element={<TV></TV>}></Route>
            <Route path="/bookmarked" element={<Movies></Movies>}></Route>
          </Routes>
        </LoginContext.Provider>
      </Router>
    </>
  );
}

export default App;
