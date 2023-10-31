'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { addTodo, removeTodo, toggleComplete, editTodo } from '../store/todoSlice';

const TodoList = () => {
    const dispatch = useDispatch<AppDispatch>();
    const taskList = useSelector((state: RootState) => state.todos);
    const [task, setTask] = useState<string>('');
    const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
    const [editedTaskTitle, setEditedTaskTitle] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setTask(e.target.value);
    };

    const handleAddTask = () => {
        if (task.trim() !== '') {
            const newTask = { id: Date.now(), title: task, completed: false };
            dispatch(addTodo(newTask));
            setTask('');
        }
    };

    const handleDeleteTask = (taskId: number) => {
        dispatch(removeTodo(taskId));
    };

    const handleCompleteTask = (taskId: number) => {
        dispatch(toggleComplete(taskId));
    };

    const startEditingTask = (taskId: number) => {
        const taskToEdit = taskList.find((task) => task.id === taskId);
        if (taskToEdit) {
            setEditingTaskId(taskId);
            setEditedTaskTitle(taskToEdit.title);
        }
    };

    const handleEditTask = (taskId: number) => {
        if (editedTaskTitle.trim() === '') {
            return;
        }
        const updatedTask = { id: taskId, title: editedTaskTitle, completed: false };
        dispatch(editTodo(updatedTask));
        setEditingTaskId(null);
        setEditedTaskTitle('');
    };

    const handleCancelEdit = () => {
        setEditingTaskId(null);
        setEditedTaskTitle('');
    };

    return (
        <div className="container mx-auto p-4">
            <input
                className="border rounded p-2 mb-2 text-lg w-full"
                placeholder="Add something ... 🦔"
                value={task}
                onChange={handleChange}
            />
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4"
                onClick={handleAddTask}
            >
                Add
            </button>

            <ul className="task__list">
                {!!taskList.length &&
                    taskList.map((task) => (
                        <li
                            className="border p-4 mb-4 hover:bg-gray-100 flex items-center justify-between rounded-lg"
                            key={task.id}
                        >
                            <span className="flex items-center">
                                {editingTaskId === task.id ? (
                                    <input
                                        type="text"
                                        value={editedTaskTitle}
                                        onChange={(e) => setEditedTaskTitle(e.target.value)}
                                    />
                                ) : (
                                    <Link
                                        href={`/todo/${task.id}`}
                                        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                                    >
                                        <span>{task.title}</span>
                                    </Link>
                                )}
                            </span>

                            <div className="flex__action">
                                {editingTaskId === task.id ? (
                                    <div>
                                        <button
                                            className="text-blue-500 cursor-pointer hover:text-blue-700 ml-4"
                                            onClick={() => handleEditTask(task.id)}
                                        >
                                            Save
                                        </button>
                                        <button
                                            className="text-red-500 cursor-pointer hover:text-red-700 ml-4"
                                            onClick={handleCancelEdit}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                ) : (
                                    <div>
                                        <span
                                            role="button"
                                            className="text-red-500 cursor-pointer hover:text-red-700 ml-4"
                                            onClick={() => handleDeleteTask(task.id)}
                                        >
                                            ❌
                                        </span>
                                        <span
                                            role="button"
                                            className="text-green-500 cursor-pointer hover:text-green-700 ml-4"
                                            onClick={() => handleCompleteTask(task.id)}
                                        >
                                            ✔
                                        </span>
                                        <span
                                            role="button"
                                            className="text-blue-500 cursor-pointer hover:text-blue-700 ml-4"
                                            onClick={() => startEditingTask(task.id)}
                                        >
                                            Edit
                                        </span>
                                    </div>
                                )}
                            </div>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default TodoList;
