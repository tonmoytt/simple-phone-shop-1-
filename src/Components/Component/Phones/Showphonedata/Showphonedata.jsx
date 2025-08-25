import React from 'react';
import { Link } from 'react-router-dom';

const Showphonedata = ({ phoneprops }) => {
  const { id, name, image, price } = phoneprops;

  return (
    <div className="h-full">
      <div className="card bg-base-100 shadow-md flex flex-col h-full">
        <figure className="overflow-hidden h-48 sm:h-56 md:h-60 lg:h-64">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </figure>

        <div className="p-4 flex flex-col flex-grow justify-between">
          <div>
            <h2 className="text-center text-lg sm:text-xl font-bold">{name}</h2>
            <p className="text-center font-serif mt-2 text-sm sm:text-base">
              Price: <span className="text-lg font-semibold">${price}</span>
            </p>
          </div>

          <Link to={`/details/${id}`} className="mt-4">
            <button className="btn btn-primary w-full text-sm sm:text-base md:text-lg rounded-lg">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Showphonedata;
