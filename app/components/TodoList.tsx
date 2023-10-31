'use client';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import { Tasks } from '../interface';

const initialState: Tasks[] = JSON.parse(localStorage.getItem('task') || '[]');

const TodoList = () => {
    const [task, setTask] = useState<string>('');
    const [taskList, setTaskList] = useState<Tasks[]>(initialState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setTask(e.target.value);
    };

    const handleAddTask = () => {
        const newTaskArr = [{ id: Date.now(), title: task, completed: false }];
        if (task.trim() !== '') {
            setTaskList((prevTaskList) => {
                const prevList = Array.isArray(prevTaskList) ? prevTaskList : [];

                const updatedTaskList = [...newTaskArr, ...prevList];
                localStorage.setItem('task', JSON.stringify(updatedTaskList));
                return updatedTaskList;
            });
            setTask('');
        }
    };

    const handleDeleteTask = (taskId: number) => {
        const removeTask = taskList.filter((task) => task.id !== taskId);
        setTaskList(removeTask);
        localStorage.setItem('task', JSON.stringify(removeTask));
    };

    const handleCompleteTask = (taskId: number) => {
        const completedTask = taskList.find((task) => task.id === taskId);
        if (completedTask) {
            completedTask.completed = !completedTask.completed;
        }
        localStorage.setItem('task', JSON.stringify(taskList));
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
                                <Link
                                    href={`/todo/${task.id}`}
                                    style={{ textDecoration: `${task.completed}` ? 'line-throught' : 'none' }}
                                >
                                    <span>{task.title}</span>
                                </Link>
                            </span>
                            <div className="flex__action">
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
                            </div>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default TodoList;
