export const GET_COLLECTION_LIST = 'GET_COLLECTION_LIST';

export function getCollectionListAction(items) {
    return {
        type: GET_COLLECTION_LIST,
        items
    }
}