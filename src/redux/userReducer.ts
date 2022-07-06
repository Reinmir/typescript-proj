import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from 'Api/new api/models';

interface FullUser {
    user: User | null
    isAuth: boolean
}


const initialState: FullUser = {
    user: null,
    isAuth: false

}

const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) =>{
        state.user = action.payload;
        state.isAuth = true;
    },
    removeUser: (state) =>{
        state.user = null;
        state.isAuth = false;
    }
  }

});

export const {setUser,removeUser} = userReducer.actions

export default userReducer.reducer

