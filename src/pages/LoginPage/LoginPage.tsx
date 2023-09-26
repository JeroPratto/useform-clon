import styles from './styles/loginPage.module.css'
import SignUp from './components/SingUp'
import ListAdvantages from './components/ListAdvantages'
export type LoginPageProps = {}

const LoginPage: React.FC<LoginPageProps> = ({}) => {
	return (
		<div className={styles.container}>
			<SignUp />
			<ListAdvantages />
		</div>
	)
}

export default LoginPage
