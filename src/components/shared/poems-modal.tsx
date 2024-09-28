import { useParams } from "react-router-dom";
import PoemsItem from "./poems-item";

const PoemsModal = () => {
  const { id } = useParams();

  return (
    <div className="bg-[url('/images/poems/2.png')] bg-no-repeat bg-cover grid grid-cols-2 gap-x-6 gap gap-y-4 py-12 px-6 drop-shadow-INNER_SHADOW w-full h-full">
      <PoemsItem id={"1"} />
      <PoemsItem id={id} />
      <PoemsItem id={id} />
    </div>
  );
};

export default PoemsModal;
