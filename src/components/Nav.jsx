import { Icon } from "@iconify/react";
const Nav = () => {
  return (
    <nav>
      <Icon icon="jam:menu" className="text-3xl text-primary-100 md:hidden" />
      <ul className="hidden text-lg md:flex gap-3 lg:gap-5 items-center">
        <li>Portfolio</li>
        <li>Blog</li>
        <li>Sign Out</li>
      </ul>
    </nav>
  );
};

export default Nav;
