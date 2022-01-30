const NavbarIcon = (props: any): JSX.Element => {
  return (
    <li className="px-4 text-2xl">
      <a href={props.href}>
        <props.icon />
      </a>
    </li>
  );
};

export default NavbarIcon;
