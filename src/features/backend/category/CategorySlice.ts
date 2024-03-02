import { PayloadAction, createSlice } from "@reduxjs/toolkit";
const initialState = {
    createModal: false
  };
  
export const categorySlice = createSlice({
    initialState,
    name: "CATEGORY",
    reducers: {
        openCloseCategoryCreateModal: (state,action:PayloadAction<boolean>) =>{
            state.createModal = action?.payload
        }
    }
})

export const {
    openCloseCategoryCreateModal,
} =categorySlice.actions;