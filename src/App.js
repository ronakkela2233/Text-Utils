// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <div>
      <Navbar title="TextUtils" aboutText="About us"/>
      <div className="container my-3">
      <TextForm heading="Enter Text to analyze"/>
      </div>
    </div>
  );
}

export default App;
