import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSec";
import Coaching from "./components/Coaching";
import Stats from "./components/Stats";
import CohortSection from "./components/CohortSection";
import Testimonial from "./components/Testimonial";
import BookSession from "./components/BookSession";

import "./App.css";

function App() {
  return (
    <div style={{ backgroundColor: "#f2fafe" }}>
      <NavBar />
      <HeroSection />
      <Coaching />
      <Stats />
      <CohortSection />
      <Testimonial />
      <BookSession />
    </div>
  );
}

export default App;
