import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSec";
import Coaching from "./components/Coaching";
import Stats from "./components/Stats";

import "./App.css";

function App() {
  return (
    <div style={{ backgroundColor: "#f2fafe" }}>
      <NavBar />
      <HeroSection />
      <Coaching />
      <Stats />
    </div>
  );
}

export default App;
