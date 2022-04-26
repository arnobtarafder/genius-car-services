import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetail from '../../hooks/useServiceDetail';
import BrowserTitle from '../Shared/BrowserTitle/BrowserTitle';
import './ServiceDetail.css'

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);


    return (
        <div>
            <BrowserTitle title="Product Details"></BrowserTitle>
            <h2>You are about to book: {service.name}</h2>
            <div className="text-center">
                <Link to={`/checkout/${serviceId}`}>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;






// <h1 className='my-5 ms-5 border-start border-primary ps-4 py-2'>Product Id: {service.name}</h1>
            
//             <div style={{margin:"0px auto"}} className='service rounded w-100 px-auto pt-5 text-center'>
  
//              <div id='image'>
//              <img className='border-start w-100 border-top border-primary p-5' src={service[serviceId-1]?.img} alt="" />
//              </div>
              
//               <div className=''>
//                   <h2>{service[serviceId-1]?.name}</h2>
//                   <h4 className='text-sans fw-normal pb-3'>Price: {service[serviceId-1]?.price}</h4>
  
//                   <p id='description' style={{textAlign: "justify"}} className='pb-5 w-50 lh-base fs-4 mx-auto'><small>{service[serviceId-1]?.description}</small></p>
//               </div>
//             </div>     
  
//               <div className='text-center'>
  
//                   <Link to="/checkout"}>
//                       <button className='btn btn-primary px-5 py-3'>Proceed Checkout</button>
//                   </Link>
//               </div>