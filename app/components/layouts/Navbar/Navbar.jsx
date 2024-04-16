import NavLinks from "./NavLinks";
import NavLogo from "./NavLogo";
import NavlLogs from "./NavLogs";

const Navbar = () => {
  return (
    <div
      className={`fixed left-[2.5%] top-[10px] z-50 flex w-[95%] items-center justify-between rounded-lg text-white px-4 py-4 bg-black shadow-xl  `}
    >
      <NavLogo />
      <NavLinks />
      <NavlLogs />
    </div>
  );
};

export default Navbar;
