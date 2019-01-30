import { SORT_ALPHABETICALLY, SORT_BY_PRICE, SORT_BY_RATING } from '../constants/action-types';

const initialState = {
    hotels: [
        {
            name: 'Costa Adeje Gran Hotel',
            city: 'Costa Adeje',
            country: 'Tenerife',
            stars: 5,
            date: '03-07-2014',
            days: 7,
            from: 'East Midlands',
            adults: 2,
            children: 2,
            infants: 1,
            price: '1,136.50',
            image: 'NO IMAGE',
            description: '****'
        },
        {
            name: 'Aguamarina Golf Hotel and Apartments',
            city: 'Costa Adeje',
            country: 'Tenerife',
            stars: 4,
            date: '03-7-2014',
            days: 7,
            from: 'Manchester',
            adults: 2,
            children: 2,
            infants: 0,
            price: '499.99',
            image: 'NO IMAGE',
            description: '****'
        },
        {
            name: 'Luna park II',
            city: 'Costa Adeje',
            country: 'Tenerife',
            days: 7,
            from: 'Liverpool',
            stars: 3,
            date: '27-5-2014',
            adults: 2,
            children: 1,
            infants: 0,
            price: '696.80',
            image: 'NO IMAGE',
            description: '****'
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