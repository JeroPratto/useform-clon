import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import { HandleShowNavAndFooter } from './components/HandleShowNavAndFooter'
import { PricingPage } from './pages/PricingPage'
import { PlatformsPage } from './pages/PlatformsPage'
import { LoginPage } from './pages/LoginPage'

function App() {
	return (
		<BrowserRouter>
			<HandleShowNavAndFooter>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/pricing' element={<PricingPage />} />
					<Route path='/platforms' element={<PlatformsPage />} />
					<Route path='/login' element={<LoginPage />} />
				</Routes>
			</HandleShowNavAndFooter>
		</BrowserRouter>
	)
}

export default App
