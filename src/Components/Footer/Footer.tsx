import FooterIcons from "./FooterIcons";
import Discord from "../../Assets/Svg/discord.svg";
import Typescript from "../../Assets/Svg/typescript.svg";
import Github from "../../Assets/Svg/github.svg";

const Footer = (): JSX.Element => {
  return (
    <div className="text-white h-[100px] w-full mt-10 bg-[#012a4a] flex justify-evenly items-center">
      <FooterIcons
        svg={Discord}
        label="Discord"
        href="https://discord.gg/typescript"
      />
      <FooterIcons
        svg={Typescript}
        label="Typescript Docs"
        href="https://www.typescriptlang.org/docs/"
      />
      <FooterIcons
        svg={Github}
        label="Typescript Gitbook"
        href="https://www.typescriptlang.org/docs/"
      />
    </div>
  );
};

export default Footer;
