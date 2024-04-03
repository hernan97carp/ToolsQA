Cypress.Commands.add('getIframeChildrenBody', (frame1, frame2) => {
	return cy
		.get(frame1)
		.its('0.contentDocument.body')
		.should('not.be.empty')
		.then(cy.wrap)
		.find(frame2)
		.its('0.contentDocument.body')
		.should('not.be.empty')
		.then(cy.wrap);
});
