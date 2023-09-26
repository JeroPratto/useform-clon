import descriptionsProductModel from '@/models/descriptionProductModel'

export default function descriptionsProduct(): descriptionsProductModel[] {
	const descriptions: descriptionsProductModel[] = [
		{
			preTitle: 'Easy to use',
			title: 'Create stunning forms in minutes, without code.',
			description:
				'Create an embeddable or hosted form, for any website, in minutes.',
			list: [
				'Drag & drop form-builder optimized for busy people.',
				'10+ different types of fields.',
				'Powerful and flexible to meet your needs.',
			],
			urlImage: 'descriptionsProduct/img-0.webp',
		},
		{
			preTitle: 'Integration made simple',
			title: 'Embed into your website, or use our hosted form.',
			description:
				'Make it personal and embed it into your website (HTML, Framer, etc). Or use the hosted form, and share the link with your audience.',
			list: [
				'Easy HTML embed, 3 lines of code.',
				'Integrate with many platforms.',
				'Hosted form with shareable link.',
			],
			urlImage: 'descriptionsProduct/img-1.webp',
		},
		{
			preTitle: 'Styling & branding',
			title: 'Your brand will shine, not ours.',
			description:
				'Its important for us to make sure your forms reflect your branding or client branding. We took styling further than any other form builder.',
			list: [
				'30+ different styling options.',
				'Styling works on both embed & hosted forms.',
				'Inject custom CSS on your forms (soon).',
			],
			urlImage: 'descriptionsProduct/img-2.webp',
		},
		{
			preTitle: 'File uploading',
			title: 'Receive files and images through your forms',
			description:
				'Building file uploading is a pain. We made it easy for you to receive any type of files through your forms.',
			list: [
				'Receive files and images through your forms.',
				'Restrict file types.',
				'Allow one or multiple files per upload.',
			],
			urlImage: 'descriptionsProduct/img-3.webp',
		},
	]
	return descriptions
}
