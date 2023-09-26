import styles from './styles/customPlan.module.css'
import gradient from './images/gradient-pricing.png'

export type CustomPlanProps = {}

const CustomPlan: React.FC<CustomPlanProps> = ({}) => {
	return (
		<div className={styles.customPlan}>
			<img src={gradient} alt='' className={styles.bgGradient} />
			<p className={styles.priceCustom}>
				∞ <span>€/month</span>
			</p>
			<h2 className={styles.name}>Enterprise</h2>
			<p className={styles.descriptionCustom}>
				Can't find a plan that fits your needs?
			</p>
			<p className={styles.getInTouch}>
				Get in touch at <span>contact@useform.co</span> for a custom quote &
				onboarding.
			</p>
		</div>
	)
}

export default CustomPlan
