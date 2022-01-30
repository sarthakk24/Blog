const ColorBackground = (props: any): JSX.Element => {
  return (
    <span className="bg-[#012a4a] text-white mx-2 px-1 rounded-lg">
      {props.label}
    </span>
  );
};

export default ColorBackground;
