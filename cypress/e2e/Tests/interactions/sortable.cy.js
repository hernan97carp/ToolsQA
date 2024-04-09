import { Sortable } from '../../../support/POM/intereactions/sortable';
import faker from 'faker';
describe('Cypress Challenge Sortable', () => {
	const sortable = new Sortable();
	const list = sortable.list;
	beforeEach(() => {
		cy.visit('/sortable');
	});

	it('TC1:', () => {
		const elements = [];
		function randomTwoNumbers() {
			let numero1 = faker.datatype.number({ min: 0, max: 5 });
			let numero2 = faker.datatype.number({ min: 0, max: 5 });
			while (numero1 === numero2) {
				numero2 = faker.datatype.number({ min: 0, max: 5 });
			}
			return [numero1, numero2];
		}
		const [aleatoryNumberOne, aleatoryNumberTwo] = randomTwoNumbers();
		cy.get(list.elements)
			.each(($el, index) => {
				if (index <= 6) {
					elements.push($el);
				}
			})
			.then(() => {
				cy.wrap(elements).then(elements => {
					cy.get(elements[aleatoryNumberOne]).trigger('mousedown');
					cy.get(elements[aleatoryNumberTwo]).trigger('mousemove').trigger('mouseup');
				});
			});
	});
});
