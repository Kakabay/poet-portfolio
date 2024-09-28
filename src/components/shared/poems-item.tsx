import { Link } from "react-router-dom";

const PoemsItem = ({ id }: { id: string | undefined }) => {
  return (
    <Link to={`/poems/${id}`}>
      <div className="leading-[115%] flex mb-2">
        <img src="/images/romb.svg" alt="" className="mr-1" />
        <h4 className="kaushan mr-3">Ýaşyl Tugly Türkmenistan </h4>
        <img src="/images/play.svg" alt="play" />
      </div>

      <div className="leading-[115%] flex items-center gap-2">
        <img src="/images/star.svg" alt="" className="mr-1" />
        <div className="bg-TERTIARY text-white rounded-[24px] text-[12px] px-1.5 font-medium">
          täze
        </div>
        <span className="font-medium italic text-[14px]">(Aýdym üçin)</span>
      </div>
    </Link>
  );
};

export default PoemsItem;
