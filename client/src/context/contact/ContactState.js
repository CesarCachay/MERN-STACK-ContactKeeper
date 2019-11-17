import React, { useReducer } from "react";
import axios from "axios";
import ContactContext from "./ContactContext";
import contactReducer from "./ContactReducer";
import {
  ADD_CONTACT,
  ERROR_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  GET_CONTACTS,
  CLEAR_CONTACTS
} from "../types";

const ContactState = props => {
  const initialState = {
    contacts: [],
    current: null,
    filtered: null,
    error: null
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Get Contacts
  const getContacts = async () => {
    try {
      const response = await axios.get("/api/contacts");

      dispatch({
        type: GET_CONTACTS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: ERROR_CONTACT,
        payload: error.response.msg
      });
    }
  };

  // Add Contact
  const addContact = async contact => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const response = await axios.post("/api/contacts", contact, config);
      console.log({ response });

      dispatch({ type: ADD_CONTACT, payload: response.data });
    } catch (error) {
      dispatch({ type: ERROR_CONTACT, payload: error.response.msg });
    }
  };

  // Delete Contact
  const deleteContact = async id => {
    try {
      await axios.delete(`/api/contacts/${id}`);

      dispatch({
        type: DELETE_CONTACT,
        payload: id
      });
    } catch (error) {
      dispatch({
        type: ERROR_CONTACT,
        payload: error.response.msg
      });
    }
  };

  // Update Contact
  const updateContact = async contact => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const response = await axios.put(
        `/api/contacts/${contact._id}`,
        contact,
        config
      );

      dispatch({
        type: UPDATE_CONTACT,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: ERROR_CONTACT,
        payload: error.response.msg
      });
    }
  };

  // Set Current Contact
  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  // Clear Current Contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Filter Contacts
  const filterContacts = text => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  // Clear Contacts
  const clearContacts = () => dispatch({ type: CLEAR_CONTACTS });

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter,
        getContacts,
        clearContacts
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
