import Link from "next/link";

const Header = () => {
    return (
        <header className="w-full mx-auto">
            <nav className="bg-gray-700 text-white px-4 py-2">
                <Link href="/">
                    <a>Main</a>
                </Link>
                <Link href="/about">
                    <a className="ml-2">About Us</a>
                </Link>
            </nav>
        </header>
    );
};

export default Header;
