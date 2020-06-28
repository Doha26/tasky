import {
    ADD_CONTENT,
    EDIT_CONTENT,
    FILTER_CONTENT, LOADING,
    REMOVE_ALL_CONTENT,
    REMOVE_CONTENT
} from "~/actions/content-actions/types";
import {ContentType} from "~/utils/model/Content";
import {ContentReducer} from "~/utils/model/ContentReducer";

const INITIAL_STATE: ContentReducer = {
    contents: [],
    loading: false
};

// This method allows to define the NextId for the newly added content
const nextId = (contents: Array<ContentType>) => {
    return contents.reduce((maxId, content: ContentType) => {
        return Math.max(content.id ? content.id : 0, maxId)
    }, -1) + 1
};

export default (state = INITIAL_STATE, {type, payload}: { type: string, payload: any }) => {
    switch (type) {
        case LOADING:
            return {...state, loading: true};
        case ADD_CONTENT:
            return {
                ...state,
                loading: false,
                contents: [
                    ...state.contents,
                    {
                        id: nextId(state.contents),
                        name: payload.name,
                        type: payload.type,
                        delay: payload.delay,
                    }
                ]
            };
        case EDIT_CONTENT:
            return {
                ...state,
                loading: false,
                contents: state.contents.map((content: ContentType) => {
                    return content.id === payload.id ?
                        {
                            ...content,
                            name: payload.name,
                            type: payload.type,
                            delay: payload.delay
                        } : content
                })
            };
        case REMOVE_CONTENT:
            return {
                ...state,
                loading: false,
                contents: state.contents.filter((content: ContentType) => content.id !== payload)
            };
        case REMOVE_ALL_CONTENT:
            return {...state, loading: false, contents: []};
        case FILTER_CONTENT:
            if (payload.flag == "UP") {
                if (state.contents.length == 1) {
                    return {...state, loading: false, contents: state.contents}
                }else{

                }
            } else {
                if (state.contents.length == 1) {
                    return {...state, loading: false, contents: state.contents}
                }else{

                }
            }
            return {
                ...state,
                loading: false,

            };
        default:
            return state;
    }
};
