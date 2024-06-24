import { LoginUser } from '../../../support/POM/bookStoreApplication/loginUser';
import { Profile } from '../../../support/POM/bookStoreApplication/profile';
describe('Challenge | LOGIN', () => {
	const login = new LoginUser();
	const profile = new Profile();
	const usernameLogin = Cypress.env('usernameLogin').trim();
	const passwordLogin = Cypress.env('passwordLogin').trim();
	beforeEach('Precondition: Visit the url', () => {
		cy.visit('/login');
	});

	it.skip('TC1: Validate the Successfully login of the user', () => {
		cy.get(login.username).click().type(usernameLogin);
		cy.get(login.password).click().type(passwordLogin);
		cy.get(login.loginButton)
			.click()
			.then(() => {
				cy.get(profile.nameOfTheUser).should('contain', usernameLogin);
			});
	});
	it('TC2: Validate Error Message for Invalid Login Credentials', () => {
		cy.get(login.username).click().type(usernameLogin);
		cy.get(login.password).click().type('InvalidPassword');
		cy.get(login.loginButton)
			.click()
			.then(() => {
				cy.get(login.messageErrorLogin).should('contain', login.errorMessage);
			});
	});
});
