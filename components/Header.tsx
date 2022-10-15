import Link from "next/link";
import { useRouter } from "next/router";

const routes = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/about" },
];

const Header = () => {
    const router = useRouter();

    return (
        <header className="w-full mx-auto">
            <nav className="bg-gray-800 text-white px-4 py-3">
                {routes.map((route, index) => {
                    return (
                        <Link key={index} href={route.href}>
                            <a
                                className={
                                    "inline-block rounded  px-10 py-3 text-sm font-medium  transition hover:bg-slate-500 mr-3 " +
                                    (router.pathname === route.href
                                        ? "bg-slate-500 border-2 border-slate-400"
                                        : "bg-slate-600")
                                }
                            >
                                {route.name}
                            </a>
                        </Link>
                    );
                })}
            </nav>
        </header>
    );
};

export default Header;
