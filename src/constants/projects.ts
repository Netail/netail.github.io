import type { Project } from '../interfaces/project';

export const PROJECTS: Project[] = [
    {
        image: '/assets/img/allerhande.jpg',
        title: 'Albert Heijn - Allerhande',
        description:
            'DevOps for the Allerhande section on the Albert Heijn e-commerce website',
        href: 'https://www.ah.nl/allerhande',
    },
    {
        image: '/assets/img/github-action.png',
        title: 'Webhook Notifier',
        description:
            'A Github Action to send the same message to multiple webhooks at once',
        href: 'https://github.com/Netail/webhook-notifier',
    },
    {
        image: '/assets/img/stock-finder.jpg',
        title: 'Albert Heijn - Product Finder',
        description:
            'A widget to search if a product is in the assortment of a certain store',
    },
    {
        image: '/assets/img/noodplan.jpg',
        title: 'Albert Heijn - Fallback Page',
        description:
            'A fallback page for when the website is down, featuring an FAQ, cached recipes, folders and store information',
    },
    {
        image: '/assets/img/loka2loka.jpg',
        title: 'Loka 2 Loka',
        description:
            'An e-commerce platform on which farmers can sell their goods directly to customers',
    },
    {
        image: '/assets/img/weight-tracker.jpg',
        title: 'Weight Tracker dApp + Smart Contract',
        description:
            'A blockchain dApp interacting with an Ethereum smart contract',
        href: 'https://github.com/Netail/hva-blockchain-development',
    },
    {
        image: '/assets/img/bollie.jpg',
        title: 'Bollie',
        description:
            'A third-party Bol.com orders/inventory management Android application',
    },
];
