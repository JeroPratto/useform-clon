import { Link } from 'react-router-dom'
import styles from './styles/navbar.module.css'
import Logo from './images/logo.png'
import navigationLinks from './services/navigationLinks'
import { useState } from 'react'
import menu from './images/hamburguer.svg'

export type NavbarProps = {}

const Navbar: React.FC<NavbarProps> = ({}) => {
	const links = navigationLinks()
	const [open, setOpen] = useState(false)
	return (
		<div className={styles.navbar}>
			<div className={styles.container}>
				<div className={styles.containerLogoAndBtnMenu}>
					<Link to={'/'} className={styles.containerLogo}>
						<img src={Logo} alt='Logo' className={styles.logo} />
					</Link>
					<button onClick={() => setOpen(!open)} className={styles.btnMenu}>
						<img src={menu} alt={open ? 'close menu' : 'open menu'} />
					</button>
				</div>
				<div
					className={`${styles.containerLoginAndNavigation} ${
						open ? styles.open : ''
					}`}
				>
					<ul className={styles.containerNavigation}>
						{links.map((link) => (
							<li className={styles.itemNavigation}>
								<Link to={link.href}>{link.text}</Link>
							</li>
						))}
					</ul>
					<div className={styles.containerLogin}>
						<Link to={'/login'} className={styles.btnLogin}>
							Sign In
						</Link>
						<Link to={'//login'} className={styles.btnStar}>
							Get started for free
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar
