import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { RecipesSliceType, createRecipesSlice } from './recipeSlice';
import { createFavoritesSlice, FavoritesSliceType } from './favoriteSlice';
import {
  NotificationSliceType,
  createNotificationSlice,
} from './notificationSlice';

export const useAppStore = create<
  RecipesSliceType & FavoritesSliceType & NotificationSliceType
>()(
  devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationSlice(...a),
  }))
);
