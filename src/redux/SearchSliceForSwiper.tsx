import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../utilites/Instance";
import { Books } from "../constants/Types";

export interface SearchStateForSwiper {
  searches: Books[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export const searchBooksForSwiper = createAsyncThunk<Books[], string>(
  "searchSwiper/searchBooksForSwiper",
  async (query: string) => {
    try {
      const response = await instance.get(`volumes?q=${query}`);
      return response.data.items;
    } catch (error: any) {
      throw new Error(error?.message ?? "Fetch books error");
    }
  }
);

const SearchSliceForSwiper = createSlice({
  name: "searchSwiper",
  initialState: {
    searches: [],
    status: "idle",
    error: null,
  } as SearchStateForSwiper,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchBooksForSwiper.pending, (state) => {
        state.status = "loading";
      })
      .addCase(searchBooksForSwiper.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.searches = action.payload;
      })
      .addCase(searchBooksForSwiper.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Fetch books error";
      });
  },
});

export const selectAllSearchForSwiper = (state: {
  searchSwiper: SearchStateForSwiper;
}) => state.searchSwiper.searches;
export const selectIsLoadingForSwiper = (state: {
  searchSwiper: SearchStateForSwiper;
}) => state.searchSwiper.status === "loading";

export default SearchSliceForSwiper;
