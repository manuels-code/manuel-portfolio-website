import React from "react";
import Address from "./address.component";
import Container from "./common/containers/container.component";
import ContactForm from "./contactForm.component";

const Contact = () => {
  return (
    <section>
      <Container>
        <h2>Contact Me</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque,
          ipsum.
        </p>
        <Address />
        <ContactForm />
      </Container>
    </section>
  );
};

export default Contact;
