import React, { useContext, useEffect } from "react";
import ContactsList from "../components/contacts/ContactsList";
import ContactForm from "../components/contacts/ContactForm";
import ContactFilter from "../components/contacts/ContactFilter";
import AuthContext from "../context/auth/AuthContext";

const Home = () => {
  const authContext = useContext(AuthContext);
  const { loadUser } = authContext;

  useEffect(() => {
    loadUser();

    // eslint-disable-next-line
  }, []);

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
