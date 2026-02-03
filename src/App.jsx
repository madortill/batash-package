import { useState } from 'react'
import './style/App.css'
import til from "./assets/images/til.svg";
import bahad6 from "./assets/images/bahad6.png";

function App() {
  const [showAbout, setShowAbout] = useState(false);
  const [infoSymbol, setInfoSymbol] = useState("i");
  const toggleAbout = () => {
    setShowAbout((prev) => !prev);
    setInfoSymbol((prev) => (prev === "i" ? "x" : "i"));
  };

  return (
    <>
    <div className="symbols">
        <img src={bahad6} alt="bahad6" className="bahad6" />
        <img src={til} alt="til" className="til" />
      </div>
       <div onClick={toggleAbout} className="aboutBtnContainer">
        <button className="about-btn">
          {infoSymbol}
        </button>
        <p>אודות</p>
      </div>
      <div className={`div-about ${showAbout ? "fade-in" : "fade-out"}`}>
        {showAbout && (
          <>
            <h3 className="list-text-about">מפתחת ראשית:</h3>
            <p className="list-text-about">רב"ט גילי נחום</p>
            <h3 className="list-text-about">גרפיקה:</h3>
            <p className="list-text-about">רב"ט גילי נחום</p>
            <h3 className="list-text-about">מומחי תוכן:</h3>
            <p className="list-text-about">רס"ל עדן מאיר</p>
            <p className="list-text-about">רנ"ג יוסי אלוני</p>
            <h3 className="list-text-about">רמ"ד טי"ל:</h3>
            <p className="list-text-about">רס"מ עדן בן חמו</p>
            <h3 className="list-text-about">גרסה:</h3>
            <p className="list-text-about">דצמבר 2025</p>
          </>
        )}
      </div>
    </>
  )
}

export default App
