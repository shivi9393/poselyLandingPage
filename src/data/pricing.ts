import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
        name: 'Basic',
        price: 0,
        features: [
            'Access to 100+ standard poses',
            'Save up to 5 camera setups',
            'Basic photo session tracking',
            'Community support',
        ],
    },
    {
        name: 'Pro',
        price: 9,
        features: [
            'Access to all premium poses',
            'Unlimited camera setups',
            'Advanced photo session history',
            'Export setup configurations',
            'Priority support',
        ],
    },
    {
        name: 'Studio',
        price: 'Custom',
        features: [
            'Everything in Pro',
            'Team collaboration',
            'Multiple user profiles',
            'Custom branding',
            'API access',
            'Dedicated account manager',
        ],
    },
]