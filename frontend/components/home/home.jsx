import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {SiRedux} from "react-icons/si"
import {DiRuby, DiPostgresql, DiReact} from "react-icons/di";

export default (props) => {
  const [jobIndex, setJobIndex] = useState(0);
  const [animation, setAnimation] = useState(false);

  const jobs = [
    "developer",
    "game developer",
    "data scientist",
    "system admin",
    "mobile admin",
  ];
  let currIdx = 0;
  useEffect(() => {
      setJobIndex((ji)=>(ji+1)%5);
      setAnimation(true);
      setTimeout(function () {
        setAnimation(false);
      },1950);
      const interval = setInterval(() => {
        setJobIndex((ji)=>(ji+1)%5);
        setAnimation(true);
        setTimeout(function () {
          setAnimation(false);
        },1950);
      }, 2000);
      // let interval2 = "";
      // setTimeout(function () {
      //   interval2 = setInterval(() => {
      //     setJobIndex((ji)=>(ji+1)%5);
      //     setAnimation(false);
      //   }, 1000);
      // }, 1000);

      return () => {
        setAnimation(false);
        clearInterval(interval);
        // clearInterval(interval2);
      }
    }, []);

  
  return (
    <div className="home-container">
      <div className="header-container">
        <div className="header">
          <div className="speech-box-container">
            <div className="speech-box speech-box-1">
              <div className="speech-box-content">
                <svg
                  className="search-icon"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                >
                  <path
                    opacity=".2"
                    d="M29.22 38.1a3.4 3.4 0 0 1 4.81-4.82l8.81 8.81a3.4 3.4 0 0 1-4.81 4.81l-8.81-8.8Z"
                  ></path>
                  <path d="M18.5 5a1 1 0 1 0 0 2c.63 0 1.24.05 1.84.15a1 1 0 0 0 .32-1.98A13.6 13.6 0 0 0 18.5 5Zm7.02 1.97a1 1 0 1 0-1.04 1.7 11.5 11.5 0 0 1 5.44 8.45 1 1 0 0 0 1.98-.24 13.5 13.5 0 0 0-6.38-9.91ZM18.5 0a18.5 18.5 0 1 0 10.76 33.55c.16.57.46 1.12.9 1.57L40 44.94A3.5 3.5 0 1 0 44.94 40l-9.82-9.82c-.45-.45-1-.75-1.57-.9A18.5 18.5 0 0 0 18.5 0ZM2 18.5a16.5 16.5 0 1 1 33 0 16.5 16.5 0 0 1-33 0Zm29.58 15.2a1.5 1.5 0 1 1 2.12-2.12l9.83 9.83a1.5 1.5 0 1 1-2.12 2.12l-9.83-9.83Z"></path>
                </svg>
                <h2>
                  Find the best answer to your technical question, help others
                  answer theirs
                </h2>
                <Link className="btn btn-join" to="/signup">
                  Join the community
                </Link>
                <p>
                  or{" "}
                  <Link className="link-to-questions" to="/questions">
                    search content
                  </Link>
                </p>
              </div>
            </div>
            <div className="speech-box speech-box-2">
              <div className="speech-box-content">
                <svg
                  className="lock-icon"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                >
                  <path
                    opacity=".2"
                    d="M12 22a2 2 0 0 0-2 2v19a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4V26a4 4 0 0 0-4-4H12Zm6 7a5 5 0 1 1 7.67 4.23l.05.35c.15.84.36 1.8.61 2.86A2.06 2.06 0 0 1 24.35 39h-2.7a2.06 2.06 0 0 1-1.98-2.56c.29-1.2.52-2.3.66-3.2l-.19-.14A5 5 0 0 1 18 29Z"
                  ></path>
                  <path d="M23 24a5 5 0 0 0-2.86 9.1l.2.13c-.15.91-.38 2-.67 3.21A2.06 2.06 0 0 0 21.65 39h2.7c1.32 0 2.3-1.26 1.98-2.56a46.74 46.74 0 0 1-.6-2.86l-.06-.35A5 5 0 0 0 23 24Zm0 2a3 3 0 0 1 1.76 5.43l-.16.11a2 2 0 0 0-.91 2c.16.98.4 2.12.7 3.37.01.05-.02.09-.04.09h-2.7c-.02 0-.05-.04-.04-.09.3-1.25.54-2.4.7-3.36a2 2 0 0 0-.78-1.92l-.13-.09A3 3 0 0 1 23 26ZM12 12.44V18H9a3 3 0 0 0-3 3v21a3 3 0 0 0 3 3h28a3 3 0 0 0 3-3V21a3 3 0 0 0-3-3h-3v-5.56C34 6.2 29.36 1 23 1S12 6.19 12 12.44ZM23 3c5.14 0 9 4.18 9 9.44V18H14v-5.56C14 7.18 17.86 3 23 3ZM9 20h28a1 1 0 0 1 1 1v21a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V21a1 1 0 0 1 1-1Z"></path>
                </svg>
                <h2>
                  Want a secure, private space for your technical knowledge?
                </h2>
                <div className="get-started">
                  <span className="line"></span>
                  <span className="text">Get started</span>
                  <span className="line"></span>
                </div>
                <div className="extra-buttons">
                  <a
                    className="btn btn-social"
                    href="https://github.com/haewon6640"
                  >
                    <p>Github</p>
                    <svg
                      className="git-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    className="btn btn-social"
                    href="https://github.com/haewon6640"
                  >
                    <p>LinkedIn</p>
                    <svg
                      className="linked-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="moving-text-container">
            <span className={`side ${animation ? "side-move" : ""}`}>Every</span>
            <span className={`moving-text ${animation ? "move" : ""}`}> {jobs[jobIndex]} </span>
            <span className={`side ${animation ? "side-move" : ""}`}>has a</span>
            <br />
            tab open to Queue Overflow
          </div>
          <div className="technologies">        
            <div className="dash-br"></div>
            <div className="tech-used">
              <div className="react">
                <DiReact size={150}/>
                <p>React</p>
              </div>
              <div className="redux">
                <SiRedux size={110}/>
                <p>Redux</p>
              </div>
              <div className="rails">
                <DiRuby size={110}/>
                <p>Ruby on Rails</p>
              </div>
              <div className="postgresql">
                <DiPostgresql size={500}/>
                <p>PostgreSQL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
