import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

const ContactStyled = styled.div`
  margin-top: 6rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10rem;
  > div {
    width: 30%;
  }
  @media screen and (max-width: 850px) {
    flex-direction: column;
    gap: 5rem;
    > div {
      width: 80%;
    }
  }

  .form button {
    background: transparent;
    border: 2px solid white;
    padding: 0.5rem 1rem;
    transition: all 250ms ease-in-out;
  }

  .form button i {
    transition: all 250ms ease-in-out;
  }

  .form button:hover {
    color: #cecece;
    border-color: #cecece;
    > i {
      color: #cecece;
    }
  }

  .form-group input,
  .form-group textarea {
    padding-left: 5px;
    margin-top: 0.25rem;
    color: black;
    border-radius: 5px;
    display: block;
    box-sizing: border-box;
    width: 100%;
    resize: none;

    &:focus {
      outline: none;
    }
  }
`;

const Contact = () => {
  return (
    <Layout>
      <ContactStyled>
        <div>
          <h2>Let's chat !</h2>
          <p>
            If you have any opportunities or questions related to web
            development, please feel free to get in touch with me via the form
            and I will reply back as soon as possible.{' '}
          </p>
          <p>
            Or if you would prefer to, you can also reach me on any of the
            social channels linked below.
          </p>
        </div>
        <div>
          <form
            className="form"
            action="https://formkeep.com/f/e2047607b2b5"
            acceptCharset="UTF-8"
            encType="multipart/form-data"
            method="POST"
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="John Doe"
                required
              />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="johndoe@gmail.com"
                required
              />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                required
                rows={5}
                placeholder="Enter Your message here"
              ></textarea>
              <br />
            </div>
            <button type="submit">
              Send <i className="fas fa-angle-double-right"></i>
            </button>
          </form>
        </div>
      </ContactStyled>
    </Layout>
  );
};

export default Contact;
