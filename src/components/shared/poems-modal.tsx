import { useParams } from "react-router-dom";
import PoemsItem from "./poems-item";

const PoemsModal = () => {
  const { id } = useParams();

  return (
    <div className="bg-no-repeat grid grid-cols-2 relative gap-x-6 gap gap-y-4 py-12 px-6 drop-shadow-INNER_SHADOW max-w-[1000px] max-h-[500px]">
      <img
        src="/images/poems/1.svg"
        alt=""
        className="h-full w-full object- absolute top-0 left-0 right-0 "
      />
      <PoemsItem key={id} id={1} poem_name={""} link={""} />
    </div>
  );
};

export default PoemsModal;
