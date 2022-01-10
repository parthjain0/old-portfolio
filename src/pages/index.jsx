import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

const IndexStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10vh;
  > div {
    flex: 1;
  }
  .info p {
    font-size: 1.5rem;
    margin: 0.25rem 0 1.5rem;
    line-height: 2rem;
  }
  button {
    background: transparent;
    border: 2px solid white;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    transition: all 200ms ease-in-out;
  }
  button a,
  button a i {
    color: white;
    text-decoration: none;
    transition: all 200ms ease-in-out;
  }
  button:hover {
    > a,
    > a i {
      color: #cecece;
    }
    border-color: #cecece;
  }
  .latestproj {
    text-align: center;
  }
`;
const Index = () => {
  return (
    <Layout>
      <IndexStyled>
        <div className="info">
          <h1>Hi, I'm Parth Jain.</h1>
          <p>
            I am a frontend developer who is passionate about creating web apps
            as well as hybrid apps for android and ios via newer SPA
            technologies. Currently I am working on react apps and diving deeper
            into libraries and tools surrounding it.
          </p>
          <button type="submit">
            <a
              href="https://drive.google.com/file/d/1c67siIix-DnkIqfjO7ekG7vqKDoX3J77/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Download CV <i class="fas fa-angle-double-down"></i>
            </a>
          </button>
        </div>
        <div className="latestproj">
          <h1>Latest Project</h1>
        </div>
      </IndexStyled>
    </Layout>
  );
};

export default Index;
