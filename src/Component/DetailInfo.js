import React from 'react';
import { buildStyles, CircularProgressbar, CircularProgressbarWithChildren } from 'react-circular-progressbar';

const DetailInfo = ({ info }) => {

    return (
        <tr className='mb-3 p-4 App px-4 '>


            <td className='ps-4'><img className='border-0 rounded-circle' style={{ 'width': '50px' }} src={info.img} alt="" /></td>
            <div className='d-flex flex-column '>
                <td className='fs-5 '>{info.name}</td>
                <td>{info.email}</td>
            </div>



            <td>
                <div style={{ width: 60, height: 60 }}>
                    <CircularProgressbar value={70} text={`${info.stepswalked}`} styles={buildStyles({
                        pathColor: "#7FD18C",
                        strokeLinecap: "butt",
                        textSize: "14px",
                        textColor: "white",

                    })} />
                </div>
            </td>



            <td ><span>{info.stepstarget}</span> target</td>

            <td>{info.performedDate}</td>
            <td >
                <span> {info.scheduledDate}</span> target</td>


            <td > <div style={{ width: 60, height: 60 }}>
                <CircularProgressbarWithChildren
                    value={80} text={`${info.calorieIntake}`}
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
                            strokeLinecap: "butt"
                        })}
                    />
                </CircularProgressbarWithChildren>
            </div>

            </td>
            <td >{info.calorieTarget} target</td>


            <td >{info.proteinConsumed}</td>
            <td >{info.proteinTarget} target</td>

            <td >{info.carbConsumed}</td>
            <td >{info.carbTarget} target</td>

            <td >{info.fatConsumed}</td>
            <td >{info.fatTarget} target</td>




        </tr>
    );
};

export default DetailInfo;