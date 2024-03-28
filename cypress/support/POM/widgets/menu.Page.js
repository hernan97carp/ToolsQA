export class MenuPage {
	constructor() {
		this.mainItems = '[id=nav]>li';
	}

	returnSubSubList(i) {
		cy.get(this.mainItems).children('a').contains('Main Item 2');
		cy.get(this.mainItems).find('li').as('el').eq(2);
		return cy.get('@el').find('li').eq(i).invoke('text');
	}

	returnSubItems(i) {
		cy.get(this.mainItems).children('a').contains('Main Item 2');
		return cy.get(this.mainItems).find('li').as('element').eq(i);
	}
}
