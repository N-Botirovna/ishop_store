import { useState } from "react";
import { Route,BrowserRouter as Router, Routes } from "react-router-dom";
import Register from "./components/template/auth/Register";
import Registration from "./components/template/Registration/Registration";
import SignUp from "./components/template/sign_up/SignUp";
import Hello from "./pages/home/Hello";
import Home from "./pages/home/Home";
import Liked from "./pages/liked/Liked";
import NoPage from "./pages/noPage/NoPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/hello" element={<Hello />} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/like" element={<Liked/>}/>
          <Route path="*" element={<NoPage />} />
          <Route path="/sign-up" element={<Registration/>}/>
      </Routes>
    </Router>
  );
}
export default App;
