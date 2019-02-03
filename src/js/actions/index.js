import { SORT_ALPHABETICALLY, SORT_BY_PRICE, SORT_BY_RATING } from '../constants/action-types';


export function sortAlphabetically(){
    return function(dispatch) {
        dispatch({
            type: SORT_ALPHABETICALLY,
            payload: {}
        });
    };
};

export function sortByPrice(){
    return function(dispatch) {
        dispatch({
            type: SORT_BY_PRICE,
            payload: {}
        });
    };
};

export function sortByRating(){
    return function(dispatch) {
        dispatch({
            type: SORT_BY_RATING,
            payload: {}
        });
    };
};