import React from 'react';
import Container from '@/components/Container';
import { siteDetails } from '@/data/siteDetails';

export const metadata = {
    title: `Privacy Policy - ${siteDetails.siteName}`,
    description: `Privacy Policy for ${siteDetails.siteName}`,
};

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="min-h-screen bg-background text-foreground py-20">
            <Container>
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 manrope">
                        Privacy Policy
                    </h1>
                    <p className="text-foreground-accent mb-8">
                        Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>

                    <div className="prose prose-lg max-w-none space-y-8">
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">1. Introduction</h2>
                            <p className="text-foreground-accent leading-relaxed">
                                Welcome to Posely. We are committed to protecting your privacy and ensuring your data is handled securely. This Privacy Policy explains how we collect, use, and protect your personal information when you use the Posely iOS application and website (collectively, the "Service").
                            </p>
                            <p className="text-foreground-accent leading-relaxed mt-3">
                                By using the Service, you agree to the collection and use of information in accordance with this policy. We ensure that our practices comply with all major data protection regulations and the Apple App Store Review Guidelines regarding User Privacy.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">2. Information We Collect</h2>
                            <p className="text-foreground-accent leading-relaxed mb-4">
                                In order to provide you with the best experience for discovering poses, saving photography setups, and tracking your photo sessions, we collect the following types of information:
                            </p>

                            <div className="bg-hero-background p-6 rounded-lg mb-4">
                                <h3 className="text-xl font-semibold mb-3 manrope">Account and Profile Data</h3>
                                <ul className="list-disc pl-6 space-y-2 text-foreground-accent">
                                    <li><strong>Name and Email Address</strong> - To create your account and communicate with you.</li>
                                    <li><strong>Phone Number</strong> - For account recovery and verification (if provided).</li>
                                    <li><strong>Optional Demographics</strong> - Such as gender and birthday to personalize pose recommendations.</li>
                                    <li><strong>Profile Image</strong> - If you choose to upload one.</li>
                                </ul>

                                <h3 className="text-xl font-semibold mt-6 mb-3 manrope">App Usage Data</h3>
                                <ul className="list-disc pl-6 space-y-2 text-foreground-accent">
                                    <li><strong>Liked and Recent Poses</strong> - To curate your favorite poses and track your recent activity.</li>
                                    <li><strong>Camera Setups</strong> - Your specified camera device, tripod height, distance, lighting, and accessories.</li>
                                    <li><strong>Photo Sessions</strong> - Captured images linked to poses and setups, securely stored in our cloud infrastructure.</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">3. How We Use Your Information</h2>
                            <p className="text-foreground-accent leading-relaxed mb-4">
                                The data we collect is solely used to operate, maintain, and improve the Posely app. Specifically, we use your data to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-foreground-accent">
                                <li>Enable you to create a personalized account and sign in securely.</li>
                                <li>Provide and store your curated lists of favorite and recent poses.</li>
                                <li>Allow you to record detailed camera setups and log your photography sessions.</li>
                                <li>Host and retrieve your uploaded photo session images.</li>
                                <li>Improve our application's pose discovery algorithms and overall user experience.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">4. Third-Party Services and Data Storage</h2>
                            <p className="text-foreground-accent leading-relaxed mb-4">
                                We utilize <strong>Supabase</strong> to power our backend infrastructure.
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-foreground-accent mb-4">
                                <li><strong>Authentication & Database:</strong> Supabase securely manages user accounts and stores your text data (setups, liked poses). Data is encrypted in transit and at rest.</li>
                                <li><strong>Storage Buckets:</strong> Your uploaded profile pictures and photo session images are securely stored in Supabase storage buckets.</li>
                            </ul>
                            <p className="text-foreground-accent leading-relaxed">
                                We do not sell your personal data to third parties, nor do we share it with advertising networks. Access to your data is strictly limited to your authenticated account via Row-Level Security (RLS) policies over the database.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">5. Your Data Rights & Deletion</h2>
                            <p className="text-foreground-accent leading-relaxed mb-4">
                                You have complete control over your data. You may at any time:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-foreground-accent">
                                <li><strong>Access and Modify:</strong> Update your profile details, edit your setups, or remove photo sessions directly within the Posely app.</li>
                                <li><strong>Account Deletion:</strong> You can delete your account entirely from the app settings. Deleting your account will result in the immediate and permanent deletion of your profile, setups, liked poses, and stored images from our servers, complying with Apple App Store guidelines.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">6. Children's Privacy</h2>
                            <p className="text-foreground-accent leading-relaxed mb-4">
                                Our Service is not directed to anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and are aware that your child has provided us with personal data, please contact us so we can take necessary actions to delete the information.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">7. Changes to This Privacy Policy</h2>
                            <p className="text-foreground-accent leading-relaxed">
                                We may update our Privacy Policy from time to time to reflect changes to our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by updating the "Last updated" date at the top of this page. You are advised to review this Privacy Policy periodically for any changes.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">8. Contact Us</h2>
                            <p className="text-foreground-accent leading-relaxed mb-4">
                                If you have any questions, concerns, or requests regarding this privacy policy or our data practices, please contact our support team at:
                            </p>
                            <div className="bg-hero-background p-6 rounded-lg border border-border">
                                <p className="text-foreground-accent mb-2">
                                    <strong>Email:</strong> <a href="mailto:posely.circle@gmail.com" className="text-primary hover:underline">posely.circle@gmail.com</a>
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default PrivacyPolicy;
