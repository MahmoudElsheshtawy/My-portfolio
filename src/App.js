import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";

function App() {
  return (
    <div className="App">
       <Navbar/>
       <div className="Sections">
         <Home/>
         <About/>
         <Portfolio/>
         <Contact/>
       </div>
    </div>
  );
}

export default App;
