import { createSlice } from "@reduxjs/toolkit";

const skillSlice = createSlice({
    name: "skill",
    initialState: {
        skills: [],
    },
    reducers: {
        setSkills: (state, action) => {
            state.skills = action.payload;
        },
    },
});

export const {setSkills} = skillSlice.actions;
export const skillSliceReducer = skillSlice.reducer;