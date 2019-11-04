import React from "react";
import ContactsList from "../components/contacts/ContactsList";

const Home = () => {
  return (
    <div className="grid-2">
      <div></div>
      <div>
        <ContactsList />
      </div>
    </div>
  );
};

export default Home;
