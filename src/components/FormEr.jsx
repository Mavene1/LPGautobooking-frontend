// import React, { useState } from "react";
// import PropTypes from "prop-types";

// async function getOrderOptions(token) {
//   return fetch("http://localhost:8085/orders/options", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       authorization: token,
//     },
//   }).then((data) => data.json());
// }

// async function createOrderUser(token, info) {
//   return fetch("http://localhost:8085/orders/create", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       authorization: token,
//     },
//     body: JSON.stringify(info),
//   }).then((data) => data.json());
// }

// async function FormEr({ visible, onClose, token }) {
//   const options = await getOrderOptions(token);
//   //const [gas_id, setGas] = useState();
//   //   const [brand_id, setBrand] = useState();
//   //   const [capacity_id, setCapacity] = useState();
//   //   const [vendor_id, setVendor] = useState();
//   //   const [pay_method, setPayMethod] = useState();

//   //   const handleSubmit = async (e) => {
//   //     e.preventDefault();
//   //     const data = await createOrderUser({
//   //       brand_id,
//   //       capacity_id,
//   //       pay_method,
//   //       vendor_id,
//   //     });
//   //   };

//   if (!visible) return null;

//   const handleOnClose = (e) => {
//     if (e.target.id === "container") onClose();
//   };

//   return (
//     <div
//       id="container"
//       onClick={handleOnClose}
//       className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center"
//     >
//       <div className="bg-white p-2 rounded w-150 md:w-[600px]">
//         <h1 className="font-semibold text-center text-xl mb-4  text-gray-700">
//           Book with Us
//         </h1>
//         {/* <p className="text-center text-gray-700 mb-5">Sign in</p> */}

//         <form /*onSubmit={handleSubmit}*/>
//           <div className="p-2 justify-start grid md:grid-cols-2 gap-x-6 mx-5 ">
//             <div className="flex items-center ">
//               <select
//                 className="form-control"
//                 value={options.brands[0].name}
//                 /*onChange={(e) => setBrand(e.target.value)}*/
//               >
//                 <option value="">Choose a brand</option>

//                 {options.brands.map((brand) => (
//                   <option value={brand.name} key={brand.id}>
//                     {brand.name}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             {/* <div className="flex items-center justify-start">
//               <label
//                 for="number"
//                 class="block text-xl font-medium text-gray-700"
//               >
//                 Capacity:{" "}
//               </label>
//               <div class="relative mt-2 rounded-md">
//                 <input
//                   type="text"
//                   name="capacity"
//                   id="number"
//                   className="mb-4 p-1 block w-full rounded-md border-2  sm:text-sm pr-[26px]"
//                   placeholder="********"
//                   onChange={(e) => setCapacity(e.target.value)}
//                 />
//               </div>
//             </div> */}
//             {/* <div className="flex items-center justify-start">
//               <label
//                 for="number"
//                 class="block text-xl font-medium text-gray-700"
//               >
//                 Vendor:{" "}
//               </label>
//               <div class="relative mt-2 rounded-md">
//                 <input
//                   type="text"
//                   name="vendor"
//                   id="name"
//                   className="mb-4 p-1 block w-full rounded-md border-2  sm:text-sm pr-[38px]"
//                   placeholder="********"
//                   onChange={(e) => setVendor(e.target.value)}
//                 />
//               </div>
//             </div> */}
//             {/* <div className="flex items-center justify-start">
//               <label
//                 for="number"
//                 class="block text-xl font-medium text-gray-700"
//               >
//                 PayMethod:{" "}
//               </label>
//               <div class="relative mt-2 rounded-md">
//                 <input
//                   type="text"
//                   name="paymethod"
//                   id="name"
//                   className="mb-4 p-1 block w-full rounded-md border-2  sm:text-sm pr-[2px]"
//                   placeholder="**"
//                   onChange={(e) => setPayMethod(e.target.value)}
//                 />
//               </div>
//             </div> */}
//           </div>
//           <div className="text-center flex justify-center">
//             <button
//               type="submit"
//               className="ml-5 mr-20 md:mx-auto w-[100px] mb-6 inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out mx-auto"
//             >
//               Submit
//             </button>
//             <button
//               onClick={onClose}
//               className="w-[100px] mb-6 inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out mx-auto"
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// FormEr.propTypes = {
//   token: PropTypes.string.isRequired,
// };

// export default FormEr;*/
