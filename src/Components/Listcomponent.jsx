import React from 'react'
import { HiOutlineUserCircle } from "react-icons/hi2";
import { RiEditCircleLine } from "react-icons/ri";
import { MdDelete } from "react-icons/md";

function Listcomponent({contact}) {
  return (
    <div className="mt-3">
        <ul>
            <li className="flex justify-around gap-1 items-center bg-[#FFEAAE] h-[54] rounded-md">
                <HiOutlineUserCircle className="text-4xl font-light text-[#F6820C]" />
                <div>
                    <h1 className="font-medium">{contact.name}</h1>
                    <p  className="font-normal">{contact.email} </p>
                </div>
                <div className="flex">
                <RiEditCircleLine className="text-3xl"/>
                <MdDelete className="text-3xl text-purple"/>
                </div>
                
            </li>
        </ul>
    </div>
  )
}

export default Listcomponent