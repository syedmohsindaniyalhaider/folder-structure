import "./App.css";
import Main from "./components/Layout/Main/Main";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register/Register";
import Dashboard from "./components/Dashboard/Dashboard";
function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Register />} />
      <Route exact element={<Main />}>
        <Route exact path="home" element={<Home />} />
      </Route>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
