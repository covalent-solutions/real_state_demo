import Covalent from "../assets/Covalent.svg";
import { navLinks } from "../constants";

function Header() {
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
                  className="leading-normal text-lg text-white hover:text-slate-800"
                >
                  {link.label}
                </a>
              </li>
            ))}

          </ul>
            <div className="hidden max-lg:block">
                <p>logo</p>
            </div>
        </nav>
      </header>
    </>
  );
}
export default Header;
