import { useState } from "react";
import { Route,BrowserRouter as Router, Routes } from "react-router-dom";
import Boss from "./components/template/boss/Boss";
import Register from "./components/template/registration/Register";
import UserCabinet from "./components/template/user/UserCabinet";
import AdmProductModal from "./modals/AdmProductModal";
import Admin from "./pages/admin/Admin";
import AdmLogin from "./pages/admLogin/AdmLogin";
import Home from "./pages/home/Home";
import Liked from "./pages/liked/Liked";
import NoPage from "./pages/noPage/NoPage";
import SinglePage from "./pages/singlePage/SinglePage";

function App() {
  const [token, setToken] = useState(JSON.parse(localStorage.getItem('token')) || '');

  return (
    <Router>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/like" element={<Liked/>}/>
          <Route path="/admin" element={token ? <Admin/>: <AdmLogin data={{token, setToken}}/>} />
          <Route path="/boss-admin/*" element={<Boss/>} />
          <Route path="/single-page/:id" element={<SinglePage/>}/>
          <Route path="/admin/admin/add" element={<AdmProductModal/>} />
          <Route path="/user/*" element={<UserCabinet/>} />
          <Route path="*" element={<NoPage />} />
          
      </Routes>
    </Router>
  );
}
export default App;
