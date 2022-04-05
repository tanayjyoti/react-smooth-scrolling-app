import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";

import {
  Nav,
  Container,
  Logo,
  MobileIcons,
  Menu,
  Item,
  Link,
  Btn,
  BtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle, ...restProps }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      // so in our window or home page when we scroll pass 80px the do the following-->
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    // when we scroll down from our hero section of our home page, then the navbar is going
    // to be black, otherwise on the hero section the navbar will be transparent.
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    // when we click our website logo the we will automatically scroll back to the top of the home page.
    scroll.scrollToTop();
  };

  return (
    <React.Fragment>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav} {...restProps}>
          <Navbar.Container>
            <Navbar.Logo to="/" onClick={toggleHome}>
              finn
            </Navbar.Logo>
            <Navbar.MobileIcons onClick={toggle}>
              <FaBars />
            </Navbar.MobileIcons>
            <Navbar.Menu>
              <Navbar.Item>
                <Navbar.Links
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  About
                </Navbar.Links>
              </Navbar.Item>
              <Navbar.Item>
                <Navbar.Links
                  to="discover"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Discover
                </Navbar.Links>
              </Navbar.Item>
              <Navbar.Item>
                <Navbar.Links
                  to="services"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Services
                </Navbar.Links>
              </Navbar.Item>
              <Navbar.Item>
                <Navbar.Links
                  to="signup"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Sign Up
                </Navbar.Links>
              </Navbar.Item>
            </Navbar.Menu>
            <Navbar.Btn>
              <Navbar.BtnLink to="/signin">Sign In</Navbar.BtnLink>
            </Navbar.Btn>
          </Navbar.Container>
        </Nav>
      </IconContext.Provider>
    </React.Fragment>
  );
};

Navbar.Container = function NavbarContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Navbar.Logo = function NavbarLogo({ children, ...restProps }) {
  return <Logo {...restProps}>{children}</Logo>;
};

Navbar.MobileIcons = function NavbarMobileIcons({ children, ...restProps }) {
  return <MobileIcons {...restProps}>{children}</MobileIcons>;
};

Navbar.Menu = function NavbarMenu({ children, ...restProps }) {
  return <Menu {...restProps}>{children}</Menu>;
};

Navbar.Item = function NavbarItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Navbar.Links = function NavbarLinks({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Navbar.Btn = function NavbarBtn({ children, ...restProps }) {
  return <Btn {...restProps}>{children}</Btn>;
};

Navbar.BtnLink = function NavbarBtnLink({ children, ...restProps }) {
  return <BtnLink {...restProps}>{children}</BtnLink>;
};

export default Navbar;
