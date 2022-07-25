import React, { useEffect, useState } from 'react';
import DetailInfo from './DetailInfo';

const Page1 = () => {
    const [infos, setInfo] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setInfo(data))
    }, [])
    return (
        <div className='text-light'>
            <table className=' w-100 mb-3'>


                <tbody className='text-light px-4 ' >
                    {
                        infos.map(info => <DetailInfo key={info.userId}
                            info={info}
                        ></DetailInfo>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Page1;