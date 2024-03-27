import { ProgressBar } from '../../../support/POM/widgets/progressBar.Page';

describe('Cypress challenge Progress Bar', () => {
	const progressBar = new ProgressBar();

	beforeEach('precondition: Navigate to the progress Bar section', () => {
		cy.visit('/progress-bar');
	});

	it("TC1: Verify that the 'Reset' button resets the progress bar value to 0 after the progress bar reaches 100%.", () => {
		progressBar.progressBarSuccessful();
		cy.get(progressBar.resetButton).first().click();
	});
});
