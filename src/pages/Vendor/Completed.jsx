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

const Completed = () => {
  

  const element = data.map((data2) => {
    return (
      <div className="grid grid-cols-3 md:grid-cols-5 gap-8 pl-2 py-2 border-b w-full items-center justify-between">
        <p className="p-1">{data2.name}</p>
        <p className="p-1">{data2.phone}</p>
        <p className="p-1 hidden md:flex">{data2.brand}</p>
        <p className="p-1">{data2.location}</p>
        <p className="p-1 hidden md:flex">{data2.capacity}</p>
      </div>
    );
  });
    return (
        <div className="w-full">
          <div className="bg-gray-400">
          <ul className="grid grid-cols-3 md:grid-cols-5 gap-8 pl-2 pt-6 border-b w-full font-bold">
            <li className="p-1">
              Name
            </li>
            <li className="p-1">
              Phone
            </li>
            <li className="hidden md:flex p-1">
              Brand
            </li>
            <li className="p-1">
              Location
            </li >
            <li className="hidden md:flex p-1">
              Capacity
            </li>
          </ul>
          </div>
          {element}
        </div>
    );
};

export default Completed;
