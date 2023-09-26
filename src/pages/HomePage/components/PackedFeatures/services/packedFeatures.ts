import packedFeaturesModel from '@/models/packedFeaturesModel'

export default function packedFeatures(): packedFeaturesModel[] {
	const features: packedFeaturesModel[] = [
		{
			urlImage: '/packedFeatures/icon-0.svg',
			title: 'Easy to use',
			description:
				'An intuitive drag-and-drop form-builder for every use-case which you’ll love using.',
		},
		{
			urlImage: '/packedFeatures/icon-1.svg',
			title: 'Customize your forms',
			description:
				'We make it easy to customize your forms to fit your company or client branding, without code.',
		},
		{
			urlImage: '/packedFeatures/icon-2.svg',
			title: 'Save time & money',
			description:
				'Stop spending time & money on the development of forms, focus on what matters the most.',
		},
		{
			urlImage: '/packedFeatures/icon-3.svg',
			title: 'High Delivery',
			description:
				'We guarantee an high deliverability and uptime, thanks to our scalable infrastructure.',
		},
		{
			urlImage: '/packedFeatures/icon-4.svg',
			title: 'Integrate with your tools',
			description:
				'Never miss a submission, connect your forms to your favorite tools without disrupting your workflow.',
		},
		{
			urlImage: '/packedFeatures/icon-5.svg',
			title: 'Easily handle file uploads',
			description:
				'Allow file uploads on your submissions with ease, no extra setup required.      ',
		},
	]
	return features
}
