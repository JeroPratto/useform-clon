import { ReactNode, useEffect, useState } from 'react'
import { Navbar } from '../Navbar'
import { Footer } from '../Footer'
import { useLocation } from 'react-router-dom'

export type HandleShowNavAndFooterProps = {
	children: ReactNode
}

const HandleShowNavAndFooter: React.FC<HandleShowNavAndFooterProps> = ({
	children,
}) => {
	const [show, setShow] = useState(false)
	const location = useLocation()
	useEffect(() => {
		// scroll top when change page
		window.scrollTo(0, 0)
		const pathname = location.pathname
		if (pathname === '/login') setShow(false)
		else setShow(true)
	}, [location])
	return (
		<>
			{show && <Navbar />}
			{children}
			{show && <Footer />}
		</>
	)
}

export default HandleShowNavAndFooter
