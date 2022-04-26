import React from 'react';

const Expert = ({ expert }) => {
  const { name, img } = expert;
  return (
    <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={img} alt="Card image cap" />
        <div className="card-body ps-3">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">I’m the assistant, I will fix the problem you've faced in your car. Stay tensionless</p>
          <a href="#" className="btn btn-primary">Call me</a>
        </div>
      </div>
    </div>
  );
};

export default Expert;