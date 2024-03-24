export class SliderPage {
	constructor() {
		this.sliderButton = 'Slider';
		this.sliderInput = 'input[type="range"]';
		this.sliderValue = '#sliderValue';
	}

	clickSlider() {
		cy.contains('span[class="text"]', this.sliderButton).click();
	}

	moveSlider(value) {
		let val = value - 25;
		cy.get('input[type="range"]')
			.then($el => {
				$el[0].stepUp(val);
			})
			.trigger('change');
	}

	returnValueSlider() {
		return cy.get(this.sliderValue);
	}
}
