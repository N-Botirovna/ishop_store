import { useState } from "react";
import { Route,BrowserRouter as Router, Routes } from "react-router-dom";
import Hello from "./pages/home/Hello";
import Home from "./pages/home/Home";
import NoPage from "./pages/noPage/NoPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/hello" element={<Hello />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}
export default App;
