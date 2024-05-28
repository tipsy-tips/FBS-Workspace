import React from "react";
import SpinnerWindow from "../../partials/spinners/SpinnerWindows";
import { devBaseImgUrl } from "../../helpers/functions-general";
import useQueryData from "../../custom-hook/useQueryData";
import Slider from "react-slick";

const BannerSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    nav: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const { isLoading, data: post } = useQueryData(
    "/v1/post", // endpointO
    "get", // method
    "postKey" //key
  );

  return (
    <>
      <div className="banner-slider relative">
        <Slider {...settings}>
          {isLoading ? (
            <SpinnerWindow />
          ) : (
            post?.data.slice(0, 4).map((item, key) => (
              <div className="relative grid place-content-center items-center h-[50vh]">
                <img
                  src={`${devBaseImgUrl}/${item.post_image}`}
                  alt=""
                  className="object-cover h-[50vh] w-full absolute top-0 left-0 -z-[1] "
                />
                {/* Black backdrop */}
                <div className="absolute inset-0 bg-black opacity-50 z-[2]"></div>
                <div className="text-center relative z-[3]">
                  <ul className="flex justify-center gap-2">
                    <li
                      className="bg-stone-600  px-2 py-1 rounded-lg text-white font-bold 
                        text-xs"
                    >
                      {item.tag_title}
                    </li>
                  </ul>

                  <h2 className="px-1 mt-4 text-balance text-3xl text-primary">
                    {item.post_title}
                  </h2>

                  <ul className="flex justify-center gap-4 text-sm text-primary">
                    {item.post_author}
                    {item.post_published_date}
                  </ul>
                </div>
              </div>
            ))
          )}
        </Slider>
      </div>
    </>
  );
};

export default BannerSlider;
