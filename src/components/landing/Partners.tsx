import Link from 'next/link';

const Partners = () => {
    // Placeholder list
    const partners = ["M-PESA", "Interswitch", "Verve", "Mastercard", "Agra"];
    return (
        <section className="w-full bg-surface-white py-12 px-6 flex flex-col items-center">
            <h3 className="text-secondary-green uppercase tracking-widest font-heading font-medium mb-8">Our Partners In Business</h3>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
                {partners.map((partner) => (
                    <div key={partner} className="text-2xl font-bold text-gray-400 border border-dashed border-gray-300 px-4 py-2 rounded-lg">
                        {partner}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Partners;
