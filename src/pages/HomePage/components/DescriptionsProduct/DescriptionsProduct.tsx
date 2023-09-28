import descriptionsProduct from './services/descriptionsProduct'
import styles from './styles/DescriptionsProduct.module.css'
import check from '/check.svg'
export type DescriptionsProductProps = {}

const DescriptionProduct: React.FC<DescriptionsProductProps> = ({}) => {
	const descriptions = descriptionsProduct()
	return (
		<div className={styles.container}>
			{descriptions.map((desc, index) => (
				<div className={styles.containerItem} key={index}>
					<p
						className={`${styles.preTitle} ${
							index % 2 === 0 ? '' : styles.reversePreTitle
						}`}
					>
						{desc.preTitle}
					</p>
					<div className={`${styles.containerListAndImg}`}>
						<div
							className={`${styles.containerData} ${
								index % 2 === 0 ? '' : styles.reverse
							}`}
						>
							<h2 className={styles.title}>{desc.title}</h2>
							<p className={styles.description}>{desc.description}</p>
							<span className={styles.separator}></span>
							<ul className={styles.list}>
								{desc.list.map((item, index) => (
									<li key={index}>
										<img src={check} alt='check' className={styles.check} />
										{item}
									</li>
								))}
							</ul>
						</div>
						<div className={styles.containerImage}>
							<img src={desc.urlImage} alt={desc.title} />
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default DescriptionProduct
