import React from "react";
import Header from "./components/Header";
import Buttons from "./components/Buttons";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="outer-container">
      <div className="inner-container">
        <Header />
         <Buttons/>
      </div>
     <Footer/>
    </div>
  );
}

export default App;
