const sortByPrice = (a, b) => a.price - b.price;

function sortHotelByPrice(state) {

    let priceNumbers = state.hotels.map(hotel => {

        let number = null;
        let priceNumber = null;

        if (hotel.price.includes(',')) {
            number = hotel.price.replace(',', '');
        } else {
            number = hotel.price;
        };

        priceNumber = parseFloat(number).toFixed(2);

        hotel.price = parseFloat(priceNumber);
        return hotel;
    });

    let sortedByPrice = priceNumbers.sort(sortByPrice);

    let result = sortedByPrice.map(hotel => {
        hotel.price = hotel.price.toString();
        let priceArray = hotel.price.split('.');
        
        let formattedPrices = priceArray.map(price => {
            if(price.length === 4) {
            let pricePart = price.split('');
            pricePart.splice(1, 0, ',');
            return pricePart.join('');
            }
            return price;
        });

        if(formattedPrices[formattedPrices.length-1].length < 2){
            formattedPrices[formattedPrices.length-1] = formattedPrices[formattedPrices.length-1].concat('0')
        };

        hotel.price = formattedPrices.join('.');
        return hotel;

    });
    return result;
};

export default sortHotelByPrice;