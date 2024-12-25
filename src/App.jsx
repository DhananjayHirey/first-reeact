import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'
import Alert from './components/Alert'
import User from './components/User'
import { useActionState } from 'react'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'


let name = "Harry"

function App() {
  const [mode,setMode] = useState("light")
  const [btnText,setBtnText] = useState("Dark Mode")
  const [stylecol,setStyleCol] = useState("white")
  const [alert, setAlert] = useState(null);

  
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },2000);
    
  }
  
  const toggleMode = ()=>{
    if(mode==="light"){
      setMode("dark")
      setBtnText("Light Mode")
      setStyleCol("white")
      document.body.style.backgroundColor = "black"
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode("light")
      setBtnText("Dark Mode")
      setStyleCol("black")
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled","success");
      
    }
  }
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} btnText={btnText} stylecol = {stylecol}/>
        <Alert alert={alert}/>
        <TextForm mode={mode} showAlert={showAlert}/>
      </>
    },
    {
      path: "/About",
      element: <>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} btnText={btnText} stylecol = {stylecol}/>
        <About mode ={mode}/>
      </>
    },
    {
      path: "/User/:username",
      element: <>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} btnText={btnText} stylecol = {stylecol}/>
        <User/>
      </>
    }
  ])
  
  return (
    <>
      
      <RouterProvider router={router}/>
      {/* <div className="container my-5">
      < TextForm mode={mode} showAlert={showAlert}/>
      </div> */}
      {/* <div className="continer my-3">
        <About mode ={mode}/>
      </div> */}
   </>
  );
}


export default App
