var numbers = [1, 1, 2, 3, 4, 4];

function unique(array) {
  var rest = array.splice(1);
  var newArray = rest.reduce(function(state, elem){
  	var clone = Object.assign([], state);
    
    if(clone.find((element) => {return element === elem;})){
    	return clone;
    }
    else {
      clone.push(elem);
      return clone;
    }
    
  },array.slice(0,1));
  
  return newArray;
}

var uniqueNumbers = unique(numbers);
uniqueNumbers;
