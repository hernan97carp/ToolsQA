import { AlertsPage } from '../../../support/POM/alertsFrameWindows/alerts.Page';
describe('This is your test project title', () => {
	const get = new AlertsPage();
	beforeEach(() => {
		cy.visit('https://demoqa.com/alerts');
	});

	it('TC1:Ensure Alert Message Displays You clicked a button Upon Button Click', () => {
		const stub = cy.stub();
		cy.on('window:alert', stub);

		cy.get(get.alertButton)
			.click()
			.then(() => {
				expect(stub.getCall(0)).to.calledWith('You clicked a button');
			});
	});

	it('TC2:This alert appeared after 5 seconds', () => {
		cy.get(get.timerAlertButton).click();
		cy.on('window:alert', res => {
			expect(res).to.equal('This alert appeared after 5 seconds');
		});
	});
	it('TC3:Verify the confirm result is canceled', () => {
		cy.get(get.confirmButton).click();
		cy.on('window:confirm', res => {
			expect(res).to.eq('Do you confirm action?');
			return false;
		});
		cy.get(get.confirmResult).should('exist').should('have.text', 'You selected Cancel');
	});
	it('TC4:Ensure Alert Confirmation Acknowledges Selection of Ok Button', () => {
		cy.get(get.confirmButton).click();
		cy.on('window:confirm', res => {
			expect(res).to.eq('Do you confirm action?');
			return true;
		});
		cy.get(get.confirmResult).should('exist').should('have.text', 'You selected Ok');
	});
	it('TC5:Validate Correct Return Value from Alert Prompt Input', () => {
		cy.window().then(function (win) {
			console.log(win);
			cy.step('Spy function alert y prompt');
			cy.stub(win, 'alert').as('windowAlert');
			cy.stub(win, 'prompt').returns('Hernan Esquivel');
			cy.get(get.promptButton).click();
		});
		cy.get(get.promptResult)
			.invoke('text')
			.then(res => {
				expect(res).to.eq('You entered Hernan Esquivel');
			});
	});
	it('TC6:On button click, prompt box will appear (cancel)', () => {
		cy.window().then(win => {
			cy.stub(win, 'prompt').callsFake(() => null);
			cy.get(get.promptButton).click();
			cy.get(get.promptResult).should('not.exist');
		});
	});
});
