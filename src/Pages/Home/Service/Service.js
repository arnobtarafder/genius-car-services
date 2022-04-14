import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {id, name, img, description, price} = service;
    const navigate = useNavigate()
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='service position-relative my-5'>
            <img className='w-100' src={img} alt="" />
            <div className='p-3'>
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p className='pb-5'><small>{description}</small></p>
            <button onClick={() => navigateToServiceDetail(id)} className='btn btn-primary position-absolute top-auto bottom-0'>Book Now</button>
            </div>
        </div>
    );
};

export default Service;