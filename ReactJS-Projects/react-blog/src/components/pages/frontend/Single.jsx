import React from "react";
import UIFooter from "./partials/UIFooter";
import UIHeader from "./partials/UIHeader";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { devBaseImgUrl, getUrlParam } from "../../helpers/functions-general";
import useQueryData from "../../custom-hook/useQueryData";
import Markdown from "react-markdown";

const Single = () => {
  const id = getUrlParam().get("id");

  const { data: post } = useQueryData(
    `/v1/post/${id}`, // endpoint
    "get", // method
    "postKey" // key
  );

  const postArticle = post?.data[0].post_article.replace(/\\'/g, "'");

  return (
    <>
      <UIHeader />
      <div className="banner mt-5 mb-10">
        <div className="container">
          <h1 className="max-w-[800px] mx-auto text-center  py-6 px-10 bg-[#e9ecef] border border-gray-600 border-opacity-20 rounded-lg text-[20px] text-balance">
            {post?.data[0].post_title}
          </h1>
        </div>
      </div>

      <div className="container">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr] pb-10">
          <div className="shadow-[4px_2px_10px_5px_rgba(0,0,0,0.1)] px-10 p-5 rounded-2xl">
            <article className="mb-10">
              <div className="mb-10 ">
                <img
                  src={`${devBaseImgUrl}/${post?.data[0].post_image}`}
                  alt=""
                  className="mb-4 object-cover"
                />
                <small className="hover:bg-accent transition-colors bg-[#506172]  px-2 py-1 rounded-lg text-white font-bold text-xs inline-block">
                  {post?.data[0].post_category}
                </small>
                <h3 className="font-bold text-2xl">
                  {post?.data[0].post_subtitle}
                </h3>

                <Markdown className="article">{postArticle}</Markdown>
              </div>
            </article>
          </div>
          <aside>
            <div className="sticky top-5">
              <div className="shadow-[4px_2px_10px_5px_rgba(0,0,0,0.1)] p-5 rounded-2xl mb-5">
                <img
                  src="https://via.placeholder.com/40x40"
                  alt=""
                  className="mx-auto rounded-full size-[100px] object-cover mb-5"
                />
                <h4 className="text-center"> {post?.data[0].post_author}</h4>
                <p className="text-center mb-10 text-balance text-[14px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  nobis alias nihil eos molestiae qui nam animi perspiciatis
                  consequatur. Provident perspiciatis omnis assumenda pariatur
                  commodi nisi maiores eum illum nam maxime. Architecto, magni
                  porro perspiciatis ex cumque aliquid at animi.
                </p>

                <ul className="flex justify-center gap-4">
                  <li>
                    <Link to="#">
                      <FaFacebook className="text-2xl" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <FaTwitter className="text-2xl" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <FaInstagram className="text-2xl" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <FaYoutube className="text-2xl" />
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="shadow-[4px_2px_10px_5px_rgba(0,0,0,0.1)] p-5 rounded-2xl">
                <h2>Latest Posts</h2>

                <div className="grid grid-cols-1">
                  <div className="flex justify-center items-center gap-5">
                    <img
                      src="https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/9/m/6/medium-beautifull-nature-wall-picture-photographic-paper-14x20-original-imag6jtasuued8cy.jpeg?q=90&crop=false"
                      alt=""
                      className="size-[100px]"
                    />
                    <div className="flex flex-col justify-between">
                      <h4 className="mb-0 font-bold text-[14px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </h4>
                      <small>May 22, 2024</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <UIFooter />
    </>
  );
};

export default Single;
