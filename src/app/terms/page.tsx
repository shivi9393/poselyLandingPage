import React from 'react';
import Container from '@/components/Container';
import { siteDetails } from '@/data/siteDetails';

export const metadata = {
    title: `Terms of Service - ${siteDetails.siteName}`,
    description: `Terms of Service for ${siteDetails.siteName}`,
};

const TermsOfService: React.FC = () => {
    return (
        <div className="min-h-screen bg-background text-foreground py-20">
            <Container>
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 manrope">
                        Terms of Service
                    </h1>
                    <p className="text-foreground-accent mb-8">
                        Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>

                    <div className="prose prose-lg max-w-none space-y-8">
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">1. Acceptance of Terms</h2>
                            <p className="text-foreground-accent leading-relaxed">
                                By downloading, accessing, or using the Posely iOS application and its associated website (the "Service"), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use our Service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">2. Description of Service</h2>
                            <p className="text-foreground-accent leading-relaxed">
                                Posely is a platform that allows photographers, models, and enthusiasts to discover poses, record their camera and lighting setups, and track their photography sessions.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">3. User Accounts</h2>
                            <ul className="list-disc pl-6 space-y-2 text-foreground-accent">
                                <li>You must be at least 13 years old to use the Service.</li>
                                <li>You are responsible for safeguarding the password that you use to access the Service and for any activities under your account.</li>
                                <li>You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">4. User Content</h2>
                            <p className="text-foreground-accent leading-relaxed mb-4">
                                Our Service allows you to upload, link, store, and share certain information, text, graphics, or other material ("Content"), specifically photographs from your sessions and camera setups.
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-foreground-accent">
                                <li><strong>Ownership:</strong> You retain all ownership rights to the Content you upload. Posely claims no copyright ownership over your photographs or setups.</li>
                                <li><strong>Responsibility:</strong> You are entirely responsible for the Content you post. You warrant that your Content does not violate any third-party rights, including copyrights, privacy rights, or trademarks.</li>
                                <li><strong>Prohibited Content:</strong> You agree not to upload any Content that is illegal, explicit, abusive, or harmful. We reserve the right to remove Content that violates these terms without prior notice.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">5. Intellectual Property</h2>
                            <p className="text-foreground-accent leading-relaxed">
                                The Service and its original content (excluding Content provided by users), features, and functionality are and will remain the exclusive property of Posely and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">6. Termination</h2>
                            <p className="text-foreground-accent leading-relaxed">
                                We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease. You may also terminate your account at any time through the app settings, which will prompt the deletion of your data.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">7. Limitation of Liability</h2>
                            <p className="text-foreground-accent leading-relaxed">
                                In no event shall Posely, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; or (iii) unauthorized access, use or alteration of your transmissions or content.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">8. Contact Us</h2>
                            <p className="text-foreground-accent leading-relaxed">
                                If you have any questions about these Terms, please contact us at: <a href="mailto:posely.circle@gmail.com" className="text-primary hover:underline">posely.circle@gmail.com</a>
                            </p>
                        </section>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default TermsOfService;
