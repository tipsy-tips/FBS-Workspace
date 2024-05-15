import React from "react";
import {
  FaExternalLinkAlt,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";

const Banner = () => {
  return (
    <>
      <section className="container my-32">
        <div className="grid grid-cols-2">
          <div>
            <div>
              <h2 className="text-[25px] font-bold">Hello,</h2>
              <h1 className="text-[50px] font-bold leading-[60px]">
                I <span className="text-cGreen">Design,</span> build <br />
                <span className="text-cBlue"> Websites</span> &
                <span className="text-cRed"> Programs.</span>
              </h1>
            </div>
            <div className="group  flex gap-3">
              <button className="btn--ui btn--transparent">Contact Me</button>
              <button className="btn--ui btn--noBorderIcon">
                Projects
                <FaExternalLinkAlt className="btnIcon" />
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="bg-cGreen size-[400px] relative">
              <div className="absolute -bottom-9 right-0">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cGreen opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-cGreen"></span>
                  </span>
                  <div className="bg-cGreen px-3 text-xs font-bold text-white p-1 rounded-full">
                    Active Now
                  </div>
                </div>
              </div>
              <div className="absolute size-[400px] border border-cGreen -top-9 -right-9 z[-1]"></div>
              <div className="absolute flex items-center justify-between flex-col gap-3 h-full w-full max-w-[40px] -left-10">
                <div className="flex flex-col items-center">
                  <ul className="flex items-center flex-col">
                    <li className="text-xs text-cGreen font-bold">S</li>
                    <li className="text-xs text-cGreen font-bold">O</li>
                    <li className="text-xs text-cGreen font-bold">C</li>
                    <li className="text-xs text-cGreen font-bold">I</li>
                    <li className="text-xs text-cGreen font-bold">A</li>
                    <li className="text-xs text-cGreen font-bold">L</li>
                    <li className="text-xs text-cGreen font-bold">S</li>
                  </ul>
                </div>
                <div className="size-full max-h-[120px] max-w-[2px] bg-cGreen"></div>
                <div>
                  <ul>
                    <li>
                      <FaTwitterSquare className="text-3xl text-cGreen hover:scale-125 transition-all" />
                    </li>
                    <li>
                      <FaFacebookSquare className="text-3xl text-cGreen hover:scale-125 transition-all" />
                    </li>
                    <li>
                      <FaLinkedin className="text-3xl text-cGreen hover:scale-125 transition-all" />
                    </li>
                    <li>
                      <FaInstagramSquare className="text-3xl text-cGreen hover:scale-125 transition-all" />
                    </li>
                    <li>
                      <FaGithubSquare className="text-3xl text-cGreen hover:scale-125 transition-all" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
