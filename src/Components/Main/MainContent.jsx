import React, { useContext } from "react";
import "./MainContent.css";
import { assets } from "../../assets/assets";
import { Context } from "../../Context/Context";


const MainContent = () => {
  const {
    onSent,
    input,
    setInput,
    recentPrompt,
    prevPromt,
    showResults,
    result,
    loading
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
       
        <img src={assets.karan} alt="" />
      </div>
      <div className="main-container">
        {!showResults ? (
          <>
            <div className="greet">
              <h4>
                <span>Hello, Karan.</span>
              </h4>
              <p>How can I Help you Today? </p>
            </div>

            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places for upcomming road trip</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Suggest beautiful places for upcomming road trip</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Suggest beautiful places for upcomming road trip</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Suggest beautiful places for upcomming road trip</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.karan} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                    <hr />
                    <hr />
                    <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: result }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Ask Gemini..."
            />

            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
            {input ? <img onClick={() => onSent()} src={assets.send_icon} alt="" /> : null}  
            </div>
          </div>
          <p className="bottom-info">
            As Gemini AI, I embody duality and curiosity, learning, adapting,
            and connecting ideas to inspire and empower you." 🚀✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
