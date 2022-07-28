import ProgressBar from "@ramonak/react-progress-bar";
import { useState } from "react";
import {
  buildStyles,
  CircularProgressbar,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
// import ProgressBar from "@ramonak/react-progress-bar";
const DetailInfo = ({ info }) => {
  const [steps, setSteps] = useState(0);
  const handleIncrease = () => {
    let steps = info?.stepstarget;
    steps++;
    setSteps(steps);
    console.log("ji", steps);
  };
  const handleDecrease = () => {
    console.log("ki");
  };

  return (
    <div>
      <div className="App my-4 rounded-3 border-0">
        <div className=" d-flex p-2 justify-content-between align-items-center">
          <div className="ps-4">
            <img
              className="border-0 rounded-circle"
              style={{ width: "50px" }}
              src={info.img}
              alt=""
            />
          </div>
          <div className="d-flex flex-column ps-5 text-start">
            <div className="fs-5 ">{info.name}</div>
            <div>{info.email}</div>
          </div>

          <div className="ms-5 mt-2" style={{ width: 80, height: 80 }}>
            <CircularProgressbar
              value={70}
              text={`${info.stepswalked}`}
              styles={buildStyles({
                pathColor: "#7FD18C",
                strokeLinecap: "butt",
                textSize: "14px",
                textColor: "white",
              })}
            />
          </div>
          <div className="d-flex flex-column ps-2 text-center">
            <button
              onClick={handleIncrease}
              className="bg-dark text-light border-0 px-1 rounded-pill"
            >
              +
            </button>
            <span className="fw-bold">{steps} K</span> target{" "}
            <button
              onClick={handleDecrease}
              className="bg-dark text-light border-0 px-1 rounded-pill"
            >
              -
            </button>
          </div>

          <div className="ms-5 d-flex flex-column align-items-center justify-content-center">
            <p>
              {" "}
              {icon1} {info.performedDate}
            </p>
            <p>
              {icon2} {info.scheduledDate}{" "}
            </p>
          </div>

          <div className="d-flex align-items-center">
            <button className="bg-dark text-light border-0  rounded-pill ms-2 py-3 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                width="8px"
                className="icon-bg mx-1 my-2"
              >
                <path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z" />
              </svg>
            </button>
          </div>

          <div className="ms-5 d-flex  flex-column align-items-center justify-content-center progess">
            <div style={{ width: 80, height: 80 }}>
              <CircularProgressbarWithChildren
                value={80}
                text={`${info.calorieIntake}`}
                styles={buildStyles({
                  pathColor: "#F5C90F",
                  trailColor: "#03C7FC",
                  strokeLinecap: "butt",
                  textSize: "14px",
                  textColor: "white",
                })}
              >
                {/* Foreground path */}
                <CircularProgressbar
                  value={20}
                  styles={buildStyles({
                    pathColor: "#F45C84",
                    trailColor: "transparent",
                    strokeLinecap: "butt",
                  })}
                />
              </CircularProgressbarWithChildren>
            </div>
          </div>
          <div className="d-flex flex-column ps-2 text-center">
            <button className="bg-dark text-light border-0 px-1 rounded-pill">
              +
            </button>
            <span className="fw-bold"> {info.calorieTarget}</span> target{" "}
            <button className="bg-dark text-light border-0 px-1 rounded-pill">
              -
            </button>
          </div>

          <div className="d-flex align-items-center">
            <button className="bg-dark text-light border-0  rounded-pill py-3 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                width="8px"
                className="icon-bg mx-1 my-2"
              >
                <path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z" />
              </svg>
            </button>
          </div>

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width="20px"
              className="icon-alarm"
            >
              <path d="M256 32V51.2C329 66.03 384 130.6 384 208V226.8C384 273.9 401.3 319.2 432.5 354.4L439.9 362.7C448.3 372.2 450.4 385.6 445.2 397.1C440 408.6 428.6 416 416 416H32C19.4 416 7.971 408.6 2.809 397.1C-2.353 385.6-.2883 372.2 8.084 362.7L15.5 354.4C46.74 319.2 64 273.9 64 226.8V208C64 130.6 118.1 66.03 192 51.2V32C192 14.33 206.3 0 224 0C241.7 0 256 14.33 256 32H256zM224 512C207 512 190.7 505.3 178.7 493.3C166.7 481.3 160 464.1 160 448H288C288 464.1 281.3 481.3 269.3 493.3C257.3 505.3 240.1 512 224 512z" />
            </svg>
          </div>

          <div></div>
        </div>
      </div>

      <div className="d-none progress-linear">
        <div style={{ width: "250px" }} className="  rounded p-2 App">
          <div
            style={{ fontSize: "10px" }}
            className="bg-dark p-2 rounded mb-2"
          >
            <div className="d-flex justify-content-between">
              <p>PROTEIN</p>
              <p>70%</p>
            </div>
            <ProgressBar completed={50} maxCompleted={70} />
          </div>
          <div
            style={{ fontSize: "10px" }}
            className="bg-dark p-2 rounded mb-2"
          >
            <div className="d-flex justify-content-between ">
              <p>FAT</p>
              <p>70%</p>
            </div>
            <ProgressBar completed={30} maxCompleted={70} />
          </div>
          <div
            style={{ fontSize: "10px" }}
            className="bg-dark p-2 rounded mb-2"
          >
            <div className="d-flex justify-content-between">
              <p>CARBS</p>
              <p>70%</p>
            </div>
            <ProgressBar completed={60} maxCompleted={70} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailInfo;

export const icon1 = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="20px"
    className="icon-bg"
  >
    <path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z" />
  </svg>
);
export const icon2 = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    width="20px"
    className="icon-bg me-2"
  >
    <path d="M160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V160H0V112C0 85.49 21.49 64 48 64H96V32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32zM0 192H448V464C448 490.5 426.5 512 400 512H48C21.49 512 0 490.5 0 464V192zM80 256C71.16 256 64 263.2 64 272V368C64 376.8 71.16 384 80 384H176C184.8 384 192 376.8 192 368V272C192 263.2 184.8 256 176 256H80z" />
  </svg>
);
