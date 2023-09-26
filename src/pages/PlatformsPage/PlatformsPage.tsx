import { SupportedPlatforms } from './components/SupportedPlatforms'
import { TitlePlatforms } from './components/TitlePlatforms'

export type PlatformsPageProps = {}

const PlatformsPage: React.FC<PlatformsPageProps> = ({}) => {
	return (
		<>
			<TitlePlatforms />
			<SupportedPlatforms />
		</>
	)
}

export default PlatformsPage
