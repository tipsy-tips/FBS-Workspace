import React from "react";
import Navigation from "../../../../partials/Navigation";
import HeaderDB from "../../../../partials/HeaderDB";
import { FaPlus } from "react-icons/fa";
import useQueryData from "../../../../custom-hook/useQueryData";
import { setIsAdd } from "../../../../../store/StoreAction";
import { StoreContext } from "../../../../../store/StoreContext";
import ModalError from "../../../../partials/modals/ModalError";
import Toast from "../../../../partials/Toast";
import UsersTable from "./UsersTable";
import ModalAddUser from "./ModalAddUser";

const Users = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [isSearch, setIsSearch] = React.useState(false);
  const [keyword, setKeyword] = React.useState("");
  const [itemEdit, setItemEdit] = React.useState("");

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);

    console.log(store.isAdd);
  };

  const {
    isLoading,
    isFetching,
    error,
    data: user,
  } = useQueryData(
    isSearch ? "/v1/user/search" : "/v1/user", // endpoint
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
                <h1 className="font-bold">Users List</h1>
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
              <UsersTable
                user={user}
                isLoading={isLoading}
                isFetching={isFetching}
                setItemEdit={setItemEdit}
              />
            </div>
          </div>
        </main>
        {store.isAdd && <ModalAddUser itemEdit={itemEdit} />}
        {store.success && <Toast />}
        {store.error && <ModalError position="center" />}
      </section>
    </>
  );
};

export default Users;
