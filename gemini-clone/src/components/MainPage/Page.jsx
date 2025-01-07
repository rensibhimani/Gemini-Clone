import React, { useContext } from "react";
import "./page.css";
import { assets } from "../../assets/assets";
import { Context } from "../../Context/Context";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const Page = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loadingState,
    loading,
    resultData,
    setInput,
    input,
  } = React.useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Human..</span>
              </p>
              <p>How can I help you?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Mindset is what separates the best from the rest.</p>
                <img src={assets.compass} alt="" />
              </div>
              <div className="card">
                <p>
                  Just one small positive thought in the morning can change your
                  whole day.
                </p>
                <img src={assets.bulb} alt="" />
              </div>
              <div className="card">
                <p>Either you run the day or the day runs you</p>
                <img src={assets.message} alt="" />
              </div>
              <div className="card">
                <p>Don't tell people your dreams. Show them</p>
                <img src={assets.code} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.shine} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <>
                  <p
                    style={{ marginTop: "0px" }}
                    dangerouslySetInnerHTML={{ __html: resultData }}
                  ></p>
                </>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onKeyDown={(e) => {
                if (input && e.key === "Enter") {
                  onSent();
                }
              }}
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div>
              <img
                src={assets.gallery}
                alt=""
                data-tooltip-id="upload-image"
                data-tooltip-content="Upload image"
              />
              <Tooltip
                id="upload-image"
                // style={{ padding: "5px", fontSize: "12px", color: "#f0f4f9" }}
              />
              <img
                src={assets.mic}
                alt=""
                data-tooltip-id="use-microphone"
                data-tooltip-content="Use microphone"
              />
              <Tooltip
                id="use-microphone"
                // style={{ padding: "5px"0, fontSize: "12px", color: "#f0f4f9" }}
              />
              {input ? (
                <img
                  onClick={() => onSent()}
                  src={assets.send}
                  alt=""
                  data-tooltip-id="submit"
                  data-tooltip-content="Submit"
                />
              ) : null}
            </div>
          </div>

          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
