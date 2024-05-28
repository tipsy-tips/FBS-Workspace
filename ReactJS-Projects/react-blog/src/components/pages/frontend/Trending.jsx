import React from "react";
import SectionTitle from "./partials/SectionTitle";
import Card from "./partials/Card";
import useQueryData from "../../custom-hook/useQueryData";
import { Link } from "react-router-dom";
import { devBaseImgUrl } from "../../helpers/functions-general";
import Markdown from "react-markdown";

const Trending = () => {
  const { isLoading, data: post } = useQueryData(
    "/v1/post", // endpointO
    "get", // method
    "postKey" //key
  );

  const getTrending = () =>
    post?.data.filter(
      (item) => item.post_category_id === 2 && item.post_is_featured === 0
    );

  const getTrendingMain = () =>
    post?.data.find((item) => item.post_is_featured === 1);

  return (
    <>
      <section className="bg-[#f9f9ff] py-10">
        <div className="container">
          <SectionTitle />
          <div className="grid mt-10 gap-10 md:grid-cols-[1fr_2fr]">
            {!isLoading && (
              <Link to={`/single?id=${getTrendingMain()?.post_aid}`}>
                <Card item={getTrendingMain()} />
              </Link>
            )}
            <div className="grid gap-14 md:grid-cols-2">
              {!isLoading &&
                getTrending()
                  .slice(0, 4)
                  .map((item, key) => (
                    <div
                      className="shadow-[4px_2px_10px_5px_rgba(0,0,0,0.1)]  p-5 rounded-2xl max-h-[400px] relative"
                      key={key}
                    >
                      <div className="overflow-hidden rounded-xl h-[250px] mb-5 -mt-10">
                        <Link to={`/single?id=${item.post_aid}`}>
                          <img
                            src={`${devBaseImgUrl}/${item.post_image}`}
                            alt=""
                            className="w-full object-cover h-[300px] block   transition-transform hover:scale-110"
                          />
                        </Link>
                      </div>
                      <small
                        className="hover:bg-accent transition-colors bg-[#506172]  px-2 py-1 rounded-lg text-white font-bold 
                    text-xs"
                      >
                        {item.tag_title}
                      </small>
                      {/* hover:line-clamp-none hover:relative hover:p-2 hover:bg-[#f2f2f2] hover:z-50 hover:rounded-lg */}
                      <h3 className="my-4 line-clamp-3 transition-all ">
                        {item.post_title}
                      </h3>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Trending;
