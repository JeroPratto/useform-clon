import styles from './styles/HomeMain.module.css'
import bgImage from './images/bg-img.png'
import { Link } from 'react-router-dom'
import fiveStars from '../fiveStars'
import dashboard from './images/dashboard-example.webp'

export type HomeMainProps = {}

const HomeMain: React.FC<HomeMainProps> = ({}) => {
	const stars = fiveStars()
	return (
		<main className={styles.main}>
			<img src={bgImage} alt='' className={styles.bgImage} />
			<div className={styles.container}>
				<p className={styles.createForm}>
					Create forms for any website, without the pain
				</p>
				<h1 className={styles.title}>
					The easiest way to
					<br />
					create an
					<span> online form</span>
				</h1>
				<p className={styles.description}>
					Build forms in <span>minutes</span> instead of hours.
					<br />
					The last form-builder you'll ever need.
				</p>
				<Link to='/login' className={styles.link}>
					Create my first form for free
				</Link>
				<p className={styles.freePlan}>
					<span>
						Free paln, no credit-card - <Link to='/pricing'>View pricing</Link>
					</span>
					<span className={styles.containerStars}>
						Trusted by agencies & freelancers
						{stars.map((star, index) => (
							<img src={star} alt='star' className={styles.star} key={index} />
						))}
					</span>
				</p>
				<div className={styles.containerImg}>
					<img
						src={dashboard}
						alt='Useform, an online form-builder for the modern web'
					/>
				</div>
			</div>
		</main>
	)
}

export default HomeMain
