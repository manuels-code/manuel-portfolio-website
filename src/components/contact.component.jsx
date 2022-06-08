import React from "react";
import Address from "./address.component";
import Container from "./common/containers/container.component";
import ContactForm from "./contactForm.component";

const Contact = () => {
  return (
    <section>
      <Container>
        <h2>Contact Me</h2>
          <h3>Am I Good Fit for Your Team?</h3>
        <p>
          Let's get in touch. I am currently looking for a team  that cares about building quality products.
        </p>
        <Address />
        <ContactForm />
      </Container>
    </section>
  );
};

export default Contact;
