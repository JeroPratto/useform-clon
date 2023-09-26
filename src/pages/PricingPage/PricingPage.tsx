import styles from './styles/pricingPage.module.css'
import Plans from './services/Plans'
import { PriceCard } from './components/PriceCard'
import { CustomPlan } from './components/CustomPlan'
import { FrequentlyAsked } from './components/FrequentlyAsked'

export type PricingPageProps = {}

const PricingPage: React.FC<PricingPageProps> = ({}) => {
	const plans = Plans()
	return (
		<div className={styles.container}>
			<div className={styles.containerTitleAndDesc}>
				<span className={styles.titlePrice}>Pricing</span>
				<h1>Simple & transparent pricing</h1>
				<p className={styles.description}>
					Our plans have everything you need to take <br />
					your forms to the next level, <span>no hidden costs</span>.
				</p>
			</div>
			<div className={styles.containerPriceCards}>
				{plans.map((plan) => (
					<PriceCard pricing={plan} />
				))}
				<CustomPlan />
			</div>
			<FrequentlyAsked />
		</div>
	)
}

export default PricingPage
