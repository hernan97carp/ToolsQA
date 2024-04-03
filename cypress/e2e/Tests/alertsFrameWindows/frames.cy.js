import { FramesPage } from '../../../support/POM/alertsFrameWindows/frames.Page';
describe('Cypress Challenge Frames', () => {
	const framesPage = new FramesPage();
	beforeEach(() => {
		cy.visit('/frames');
	});

	it('TC1:Verify the First Frame contain the text This is a sample page', () => {
		cy.get(framesPage.frameOne)
			.its('0.contentDocument.body')
			.should('not.be.empty')
			.then(el => {
				cy.wrap(el);
			})
			.should('have.text', 'This is a sample page');
	});
	it('TC2:Verify the Second Frame contain the text This is a sample page', () => {
		cy.get(framesPage.frameTwo)
			.its('0.contentDocument.body')
			.should('not.be.empty')
			.then(el => {
				cy.wrap(el);
			})
			.should('have.text', 'This is a sample page');
	});
});
