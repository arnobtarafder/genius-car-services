import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h1 className='my-5 ms-5'>Product Id: {serviceId}</h1>
            <div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-primary mt-5'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;