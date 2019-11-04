import React from "react";
import ContactsList from "../components/contacts/ContactsList";
import ContactForm from "../components/contacts/ContactForm";
import ContactFilter from "../components/contacts/ContactFilter";

const Home = () => {
  return (
    <div className="grid-2">
      <div>
        <ContactForm />
      </div>
      <div>
        <ContactFilter />
        <ContactsList />
      </div>
    </div>
  );
};

export default Home;
