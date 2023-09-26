import { DescriptionsProduct } from './components/DescriptionsProduct'
import { HomeMain } from './components/HomeMain'
import { IntegratePlatforms } from './components/IntegratePlatforms'
import { PackedFeatures } from './components/PackedFeatures'

export type HomePageProps = {}

const HomePage: React.FC<HomePageProps> = ({}) => {
	return (
		<div>
			<HomeMain />
			<DescriptionsProduct />
			<PackedFeatures />
			<IntegratePlatforms />
		</div>
	)
}

export default HomePage
