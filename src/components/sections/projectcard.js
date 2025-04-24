import { StyledProjectCard } from "../../styles/projectcard.style";

const ProjectCard = ({
  item: { id, image, project_title, description, tools, links },
}) => {
  return (
    <StyledProjectCard
      layout={id % 2 === 0 && "rtl"}
      text={id % 2 === 0 && "left"}
      direction={id % 2 !== 0 && "row"}
      backgroundimg={image}
    >
      <img src={require(`../images/${image}`)} alt={project_title} />
      <aside>
        <article>
          <h2>{project_title}</h2>
          <div>{description}</div>
        </article>

        <section>
          <b>
            {tools.map((tool, index) => (
              <p key={index}>{tool}</p>
            ))}
          </b>

          <i>
            {links.map((link, index) => (
              <a href={link.link} key={index} target="_blank" rel="noreferrer">
                {link.icon}
              </a>
            ))}
          </i>
        </section>
      </aside>
    </StyledProjectCard>
  );
};

export default ProjectCard;
