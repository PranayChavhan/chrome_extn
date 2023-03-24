import React, {useEffect} from "react";
import Login from "./Login";
import Home from "./Home";
function App() {

  const data = sessionStorage.getItem("student")
  console.log('====================================############################');
  console.log(JSON.parse(data) );
  console.log('====================================');

  useEffect(() => {
   
  }, [])


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
