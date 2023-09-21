import Nav from "./Nav";

const Header = () => {
  return (
    <header className="flex justify-between py-3 text-secondary-200 items-start px-3 sm:px-6 md:px-14 relative">
      <h2 className="text-px sm:text-lg md:text-xl lg:text-2xl font-bold">
        iDsOn GalLErY
      </h2>

      <Nav />
    </header>
  );
};

export default Header;
