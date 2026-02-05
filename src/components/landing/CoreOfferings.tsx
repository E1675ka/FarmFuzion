import Link from 'next/link';

const offerings = [
    { title: "Financial Access", description: "Get connected to loans and grants tailored for agriculture." },
    { title: "System Transparency", description: "Monitor inputs and yields with clear data tracking." },
    { title: "Linkage to Market", description: "Direct connection to buyers with fair prices." },
    { title: "Value Chain Management", description: "Optimize every step from planting to harvest." },
    { title: "Higher Income for Farmers", description: "Better yields and markets mean more profit." },
    { title: "Explore Our Service", description: "Discover all the tools available on the platform.", isLink: true }
];

const CoreOfferings = () => {
    return (
        <section className="w-full bg-surface-white py-20 px-6 md:px-12 lg:px-20">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-primary-dark mb-16">Our Core Offerings</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {offerings.map((item, idx) => (
                    <div key={idx} className="bg-background-cream p-8 rounded-3xl hover:shadow-xl transition-shadow duration-300 border border-transparent hover:border-primary-green/20 group cursor-default">
                        <div className="w-12 h-12 bg-surface-white rounded-full flex items-center justify-center text-primary-green mb-6 shadow-sm group-hover:bg-primary-green group-hover:text-surface-white transition-colors">
                            <span className="font-bold text-xl">{idx + 1}</span>
                        </div>
                        <h3 className="text-xl font-heading font-bold text-primary-dark mb-3">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            {item.description}
                        </p>
                        {item.isLink && (
                            <Link href="#" className="mt-4 inline-block text-primary-green font-bold text-sm underline decoration-2 underline-offset-4 hover:text-primary-dark transition-colors">
                                Learn More
                            </Link>
                        )}
                    </div>
                ))}
            </div>

            <div className="mt-16 text-center">
                <h3 className="text-2xl font-heading font-bold text-primary-dark mb-6">Ready to Revolutionize How You Farm,<br /> Finance, or Source?</h3>
                <div className="flex justify-center gap-4">
                    <Link href="#" className="bg-primary-green text-surface-white px-8 py-3 rounded-full font-heading font-bold hover:bg-opacity-90 shadow-md">
                        Sign Up Now
                    </Link>
                    <Link href="#" className="border border-primary-green text-primary-green px-8 py-3 rounded-full font-heading font-bold hover:bg-primary-green hover:text-surface-white transition-all shadow-md">
                        Learn More
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CoreOfferings;
