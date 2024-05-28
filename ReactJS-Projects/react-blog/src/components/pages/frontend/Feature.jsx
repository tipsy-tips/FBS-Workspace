import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Card from "./partials/Card";
import SectionTitle from "./partials/SectionTitle";
import useQueryData from "../../custom-hook/useQueryData";
import { Link } from "react-router-dom";

const Feature = () => {
  const { isLoading, data: post } = useQueryData(
    "/v1/post", // endpoint
    "get", // method
    "postKey" // key
  );

  const getFeatured = () =>
    post?.data.filter((item) => item.post_category_id === 1);

  return (
    <AnimatePresence>
      <motion.section
        className="feature bg-[#f9f9ff] py-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <SectionTitle title="Feature Now" hasLink="true" />
          <div className="grid gap-14 md:grid-cols-3">
            {!isLoading &&
              getFeatured()?.map((item, key) => (
                <Link to={`/single?id=${item.post_aid}`} key={key}>
                  <Card height="sm" item={item} />
                </Link>
              ))}
          </div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default Feature;
