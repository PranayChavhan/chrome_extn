import React from "react";
import Login from "./Login";
import Home from "./Home";


function App() {

  const data = sessionStorage.getItem("student")

  return (
    <div>

      {
        data ?
        <Home/>
        :
        <Login/>
      }
      
      
    </div>
  )
}

export default App
