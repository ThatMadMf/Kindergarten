import {combineReducers} from "redux";
import {articleModule} from "./articles/articles.module";
import {collectionModule} from "./gallery/collections.module";


export const rootReducer = combineReducers({
    articleModule,
    collectionModule,
})
