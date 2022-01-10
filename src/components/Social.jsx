import React from 'react';
import styled from 'styled-components';

const SocialStyled = styled.div`
  margin: 8rem auto 2rem;
  display: flex;
  justify-content: center;
  div {
    margin: 0 2rem;
  }
  div a i {
    font-size: 1.5rem;
  }
  div a i:hover {
    color: coral;
  }
`;

const Social = () => {
  return (
    <SocialStyled>
      <div>
        <a
          href="mailto:parthjain9678@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="far fa-envelope"></i>
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/parthjain9678/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
      <div>
        <a
          href="https://github.com/parthjain98"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
      <div>
        <a
          href="https://twitter.com/parthjain0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>
      </div>
      <div>
        <a
          href="https://www.instagram.com/parthjain3/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </SocialStyled>
  );
};

export default Social;
