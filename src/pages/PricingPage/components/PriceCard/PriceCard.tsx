import PricingModel from '@/models/pricingModel'
import styles from './styles/priceCard.module.css'
import check from './images/check.svg'
import noCheck from './images/noCheck.svg'

export type PriceCardProps = {
	pricing: PricingModel
}

const PriceCard: React.FC<PriceCardProps> = ({ pricing }) => {
	return (
		<div className={styles.container}>
			<p className={styles.price}>
				{pricing.price} <span>€/month</span>
			</p>
			<h2 className={styles.name}>{pricing.name}</h2>
			<p className={styles.description}>{pricing.description}</p>
			<ul className={styles.list}>
				{pricing.list.map((item) => (
					<li className={styles.item}>
						<img
							src={item.available ? check : noCheck}
							alt={item.available ? 'available' : 'not available'}
						/>
						<p>{item.text}</p>
					</li>
				))}
			</ul>
		</div>
	)
}

export default PriceCard
