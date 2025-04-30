import { Link } from "react-router-dom";
import { StyledButton } from "../../styles/button.style";

const Button = ({ variant = "external", text, link }) => {
  if (variant === "internal") {
    return (
      <Link to={link}>
        <StyledButton>{text}</StyledButton>
      </Link>
    );
  }

  return (
    <a href={process.env.PUBLIC_URL + link} target="_blank" rel="noreferrer">
      <StyledButton>{text}</StyledButton>
    </a>
  );
};

export default Button;
