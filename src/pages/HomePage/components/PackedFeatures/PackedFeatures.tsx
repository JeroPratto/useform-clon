import packedFeatures from './services/packedFeatures'
import styles from './styles/packedFeatures.module.css'

export type PackedFeaturesProps = {}

const PackedFeatures: React.FC<PackedFeaturesProps> = ({}) => {
	const features = packedFeatures()
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Packed with features to help you succeed</h2>
			<p className={styles.subtitle}>
				Useform makes it easy to create forms for any use-case, without code
			</p>
			<div className={styles.containerItems}>
				{features.map((feature, index) => (
					<div className={styles.item} key={index}>
						<div className={styles.containerImg}>
							<img src={feature.urlImage} alt='' />
						</div>
						<h3 className={styles.titleFeature}>{feature.title}</h3>
						<p className={styles.description}>{feature.description}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default PackedFeatures
