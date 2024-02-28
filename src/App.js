import "./App.css";

import Footer from "./components/Footer";
import About from "./components/About";
import Carousel from "./components/Carousel";
import Events from "./components/Events";
import SocialLinks from "./components/SocialLinks";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      <Hero />
      <SocialLinks />
      <About />
      <Events />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
