import Link from 'next/link';

const ContactSection = () => {
    return (
        <section className="w-full bg-surface-white py-20 px-6 md:px-12 lg:px-20 flex flex-col items-center gap-16">

            {/* Have a Question */}
            <div className="text-center max-w-2xl">
                <div className="flex justify-center mb-4 text-primary-green">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-12 h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                    </svg>
                </div>
                <h2 className="text-2xl font-heading font-bold text-primary-dark mb-4">
                    Have a Question, Partnership Idea, or Need Help Getting Started?
                </h2>
                <p className="text-primary-green mb-8 font-medium">We'd love to hear from you.</p>
                <div className="bg-primary-dark text-surface-white py-6 px-12 rounded-2xl inline-block text-left shadow-xl w-full max-w-md">
                    <p className="text-primary-green text-sm font-bold uppercase mb-2 text-center">General Inquiries</p>
                    <div className="flex flex-col gap-1 items-center">
                        <a href="mailto:Hello@FarmFuzion.com" className="hover:text-primary-green transition-colors">Hello@FarmFuzion.com</a>
                        <a href="tel:+254701234567" className="hover:text-primary-green transition-colors">+254 701 234 567</a>
                    </div>
                </div>
            </div>

            {/* Visit Us */}
            <div className="w-full text-center">
                <h3 className="text-2xl font-heading font-bold text-primary-dark mb-8">Visit Us</h3>
                <div className="w-full h-[250px] bg-gray-200 rounded-3xl overflow-hidden relative border border-gray-300">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold">
                        Google Maps Placeholder
                    </div>
                    {/* Simulated Map Marker */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-red-500">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                            <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
