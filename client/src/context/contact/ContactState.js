import React, { useReducer } from "react";
import { uuid } from "uuid";
import ContactContext from "./ContactContext";
import contactReducer from "./ContactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from "../types";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Cesar Cachay",
        email: "cesar@able.co",
        phone: "999-222-531",
        type: "personal"
      },
      {
        id: 2,
        name: "Anthony Cachay",
        email: "tony@urp.edu.pe",
        phone: "983-341-531",
        type: "personal"
      },
      {
        id: 3,
        name: "Maria Francia",
        email: "mfrancia@gmail.com",
        phone: "989-246-969",
        type: "professional"
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact

  // Delete Contact

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider value={{ contacts: state.contacts }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
