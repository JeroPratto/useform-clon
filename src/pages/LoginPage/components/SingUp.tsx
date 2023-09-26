import styles from './styles/SingUp.module.css'
import logo from '/logo.png'
import googleLogo from '/google-logo.png'

const SignUp = () => {
	return (
		<div className={styles.containerLogin}>
			<div className={styles.containerDescAndBtn}>
				<img src={logo} alt='Logo' className={styles.logo} />
				<h1 className={styles.title}>Sign up to Useform</h1>
				<p className={styles.subtitle}>
					The easiest way to create an online form, whether for a survey,
					questionnaire, poll, or registration form.
				</p>
				<button className={styles.btnLogin}>
					<img src={googleLogo} alt='google logo' />
					Continue with Google
				</button>
				<p className={styles.descTerms}>
					By signing up, you agree to our <span>Terms of Service</span> and
					acknowledge our <span>Privacy Policy</span>.
				</p>
			</div>
		</div>
	)
}
export default SignUp
