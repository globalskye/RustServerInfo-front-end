import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #222;
  color: #fff;
  padding: 20px;
`;

const NavbarBrand = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const NavbarLinks = styled.ul`
  display: flex;
  list-style: none;
`;

const NavbarLink = styled.li`
  margin: 0 10px;
  a {
    color: #fff;
    text-decoration: none;
    &:hover {
      color: #ccc;
    }
  }
`;

interface NavbarProps {
  brandName: string;
  links: { label: string; href: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ brandName, links }) => {
  return (
    <NavbarContainer>
      <NavbarBrand>{brandName}</NavbarBrand>
      <NavbarLinks>
        {links.map((link) => (
          <NavbarLink key={link.href}>
            <a href={link.href}>{link.label}</a>
          </NavbarLink>
        ))}
      </NavbarLinks>
    </NavbarContainer>
  );
};

export default Navbar;





