import {ADD_TASK, FILTER_TASK, REMOVE_TALL_TASK, REMOVE_TASK} from "~/actions/task-actions/types";

const INITIAL_STATE = {

};

export default (state = INITIAL_STATE, {type, payload}: { type: string, payload: string }) => {

    switch (type) {
        case ADD_TASK:
            return {...state};
        case REMOVE_TASK:
            return {...state};
        case REMOVE_TALL_TASK:
            return {...state};
        case FILTER_TASK:
            return {...state};
        default:
            return state;
    }
};
