import { logo } from "../assets/index";
import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <header className="absolute z-10 w-full">
      <nav className="flex justify-center items-center max-container">
        <div className="flex justify-center items-center">
          <a href="/">
            <img src={logo} className="w-[36px] h-[36px]" />
          </a>
          <h2 className="logo mt-8">Hounter</h2>
        </div>

        <ul className="flex-1 flex justify-end items-center gap-10 max-lg:hidden">
          {navLinks.map((item) => (
            <li
              key={item.label}
              className="flex py-4 px-2 align-center gap-6 nav-item-bg"
            >
              <a
                href={item.href}
                className="font-Lexend leading-normal text-nav-item-white text-[14px] capitalize"
              >
                {item.label}
              </a>
            </li>
          ))}

          <li className="flex py-4 px-2 align-center gap-10 nav-item-bg ml-12">
            <a
              href="/"
              className="font-Lexend leading-normal text-nav-item-white text-[14px] capitalize"
            >
              Sign up
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
