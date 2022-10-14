import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full mx-auto bg-gray-800 text-white px-4 py-2 text-center fixed inset-x-0 bottom-0">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 p-2">
                <p className="text-center text-xs text-gray-400 lg:text-left">
                    Schmopyright &copy; 2022. Nowoczesny Frontend. No rights
                    reserved.
                </p>
                <nav className="flex justify-center gap-4 text-xs text-gray-400 lg:justify-end">
                    <Link href="">
                        <a>Terms & Conditions</a>
                    </Link>
                    <Link href="">
                        <a>Privacy Policy</a>
                    </Link>
                    <Link href="">
                        <a>Cookies</a>
                    </Link>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
