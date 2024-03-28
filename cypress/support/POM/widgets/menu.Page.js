class MenuItems {
	mainItemOne = {
		firstMainItem: () => cy.get('a[href="#"]'),
	};
	mainItemTwo = {
		SecondMainItem: () => cy.get('a[href="#"]'),
		secondMainFirstSubItem: () => cy.get('a[href="#"]'),
		secondMainSecondSubItem: () => cy.get('a[href="#"]'.eq(3)),
		secondMainSubSubList: () => cy.get('a[href="#"]'.eq(4)),
		secondMainSubSubItemOne: () => cy.get('a[href="#"]'.eq(5)),
		secondMainSubSubItemTwo: () => cy.get('a[href="#"]'.eq(6)),
	};
	mainItemThree = {
		thirdMainItem: () => cy.get('a[href="#"]'.eq(7)),
	};
}

export const menuItems = new MenuItems();
