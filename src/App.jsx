import { useState } from "react";
import "./index.css"

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="card p-5 rounded-lg m-auto items-center">
          <div className="code">
            <img
              src="/images/image-qr-code.png"
              alt=""
              className="image w-80 rounded-lg"
            />
          </div>
          <div className="description w-80 text-center">
            <h2 className="text-2xl mt-5 header mb-5">
              Improve your front-end skills by building projects
            </h2>
            <p className="about pb-7 text-sm">
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
