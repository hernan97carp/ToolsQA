/* eslint-disable no-undef */
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands

// ***********************************************
import 'cypress-file-upload';
import '@4tw/cypress-drag-drop';
import 'cypress-downloadfile/lib/downloadFileCommand';
import './Commands/widgets/datePickerCommands.js';
import './Commands/nestedFrames/nestedFramesCommands.js';

beforeEach(() => {
	cy.intercept(
		{ resourceType: /^(xhr|fetch)$/ },
		{ statusCode: 200, body: { data: 'fake data' } }
	);
});
Cypress.Commands.add('toolsQaSession', () => {
	cy.session('elementSession', () => {
		cy.visit('https://demoqa.com/');
	});
});
Cypress.Commands.add('gClick', locator => {
	cy.get(locator).click({ force: true });
});
Cypress.Commands.add('getAutoCompletedValues', () => {
	const autoCompletedValues = [];
	cy.get('.auto-complete__multi-value__label')
		.each(element => {
			autoCompletedValues.push(element.text());
		})
		.then(() => {
			return autoCompletedValues;
		});
});

// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
