import supportedPlatforms from './services/supportedPlatforms'
import styles from './styles/supportedPlatforms.module.css'

export type SupportedPlatformsProps = {}

const SupportedPlatforms: React.FC<SupportedPlatformsProps> = ({}) => {
	const supported = supportedPlatforms()
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Supported platforms & guides</h2>
			<div className={styles.containerSupported}>
				{supported.map((urlImg) => (
					<div className={styles.item}>
						<img src={urlImg} alt='' />
					</div>
				))}
			</div>
			<p className={styles.titleWant}>Do you want to see your platform?</p>
			<p className={styles.descriptionWant}>
				Feel free to contact-us and we can work together to support your
				platform.
			</p>
		</div>
	)
}

export default SupportedPlatforms
