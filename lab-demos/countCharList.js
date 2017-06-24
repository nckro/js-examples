function countCharsFromList(source, charList) {
  function bingoChar(element){
    return charList.find((character) => { return character === element });
	}
  return source.split("").reduce(function(store, character){
  	if(bingoChar(character)){
    	return store+1;
    }
    else{
    	return store;
    }
  },0);
}

const charList = ['a', 'e', 'i', 'o', 'u'];
const response = countCharsFromList("aaaaaeeeeaaafdfdfsdfsdfsaaaaaa",charList);
response;
