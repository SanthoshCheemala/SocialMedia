import {  Routes,Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/profile/Profile";
import NavBar from "./components/TopBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
          <Routes>
            <Route path="/" element={<Home />}  />
            <Route path="/profile" element={<Profile />} />
          </Routes>
    </div>
  );
}

export default App;
