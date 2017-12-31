const myList = ['apples', 'bananas', 'oranges', 'pears'];
const roommatesList = ['apples', 'cheese', 'crackers', 'oranges'];

function comboLists(myArray, roommatesArray){
	let returnRef = [];

	for (let i = 0; i < myArray.length; i++){
		for (let j = 0; j < roommatesArray.length; j++){
			if (myArray[i] === roommatesArray[j]){
				returnRef.push(myArray[i]);
			}
		}
	}

	return returnRef;
}


console.log(comboLists(myList, roommatesList));