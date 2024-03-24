const { accordion } = require('../../../support/POM/widgets/accordion.page.js');
const getAccordion = accordion.accordions;
const { accordionCollapseShow } = accordion.accordionCollapse;
describe('widgets - accordion', () => {
	beforeEach('Precondition: Navigate to the Accordion Section', function () {
		cy.visit('https://demoqa.com/accordian');
	});

	it('TC1: The first accordion should be expanded when the user visited the accordion section', () => {
		cy.step('🟩 1#Accordion header should be visible');
		getAccordion.firstHeader().should('exist').should('be.visible');
		cy.step('🟦 2#Accordion should be expanded');
		accordionCollapseShow().should('exist').should('be.visible');
		cy.step('🟪 3#Validate the text of the accordion');
		getAccordion
			.firstContent()
			.invoke('text')
			.then(textOne => {
				getAccordion.firstContent().should('have.text', textOne);
			});
	});
	it('TC2: Verify each accordions expand functionality', () => {
		cy.step('1# The first accordion should be expanded');
		getAccordion
			.firstContent()
			.should('be.visible')
			.then(() => {
				cy.step('2#Click on the second accordion');
				getAccordion.SecondHeader().click();
				getAccordion.SecondContent().should('be.visible');
				cy.step(' 3#Click on the third accordion');
				getAccordion.ThirdHeader().click();
				getAccordion.ThirdContent().should('be.visible');
				cy.step(' 4#Click on the first accordion');
				getAccordion.firstHeader().click();
				getAccordion.firstContent().should('be.visible');
			});
	});
	it.only('TC3: Verify each accordions expand and collapse functionality', () => {
		cy.step('1# The first accordion should be expanded');
		getAccordion
			.firstContent()
			.should('be.visible')
			.then(() => {
				cy.step('2#Close the first accordion');
				accordion.collapseFirst();
				cy.step('3#Open the second accordion');
				accordion.expandSecond();
				cy.step('4#Close the second accordion');
				accordion.collapseSecond();
				cy.step('5#Open the third accordion');
				accordion.expandThird();
				cy.step('6#Close the third accordion');
				accordion.collapseThird();
				cy.step('7#Open the first accordion');
				accordion.expandFirst();
			});
	});
});
