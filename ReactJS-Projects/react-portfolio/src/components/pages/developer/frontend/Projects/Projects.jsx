import React from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import Slider from "react-slick";
import useQueryData from "../../../../custom-hook/useQueryData";
import { devBaseImgUrl } from "../../../../helpers/functions-general";

function NextArrow(props) {
  const { className, onClick } = props;

  return (
    <div className={className} onClick={onClick}>
      <FaCaretRight />
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FaCaretLeft />
    </div>
  );
}

const Projects = () => {
  const { data: projects } = useQueryData(
    "/v1/projects", // endpointO
    "get" // method
  );

  var settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <section id="projects" className="projects container my-10">
        <div className="flex items-center justify-center flex-col gap-1 mb-10">
          <h2 className="block-header-caption">Recent Projects</h2>
          <h1 className="block-header-title text-center">
            See the most recent <br />{" "}
            <span className="text-cGreen">project</span> I've made.
          </h1>
          <button className="btn--ui btn--transparent"> View More</button>
        </div>

        <div className="projects">
          <Slider {...settings}>
            {projects?.data.map(
              (item, key) =>
                item.projects_is_active === 1 && (
                  <div key={key}>
                    <div>
                      <img
                        src={`${devBaseImgUrl}${item.projects_image}`}
                        alt=""
                        className="h-[740px] object-contain"
                      />
                    </div>
                  </div>
                )
            )}
          </Slider>
          {/* <div className="mx-auto max-w-[800px] mt-20 mb-10">
            <Helmet>
              <script
                src="../../../vendor/github-profile"
                type="text/javascript"
              />
            </Helmet>
            <div className="calendar">Loading the data just for you.</div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Projects;
