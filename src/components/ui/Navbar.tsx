import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav className="w-full bg-surface-white py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50 shadow-sm">
            {/* Logo Area */}
            <div className="flex items-center gap-2">
                {/* Placeholder for Logo if image not available, using text for now or generic icon */}
                <div className="flex items-center font-heading font-bold text-2xl text-primary-dark">
                    <span className="text-secondary-green mr-1">Farm</span>Fuzion
                </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 font-heading text-primary-dark font-medium">
                <Link href="#" className="hover:text-primary-green transition-colors">Home</Link>
                <Link href="#" className="hover:text-primary-green transition-colors">About</Link>
                <Link href="#" className="hover:text-primary-green transition-colors">Services</Link>
                <Link href="#" className="hover:text-primary-green transition-colors">Contact</Link>
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-4">
                <Link href="#" className="font-heading font-medium text-primary-dark hover:text-primary-green transition-colors">
                    Log In
                </Link>
                <Link href="#" className="bg-primary-green text-surface-white px-6 py-2 rounded-full font-heading font-medium hover:bg-opacity-90 transition-all shadow-md">
                    Get Started
                </Link>
            </div>

            {/* Mobile Menu Button (Placeholder) */}
            <button className="md:hidden text-primary-dark">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
        </nav>
    );
};

export default Navbar;
