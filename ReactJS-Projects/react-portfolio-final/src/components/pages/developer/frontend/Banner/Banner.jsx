import React from "react";
import {
  FaArrowAltCircleDown,
  FaArrowDown,
  FaExternalLinkAlt,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoIosArrowDown } from "react-icons/io";
AOS.init();

const Banner = () => {
  return (
    <>
      <section className="relative container tablet:container my-32 phone:mt-10">
        <div className="grid grid-cols-2 phone:grid-cols-1 phone:gap-20 tablet:gap-0 tablet:grid-cols-2">
          <div data-aos-duration="2000" data-aos="fade-right">
            <div>
              <h2 className="text-[25px] font-bold">Hello,</h2>
              <h1 className="text-[50px] font-bold leading-[60px] text-balance phone:text-[40px] phone:leading-[50px] ">
                I <span className="text-cGreen">Design,</span> build
                <span className="text-cBlue"> Websites</span> &
                <span className="text-cRed"> Programs.</span>
              </h1>
            </div>
            <div className="group  flex gap-3">
              <button className="btn--ui btn--transparent phone:p-2 phone:px-5 phone:text-nowrap">
                Contact Me
              </button>
              <button className="btn--ui btn--noBorderIcon">
                Projects
                <FaExternalLinkAlt className="btnIcon" />
              </button>
            </div>
          </div>
          <div
            data-aos-duration="2000"
            data-aos="fade-left"
            className="flex  justify-end"
          >
            <div className="bg-cGreen size-[400px] relative phone:size-[250px] tablet:size-[300px] desktop:size-[400px]">
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
              <div className="absolute size-[400px] border border-cGreen -top-9 -right-9 z[-1] phone:hidden tablet:size-[250px] tablet:block tablet:size-[300px] desktop:block desktop:size-[400px]"></div>
              <div className="absolute max-w-[40px] h-full -left-10 phone:hidden tablet:block ">
                <div className="flex flex-col justify-center min-h-[400px] justify-between tablet:min-h-[300px] desktop:min-h-[400px]">
                  <div className="flex flex-col items-center">
                    <ul className="flex justify-center items-center flex-col">
                      <li className="text-xs text-cGreen font-bold">S</li>
                      <li className="text-xs text-cGreen font-bold">O</li>
                      <li className="text-xs text-cGreen font-bold">C</li>
                      <li className="text-xs text-cGreen font-bold">I</li>
                      <li className="text-xs text-cGreen font-bold">A</li>
                      <li className="text-xs text-cGreen font-bold">L</li>
                      <li className="text-xs text-cGreen font-bold">S</li>
                    </ul>
                  </div>

                  <div className="justify-center items-center hidden desktop:flex ">
                    <span className="before:h-[80px] before:w-[2px] before:bg-cGreen before:content-[''] before:block"></span>
                  </div>

                  <div>
                    <ul className="flex flex-col justify-center items-center">
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
              <div className="img">
                <img
                  src="images\home\person.png"
                  alt=""
                  className="w-auto h-[430px] absolute top-[-30px] left-1/2 -translate-x-1/2 phone:h-[280px] desktop:h-[430px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" absolute bottom-[-100px] right-1/2 -translate-x-1/2 phone:hidden">
          <IoIosArrowDown className="relative animate-bounce text-2xl text-accent z-10" />
        </div>
      </section>
    </>
  );
};

export default Banner;
