import React from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import Avatar from "../assets/avatar.png"
import { useNavigate } from "react-router-dom";
 
export default function Nav() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `home`; 
    navigate(path);
  }
 

  return (
    <>
    <div className="mx-auto px-20 py-12">
        <div class="flex">
            <div className= "text-center flex min-h-full flex-1 flex-col items-center justify-center h-screen lg:px-8 align-middle">
            <img src={Avatar} alt="My_Avatar" width={125} />
                <Typography variant="h2" color="blue-gray" className="mt-3">
                Hello I'm Charles!
                </Typography>
                <Typography color="black" className="font-medium">
                Creative Director | UI/UX Designer | Front-end Developer
                </Typography>
                <Typography color="gray" className="font-normal mt-2">
                    Interested? See my portfolio below.
                </Typography>
                <div className="pt-1">
                    <Button variant="filled" className="bg-blue-gray-400" onClick={routeChange}>Click Me!</Button>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}