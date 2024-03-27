Cypress.Commands.add('randomNumberMonth', () => {
	// Generate a random number between 1 and 31 to represent the day of the month
	const randomNumber = Math.floor(Math.random() * 31);

	// Add 1 to make the range from 1 to 31
	const formattedNumber = String(randomNumber + 1).padStart(2, '0');

	// Return the formatted number
	return formattedNumber;
});

Cypress.Commands.add('getMonthNumber', monthName => {
	const months = {
		January: '01',
		February: '02',
		March: '03',
		April: '04',
		May: '05',
		June: '06',
		July: '07',
		August: '08',
		September: '09',
		October: '10',
		November: '11',
		December: '12',
	};
	return months[monthName];
});

Cypress.Commands.add('convertNumberToMonthName', monthNumber => {
	const monthNameToNumber = {
		1: 'January',
		2: 'February',
		3: 'March',
		4: 'April',
		5: 'May',
		6: 'June',
		7: 'July',
		8: 'August',
		9: 'September',
		10: 'October',
		11: 'November',
		12: 'December',
	};
	return monthNameToNumber[monthNumber];
});

Cypress.Commands.add('selectDayOfTheMonth', dayOfMonth => {
	cy.get(`.react-datepicker__day--0${dayOfMonth}:not(.react-datepicker__day--outside-month)`).click();
});
