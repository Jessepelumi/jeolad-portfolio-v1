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
          I am a <span>Full-stack Software Engineer</span> passionate about building user-centered digital products that are functional and simple.
        </p>
        <Button
          text={"Download Résumé"}
          link={
            "https://docs.google.com/document/d/10jJZ4DieWB0l-n6ZDaZcLPOzDwZaHpNjP2sTOvpYzAI/edit?usp=sharing"
          }
        />
      </div>
    </StyledHero>
  );
};

export default Hero;
