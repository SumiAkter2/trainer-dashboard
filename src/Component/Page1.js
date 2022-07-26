import React, { useEffect, useState } from 'react';
import DetailInfo from './DetailInfo';
import ProgressBar from "@ramonak/react-progress-bar";
const Page1 = () => {
    const [infos, setInfo] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setInfo(data))
    }, [])
    const handleIncrease = () => {
        let quantity = infos?.stepstarget;
        //  quantity++;
        setInfo(quantity);
        console.log('increase', quantity);
    }
    return (
        <div className='text-light container text-center'>

            <div className='row'>
                {
                    infos.map(info => <DetailInfo key={info.userId}
                        info={info}
                        handleIncrease={handleIncrease}
                    ></DetailInfo>)
                }

            </div>
            <div style={{ 'width': '250px' }} className='  rounded p-2 App'>
                <div style={{ 'fontSize': '10px' }} className='bg-dark p-2 rounded mb-2'>
                    <div className='d-flex justify-content-between'>
                        <p>PROTEIN</p>
                        <p>70%</p>
                    </div>
                    <ProgressBar completed={50} maxCompleted={70} />
                </div>
                <div style={{ 'fontSize': '10px' }} className='bg-dark p-2 rounded mb-2'>
                    <div className='d-flex justify-content-between '>
                        <p >FAT</p>
                        <p>70%</p>
                    </div>
                    <ProgressBar completed={30} maxCompleted={70} />
                </div>
                <div style={{ 'fontSize': '10px' }} className='bg-dark p-2 rounded mb-2'>
                    <div className='d-flex justify-content-between'>
                        <p>CARBS</p>
                        <p>70%</p>
                    </div>
                    <ProgressBar completed={60} maxCompleted={70} />
                </div>
            </div>
        </div>
    );
};

export default Page1;