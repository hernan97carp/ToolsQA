import { faker } from '@faker-js/faker';

export const optionsValues = {
	singleOp: faker.helpers.arrayElement([
		{ index: '0-0', value: 'Group 1, option 1' },
		{ index: '0-1', value: 'Group 1, option 2' },
		{ index: '1-0', value: 'Group 2, option 1' },
		{ index: '1-1', value: 'Group 2, option 2' },
		{ index: '2', value: 'A root option' },
		{ index: '3', value: 'Another root option' },
	]),
	colorsArray: faker.helpers.arrayElement([
		{ value: 'red', colorName: 'Red' },
		{ value: '1', colorName: 'Blue' },
		{ value: '2', colorName: 'Green' },
		{ value: '3', colorName: 'Yellow' },
		{ value: '4', colorName: 'Purple' },
		{ value: '5', colorName: 'Black' },
		{ value: '6', colorName: 'White' },
		{ value: '7', colorName: 'Voilet' },
		{ value: '8', colorName: 'Indigo' },
		{ value: '9', colorName: 'Magenta' },
		{ value: '10', colorName: 'Aqua' },
	]),
};
