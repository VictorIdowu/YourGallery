import { Icon } from "@iconify/react";
import { useState } from "react";
const Nav = () => {
  const [showOnMobile, setShowOnMobile] = useState("hidden");
  const [cancelBtn, setCancelBtn] = useState(false);

  const showMobileNav = () => {
    setCancelBtn(true);
    setShowOnMobile("flex flex-col");
  };

  const hideMobileNav = () => {
    setCancelBtn(false);
    setShowOnMobile("");
  };

  return (
    <nav
      className={`absolute md:static top-0 text-primary-300 md:text-primary-100 text flex flex-col px-5 pb-3 md:p-0 gap-5 z-40 items-end md:items-center ${
        cancelBtn ? "bg-secondary-100" : ""
      } md:bg-transparent right-0`}
    >
      <aside className="text-3xl md:hidden">
        {!cancelBtn && (
          <Icon
            icon="jam:menu"
            className="text-primary-100 hover:secondary-200 transition-colors duration-500 cursor-pointer"
            onClick={showMobileNav}
          />
        )}
        {cancelBtn && (
          <Icon icon="octicon:x-16" className="" onClick={hideMobileNav} />
        )}
      </aside>
      <ul
        className={`${showOnMobile} text-lg md:flex md:flex-row gap-3 lg:gap-5 md:items-center`}
      >
        <li className="nav-link">Portfolio</li>
        <li className="nav-link">Blog</li>
        <li className="nav-link">Sign Out</li>
      </ul>
    </nav>
  );
};

export default Nav;
