import { Dragabble } from '../../../support/POM/intereactions/dragabble.Page';
describe('Cypress Challenge Dragabble', () => {
	const dragabble = new Dragabble();
	const dragabbleBoxSimple = dragabble.dragabbleBox;
	beforeEach(() => {
		cy.visit('/dragabble');
	});
	it('TC1: Drag and Drop Box to New Location', () => {
		cy.get(dragabbleBoxSimple)
			.trigger('mousedown', { which: 1, pageX: 600, pageY: 100 })
			.trigger('mousemove', { which: 1, pageX: 600, pageY: 600 })
			.trigger('mouseup');
	});
});
