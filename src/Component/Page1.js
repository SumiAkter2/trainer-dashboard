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
    return (
        <div className='text-light container text-center'>
            <div className='row'>



                {
                    infos.map(info => <DetailInfo key={info.userId}
                        info={info}
                    ></DetailInfo>)
                }

            </div>
            <div className='w-25 '>
                <ProgressBar completed={50} maxCompleted={70} />
                <ProgressBar completed={30} maxCompleted={70} />
                <ProgressBar completed={60} maxCompleted={70} />
            </div>
        </div>
    );
};

export default Page1;