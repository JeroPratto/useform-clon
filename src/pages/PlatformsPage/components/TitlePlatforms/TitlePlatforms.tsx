import styles from './styles/titlePlatforms.module.css'

export type TitlePlatformsProps = {}

const TitlePlatforms: React.FC<TitlePlatformsProps> = ({}) => {
	return (
		<div className={styles.container}>
			<div className={styles.containerTitle}>
				<h1>Useform works on any website & e-commerce store</h1>
				<p>
					Our widgets can be easily embedded on any website, blog,
					<br />
					e-commerce platform, or website builder.
				</p>
			</div>
		</div>
	)
}

export default TitlePlatforms
