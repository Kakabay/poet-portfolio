const BackBtn = ({ setActive }: { setActive: (val: boolean) => void }) => {
  return (
    <button
      onClick={() => setActive(false)}
      className="flex items-center gap-1 h-10 mb-8"
    >
      <img src="/images/arrow.svg" />
      <h6 className="text-16 !font-normal text-ON_SURFACE_VAR">
        Wernutsýa nazad
      </h6>
    </button>
  );
};

export default BackBtn;
