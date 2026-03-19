import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: 'What is Posely?',
        answer: 'Posely is an iOS application designed to help photographers and models discover new poses, save their camera and lighting setups, and track their photo sessions. All in one place.',
    },
    {
        question: 'Is Posely free to use?',
        answer: 'Yes, Posely has a basic tier that allows you to discover poses, create an account, and save a limited number of setups for free. We also offer premium plans with advanced features.',
    },
    {
        question: 'Do I need to create an account?',
        answer: 'While you can browse some poses anonymously, creating an account lets you save your favorite poses, track your recent views, and log your photography setups securely using our Supabase backend.'
    },
    {
        question: 'Where is my data stored?',
        answer: 'Your account data, including your saved setups and liked poses, is securely stored. We use industry-standard encryption to ensure your data and images are safe.',
    },
    {
        question: 'How do I contact support?',
        answer: 'You can reach out to our team at posely.circle@gmail.com for any questions, issues, or feedback regarding the app.'
    }
];