import { Sortable } from '../../../support/POM/intereactions/sortable';
describe('Cypress Challenge Sortable', () => {
	const sortable = new Sortable();
	const list = sortable.list;
	beforeEach(() => {
		cy.visit('/sortable');
	});

	it('TC1:', () => {
		cy.get(list.demoTabpaneList).should('be.visible');
	});
});
