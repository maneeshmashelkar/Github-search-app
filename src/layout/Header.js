import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  NavbarBrand,
  Navbar,
  Collapse,
  NavLink,
  NavbarText,
  NavItem,
  NavbarToggler,
} from "reactstrap";
import { UserContext } from "../context/UserContext";

const Header = () => {
  const context = useContext(UserContext);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="info" expand="md" light>
      <NavbarBrand>
        <Link to="/" className="text-white ms-3 text-decoration-none">
          Github Search App
        </Link>
      </NavbarBrand>
      <NavbarText className="text-white">
        {context.user?.email ? context.user.email : ""}
      </NavbarText>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto" navbar>
          {context.user ? (
            <NavItem>
              <NavLink
                tag={Link}
                onClick={() => {
                  context.setUser(null);
                }}
                className="text-white me-3"
              >
                Sign-Out
              </NavLink>
            </NavItem>
          ) : (
            <>
              <NavItem>
                <NavLink tag={Link} to="/signup" className="text-white">
                  Sign-Up
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/signin" className="text-white me-3">
                  Sign-In
                </NavLink>
              </NavItem>
            </>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
