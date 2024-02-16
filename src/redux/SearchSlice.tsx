import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import instance from "../utilites/Instance";
import { Books, BooksDetails } from "../constants/Types";

export interface SearchState {
  searches: Books[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export const searchBooks = createAsyncThunk<BooksDetails, string>(
  "search/searchBooks",
  async (query: string) => {
    if (query) {
      try {
        const response = await instance.get(`volumes?q=${query}&maxResults=20`);
        return response.data.items;
      } catch (error: any) {
        throw new Error(error?.message ?? "Fetch movies error");
      }
    }
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searches: [],
    status: "idle",
    error: null,
  } as SearchState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchBooks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(searchBooks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.searches = action.payload as unknown as Books[];
      })
      .addCase(searchBooks.rejected, (state, action) => {
        state.status = "failed";
        state.error = (action.error.message ?? null) as string | null;
      });
  },
});

export const selectAllSearch = (state: { search: SearchState }) =>
  state.search.searches;
export const selectIsLoading = (state: { search: SearchState }) =>
  state.search.status === "loading";

export default searchSlice;
