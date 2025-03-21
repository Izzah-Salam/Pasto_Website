import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/PasteSlice";

const Home = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [searchParams, setSearchParams] = useSearchParams("");

  // to access reducers from slice we need to use useDispatch
  const dispatch = useDispatch();

  // get the id parameter from the URL using searchParams
  const pasteId = searchParams.get("pasteId");

  // function to create a logic of creating paste

  function createPaste() {
    // create a paste object
    const paste = {
      title: title,
      content: content,
      _id: pasteId || Date.now().toString(6),
      createdAt: new Date().toISOString(),
    };

    // dispatch the action to the reducer

    if (pasteId) {
      // update paste
      dispatch(updateToPastes(paste));
    } else {
      // create paste
      dispatch(addToPastes(paste));
    }

    // after creation or updation of paste, clear the input fields
    setTitle("");
    setContent("");
    setSearchParams({});
  }

  const Allpastes = useSelector((state) => state.pastes.pastes);
  // if the pasteId is changed then get the paste details and set the title and content
  useEffect(() => {
    if (pasteId) {
      const paste = Allpastes.find((paste) => paste._id === pasteId);
      setTitle(paste.title);
      setContent(paste.content);
    }
  }, [pasteId]);

  return (
    <div className="flex flex-col items-center text-white   ">
      <div className="my-3 flex lg:w-[700px] sm:w-[500px] w-[350px] ">
        <input
          className="flex-1 outline-none px-5 py-2 rounded-md bg-[#232222] border border-2-[#C3DE2E] "
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          className="bg-[#C3DE2E] text-white p-2 rounded-md md:ml-4 ml-2 text-sm "
          onClick={createPaste}
        >
          {
            // If the pasteId is not present in the URL, show the "Create Paste" button
            pasteId ? "Update Paste" : "Create Paste"
          }
        </button>
      </div>
      {/* text area */}
      <div>
        <div className="bg-[#333333] rounded-md p-1 mb-5">
          <div className="flex gap-1 my-1">
            <i class="ri-circle-fill text-yellow-400 text-sm"></i>
            <i class="ri-circle-fill text-orange-500 text-sm"></i>
            <i class="ri-circle-fill text-green-500 text-sm"></i>
          </div>
          <textarea
            className="lg:w-[700px] sm:w-[500px] w-[350px] outline-none px-5 py-2 rounded-md mb-2 bg-[#232222] border border-2-[#C3DE2E]"
            placeholder="Enter Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={20}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Home;
