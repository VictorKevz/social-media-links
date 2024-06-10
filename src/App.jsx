import React from "react";
import Header from "./components/Header";
import Link from "./components/Link";
import Footer from "./components/Footer";
import "./App.css"

function App() {
  return (
    <main className="outer-container">
      <div className="inner-container">
        <Header />
         <Link/>
      </div>
     <Footer/>
    </main>
  );
}

export default App;
