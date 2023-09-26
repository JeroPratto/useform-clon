import styles from './styles/frequentlyAccordion.module.css'
import arrow from './images/arrow.svg'
import { useState } from 'react'
export type FrequentlyAccordionProps = {
	ask: string
	text: string
}

const FrequentlyAccordion: React.FC<FrequentlyAccordionProps> = ({
	ask,
	text,
}) => {
	const [show, setShow] = useState(false)
	return (
		<div className={styles.container}>
			<button className={styles.btnTitle} onClick={() => setShow(!show)}>
				<p className={styles.title}>{ask}</p>
				<img src={arrow} alt='' className={show ? styles.rotate : ''} />
			</button>
			<div className={`${styles.containerText} ${show ? styles.active : ''}`}>
				<p>{text}</p>
			</div>
		</div>
	)
}

export default FrequentlyAccordion
