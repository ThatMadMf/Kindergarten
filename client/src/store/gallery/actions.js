import {ApiService} from "../../services/ApiService";
import {GET_COLLECTION_LIST} from "./types";

export const fetchCollectionList = () => {
    return async (dispatch) => {
        const response = await ApiService.get('collections');
        return dispatch({type: GET_COLLECTION_LIST, items: response.data});
    }
}