import { BgTexture } from './bg-texture';

const NotificationCard = () => {
  return (
    <div className="md:p-6 w-[328px] h-[140px] p-4 xl:w-[892px] md:w-[768px] md:h-[96px] relative shadow-bottom">
      <BgTexture className="xl:bg-[url('/images/cabinet/notific-shape.svg')] md:bg-[url('/images/cabinet/notific-med-shape.svg')] bg-[url('/images/cabinet/notific-mob-shape.svg')] notific-mob-path md:notific-med-path xl:notific-card-path" />
      <div className="hidden md:flex items-center gap-2">
        <img src="/images/bell.svg" className="p-3" />

        <div className="hidden md:flex flex-col gap-1 w-full">
          <div className="flex justify-between items-center">
            <h5 className="text-16 font-semibold text-PRIM">Zagolovok</h5>
            <div className="size-3 bg-TERTIARY rounded-full" />
          </div>

          <div className="flex justify-between items-center">
            <p className="italic text-14 !leading-[140%]">
              Poet, tvoye tvorchestvo - istinnoye volshebstvo, kotoroye perenosyat menya.
            </p>
            <h6 className="text-[12px] font-medium leading-[130%] text-ON_SURFACE_VAR">
              01.09.2024 ý.
            </h6>
          </div>
        </div>
      </div>

      <div className="flex md:hidden flex-col gap-1 items-start">
        <div className="flex items-start gap-2 w-full">
          <img src="/images/bell.svg" className="p-3" />
          <div className="flex flex-col gap-1 w-full">
            <div className="flex justify-between items-center w-full">
              <h5 className="text-16 font-semibold text-PRIM">Zagolovok</h5>
              <div className="size-3 bg-TERTIARY rounded-full" />
            </div>
            <h6 className="text-[12px] font-medium leading-[130%] text-ON_SURFACE_VAR">
              01.09.2024 ý.
            </h6>
            <p className="italic text-14 !leading-[140%]">
              Poet, tvoye tvorchestvo - istinnoye volshebstvo, kotoroye perenosyat menya.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
