import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../helper/Instance";

export interface Books {
  id?: string;
    title: string;
    categories?: string[];
      thumbnail:string
      amount: number;
      description:string;
      author:[];
}

interface BookState {
  books: Books[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export const MostPopularBooks = createAsyncThunk(
  "books/mostPopularBooks",
  async () => {
    try {
      const response = await instance.get(`volumes?q=trending`);
      return response.data.items;
    } catch (error) {
      throw error;
    }
  }
);


const MostPopularSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
    status: "idle",
    error: null,
  } as BookState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(MostPopularBooks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(MostPopularBooks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.books = action.payload;
      })
      .addCase(MostPopularBooks.rejected, (state, action) => {
        state.status = "failed";
        state.error = (action.error.message ?? null) as string | null;
      });
  },
});

export const selectAllBooks = (state: { books: BookState }) =>
  state.books.books;

export const selectIsLoading = (state: { books: BookState }) =>
  state.books.status === "loading";

export const { reducer: booksReducer } = MostPopularSlice;

export default MostPopularSlice;
