const FooterIcons = (props: any): JSX.Element => {
  return (
    <div>
      <a
        href={props.href}
        className="flex items-center text-white"
        target="_blank"
        rel="noreferrer"
      >
        <img src={props.svg} className="h-7" alt="icon" />
        <span className="px-3 text-lg">{props.label}</span>
      </a>
    </div>
  );
};

export default FooterIcons;
