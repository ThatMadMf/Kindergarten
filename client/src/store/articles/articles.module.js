import {GET_ARTICLE_LIST} from "./types";

const defaultState = {
    articleList: [],
}

export function articleModule(state = defaultState, action) {
    switch (action.type) {
        case GET_ARTICLE_LIST: {
            return {
                ...state,
                articleList: action.items
            }
        }

        default:
            return state;
    }
}
