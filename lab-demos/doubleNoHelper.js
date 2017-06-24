const numbers = [1, 2, 3];

function double(numbers) {
  let response = [];
  function doTheWork(numbers) {
    const [ number, ...rest ] = numbers;
    if( number ) {
      response.push(number*2);
    	return rest;
    }
    return [];
  }
  let tmp = doTheWork(numbers);
  while(tmp.length > 0)
  {
    tmp = doTheWork(tmp);
  }
  return response;
}

double(numbers);
