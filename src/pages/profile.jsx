import React from "react";
import { Typography } from "@material-tailwind/react";
import Charlespic from "../assets/charles2.png";
import Navigation from "../components/navbar";
import Footer from "../components/footer"
import ASO from "../assets/ASOLogo.png";
import OSA from "../assets/osa_transparent.png";
import SITE from "../assets/site.png";
import ProgVar from "../assets/progvar.png";
import UCS from "../assets/UCS.png";
import USS from "../assets/uss.png";
import CSO from "../assets/cso.png";
import VIP from "../assets/vip.png";
import USG from "../assets/usg.png";
import Elecom from "../assets/elecom.png";
import GDSC from "../assets/gdsc_ustp.png";
import Fligno from "../assets/fligno.png";
import AndamHigala from "../assets/AH.png";
import UDA from "../assets/UDA.jpg";
 
export default function Example() {
 
  return (
    <>
      <Navigation />
      <div className="bg-gradient-to-r from-cyan-100 to-blue-100">
        <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3 py-8">
            <div className=" flex px-2 py-5  bg-white rounded-lg shadow bg-gradient-to-r from-cyan-100 to-blue-100">
              <div className="pb-8 pt-5 flex items-center justify-center text-xl font-medium px-24 text-gray-900">
              <img src={Charlespic} width={600} className="rounded-lg"/>
              </div>
            </div>
            <div className="px-24 py-16  col-span-2 bg-white rounded-lg flex text-left bg-gradient-to-r from-cyan-100 to-blue-100">
                <div>
                  <Typography color="black" className="text-5xl font-semibold">
                    CHARLES C. SABUERO
                  </Typography>
                  <Typography color="gray" className="text-4xl font-medium italic">
                    LEADER WITH EXPERIENCE
                  </Typography>
                  <Typography color="black" className="text-2xl font-medium">
                    <br></br>
                    Bachelor of Science in Information Technology <br/>
                  </Typography>
                  <Typography color="gray" className="font-normal">
                    University of Science and Technology of Southern Philippines - CDO Campus (2019-2023)
                  </Typography>
                  <Typography color="black" className="text-lg font-normal">
                    <br/><br/>Charles is a talented individual, excelling in the field of information technology, multimedia,
                    and content creation. He has grown to have a fond in computer-related fields at an early young age, self-learning in
                    many different technologicial areas. He started coding as early as Grade 8, and has grown interest in developing websites,
                    simple graphic user interface, and other programming applications.
                    <br/><br/>Aside from coding, Charles loves doing content creation, making photography and videography as a hobby since high-school. Since then, he has
                    refinied in skills through online tutorials and self-learning in Adobe applications. Several years later, Charles would be joining organizations that would build up his experience in these fields.
                    <br/><br/>By the time he started studying in college, Charles earned a scholarship primarily funded by the City Scholarship Program of the Local Governemnt in
                    Cagayan de Oro City. He continued to venture out, joining academic and extracurricular organizations, which would mark as his start of being a student leader.
                    He would soon expand in actively engaging organizations outside the university.
                    <br/><br/> During the COVID-19 pandemic, Charles has continued to learn more fields in Multimedia. As many activities became virtual, he has learned areas in event production
                    and has been able to help conduct online events as part of the production team. In addition, Charles also started developing further his design skills, eventually applying those skills in UI/UX designs of web applications.
                    <br/><br/> Recently, Charles has been entrusted to lead and manage in several organizational departments, IT projects at school, and later on, at his internship at Fligno. Whether being a project manager, a tech lead, an UI/UX designer, or a developer,
                    Charles is capable of providing his skills to partners and stakeholders. In addition, he is capable of providing digital content, whether in photography, videography, or even in graphic design. Charles has learned
                    a lot of talent in the field of Multimedia and Computer Technologies.
                  </Typography>
                </div>
            </div>
          </div>
          
        <div className="relative flex flex-col items-center overflow-hidden py-20 md:py-40 bg-gray-100 dark:bg-gray-800">
        <div className="container relative z-[1] m-auto px-6 md:px-12">
          <div className="m-auto text-center md:w-8/12 lg:w-6/12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
              Institutions, Offices, and Organizations Served
            </h2>
          </div>
          <div className="m-auto mt-16 md:w-11/12 lg:w-8/12 xl:w-7/12">
            <div className="flex flex-wrap justify-center gap-6">
              <div
                className="group  bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10"
              >
                <img
                  src={OSA} width={105}
                  alt="OSA Logo"
                />
              </div>
              <div
                className="group bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10"
              >
                <img
                  src={ASO} width={110}
                  alt="ASO Logo"
                />
              </div>
              <div
                className="group bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10"
              >
                <img
                  src={CSO} width={110}
                  alt="CSO Logo"
                />
              </div>
              <div
                className="group bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10"
              >
                <img
                  src={VIP} width={160}
                  alt="VIP Logo"
                />
              </div>
              <div
                className="group bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10"
              >
                <img
                  src={GDSC} width={100}
                  alt="GDSC Logo"
                />
              </div>
              <div
                className="group bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10"
              >
                <img
                  src={ProgVar} width={102}
                  alt="ProgVar Logo"
                />
              </div>
              <div
                className="group bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10"
              >
                <img
                  src={SITE} width={150}
                  alt="SITE Logo"
                />
              </div>
              <div
                className="group bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10"
              >
                <img
                  src={Fligno} width={160}
                  alt="Fligno Logo"
                />
              </div>
              <div
                className="group bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10"
              >
                <img
                  src={USS} width={70}
                  alt="USS Logo"
                />
              </div>
              <div
                className="group bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10"
              >
                <img
                  src={UCS} width={70}
                  alt="UCS Logo"
                />
              </div>
              <div
                className="group bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10"
              >
                <img
                  src={USG} width={70}
                  alt="USG Logo"
                />
              </div>
              <div
                className="group bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10"
              >
                <img
                  src={Elecom} width={100}
                  alt="Elecom Logo"
                />
              </div>
              <div
                className="group bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10"
              >
                <img
                  src={UDA} width={100}
                  alt="UDA Logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>                    
    </div>
    <Footer />                 
    </>
  );
}