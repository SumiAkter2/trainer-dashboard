import React from 'react';

const DetailInfo = ({ info }) => {
    return (
        <tr className='mb-3 p-4 App px-5'>


            <td className='ps-4'><img className='border-0 rounded-circle' style={{ 'width': '50px' }} src={info.img} alt="" /></td>
            <div className='d-flex flex-column '>
                <td className='fs-5 '>{info.name}</td>
                <td>{info.email}</td>
            </div>




            <td className='d-flex flex-column'><span>
                {info.stepswalked}</span> walked</td>


            <td className='d-flex flex-column'><span>{info.stepstarget}</span> target</td>

            <td>{info.performedDate}</td>
            <td className='d-flex flex-column'>
                <span> {info.scheduledDate}</span> target</td>


            <td >{info.calorieIntake}</td>
            <td className='d-flex flex-column'>{info.calorieTarget} target</td>


            <td >{info.proteinConsumed}</td>
            <td className='d-flex flex-column'>{info.proteinTarget} target</td>

            <td >{info.carbConsumed}</td>
            <td className='d-flex flex-column'>{info.carbTarget} target</td>

            <td >{info.fatConsumed}</td>
            <td className='d-flex flex-column'>{info.fatTarget} target</td>




        </tr>
    );
};

export default DetailInfo;