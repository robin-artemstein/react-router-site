import { Link } from "react-router";

export default function Navbar() {
    return (
        <nav>
            <div className="flex flex-wrap justify-center gap-6 bg-gray-800 font-semibold text-xl">
                <div className="text-white hover:text-green-500"><Link to="/">Home</Link></div>
                <div className="text-white hover:text-green-500"><Link to="/about">About</Link></div>
                <div className="text-white hover:text-green-500"><Link to="/pricing">Pricing</Link></div>
                <div className="text-white hover:text-green-500"><Link to="/services">Services</Link></div>
                <div className="text-white hover:text-green-500"><Link to="/contact">Contact</Link></div>
            </div>
        </nav>
    )
}