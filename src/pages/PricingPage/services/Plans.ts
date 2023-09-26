import PricingModel from '@/models/pricingModel'

export default function Plans(): PricingModel[] {
	const plans: PricingModel[] = [
		{
			price: '0',
			name: 'Free',
			description:
				'Perfect for trying out the platform and see if it fits your needs',
			list: [
				{ available: true, text: '3 forms' },
				{ available: true, text: '50 submissions per moth' },
				{ available: true, text: 'CSV Export' },
				{ available: true, text: 'Custom form style' },
				{ available: false, text: 'Remove Useform branding' },
				{ available: false, text: 'Email notifications' },
				{ available: false, text: 'Form submissions uploads' },
				{ available: false, text: 'ReCAPTCHA' },
				{ available: false, text: 'Webhooks' },
			],
		},
		{
			price: '19',
			name: 'Starter',
			description: 'Best for freelancers & small-to-medium teams',
			list: [
				{ available: true, text: '10 forms' },
				{ available: true, text: '5,000 submissions per moth' },
				{ available: true, text: 'CSV Export' },
				{ available: true, text: 'Custom form style' },
				{ available: true, text: 'Remove Useform branding' },
				{ available: true, text: 'Email notifications' },
				{ available: true, text: 'Form submissions uploads' },
				{ available: true, text: 'ReCAPTCHA' },
				{ available: false, text: 'Webhooks' },
			],
		},
		{
			price: '64',
			name: 'Professional',
			description: 'Best for growing startups & agencies',
			list: [
				{ available: true, text: '50 forms' },
				{ available: true, text: '30,000 submissions per moth' },
				{ available: true, text: 'CSV Export' },
				{ available: true, text: 'Custom form style' },
				{ available: true, text: 'Remove Useform branding' },
				{ available: true, text: 'Email notifications' },
				{ available: true, text: 'Form submissions uploads' },
				{ available: true, text: 'ReCAPTCHA' },
				{ available: true, text: 'Webhooks' },
			],
		},
		{
			price: '179',
			name: 'Business',
			description: 'Best for large businesses & agencies',
			list: [
				{ available: true, text: '1,000 forms' },
				{ available: true, text: '150,000 submissions per moth' },
				{ available: true, text: 'CSV Export' },
				{ available: true, text: 'Custom form style' },
				{ available: true, text: 'Remove Useform branding' },
				{ available: true, text: 'Email notifications' },
				{ available: true, text: 'Form submissions uploads' },
				{ available: true, text: 'ReCAPTCHA' },
				{ available: true, text: 'Webhooks' },
			],
		},
	]
	return plans
}
