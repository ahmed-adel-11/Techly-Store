import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface IFilterState {
  category: string[];
  brands: string[];
  minPrice: number;
  maxPrice: number;
  rating: number | null;
  sort: string;
}

const initialState: IFilterState = {
  category: [],
  brands: [],
  minPrice: 0,
  maxPrice: 2500,
  rating: null,
  sort: "default",
};

const filterSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
    clearAll: () => initialState,
    toggleCategory: (state, action: PayloadAction<string>) => {
      const category = action.payload;
      if (state.category.includes(category)) {
        state.category = state.category.filter((item) => item !== category);
      } else {
        state.category.push(category);
      }
    },
    toggleBrand: (state, action: PayloadAction<string>) => {
      const brand = action.payload;
      if (state.brands.includes(brand)) {
        state.brands = state.brands.filter((item) => item !== brand);
      } else {
        state.brands.push(brand);
      }
    },

    setPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
  },
});

export const { toggleCategory, toggleBrand, clearAll, setPrice } =
  filterSlice.actions;

export default filterSlice.reducer;
