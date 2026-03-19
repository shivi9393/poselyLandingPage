import React from 'react';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

import AppStoreButton from './AppStoreButton';

import { heroDetails } from '@/data/hero';

const Hero: React.FC = () => {
    return (
        <section
            id="hero"
            className="relative flex flex-col items-center justify-center pb-0 pt-32 md:pt-40 px-5"
        >
            {/* Background grid */}
            <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
                <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]">
                </div>
            </div>

            {/* Blur fade at bottom */}
            <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-40 bg-gradient-to-b from-transparent via-[rgba(233,238,255,0.5)] to-[rgba(202,208,230,0.5)]">
            </div>

            {/* Text */}
            <div className="text-center">
                <h1 className="text-4xl md:text-6xl md:leading-tight font-bold text-foreground max-w-lg md:max-w-2xl mx-auto">{heroDetails.heading}</h1>
                <p className="mt-4 text-foreground max-w-lg mx-auto">{heroDetails.subheading}</p>
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center sm:gap-4 w-fit mx-auto">
                    <AppStoreButton dark />
                </div>
                <div className="mt-3">
                    <Link
                        href="https://github.com/shivi9393/poselyLandingPage"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button
                            type="button"
                            className="inline-flex items-center justify-center min-w-[205px] px-6 h-14 rounded-full bg-foreground text-background hover:opacity-90 transition-opacity"
                        >
                            <div className="mr-3">
                                <FaGithub className="w-[30px] h-[30px]" />
                            </div>
                            <div>
                                <div className="text-xs">
                                    View on
                                </div>
                                <div className="-mt-1 font-sans text-xl font-semibold">
                                    GitHub
                                </div>
                            </div>
                        </button>
                    </Link>
                </div>
            </div>

            {/* Multi-screenshot showcase */}
            <div className="relative mt-12 md:mt-16 flex items-end justify-center gap-4 md:gap-6 z-10 w-full max-w-4xl mx-auto">
                {/* Center - Home screen */}
                <div className="w-[260px] md:w-[300px] flex-shrink-0 shadow-2xl rounded-[2.5rem] overflow-hidden border-4 border-white z-20">
                    <Image
                        src={heroDetails.centerImageSrc}
                        width={300}
                        height={640}
                        quality={100}
                        priority
                        alt="Posely home screen"
                        className="w-full h-auto object-cover"
                        unoptimized
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
