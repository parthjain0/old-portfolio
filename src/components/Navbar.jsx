import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import CustomLink from './CustomLink';

const NavbarStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    font-family: 'Satisfy', sans-serif;
    text-decoration: none;
    font-size: 2rem;
  }

  .nav-menu Link,
  .nav-menu a {
    margin: 1rem 0.5rem;
    text-decoration: none;
    border-bottom: 2px solid #05445e;
    transition: all 150ms;
  }
  .nav-menu Link:hover,
  .nav-menu a:hover {
    position: relative;
    bottom: 2px;
    padding-bottom: 2px;
    border-bottom: 2px solid coral;
    color: coral;
  }
`;

const Navbar = () => {
  return (
    <NavbarStyled>
      <div>
        <Link to="/" className="logo">
          Parth Jain
        </Link>
      </div>
      <div className="nav-menu">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/projects">Projects</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
        <a
          href="https://drive.google.com/file/d/1c67siIix-DnkIqfjO7ekG7vqKDoX3J77/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          CV
        </a>
      </div>
    </NavbarStyled>
  );
};

export default Navbar;
