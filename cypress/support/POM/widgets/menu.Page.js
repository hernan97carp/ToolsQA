class MenuItems {
	mainItems = {
		firstMainItem: () => cy.get('a[href="#"]'.eq(0)),
		SecondMainItem: () => cy.get('a[href="#"]'.eq(1)),
	};
}
