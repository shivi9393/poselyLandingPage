import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "footer1 [subheading text]",
    quickLinks: [
        {
            text: "Features",
            url: "#features"
        },
        {
            text: "Contact",
            url: "/contact"
        },
        {
            text: "Privacy Policy",
            url: "/privacy"
        },
        {
            text: "Terms of Service",
            url: "/terms"
        }
    ],
    email: 'posely.circle@gmail.com',
    telephone: '',
    socials: {
        github: 'https://github.com/proSamik/lighteweight-starter-kit-ios-app',
        x: 'https://x.com/',
        facebook: 'https://facebook.com',
        // youtube: 'https://youtube.com',
        linkedin: 'https://www.linkedin.com',
        // threads: 'https://www.threads.net',
        instagram: 'https://www.instagram.com',
    }
}