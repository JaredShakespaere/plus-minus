function plusMinus(arr) {
    let posInt = 0;
	let negInt = 0;
    let zero = 0;
	let total = arr.length;
    
    for (let i = 0; i < arr.length; i++) {
			if (arr[i] < 0) {
				negInt++;
			} else if (arr[i] > 0) {
				posInt++;
			} else if (arr[i] === 0) {
				zero++;
			}
		}
}
