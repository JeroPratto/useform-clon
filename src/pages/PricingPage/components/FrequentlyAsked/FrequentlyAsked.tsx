import { FrequentlyAccordion } from './components/FrequentlyAccordion'
import frequentlyAsked from './services/frequentlyAsked'
import styles from './styles/frequentlyAsked.module.css'

export type FrequentlyAskedProps = {}

const FrequentlyAsked: React.FC<FrequentlyAskedProps> = ({}) => {
	const frequently = frequentlyAsked()
	return (
		<div className={styles.container}>
			<h2>Frequently asked questions</h2>
			{frequently.map((frequently) => (
				<FrequentlyAccordion ask={frequently.ask} text={frequently.text} />
			))}
		</div>
	)
}
export default FrequentlyAsked
