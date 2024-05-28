import React from "react";

import useQueryData from "../../../custom-hook/useQueryData";
import { setIsAdd } from "../../../../store/StoreAction";
import { StoreContext } from "../../../../store/StoreContext";
import ModalError from "../../../partials/modals/ModalError";
import Toast from "../../../partials/Toast";
import Navigation from "../../../partials/Navigation";
import HeaderDB from "../../../partials/HeaderDB";
import { FaPlus } from "react-icons/fa";
import ModalAddTag from "./ModalAddTag";
import TagTable from "./TagTable";
import { AnimatePresence } from "framer-motion";

const Tag = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [isSearch, setIsSearch] = React.useState(false);
  const [keyword, setKeyword] = React.useState("");
  const [itemEdit, setItemEdit] = React.useState("");

  const {
    isLoading,
    isFetching,
    error,
    data: tag,
  } = useQueryData(
    "/v1/tag", // endpoint
    "get", // method
    "tagKey" // key
  );

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };
  return (
    <section className="flex overflow-hidden">
      <Navigation menu="tag" />
      <main className="w-[calc(100%-250px)] overflow-x-hidden">
        <HeaderDB />

        <div className="flex ">
          <div
            className={`main-wrapper transition-all px-4 py-3  sticky top-0 w-full`}
          >
            <div className="flex justify-between items-center">
              <h1>Tag</h1>
              {/* <Searchbar setIsSeach={setIsSearch} setKeyword={setKeyword} /> */}
            </div>

            <div className="tab flex items-center justify-between mt-4 border-b border-line pb-4">
              <form action="" className="relative">
                {/* <Searchbar
                    setIsSearch={setIsSearch}
                    setKeyword={setKeyword}
                  /> */}
              </form>
              <button onClick={handleAdd} className="btn btn--accent font-bold">
                <FaPlus className="" /> Add new
              </button>
            </div>
            <TagTable
              isLoading={isLoading}
              tag={tag}
              isFetching={isFetching}
              setItemEdit={setItemEdit}
            />
          </div>
        </div>
      </main>

      <AnimatePresence>
        {store.isAdd && <ModalAddTag itemEdit={itemEdit} />}
      </AnimatePresence>

      {store.error && <ModalError position="center" />}
      {store.success && <Toast />}
    </section>
  );
};

export default Tag;
