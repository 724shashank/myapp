import './App.css';
import Navbar from './components/Navbar';
//import Night from './components/Night';
//import About from './components/About';
import Txt_trans from './components/Txt_trans';
import React,{useState} from 'react';
import Alert from './components/Alert';
//import { BrowserRouter as Router, Routes,Route} from "react-router-dom";


function App() {
  const [mode,setmode]= useState('light')
  const [alert, setAlert]= useState(null)

  const showAlert=(message,type)=>
  {
    setAlert({ 
      msg:message,
      type:type
    });
    setTimeout(() => {
      setAlert(null);
      
    }, 3000);
  };
  const toggleMode=()=>
  {
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor='#010B13' 
      document.body.style.color='white'
      showAlert("Dark Mode has been Enabled", "success")
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='#ffe1e1'
      document.body.style.color='black'
      showAlert("Light Mode has been Enabled", "success")
    }

  }
  
return(
  <>
  {/*<Router>*/}
    <Navbar title="Shashank" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    <div className="container">
      {/*<Routes>*
        <Route path="/about" element={<About />} />*/}
        {/*<Route path="/" element=*/}<Txt_trans heading={`Enter the text to analyze`} showAlert={showAlert}/>
     {/*</Routes>*/} 
    </div>
  {/*</Router>*/}
</>

);
}


export default App;
