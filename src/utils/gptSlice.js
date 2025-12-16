import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMoviesList: null,
    gptMovies: null,
  },
  reducers: {
    toggleSearch: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovies: (state, action) => {
      const { movieNames, movieList } = action.payload;
      state.gptMoviesList = movieList;
      state.gptMovies = movieNames;
    },
  },
});

export const { toggleSearch, addGptMovies } = gptSlice.actions;
export default gptSlice.reducer;
