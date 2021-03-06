import React from 'react';
import styled, {css} from 'styled-components/macro';
import {Link} from 'react-router-dom';
import { menuData } from '../data/MenuData';
import { Button } from './Button';

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2 rem;
  z-index: 100;
  width: 100%;
  background: white;
`;

const NavLink = css`
  color: #000;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`

const Logo = styled(Link)`
  ${NavLink}
  font-style: italic;
  font-size: 20px;
`;

const MenuBars = styled.i`
  display: none;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;
`;

const NavMenuLinks = styled(Link)`
    ${NavLink}
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
`;

const Navbar = (props) => {
    return (
        <Nav>
            <Logo to='/'>SMALL CONNECTIONS</Logo>
            <MenuBars />
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
            <Button onClick={props.onSignInClick}>Sign Up</Button>
            <Button onClick={props.onLogInClick}>Log In</Button>
            </NavBtn>
        </Nav>
    );
};

export default Navbar
