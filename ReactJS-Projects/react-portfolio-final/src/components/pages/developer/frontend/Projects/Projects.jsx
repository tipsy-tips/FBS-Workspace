import React from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import Slider from "react-slick";
import useQueryData from "../../../../custom-hook/useQueryData";
import { devBaseImgUrl } from "../../../../helpers/functions-general";
import { Link } from "react-router-dom";

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
    "get", // method
    "projectsKey" //key
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section id="projects" className="projects container my-10 ">
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="flex items-center justify-center flex-col gap-1 mb-10"
        >
          <h2 className="block-header-caption">Recent Projects</h2>
          <h1 className="block-header-title text-center text-balance">
            See the most recent <br />{" "}
            <span className="text-cGreen">project</span> I've made.
          </h1>
          {/* <button className="btn--ui btn--transparent"> View More</button> */}
        </div>

        <div className="projects">
          <Slider {...settings}>
            {projects?.data.map(
              (item, key) =>
                item.projects_is_active === 1 && (
                  <Link
                    to={item.projects_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div data-aos="fade-up" data-aos-duration="2000" key={key}>
                      <div>
                        <img
                          src={`${devBaseImgUrl}${item.projects_image}`}
                          alt=""
                          className="desktop:h-[740px] object-contain phone:h-[400px]"
                        />
                      </div>
                    </div>
                  </Link>
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
