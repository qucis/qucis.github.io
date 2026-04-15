import React from "react";

const Contact = () => {
  return (
    <div className="w-full min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[12px] font-semibold tracking-[0.2em] text-cyan-600 uppercase">Get in Touch</span>
          <h1 className="font-unbounded font-bold text-4xl md:text-6xl text-slate-900 mt-4">Contact Us</h1>
          <div className="mt-4 h-1 w-16 bg-gradient-to-r from-cyan-500 to-teal-400 mx-auto rounded-full"></div>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-cyan-100 rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            
            {/* Contact Details */}
            <div>
              <h2 className="font-unbounded font-bold text-2xl text-slate-900 mb-6">Dr. Ankur Raina</h2>
              <p className="text-cyan-600 font-asans font-semibold text-sm uppercase tracking-wider mb-6">Principal Investigator</p>
              
              <ul className="font-asans text-slate-700 text-base md:text-lg space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-600">📍</span>
                  <span>Office 208, Academic Building 1C<br />
                  Lab 204, Academic Building 1C<br />
                  Department of EECS, IISER Bhopal.</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-cyan-600">📧</span>
                  <a href="mailto:ankur@iiserb.ac.in" className="text-cyan-700 font-semibold hover:underline transition-all">ankur@iiserb.ac.in</a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-cyan-600">📞</span>
                  <span>+91 755 269 2654</span>
                </li>
              </ul>
            </div>

            {/* Visual/Join Us section */}
            <div className="bg-cyan-50/50 rounded-2xl p-8 border border-cyan-100">
              <h3 className="font-unbounded font-bold text-slate-900 text-xl mb-4">Join Our Research</h3>
              <p className="font-asans text-slate-600 text-sm leading-relaxed mb-6">
                We are always looking for motivated students to join us in exploring the frontiers of quantum information science.
              </p>
              <a 
                href="https://www.iiserb.ac.in/doaa/admission" 
                target="_blank" 
                rel="noreferrer"
                className="inline-block bg-cyan-600 text-white font-asans font-bold text-sm px-6 py-3 rounded-xl hover:bg-cyan-700 transition-all shadow-md active:scale-95"
              >
                PhD Admissions →
              </a>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
