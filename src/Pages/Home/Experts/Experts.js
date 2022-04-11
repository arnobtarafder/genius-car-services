import React from 'react';
import Expert from '../Expert/Expert';

const experts = [
    {id: 1, name: "Mr.Bean", img: "https://github.com/ProgrammingHero1/genius-car-service-module-60/blob/main/src/images/experts/expert-1.jpg?raw=true"},
    {id: 2, name: "WIll Smith", img: "https://github.com/ProgrammingHero1/genius-car-service-module-60/blob/main/src/images/experts/expert-2.jpg?raw=true"},
    {id: 3, name: "Chris Rock", img: "https://github.com/ProgrammingHero1/genius-car-service-module-60/blob/main/src/images/experts/expert-3.jpg?raw=true"},
    {id: 4, name: "Rock Johnson", img: "https://github.com/ProgrammingHero1/genius-car-service-module-60/blob/main/src/images/experts/expert-4.jpg?raw=true"},
    {id: 5, name: "Morn Assort", img: "https://github.com/ProgrammingHero1/genius-car-service-module-60/blob/main/src/images/experts/expert-5.jpg?raw=true"},
    {id: 6, name: "Stack Flow", img: "https://github.com/ProgrammingHero1/genius-car-service-module-60/blob/main/src/images/experts/expert-6.png?raw=true"},
]

const Experts = () => {
    return (
        <div className='container mx-auto'>
            <h1 className='text-primary text-center mt-5'>Our Experts</h1>
            <div className="row">
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;