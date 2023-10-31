import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Tasks } from '../interface';

const initialState: Tasks[] = JSON.parse(localStorage.getItem('tasks') || '[]');

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<Tasks>) => {
            state.unshift(action.payload);
            localStorage.setItem('tasks', JSON.stringify(state));
        },
        toggleComplete: (state, action: PayloadAction<number>) => {
            const task = state.find((task) => task.id === action.payload);
            if (task) {
                task.completed = !task.completed;
            }
            localStorage.setItem('tasks', JSON.stringify(state));
        },
        removeTodo: (state, action: PayloadAction<number>) => {
            const updatedState = state.filter((todo) => todo.id !== action.payload);
            localStorage.setItem('tasks', JSON.stringify(updatedState));
            return updatedState;
        },
        editTodo: (state, action: PayloadAction<Tasks>) => {
            const { id, title } = action.payload;
            const taskToEdit = state.find((task) => task.id === id);
            if (taskToEdit) {
                taskToEdit.title = title;
                taskToEdit.completed = false;
                localStorage.setItem('tasks', JSON.stringify(state));
            }
        },
    },
});

export const { addTodo, toggleComplete, removeTodo, editTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
