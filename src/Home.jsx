import React, { useState, useEffect } from "react";
import Webcam from "react-webcam";

const Home = () => {
  const [link, setLink] = useState("");
  const [flag, setFlag] = useState(false);

  const handleSubmit = (e) => {
    console.log("====================================");
    console.log(link);
    console.log("====================================");
    setFlag(true);
  };

  const handleClick = (e) => {
    sessionStorage.removeItem("student");
  };

  const webcamRef = React.useRef(null);
  const mediaRecorderRef = React.useRef(null);
  const [capturing, setCapturing] = React.useState(false);
  const [recordedChunks, setRecordedChunks] = React.useState([]);

  const handleStartCaptureClick = React.useCallback(() => {
    setCapturing(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm",
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
  }, [webcamRef, setCapturing, mediaRecorderRef]);

  const handleDataAvailable = React.useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );

  const handleStopCaptureClick = React.useCallback(() => {
    mediaRecorderRef.current.stop();
    setCapturing(false);

    setFlag(false);
  }, [mediaRecorderRef, webcamRef, setCapturing]);

  const handleDownload = React.useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: none";
      a.href = url;
      a.download = "react-webcam-stream-capture.webm";
      a.click();
      window.URL.revokeObjectURL(url);
      setRecordedChunks([]);
      console.log("====================================");
      console.log(blob);
      console.log("====================================");
    }
  }, [recordedChunks]);

  return (
    <section className="text-gray-400 bg-gray-900 body-font min-h-full min-w-[20rem]">
      <div className="container flex justify-center items-center pb-[8rem]">
        <div className="bg-gray-900 shadow-md rounded-lg p-8 flex flex-col w-full ">
          <div className="flex flex-row items-center justify-between">
            <h2 className="text-white text-lg mb-1 font-medium title-font">
              StudyAI
            </h2>

            <button
              onClick={handleClick}
              className="text-white order-0 py-2 px-6 rounded hover:bg-indigo-600"
            >
              Logout
            </button>
          </div>

          {flag ? (
            <div className="flex flex-col">
              <p className="text-xs mb-4 text-gray-400 text-opacity-90 mt-3">
                You are successfully join the class.
              </p>

              <Webcam audio={false} ref={webcamRef} />
              {capturing ? (
                <button
                  className=" text-white m-4 bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  onClick={handleStopCaptureClick}
                >
                  Close Class
                </button>
              ) : (
                <button
                  className="text-white m-4 bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  onClick={handleStartCaptureClick}
                >
                  Join Class
                </button>
              )}
            </div>
          ) : (
            <div>
              <p className="leading-relaxed mb-5">
                Submit class link to join the class
              </p>
              <div className="mb-10">
                <label for="link" className="leading-7 text-sm text-gray-400">
                  Link
                </label>
                <input
                  type="text"
                  value={link}
                  onChange={(e) => {
                    setLink(e.target.value);
                  }}
                  id="link"
                  name="link"
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <button
                onClick={handleSubmit}
                type="submit"
                className="text-white  bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Submit
              </button>

              {recordedChunks.length > 0 && (
                <button className="m-4 mx-4" onClick={handleDownload}>
                  Download
                </button>
              )}

              <p className="text-xs text-gray-400 text-opacity-90 mt-3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, repellendus.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
