import logo from "../assets/logo-text.png";

import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 mt-10">
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row md:justify-between gap-10 text-center md:text-left">
        
        <div className="flex flex-col items-center md:items-start max-w-xs mx-auto md:mx-0">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Dev Stack" className="h-8 w-auto" />
          </div>
         <p className="text-sm text-gray-500 mt-3">
           Curated tools, technologies, and resources for developers building <br />
            modern software.
             </p>

                    <div className="flex md:hidden items-center gap-2 mt-4 text-sm font-medium text-gray-700">
                     <a href="#">GitHub</a>
                      <span>•</span>
                     <a href="#">Twitter</a>
                             <span>•</span>
                <a href="#">LinkedIn</a>
                    </div>

          <div className="hidden md:flex items-center gap-6 mt-4 text-sm font-medium text-gray-700">
          <a href="#" className="flex flex-col items-center gap-1">
           <FaGithub size={18} />
           GitHub
             </a>
               <a href="#" className="flex flex-col items-center gap-1">
              <FaTwitter size={18} />
                 Twitter
               </a>
                <a href="#" className="flex flex-col items-center gap-1">
               <FaLinkedin size={18} />
             LinkedIn
               </a>
             </div>
        </div>

        <div className="hidden md:block">
          <h4 className="text-xs font-bold text-gray-900 tracking-wide">PRODUCT</h4>
          <ul className="mt-3 flex flex-col gap-2 text-sm text-gray-500">
            <li><a href="#">Home</a></li>
            <li><a href="#">Technologies</a></li>
            <li><a href="#">Projects</a></li>
          </ul>
        </div>

        <div className="hidden md:block">
          <h4 className="text-xs font-bold text-gray-900 tracking-wide">COMPANY</h4>
          <ul className="mt-3 flex flex-col gap-2 text-sm text-gray-500">
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        <div className="hidden md:block">
          <h4 className="text-xs font-bold text-gray-900 tracking-wide">LEGAL</h4>
          <ul className="mt-3 flex flex-col gap-2 text-sm text-gray-500">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 py-5">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-gray-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;