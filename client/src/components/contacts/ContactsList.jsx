import React, { useContext } from "react";
import ContactContext from "../../context/contact/ContactContext";
import ContactItem from "./ContactItem";

const ContactsList = () => {
  const contactContext = useContext(ContactContext);
  const { contacts } = contactContext;

  return (
    <>
      {contacts.map(contact => (
        <ContactItem contact={contact} key={contact.id} />
      ))}
    </>
  );
};

export default ContactsList;
