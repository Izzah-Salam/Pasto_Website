import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ViewPaste = () => {
  const { id } = useParams();
  const allpastes = useSelector((state) => state.pastes.pastes);
  const paste = allpastes.find((paste) => paste._id === id);

  return (
    <div className="flex flex-col items-center text-white ">
      <div className="my-3 flex lg:w-[700px] sm:w-[500px] w-[350px] ">
        <input
          className="flex-1 outline-none px-5 py-2 rounded-md bg-[#232222] border border-2-[#C3DE2E] capitalize "
          type="text"
          placeholder="Enter Title"
          value={paste.title}
          disabled
        />
      </div>
      {/* text area */}
      <div className="bg-[#333333] rounded-md p-1 mb-5">
        <div className="flex gap-1 my-1">
          <i class="ri-circle-fill text-yellow-400 text-sm"></i>
          <i class="ri-circle-fill text-orange-500 text-sm"></i>
          <i class="ri-circle-fill text-green-500 text-sm"></i>
        </div>
        <textarea
          className="lg:w-[700px] sm:w-[500px] w-[350px] outline-none px-5 py-2 rounded-md mb-2 bg-[#232222] border border-2-[#C3DE2E]"
          placeholder="Enter Content"
          value={paste.content}
          rows={20}
          cols={30}
          disabled
        ></textarea>
      </div>
    </div>
  );
};

export default ViewPaste;
