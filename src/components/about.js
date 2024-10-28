import Title from "./sections/title";
import Socials from "./sections/socials";
import { StyledAbout, StyledAboutImage } from "../styles/about.style";

const About = () => {
  return (
    <StyledAbout id="about">
      <Title sn={"01"} title={"About Me"} />
      <section>
        <div>
          <p>
            I specialize in building highly scalable and functional applications with a strong focus on user experience. My expertise spans both <span>front-end and back-end engineering for mobile and web platforms.</span>
          </p>
          <p>
            I thrive in collaborative environments, having both led and contributed to successful teams.
          </p>
          <p>
            I'm always looking to expand my network and explore new opportunities for collaboration. Feel free to send me an email or reach out to me on LinkedIn or X.
          </p>
          <p>
            In case you're wondering, <span>JEOLAD</span> is short for <span>Je</span><i>sse</i> <span>Ad</span><i>esina</i> <span>Ol</span><i>uwapelumi</i>.
          </p>
        </div>
        <StyledAboutImage>
          <div className="back">
            <img src={require("./images/jeolad.png")} alt="jeolad" />
          </div>
        </StyledAboutImage>
      </section>
      <Socials />
    </StyledAbout>
  );
};

export default About;
