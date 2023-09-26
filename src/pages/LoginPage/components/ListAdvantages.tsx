import styles from './styles/ListAdvantages.module.css'
import gradient from '../images/gradient-login.png'
import gradientOverlay from '../images/grid-overlay-login.png'

const ListAdvantages = () => {
	return (
		<div className={styles.advantages}>
			<img src={gradientOverlay} alt='' className={styles.gradientOverlay} />{' '}
			<div className={styles.fewMinutes}>
				<img src={gradient} alt='' />
				<p className={styles.fewMinutesTitle}>
					You're a few minutes away from creating your first form.
				</p>
				<p className={styles.fewMinutesSubtitle}>
					Try Useform for free and create beautiful forms in minutes.
				</p>
			</div>
			<ul className={styles.list}>
				<li>
					<img
						src='iconsLogin/list-icon-0.svg'
						alt=''
						className={styles.icon}
					/>
					Powerful drag-and-drop editor
				</li>
				<li>
					<img
						src='iconsLogin/list-icon-1.svg'
						alt=''
						className={styles.icon}
					/>
					Painless style customization
				</li>
				<li>
					<img
						src='iconsLogin/list-icon-2.svg'
						alt=''
						className={styles.icon}
					/>
					Integrate with your favorite tools
				</li>
				<li>
					<img
						src='iconsLogin/list-icon-3.svg'
						alt=''
						className={styles.icon}
					/>
					Pre-built templates to get you started
				</li>
			</ul>
		</div>
	)
}
export default ListAdvantages
