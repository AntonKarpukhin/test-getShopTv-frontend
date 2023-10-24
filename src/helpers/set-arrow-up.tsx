export const setArrowUp = (cursor: number) => {

	let counter;

	if ([0, 1, 2].includes(cursor)) {
		counter = 13;
	}
	if ([3, 4, 5, 6, 7, 8].includes(cursor)) {
		counter = cursor - 3;
	}
	if ([9].includes(cursor)) {
		counter = 8;
	}
	if ([11].includes(cursor)) {
		counter = 6;
	}
	if ([12, 13, 14].includes(cursor)) {
		counter = cursor - 1;
	}

	return counter

}