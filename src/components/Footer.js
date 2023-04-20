import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "./../styles/Button";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Wrapper = styled.section`
  .contact-short {
    background-color: ${({ theme }) => theme.colors.bg};
    padding: 3rem 5rem;
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
    .contact-short-btn {
      justify-self: end;
      align-self: center;
    }
  }
  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-subscribe {
      input {
        padding: 1rem 2rem;
      }
      input[type="submit"] {
        font-size: 1.4rem;
      }
    }
    .footer-social-icons {
      display: flex;
      gap: 2rem;
      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        cursor: pointer;
        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
        }
      }
    }
    .footer-bottom-section {
      padding-top: 9rem;
      hr {
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }
    }
  }

  /*  */
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      text-align: center;
      padding: 2rem 0rem;
      /* max-width: 95vw; */
    }
    .contact-short-btn {
      place-self: auto !important;
    }
    footer {
      text-align: center;
      .footer-social-icons {
        justify-content: center;
      }
      .footer-subscribe {
        form {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      }
      .footer-bottom-section {
        padding-top: 2rem;
      }
    }
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <section className="container contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get started?</h3>
            <h3>Talk to us today</h3>
          </div>

          <div className="contact-short-btn">
            <NavLink to="/contact">
              <Button>Get Started</Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer>
        <div className="container footer-grid grid-four-column">
          <div className="footer-about">
            <h3>SD Goraya</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          {/* 2nd column */}
          <div className="footer-subscribe">
            <h3>Subscribe to get important updates</h3>
            <form action="#">
              <input
                type="text"
                name="email"
                required
                autoComplete="off"
                placeholder="email"
              />
              <input type="submit" value="subscribe" />
            </form>
          </div>
          {/* 3rd column */}
          <div className="footer-social">
            <h3>Follow us</h3>
            <div className="footer-social-icons">
              <div>
                <FaDiscord className="icons" title="Discord" />
              </div>
              <div>
                <FaInstagram className="icons" title="Instagram" />
              </div>
              <a
                href="https://www.youtube.com/channel/UCQ_QmTKd8Wk9U6RPbLXI-bA"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <FaYoutube className="icons" title="Youtube" />
                </div>
              </a>
            </div>
          </div>
          {/* 4th column */}
          <div className="footer-contact">
            <h3>Call Us</h3>
            <h3>+92 3064537022</h3>
          </div>
        </div>

        {/* bottom section */}
        <div className="footer-bottom-section">
          <hr />
          <div className="container grid grid-two-column">
            <p>@{new Date().getFullYear()} SDGoraya. All Rights Reserved</p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

export default Footer;
