import React, { useState } from "react";
import axios from "axios";


const Login = () => {

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleSubmit = (e) => {
    console.log("====================================");
    console.log(Email, Password);
    console.log("====================================");
    axios
      .post("https://peach-violet-rhinoceros.glitch.me/api/v1/student/login", {
        emailID: Email,
        password: Password,
      })
      .then((res) => {
        const data = res.data;
        if (data.success) {
          console.log("student login successfully");
          console.log(data);
          sessionStorage.setItem("student", JSON.stringify(data.data));
        } else {
          alert("invalid");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className="text-gray-400 bg-gray-900 body-font min-h-full min-w-[20rem]">
      <div className="container flex justify-center items-center pb-[8rem]">
        <div className="bg-gray-900 shadow-md rounded-lg p-8 flex flex-col w-full ">
          <h2 className="text-white text-lg mb-1 font-medium title-font">
            StudyAI
          </h2>

          <div>
            <p className="leading-relaxed mb-5">Login to StudyAI</p>

            <div className="mb-10">
              <label for="Email" className="leading-7 text-sm text-gray-400">
                Email
              </label>
              <input
                type="email"
                value={Email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                id="Email"
                name="Email"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="mb-10">
              <label for="Password" className="leading-7 text-sm text-gray-400">
                Password
              </label>
              <input
                type="password"
                value={Password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                id="Password"
                name="Password"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <button
              onClick={handleSubmit}
              type="submit"
              className="text-white  bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Login
            </button>
            <p className="text-xs mb-5 text-gray-400 text-opacity-90 mt-3">
              Don't have an account, Please register
            </p>
            <button
              type="submit"
              className="text-white mt-10 bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
