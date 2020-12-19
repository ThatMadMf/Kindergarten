import {GET_COLLECTION_LIST} from "./types";

const defaultState = {
    collectionList: [],
    selectedCollection: null,
    selectedPhoto: null,
}

export function collectionModule(state = defaultState, action) {
    switch (action.type) {
        case GET_COLLECTION_LIST: {
            return {
                ...state,
                collectionList: action.items,
            }
        }

        default:
            return state;
    }
}