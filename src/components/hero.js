import Button from "./sections/button";
import { StyledHero } from "../styles/hero.style";

const Hero = () => {
  return (
    <StyledHero id="hero">
      <div>
        <span>Hi, my name is</span>
        <h2>Jesse ADESINA.</h2>
        <h3>I love learning and building.</h3>
        <p>
          I am a <span>Full-stack Software Engineer</span> passionate about
          building user-centered digital products that are functional and
          simple.
        </p>
        <Button text={"Download Résumé"} link={"/Resume - JEOLAD.pdf"} />
      </div>
    </StyledHero>
  );
};

export default Hero;
