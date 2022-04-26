import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Checkout = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user] = useAuthState(auth);
    if(user) {
        // console.log(user);
    }

    const handlePlaceOrder = (event) => {
        event.preventDefault();
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value,
        }
        axios.post("https://lit-dawn-96860.herokuapp.com/order", order)
        .then(response => {
            const {data} = response;
            if(data.insertedId) {
                toast("Congratulations!! Your order is booked.");
                event.target.reset();
            }
        })
    }

    return (
        <div className='w-50 mx-auto'>
            <h2>Please Order: {service.name}</h2>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' type="text" name="name" value={user?.displayName} required readOnly disabled/>
                <br />
                <input className='w-100 mb-2' type="email" name="email" value={user?.email} required readOnly disabled/>
                <br />
                <input className='w-100 mb-2' type="text" name="service" value={service?.name} required readOnly/>
                <br />
                <input className='w-100 mb-2' type="text" name="address" autoComplete='off' value={user?.address} required />
                <br />
                <input className='w-100 mb-2' type="number" name="phone" value={user?.phone} required/>
                <br />

                <input className='btn btn-primary' type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default Checkout;