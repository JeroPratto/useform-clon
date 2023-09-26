import { Link } from 'react-router-dom'
import styles from './styles/integratePlatforms.module.css'

export type IntegratePlatformsProps = {}

const IntegratePlatforms: React.FC<IntegratePlatformsProps> = ({}) => {
	return (
		<div className={styles.container}>
			<p className={styles.title}>Integrate with popular platforms</p>
			<p className={styles.subtitle}>
				Useform can integrate with many platforms, including Framer, Webflow,
				Carrd, and more
			</p>
			<Link to='/platforms' className={styles.link}>
				View all platforms
			</Link>
		</div>
	)
}

export default IntegratePlatforms
