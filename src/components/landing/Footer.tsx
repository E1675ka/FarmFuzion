import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-primary-dark text-surface-white py-16 px-6 md:px-12 lg:px-20 rounded-t-[3rem] mt-[-2rem]">
            <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                {/* Brand */}
                <div>
                    <div className="flex items-center font-heading font-bold text-2xl text-surface-white mb-6">
                        <span className="text-primary-green mr-1">Farm</span>Fuzion
                    </div>
                    <div className="flex flex-col gap-2 text-sm text-gray-400">
                        <p>Nairobi Office</p>
                        <p>Westlands, Delta Corner</p>
                        <p>Nairobi, Kenya</p>
                    </div>
                    <Link href="#" className="inline-block mt-4 text-primary-green text-sm font-bold hover:underline">
                        Get Directions
                    </Link>
                </div>

                {/* Links */}
                <div className="flex gap-16">
                    <div>
                        <h4 className="font-heading font-bold mb-4">Quick Links</h4>
                        <ul className="flex flex-col gap-2 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-primary-green">About Us</Link></li>
                            <li><Link href="#" className="hover:text-primary-green">Services</Link></li>
                            <li><Link href="#" className="hover:text-primary-green">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-heading font-bold mb-4">Follow Us</h4>
                        <div className="flex gap-4">
                            {/* Social Icons Placeholder */}
                            <div className="w-8 h-8 bg-gray-700 rounded-full hover:bg-primary-green transition-colors cursor-pointer"></div>
                            <div className="w-8 h-8 bg-gray-700 rounded-full hover:bg-primary-green transition-colors cursor-pointer"></div>
                            <div className="w-8 h-8 bg-gray-700 rounded-full hover:bg-primary-green transition-colors cursor-pointer"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-xs flex justify-between">
                <p>© FarmFuzion 2024</p>
                <div className="flex gap-4">
                    <Link href="#" className="hover:text-surface-white">Privacy Policy</Link>
                    <Link href="#" className="hover:text-surface-white">Terms of Use</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
