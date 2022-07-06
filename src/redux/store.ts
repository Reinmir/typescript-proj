import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import toDoReducer from './sliceToDo'
import authReducer from './userReducer'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    toDo: toDoReducer,
    auth: authReducer
  },
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;