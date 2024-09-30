import { ArrowUpRight } from "lucide-react";

type Props = {
  link: string;
  text?: string;
};

const DownloadLink = ({ link, text = "Skaçat knigu" }: Props) => {
  return (
    <a
      href={link}
      className="flex items-center gap-1 py-1 px-2 w-fit hover:bg-[#7A590C]/25 rounded-[4px] transition-all text-[16px] font-semibold leading-[150%] text-PRIM"
    >
      <h5>{text}</h5>
      <ArrowUpRight size={18} />
    </a>
  );
};

export default DownloadLink;
