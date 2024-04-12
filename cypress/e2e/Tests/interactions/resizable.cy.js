const faker = require('faker');
import { Resizable } from '../../../support/POM/intereactions/resizable.Page';
describe('Cypress Challenge', function () {
	const resizable = new Resizable();
	const resizableBoxWithRestriction = resizable.resizableBoxWithRestriction;
	beforeEach(() => {
		cy.visit('/resizable');
	});

	it('TC1: Verify max width and height of the resizable box', function () {
		cy.get(resizableBoxWithRestriction)
			.its('0.style')
			.then(style => {
				style.height = '300px';
				style.width = '500px';
			});
		cy.get(resizableBoxWithRestriction).then($element => {
			expect($element[0].style.height).to.equal('300px');
			expect($element[0].style.width).to.equal('500px');
		});
	});
	it('TC2: Verify min width and height of the resizable box', function () {
		cy.get(resizableBoxWithRestriction)
			.its('0.style')
			.then(style => {
				style.height = '150px';
				style.width = '150px';
			});
		cy.get(resizableBoxWithRestriction).then($element => {
			expect($element[0].style.height).to.equal('150px');
			expect($element[0].style.width).to.equal('150px');
		});
	});
	it('TC3: Validate that the width and height of the resizable box are within acceptable random ranges', () => {
		const heightRandomNumber = faker.random.number({ min: 150, max: 300 });
		const widthRandomNumber = faker.random.number({ min: 150, max: 500 });

		cy.get(resizableBoxWithRestriction)
			.invoke('css', 'height', `${heightRandomNumber}px`)
			.invoke('css', 'width', `${widthRandomNumber}px`);

		cy.get(resizableBoxWithRestriction).then($element => {
			expect($element[0].style.height).to.equal(`${heightRandomNumber}px`);
			expect($element[0].style.width).to.equal(`${widthRandomNumber}px`);
		});
	});
});
