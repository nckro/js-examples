function addNumbers(...numbers) {
 	return numbers.reduce((sum, number) => sum + number, 0);
}

addNumbers(1,2,3,4,5);
