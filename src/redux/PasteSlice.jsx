import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : [],
};

export const PasteSlice = createSlice({
  name: "paste",
  initialState,
  reducers: {
    addToPastes: (state, action) => {
      // if the same paste already exists in the pastes array

      // Add the new paste to the pastes array
      state.pastes.push(action.payload);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast.success("Paste added successfully");
    },
    updateToPastes: (state, action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex((item) => item._id === paste._id);
      if (index >= 0) {
        state.pastes[index] = paste;
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste updated successfully");
      }
    },
    resetAllPastes: (state) => {
      state.pastes = [];
      localStorage.removeItem("pastes");
    },
    removeFromPastes: (state, action) => {
      const pasteId = action.payload;
      const index = state.pastes.findIndex((item) => item._id === pasteId);
      if (index >= 0) {
        state.pastes.splice(index, 1);
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste removed successfully");
      }
    },
    // sharePaste: (state, action) => {
    //   const pasteId = action.payload;
    //   const index = state.pastes.findIndex((item) => item._id === pasteId);

    //   if (index >= 0) {
    //     // Generate a random link
    //     const randomLink = generateRandomLink();

    //     // Update the paste object
    //     state.pastes[index].shared = true;
    //     state.pastes[index].shareLink = randomLink;

    //     // Save to localStorage
    //     localStorage.setItem("pastes", JSON.stringify(state.pastes));
    //   }
    // },
  },
});

// // Function to generate a random link
// const generateRandomLink = () => {
//   const baseUrl = "https://example.com/paste/"; // Base URL for the shareable link
//   const randomString = Math.random().toString(36).substring(2, 10); // Random string of 8 characters
//   return `${baseUrl}${randomString}`;
// };

// Action creators are generated for each case reducer function
export const { addToPastes, updateToPastes, resetAllPastes, removeFromPastes } =
  PasteSlice.actions;

export default PasteSlice.reducer;
