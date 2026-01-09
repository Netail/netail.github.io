import type { Project } from "../interfaces/project";

export const PROJECTS: Project[] = [
	{
		image: "/assets/img/allerhande.png",
		title: "Albert Heijn - Allerhande",
		description:
			"DevOps for the Allerhande section on the Albert Heijn e-commerce website",
		href: "https://www.ah.nl/allerhande",
	},
	{
		image: "/assets/img/are-we-biome-yet.png",
		title: "Are We Biome Yet?",
		description:
			"A overview widget to check which eslint rules have been migrated to Biome",
		href: "https://netail.dev/are-we-biome-yet",
	},
	{
		image: "/assets/img/guess-the-jam.png",
		title: "Guess the Jam",
		description: "Guess the track based on a AI image",
		href: "https://netail.dev/guess-the-jam",
	},
	{
		image: "/assets/img/stock-finder.jpg",
		title: "Albert Heijn - Product Finder",
		description:
			"A widget to search if a product is in the assortment of a certain store",
	},
	{
		image: "/assets/img/noodplan.jpg",
		title: "Albert Heijn - Fallback Page",
		description:
			"A fallback page for when the website is down, featuring an FAQ, cached recipes, folders and store information",
	},
	{
		image: "/assets/img/loka2loka.png",
		title: "Loka 2 Loka",
		description:
			"An e-commerce platform on which farmers can sell their goods directly to customers",
	},
	{
		image: "/assets/img/weight-tracker.png",
		title: "Weight Tracker dApp + Smart Contract",
		description:
			"A blockchain dApp interacting with an Ethereum smart contract",
		href: "https://github.com/Netail/hva-blockchain-development",
	},
	{
		image: "/assets/img/bollie.jpg",
		title: "Bollie",
		description:
			"A third-party Bol.com orders/inventory management Android application",
	},
];

export const SIDE_PROJECTS: Project[] = [
	{
		image: "/assets/img/biome.png",
		title: "Biome",
		description: "One toolchain for your web project",
		href: "https://biomejs.dev",
	},
	{
		image: "/assets/img/github-action.png",
		title: "Webhook Notifier",
		description:
			"A Github Action to send the same message to multiple webhooks at once",
		href: "https://github.com/Netail/webhook-notifier",
	},
	{
		image: "/assets/img/github-action.png",
		title: "PR Comments",
		description:
			"A small CLI tool for in the CI to easily send a GitHub comment in a pull-request",
		href: "https://github.com/Netail/pr-comments",
	},
];
