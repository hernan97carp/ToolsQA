import faker from 'faker';
const randomUser = faker.internet.userName();
const password = Cypress.env('passwordBooksToolsQA');

describe('Cypress Challenge Book Store Api', () => {
	let token;
	let userID;
	let book;
	let book2;
	let book3;
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

	it('TC6: Get a book', () => {
		cy.request({
			url: '/BookStore/v1/Books',
			method: 'GET',
			qs: {
				userName: randomUser,
				password: password,
			},
		}).then(response => {
			expect(response.status).to.have.eq(200);
			book = response.body.books[0].isbn;
			book2 = response.body.books[1].isbn;
			book3 = response.body.books[2].isbn;
			cy.log(book);
			cy.log(book2);
			cy.log(book3);
		});
	});

	it('TC7: Post Books', () => {
		cy.request({
			method: 'POST',
			url: '/BookStore/v1/Books',
			auth: {
				user: randomUser,
				pass: password,
			},
			body: {
				userId: userID,
				collectionOfIsbns: [{ isbn: book }, { isbn: book3 }],
			},
		}).then(response => {
			expect(response.status).is.eq(201);
			expect(response.body.books[0].isbn).to.eq(book);
		});
	});
	it('TC8: Get - Book', () => {
		cy.request({
			method: 'GET',
			url: '/BookStore/v1/Book',
			qs: {
				ISBN: book,
			},
		}).then(response => {
			expect(response.status).to.have.eq(200);
		});
	});
	it('TC9: PUT Books', () => {
		cy.request({
			url: `/BookStore/v1/Books/${book}`,
			method: 'PUT',
			auth: {
				user: randomUser,
				pass: password,
			},
			body: {
				userId: userID,
				isbn: book2,
			},
		}).then(response => {
			expect(response.status).to.have.eq(200);
		});
	});
	it('TC10: Delete - Book', () => {
		cy.request({
			url: '/BookStore/v1/Book',
			method: 'DELETE',
			headers: {
				Authorization: `Bearer ${token}`,
				'content-type': 'application/json',
			},
			body: {
				isbn: book2,
				userId: userID,
			},
		}).then(response => {
			expect(response.status).to.have.eq(204);
		});
	});
	it('TC11: Delete - books', () => {
		cy.request({
			method: 'DELETE',
			url: '/BookStore/v1/Books',
			qs: {
				UserId: userID,
			},
			auth: {
				user: randomUser,
				pass: password,
			},
		}).then(response => {
			expect(response.status).to.have.eq(204);
		});
	});
	it('TC12: Delete USER', () => {
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
