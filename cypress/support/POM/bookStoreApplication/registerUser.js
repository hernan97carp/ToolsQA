export class RegisterUser {
	constructor() {
		this.firstName = '#firstname';
		this.lastName = '#lastname';
		this.userName = '#userName';
		this.password = '#password';
		this.recaptchaCheckBox = '.recaptcha-checkbox-checkmark';
		this.registerButton = '#register';
		this.verifyReCaptcha = '#output';
		this.buttonGoToLogin = '#gotologin';
		this.messageErrorFirstName = 'input[placeholder="First Name"].is-invalid.form-control';
		this.messageErrorLastName = 'input#lastname.is-invalid.form-control';
		this.messageErrorUserName = 'input#userName.mr-sm-2.is-invalid.form-control';
		this.messageErrorPassword = 'input#password.mr-sm-2.is-invalid.form-control';
	}
}
