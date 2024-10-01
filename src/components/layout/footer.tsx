const Footer = () => {
  return (
    <footer className="bg-FOOTER_PATTERN relative z-30 bg-cover bg-no-repeat drop-shadow-INNER_SHADOW py-6">
      <div className="container flex flex-col gap-4">
        <div className="flex items-center justify-between">
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
