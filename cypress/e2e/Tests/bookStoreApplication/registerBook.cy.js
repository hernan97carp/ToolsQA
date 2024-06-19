import { RegisterUser } from '../../../support/POM/bookStoreApplication/registerUser';
import { faker } from '@faker-js/faker';
const randomName = faker.name.firstName('male');
const randomLastName = faker.name.lastName('male');
const randomUser = faker.internet.userName();
const randomPassword = faker.internet.password();
describe('US GX-726 | ToolsQA | Book Store Applications | Register', () => {
	const time = 1;
	const register = new RegisterUser();

	beforeEach('Precondición: El Usuario No debe estar registrado', () => {
		cy.visit('/register');

		cy.url().should('contain', '/register');
	});

	it('US-GX-726 | TS-727 | TC1:  Validar registrar usuario con credenciales válidas', () => {
		//User Register Successfully.
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
});
