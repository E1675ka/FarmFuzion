import Link from 'next/link';

const Hero = () => {
    return (
        <section className="relative w-full bg-surface-white overflow-hidden pt-12 pb-20 px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center gap-12">

            {/* Text Content */}
            <div className="flex-1 max-w-2xl z-10">
                <h1 className="text-h2 md:text-h1 text-primary-dark leading-tight mb-6">
                    We connect farmers, <br className="hidden lg:block" />
                    cooperatives and <br className="hidden lg:block" />
                    service providers <br className="hidden lg:block" />
                    through one <br className="hidden lg:block" />
                    platform
                </h1>
                <p className="text-body-lg text-secondary-green mb-8 max-w-xl">
                    FarmFuzion makes agriculture more predictable and profitable through an integrated ecosystem for managing inputs, finances, sourcing, warehousing, and nutritional support.
                </p>
                <div className="flex flex-wrap gap-4">
                    <Link href="#" className="bg-primary-green text-surface-white px-8 py-3 rounded-full font-heading font-bold hover:bg-opacity-90 transition-all shadow-lg flex items-center gap-2">
                        Get Started <span className="text-xl">→</span>
                    </Link>
                    <Link href="#" className="border-2 border-primary-green text-primary-green px-8 py-3 rounded-full font-heading font-bold hover:bg-primary-green hover:text-surface-white transition-all flex items-center gap-2">
                        See Video <span className="bg-primary-green text-surface-white rounded-full p-1 text-xs">▶</span>
                    </Link>
                </div>

                {/* Floating Abstract Elements (Decorations) */}
                <div className="absolute top-10 left-[-50px] w-20 h-20 bg-primary-green opacity-10 rounded-full blur-2xl"></div>
            </div>

            {/* Image Content */}
            <div className="flex-1 relative w-full flex justify-center lg:justify-end">
                {/* Green shape background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary-green/20 to-transparent rounded-full blur-3xl -z-10"></div>

                {/* Start using generated image or placeholder */}
                <div className="relative z-10 w-full max-w-[500px] h-[500px] bg-gray-200 rounded-3xl overflow-hidden shadow-2xl border-4 border-surface-white">
                    {/* Placeholder for Hero Image */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-heading">
                        Hero Image Placeholder
                        (Farmer using tablet)
                    </div>
                    {/* Creating the overlapping card effect from design if possible */}
                    <div className="absolute bottom-10 left-[-20px] bg-surface-white p-4 rounded-xl shadow-lg border border-gray-100 max-w-[200px]">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-primary-green font-bold">$</div>
                            <span className="font-heading font-bold text-sm">Financial Access</span>
                        </div>
                        <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-primary-green w-[75%]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
