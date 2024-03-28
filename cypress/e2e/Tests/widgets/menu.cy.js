const { menuItems } = require('../../../support/POM/widgets/menu.Page');
const { mainItemOne, mainItemTwo, mainItemThree } = menuItems;
describe('Cypress Challenge Menu', () => {
	beforeEach(() => {
		cy.visit('/menu');
	});

	// -- Start: Cypress Tests --
	it('TC1: Ensure that the menu items change their background appearance when the mouse hovers over them, both in the main menu and its sub-items', function () {
		//mainItemOne.firstMainItem().eq(0).trigger('mouseover').as('mainItemOne');
		//mainItemTwo.SecondMainItem().eq(1).trigger('mouseover').as('mainItemTwo');
		//mainItemTwo.secondMainFirstSubItem().eq(1).as('firstSubItem');
		cy.get('a[href="#"]').eq(1).as('reference');
		cy.get('@reference', { timeout: 10000 }).trigger('mouseover');
		g;

		//cy.get('@mainItemOne').contains('Main Item 1');
		//cy.get('@mainItemTwo').contains('Main Item 2').click();
		//cy.get('@firstSubItem').contains('Sub Item').click();

		// Write your test case one here
	});
	it('This is your test case two title', () => {
		// Write your test case two here
	});
});
