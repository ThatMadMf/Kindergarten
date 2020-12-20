import {ApiService} from "../../services/ApiService";
import {GET_COLLECTION, GET_COLLECTION_LIST} from "./types";

export const fetchCollectionList = () => {
    return async (dispatch) => {
        const response = await ApiService.get('collections');
        return dispatch({type: GET_COLLECTION_LIST, items: response.data});
    }
}

export const fetchCollection = (id) => {
    return async (dispatch) => {
        const response = await ApiService.get(`collections/${id}`);
        return dispatch({type: GET_COLLECTION, item: response.data});
    }
}