import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./component/Login/Login";
import Register from "./component/Registration/Register";
import { useState } from "react";
import MangeProfile from "./component/ManageProfile/MangeProfile";
import Profile from "./pages/profile/Profile";

function App() {
  const [users, setLoginUser] = useState({});
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {user?._id ? (
            <Route path="/" element={<Home setLoginUser={setLoginUser} />} />
          ) : (
            <Route path="/" element={<Login setLoginUser={setLoginUser} />} />
          )}
          <Route
            path="/login"
            element={<Login setLoginUser={setLoginUser} />}
          />
          <Route path="/register" element={<Register />} />
          {user?._id && (
            <Route path="/manageProfile" element={<MangeProfile />} />
          )}
          {user?._id && <Route path="/profile" element={<Profile />} />}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
