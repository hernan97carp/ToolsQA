const { Droppable } = require('../../../support/POM/intereactions/droppable.Page');

describe('Cypress Challenge - Droppable', () => {
	const droppable = new Droppable();
	const droppableBoxSimple = droppable.droppableBoxSimple.droppableBox;
	beforeEach('Precondition: Visit the url', () => {
		cy.visit('/droppable');
	});
	it('TC1: Drag and drop the item into the DropHere element box.', () => {
		cy.get(droppableBoxSimple);
	});
});
