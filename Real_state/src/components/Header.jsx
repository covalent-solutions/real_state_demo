import { useState } from "react";
import Covalent from "../assets/Covalent.svg";
import menu_icon from "../assets/menu_icon.svg";
import cross from "../assets/cross.svg"
import { navLinks } from "../constants";

function Header() {

  const [isMenuOpen, setisMenuOpen] = useState(true);

  const handleMenuToggle = () => {
    setisMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="px-12 lg:px-24 py-3 absolute w-full">
        <nav className="flex justify-between items-center ">
          <a href="/">
            <img src={Covalent} alt="logo" width={150} height={150} />
          </a>
          <ul className="flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="leading-normal font-sans text-lg text-white hover:text-slate-950"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden cursor-pointer max-lg:block" onClick={handleMenuToggle}>
            <img src={isMenuOpen ? menu_icon : cross} alt={isMenuOpen ? "menu_open" : "cross"} width={30} height={30} />
          </div>
        </nav>
      </header>
    </>
  );
}
export default Header;
