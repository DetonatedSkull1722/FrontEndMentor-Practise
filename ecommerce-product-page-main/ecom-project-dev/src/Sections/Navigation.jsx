import React, { useState, useRef, useEffect } from "react";
import logo from "../assets/images/logo.svg";
import cart from "../assets/images/icon-cart.svg";
import profilePic from "../assets/images/image-avatar.png";
import * as images from "../assets/images";

const Navigation = ({ number, setNumber }) => {
  const [cartActive, setCartActive] = useState(false);
  const cartRef = useRef(null); // Ref for the cart

  // Close cart when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setCartActive(false); // Close the cart
      }
    };

    if (cartActive) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup event listener on unmount or state change
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [cartActive]);

  // Toggle Cart Visibility
  function handleCart() {
    setCartActive(!cartActive);
  }

  return (
    <nav
      className="border-b-2 flex items-center justify-between h-20 w-10/12"
      id="navbar"
    >
      <div className="flex items-center justify-center h-full">
        <img src={logo} alt="" className="h-5 mr-14" />
        <ul className="h-full flex items-center justify-center gap-6 text-[0.7rem] text-gray-400">
          <li className="li-item">Collections</li>
          <li className="li-item">Men</li>
          <li className="li-item">Women</li>
          <li className="li-item">About</li>
          <li className="li-item">Contact</li>
        </ul>
      </div>
      <div className="flex justify-center items-center gap-2">
        {/* Cart Icon */}
        <div
          className="relative hover:scale-105 transition-transform duration-200"
          onClick={handleCart}
        >
          <img src={cart} alt="" className="w-5" />
          <div className="w-3 rounded-full h-3 bg-yellow-400 absolute top-[-0.15rem] right-[-0.25rem] flex justify-center items-center">
            <p className="text-center text-[0.5rem]">{number}</p>
          </div>

          {/* Cart Preview */}
          {cartActive && (
            <div
              ref={cartRef} // Attach ref to the cart div
              className="absolute right-0 mt-2 w-80 bg-white border border-gray-300 rounded-lg shadow-lg p-4 z-10"
            >
              <h2 className="text-lg font-bold mb-4 border-b-2 border-black">
                Cart
              </h2>
              {number > 0 ? (
                <div className="flex items-center mb-4">
                  <img
                    src={images.product1Thumbnail}
                    alt="Item Image"
                    className="w-12 h-12 rounded-md mr-4"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-800">
                      Fall Limited Edition Sneakers
                    </h3>
                    <p className="text-sm text-gray-600">
                      $125.00 x {number}{" "}
                      <span className="font-bold text-gray-800">
                        ${number * 125}
                      </span>
                    </p>
                  </div>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => setNumber(0)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              ) : (
                <p className="text-gray-500 text-center">Your cart is empty.</p>
              )}

              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md">
                Checkout
              </button>
            </div>
          )}
        </div>

        {/* Profile Icon */}
        <div className="h-10 w-10 border-2 border-transparent rounded-full hover:border-2 hover:border-yellow-300 hover:scale-105 duration-100 ml-4 mr-5">
          <img src={profilePic} className="w-full" alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
