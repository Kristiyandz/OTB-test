const initialState = {
    hotels: [
        {
            name: 'Costa Adeje Gran Hotel',
            city: 'Costa Adeje',
            country: 'Tenerife',
            stars: 3,
            date: '03-07-2014',
            days: 7,
            from: 'East Midlands',
            adults: 2,
            children: 2,
            infants: 1,
            price: '1,136.50',
            description: '****'
            
        },
        {
            name: 'Aguamarina Golf Hotel and Apartments',
            city: 'Costa Adeje',
            country: 'Tenerife',
            stars: 1,
            date: '04-07-2014',
            days: 7,
            from: 'Manchester',
            adults: 2,
            children: 2,
            infants: 0,
            price: '499.99',
            description: '****'
        },
        {
            name: 'Luna park II',
            city: 'Costa Adeje',
            country: 'Tenerife',
            days: 7,
            from: 'Liverpool',
            stars: 5,
            date: '05-07-2014',
            adults: 2,
            children: 1,
            infants: 0,
            price: '696.80',
            description: '****'
            
        }
    ]
};
console.log(initialState.hotels[0])
// let byName = initialState.hotels.sort((a,b) => {
//    if(a.name < b.name) { return -1; }
//     if(a.name > b.name) { return 1; }
//     return 0;
// });

// let byRating = initialState.hotels.sort((a, b)=>{
//    if(a.stars < b.stars) { return 1; }
//     if(a.stars > b.stars) { return -1; }
//     return 0;
// })

// let byDate = initialState.hotels.sort((a, b) => {
//   return new Date(a.date).getTime() - new Date(b.date).getTime() 
// });



// console.log(byName);
// console.log('****************************');
// console.log(byRating);
// console.log('****************************');
// console.log(byDate);

let action = "SORT_BY_RATING"
let action2 = "SORT_ALPHABETICALLY"
let action3 = "SORT_BY_PRICE"
let final = createNewState(initialState, action3)
console.log('###############################################');
// console.log(initialState.hotels[0])
// console.log(final.hotels[0])

function handlePriceSort(prevState) {

  let key = 'price';
    let result = null;
    return new Promise((resolve, reject)=> {
       result= Object.assign({}, {
        hotels: prevState.hotels.sort((a, b) => {
         
            if(parseFloat(a[`${key}`]).toFixed(2) < parseFloat(b[`${key}`]).toFixed(2)) { 
                return 1;
             }
              if(parseFloat(a[`${key}`]).toFixed(2) > parseFloat(b[`${key}`]).toFixed(2)) { return -1; }
              return 0;
        })
      });
      resolve(result)
    })

}

function createNewState(prevState, action) {

  const operators = {
    '<': (a, b) => a < b,
    '>': (a, b) => a > b,
    '+': (a ,b) => a + b,
    '-': (a ,b) => a - b
  };

  let positionOne = 0;
  let positionTwo = 0;

  let firstLogicalOperator = null;
  let secondLogicalOperator = null;
  let thirdLogicalOperator = null;

  let mathematicalOperator = null;

  let key = null;

  if(action === 'SORT_BY_RATING') {
      firstLogicalOperator = operators['<'];
      secondLogicalOperator = operators['>'];
      positionOne = 1;
      positionTwo = -1;
      key = 'stars'
  } else if(action === 'SORT_ALPHABETICALLY') {
      firstLogicalOperator = operators['<'];
      secondLogicalOperator = operators['>'];
      positionOne = -1;
      positionTwo = 1;
      key = 'name'
  }

  return Object.assign({}, {
      hotels: prevState.hotels.sort((a, b) => {
        if(firstLogicalOperator(a[`${key}`],b[`${key}`])) {
            return positionOne;
          } else if(secondLogicalOperator(a[`${key}`],b[`${key}`])) {
            return positionTwo;
          }
        return 0;
      })
  });
};


let str = '1,399.23'
let num = parseFloat(str.replace(/,/g, ''));
console.log(num);
console.log(typeof num);