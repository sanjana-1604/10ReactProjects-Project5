import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6"

function Searchbar() {
  return (
    <div className="relative flex items-center gap-2">
        <FaSearch className="absolute ml-2 text-sm text-white" />
        <input type="text" placeholder="search contact" className=" border-solid border-[1px] border-white bg-transparent rounded-md h-[40px] pl-8 font-thin text-white w-[350px] "></input>
        <button className="bg-white rounded-[50%] p-3 cursor-pointer"><FaPlus /></button>

    </div>
  
  )
}

export default Searchbar