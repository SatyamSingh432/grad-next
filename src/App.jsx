import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import HeroSection from "./components/HeroSec";
import AuthForm from "./components/AuthForm";

import "./App.css";

function App() {
  return (
    <div style={{ backgroundColor: "#f2fafe" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeroSection />}></Route>
          <Route path="/auth" element={<AuthForm />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
