import { SORT_ALPHABETICALLY, SORT_BY_PRICE, SORT_BY_RATING } from '../constants/action-types';
import createNewState from '../utils/name_and_rating_sort';
import sortHotelByPrice from '../utils/sort_by_price';


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
            image: require( '../../assets/image_01.png'),
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
            image:  require( '../../assets/image_02.png'),
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
            image: require( '../../assets/image_03.png'),
            description: '****'
        }
    ]
};

function rootReducer(state = initialState, action) {

    switch(action.type) {
        case SORT_ALPHABETICALLY:
            return {
                ...state,
                hotels: [...createNewState(state, action.type)]
            }
            break;
        case SORT_BY_RATING:
            return {
                ...state,
                hotels: [...createNewState(state, action.type)]
            }
            break;
        case SORT_BY_PRICE:
            return {
                ...state,
                hotels: [...sortHotelByPrice(state)]
            };
            break;
        default:
            return state;
    };

};

export default rootReducer;