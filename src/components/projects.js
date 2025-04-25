import useViewMoreState from "../hooks/useViewMoreState";
import { projectlist } from "../content/projectlist";
import { MoreProjects, StyledProject } from "../styles/project.style";
import MoreProjectCard from "./sections/moreprojectcard";
import ProjectCard from "./sections/projectcard";
import Title from "./sections/title";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Projects = () => {
  const featuredProjects = projectlist.slice(0, 4);
  const otherProjects = projectlist.slice(4);

  const { viewMore, toogleViewMore } = useViewMoreState();

  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <StyledProject id="projects">
      <Title sn={"03"} title={"Projects"} />
      <h2>Featured Projects:</h2>
      <div className="project-div">
        {featuredProjects.map((item, index) => (
          <ProjectCard key={index} item={item} />
        ))}
      </div>
      {viewMore && (
        <aside data-aos="fade-down">
          <h3>Other Noteworthy Projects</h3>
          <MoreProjects>
            {otherProjects.map((item, index) => (
              <MoreProjectCard key={index} item={item} />
            ))}
          </MoreProjects>
        </aside>
      )}

      <div className="more" onClick={toogleViewMore}>
        {viewMore ? "View Less Projects" : "View More Projects"}
      </div>
    </StyledProject>
  );
};

export default Projects;
