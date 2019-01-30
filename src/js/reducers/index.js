import { SORT_ALPHABETICALLY, SORT_BY_PRICE, SORT_BY_RATING } from '../constants/action-types';

const initialState = {
    hotels: [
        {
            name: 'TEST01',
            city: 'Vidin',
            country: 'Bulgaria',
            stars: 5,
            date: '23-11-1991',
            price: 145.00,
            image: 'NO IMAGE',
            description: 'BEST'
        },
        {
            name: 'TEST02',
            city: 'PLD',
            country: 'GREECE',
            stars: 3,
            date: '23-03-2019',
            price: 1456.00,
            image: 'NO IMAGE',
            description: 'BOO'
        },
        {
            name: 'TEST03',
            city: 'Sofia',
            country: 'GERMANY',
            stars: 2,
            date: '1-01-218',
            price: 2000,
            image: 'NO IMAGE',
            description: 'LOL'
        }
    ]
};

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case SORT_ALPHABETICALLY: 
            console.log('alphabetically');
            //logic
            break;
        case SORT_BY_RATING:
            console.log('rating');
            //logic
            break;
        case SORT_BY_PRICE:
            console.log('price');
            //logic
            break;
        default:
            return state;
    };

    return state;

};

export default rootReducer;