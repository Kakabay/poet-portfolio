const SortModal = () => {
  return (
    <div className="relative h-[288px] w-[284px] drop-shadow-INNER_SHADOW">
      <img
        src="/images/poems/1.png"
        alt=""
        className="absolute object-cover h-full w-full -z-10"
      />

      <div className="flex flex-col gap-6 py-12 px-6">
        <div>
          <h5 className="text-[16px] leading-[150%] mb-2 font-medium">Поиск</h5>
        </div>

        <div>
          <h5 className="text-[16px] leading-[150%] mb-2 font-medium">
            Sortirowka
          </h5>
        </div>
      </div>
    </div>
  );
};

export default SortModal;
