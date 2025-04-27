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
            I'm a software engineer passionate about building{" "}
            <span>scalable</span>, <span>robust</span>, and{" "}
            <span>user-focused</span> applications. I have a knack for crafting
            simple yet elegant solutions — creating experiences that not only
            look great but are meticulously built for <span>functionality</span>
            , <span>performance</span>, and <span>usability</span>.
          </p>
          <p>
            I'm committed to <span>continuous learning</span> and{" "}
            <span>growth</span>. I'm excited to take on new challenges, explore
            emerging technologies, and push the boundaries of my skills to build
            even better, more impactful solutions.
          </p>
          <p>
            I thrive in collaborative environments, where I've had the
            opportunity to contribute to high-performing teams. I value{" "}
            <span>clear communication</span>, <span>shared vision</span>, and a
            strong sense of <span>ownership</span> — believing that great
            products are built through collective effort.
          </p>
          <p>
            I'm looking to expand my network and explore new opportunities for
            collaboration. You can send me an email or reach out to me via
            LinkedIn.
          </p>
          <p>
            In case you're wondering, <span>JEOLAD</span> is short for{" "}
            <span>JE</span>
            <i>sse</i> <span>OL</span>
            <i>uwapelumi</i> <span>AD</span>
            <i>esina</i>.
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
