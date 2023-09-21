import Nav from "./Nav";

const Header = (props) => {
  return (
    <header className="flex justify-between py-5 text-secondary-200 items-start px-3 sm:px-6 md:px-14 relative">
      <h2 className="text-px sm:text-lg md:text-xl lg:text-2xl font-bold">
        iDsOn GalLErY
      </h2>

      <Nav logOut={props.logOut} />
    </header>
  );
};

export default Header;
