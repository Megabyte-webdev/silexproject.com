import React from "react";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className="p-4 bg-black text-white min-h-96 w-[98%] mx-auto md:w-full">
      <div className="w-[95%] mx-auto border-b border-gray-700 py-8 my-6 flex flex-wrap justify-between items-end">
        <section className="h-max rounded-md flex-grow md:w-48 max-w-96 w-[98%] m-4 transition-all ease-in-out duration-300">
          <h2 className="text-xl text-white">
            Ready to Transform your Business?
            <br />
            Take the first step Today!
          </h2>
          <p>
            Totam rem aperiam, eaque ipsa quae ab lilo inventore veritatis et
            quasi architecto baetae vitae dicta sunt.
          </p>
        </section>
        <section className="flex-grow flex flex-col justify-end h-max rounded-md md:w-max max-w-48 w-[98%] m-4 transition-all ease-in-out duration-300">
          <p className="text-gray-500">Call Us</p>
          <a className="text-xl text-blue-600" href="tel:+23481062344890">
            +234 810 6234 4890
          </a>
        </section>
        <section className="flex-grow flex flex-col justify-end h-max rounded-md md:w-max max-w-48 w-[98%] m-4 transition-all ease-in-out duration-300">
          <p className="text-gray-500 text-sm">Email Us</p>
          <a
            className="text-xl text-blue-600"
            href="mailto:cyber@silexsecure.com"
          >
            cyber@silexsecure.com
          </a>
        </section>
      </div>
      <div className="h-max w-[95%] mx-auto border-b border-gray-700 py-4 my-6 flex flex-wrap justify-between items-stretch">
        <section className="min-h-28 w-1/2 md:w-max px-4 min-w-[100px] *:block">
          <h3 className="text-xl text-gray-200 my-2">Quick Link</h3>
          <NavLink to="/" className="text-gray-400 text-sm my-2">
            Home
          </NavLink>
          <NavLink to="/about" className="text-gray-400 text-sm my-2">
            About Us
          </NavLink>
          <NavLink to="/features" className="text-gray-400 text-sm my-2">
            Features
          </NavLink>
          <NavLink to="/solution" className="text-gray-400 text-sm my-2">
            Solution
          </NavLink>
          <NavLink to="/pricing" className="text-gray-400 text-sm my-2">
            Pricing
          </NavLink>
        </section>
        <section className="min-h-28 w-1/2 md:w-max px-4 min-w-[100px]">
          <h3 className="text-xl  text-gray-200 my-2">Services</h3>
          <p className="text-gray-400 text-sm">Commerce</p>
          <p className="text-gray-400 text-sm my-2">Payments</p>
          <p className="text-gray-400 text-sm my-2">Point of sale</p>
          <p className="text-gray-400 text-sm my-2">Stock Management</p>
          <p className="text-gray-400 text-sm my-2">Customer Directory</p>
        </section>
        <section className="min-h-28 w-1/2 md:w-max px-4 min-w-[100px]">
          <h3 className="text-xl text-gray-200 my-2">Resources</h3>
          <p className="text-gray-400 text-sm my-2">Blog</p>
          <p className="text-gray-400 text-sm my-2">Support</p>
          <p className="text-gray-400 text-sm my-2">help Center</p>
          <p className="text-gray-400 text-sm my-2">Tutorials</p>
        </section>
        <section className="min-h-28 w-1/2 md:w-max px-4 min-w-[100px]">
          <h3 className="text-xl text-gray-200 my-2">Social</h3>
          <p className="text-gray-400 text-sm my-2">Facebook</p>
          <p className="text-gray-400 text-sm my-2">Twitter</p>
          <p className="text-gray-400 text-sm my-2">Instagram</p>
          <p className="text-gray-400 text-sm my-2">LinkedIn</p>
          <p className="text-gray-400 text-sm my-2">Home</p>
        </section>
        <section className="min-h-28 w-1/2 md:w-max px-4 min-w-[100px]">
          <h3 className="text-xl text-gray-200 my-2">Legal</h3>
          <p className="text-gray-400 text-sm my-2">Term</p>
          <p className="text-gray-400 text-sm my-2">Privacy</p>
          <p className="text-gray-400 text-sm my-2">Cookies</p>
        </section>
      </div>
      <p className="w-[90%] mx-auto my-2 text-gray-400 text-xs font-medium text-center">
        Copyright &copy; 2023 Axpos By Jegtheme. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
