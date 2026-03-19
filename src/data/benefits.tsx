import { FiCamera, FiSun, FiAperture, FiImage, FiHeart, FiClock, FiSettings, FiStar, FiUserCheck } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Discover Your Best Angles",
        description: "Explore a vast collection of poses. Swipe through categories to find the perfect pose for any occasion, from casual selfies to professional shoots.",
        bullets: [
            {
                title: "Extensive Pose Library",
                description: "Access hundreds of curated poses organized by difficulty, type, and target audience.",
                icon: <FiImage size={26} />
            },
            {
                title: "Save Your Favorites",
                description: "Heart the poses you love and keep them ready for your next photo session.",
                icon: <FiHeart size={26} />
            },
            {
                title: "Recently Viewed",
                description: "Never lose track of a pose. Easily revisit your recent discoveries.",
                icon: <FiClock size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
    {
        title: "Master the Perfect Setup",
        description: "Great photography is about lighting and setup. Posely helps you record and replicate the perfect conditions for every shot.",
        bullets: [
            {
                title: "Camera & Tripod Tracking",
                description: "Save your exact camera model, lens, and tripod height for consistent results.",
                icon: <FiCamera size={26} />
            },
            {
                title: "Lighting Conditions",
                description: "Remember the best time of day and lighting used for each setup.",
                icon: <FiSun size={26} />
            },
            {
                title: "Setup Accessories",
                description: "Keep a checklist of reflectors, diffusers, and other accessories used.",
                icon: <FiAperture size={26} />
            }
        ],
        imageSrc: "/images/mockup-2.webp"
    },
    {
        title: "Track Your Photography Journey",
        description: "Link your favorite poses with the best setups into personalized 'Photo Sessions'. Review what works and improve your craft over time.",
        bullets: [
            {
                title: "Session History",
                description: "Look back at past photo sessions to see your captured images, setups, and poses.",
                icon: <FiSettings size={26} />
            },
            {
                title: "Personalized Profiles",
                description: "Manage your profile, track your progress, and keep your creativity organized.",
                icon: <FiUserCheck size={26} />
            },
            {
                title: "Rate and Review",
                description: "Build an understanding of what setups work best for you.",
                icon: <FiStar size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
]