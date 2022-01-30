const NavbarItem = (props: any): JSX.Element => {
  return (
    <li className="px-4">
      <a href="/">{props.name}</a>
    </li>
  );
};

export default NavbarItem;
