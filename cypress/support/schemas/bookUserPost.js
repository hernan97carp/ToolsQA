export const SchemaBooksUser = {
	$schema: 'http://json-schema.org/draft-07/schema#',
	title: 'Generated schema for Root',
	type: 'object',
	properties: {
		books: {
			type: 'array',
			items: {
				type: 'object',
				properties: {
					isbn: {
						type: 'string',
					},
				},
				required: ['isbn'],
			},
		},
	},
	required: ['books'],
};
