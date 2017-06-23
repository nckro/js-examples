function reject(array, iteratorFunction) {
	return array.filter(function(element){
  	return iteratorFunction(element)?false:true;
  });	
}

var numbers = [10, 20, 30];
var lessThanFifteen = reject(numbers, function(number){
  return number > 15;
}); 

console.log(lessThanFifteen);
