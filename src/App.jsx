import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import MyNavbar from "./components/Navbar";
import Dashboard from "./components/recommended";

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Profile />} />
        
      </Routes>

      <Dashboard />
    </BrowserRouter>
  );
}

export default App;
