import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "10001",
    text: "Aaj muje peene ki tamana hai...",
    isEdit: false,
  },
  {
    id: "10002",
    text: "To fir aa ja mere pass",
    isEdit: false,
  },
  {
    id: "10003",
    text: "Naaka mukka na mukka na mukka",
    isEdit: false,
  },
];

const todoReducer = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload.text,
        isEdit: false,
      };
      state.push(todo);
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    isEditTodo: (state, action) => {
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, isEdit: true }
          : { ...todo, isEdit: false }
      );
    },
    updateTodo: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      if (index !== -1) {
        state[index].text = action.payload.text;
        state[index].isEdit = false;
      }
    },
  },
});

export const { addTodo, removeTodo, isEditTodo, updateTodo } =
  todoReducer.actions;

export default todoReducer.reducer;
