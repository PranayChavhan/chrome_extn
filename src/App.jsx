import React, { useState } from "react";
function App() {

  const [link, setLink] = useState("");
  const [flag, setFlag] = useState(false);

  const handleSubmit = (e) => {
    console.log('====================================');
    console.log(link);
    console.log('====================================');
    setFlag(true)
  }

  return (

    <section className="text-gray-400 bg-gray-900 body-font min-h-full min-w-[20rem]">

    <div className="container flex justify-center items-center pb-[8rem]">

    <div className="bg-gray-900 shadow-md rounded-lg p-8 flex flex-col w-full ">
        <h2 className="text-white text-lg mb-1 font-medium title-font">StudyAI</h2>

      {
        flag?
        <div>

        <p 
        className="text-xs text-gray-400 text-opacity-90 mt-3">You are successfully join the class.
        </p>

        <button 
        className="text-white  bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
         Exit
          </button>
        </div>
        

        :

        <div>
        <p className="leading-relaxed mb-5">Submit class link to join the class</p>
        <div className="mb-10">
          <label for="link" className="leading-7 text-sm text-gray-400">Link</label>
          <input 
          type="text" 
          value={link}
          onChange={(e) => {
              setLink(e.target.value);
          }} 
          id="link" 
          name="link" 
          className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
  
        <button 
        onClick={handleSubmit} type="submit" className="text-white  bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Submit
          </button>
        <p 
        className="text-xs text-gray-400 text-opacity-90 mt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, repellendus.
        </p>
        </div>
      }
      </div>
    

  </div>

</section>

  )
}

export default App
