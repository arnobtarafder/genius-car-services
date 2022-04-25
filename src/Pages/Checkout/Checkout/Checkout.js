import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';

const Checkout = () => {
    const { serviceId } = useParams()
    const [service] = useServiceDetail(serviceId);

    return (
        <div className='mt-5 ms-5'>
            <h2>Please Order: {service.name}</h2>
            <h2>Please give me your money</h2>
            <h2>Otherwise you will be dead</h2>
        </div>
    );
};

export default Checkout;