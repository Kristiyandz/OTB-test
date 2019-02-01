import { SORT_ALPHABETICALLY, SORT_BY_RATING } from '../constants/action-types';

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
    
    let key = null;
  
    if(action === SORT_BY_RATING) {

        firstLogicalOperator = operators['<'];
        secondLogicalOperator = operators['>'];
        positionOne = 1;
        positionTwo = -1;
        key = 'stars';

    } else if(action === SORT_ALPHABETICALLY) {

        firstLogicalOperator = operators['<'];
        secondLogicalOperator = operators['>'];
        positionOne = -1;
        positionTwo = 1;
        key = 'name';

    };
  
    return prevState.hotels.sort((a, b) => {
        if(firstLogicalOperator(a[`${key}`],b[`${key}`])) {
            return positionOne;
        } else if(secondLogicalOperator(a[`${key}`],b[`${key}`])) {
            return positionTwo;
        }
        return 0;
    })

  };

  export default createNewState;