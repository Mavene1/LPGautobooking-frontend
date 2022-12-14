import React from "react";

const Dashboard = () => {
  return (
    <div className="flex ">
      
      <div className="container mx-auto mt-8">
      <h1 className="text-xl mb-6 ml-10 font-bold mx-auto">Dashboard</h1>
        <div className="ml-10 grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
          <div className="w-full px-14 py-10 md:px-28 md:py-25 bg-gray-200 rounded-lg shadow">
            <div className="text-md mb-4 text-center font-medium text-gray-500 truncate">
              Total orders
            </div>
            <div className="mt-1 text-3xl font-semibold text-gray-900 text-center">10</div>
          </div>
          <div className="w-full px-14 py-10 md:px-20 md:py-18 bg-gray-200 rounded-lg shadow">
            <div className="text-md mb-4 text-center font-medium text-gray-500 truncate">
              Completed Orders
            </div>
            <div className="mt-1 text-3xl font-semibold text-gray-900 text-center">4</div>
          </div>
          <div className="w-full px-14 py-10 md:px-20 md:py-18 bg-gray-200 rounded-lg shadow">
            <div className="text-md mb-4 text-center font-medium text-gray-500 truncate">
              Pending Orders
            </div>
            <div className="mt-1 text-3xl font-semibold text-gray-900 text-center">6</div>
          </div>
        </div>
      </div>
    </div> 
  );
};

export default Dashboard;
