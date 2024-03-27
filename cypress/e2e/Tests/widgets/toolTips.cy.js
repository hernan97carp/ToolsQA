import { ToolTips } from '../../../support/POM/widgets/toolTips.Page';
describe('Cypress Challenge Tool Tips', () => {
	const toolTips = new ToolTips();
	beforeEach(() => {
		cy.visit('/tool-tips');
	});

	it('TC1: Verify Tool Tip Button Hover Displays Tex', () => {
		cy.get(toolTips.toolTipButton).trigger('mouseover');
		cy.get(toolTips.buttonToolTip).should('have.text', 'You hovered over the Button');
	});
	it('TC2: Verify ToolTip on Text Field Hover', () => {
		cy.get(toolTips.inputHoverMeToSee).trigger('mouseover');
		cy.get('.tooltip-inner').should('have.text', 'You hovered over the text field');
	});
	it('TC3: Verify ToolTip on Contrary Text Hover', () => {
		cy.get(toolTips.textContraryHover).eq(0).should('exist').trigger('mouseover');
		cy.get('.tooltip-inner').should('have.text', 'You hovered over the Contrary');
	});
	it('TC4: Verify ToolTip on Text 1.10.32 Hover', () => {
		cy.get(toolTips.textContraryHover).eq(1).should('exist').trigger('mouseover');
		cy.get('.tooltip-inner').should('have.text', 'You hovered over the 1.10.32');
	});
});
