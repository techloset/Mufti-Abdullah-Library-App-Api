import { configureStore, combineReducers } from "@reduxjs/toolkit";
import searchSlice from "./SearchSlice";
import MostPopularSlice from "./MostPopularSlice";
import BestMonthSlice from "./BestOfThisMonthSlice";
const rootReducer = combineReducers({
  books: MostPopularSlice.reducer,
  bestBooks: BestMonthSlice.reducer,
  search: searchSlice.reducer,
});

const Store = configureStore({
  reducer: rootReducer,
});
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
export default Store;
