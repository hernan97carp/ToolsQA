import faker from 'faker';
const randomUser = faker.internet.userName();
const password = Cypress.env('passwordBooksToolsQA');

describe('Cypress Challenge Book Store Api', () => {
	let token;
	let userID;

	it('TC1: POST Create User', () => {
		cy.request({
			method: 'POST',
			url: '/Account/v1/User',
			body: {
				userName: randomUser,
				password: password,
			},
		}).then(response => {
			expect(response.status).to.eq(201);
			userID = response.body.userID;
		});
	});
	it('TC2: POST Generate token', () => {
		cy.request({
			method: 'POST',
			url: '/Account/v1/GenerateToken',
			body: {
				userName: randomUser,
				password: password,
			},
		}).then(response => {
			expect(response.status).is.eq(200);
			token = response.body.token;
		});
	});
	it('TC3: Verify Authorized', () => {
		cy.request({
			url: '/Account/v1/Authorized',
			method: 'POST',
			body: {
				userName: randomUser,
				password: password,
			},
		}).then(response => {
			expect(response.status).to.eq(200);
		});
	});
	it('TC4:Verify Get User', () => {
		cy.request({
			url: '/Account/v1/Authorized',
			method: 'POST',
			body: {
				userName: randomUser,
				password: password,
			},
		}).then(response => {
			expect(response.status).to.eq(200);
			expect(response.body).to.be.true; // Utilizando .to.be.true para verificar si el cuerpo es un booleano true
		});
	});
	it('TC5: DELETE USER', () => {
		cy.request({
			method: 'DELETE',
			url: `/Account/v1/User/${userID}`,
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
		}).then(response => {
			expect(response.status).to.have.eq(204);
		});
	});
});
