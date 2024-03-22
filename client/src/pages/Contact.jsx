import React from "react";
import ContactForm from "./partials/ContactForm";
import ContactInfo from "./partials/ContactInfo";

function Contact() {
  return (
    <>
      <div className="flex flex-wrap items-center gap-4 bg-gray-800 px-10">
        <ContactForm />
        <ContactInfo />
      </div>
    </>
  );
}

export default Contact;
