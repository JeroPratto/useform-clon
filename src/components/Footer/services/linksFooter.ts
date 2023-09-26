import listLinkFooterModel from '@/models/listLinkFooterModel'

export default function linksFooter(): listLinkFooterModel[] {
	const links: listLinkFooterModel[] = [
		{
			title: 'Updates & Legal',
			list: [
				{ href: '#', text: 'Changelog' },
				{ href: '#', text: 'Blog' },
				{ href: '#', text: 'Privacy Policy' },
				{ href: '#', text: 'Terms of Service' },
			],
		},
		{
			title: 'Product',
			list: [
				{ href: '#', text: 'Pricing' },
				{ href: '#', text: 'Features' },
			],
		},
		{
			title: 'Platforms',
			list: [
				{ href: '#', text: 'All platforms' },
				{ href: '#', text: 'Framer' },
				{ href: '#', text: 'Wordpress' },
				{ href: '#', text: 'Squarespace' },
				{ href: '#', text: 'Wix' },
			],
		},
	]
	return links
}
