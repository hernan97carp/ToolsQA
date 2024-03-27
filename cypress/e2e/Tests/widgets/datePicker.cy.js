import { faker } from '@faker-js/faker';
const { datePicker } = require('../../../support/POM/widgets/datePicker.Page.js');
const inputDatePicker = datePicker.datePickerInput;
const popupCalendar = datePicker.popupCalendar;

describe('Cypress Challenge', () => {
	beforeEach('precondition: Navigate to the date picker section ', () => {
		cy.visit('/date-picker');
	});

	it('TC1: Verify correct date selection when the user clicks on a random day of the month', () => {
		let returnDayOfMonth;
		let valueDatePicker;
		inputDatePicker.selectDate().click();
		cy.randomNumberMonth()
			.then(randomDay => {
				cy.selectDayOfTheMonth(randomDay);
				returnDayOfMonth = randomDay;
			})
			.then(() => {
				inputDatePicker.selectDate().invoke('val');
			})
			.then(value => {
				valueDatePicker = value.split('/')[1];
				expect(valueDatePicker).to.equal(returnDayOfMonth);
			});
	});
	it('TC2: Verify correct date selection when the user clicks on a random month of the year', () => {
		//arrange
		const randomMonth = faker.date.month();
		let returnedMonth;
		let valueDatePicker;
		//act
		inputDatePicker.selectDate().click();
		popupCalendar.selectMonth().select(randomMonth);
		cy.randomNumberMonth().then(randomDay => {
			cy.selectDayOfTheMonth(randomDay);
		});
		cy.getMonthNumber(randomMonth)
			.then(numberMonth => {
				returnedMonth = numberMonth;
				inputDatePicker.selectDate().invoke('val');
			})
			.then(value => {
				valueDatePicker = value.split('/')[0];
				expect(valueDatePicker).to.equal(returnedMonth);
			});
		inputDatePicker.selectDate().click();
		popupCalendar
			.headerMonthYear()
			.invoke('text')
			.then(monthAndYear => {
				const popupCurrentMonth = monthAndYear.split(' ')[0];
				cy.convertNumberToMonthName(parseInt(valueDatePicker.split(' ')[0], 10)).then(
					currentMonth => {
						expect(currentMonth).to.equal(popupCurrentMonth);
					}
				);
			});
	});

	it('TC3: Verify correct date selection when the user clicks on a random year', () => {
		const randomYear = faker.datatype.number({ min: 1900, max: 2100 }).toString();
		let valueDatePicker;

		inputDatePicker.selectDate().click();
		popupCalendar.selectYear().select(randomYear);
		cy.randomNumberMonth()
			.then(randomDay => {
				cy.selectDayOfTheMonth(randomDay);
			})
			.then(() => {
				inputDatePicker.selectDate().invoke('val');
			})
			.then(value => {
				valueDatePicker = value.split('/')[2];
				expect(valueDatePicker).to.equal(randomYear);
			});
		inputDatePicker.selectDate().click();
		popupCalendar
			.headerMonthYear()
			.invoke('text')
			.then(monthAndYear => {
				const yearFromDatePicker = monthAndYear.split(' ')[1];
				const currentYearInput = valueDatePicker.split(' ')[0];
				expect(yearFromDatePicker).to.equal(currentYearInput);
			});
	});
});
