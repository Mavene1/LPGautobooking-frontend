import React, { useState } from "react";

async function getOrderOptions(token) {
  return fetch("http://localhost:8085/orders/options", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: token,
    },
  }).then((data) => data.json());
}

async function createOrderUser(token, info) {
  return fetch("http://localhost:8085/orders/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: token,
    },
    body: JSON.stringify(info),
  })
}

const Form = ({ visible, onClose, token }) => {
  const [options, setOptions] = useState();
  getOrderOptions(token).then(setOptions);

  const [gas_id, setGas] = useState();
  const [brand_id, setBrand] = useState();
  const [capacity_id, setCapacity] = useState();
  const [vendor_id, setVendor] = useState();
  const [pay_method, setPayMethod] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    createOrderUser(token, {
      gas_id,
      brand_id,
      capacity_id,
      pay_method,
      vendor_id,
    });
  };

  if (!visible) return null;

  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="bg-white p-2 rounded w-150 md:w-[600px]">
        <h1 className="font-semibold text-center text-xl mb-4  text-gray-700">
          Book with Us
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="p-2 justify-start grid md:grid-cols-2 gap-x-6 mx-5 ">
            <div className="flex items-center m-2">
              <select
                className="form-control"
                value="Choose Brand"
                onChange={(e) => setBrand(e.target.value)}
              >
                <option value="">Choose a brand</option>

                {options.brands.map((brand) => (
                  <option value={brand.id} key={brand.id}>
                    {brand.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center ">
              <select
                className="form-control"
                value="Choose Capacity"
                onChange={(e) => setCapacity(e.target.value)}
              >
                <option value="">Choose capacity</option>

                {options.capacities.map((capacity) => (
                  <option value={capacity.id} key={capacity.id}>
                    {capacity.amount}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center ">
              <select
                className="form-control"
                value="Choose Vendor"
                onChange={(e) => setVendor(e.target.value)}
              >
                <option value="">Choose Vendor</option>

                {options.vendors.map((vendor) => (
                  <option value={vendor.id} key={vendor.id}>
                    {vendor.username}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center ">
              <select
                className="form-control"
                value="Choose Payment Method"
                onChange={(e) => setPayMethod(e.target.value)}
              >
                <option value="">Choose Payment Method</option>

                {options.pay_methods.map((payMethod) => (
                  <option value={payMethod} key={payMethod}>
                    {payMethod}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center m-2">
              <select
                className="form-control"
                value="Choose Payment Method"
                onChange={(e) => setGas(e.target.value)}
              >
                <option value="">Choose Gas_Id</option>

                {options.gas_ids.map((gas_id) => (
                  <option value={gas_id.id} key={gas_id.id}>
                    {gas_id.id}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="text-center flex justify-center">
            <button
              type="submit"
              onClick={onClose}
              className="ml-5 mr-20 md:mx-auto w-[100px] mb-6 inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out mx-auto"
            >
              Submit
            </button>
            <button
              onClick={onClose}
              className="w-[100px] mb-6 inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out mx-auto"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
