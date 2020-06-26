import {
    ADD_TASK, EDIT_TASK, FILTER_TASK, REMOVE_TALL_TASK, REMOVE_TASK,
} from './types';
import {TaskType} from "~/utils/data/Task";

export const addTask = (task: TaskType) => ({type: ADD_TASK, payload: task});

export const removeTask = (id: number) => ({type: REMOVE_TASK, payload: id});

export const editTask = (task: TaskType) => ({type: EDIT_TASK, payload: task});

export const deleteAllTask = () => ({type: REMOVE_TALL_TASK, payload: null});

export const filterTask = (flag: string) => ({type: FILTER_TASK, payload: flag});
