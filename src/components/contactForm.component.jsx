import React from "react";
import { Button } from "./common/buttons/button.component";

const ContactForm = () => {
  return (
    <form className="flex flex-col gap-2">
      <label htmlFor="name"></label>
      <input
        className="border p-3 rounded-sm"
        type="text"
        name="name"
        id="name"
        placeholder="Name"
      />

      <label htmlFor="email"></label>
      <input
        className="border p-3 rounded-sm"
        type="email"
        name="email"
        id="email"
        placeholder="Email"
      />

      <label htmlFor="subject"></label>
      <input
        className="border p-3 rounded-sm"
        type="text"
        name="subject"
        id="subject"
        placeholder="Subject"
      />

      <label htmlFor="message"></label>
      <textarea
        className="border p-3 rounded-sm"
        name="message"
        id="message"
        cols="30"
        rows="10"
        placeholder="Write your message here..."
      ></textarea>
      <Button>SEND MESSAGE</Button>
    </form>
  );
};

export default ContactForm;
