import BgTexture from "../shared/bg-texture";

const Footer = () => {
  return (
    <footer className="relative shadow-top w-[1920px] text-center mx-auto h-[123px] py-6">
      <BgTexture className='bg-[url("/images/footer-shape.svg")] footer-path' />
      <div className="container top-0 right-0 left-0 bottom-0 relative flex flex-col gap-4">
        <div className="flex items-center justify-between justify-items-center">
          <div className="kaushan">Ezizgeldi Helleňow</div>
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
