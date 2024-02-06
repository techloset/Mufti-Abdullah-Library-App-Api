import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import instance from "../utilites/Instance";
import { BooksDetails } from "../constants/Types";

export interface SearchState {
  searches: BooksDetails[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export const searchBooks = createAsyncThunk(
  "search/searchBooks",
  async (query: string) => {
    try {
      const response = await instance.get(`volumes?q=${query}`);
      const searchData = response.data.items.map((item: any) => ({
        id: item.id,
        title: item.volumeInfo.title,
        categories: item.volumeInfo.categories || [],
        thumbnail: item.volumeInfo.imageLinks?.thumbnail || "",
        amount: item.saleInfo?.listPrice?.amount || 0,
        description: item.volumeInfo.description,
        author: item.volumeInfo.authors || [],
      }));
      return searchData;
    } catch (error: any) {
      throw new Error(error?.message ?? "Fetch movies error");
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
  reducers: {
    setSearches: (state, action: PayloadAction<BooksDetails[]>) => {
      state.searches = action.payload;
      state.status = "succeeded";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchBooks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(searchBooks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.searches = action.payload;
      })
      .addCase(searchBooks.rejected, (state, action) => {
        state.status = "failed";
        state.error = (action.error.message ?? null) as string | null;
      });
  },
});

export const { reducer: searchReducer, actions } = searchSlice;
export const { setSearches } = actions;

export const selectAllSearch = (state: { search: SearchState }) =>
  state.search.searches;
export const selectIsLoading = (state: { search: SearchState }) =>
  state.search.status === "loading";

export default searchSlice;
