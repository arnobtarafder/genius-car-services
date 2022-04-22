import React from 'react';
import { ToastContainer } from 'react-bootstrap';
import { toast } from 'react-toastify';
import useServices from '../../hooks/useServices';
import 'react-toastify/dist/ReactToastify.css';

const ManageService = () => {
    const [services, setServices] = useServices();

    const handleDelete = id => {
        const proceed = window.confirm("Are you sure?");
        if(proceed) {
            const url = `http://localhost:520/service/${id}`;
            fetch(url, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                toast.success("Successfully deleted");
                const remaining = services.filter(service => service._id !== id);
                setServices(remaining)
            })
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h1>Manage your services</h1>
            {
                services.map(service => <div key={service._id}>
                    <h5>{service.name} <button onClick={() => handleDelete(service._id)}>X</button> </h5>
                    
                </div>)
            }
        <ToastContainer />
        </div>
    );
};

export default ManageService;