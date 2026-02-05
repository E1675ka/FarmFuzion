import Link from 'next/link';

const MobileAppSection = () => {
    return (
        <section className="w-full bg-surface-white py-20 px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-dark mb-6 leading-tight">
                    Mobile-first and offline-accessible, FarmFuzion bridges the gap between financial
                </h2>
                <div className="flex gap-4 mt-8">
                    <Link href="#" className="bg-primary-green text-surface-white px-6 py-2 rounded-full font-heading font-medium hover:bg-opacity-90 transition-all shadow-md">
                        Register Now
                    </Link>
                    <Link href="#" className="border border-primary-green text-primary-green px-6 py-2 rounded-full font-heading font-medium hover:bg-primary-green hover:text-surface-white transition-all shadow-md">
                        Contact Sales
                    </Link>
                </div>
            </div>
            <div className="flex-1 flex justify-center gap-4 relative">
                {/* Phone mockups placeholder */}
                <div className="w-[200px] h-[400px] bg-gray-100 rounded-[2rem] border-8 border-gray-800 shadow-2xl flex items-center justify-center relative translate-y-10">
                    <span className="text-xs text-center p-2">App Screenshot 1</span>
                </div>
                <div className="w-[200px] h-[400px] bg-gray-100 rounded-[2rem] border-8 border-gray-800 shadow-2xl flex items-center justify-center relative -translate-y-10 z-10">
                    <span className="text-xs text-center p-2">App Screenshot 2</span>
                </div>
            </div>
        </section>
    );
};

export default MobileAppSection;
