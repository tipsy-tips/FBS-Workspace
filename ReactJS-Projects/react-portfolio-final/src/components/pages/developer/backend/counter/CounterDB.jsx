import React from "react";
import Navigation from "../../../../partials/Navigation";
import HeaderDB from "../../../../partials/HeaderDB";
import { FaPlus } from "react-icons/fa";
import CounterTable from "./CounterTable";
import { setIsAdd } from "../../../../../store/StoreAction";
import { StoreContext } from "../../../../../store/StoreContext";
import useQueryData from "../../../../custom-hook/useQueryData";
import ModalAddCounter from "./ModalAddCounter";
import ModalError from "../../../../partials/modals/ModalError";
import Toast from "../../../../partials/Toast";

const CounterDB = () => {
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
    data: counter,
  } = useQueryData(
    isSearch ? "/v1/counter/search" : "/v1/counter", // endpoint
    isSearch ? "post" : "get", // method
    "queryKey", // key
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
                <h1 className="font-bold">Counter</h1>
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
              <CounterTable
                counter={counter}
                isLoading={isLoading}
                isFetching={isFetching}
                setItemEdit={setItemEdit}
              />
            </div>
          </div>
        </main>
        {store.isAdd && <ModalAddCounter itemEdit={itemEdit} />}
        {store.success && <Toast />}
        {store.error && <ModalError position="center" />}
      </section>
    </>
  );
};

export default CounterDB;
