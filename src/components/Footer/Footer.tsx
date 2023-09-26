import { Link } from 'react-router-dom'
import styles from './styles/footer.module.css'
import logo from '/logo-white.png'
import linksFooter from './services/linksFooter'
export type FooterProps = {}

const Footer: React.FC<FooterProps> = ({}) => {
	const linkList = linksFooter()
	return (
		<footer className={styles.container}>
			<div className={styles.containerCallToAction}>
				<h3 className={styles.titleCall}>
					Ditch your bloated form builder and focus on what matters the most.
				</h3>
				<p className={styles.subtitleCall}>
					Create a form, embed it into your website and share it with your
					clients, in minutes.
				</p>
				<Link to='/' className={styles.linkCall}>
					Get started for free
				</Link>
			</div>
			<div className={styles.containerInfo}>
				<div className={styles.containerLogoAndDesc}>
					<img src={logo} alt='Logo useform' />
					<p>
						Useform is a form-builder for the modern web. Drag-and-drop fields,
						customize in minutes and embed in seconds on any website.
					</p>
				</div>
				<div className={styles.containerLists}>
					{linkList.map((list) => (
						<div className={styles.containerTitleAndList}>
							<p className={styles.titleList}>{list.title}</p>
							<ul className={styles.containerList}>
								{list.list.map((link) => (
									<li className={styles.itemList}>
										<Link to={link.href} className={styles.linkList}>
											{link.text}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
			<div className={styles.containerCopy}>
				<p>© Copyright 2023. All Rights Reserved.</p>
			</div>
		</footer>
	)
}

export default Footer
