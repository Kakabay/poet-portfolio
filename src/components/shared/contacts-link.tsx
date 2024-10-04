import React from "react";
import DownloadLink from "./download-link";

type Props = {
  title: string;
  subtitle: string;
  link: string;
};

const ContactsLink = ({ link, subtitle, title }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <h4 className="text-20">{title}</h4>
      <h5 className="text-16 !font-normal">{subtitle}</h5>
      <DownloadLink link={link} text="Dobawitsýa" />
    </div>
  );
};

export default ContactsLink;
