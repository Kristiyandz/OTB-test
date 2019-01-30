import { SORT_ALPHABETICALLY, SORT_BY_PRICE, SORT_BY_RATING } from '../constants/action-types';


export function sortAlphabetically(){
    console.log('ALPHABETICAL ACTION...');
    return function(dispatch) {
        dispatch({
            type: SORT_ALPHABETICALLY,
            payload: {}
        });
    }
};

export function sortByPrice(){
    console.log('PRICE SORTING...');
    return function(dispatch) {
        dispatch({
            type: SORT_BY_PRICE,
            payload: {}
        });
    }
};

export function sortByRating(){
    console.log('RATING SORTING...');
    return function(dispatch) {
        dispatch({
            type: SORT_BY_RATING,
            payload: {}
        });
    }
};