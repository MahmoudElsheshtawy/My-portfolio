import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Portofilolest from "./Components/Portofilolest/Portofilolest";
import Loding from "./Components/Preloader";
import Preloader from "./Components/Preloader";

function App() {
  return (
    <>
 <Preloader/>
    {/* ybjujikbk */}
    
      <div className="App">
      
       <Navbar/>
       <div className="Sections">
         <Home/>
         <About/>
         <Portfolio/>
         <Portofilolest/>
         <Contact/>
       </div>
    </div> 
    
     
    </>
  
  );
}

export default App;
