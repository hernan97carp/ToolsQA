///<reference types="cypress" />

import { ModalDialogsPage } from '../../../support/POM/alertsFrameWindows/modalDialogs.Page';

describe('Modal Dialogs', () => {
	const get = new ModalDialogsPage();
	let smallModalContent;
	let largeModalContent;

	before(() => {
		cy.fixture('data/alertsFrameWindows/modalDialogs').then(data => {
			smallModalContent = data.smallModalContent;
			largeModalContent = data.largeModalContent;
		});
	});

	beforeEach(() => {
		cy.visit('/modal-dialogs');
	});

	it('TC1:Click on button to see the Small modal', () => {
		cy.get(get.showSmallModal).click();
		cy.get(get.modalSmallTitle).should('have.text', 'Small Modal');
		cy.get(get.modalSmallBody).should('have.text', smallModalContent);
		cy.get(get.closeSmallButton).click();
		cy.get(get.modalSmallBody).should('not.exist');
	});

	it('TC2:Click on button to see the Large modal', () => {
		cy.get(get.showLargeModal).click();
		cy.get(get.modalLargeTitle).should('have.text', 'Large Modal');
		cy.get(get.modalLargeBody)
			.invoke('text')
			.then(text => {
				expect(text).to.be.equal(largeModalContent);
			});
		cy.get(get.closeLargeButton).click();
		cy.get(get.modalLargeBody).should('not.exist');
	});
});
