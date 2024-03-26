class DataPicker {
	datePickerInput = {
		selectDate: () => cy.get('#datePickerMonthYearInput'),
		timePicker: () => cy.get('#dateAndTimePickerInput'),
	};
	popupCalendar = {
		headerMonthYear: () => cy.get('.react-datepicker__current-month--hasMonthDropdown'),
		selectYear: () => cy.get('.react-datepicker__year-select'),
		selectMonth: () => cy.get('.react-datepicker__month-select'),
	};
}

export const datePicker = new DataPicker();
