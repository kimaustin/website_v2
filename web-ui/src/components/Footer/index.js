import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocailLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>LINKS</FooterLinkTitle>
                            <FooterLink to="/work">Work</FooterLink>
                            <FooterLink to="/me">Me</FooterLink>
                            <FooterLink to="/photos">Photos</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>LINKS2</FooterLinkTitle>
                            <FooterLink to="/work2">Work2</FooterLink>
                            <FooterLink to="/me2">Me2</FooterLink>
                            <FooterLink to="/photos2">Photos2</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>LINK3</FooterLinkTitle>
                            <FooterLink to="/work3">Work3</FooterLink>
                            <FooterLink to="/me3">Me3</FooterLink>
                            <FooterLink to="/photos3">Photos3</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>LINKS4</FooterLinkTitle>
                            <FooterLink to="/work4">Work4</FooterLink>
                            <FooterLink to="/me4">Me4</FooterLink>
                            <FooterLink to="/photos4">Photos4</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocailLogo to='home'>AEK</SocailLogo>
                        <WebsiteRights>AEK © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook"><FaFacebook /></SocialIconLink>
                            <SocialIconLink href="//www.instagram.com/nektine" target="_blank" aria-label="Instagram"><FaInstagram /></SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube"><FaYoutube /></SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;
