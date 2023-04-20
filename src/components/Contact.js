import React from "react";
import styled from "styled-components";
// import { Button } from "./../styles/Button";

const Wrapper = styled.section`
  padding: 9rem 0;
  .container {
    margin-top: 6rem;
    .contact-form {
      max-width: 50rem;
      margin: auto;
      form {
        display: flex;
        flex-direction: column;
        gap: 3rem;
        input[type="submit"] {
          /* cursor: pointer; */
          transition: all 0.2s;
          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;

const Contact = () => {
  return (
    <Wrapper>
      <h2 className="common-heading">Feel Free to Contact Us</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6944.3621379690785!2d72.88683584126704!3d29.511080937699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393db0a43b77ad8b%3A0xc98350b55308fae7!2sChak%20428%2F6-R%2C%20Bahawalnagar%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1681822516709!5m2!1sen!2s"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Map"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="container">
        <div className="contact-form">
          {/* action="https://formspree.io/f/{form_id}"  */}
          <form action="#" method="post">
            <input
              type="text"
              name="userName"
              placeholder="Username"
              autoComplete="off"
              required
            />
            <input
              type="email"
              name="userEmail"
              placeholder="Email"
              autoComplete="off"
              required
            />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="6"
              autoComplete="off"
              required
              placeholder="Type Your Message"
            ></textarea>
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
