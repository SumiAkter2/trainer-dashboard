import React, { useEffect, useState } from "react";
import DetailInfo from "../Component/DetailInfo";
import ProgressBar from "@ramonak/react-progress-bar";
const Page1 = () => {
  const [infos, setInfo] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);
  // console.log(infos);
  return (
    <div className="text-light container text-center">
      <div className="row">
        {infos.map((info) => {
          // const { stepstarget, userId, name, email } = info;
          // console.log(stepstarget);
          return <DetailInfo key={info.userId} info={info}></DetailInfo>;
        })}
      </div>
    </div>
  );
};

export default Page1;

/* return (<DetailInfo key={info.userId}
    info={info}
    steps={steps}
    setSteps={setSteps}
></DetailInfo>) */
