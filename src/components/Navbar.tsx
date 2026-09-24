import logo from "../assets/logo-text.png"


const Navbar = () => {
return (
    <div className="border-b border-gray-300">
    <nav className="flex justify-between gap-4 container mx-auto py-4 ">
    <img src={logo} className="h-9 w-auto" alt = ""/>
    <ul className="flex gap-5 items-center">
        <li><a href="/" className="text-pink-600 font-medium">Home</a></li>
        <li><a href="/">Technologies</a></li>
        <li><a href="/">Projects</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Contact</a></li>
    </ul>

    <div className="flex gap-4 items-center">
         <button className="text-sm font-medium text-gray-700">Sign In</button>
        <button className="bg-pink-600 text-white text-sm font-semibold px-5 py-2 rounded-full hover:opacity-90 hover:scale-110 transition-transform duration-300">
          Sign Up
        </button>
    </div>
    
</nav>
</div>
);
};

export default Navbar;