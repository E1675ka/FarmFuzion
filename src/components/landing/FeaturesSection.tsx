import Link from 'next/link';

const FeaturesSection = () => {
    return (
        <section className="w-full flex flex-col gap-20 py-20 bg-background-cream">
            {/* Who We Are */}
            <div className="container mx-auto px-6 md:px-12 lg:px-20 grid md:grid-cols-2 gap-12 items-center">
                <div className="relative h-[400px] w-full bg-gray-300 rounded-3xl overflow-hidden flex items-center justify-center">
                    <span className="text-gray-500 font-bold text-2xl">Image: Who We Are</span>
                </div>
                <div>
                    <span className="text-primary-green font-heading font-bold uppercase tracking-widest text-sm mb-2 block">Who We Are</span>
                    <h2 className="text-3xl font-heading font-bold text-primary-dark mb-6">
                        We exist to build a more granting, reliable, and future-ready agricultural ecosystem
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        For the over 500 million small holder farmers in Africa, agriculture is not just a profession—it's a livelihood.
                    </p>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Yet they lack access to finance, quality inputs, and reliable markets. We leverage technology to solve these challenges.
                    </p>
                </div>
            </div>

            {/* We Saw A Gap */}
            <div className="container mx-auto px-6 md:px-12 lg:px-20 grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                    <h2 className="text-3xl font-heading font-bold text-primary-dark mb-4">We saw a gap and an opportunity</h2>
                    <p className="text-gray-600 mb-4">
                        We saw a gap: farmers working hard but missing the resources to truly prosper.
                    </p>
                    <p className="text-gray-600 mb-4">
                        And we saw an opportunity: to use data and digital tools to unlock the full potential of African agriculture.
                    </p>
                </div>
                {/* Empty or decorative side */}
                <div className="order-1 md:order-2 hidden md:block"></div>
            </div>


            {/* Where We Work */}
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <h2 className="text-3xl font-heading font-bold text-primary-dark mb-12">Where We Work</h2>
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1">
                        <p className="text-gray-600 mb-6 text-lg">
                            With offices in Kenya and operations across Uganda, DRC, and Rwanda, our footprint is expanding as we welcome more farmers to the platform.
                        </p>

                        <div className="mt-8">
                            <h3 className="text-2xl font-heading font-bold text-primary-dark mb-4">Ready to Join the Transformation?</h3>
                            <div className="flex gap-4">
                                <Link href="#" className="bg-primary-green text-surface-white px-6 py-2 rounded-full font-heading font-bold hover:bg-opacity-90 shadow-md">
                                    Register Now
                                </Link>
                                <Link href="#" className="border border-primary-green text-primary-green px-6 py-2 rounded-full font-heading font-bold hover:bg-primary-green hover:text-surface-white transition-all shadow-md">
                                    Partner With Us →
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 relative h-[400px] w-full bg-gray-200 rounded-3xl flex items-center justify-center">
                        <span className="text-gray-400 font-bold">Map of Africa Placeholder</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
