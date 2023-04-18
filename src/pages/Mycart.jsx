import React from "react";

export default function Mycart() {
  return (
    <>
      <div className="w-[80%] m-auto mb-20">
        <h1 className=" m-2 font-semibold">Shopping Cart</h1>
        
          <div className="hidden lg:flex  space-x-32 m-2 p-2 border-2 border-gray-200 shadow-md ">
            <div className="flex space-x-32 ">
              <p>Item</p>
              <p>Item Description</p>
            </div>
            <div className="flex space-x-32">
              <p>Qty.</p>
              <p>Price</p>
              <p>Subtotal</p>
            </div>
          </div>
          <div className="lg:flex xm:space-y-3 lg:space-y-0 lg:space-x-20 border py-2  shadow-md m-2">
            <div className="lg:flex   space-x-10 p-2 m-2  items-center xm:w-full lg:w-[50%]">
              <p>1</p>
              <div className="lg:flex xm:space-y-3 lg:space-y-0 text-sm lg:space-x-5">
                <img
                  src="cart.jpg"
                  alt="error in loading"
                  className="w-[100px] h-[150px]"
                />
                <p className="w-auto">
                  Objective Commerce (For CA, CMA, CS, BBA, B.Com.,MBA, M.Com.,
                  UPSC, State PSC, Banking etc.)
                  <br />
                  <span>By: Vivek K. Gupta & Manoj Kaushik</span>
                  <br />
                  <span>Code: 985</span>
                </p>
              </div>
              <input
                type="number"
                className="w-[80px] h-[50px] p-2 outline-none border-2"
              />
            </div>
            <div className="lg:flex  justify-center xm:px-10 lg:px-0 items-center space-x-32">
              <p>
                Rs.182
                <br />
                <strike className="text-gray-400">Rs.509</strike>
              </p>
              <p>Rs.182</p>
            </div>
          </div>
        <div className="lg:flex">
          <div>
            <div className="flex justify-end px-8 py-2 m-2 border shadow-md w-auto float-right text-sm">
              <p>Amount Payable :</p>
              <p>Rs.232</p>
            </div>
            <div className="flex justify-end px-8 py-2 m-2 border shadow-md w-auto float-right text-sm">
              <p>Shipping charges :</p>
              <p>Rs.50</p>
            </div>
            <div className="flex justify-end px-8 py-2 m-2 border shadow-md w-auto float-right text-sm">
              <p>subtotal Amount :</p>
              <p>Rs.182</p>
            </div>
          </div>
          
          <div className=" p-2 py-6 m-2 border shadow-md text-xs space-y-2">
            <p>
              <span className="font-bold">Note:</span> Delivery FREE for
              purchases above Rs. 500. Orders amounting up to Rs. 500 and below
              will be charged Rs. 50 as shipping.
            </p>
            <p>
              <span className="font-bold">Note:</span>
              Above Prices are only for India. For international prices, please
              contact customer care at +91.562.2530966 or write to us at
              care@coding-pathshala
            </p>
          </div>
         
        </div>
        <div className="flex justify-between p-2 m-2 text-sm">
            <button className="bg-orange-500 text-white font-semibold rounded xm:p-[2px] lg:p-2 shadow-md">
              Continue Shopping
            </button>
            <button className="bg-orange-500 text-white font-semibold rounded xm:p-[2px] lg:p-2 shadow-md">
              Checkout
            </button>
          </div>
      </div>
    </>
  );
}
