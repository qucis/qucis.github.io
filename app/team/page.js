"use client";
import { preLoaderAnim } from "@/animations";
import Background from "@/components/Background";
import Spinner from "@/components/Spinner";
import Transition from "@/components/Transition";
import React, { useEffect } from "react";

const Team = () => {
  const members = [
    {
      id: 1,
      name: "Harsh Gupta",
      position: "PhD Student",
      img: "/members/phd/harsh.jpg",
      bio: "I love playing chess, badminton and guitar. I enjoy listening to people's stories since human intractions do not require a tensor decomposition. As an engineer open to learn anything. If I'm not lost in a matrix (the mathematical kind not the movie), you'll find me pretending to take a break while secretly running simulations in my head. Welcome to my corner of the internet, where reality is just a probability distribution.",
      github: "",
      instagram: "",
    },
    {
      id: 2,
      name: "Mainak Bhattacharyya",
      img: "/members/phd/mainak.jpg",
      position: "PhD Student",
      bio: "Mainak is curently pursuing his PhD in the QuCIS lab. He graduated with a MSc from the Department of Physics, NIT Jamshedpur in May 2023. He was a past recipient of Chanakya PG fellowship funded by I-HUB QTF, IISER Pune. Explore his socials to know more about Mainak.",
    },
    {
      id: 3,
      name: "Yash Prabhat",
      position: "M.S. Student",
      img: "/members/ms/yash.png",
      bio: "Yash is currently working on his M.S. thesis at QuCIS lab with joint supervision of Dr. Snigdha Thakur, Deprtment of Physics, IISER Bhopal. I am a physics major who is mesmerized by the quantum phenomenon. In my leisure, you will find me on the badminton court or playing video games. Say hi if you are around :).",
      github: "",
      instagram: "",
    },
    {
      id: 4,
      name: "Ronit Raj",
      position: "B.S. Student",
      img: "/members/ms/ronit.png",
      bio: "Ronit is currently working on his BS project at QuCIS lab.",
      github: "",
      instagram: "",
    },
    {
      id: 5,
      name: "Manish Mallapur",
      position: "B.S. Student",
      img: "/members/ms/manish.png",
      bio: "Manish is currently working on his BS project at QuCIS lab.",
      github: "",
      instagram: "",
    },
  ];

  const alumni = [
    {
      id: 1,
      name: "Sanidhya Gupta",
      position: "M.S. Student",
      img: "/members/alumni/sanidhya.png",
      bio: "Just a kid passionate about technology, particularly computers. Engineering is what I do. My experiments range from fine-tuning working codes to engaging in academic research and occasionally cooking something-something in the kitchen. Sanidhya was a past recipient of Chanakya UG and PG fellowships funded by I-HUB QTF, IISER Pune",
    },
    {
      id: 2,
      name: "Anuprita V. Kulkarni",
      position: "M.S. Student",
      img: "/members/alumni/anuprita.jpg",
      bio: "Anuprita was a past recipient of Chanakya PG fellowship funded by I-HUB QTF, IISER Pune. She worked under joint supervision of Dr. Auditya Sharma, Department of Physics IISER Bhopal.",
    },
    {
      id: 3,
      name: "Pranav Maheshwari",
      position: "M.S. Student",
      img: "/members/alumni/pranav.png",
      bio: "A Quantum Information Researcher who loves talking about life, politics and entrepreneurship. Excited to meet new faces and waiting for you to send a Hi!",
    },
    {
      id: 4,

      img: "/members/alumni/akash.png",
      name: "Akash Kumar Singh",
      bio: "Akash graduated with an MS from the Department of Physics, IISERT in May 2023. He is currently pursuing MTech degree from DIAT, Pune. In equal superposition of being at the library and badminton court.",
    },
    {
      id: 5,
      img: "/members/alumni/sid.png",
      name: "Siddharth Sethi",
      bio: "Siddharth graduated with an MS from the Department of EECS in May 2023. Hobbies are Photography, Videography and video-editing, Cooking, Playing Badminton.",
    },
    {
      id: 6,
      img: "/members/alumni/rohit.png",
      name: "Rohit K. Teja",
      bio: "Rohit graduated with an MS from the Department of EECS in May 2023. “Books, humour, music and coffee. Occasional badminton and basketball player.”",
    },
    {
      id: 7,
      img: "/members/alumni/madhav.png",
      name: "Madhav Sharma",
      bio: "Madhav graduated with an MS from the Department of Physics in May 2023. He is currently with Capgemini Quantum Lab. In my free time other than reading about emerging technology and there application I like to watch movies, play volleyball and spend quality time with my friends.",
    },
    {
      id: 8,
      img: "/members/alumni/ss.png",
      name: "Swayangprabha Shaw",
      bio: "Swayangprabha graduated with an MS from the Department of Physics, IISERB in May 2022. She worked in the QuCIS lab as a research associate  and was the recipient of Chanakya PG fellowship from  i-HUB, Pune between July 2022 and April 2023.  She is currently a PhD student in the Department of ECE, University of Arizona. An eccentric fellow in a heliocentric world who love learning about people, places and physics. :D",
    },
  ];

  return (
      <Background>
    <div className="w-full md:p-24 p-6 ">
      <Transition>
        <div className="w-full py-24 md:p-24 flex items-center justify-center">
          <h1 className=" teamHeading text-[55px] md:text-[96px] drop-shadow-lg">
            Meet the Team
          </h1>
        </div>

        <div className="w-full flex flex-col-reverse md:flex-row items-center justify-around gap-12">
          <div className="md:w-[60%]">
            <div className="text-white">
              <h1 className="text-[32px] md:text-[48px]  font-semibold font-bj">
                Dr. Ankur Raina
              </h1>
              <h2 className="text-[16px] md:text-[20px] italic font-bj font-semibold">
                Principal Investigator
              </h2>
              <p className="mt-8 font-source text-[16px] md:text-[20px] font-light tracking-[0.48px]">
              <b>Dr. Ankur Raina</b> work as an Assistant Professor in the Department of EECS, IISER Bhopal. 
              Before, joining IISER Bhopal, he worked as a researcher/scientist at the Department of Electrical and Computer Engineering, 
              University of Arizona with Prof. Bane Vasic. His research interests include classical and quantum information theory and coding, 
              quantum optics, quantum cryptography, quantum algorithms, fault-tolerant quantum computation.
              <br /><br />
              Dr. Raina has obtained his PhD from the PNSIL Group of the Department of Electronic Systems Engineering at 
              the Indian Institute of Science, Bengaluru under the supervision of Prof. Shayan Srinivasa Garani.
              </p>
            </div>
          </div>
          <div>
            <img
              src="/members/pi/ankur.png"
              className="w-[388px] drop-shadow-lg "
              alt=""
            />
          </div>
        </div>

        {members.map((member) => (
          <Members member={member} key={member.id} />
        ))}

        <div className="w-full px-24 flex items-center justify-center mt-24">
          <h1 className=" teamHeading text-[64px] drop-shadow-lg">Alumni</h1>
        </div>

        {alumni.map((alumnus) => (
          <Members member={alumnus} key={alumnus.id} />
        ))}
      </Transition>
    </div>
      </Background>
  );
};

export default Team;

const Members = ({ member }) => {
  return (
    <div
      className={`w-full flex-col flex ${
        member.id % 2 == 0 ? "md:flex-row-reverse" : "md:flex-row"
      } items-center justify-around gap-12 mt-[150px]`}
    >
      <div>
        <img src={member.img} className="w-[388px] drop-shadow-lg " alt="" />
      </div>

      <div className="md:w-[50%]">
        <div className="text-white">
          <h1 className="text-[32px] md:text-[48px]  font-semibold font-bj">
            {member.name}
          </h1>
          <h2 className="text-[16px] md:text-[20px] italic font-bj font-semibold ">
            {member.position}
          </h2>
          <p className="mt-8 font-source text-[16px] md:text-[20px] font-light tracking-[0.48px]">
            {member.bio}
          </p>
          <div className="flex gap-6 items-center justify-left mt-6">
            <img src="/icons/insta.png" className="w-6" />
            <img src="/icons/git.png" className="w-6" />
            <img src="/icons/linkedin.png" className="w-6" />
          </div>
        </div>
      </div>
    </div>
  );
};
