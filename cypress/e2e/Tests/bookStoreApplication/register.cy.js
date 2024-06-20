import { faker } from '@faker-js/faker';
import { RegisterUser } from '../../../support/POM/bookStoreApplication/registerUser';

const randomName = faker.name.firstName('male');
const randomLastName = faker.name.lastName('male');
const randomUser = faker.internet.userName();
const randomPassword = faker.internet.password();

describe('Cypress Challenge | Register', function () {
	const register = new RegisterUser();
	const time = 1;
	const colorErrorMessageInput = 'rgb(220, 53, 69)';
	beforeEach(() => {
		cy.visit('/register');
	});
	it.skip('TC1: User Register Successfully', function () {
		cy.get(register.firstName).type(randomName);
		cy.get(register.lastName).type(randomLastName);
		cy.get(register.userName).type(randomUser);
		cy.get(register.password).type(randomPassword);

		cy.confirmCaptcha();
		cy.wait(time);
		cy.get(register.registerButton).click({ force: true });
		cy.on('window:alert', str => {
			expect(str).to.equal('User Register Successfully.');
		});
	});
	it.skip('TC2: Validate message "please verify reCaptcha to register" when registering a user without clicking on the Captcha.', function () {
		cy.get(register.firstName).type(randomName);
		cy.get(register.lastName).type(randomLastName);
		cy.get(register.userName).type(randomUser);
		cy.get(register.password).type(randomPassword);
		cy.get(register.registerButton).click();
		cy.get(register.verifyReCaptcha)
			.find('div')
			.find('p')
			.should('have.text', 'Please verify reCaptcha to register!');
	});
	it('TC3: Validate error message "please fill out this field" when trying to register without completing the username field', () => {
		cy.get(register.lastName).type(randomLastName);
		cy.get(register.userName).type(randomUser);
		cy.get(register.password).type(randomPassword);
		cy.get(register.registerButton)
			.click()
			.then(() => {
				cy.get(register.messageErrorFirstName)
					.should('exist')
					.and('have.css', 'border-color', colorErrorMessageInput);
			});
	});
});
