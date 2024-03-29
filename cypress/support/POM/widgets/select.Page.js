export class SelectPage {
	constructor() {
		this.selectValue = {
			input: '#withOptGroup',
			singleValue: 'div[class$=-singleValue]',
			groups: [
				{
					heading: '#react-select-2-group-0-heading',
					options: ['#react-select-2-option-0-0', '#react-select-2-option-0-1'],
				},
				{
					heading: '#react-select-2-group-1-heading',
					options: ['#react-select-2-option-1-0', '#react-select-2-option-1-1'],
				},
			],
			rootOptions: {
				A: '#react-select-2-option-1',
				B: '#react-select-2-option-2',
				C: '#react-select-2-option-3',
			},
			defaultOption: 'Select Option',
		};

		this.selectOne = {
			input: '#selectOne',
			selectTitle: 'Select Title',
			singleValue: 'div[class$=-singleValue]',
		};

		this.selectMenu = 'Select Menu';
		this.selectInput = '#withOptGroup';
		this.oldSelectMenu = '#oldSelectMenu';
		this.controlClass = 'div[class$="-control"]';
		this.select = 'Select...';
		this.selectMultiple = '#cars';
	}

	//////////////////////////////////////////
	//FUNCTIONS OF SELECT VALUE
	clickSelectInput() {
		cy.contains(this.selectValue.input, this.selectValue.defaultOption).click();
	}

	returnMenuOptions() {
		return cy.get(this.selectValue.input).find('div[class$="-menu"]');
	}

	selectAnOption(option) {
		cy.get(`[id=react-select-2-option-${option}]`).click();
	}
	returnOptionValue(value) {
		return cy.get(`option[value="${value}"]`);
	}

	returnSingleValue() {
		return cy.get(this.selectValue.input).find(this.selectValue.singleValue);
	}
	//////////////////////////////////////////
	//FUNCTIONS OF SELECT ONE
	clickSelectTitle() {
		cy.contains(this.selectOne.input, this.selectOne.selectTitle).click();
	}

	returnMenuOptTitle() {
		return cy.get(this.selectOne.input).find('div[class$="-menu"]');
	}

	selectToOptionTitle(option) {
		cy.get(`[id=react-select-3-option-${option}]`).click();
	}

	returnSingleValueTitle() {
		return cy.get(this.selectOne.input).find(this.selectOne.singleValue);
	}

	//////////////////////
	//FUNCTIONS OF SELECT OLD

	selectOldSelectMenu(text) {
		return cy.get(this.oldSelectMenu).select(text);
	}

	selectOldSelectMenuValue(value) {
		return cy.get(this.oldSelectMenu).select(value);
	}

	returnOptionValue(value) {
		return cy.get(`option[value="${value}"]`);
	}

	///////////////////////
}
