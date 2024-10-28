import Title from "./sections/title";
import Socials from "./sections/socials";
import { StyledContact } from "../styles/contact.style";
import { EnvelopeSimple } from "@phosphor-icons/react";

const Contact = () => {
  return (
    <StyledContact id="contact">
      <Title sn={"04"} title={"Contact"} />
      <h2>Get in Touch</h2>
      <p>
        I'm always looking to expand my network and explore new opportunities for collaboration. You can send me an email or reach out to me on LinkedIn or X.
      </p>
      <span className="btn">
        <a href="mailto: jesseoluwapelumi01@gmail.com">
          <EnvelopeSimple size={24} />
          Send me an Email
        </a>
      </span>
      <Socials />
    </StyledContact>
  );
};

export default Contact;
