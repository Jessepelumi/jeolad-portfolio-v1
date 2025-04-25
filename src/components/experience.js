import { technologies } from "../content/technologies";
import {
  StyledExperience,
  StyledTechnologies,
} from "../styles/experience.style";
import Title from "./sections/title";
import WorkExperience from "./workexperience";

const Experience = () => {
  return (
    <StyledExperience id="experience">
      <Title sn={"02"} title={"Experience"} />
      <section>
        <p>Technical Skills:</p>
        <StyledTechnologies>
          {technologies.map(function (technology) {
            console.log(technology);
            return <span key={technology.id}>{technology.name}</span>;
          })}
        </StyledTechnologies>

        <p>Where I've Worked:</p>
        <WorkExperience />
      </section>
    </StyledExperience>
  );
};

export default Experience;
