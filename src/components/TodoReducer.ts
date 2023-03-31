import { createSlice } from '@reduxjs/toolkit';

export interface todoState {
  id: number;
  item: string;
  completed: boolean;
}

let initialState: todoState[] = [];

export const todoReducer = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    //add todo
    addTodo: (state, action) => {
      state.push(action.payload);
      return state;
    },

    //edit todo
    editTodo: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            item: action.payload.item,
          };
        }
        return todo;
      });
    },

    //complete todo
    completeTodo: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    },

    //remove completed todo
    removeCompletedTodo: (state) => {
      return state.filter((todo) => todo.completed === false);
    },

    //remove todo
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const {
  addTodo,
  editTodo,
  completeTodo,
  removeCompletedTodo,
  removeTodo,
} = todoReducer.actions;
export default todoReducer.reducer;
