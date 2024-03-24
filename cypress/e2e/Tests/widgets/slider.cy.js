///<reference types="cypress" />

import { SliderPage } from '../../../support/POM/widgets/slider.Page.js';
import { faker } from '@faker-js/faker';

describe('Slider', () => {
	const sliderPage = new SliderPage();

	beforeEach(() => {
		cy.visit('/widgets');
		sliderPage.clickSlider();
	});

	it('slider input type= range utilizando stepUp', () => {
		const randomRange = faker.datatype.number({ min: 10, max: 100 }).toString();
		sliderPage.moveSlider(randomRange);
		sliderPage.returnValueSlider().should('have.value', randomRange);
	});
});
