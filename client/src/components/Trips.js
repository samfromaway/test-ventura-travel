import React from 'react';

const Trips = ({ title, price, desc, img }) => {
  return (
    <div className="card">
      <img className="image" src={img} alt={title} />
      <div className="content">
        <h3 className="title">{title}</h3>
        <p className="desc">{desc}</p>
        <p className="price">{`COP ${price}`}</p>
      </div>
    </div>
  );
};

export default Trips;
