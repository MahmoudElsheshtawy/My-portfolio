import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Skils from "./Components/Skils/Skils";
import Work from "./Components/Work/Work";

function App() {
  return (
    <div className="App">
       <Navbar/>
       <div className="Sections">
         <Home/>
         <About/>
         <Skils/>
         <Work/>
         <Contact/>
       </div>
    </div>
  );
}

export default App;
