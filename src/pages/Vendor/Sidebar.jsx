import { useState } from "react";
import Dashboard from "./Dashboard";
import Completed from "./Completed";
import Pending from "./Pending";
import {Link} from 'react-router-dom'


export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [display, setDisplay] = useState("dashboard");
  //console.log(display);
  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-40" : "w-60 "
        } flex flex-col h-screen p-3 bg-green-600 shadow duration-300`}
      >
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xl pl-4 font-bold text-white">LPG</h2>
            <button onClick={() => setOpen(!open)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
          </div>

          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <li
                className="rounded-sm"
                onClick={() => setDisplay("dashboard")}
              >
                <a
                  href="#1"
                  className="flex items-center p-2 space-x-3 rounded-sm border-t"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  <span className="text-gray-100 hover:text-gray-300 cursor-pointer focus:bg-gray-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-700 active:shadow-lg transition duration-150 ease-in-out">
                    Dashboard
                  </span>
                </a>
              </li>

              <li className="rounded-sm" onClick={() => setDisplay("pending")}>
                <a
                  href="#1"
                  className="flex items-center p-2 space-x-3 rounded-sm border-t border-b"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  <span className="text-gray-100 hover:text-gray-300 cursor-pointer focus:bg-gray-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-700 active:shadow-lg transition duration-150 ease-in-out">
                    Pending Orders
                  </span>
                </a>
              </li>
              
              <li
                className="rounded-sm"
                onClick={() => setDisplay("completed")}
              >
                <a
                  href="#1"
                  className="flex items-center p-2 space-x-3 rounded-sm border-b"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  <span className="text-gray-100 hover:text-gray-300 cursor-pointer focus:bg-gray-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-700 active:shadow-lg transition duration-150 ease-in-out">
                    Completed Orders
                  </span>
                </a>
              </li>
              <li className= "rounded-sm" >
                <a
                  href="#1"
                  className="flex items-center p-2 space-x-3 rounded-sm mt-[360px] border-t" 
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-100 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    />
                  </svg>
                  <span className="text-gray-100 hover:text-gray-300 cursor-pointer focus:bg-gray-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-700 active:shadow-lg transition duration-150 ease-in-out">
                  <Link to='/'>Logout</Link>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {display === "dashboard" && <Dashboard />}
      {display === "completed" && <Completed />}
      {display === "pending" && <Pending />}
    </div>
  );
}
