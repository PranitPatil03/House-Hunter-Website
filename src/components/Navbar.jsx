import { logo } from "../assets/index";
import { navLinks } from "../constants/index";

const Navbar = () => {
  return (
    <header className="z-15 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={logo} className="w-[36px] h-[36px]" />
        </a>
        <p className="text-logo text-base	leading-normal font-lexend ml-3 font-bold">
          Hounter
        </p>
        <ul className="flex-1 flex justify-end items-center gap-10 max-lg:hidden z-10 mRight">
          {navLinks.map((item) => (
            <li key={item.label} className="nav-items px-4 py-2">
              <a
                href={item.href}
                className="flex gap-16 text-sm font-lexend leading-normal text-white font-semibold"
              >
                {item.label}
              </a>
            </li>
          ))}

          <li className="ml-8 sign-up-border px-6 py-3">
            <a
              href="/sign"
              className="text-sm font-lexend leading-[22px] text-green font-semibold"
            >
              Sign Up!
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
