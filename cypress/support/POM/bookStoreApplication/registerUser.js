export class RegisterUser {
	constructor() {
		this.firstName = '#firstname';
		this.lastName = '#lastname';
		this.userName = '#userName';
		this.password = '#password';
		this.recaptchaCheckBox = '.recaptcha-checkbox-checkmark';
		this.registerButton = '#register';
		this.verifyReCaptcha = '#output';
		this.messageErrorFirstName = 'input[placeholder="First Name"].is-invalid.form-control';
	}
}
