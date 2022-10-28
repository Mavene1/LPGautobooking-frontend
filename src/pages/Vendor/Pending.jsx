import React from "react";


let data = [
  {
    name: "Mavene",
    phone: "0723242671",
    brand: "M-gas",
    location: "Nai",
    capacity: "13kg",
  },
  {
    name: "Mavene",
    phone: "0723242671",
    brand: "Midgas",
    location: "Nai",
    capacity: "6kg",
  },
  {
    name: "Collins",
    phone: "0712242671",
    brand: "Pro",
    location: "Kisumu",
    capacity: "13kg",
  },
  {
    name: "Risper",
    phone: "0723242671",
    brand: "Total",
    location: "Nakuru",
    capacity: "6kg",
  },
];



const Pending = () => {
  
  // const [show, setShow] = useState(false);
  const element = data.map((data1) => {
    return (
      <div className="hidden md:block">
      <div className="grid md:grid-cols-7 gap-6 overflow-auto rounded-lg shadow p-2 text-sm tracking-wide text-left text-gray-700 whitespace-nowrap bg-gray-200 my-1">
        <p className="p-1 font-bold text-green-500 hover:underline">{data1.name}</p>
        <p className="p-1">{data1.phone}</p>
        <p className="p-1">{data1.brand}</p>
        <p className="p-1">{data1.location}</p>
        <p className="p-1">{data1.capacity}</p>
          <div>
          {/* {show && <p>Accepted!</p>} */}
          <button  
            type="button"
            
            className="ml-14 md:w-[100px] mb-1 inline-block px-3 md:px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out mx-auto md:mx-0 "
          > ACCEPT
            {/* {show===true ? <p>Accepted!</p>:'ACCEPT'} */}
          </button></div>
          <button
            type="button"
            className="ml-16 md:w-[100px] mb-1 inline-block px-3 md:px-6 py-2.5 bg-gray-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-600 hover:shadow-lg focus:bg-gray-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-700 active:shadow-lg transition duration-150 ease-in-out mx-auto md:mx-0 "
          >
            DECLINE
          </button>
      </div></div>
    );
  });
  const element2 = data.map((data2) => {
    return (
      <div class=" m-4 md:hidden grid grid-cols-1 gap-4">
      <div class="bg-gray-200 space-y-3 p-2 rounded-lg shadow">
      <div class="items-center text-sm grid grid-cols-5 py-2 m-2">
        <div><p className="p-1 text-green-500 font-bold hover:underline">{data2.name}</p></div>
        <div><p className="p-1 ml-2">{data2.phone}</p></div>
        <div><p className="p-1 pl-2 hidden sm:hidden">{data2.brand}</p></div>
        <div><p className="p-1">{data2.location}</p></div>
        <div><p className="p-1">{data2.capacity}</p></div>
        <div className="flex mt-2 ">
          <button
            type="button"
            className="ml-1 md:w-[100px] mb-3 inline-block px-3 md:px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out mx-auto md:mx-0 "
          >
            ACCEPT
          </button>
          <button
            type="button"
            className="ml-4 md:w-[100px] mb-3 inline-block px-3 md:px-6 py-2.5 bg-gray-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-600 hover:shadow-lg focus:bg-gray-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-700 active:shadow-lg transition duration-150 ease-in-out mx-auto md:mx-0 "
          >
            DECLINE
          </button></div>
      </div></div></div>
    );
});
      return (
        <div className="w-full p-5 h-screen bg-gray-100">
        <h1 class="text-xl mb-2 ml-4 font-bold md:mx-auto">Pending Orders</h1>
          <div className="bg-gray-300 border-b-2 border-gray-400 hidden md:block rounded-lg shadow">
            <ul className="grid md:grid-cols-7 gap-8 pl-2 w-full p-3 text-sm font-semibold tracking-wide text-left">
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

export default Pending;
