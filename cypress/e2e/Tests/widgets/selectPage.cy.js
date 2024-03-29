import { SelectPage } from '../../../support/POM/widgets/select.Page';
import { optionsValues } from '@data/Widgets/selectPage/optionsValue';
describe('Cypress Challenge Select Page ', () => {
	const selectPage = new SelectPage();
	const selectValue = selectPage.selectValue; // Cambiado de 'get' a 'selectValue' para reflejar el nombre actualizado
	const { colorsArray, singleOp } = optionsValues;
	beforeEach(() => {
		cy.visit('/select-menu');
	});

	// TC1: Not scalable due to lack of modularity and excessive reliance on global state.
	it('TC1: Verify that the selected option matches the actual option value', () => {
		let optionOneValue;
		cy.get(selectValue.input)
			.click()
			.then(() => {
				cy.get(selectValue.groups[0].heading).should('include.text', 'Group 1');
			})
			.then(() => {
				cy.get(selectValue.groups[0].options[0])
					.click()
					.invoke('text')
					.then($el => {
						optionOneValue = $el;
					});
			})
			.then(optionOneValue => {
				cy.get(selectValue.singleValue)
					.invoke('text')
					.then($el => {
						expect($el).to.equal(optionOneValue);
					});
			});
	});
	//TC2:This is a better way to do it
	it('TC2: Verify that the random selected option matches the actual option value', () => {
		selectPage.clickSelectInput();
		selectPage.returnMenuOptions().should('be.visible');
		selectPage.selectAnOption(singleOp.index);
		selectPage.returnSingleValue().should('have.text', singleOp.value);
	});

	it('TC3: Verify that the selected option matches the actual title', () => {
		selectPage.clickSelectTitle();
		selectPage.returnMenuOptTitle().should('be.visible');
		selectPage.selectToOptionTitle('0-0');
		selectPage.returnSingleValueTitle().should('have.text', 'Dr.');
	});
	it('TC4: Verify that the selected random style option in the menu matches the actual option value', () => {
		const colorSelected = colorsArray.colorName;
		const colorValue = colorsArray.value;
		selectPage
			.selectOldSelectMenu(colorSelected)
			.should('have.value', colorValue)
			.then(() => {
				selectPage
					.returnOptionValue(colorValue)
					.invoke('prop', 'selected')
					.should('eq', true);
			})
			.then(() => {
				selectPage.returnOptionValue(colorValue).invoke('text');
			})
			.then(colorReturned => {
				expect(colorSelected).to.be.equal(colorReturned);
			});
	});
});
