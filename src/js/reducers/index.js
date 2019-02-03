import { SORT_ALPHABETICALLY, SORT_BY_PRICE, SORT_BY_RATING } from '../constants/action-types';
import createNewState from '../utils/name_and_rating_sort';
import sortHotelByPrice from '../utils/sort_by_price';
import { sampleText } from '../utils/dummy_text';
import { formatDate } from '../utils/format_date';


const initialState = {
    hotels: [
        {
            name: 'Aguamarina Golf Hotel and Apart-ments',
            city: 'Costa Adeje',
            country: 'Tenerife',
            stars: 4,
            date: formatDate(new Date('03-7-2014')),
            days: 7,
            from: 'Manchester',
            adults: 2,
            children: 2,
            infants: 0,
            price: '499.99',
            image:  require( '../../assets/image_02.png'),
            description: sampleText(),
            id: 'golf-hotel'
        },
        {
            name: 'Costa Adeje Gran Hotel',
            city: 'Costa Adeje',
            country: 'Tenerife',
            stars: 5,
            date: formatDate(new Date('03-07-2014')),
            days: 7,
            from: 'East Midlands',
            adults: 2,
            children: 2,
            infants: 1,
            price: '1,136.50',
            image: require( '../../assets/image_01.png'),
            description: sampleText(),
            id: 'gran-hotel'
        },
        {
            name: 'Luna park II',
            city: 'Costa Adeje',
            country: 'Tenerife',
            days: 7,
            from: 'Liverpool',
            stars: 3,
            date: formatDate(new Date('2014-05-27')),
            adults: 2,
            children: 1,
            infants: 0,
            price: '696.80',
            image: require( '../../assets/image_03.png'),
            description: sampleText(),
            id: 'luna-park'
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