import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { removeFromPastes } from "../redux/PasteSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

import { formatDate } from "./FormateDate";

const Paste = () => {
  const pastes = useSelector((state) => state.pastes.pastes);
  console.log(`all the pastes : ${pastes}`);

  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  //   filter the data
  const filterData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // delete the paste
  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }

  // //share the paste
  // function handleSharePaste(pasteId) {
  //   console.log(`share the paste with id : ${pasteId}`);
  // }

  return (
    <div className="flex flex-col items-center  ">
      <input
        className="lg:w-[700px] sm:w-[500px] w-[350px]  outline-none px-5 py-2 rounded-md bg-[#232222] border border-2-[#C3DE2E] "
        type="text"
        placeholder="Search the Paste"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="lg:w-[700px] sm:w-[500px] w-[350px] ">
        {filterData.length > 0 &&
          filterData.map((paste) => (
            <div
              key={paste._id}
              className="border p-4 my-4 flex sm:justify-between sm:flex-row flex-col items-center "
            >
              <div>
                <h1 className="font-bold text-2xl capitalize mb-2 ">
                  {paste.title}
                </h1>
                <p className="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis md:max-w-[300px] max-w-[200px]">
                  {paste.content}
                </p>
              </div>
              <div className="my-4 ">
                <div className="flex flex-row gap-2 mb-3 ">
                  <button>
                    {" "}
                    <Link to={`/?pasteId=${paste?._id}`}>
                      <i class="ri-edit-2-line border border-2-white p-1 text-green-500 rounded-sm"></i>
                    </Link>
                  </button>
                  <button onClick={() => handleDelete(paste._id)}>
                    <i class="ri-delete-bin-7-line border border-2-white p-1 text-red-500 rounded-sm"></i>
                  </button>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(paste?.content);
                      toast.success("copy to Clipboard");
                    }}
                  >
                    <i class="ri-file-copy-line border border-2-white p-1 text-blue-400 rounded-sm"></i>
                  </button>
                  <button>
                    <Link to={`/pastes/${paste?._id}`}>
                      <i class="ri-eye-fill border border-2-white p-1 text-yellow-400 rounded-sm"></i>
                    </Link>
                  </button>
                  <button>
                    <i class="ri-share-box-line border border-2-white p-1 text-gray-500 rounded-sm"></i>
                  </button>
                </div>
                <div>
                  <p className="text-sm text-center">
                    {" "}
                    <i class="ri-calendar-2-line"></i>{" "}
                    {formatDate(paste.createdAt)}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Paste;
