import React from 'react';
import { toast } from 'react-toastify';
import useServices from '../../hooks/useServices';
import 'react-toastify/dist/ReactToastify.css';
import BrowserTitle from '../Shared/BrowserTitle/BrowserTitle';

const ManageService = () => {
    const [services, setServices] = useServices();

    const handleDelete = id => {
        const proceed = window.confirm("Are you sure?");
        if (proceed) {
            const url = `https://lit-dawn-96860.herokuapp.com/service/${id}`;
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
            <BrowserTitle title="Delete-Service"></BrowserTitle>
            <h1>Manage your services</h1>
            {
                services.map(service => <div key={service._id}>
                    <h5>{service.name} <button onClick={() => handleDelete(service._id)}>X</button> </h5>

                </div>)
            }
        </div>
    );
};

export default ManageService;