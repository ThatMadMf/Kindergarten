export const GET_COLLECTION_LIST = 'GET_COLLECTION_LIST';
export const GET_COLLECTION = 'GET_COLLECTION';

export function getCollectionListAction(items) {
    return {
        type: GET_COLLECTION_LIST,
        items
    }
}

export function getCollectionAction(item) {
    return {
        type: GET_COLLECTION,
        item
    }
}