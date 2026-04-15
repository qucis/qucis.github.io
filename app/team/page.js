"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Team = () => {
  const [expandedImg, setExpandedImg] = useState(null);

  const [members, setMembers] = useState([
    { id: 1, name: "Harsh Gupta", position: "PhD Student", img: "/members/phd/harsh.jpg", bio: "I love playing chess, badminton and guitar. I enjoy listening to people's stories since human interactions do not require a tensor decomposition. As an engineer open to learn anything. If I'm not lost in a matrix (the mathematical kind not the movie), you'll find me pretending to take a break while secretly running simulations in my head. Welcome to my corner of the internet, where reality is just a probability distribution." },
    { id: 2, name: "Mainak Bhattacharyya", img: "/members/phd/mainak.jpg", position: "PhD Student", bio: "Mainak is currently pursuing his PhD in the QuCIS lab. He graduated with a MSc from the Department of Physics, NIT Jamshedpur in May 2023. He was a past recipient of Chanakya PG fellowship funded by I-HUB QTF, IISER Pune. Explore his socials to know more about Mainak." },
    { id: 6, name: "Suprabhat Sinha", position: "PhD Student", img: "/members/phd/suprabhat.png", bio: "Curious by nature. Enjoy reading books, spending quiet moments with nature, listening to music, and engaging in thoughtful discussion. Strongly believe that quality sleep is an essential habit for clear thinking and creativity." },
    { id: 4, name: "Ronit Raj", position: "M.S. Student", img: "/members/ms/ronit.png", bio: "Ronit is currently working on his BS project at QuCIS lab." },
    { id: 5, name: "Manish Mallapur", position: "M.S. Student", img: "/members/ms/manish.png", bio: "Manish is currently working on his BS project at QuCIS lab." },
    { id: 7, name: "Kshitij Durge", position: "M.S. Student", img: "/members/ms/kshitij.png", bio: "Big time racquet sports enthusiast. I yearn for simplicity and try to be myself as much as possible. Love having productive days, midnight blue skies when evening comes and ending them with some Daniel Caesar and big chilling with the people I care about." },
    { id: 8, name: "Rohith K", position: "M.S. Student", img: "/members/ms/rohith.png", bio: "(Joint supervision with Dr. Tale, IISER Pune). Definitely not a social butterfly, though I do enjoy a good game of badminton (Apparently, most people here do. What are the chances!). I find learning a lot more rewarding when it's something entirely different from the stuff I am supposed to learn.." },
    { id: 9, name: "Sankalp", position: "M.S. Student", img: "/members/ms/sankalp.png", bio: "I am a BS-MS student from IISER Tirupati with Physics as my major. As a part of my MS thesis, I am simulating a Quantum Teleportation Network. I like to talk about Science, Politics, Philosophy, Sports, and Music. My hobbies include mountaineering, playing lawn tennis, and reading non-fiction." },
    { id: 10, name: "Dhruv Koul", position: "B.Tech Student", img: "/members/ms/dhruv.png", bio: "I am working on Quantum Error Correction, but life isn’t all academics. I enjoy cooking, staying updated with technology, and experimenting with them. Always up for heading out and exploring new places. A big fan of experimental learning—poke around, see what happens, and learn something new." },
  ]);

  const alumni = [
    { id: 3, name: "Yash Prabhat", position: "M.S. Student", img: "/members/ms/yash.png", bio: "Yash is currently working on his M.S. thesis at QuCIS lab with joint supervision of Dr. Snigdha Thakur, Department of Physics, IISER Bhopal. I am a physics major who is mesmerized by the quantum phenomenon. In my leisure, you will find me on the badminton court or playing video games. Say hi if you are around :)." },
    { id: 1, name: "Sanidhya Gupta", position: "M.S. Student", img: "/members/alumni/sanidhya.png", bio: "Just a kid passionate about technology, particularly computers. Engineering is what I do. My experiments range from fine-tuning working codes to engaging in academic research and occasionally cooking something-something in the kitchen. Sanidhya was a past recipient of Chanakya UG and PG fellowships funded by I-HUB QTF, IISER Pune." },
    { id: 2, name: "Anuprita V. Kulkarni", position: "M.S. Student", img: "/members/alumni/anuprita.jpg", bio: "Anuprita was a past recipient of Chanakya PG fellowship funded by I-HUB QTF, IISER Pune. She worked under joint supervision of Dr. Auditya Sharma, Department of Physics IISER Bhopal." },
    { id: 11, name: "Pranav Maheshwari", position: "M.S. Student", img: "/members/alumni/pranav.png", bio: "A Quantum Information Researcher who loves talking about life, politics and entrepreneurship. Excited to meet new faces and waiting for you to send a Hi!" },
    { id: 4, img: "/members/alumni/akash.png", name: "Akash Kumar Singh", bio: "Akash graduated with an MS from the Department of Physics, IISERT in May 2023. He is currently pursuing MTech degree from DIAT, Pune. In equal superposition of being at the library and badminton court." },
    { id: 5, img: "/members/alumni/sid.png", name: "Siddharth Sethi", bio: "Siddharth graduated with an MS from the Department of EECS in May 2023. Hobbies are Photography, Videography and video-editing, Cooking, Playing Badminton." },
    { id: 6, img: "/members/alumni/rohit.png", name: "Rohit K. Teja", bio: 'Rohit graduated with an MS from the Department of EECS in May 2023. "Books, humour, music and coffee. Occasional badminton and basketball player."' },
    { id: 7, img: "/members/alumni/madhav.png", name: "Madhav Sharma", bio: "Madhav graduated with an MS from the Department of Physics in May 2023. He is currently with Capgemini Quantum Lab. In my free time other than reading about emerging technology and their application I like to watch movies, play volleyball and spend quality time with my friends." },
    { id: 8, img: "/members/alumni/ss.png", name: "Swayangprabha Shaw", bio: "Swayangprabha graduated with an MS from the Department of Physics, IISERB in May 2022. She worked in the QuCIS lab as a research associate and was the recipient of Chanakya PG fellowship from i-HUB, Pune between July 2022 and April 2023. She is currently a PhD student in the Department of ECE, University of Arizona. An eccentric fellow in a heliocentric world who loves learning about people, places and physics. :D" },
  ];

  return (
    <div className="w-full min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Page header */}
        <div className="text-center mb-20">
          <span className="text-[12px] font-semibold tracking-[0.2em] text-cyan-600 uppercase">Our People</span>
          <h1 className="font-unbounded font-bold text-4xl md:text-6xl text-slate-900 mt-4">Meet the Team</h1>
          <div className="mt-4 h-1 w-16 bg-gradient-to-r from-cyan-500 to-teal-400 mx-auto rounded-full"></div>
        </div>

        {/* Principal Investigator */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 mb-24 bg-white/70 backdrop-blur-sm border border-cyan-100 rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="md:w-[55%]">
            <span className="text-[11px] font-semibold tracking-widest text-cyan-500 uppercase">Principal Investigator</span>
            <h2 className="font-unbounded font-bold text-2xl md:text-4xl text-slate-900 mt-2">Dr. Ankur Raina</h2>
            <p className="mt-6 font-asans text-slate-700 text-base md:text-lg leading-relaxed">
              <strong>Dr. Ankur Raina</strong> works as an Assistant Professor in the Department of EECS, IISER Bhopal. Before joining IISER Bhopal, he worked as a researcher/scientist at the Department of Electrical and Computer Engineering, University of Arizona with Prof. Bane Vasic. His research interests include classical and quantum information theory and coding, quantum optics, quantum cryptography, quantum algorithms, and fault-tolerant quantum computation.
              <br /><br />
              Dr. Raina obtained his PhD from the PNSIL Group of the Department of Electronic Systems Engineering at the Indian Institute of Science, Bengaluru under the supervision of Prof. Shayan Srinivasa Garani.
            </p>
          </div>
          <div className="flex-shrink-0">
            <img 
              src="/members/pi/ankur.png" 
              onClick={() => setExpandedImg("/members/pi/ankur.png")}
              className="w-[320px] md:w-[380px] rounded-2xl shadow-xl border-2 border-cyan-100 cursor-zoom-in hover:scale-[1.02] transition-transform duration-300" 
              alt="Dr. Ankur Raina" 
            />
          </div>
        </div>

        {/* Current Members */}
        <h2 className="font-unbounded font-bold text-2xl md:text-3xl text-slate-800 mb-10 border-l-4 border-cyan-500 pl-4">Current Members</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {members.map((m) => (
            <MemberCard member={m} key={m.id} onZoom={() => setExpandedImg(m.img)} />
          ))}
        </div>

        {/* Alumni */}
        <h2 className="font-unbounded font-bold text-2xl md:text-3xl text-slate-800 mb-10 border-l-4 border-cyan-500 pl-4">Alumni</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {alumni.map((a, i) => (
            <MemberCard member={a} key={a.id || i} onZoom={() => setExpandedImg(a.img)} />
          ))}
        </div>

      </div>

      {/* Zoom Modal Overlay */}
      <AnimatePresence>
        {expandedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpandedImg(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/90 p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh]"
            >
              <img src={expandedImg} className="w-full h-full object-contain rounded-lg shadow-2xl" alt="Zoomed Member" />
              <button 
                onClick={(e) => { e.stopPropagation(); setExpandedImg(null); }}
                className="absolute -top-4 -right-4 bg-white text-slate-900 w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-cyan-500 hover:text-white transition-colors text-xl font-bold"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Team;

const MemberCard = ({ member, onZoom }) => {
  const [imgError, setImgError] = useState(false);
  const initials = member.name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);

  return (
    <div className="flex gap-5 bg-white/70 backdrop-blur-sm border border-cyan-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all items-start">
      {imgError ? (
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-50 to-teal-50 border border-cyan-200 flex items-center justify-center flex-shrink-0 text-cyan-600 font-unbounded font-bold text-xl shadow-inner">
          {initials}
        </div>
      ) : (
        <img 
          src={member.img} 
          onError={() => setImgError(true)}
          onClick={onZoom}
          className="w-16 h-16 rounded-xl object-cover flex-shrink-0 border border-cyan-500/20 shadow-sm cursor-zoom-in hover:brightness-110 transition-all" 
          alt={member.name} 
        />
      )}
      <div>
        <h3 className="font-unbounded font-bold text-slate-900 text-base">{member.name}</h3>
        {member.position && <p className="text-cyan-600 font-asans text-sm font-medium mt-0.5">{member.position}</p>}
        <p className="font-asans text-slate-600 text-sm leading-relaxed mt-2 line-clamp-4">{member.bio}</p>
      </div>
    </div>
  );
};
