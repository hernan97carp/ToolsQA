import { AutoComplete } from '../../../support/POM/widgets/autoComplete.Page';
const autoComplete = new AutoComplete();
const {
	autoCompleteMenu,
	autoCompleteMultipleInput,
	autoCompleteSingleContainer,
	autoCompleteSingleValue,
} = autoComplete.get;
const availableColors = ['Red', 'Blue', 'White', 'Yellow', 'Black', 'Voilet'];

describe('Cypress Challenge - Widgets', () => {
	it('Auto-Complete - TC1: Should autocomplete values in text input', function () {
		cy.visit('/auto-complete');
		cy.step('🟢 #1: Creating Function to select random color');
		function selectRandomColor() {
			const givenRandomOption = Cypress._.random(availableColors.length - 1);
			const givenColor = availableColors[givenRandomOption];
			availableColors.splice(givenRandomOption, 1);
			return givenColor;
		}
		cy.step('🟡 #2: Select a single Color with Enter');
		const givenColor = selectRandomColor();
		cy.get(autoCompleteMultipleInput).type(`${givenColor}{enter}`);
		cy.getAutoCompletedValues().then(values => expect(values).includes(givenColor));

		cy.step('🔵 #3: Select a multiple Colors with Enter');
		const givenColor2 = selectRandomColor();
		const givenColor3 = selectRandomColor();
		const givenColor4 = selectRandomColor();

		cy.get(autoCompleteMultipleInput).type(`${givenColor2}{enter}`);
		cy.get(autoCompleteMultipleInput).type(`${givenColor3}{enter}`);
		cy.get(autoCompleteMultipleInput).type(`${givenColor4}{enter}`);
		cy.getAutoCompletedValues().then(values =>
			expect(values).deep.equal([givenColor, givenColor2, givenColor3, givenColor4])
		);

		cy.step('🔵 #4: Select One Color by clicking');
		cy.get(autoCompleteSingleContainer).type('E');
		cy.get(autoCompleteMenu).as('displayedColors');

		cy.get('@displayedColors')
			.its('length')
			.then(colorCount => {
				const index = Cypress._.random(colorCount - 1);
				cy.get('@displayedColors').eq(index).as('selectColor');
			});
		cy.step('#5: select single color name');
		cy.get('@selectColor')
			.click()
			.invoke('text')
			.then(singleColorName => {
				cy.get(autoCompleteSingleValue).should('have.text', singleColorName);
			});
	});
});
