import React from "react";
import { Typography } from "@material-tailwind/react";
import Doc1 from "../assets/doc1.jpg";
import Doc2 from "../assets/doc2.jpg";
import Doc4 from "../assets/doc4.jpg";
import Doc5 from "../assets/doc5.jpg";
import Doc6 from "../assets/doc6.jpg";
import Doc7 from "../assets/doc7.jpg";
import Doc8 from "../assets/doc8.jpg";

import Navigation from "../components/navbar";
import Footer from "../components/footer";

export default function home() {
  return (
    <>
      
      <Navigation />
      <div className="bg-gradient-to-r from-cyan-100 to-blue-100 pb-20">
        <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
          <div class="-m-1 flex flex-wrap md:-m-2">
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={Doc1} />
              </div>
            </div>
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={Doc2} />
              </div>
            </div>
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={Doc7} />
              </div>
            </div>
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={Doc4} />
              </div>
            </div>
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={Doc5} />
              </div>
            </div>
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={Doc6} />
              </div>
            </div>
          </div>
        </div>
        <div className="p-20">
          <Typography color="black" className="font-regular">
            My OJT started on February 13, 2023 when I was offered by Ms. Kimberly Siguis to join the Fligno OJT program. I actually met her during the mock job interview conducted during the USTP Career Center's JobReady Program.
            I was delighted by the offer and accepted the position. Later on, I would realize that Aubrey Mae Mulawan and Eric Jeffrey Balindres, people whom I know at school, would
            join with me as well in the 3 month long journey. Along the way, I would also meet Don Pochulo Tidor who would later join us in the program.
            <br/><br/>
            By the time we started on our first day, we were warmly greeted by the people working in Fligno. We felt really welcomed and gave us the impression
            that the workplace in Fligno is healthy and friendly. We soon learned that Fligno is actually an Australian-based company and is already expanding
            its operations in the Philippines. We were first oriented by Mr. Ken A. Pequiro, HR coordinator for OJT students about the company. After that we met the Project Manager, Mr. Richard Badlisan, and there we were informed about 
            our assigned tasks. Later on, we would receive our Fligno OJT email, and were able to gain access to some materials.
            <br/><br/>
            In the next few weeks were started performing our first tasks. One of them was testing several applications and reporting them to the QA team. We learned on how to report bugs through Gitlab. We also learned how to conduct an automated test
            using Robot Framework. It was this time we learned how to collaborate as a team.
            <br/><br/>
            By next month, we were tasked to create an e-commerce app. Here we discussed what application we could create as part of this demonstration. Here we formulated "Curatoro", an application that uses sophisticated authentication and
            verification of artworks. Artists can also sell and promote their artworks in this platform. As for my role, I was tasked creating the admin dashboard.
          </Typography>
          <div class="flex py-10 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={Doc8} />
              </div>
          </div>
          <Typography color="black" className="font-regular">
            While building the application, I learned about the usage of React. We used Vue.js as our React Framework, and Daisy UI as our Tailwind component library. We were all new to the concept, and developing the application did take quite some 
            time. Nevertheless, while we never fully completed the application, we gained a lot of experience on how it feels like working in an IT environment. The OJT program helped us to be better prepared when we face in the real world of work. It 
            also helped us gained the confidence that, with the help of people in the workplace,  we can perform our tasks and duties as a developer and an IT professional.
          </Typography>
        </div>
      </div>      
    <Footer />            
    </>
  );
}