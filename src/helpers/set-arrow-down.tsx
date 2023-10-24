export const setArrowDown = ( cursor: number) => {

	let counter;

	if ([0, 1, 2, 3, 4, 5].includes(cursor)) {
		counter = cursor + 3;
	}
	if ([6, 7].includes(cursor)) {
		counter = 11;
	}
	if ([8].includes(cursor)) {
		counter = 9;
	}
	if ([9].includes(cursor)) {
		counter = 12;
	}
	if ([11, 12].includes(cursor)) {
		counter = cursor + 1;
	}
	if ([13].includes(cursor)) {
		counter = 0;
	}

	return counter
}