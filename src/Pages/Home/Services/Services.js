import React, {useState, useEffect} from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    
    useEffect( () => {
        fetch("https://lit-dawn-96860.herokuapp.com/service")
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
 


    return (
        <div id='services' className='services container'>
            {/* <h1 class="title">Awesome Heading</h1> */}

            <div className="row">
            <h1 className='text-primary text-center mt-5'>Our Services: {services.length}</h1>
           <div className="services-container">
           {
                services.map(service => <Service
                    key={service._id}
                    service={service}
                > 
                </Service>)
            }
           </div>
            </div>
        </div>
    );
};

export default Services;