import Link from 'next/link';

const About = () => {
    return (
        <section className="w-full bg-background-cream py-20 px-6 md:px-12 lg:px-20">
            <div className="max-w-6xl mx-auto rounded-[3rem] overflow-hidden relative bg-primary-dark text-surface-white p-8 md:p-16 text-center">
                {/* Background pattern mask if needed */}
                <div className="absolute inset-0 bg-[#002f26] opacity-50 z-0"></div>

                <div className="relative z-10 flex flex-col items-center">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">About FarmFuzion</h2>
                    <p className="text-lg md:text-xl font-light max-w-4xl leading-relaxed opacity-90 mb-8">
                        FarmFuzion is a platform transforming smallholder farming into a sustainable and profitable business connected to trusted markets. We facilitate transparency and data-driven decision-making across the agricultural value chain.
                    </p>
                    <p className="text-base md:text-lg font-light max-w-3xl leading-relaxed opacity-80">
                        We bridge the gap between farmers, cooperatives, and service providers (inputs, finance, insurance, logistics marketing) to improve efficiency and income.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;