import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { RecipesSliceType, createRecipesSlice } from './recipeSlice';
import { createFavoritesSlice, FavoritesSliceType } from './favoriteSlice';

export const useAppStore = create<RecipesSliceType & FavoritesSliceType>()(
  devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoritesSlice(...a),
  }))
);
