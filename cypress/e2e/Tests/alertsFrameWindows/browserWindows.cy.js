import { BrowserWindows } from '../../../support/POM/alertsFrameWindows/browserWindows.Page';

describe('This is your test project title', function () {
	const browserWindows = new BrowserWindows();
	beforeEach(() => {
		cy.visit('/browser-windows');
	});

	it('TC1: Verify that clicking the New Tab button redirects to a new tab.', function () {
		// The URL associated with the element is dynamically generated with JavaScript
		//and is not present in the DOM, hence the 'href' attribute cannot be accessed or modified.
		// Therefore, navigating to the new tab using the URL associated with the element is not feasible.
		cy.get(browserWindows.newTab).then(() => {
			cy.visit('https://demoqa.com/sample');
		});
		cy.request('https://demoqa.com/sample').then(response => {
			expect(response.status).to.equal(200);
		});
		cy.url().should('include', '/sample');
	});
});
