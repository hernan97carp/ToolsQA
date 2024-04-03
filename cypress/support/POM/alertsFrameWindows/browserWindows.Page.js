export class BrowserWindows {
	constructor() {
		this.newTab = '#tabButton';
		this.windowButton = '#windowButton';
		this.newWindowMessage = '#messageWindowButton';
	}
	clickTabButton() {
		cy.gClick(this.newTab);
	}
	clickWindowButton() {
		cy.gClick(this.windowButton);
	}
}
