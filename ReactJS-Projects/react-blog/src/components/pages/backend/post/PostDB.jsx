import React from "react";

import { FaPlus } from "react-icons/fa";

import PostTable from "./PostTable";
import ModalAddPost from "./ModalAddPost";
import Navigation from "../../../partials/Navigation";
import HeaderDB from "../../../partials/HeaderDB";
import { StoreContext } from "../../../../store/StoreContext";
import useQueryData from "../../../custom-hook/useQueryData";
import ModalError from "../../../partials/modals/ModalError";
import Toast from "../../../partials/Toast";
import { setIsAdd } from "../../../../store/StoreAction";
import { AnimatePresence } from "framer-motion";

const PostDB = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [isSearch, setIsSearch] = React.useState(false);
  const [keyword, setKeyword] = React.useState("");
  const [itemEdit, setItemEdit] = React.useState("");

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };

  const {
    isLoading,
    isFetching,
    error,
    data: post,
  } = useQueryData(
    isSearch ? "/v1/post/search" : "/v1/post", // endpoint
    isSearch ? "post" : "get", // method
    "postKey", // key
    {
      searchValue: keyword,
    }
  );

  return (
    <>
      <section className="flex overflow-x-hidden">
        <Navigation />
        <main className="w-[calc(100%-270px)]">
          <HeaderDB />
          <div className="flex relative">
            <div className="main-wrapper overflow-hidden max-h-[calc(100vh-65px)] transition-all px-4 py-3 w-full">
              <div className="flex justify-between items-center">
                <h1 className="font-bold">Posts</h1>
              </div>
              <div className="tab flex items-center justify-between mt-4 border-b border-line pb-4">
                <form action="" className="relative">
                  {/* <Searchbar
                    setIsSearch={setIsSearch}
                    setKeyword={setKeyword}
                  /> */}
                </form>
                <button
                  onClick={handleAdd}
                  className="btn btn--accent font-bold"
                >
                  <FaPlus className="" /> Add new
                </button>
              </div>
              <PostTable
                post={post}
                isLoading={isLoading}
                isFetching={isFetching}
                setItemEdit={setItemEdit}
              />
            </div>
          </div>
        </main>
        <AnimatePresence>
          {store.isAdd && (
            <ModalAddPost itemEdit={itemEdit} position="center" />
          )}
        </AnimatePresence>
        {store.success && <Toast />}
        {store.error && <ModalError position="center" />}
      </section>
    </>
  );
};

export default PostDB;
