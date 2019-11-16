import React, { useContext, Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/AuthContext";
import ContactContext from "../../context/contact/ContactContext";

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

  const { isAuthenticated, logoutUser, user } = authContext;
  const { clearContacts } = contactContext;

  const onLogout = () => {
    logoutUser();
    clearContacts();
  };

  const loggedLinks = (
    <Fragment>
      <li>Welcome {user && user.name}</li>
      <li>
        <a onClick={onLogout} href="#!">
          <i style={{ color: "red" }} className="fas fa-sign-out-alt"></i>{" "}
          <span style={{ color: "red" }} className="hide-sm">
            Logout
          </span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </Fragment>
  );

  return (
    <div className="navbar bg-primary">
      <h1>
        <a href="/">
          <i className={icon} /> {title}
        </a>
      </h1>
      <ul>{isAuthenticated ? loggedLinks : guestLinks}</ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: "Contact Keeper",
  icon: "fas fa-id-card-alt"
};
export default Navbar;
