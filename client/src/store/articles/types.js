export const GET_ARTICLE_LIST = 'GET_ARTICLE_LIST';

export function getArticleListAction(items) {
    return {
        type: GET_ARTICLE_LIST,
        items
    }
}