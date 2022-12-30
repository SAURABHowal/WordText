

import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React,{useState}from 'react'
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";



function App() {
  const [mode,setMode]=useState("light")

  const toggleMode=()=>{    
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor="grey"
 
    }
    else{
      setMode("light")
      document.body.style.backgroundColor="white"
   
    }

  }

  const[alert,setAlert]=useState(null)
  
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(()=>{
      setAlert(null)
    },1000)

  }
  

  return (
    <>
   <Router>
   <Navbar title="WordTEXT" mode={mode} toggleMode={toggleMode} />
   <Alert  alert={alert}/>
   <Routes>
          
          <Route exact path="/textForm" element={<Textform heading="Enter Any Text" mode={mode} showAlert={showAlert}/>}>
         
          </Route>
          
        </Routes>
        
  </Router>
    </>
  );
}

export default App;
