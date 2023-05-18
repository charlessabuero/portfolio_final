import React from "react";
import {
  Typography,
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
} from "@material-tailwind/react";
import { CodeBracketIcon, QueueListIcon } from "@heroicons/react/24/solid";
import MyPic from "../assets/charles.png";
import { CgWebsite } from "react-icons/Cg";
import { GrMultimedia } from "react-icons/Gr";
import { GoProject } from "react-icons/Go";
import { BiBookContent } from "react-icons/Bi";
import { FaOldRepublic } from "react-icons/Fa";
import Navigation from "../components/navbar";
import Footer from "../components/footer";

export default function home() {
  return (
    <>
      
      <Navigation />
      <div className="bg-gradient-to-r from-cyan-100 to-blue-100 pb-20">
        <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2 py-8">
            <div className="w-full px-4= py-10 bg-white rounded-lg shadow bg-gradient-to-r from-cyan-100 to-blue-100">
              <div className="mt-1 pb-8 pt-5 text-xl font-medium px-24 text-gray-900">
                <h1 className="text-9xl text-black font-bold">
                Charles
                </h1>
                <h1 className="text-black font-bold text-9xl mb-5">
                    Sabuero.
                </h1>
                <Typography color="gray" className="text-4xl">
                        Whether you want design, code, or spearhead a team, I get the job done.
                </Typography>
                <Typography color="gray" className="font-normal mt-3">
                Experienced leader who handles IT projects related to information system, database and system monitoring.
                Possess skills related to project management, software engineering, UI/UX design, tech lead, and front-end development.
                Future graduate of B.S. in Information Technology.
                </Typography>
                <Typography color="gray" className="font-normal mt-3">
                  <br></br>
                  Based in Cagayan de Oro City, Philippines.
                </Typography>
              </div>
            </div>
            <div className="w-full pt-10 bg-white rounded-lg flex items-center justify-center bg-gradient-to-r from-cyan-100 to-blue-100">
                <div>
                <img src={MyPic} width={600}/>
                </div>
            </div>
          </div>
          <div className="p-6 text-center">
                <Typography className="text-gray-900 text-5xl font-semibold">
                  Interests
                </Typography>
          </div>
            <div className="relative px-6 text-gray-500 md:px-12">
                <div className="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-3">
                  <div className="group space-y-6 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none">
                    <div style={{display: "flex", justifyContent: "center"}}>
                      <CgWebsite color="black" fontSize="30px"/>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Web Design and Development</h3>
                    <p>
                        Knowledgeable in React and Vue.js front-end development. Experienced in utilizing Tailwind and Bootstrap frameworks.
                        Created web user interface designs in Figma, and tested web applications using Robot Framework.
                    </p>
                  </div>
                  <div className="group space-y-6 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none">
                  <div style={{display: "flex", justifyContent: "center"}}>
                      <GrMultimedia color="black" fontSize="30px"/>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Multimedia and Content Creation</h3>
                    <p>
                      Possesses skills in Photography, Videography, and 2D Graphic Design. Utilized Adobe applications and Canva for content-related projects.
                    </p>
                  </div>
                  <div className="group space-y-6 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none">
                    <div style={{display: "flex", justifyContent: "center"}}>
                      <GoProject color="black" fontSize="30px"/>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Project Management</h3>
                    <p>
                        Able to lead and spearhead a project development team in achieving its goals. Knowledgeable in Jira, Gitlab and Trello software management tools.
                    </p>
                  </div>
                </div>
                <div className="text-center pt-20">
                  <Typography color="black" className="font-bold text-4xl">
                    Experience
                  </Typography>
                </div>
                <div className="py-14 px-14 ml-14 flex items-center justify-center">
                  <Timeline>
                    <TimelineItem>
                      <TimelineConnector />
                      <TimelineHeader className="h-3">
                      <TimelineIcon className="p-2">
                        <CodeBracketIcon className="h-4 w-4" />
                      </TimelineIcon>
                        <Typography variant="h6" color="blue-gray" className="leading-none">
                         February to May 2023
                        </Typography>
                      </TimelineHeader>
                      <TimelineBody className="pb-8">
                        <h5 className="text-black font-medium">
                        Fligno Software Philippines Inc.
                        </h5>
                        <Typography
                          variant="small"
                          color="gary"
                          className="font-normal text-gray-600"
                        >
                          On the Job Training in Software Development work as part of compliance in completing the BSIT degree.
                        </Typography>
                      </TimelineBody>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineConnector />
                      <TimelineHeader className="h-3">
                      <TimelineIcon className="p-2">
                        <QueueListIcon className="h-4 w-4" />
                      </TimelineIcon>
                        <Typography variant="h6" color="blue-gray" className="leading-none">
                          August 2022 to June 2023
                        </Typography>
                      </TimelineHeader>
                      <TimelineBody className="pb-8">
                        <h5 className="text-black font-medium">
                        USTP-SITE Programmer's Varsity
                        </h5>
                        <Typography
                          variant="small"
                          color="gary"
                          className="font-normal text-gray-600"
                        >
                          Leads the development team in project development for MAGKAHIOSA, a Student Activity Request Form (SARF) platform
                          for USTP Student Organizations.
                        </Typography>
                      </TimelineBody>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineConnector />
                      <TimelineHeader className="h-3">
                      <TimelineIcon className="p-2">
                        <FaOldRepublic className="h-4 w-4" />
                      </TimelineIcon>
                        <Typography variant="h6" color="blue-gray" className="leading-none">
                         April to June 2023  |  May - July 2022
                        </Typography>
                      </TimelineHeader>
                      <TimelineBody className="pb-8">
                        <h5 className="text-black font-medium">
                        USTP-CDO Electoral Commission
                        </h5>
                        <Typography
                          variant="small"
                          color="gary"
                          className="font-normal text-gray-600"
                        >
                          Provides communication and publication materials of the USTP-CDO Electoral Commission to the public for the USTP-CDO Student Elections.
                        </Typography>
                      </TimelineBody>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineConnector />
                      <TimelineHeader className="h-3">
                      <TimelineIcon className="p-2">
                        <BiBookContent className="h-4 w-4" />
                      </TimelineIcon>
                        <Typography variant="h6" color="blue-gray" className="leading-none">
                         August 2021 to July 2023
                        </Typography>
                      </TimelineHeader>
                      <TimelineBody>
                      <h5 className="text-black font-medium">
                      CDO City Scholarships Office's Volunteer Iskolar Leaders Program (VIP)
                        </h5>
                        <Typography
                          variant="small"
                          color="gary"
                          className="font-normal text-gray-600"
                        >
                          Provides digital content and information dissemination to the city scholarship program.
                        </Typography>
                      </TimelineBody>
                    </TimelineItem>
                  </Timeline>
                </div>
            </div>
      </div>    
    <Footer />            
    </>
  );
}