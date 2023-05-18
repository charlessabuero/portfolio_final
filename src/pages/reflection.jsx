import React from "react";
import { Typography } from "@material-tailwind/react";
import Navigation from "../components/navbar";
import Footer from "../components/footer";

export default function home() {
  return (
    <>
      
      <Navigation />
      <div className="bg-gradient-to-r from-cyan-100 to-blue-100 pb-20">
        <div className="p-20">
          <div>
            <Typography color="black" className="text-5xl font-bold">
              OJT REFLECTION
            </Typography>
          </div>
          <div className="py-5">
            <Typography color="black" className="font-normal">
              When I accepted the OJT job offer from Fligno, I was officially designated as a Software Engineer Intern in the R&D Department.
              We were given a place to work at the 4th floor for the first few weeks, before moving to the 3rd floor. At the 4th floor we were able 
              to communicate and get in touch with the fellow co-workers there. They were friendly and often times lightened our moods, especially in Google chat.
              <br/><br/>
              With the department, I was able to learn a lot of the process on how software development works in the real world, like Fligno. They gave us tips, learning insights 
              and tools to give us the materials needed to perform our assigned tasks. During the duration of my practicum, I was able to test several applications assigned to me, helped formulated 
              the e-commerce app idea, which was Curatoro. I was also able to design and contribute to the UI/UX design of Curatoro, and developed the admin dashboard of Curatoro.
              <br/><br/>
              From the OJT tasks I performed, I was able to learn Robot Framework, ReactJS, VueJs, Material UI, Tailwind and its component libraries (Daisy UI), within 4 months. While developing my portfolio as part 
              of my off-boarding requirements at Fligno, I learned another component library of Tailwind, Material Tailwind, which is inspired from Material UI. While I still have a lot more to learn about front-end development, 
              considering how wide the IT field is, learning these helped me gained my confidence and my ability to develop applications. 
              <br/><br/>
              Another nice offer from Fligno is its Learn at Fligno sessions. It's free, and you only need to register your name for the event. It happens occassionally at a Saturday of the Month from 8 to 12pm. I was able to join 
              two of their Learn at Fligno sessions, and there I learned about React + Laravel CRUD API, and basics of AWS. The tutors were well-knowledgeable and were eager to teach us the basics of these topics.
              <br/><br/>
              My recommendation and advise to the incoming 4th year students who will soon be taking their practicum is to finish first their capstone project responsibly. Comply all the necessary documents because without the capstone, you cannot 
              take the practicum. Fligno is often a partner at USTP in practicum, in order to reach them easily, join the Career Center's JobReady course, or other related programs or events where Fligno is a partner or a participant. There, if you have
              the chance to be in the interview for them, and you impress, then there's a big chance you can be emailed for an offer at their OJT program. This should also help you in accomplishing your practicum hours early. Since I started on February 13,
              we were able to end at the 3rd week of May, complying the 486 hrs needed for our course. Joining IT companies like Fligno is recommended, because it can give you the real-world experience on how it feels to work in an IT company, and its culture and 
              environment.
              <br></br>
              For the company, I wish more success and expansion of Fligno. I wish the further continuation of their OJT program in the years to come. My only recommendation is more collaborative work between OJT students and the professionals at the company.
              That's all, and thank you for the OJT experience here in Fligno!
            </Typography>
          </div>
        </div>
      </div>    
    <Footer />            
    </>
  );
}