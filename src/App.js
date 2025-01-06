// import logo from './logo.svg';
import React,{ useState } from 'react';
import './App.css';
import AboutPage from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  // Alert function useState and function
  const[alert, setAlert]= useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    },2000);
  }

  // Light mode to Dark mode and vice versa useState and function
  const[mode_status, set_mode]=useState("Enable Dark Mode")

  const[lightMode, darkMode]=useState({
    color:"Black",
    backgroundColor:"White"
    })

  const changeMode=()=>{
    if(mode_status==="Enable Dark Mode"){
      set_mode("Enable Light Mode")
      darkMode({
        color:"White",
        backgroundColor:"Black"})
        showAlert("Dark Mode has been enabled.", "success");
        document.body.style.backgroundColor="Black"
    }
    else{
      set_mode("Enable Dark Mode")
      darkMode({
        color:"Black",
        backgroundColor:"White"})
        showAlert("Light Mode has been enabled.", "success");
        document.body.style.backgroundColor="White"
    }
  }

  



  return (
    
      <Router>
      <div>
      <Navbar title="TextUtils" aboutText="About us" mode={mode_status} changeMode={changeMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
      <Route exact path="/" element={<TextForm  showAlert={showAlert} heading="Enter Text to analyze" lightMode={lightMode} changeMode={changeMode}/>} />
      <Route exact path="/about" element={<AboutPage />} />
      </Routes>
      </div>
      </div>
      </Router>
    
  );
}

export default App;
