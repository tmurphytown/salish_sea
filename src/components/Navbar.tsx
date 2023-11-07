import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="p-5 bg-white/50 flex items-center justify-between backdrop-blur-sm fixed top-0 z-50 w-full">
            <div className="flex items-center gap-3 font-semibold">
                <Link className="text-c3 p-2" href="/">
                    <img src="./assets/icon.png" alt="logo" className="w-16" />
                </Link>
                <Link className="text-c3 p-2 hover:font-extrabold inline-block w-12 text-center" href="/about">About</Link>
                <Link className="text-c3 p-2 hover:font-extrabold" href="/services">Services</Link>
            </div>
            <Link href="/contact" type="submit" className="bg-opacity-75 bg-blur-lg  bg-c1 text-c3 border border-c3 drop-shadow-lg hover:bg-c3 hover:text-white hover:border-c2 hover:font-extrabold px-4 py-2 rounded-md gap-50">contact</Link>
        </nav>
    );
}
export default Navbar;