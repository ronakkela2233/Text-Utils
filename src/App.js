// import logo from './logo.svg';
import React,{ useState } from 'react';
import './App.css';
import AboutPage from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
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
        backgroundColor:"Black"
    })
      document.body.style.backgroundColor="Black"
    }
    else{
      set_mode("Enable Dark Mode")
      darkMode({
        color:"Black",
        backgroundColor:"White"
    })
      document.body.style.backgroundColor="White"
    }
  }
  return (
    <div>
      <Navbar title="TextUtils" aboutText="About us" mode={mode_status} changeMode={changeMode}/>
      <div className="container my-3">
      <TextForm heading="Enter Text to analyze" lightMode={lightMode} changeMode={changeMode}/>
      {/* <AboutPage/> */}
      </div>
    </div>
  );
}

export default App;
