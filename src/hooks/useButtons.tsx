import { useKeyPress } from "./useKeyPress";

export const useButtons = () => {

	const upPress = useKeyPress("ArrowUp");
	const downPress = useKeyPress("ArrowDown");
	const rightPress = useKeyPress("ArrowRight");
	const leftPress = useKeyPress("ArrowLeft");
	const enterPress = useKeyPress("Enter");
	const backspace = useKeyPress("Backspace");
	const escape = useKeyPress("Escape");
	const tab = useKeyPress("Tab");
	const number0 = useKeyPress("0");
	const number1 = useKeyPress("1");
	const number2 = useKeyPress("2");
	const number3 = useKeyPress("3");
	const number4 = useKeyPress("4");
	const number5 = useKeyPress("5");
	const number6 = useKeyPress("6");
	const number7 = useKeyPress("7");
	const number8 = useKeyPress("8");
	const number9 = useKeyPress("9");

	return {
		upPress,
		downPress,
		rightPress,
		leftPress,
		enterPress,
		backspace,
		escape,
		tab,
		number0,
		number1,
		number2,
		number3,
		number4,
		number5,
		number6,
		number7,
		number8,
		number9,
	}
}
