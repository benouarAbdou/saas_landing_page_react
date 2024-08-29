import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
function App() {
  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      <Hero />
      <Content />
      <Features />
      <Testimonials />
      <CTA />
    </div>
  );
}

export default App;
