import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ToDoValue } from 'Api/placeHolderApi/model';





interface InitialStateInterface {
  todosvalue: ToDoValue[]
}


const initialState: InitialStateInterface = {todosvalue: []};

const ToDoS = createSlice ({
    name: 'todosvalue',
    initialState: initialState,
    reducers: {
      setTodos(state, action: PayloadAction<ToDoValue[]>) {
        state.todosvalue = action.payload
      }
    }
})

export const {setTodos} = ToDoS.actions
export default ToDoS.reducer