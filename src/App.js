import './App.css';

import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';



function App() {

  const [dm, setDM] = useState("light");
  
  const change = () =>
  {

      if (dm === "light") {

            setDM("dark");
            
          document.body.style.backgroundColor = "#052c65";

      }
      else if(dm==="dark"){

         setDM("light");
         document.body.style.backgroundColor = "white";

      }
  } 

  return (
    <div className='App'>
 
    <Navbar title={"The Extractors"} mode={dm} change={change}/>
    <Home mode={dm}/>
    <Footer title={"The Extractors"} mode={dm} />
    </div>
  );

}

export default App;