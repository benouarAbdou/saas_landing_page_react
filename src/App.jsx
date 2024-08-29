import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
function App() {
  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      <Hero />
      <Content />
    </div>
  );
}

export default App;
