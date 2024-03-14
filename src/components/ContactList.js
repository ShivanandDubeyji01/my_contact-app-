import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const updateContactHandler = (updatedContact) => {
    const index = props.contacts.findIndex(
      (contact) => contact.id === updatedContact.id
    );
    const updatedContacts = [...props.contacts];
    updatedContacts[index] = updatedContact;
    props.setContacts(updatedContacts);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHander={deleteContactHandler}
        key={contact.id}
        updateContact={updateContactHandler}
      />
    );
  });

  return <div className="ui celled list">{renderContactList}</div>;
};

export default ContactList;
