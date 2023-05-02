
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
//  import About from './components/About';
//  import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
  
// } from "react-router-dom";


function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    });

    setTimeout(()=>{
     setAlert(null);
    },2000);

  } 
  const toggleMode =()=>{
    if(mode==='light'){
      setMode("dark");
      document.body.style.backgroundColor='#23433e';
      showAlert("Dark mode has been enabled","success");
      document.title="TextUtils - Dark";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enabled","success");
      document.title="TextUtils - Light";
    }
  }



  return (
    <>
{/* <Navbar/> */}
{/* <Router> */}
<Navbar title="TextUtils" mode={mode} toggleMode = {toggleMode}/>
<Alert alert={alert}/>
<div className="contaner my-3">
<TextForm showAlert={showAlert} heading="Enter the text to analyse below." mode={mode} />
       {/* <Routes>
 
          <Route exact path="/" element = {<TextForm showAlert={showAlert} heading="Enter the text to analyse below." mode={mode} />}/>
          <Route exact path="/about" element = {<About />}/>
          
       </Routes> */}
</div>
{/* </Router> */}
    </>
  );
}

export default App;
