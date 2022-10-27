import React from "react";


let data = [
  {
    name: "Mavene",
    phone: "0723242671",
    brand: "2300",
    location: "Nai",
    capacity: "6",
  },
  {
    name: "Mavene",
    phone: "0723242671",
    brand: "2300",
    location: "Nai",
    capacity: "6",
  },
  {
    name: "Collins",
    phone: "0712242671",
    brand: "2300",
    location: "Kisumu",
    capacity: "13",
  },
  {
    name: "Risper",
    phone: "0723242671",
    brand: "2300",
    location: "Nakuru",
    capacity: "6",
  },
];

const Pending = () => {
  
  
  const element = data.map((data2) => {
    return (
      
      <div className="grid grid-cols-5 md:grid-cols-7 gap-8 pl-2 pt-2 border-b w-full items-center justify-between">
        <p className="p-1">{data2.name}</p>
        <p className="p-1">{data2.phone}</p>
        <p className="p-1 hidden md:flex">{data2.brand}</p>
        <p className="p-1 hidden md:flex">{data2.location}</p>
        <p className="p-1 hidden md:flex">{data2.capacity}</p>
          <button
            type="button"
            className="ml-14 md:w-[100px] mb-3 inline-block px-3 md:px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out mx-auto md:mx-0 "
          >
            ACCEPT
          </button>
          <button
            type="button"
            className="ml-16 md:w-[100px] mb-3 inline-block px-3 md:px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out mx-auto md:mx-0 "
          >
            DECLINE
          </button>
      </div>
    );
  });
      return (
      <div className="w-full">
        <div className="bg-gray-400">
        <ul className="grid grid-cols-5 md:grid-cols-7 gap-8 pl-2 pt-6 border-b w-full font-bold">
            <li className="p-1">
              Name
            </li>
            <li className="p-1">
              Phone
            </li>
            <li className="hidden md:flex p-1">
              Brand
            </li>
            <li className="p-1 hidden md:flex">
              Location
            </li >
            <li className="hidden md:flex p-1">
              Capacity
            </li>
          </ul>
          </div>
        {element}
      </div>);
};

export default Pending;
