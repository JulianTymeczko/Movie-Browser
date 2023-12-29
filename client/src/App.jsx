import "./reset.css";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Bookmarked from "./pages/Bookmarked";
import TV from "./pages/TV";
import Movies from "./pages/Movies";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/sign-up" element={<SignUp></SignUp>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/movies" element={<Bookmarked></Bookmarked>}></Route>
          <Route path="/tv" element={<TV></TV>}></Route>
          <Route path="/bookmarked" element={<Movies></Movies>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
