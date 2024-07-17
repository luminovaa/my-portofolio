import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Project from "./pages/Project";

function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <div>
          <Home />
          <About />
          <Project />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
