import React from 'react';
import styled from 'styled-components';

const SocialStyled = styled.div`
  margin: 2rem auto;
  display: flex;
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
          <i class="far fa-envelope"></i>
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/parthjain9678/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-linkedin"></i>
        </a>
      </div>
      <div>
        <a
          href="https://github.com/parthjain98"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-github"></i>
        </a>
      </div>
      <div>
        <a
          href="https://twitter.com/parthjain0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-twitter"></i>
        </a>
      </div>
      <div>
        <a
          href="https://www.instagram.com/parthjain3/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-instagram"></i>
        </a>
      </div>
    </SocialStyled>
  );
};

export default Social;
