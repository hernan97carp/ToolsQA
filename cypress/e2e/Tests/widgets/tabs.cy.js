import { TabsPage } from '../../../support/POM/widgets/tabs.Page';
describe('Cypress challenge Tabs', () => {
	const tabsPage = new TabsPage();
	beforeEach(() => {
		// runs before every it() test block
		cy.visit('/tabs');
	});

	it('TC1: Verify content of "What" tab', function () {
		cy.get(tabsPage.tabWhat).should('exist').should('be.visible');

		cy.get(tabsPage.tabContentWhat)
			.invoke('text')
			.then(textTab => {
				cy.readFile(Cypress.env('whatTextFilePath')).then(tabContentWhat => {
					let clearTextWhat = tabContentWhat.replace(/\r?\n|\r/g, '');
					expect(textTab.trim()).to.equal(clearTextWhat);
				});
			});
	});
	it('TC2: Verify content of Origin tab matches text file', () => {
		cy.get(tabsPage.tabOrigin).should('exist').should('be.visible').click();
		cy.get(tabsPage.tabContentOrigin)
			.invoke('text')
			.then(contentOrigin => {
				cy.readFile(Cypress.env('originTextFilePath')).then(textOrigin => {
					let clearTextOrigin = textOrigin.replace(/\r?\n|\r/g, '');
					expect(contentOrigin).to.be.equal(clearTextOrigin);
				});
			});
	});
	it('TC3: Verify content of Use tab matches text file', () => {
		cy.get(tabsPage.tabUse).should('exist').should('be.visible').click();
		cy.get(tabsPage.tabContentUse)
			.invoke('text')
			.then(contentUse => {
				cy.readFile(Cypress.env('useTextFilePath')).then(textUse => {
					let clearTextUse = textUse.replace(/\r?\n|\r/g, '');
					expect(contentUse).to.be.equal(clearTextUse);
				});
			});
	});
	it('TC4: Verify content of More is disabled', function () {
		cy.get(tabsPage.tabMore).should('have.attr', 'aria-disabled', 'true');
	});
});
