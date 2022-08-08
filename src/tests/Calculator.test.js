import React from "react";
import Calculator from "../containers/Calculator";
import { render, fireEvent } from "@testing-library/react";

describe("Calculator", () => {
	let container;
	beforeEach(() => {
		container = render(<Calculator />);
	});

	it("should change running total on number enter", () => {
		const button4 = container.getByTestId("number4");
		const runningTotal = container.getByTestId("running-total");
		fireEvent.click(button4);
		expect(runningTotal.textContent).toEqual("4");
	});

	// add 1 to 4 and get 5
	// calculator.subtract() subtract 4 from 7 and get 3
	// calculator.multiply() - multiply 3 by 5 and get 15
	// calculator.divide() - divide 21 by 7 and get 3
	// calculator.numberClick() - concatenate multiple number button clicks
	// calculator.operatorClick() - chain multiple operations together
	// calculator.clearClick() - clear the running total without affecting the calculation

	it("should add 1 to 4 and get 5", () => {
		const button1 = container.getByTestId("number1");
		const buttonAdd = container.getByTestId("operator-add");
		const button4 = container.getByTestId("number4");
		const buttonEquals = container.getByTestId("operator-equals");
		const runningTotal = container.getByTestId("running-total");
		fireEvent.click(button1);
		fireEvent.click(buttonAdd);
		fireEvent.click(button4);
		fireEvent.click(buttonEquals);
		expect(runningTotal.textContent).toEqual("5");
	});
	it("should subtract 4 from 7 and get 3", () => {
		const button7 = container.getByTestId("number7");
		const buttonSubtract = container.getByTestId("operator-subtract");
		const button4 = container.getByTestId("number4");
		const buttonEquals = container.getByTestId("operator-equals");
		const runningTotal = container.getByTestId("running-total");
		fireEvent.click(button7);
		fireEvent.click(buttonSubtract);
		fireEvent.click(button4);
		fireEvent.click(buttonEquals);
		expect(runningTotal.textContent).toEqual("3");
	});
	it("should multiply 3 by 5 and get 15", () => {
		const button3 = container.getByTestId("number3");
		const buttonMultiply = container.getByTestId("operator-multiply");
		const button5 = container.getByTestId("number5");
		const buttonEquals = container.getByTestId("operator-equals");
		const runningTotal = container.getByTestId("running-total");
		fireEvent.click(button3);
		fireEvent.click(buttonMultiply);
		fireEvent.click(button5);
		fireEvent.click(buttonEquals);
		expect(runningTotal.textContent).toEqual("15");
	});
	it("should divide 21 by 7 and give 3", () => {
		const button2 = container.getByTestId("number2");
		const button1 = container.getByTestId("number1");
		const button7 = container.getByTestId("number7");
		const buttonDivide = container.getByTestId("operator-divide");
		const buttonEquals = container.getByTestId("operator-equals");
		const runningTotal = container.getByTestId("running-total");
		fireEvent.click(button2);
		fireEvent.click(button1);
		fireEvent.click(buttonDivide);
		fireEvent.click(button7);
		fireEvent.click(buttonEquals);
		expect(runningTotal.textContent).toEqual("3");
	});
	it("should concatenate multiple number button clicks", () => {
		const button2 = container.getByTestId("number2");
		const button1 = container.getByTestId("number1");
		const button7 = container.getByTestId("number7");
		const runningTotal = container.getByTestId("running-total");
		fireEvent.click(button2);
		fireEvent.click(button1);
		fireEvent.click(button7);
		expect(runningTotal.textContent).toEqual("217");
	});
	it("should chain multiple operations together", () => {
		const button1 = container.getByTestId("number1");
		const buttonAdd = container.getByTestId("operator-add");
		const button4 = container.getByTestId("number4");
		const buttonSubtract = container.getByTestId("operator-subtract");
		const button2 = container.getByTestId("number2");
		const buttonEquals = container.getByTestId("operator-equals");
		const runningTotal = container.getByTestId("running-total");
		fireEvent.click(button1);
		fireEvent.click(buttonAdd);
		fireEvent.click(button4);
		fireEvent.click(buttonSubtract);
		fireEvent.click(button2);
		fireEvent.click(buttonEquals);
		expect(runningTotal.textContent).toEqual("3");
	});
	it("should clear click", () => {
		const button2 = container.getByTestId("number2");
		const buttonMultiply = container.getByTestId("operator-multiply");
		const button3 = container.getByTestId("number3");
		const button5 = container.getByTestId("number5");
		const clear = container.getByTestId("clear");

		const buttonEquals = container.getByTestId("operator-equals");
		const runningTotal = container.getByTestId("running-total");
		fireEvent.click(button2);
		fireEvent.click(buttonMultiply);
		fireEvent.click(button3);
		fireEvent.click(buttonMultiply);
		fireEvent.click(button5);
		fireEvent.click(clear);
		fireEvent.click(button2);
		fireEvent.click(buttonEquals);
		expect(runningTotal.textContent).toEqual("12");
	});
});
