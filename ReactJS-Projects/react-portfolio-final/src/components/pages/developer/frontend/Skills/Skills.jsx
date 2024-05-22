import React from "react";
import { devBaseImgUrl } from "../../../../helpers/functions-general";
import useQueryData from "../../../../custom-hook/useQueryData";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Skills = () => {
  const { isLoading, data: skills } = useQueryData(
    "/v1/skills", // endpointO
    "get", // method
    "skillsKey" // key
  );

  const { data: skillsimage } = useQueryData(
    "/v1/skillsimage", // endpointO
    "get", // method
    "skillsImageKey" // key
  );

  console.log(skillsimage);

  return (
    <>
      <section className=" container my-32">
        <div>
          <div
            data-aos-duration="2000"
            data-aos="fade-right"
            className="inline-block"
          >
            <h2 className="block-header-caption">My Skills</h2>
            <h1 className="block-header-title mb-5 text-balance">
              Why Hire Me For Your
              <br /> Upcoming{" "}
              <span className="text-cGreen font-bold">Project?</span>
            </h1>
          </div>
          <div className="skills grid grid-cols-2 gap-5 phone:grid-cols-1 tablet:grid-cols-2">
            <div
              data-aos-duration="2000"
              data-aos="fade-right"
              className="space-y-5 self-center text-sm"
            >
              {isLoading
                ? "loading"
                : skills?.data.map((item, key) => (
                    <div key={key}>
                      <ul className="list-inside">
                        <li>{item.skills_list}</li>
                      </ul>
                    </div>
                  ))}
            </div>

            <div
              data-aos-duration="2000"
              data-aos="fade-left"
              className="flex justify-center items-center"
            >
              <div className="skills-icon grid grid-cols-4 justify-center gap-3">
                {skillsimage?.data.map((item, key) => (
                  <div key={key}>
                    <img
                      src={`${devBaseImgUrl}${item.skillsimage_image}`}
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
