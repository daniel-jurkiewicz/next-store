import Link from "next/link";

const Header = () => {
    return (
        <header className="w-full mx-auto">
            <nav className="bg-gray-800 text-white px-4 py-3">
                <Link href="/">
                    <a className="inline-block rounded bg-slate-600 px-10 py-3 text-sm font-medium text-white transition hover:bg-slate-500 mr-3">
                        Home
                    </a>
                </Link>
                <Link href="/about">
                    <a className="inline-block rounded bg-slate-600 px-10 py-3 text-sm font-medium text-white transition hover:bg-slate-500">
                        Products
                    </a>
                </Link>
            </nav>
        </header>
    );
};

export default Header;
