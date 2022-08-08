describe("Calculator", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000");
	});

	it("should have working number buttons", () => {
		cy.get("#number2").click();
		cy.get(".display").should("contain", "2");
	});

	it("should display every number", () => {
		cy.get("#number1").click();
		cy.get("#number2").click();
		cy.get("#number3").click();
		cy.get("#number4").click();
		cy.get("#number5").click();
		cy.get("#number6").click();
		cy.get("#number7").click();
		cy.get("#number8").click();
		cy.get("#number9").click();
		cy.get("#number0").click();
		cy.get(".display").should("contain", "1234567890");
	});

	it("should chain operators together", () => {
		cy.get("#number1").click();
		cy.get("#operator_add").click();
		cy.get("#number3").click();
		cy.get("#operator-subtract").click();
		cy.get("#number2").click();
		cy.get("#operator-multiply").click();
		cy.get("#number4").click();
		cy.get("#operator-divide").click();
		cy.get("#number2").click();
		cy.get("#operator-equals").click();
		cy.get(".display").should("contain", "4");
	});
	it("should handle negative numbers", () => {
		cy.get("#number3").click();
		cy.get("#operator-subtract").click();
		cy.get("#number9").click();
		cy.get("#operator-equals").click();
		cy.get(".display").should("contain", "-6");
	});
	it("should handle decimal numbers", () => {
		cy.get("#number3").click();
		cy.get("#decimal").click();
		cy.get("#number5").click();
		cy.get("#operator-subtract").click();
		cy.get("#number1").click();
		cy.get("#operator-equals").click();
		cy.get(".display").should("contain", "2.5");
	});
	it("should handle very large numbers", () => {
		cy.get("#number9").click();
		cy.get("#number8").click();
		cy.get("#number7").click();
		cy.get("#number6").click();
		cy.get("#number5").click();
		cy.get("#number4").click();
		cy.get("#number3").click();
		cy.get("#number2").click();
		cy.get("#number1").click();
		cy.get("#number0").click();
		cy.get("#operator-multiply").click();
		cy.get("#number9").click();
		cy.get("#number8").click();
		cy.get("#number7").click();
		cy.get("#number6").click();
		cy.get("#number5").click();
		cy.get("#number4").click();
		cy.get("#number3").click();
		cy.get("#number2").click();
		cy.get("#number1").click();
		cy.get("#number0").click();
		cy.get("#operator-multiply").click();
		cy.get("#number9").click();
		cy.get("#number8").click();
		cy.get("#number7").click();
		cy.get("#number6").click();
		cy.get("#number5").click();
		cy.get("#number4").click();
		cy.get("#number3").click();
		cy.get("#number2").click();
		cy.get("#number1").click();
		cy.get("#number0").click();

		cy.get("#operator-equals").click();
		cy.get(".display").should("contain", "9.634183286934956e+29");
	});
	it("should handle divide by zero", () => {
		cy.get("#number3").click();
		cy.get("#operator-divide").click();
		cy.get("#number0").click();
		cy.get("#operator-equals").click();
		cy.get(".display").should("contain", "ERROR");
	});
});
