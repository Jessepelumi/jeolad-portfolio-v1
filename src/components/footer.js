import { StyledFooter } from "../styles/footer.style";

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        Designed & Built by{" "}
        <a
          href="https://www.linkedin.com/in/jeolad/"
          target="_blank"
          rel="noreferrer"
        >
          Jesse Adesina
        </a>
      </div>
      <div>&copy; 2024. All rights reserved.</div>
    </StyledFooter>
  );
};

export default Footer;
