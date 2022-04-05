import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import {
  Container,
  Wrap,
  LinksContainer,
  LinksWrapper,
  LinkItems,
  LinkTitle,
  Link,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  return (
    <Container>
      <Footer.Wrap>
        <Footer.LinksContainer>
          <Footer.LinksWrapper>
            <Footer.LinkItems>
              <Footer.LinkTitle>About Us</Footer.LinkTitle>
              <Footer.Link to="/">How it works</Footer.Link>
              <Footer.Link to="/">Testimonials</Footer.Link>
              <Footer.Link to="/">Careers</Footer.Link>
              <Footer.Link to="/">Investors</Footer.Link>
              <Footer.Link to="/">Terms of Service</Footer.Link>
            </Footer.LinkItems>
            <Footer.LinkItems>
              <Footer.LinkTitle>Contact Us</Footer.LinkTitle>
              <Footer.Link to="/">Contact</Footer.Link>
              <Footer.Link to="/">Support</Footer.Link>
              <Footer.Link to="/">Destination</Footer.Link>
              <Footer.Link to="/">Sponsorship</Footer.Link>
            </Footer.LinkItems>
          </Footer.LinksWrapper>

          <Footer.LinksWrapper>
            <Footer.LinkItems>
              <Footer.LinkTitle>Videos</Footer.LinkTitle>
              <Footer.Link to="/">Submit Video</Footer.Link>
              <Footer.Link to="/">Ambassadors</Footer.Link>
              <Footer.Link to="/">Agency</Footer.Link>
              <Footer.Link to="/">Influencer</Footer.Link>
            </Footer.LinkItems>
          </Footer.LinksWrapper>
        </Footer.LinksContainer>
        {/** below are social media links that will take us outside of our website. For those types of links we want to
         * use the <a> tag instead of the <Link> tag. <Link> tag is for the links that take us to a particular page of
         * our own site.
         */}
        <Footer.SocialMedia>
          <Footer.SocialMediaWrap>
            <Footer.SocialLogo to="/" onClick={() => scroll.scrollToTop()}>
              Finn
            </Footer.SocialLogo>
            <Footer.WebsiteRights>
              Finn &copy;{new Date().getFullYear()}. All rights reserved
            </Footer.WebsiteRights>
            <Footer.SocialIcons>
              <Footer.SocialIconLink
                href="//www.facebook.com/tanay.jyotidas"
                target="_blank"
                aria-label="Facebook"
              >
                {/** target="_blank" will open up a new tab in the browser when we click the social media icon */}
                <FaFacebook />
              </Footer.SocialIconLink>
              <Footer.SocialIconLink
                href="//www.instagram.com"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </Footer.SocialIconLink>
              <Footer.SocialIconLink
                href="//www.youtube.com"
                target="_blank"
                aria-label="Youtube"
              >
                <FaYoutube />
              </Footer.SocialIconLink>
              <Footer.SocialIconLink
                href="//www.twitter.com"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </Footer.SocialIconLink>
              <Footer.SocialIconLink
                href="//www.linkedin.com"
                target="_blank"
                aria-label="linkedin"
              >
                <FaLinkedin />
              </Footer.SocialIconLink>
            </Footer.SocialIcons>
          </Footer.SocialMediaWrap>
        </Footer.SocialMedia>
      </Footer.Wrap>
    </Container>
  );
};

Footer.Wrap = function FooterWrap({ children, ...restProps }) {
  return <Wrap {...restProps}>{children}</Wrap>;
};

Footer.LinksContainer = function FooterLinksContainer({
  children,
  ...restProps
}) {
  return <LinksContainer {...restProps}>{children}</LinksContainer>;
};

Footer.LinksWrapper = function FooterLinksWrapper({ children, ...restProps }) {
  return <LinksWrapper {...restProps}>{children}</LinksWrapper>;
};

Footer.LinkItems = function FooterLinkItems({ children, ...restProps }) {
  return <LinkItems {...restProps}>{children}</LinkItems>;
};

Footer.LinkTitle = function FooterLinkTitle({ children, ...restProps }) {
  return <LinkTitle {...restProps}>{children}</LinkTitle>;
};

Footer.Link = function FooterLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Footer.SocialMedia = function FooterSocialMedia({ children, ...restProps }) {
  return <SocialMedia {...restProps}>{children}</SocialMedia>;
};

Footer.SocialMediaWrap = function FooterSocialMediaWrap({
  children,
  ...restProps
}) {
  return <SocialMediaWrap {...restProps}>{children}</SocialMediaWrap>;
};

Footer.SocialLogo = function FooterSocialLogo({ children, ...restProps }) {
  return <SocialLogo {...restProps}>{children}</SocialLogo>;
};

Footer.WebsiteRights = function FooterWebsiteRights({
  children,
  ...restProps
}) {
  return <WebsiteRights {...restProps}>{children}</WebsiteRights>;
};

Footer.SocialIcons = function FooterSocialIcons({ children, ...restProps }) {
  return <SocialIcons {...restProps}>{children}</SocialIcons>;
};

Footer.SocialIconLink = function FooterSocialIconLink({
  children,
  ...restProps
}) {
  return <SocialIconLink {...restProps}>{children}</SocialIconLink>;
};

export default Footer;
