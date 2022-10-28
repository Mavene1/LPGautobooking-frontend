import React from "react";


let data = [
  {
    name: "Mavene",
    phone: "0723242671",
    brand: "Progas",
    location: "Nai",
    capacity: "6kg",
  },
  {
    name: "Collins",
    phone: "0712242671",
    brand: "Kgas",
    location: "Kisumu",
    capacity: "13kg",
  },
  {
    name: "Risper",
    phone: "0723242671",
    brand: "Midgas",
    location: "Nakuru",
    capacity: "6kg",
  },
];

const Completed = () => {
  

  const element = data.map((data1) => {
    return (
      <div className="hidden md:block">
      <div className="grid md:grid-cols-5 gap-8 overflow-auto rounded-lg shadow p-2 text-sm tracking-wide text-left text-gray-700 whitespace-nowrap bg-gray-200 my-1">
        <p className="p-1 font-bold text-green-500 hover:underline">{data1.name}</p>
        <p className="p-1">{data1.phone}</p>
        <p className="p-1">{data1.brand}</p>
        <p className="p-1">{data1.location}</p>
        <p className="p-1">{data1.capacity}</p>
      </div></div>
    ); });
    const element2 = data.map((data2) => {
      return (
        <div class=" m-4 md:hidden grid grid-cols-1 gap-4">
        <div class="bg-gray-200 space-y-3 p-4 rounded-lg shadow">
        <div class="items-center text-sm grid grid-cols-5 py-5">
          <div><p className="p-1 text-green-500 font-bold hover:underline">{data2.name}</p></div>
          <div><p className="p-1">{data2.phone}</p></div>
          <div><p className="p-1 hidden sm:block">{data2.brand}</p></div>
          <div><p className="p-1">{data2.location}</p></div>
          <div><p className="p-1">{data2.capacity}</p></div>
        </div></div></div>
      );
  });
    return (
        <div className="w-full p-5 h-screen bg-gray-100">
          <h1 class="text-xl mb-2 ml-4 font-bold md:mx-auto">Completed Orders</h1>
          <div className="bg-gray-300 border-b-2 border-gray-400 hidden md:block rounded-lg shadow">
          <ul className="grid md:grid-cols-5 gap-8 pl-2 w-full p-3 text-sm font-semibold tracking-wide text-left">
            <li className="p-1">
              Name
            </li>
            <li className="p-1">
              Phone
            </li>
            <li className="p-1">
              Brand
            </li>
            <li className="p-1">
              Location
            </li >
            <li className="p-1">
              Capacity
            </li>
          </ul>
          </div>
          {element}
          {element2}
        </div>
    );
};

export default Completed;
