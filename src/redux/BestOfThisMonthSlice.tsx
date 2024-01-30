import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../helper/Instance";

interface BookState {
  bestBooks: [];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export const BestMonthBooks = createAsyncThunk(
  "books/bestMonthBooks",
  async () => {
    try {
      const response = await instance.get(`volumes?q=modren`);
      return response.data.items;
    } catch (error) {
      throw error;
    }
  }
);

const BestMonthSlice = createSlice({
  name: "bestBooks",
  initialState: {
    bestBooks: [],
    status: "idle",
    error: null,
  } as BookState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(BestMonthBooks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(BestMonthBooks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.bestBooks = action.payload;
      })
      .addCase(BestMonthBooks.rejected, (state, action) => {
        state.status = "failed";
        state.error = (action.error.message ?? null) as string | null;
      });
  },
});
export const selectAllBestBooks = (state: { bestBooks: BookState }) =>
  state.bestBooks.bestBooks;
export const selectIsLoading = (state: { bestBooks: BookState }) =>
  state.bestBooks.status === "loading";
export const { reducer: seasonsReducer } = BestMonthSlice;
export default BestMonthSlice;
