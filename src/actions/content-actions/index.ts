import {
    ADD_CONTENT, EDIT_CONTENT, FILTER_CONTENT, LOADING, REMOVE_ALL_CONTENT, REMOVE_CONTENT,
} from './types';
import {ContentType} from "~/utils/model/Content";

export const processing = () => ({type: LOADING});

export const addContent = (content: ContentType) => ({type: ADD_CONTENT, payload: content});

export const removeContent = (id: number | undefined) => ({type: REMOVE_CONTENT, payload: id});

export const updateContent = (content: ContentType) => ({type: EDIT_CONTENT, payload: content});

export const removeAllContent = () => ({type: REMOVE_ALL_CONTENT, payload: null});

export const filterContent = (payload:any) => ({type: FILTER_CONTENT, payload: payload});
