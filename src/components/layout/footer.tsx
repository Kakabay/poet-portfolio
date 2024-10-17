import BgTexture from "../shared/bg-texture";

const Footer = () => {
  return (
    <footer className="relative shadow-top h-[164px] xl:h-[123px] py-4 xl:py-6">
      <BgTexture png className='bg-[url("/images/footer-shape.png")] ' />
      <div className="container top-0 left-0 bottom-0 relative flex flex-col gap-4">
        <div className="flex flex-col xl:flex-row xl:gap-0 gap-4 text-center xl:text-left items-center justify-between">
          <div className="kaushan xl:text-left text-center">
            Ezizgeldi Helleňow
          </div>
          <div className="text-14 !leading-[140%]">
            Pri ispolzowanii materiala ssylka na istoçnik obýazatelna
          </div>
        </div>

        <hr className="text-OUTLINE_VAR" />

        <span className="text-14 !leading-[140%] text-center text-ON_SURFACE_VAR">
          2024© Wse prawa zaşişeny
        </span>
      </div>
    </footer>
  );
};

export default Footer;
