import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { img, price, title, _id } = service;
  // console.log(_id);
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl p-3">
      <figure>
        <img className="h-60" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-2xl text-orange-600 font-semibold">
          Price: ${price}
        </p>
        <div className="card-actions justify-end">
          <Link to={`/checkout/${_id}`}>
            <button className="btn btn-primary">Check Out</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
