class Accordion {
	accordions = {
		firstHeader: () => cy.get('#section1Heading'),
		firstContent: () => cy.get('#section1Content p'),
		SecondHeader: () => cy.get('#section2Heading'),
		SecondContent: () => cy.get('#section2Content p'),
		ThirdHeader: () => cy.get('#section3Heading'),
		ThirdContent: () => cy.get('#section3Content p'),
	};
	accordionCollapse = {
		accordionCollapseShow: () => cy.get('div.collapse.show .card-body'),
	};

	collapseFirst() {
		this.accordions.firstHeader().click();
		this.accordionCollapse.accordionCollapseShow().should('not.exist');
	}
	collapseSecond() {
		this.accordions.SecondHeader().click();
		this.accordionCollapse.accordionCollapseShow().should('not.exist');
	}
	collapseThird() {
		this.accordions.ThirdHeader().click();
		this.accordionCollapse.accordionCollapseShow().should('not.exist');
	}

	expandFirst() {
		this.accordions.firstHeader().click();
		this.accordions.firstContent().should('be.visible');
	}
	expandSecond() {
		this.accordions.SecondHeader().click();
		this.accordions.SecondContent().should('be.visible');
	}
	expandThird() {
		this.accordions.ThirdHeader().click();
		this.accordions.ThirdContent().should('be.visible');
	}
}

export const accordion = new Accordion();
