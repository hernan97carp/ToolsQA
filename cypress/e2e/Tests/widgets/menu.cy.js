import { MenuPage } from '../../../support/POM/widgets/menu.Page';
describe('Cypress Challenge Menu', () => {
	const menuPage = new MenuPage();
	beforeEach(() => {
		cy.visit('/menu');
	});
	it('TC1: Verify the menu sub items', () => {
		//menuPage.returnSubItems().should('include.text', 'Sub Item');
		menuPage.returnSubItems(0).should('include.text', 'Sub Item');
		menuPage.returnSubItems(1).should('include.text', 'Sub Item');
	});
	it.only('TC2: Verify the menu sub sub lists', () => {
		//menuPage.returnSubSubList().should('include.text','Sub Sub Item 1');
		menuPage.returnSubSubList(0).then(res => {
			expect(res).is.eq('Sub Sub Item 1');
		});
		menuPage.returnSubSubList(1).then(res => {
			expect(res).is.eq('Sub Sub Item 2');
		});
	});
});
