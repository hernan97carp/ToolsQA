import { Sortable } from '../../../support/POM/intereactions/sortable.Page';
describe('Cypress Challenge Sortable', () => {
	const sortable = new Sortable();
	const list = sortable.list;
	beforeEach(() => {
		cy.visit('/sortable');
	});

	it('TC1: Verify Element Relocation', () => {
		cy.twoNumbersRandom().then(random => {
			const numberOne = random[0]; // Accede al primer número
			const numberTwo = random[1]; // Accede al segundo número
			const elements = [];
			let nameOfElement = [];

			cy.get(list.elements)
				.each(($el, index) => {
					if (index <= 6) {
						elements.push($el);
						nameOfElement.push($el.text());
					}
				})
				.then(() => {
					cy.wrap(elements).then(elements => {
						cy.step(`The ${nameOfElement[numberOne]} element was moved`);
						cy.get(elements[numberOne]).trigger('mousedown');
						cy.step(`To the position of the element ${nameOfElement[numberTwo]}`);
						cy.get(elements[numberTwo]).trigger('mousemove').trigger('mouseup');
					});
				});
		});
	});
});
