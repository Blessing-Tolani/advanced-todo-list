import { createSlice } from '@reduxjs/toolkit';

const initialState: any = [];

const todoReducer = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    //here we will write our reducer
    //Adding todos
    addTodos: (state, action) => {
      state.push(action.payload);
      return state;
    },
  },
});

export const { addTodos } = todoReducer.actions;
export default todoReducer.reducer;
