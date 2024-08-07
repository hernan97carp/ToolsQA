import { defineConfig } from 'cypress';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import pkg from '@badeball/cypress-cucumber-preprocessor';
const { addCucumberPreprocessorPlugin } = pkg;
import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild.js';
import { downloadFile } from 'cypress-downloadfile/lib/addPlugin.js';
import allureWriter from '@shelex/cypress-allure-plugin/writer';
import { config as dotenvConfig } from 'dotenv';
import multiReporters from 'cypress-multi-reporters'; // Importar como default

dotenvConfig();

async function setupNodeEvents(on, config) {
	// This is required for the preprocessor to be able to generate JSON reports after each run, and more,
	await addCucumberPreprocessorPlugin(on, config);

	on('task', { downloadFile });

	on(
		'file:preprocessor',
		createBundler({
			plugins: [createEsbuildPlugin(config)],
		})
	);

	allureWriter(on, config);

	// Make sure to return the config object as it might have been modified by the plugin.
	return config;
}

export default defineConfig({
	projectId: '9942hc',
	downloadsFolder: 'cypress/downloads',
	// 1280×720 is considered to be the most suitable screen resolution for the desktop website version:
	viewportWidth: 1920,
	viewportHeight: 1080,
	// Whether Cypress will watch and restart tests on test file changes:
	watchForFileChanges: false,
	// En Caso de hacer testing en SUT con seguridad web:
	chromeWebSecurity: false,
	// multi-reporters: one report.xml + mochawesome.json per file.
	reporter: 'cypress-multi-reporters',
	reporterOptions: {
		reporters: {
			mochaJunitReporter: multiReporters.mochaJunitReporter, // Acceder al export por defecto
			mochawesome: {
				reporterOptions: {
					reportDir: 'mochawesome-report', // Directorio donde se generan los reportes de mochawesome
					overwrite: false, // No sobrescribir reportes existentes
					html: true, // Generar reporte HTML
					json: true, // Generar reporte JSON
					quiet: true, // Suprimir la salida de consola de mochawesome (opcional)
				},
				reportFilename: 'mochawesome.json', // Nombre del archivo JSON de reporte
			},
		},
	},
	// Number of times to retry a failed test. If a number is set, tests will retry in both runMode and openMode:
	retries: process.env.CI ? 2 : 0,
	// Whether Cypress will record a video of the test run when running on headless:
	video: false,
	// E2E Testing runner
	e2e: {
		experimentalSessionAndOrigen: true,
		// Glob pattern to determine what test files to load:
		specPattern: [
			'cypress/e2e/cucumber-test/Gherkin/*.feature',
			'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
		],
		// Use Cypress plugins:
		setupNodeEvents,
		baseUrl: 'https://demoqa.com',
	},
	env: {
		passwordBooksToolsQA: process.env.PASSWORD_TOOLS_QA,
		usernameLogin: process.env.USERNAME_TOOLS_QA_LOGIN,
		passwordLogin: process.env.PASSWORD_TOOLS_QA_LOGIN,
		allure: true,
		allureReuseAfterSpec: true,
		allureResultsPath: 'reports/allure-results',
		whatTextFilePath: 'cypress/fixtures/data/Widgets/Tabs/tabContentWhat.txt',
		originTextFilePath: 'cypress/fixtures/data/Widgets/Tabs/tabContentOrigin.txt',
		useTextFilePath: 'cypress/fixtures/data/Widgets/Tabs/tabContentUse.txt',
	},
});
