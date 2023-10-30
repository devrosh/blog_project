import React from "react";

import { FaChevronRight } from "react-icons/fa";

export default function Post() {
  return (
    <div className="w-96 rounded-sm overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ">
      <img
        className="width-full object-cover object-center h-54"
        src="https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="postimage"
      />

      <div className="flex items-center gap-5 py-2 px-4 w-full h-auto">
        <p className="font-roboto font-light text-xs text-gray-600">
          Sep 21, 2023 |
        </p>
        <h5 className="font-roboto font-light text-xs text-rose-600">
          Roshan Singh Dwariya - CEO of Devrosh
        </h5>
      </div>
      <div className=" flex items-center mx-3 mt-3 mb-6  px-1">
        <h1 className="font-roboto text-sm flex-initial text-gray-700 hover:underline cursor-pointer  ">
          Future of AI in the current technology world for betterment of life
        </h1>
        <FaChevronRight size={15} color="#777" />
      </div>
    </div>
  );
}
