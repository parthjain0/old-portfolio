import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

const NavbarStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .nav-menu Link,
  .nav-menu a {
    margin: 1rem 2rem;
    text-decoration: none;
    border-bottom: 2px solid #05445e;
    transition: all 150ms;
  }
  .nav-menu Link:hover,
  .nav-menu a:hover {
    position: relative;
    border-bottom: 2px solid white;
    bottom: 2px;
    padding: 0 0 2px;
  }
`;

const Navbar = () => {
  return (
    <NavbarStyled>
      <div className="nav-header">
        <Link to="/">
          <StaticImage
            className="logo"
            src="../images/logo.png"
            alt="Logo"
            object-fit="fill"
          />
        </Link>
      </div>
      <div className="nav-menu">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
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
