import Home from "./components/Home/Home.js";
import About from "./components/About/About.js";

import "./App.css";
//import Blog from "./components/Blog/Blog.js";
import Project from "./components/Projects/Project.js";
import Contact from "./components/Contact/Contact.js";
import Footer from "./components/Footer/Footer.js";
import Services from "./components/Services/Services.js";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Project />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
