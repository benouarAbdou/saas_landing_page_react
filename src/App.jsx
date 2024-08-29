import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Features from "./components/Features";
function App() {
  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      <Hero />
      <Content />
      <Features />
    </div>
  );
}

export default App;
