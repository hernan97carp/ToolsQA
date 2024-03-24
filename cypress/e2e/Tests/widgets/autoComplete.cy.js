describe('Cypress Challenge - Widgets', () => {
	it('Auto-Complete - TC1: Should autocomplete values in text input', function () {
		cy.visit('/auto-complete');
		const availableColors = ['Red', 'Blue', 'White', 'Yellow', 'Black', 'Voilet'];
		cy.step('🟢 #1: Creating Function to select random color');
		function selectRandomColor() {
			const givenRandomOption = Cypress._.random(availableColors.length - 1);
			const givenColor = availableColors[givenRandomOption];
			availableColors.splice(givenRandomOption, 1);
			return givenColor;
		}
		cy.step('🟡 #2: Select a single Color with Enter');
		const givenColor = selectRandomColor();
		cy.get('#autoCompleteMultipleInput').type(`${givenColor}{enter}`);
		cy.getAutoCompletedValues().then(values => expect(values).includes(givenColor));

		cy.step('🔵 #3: Select a multiple Colors with Enter');
		const givenColor2 = selectRandomColor();
		const givenColor3 = selectRandomColor();
		const givenColor4 = selectRandomColor();

		cy.get('#autoCompleteMultipleInput').type(`${givenColor2}{enter}`);
		cy.get('#autoCompleteMultipleInput').type(`${givenColor3}{enter}`);
		cy.get('#autoCompleteMultipleInput').type(`${givenColor4}{enter}`);
		cy.getAutoCompletedValues().then(values => expect(values).deep.equal([givenColor, givenColor2, givenColor3, givenColor4]));

		cy.step('🔵 #4: Select One Color by clicking');
		cy.get('#autoCompleteSingleContainer').type('E');
		cy.get('.auto-complete__menu [id*=react-select]').as('displayedColors');

		cy.get('@displayedColors')
			.its('length')
			.then(colorCount => {
				const index = Cypress._.random(colorCount - 1);
				cy.get('@displayedColors').eq(index).as('selectColor');
			});
		//another way
		cy.get('@selectColor')
			.click()
			.invoke('text')
			.then(singleColorName => {
				cy.get('.auto-complete__single-value').should('have.text', singleColorName);
			});
	});
});
