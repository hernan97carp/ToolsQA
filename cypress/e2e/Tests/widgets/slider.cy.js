///<reference types="cypress" />

import { SliderPage } from '../../../support/POM/widgets/slider.Page.js';
import { faker } from '@faker-js/faker';

describe('Slider', () => {
	const sliderPage = new SliderPage();

	beforeEach(() => {
		cy.visit('/slider');
	});

	it('TC1: Verify selection of a random value on the slider', () => {
		const randomRange = faker.datatype.number({ min: 10, max: 100 }).toString();
		sliderPage.moveSlider(randomRange);
		sliderPage.returnValueSlider().should('have.value', randomRange);
	});
});
