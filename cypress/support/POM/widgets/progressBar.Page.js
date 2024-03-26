export class ProgressBar {
	constructor() {
		this.progressBarSuccess = '.progress-bar.bg-success';
		this.progressBarInfo = '.progress-bar.bg-info';
		this.startStopButton = '#startStopButton';
		this.progressBarButton = 'Progress Bar';
		this.colorProgressBarEmpty = 'rgb(255, 255, 255)';
		this.colorSuccessfulProgress = 'rgb(255, 255, 255)';
		this.valueNow = 'aria-valuenow';
		this.resetButton = '#resetButton';
	}

	clickProgressBarSection() {
		cy.contains('span[class="text"]', this.progressBarButton).click();
	}

	progressBarSuccessful() {
		cy.get(this.progressBarInfo)
			.should('have.attr', 'aria-valuemin', '0')
			.should('have.attr', 'aria-valuemax', '100');

		cy.get(this.startStopButton)
			.click()
			.then(() => {
				// Si el valor actual es menor que 20, esperar y volver a verificar
				cy.get(this.progressBarInfo).should('have.attr', this.valueNow, '0');
				cy.get(this.progressBarInfo).should('have.attr', this.valueNow, '25');
				cy.get(this.progressBarInfo).should('have.attr', this.valueNow, '50');
				cy.get(this.progressBarInfo).should('have.attr', this.valueNow, '75');
				cy.get(this.progressBarInfo).should('have.attr', this.valueNow, '99');
				cy.get(this.progressBarSuccess).should('have.attr', this.valueNow, '100');
			})
			.then(() => {
				//verify style css
				cy.get(this.progressBarSuccess).should('have.attr', 'style', 'width: 100%;');
				cy.get(this.progressBarSuccess).should(
					'have.css',
					'color',
					this.colorSuccessfulProgress
				);
			});
	}

	resetProgress() {
		cy.get(this.resetButton)
			.should('exist')
			.click()
			.end()
			.get(this.progressBarInfo)
			.should('have.attr', this.valueNow, '0');

		cy.get(this.progressBarInfo).should('have.attr', 'style', 'width: 0%;');
		cy.get(this.progressBarInfo).should('have.css', 'color', this.colorProgressBarEmpty);
	}
}
