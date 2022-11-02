import React, { useState } from "react";

async function getOrders(token) {
  return fetch("http://localhost:8085/orders/received", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: token,
      status: "Approved",
    },
  }).then((data) => data.json());
}

const Completed = ({ token }) => {
  const [orders, setOrders] = useState([]);
  getOrders(token).then(setOrders);
  setInterval(function () {
    getOrders(token).then(setOrders);
  }, 5000);

  //const [show, setShow] = useState(false);
  const element = orders.map((data1) => {
    return (
      <div className="hidden md:block">
        <div className="grid md:grid-cols-7 gap-6 overflow-auto rounded-lg shadow p-2 text-sm tracking-wide text-left text-gray-700 whitespace-nowrap bg-gray-200 my-1">
          <p className="p-1 font-bold text-green-500 hover:underline">
            {data1.name}
          </p>
          <p className="p-1">{data1.isRefill ? "Refill" : "New"}</p>
          <p className="p-1">{data1.brand}</p>
          <p className="p-1">{data1.paymentMethod}</p>
          <p className="p-1">{data1.capacity}</p>
        </div>
      </div>
    );
  });
  const element2 = orders.map((data2) => {
    return (
      <div class=" m-4 md:hidden grid grid-cols-1 gap-4">
        <div class="bg-gray-200 space-y-3 p-2 rounded-lg shadow">
          <div class="items-center text-sm grid grid-cols-5 py-2 m-2 p-2">
            <div>
              <p className="p-1 text-green-500 font-bold hover:underline">
                {data2.name}
              </p>
            </div>
            <div>
              <p className="p-1 ml-2">{data2.isRefill ? "Refill" : "New"}</p>
            </div>
            <div>
              <p className="p-1 pl-2 hidden">{data2.brand}</p>
            </div>
            <div>
              <p className="p-1 ">{data2.paymentMethod}</p>
            </div>
            <div>
              <p className="pl-2">{data2.capacity}</p>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="w-full p-5 h-screen bg-gray-100">
      <h1 class="text-xl mb-2 ml-4 font-bold md:mx-auto">Pending Orders</h1>
      <div className="bg-gray-300 border-b-2 border-gray-400 hidden md:block rounded-lg shadow">
        <ul className="grid md:grid-cols-7 gap-8 pl-2 w-full p-3 text-sm font-semibold tracking-wide text-left">
          <li className="p-1">Name</li>
          <li className="p-1">Refill</li>
          <li className="p-1">Brand</li>
          <li className="p-1">PayMethod</li>
          <li className="p-1">Capacity</li>
        </ul>
      </div>
      {element}
      {element2}
    </div>
  );
};

export default Completed;
