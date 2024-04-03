import { NestedFrames } from '../../../support/POM/alertsFrameWindows/nestedFrames.Page';
describe('Cypress Challenge Frames', () => {
	const nestedFrames = new NestedFrames();

	beforeEach(() => {
		cy.visit('/nestedframes');
	});

	it('TC1:Confirm ChildFrame Contains the Text Child Iframe', function () {
		cy.getIframeChildrenBody(nestedFrames.frame1, nestedFrames.frame2)
			.find('p')
			.as('frameChild');
		cy.get('@frameChild').should('have.text', 'Child Iframe');
	});
});
