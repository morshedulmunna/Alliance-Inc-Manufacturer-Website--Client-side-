import React from "react";
import { GlobalCSS } from "../../../helper/index";
import { Link } from "react-router-dom";

const Tools = ({ product }) => {
  const { img, price, minOrder, Stock, title, description, _id } = product;

  const stock = parseInt(Stock);

  return (
    <div className={GlobalCSS.container}>
      <div className="card lg:w-[80%] md:w-[80%] w-full bg-base-100 shadow-xl mt-12">
        <figure>
          <img className="w-[70%]" src={img} alt="Shoes" />
        </figure>
        <div className=" p-2 text-black ">
          <h2 className="card-title">{title.slice(0, 45)}...</h2>

          <div className="font-bold text-primary">
            Price: $<span>{price} </span>
          </div>

          <div className="flex justify-between items-center flex-col lg:flex-row md:flex-row my-5">
            <div className="badge badge-accent badge-outline mb-2 lg:mb-0 md:mb-0">
              Stock {stock}
            </div>
            <div className="badge badge-accent badge-outline">
              Min Order {minOrder}
            </div>
          </div>
          <p> {description.slice(0, 120)}..... </p>

          <div className="card-actions justify-end ">
            <Link className="w-full" to={`/place-order/${_id}`}>
              <button className="btn btn-primary gap-2 w-full my-5 ">
                Place Order
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
