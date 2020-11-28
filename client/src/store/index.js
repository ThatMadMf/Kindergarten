import {combineReducers} from "redux";
import {articleModule} from "./articles/articles.module";

export const rootReducer = combineReducers({
    articleModule: articleModule
})
