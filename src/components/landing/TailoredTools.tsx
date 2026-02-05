import Link from 'next/link';

const tools = [
    { title: "For Farmers", desc: "Access markets, finance, and inputs.", role: "Farmers" },
    { title: "For Cooperatives", desc: "Manage members and aggregate produce.", role: "Cooperatives" },
    { title: "For Service Providers", desc: "Offer insurance, logistics, and mechanization.", role: "Partners" },
    { title: "Market Access", desc: "Real-time pricing and buyer connection.", role: "Market" },
    { title: "Financial Inclusion", desc: "Credit scoring and loan management.", role: "Finance" },
    { title: "Data & Insights", desc: "Weather patterns and crop health analysis.", role: "Data" },
];

const TailoredTools = () => {
    return (
        <section className="w-full bg-surface-white py-20 px-6 md:px-12 lg:px-20">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-dark mb-4">
                    Tailored Tools for Everyone in the<br /> Agricultural Ecosystem
                </h2>
                <div className="w-24 h-1 bg-primary-green mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tools.map((tool, idx) => (
                    <div key={idx} className="group relative overflow-hidden rounded-2xl h-64 bg-gray-200">
                        {/* Placeholder Image Overlay */}
                        <div className="absolute inset-0 bg-primary-dark/40 group-hover:bg-primary-dark/60 transition-colors z-10"></div>
                        <div className="absolute inset-0 flex items-center justify-center text-4xl text-gray-400 font-bold opacity-30">IMG</div>

                        <div className="absolute bottom-0 left-0 p-6 z-20 text-surface-white w-full">
                            <span className="text-primary-green text-xs font-bold uppercase tracking-wider mb-2 block">{tool.role}</span>
                            <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary-green transition-colors">{tool.title}</h3>
                            <p className="text-sm opacity-90">{tool.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-16 text-center">
                <p className="text-xl font-heading font-bold text-primary-dark mb-6">One platform. One login. Infinite possibilities.</p>
                <div className="flex justify-center gap-4">
                    <Link href="#" className="bg-primary-green text-surface-white px-8 py-3 rounded-full font-heading font-bold hover:bg-opacity-90 shadow-md">
                        Begin Now
                    </Link>
                    <Link href="#" className="border border-primary-green text-primary-green px-8 py-3 rounded-full font-heading font-bold hover:bg-primary-green hover:text-surface-white transition-all shadow-md">
                        Partner With Us
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default TailoredTools;
