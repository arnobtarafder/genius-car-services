import React from 'react';
import { useForm } from 'react-hook-form';
import BrowserTitle from '../Shared/BrowserTitle/BrowserTitle';

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `https://lit-dawn-96860.herokuapp.com/service`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            // console.log(result);
        })
            
    };

    return (
        <div className='w-50 mx-auto'>
            <BrowserTitle title="Post-Service"></BrowserTitle>
            <h1>Please add a service</h1>
            <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='Description' {...register("description", { required: true }) } />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                <input type="submit" value="Add Service" />
            </form>

        </div>
    );
};

export default AddService;