import React from "react";

import {
  Container,
  Icon,
  CloseIcon,
  Wrapper,
  Menu,
  Link,
  BtnWrap,
  Route,
} from "./SidebarElement";

const Sidebar = ({ toggle, ...restProps }) => {
  return (
    <Container {...restProps}>
      <Sidebar.Icon onClick={toggle}>
        <Sidebar.CloseIcon />
      </Sidebar.Icon>
      <Sidebar.Wrapper>
        <Sidebar.Menu>
          <Sidebar.Link to="about" onClick={toggle}>
            About
          </Sidebar.Link>
          <Sidebar.Link to="discover" onClick={toggle}>
            Discover
          </Sidebar.Link>
          <Sidebar.Link to="services" onClick={toggle}>
            Services
          </Sidebar.Link>
          <Sidebar.Link to="signup" onClick={toggle}>
            Sign Up
          </Sidebar.Link>
        </Sidebar.Menu>
        <Sidebar.BtnWrap>
          <Sidebar.Route to="/signin">Sign In</Sidebar.Route>
        </Sidebar.BtnWrap>
      </Sidebar.Wrapper>
    </Container>
  );
};

Sidebar.Icon = function SidebarIcon({ children, ...restProps }) {
  return <Icon {...restProps}>{children}</Icon>;
};

Sidebar.CloseIcon = function SidebarCloseIcon({ close, ...restProps }) {
  return <CloseIcon {...restProps} />;
};

Sidebar.Wrapper = function SidebarWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Sidebar.Menu = function SidebarMenu({ children, ...restProps }) {
  return <Menu {...restProps}>{children}</Menu>;
};

Sidebar.Link = function SidebarLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Sidebar.BtnWrap = function SidebarBtnWrap({ children, ...restProps }) {
  return <BtnWrap {...restProps}>{children}</BtnWrap>;
};

Sidebar.Route = function SidebarRoute({ children, ...restProps }) {
  return <Route {...restProps}>{children}</Route>;
};

export default Sidebar;
