import {GET_COLLECTION, GET_COLLECTION_LIST} from "./types";

const defaultState = {
    collectionList: [],
    collection: null,
    photo: null,
}

export function collectionModule(state = defaultState, action) {
    switch (action.type) {
        case GET_COLLECTION_LIST: {
            return {
                ...state,
                collectionList: action.items,
            }
        }

        case GET_COLLECTION: {
            return {
                ...state,
                collection: action.item,
            }
        }

        default:
            return state;
    }
}