export default interface PricingModel {
	price: string
	name: string
	description: string
	list: AdvantajePlan[]
}

interface AdvantajePlan {
	available: boolean
	text: string
}
