import {GET_ARTICLE_LIST} from "./types";
import {ApiService} from "../../services/ApiService";

export const fetchArticleList = () => {
    return async (dispatch) => {
        const response = await ApiService.get('articles');
        const parsedArticles = response.data.map(a => {
            return {id: a.id, title: a.title, content: a.content, createdAt: a.createdAt}
        })
        return dispatch({type: GET_ARTICLE_LIST, items: parsedArticles});
    }
}
