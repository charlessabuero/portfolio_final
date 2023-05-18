import React from "react";
import { Typography } from "@material-tailwind/react";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

export default function footer() {

    return (
        <>
      <footer className="w-full bg-white p-8">
        <div className="flex flex-wrap text-black justify-center items-center gap-2 pb-4">
          <div>
            <a href="https://facebook.com/charles.sabuero" ><FaFacebook fontSize="20px" /></a>  
          </div>
          <div>
            <a href="https://instagram.com/sabuerocharles"><FaInstagramSquare fontSize="20px" /></a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/charles-sabuero/"><FaLinkedin fontSize="20px"/></a>
          </div>
        </div>
        <div className="text-center">
          <Typography color="black" className="text-sm">
            Email: <span className="underline font-medium">charlessabuero@gmail.com</span>
          </Typography>
        </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2023 Charles C. Sabuero
      </Typography>
    </footer> 
        </>
    )
}