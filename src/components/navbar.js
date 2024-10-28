import { StyledNavbar, StyledMenu } from "../styles/navbar.style";
import { Link } from "react-scroll";
import { Squash as Hamburger } from "hamburger-react";
import useNavbarState from "../hooks/useNavbarState";
import useBodyOverflow from "../hooks/useBodyOverflow";
import handleReload from "../hooks/handleReload";

const Navbar = () => {
  const { open, setOpen, handleClick } = useNavbarState();
  useBodyOverflow(open);

  return (
    <>
      <StyledNavbar>
        <div>
          <Link to="hero" onClick={handleReload}>
            JEOLAD
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="about">
                <span>01.</span>About
              </Link>
            </li>
            <li>
              <Link to="experience">
                <span>02.</span>Experience
              </Link>
            </li>
            <li>
              <Link to="projects">
                <span>03.</span>Projects
              </Link>
            </li>
            <li>
              <Link to="contact">
                <span>04.</span>Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="menu" onClick={() => setOpen(!open)}>
          <Hamburger toggled={open} toggle={setOpen} size={25} />
        </div>
      </StyledNavbar>

      <StyledMenu className={open ? "visible" : !open}>
        <section className={open ? "show" : !open}>
          <nav>
            <ul>
              <li>
                <Link to="about" onClick={handleClick}>
                  <span>01.</span>About
                </Link>
              </li>
              <li>
                <Link to="experience" onClick={handleClick}>
                  <span>02.</span>Experience
                </Link>
              </li>
              <li>
                <Link to="projects" onClick={handleClick}>
                  <span>03.</span>Projects
                </Link>
              </li>
              <li>
                <Link to="contact" onClick={handleClick}>
                  <span>04.</span>Contact
                </Link>
              </li>
            </ul>
          </nav>
        </section>
      </StyledMenu>
    </>
  );
};

export default Navbar;
