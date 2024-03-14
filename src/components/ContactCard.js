import React, { useState } from "react";

const ContactCard = (props) => {
  const { id, name, email, mobile } = props.contact;
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedEmail, setEditedEmail] = useState(email);
  const [editedMobile, setEditedMobile] = useState(mobile);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    props.updateContact({ id, name: editedName, email: editedEmail, mobile: editedMobile });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedName(name);
    setEditedEmail(email);
    setEditedMobile(mobile);
  };

  const handleNameChange = (e) => {
    setEditedName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEditedEmail(e.target.value);
  };

  const handleMobileChange = (e) => {
    setEditedMobile(e.target.value);
  };

  return (
    <div className="item">
      <div className="content">
        {isEditing ? (
          <div className="ui form">
            <div className="field">
              <label>Name</label>
              <input
                type="text"
                value={editedName}
                onChange={handleNameChange}
              />
            </div>
            <div className="field">
              <label>Email</label>
              <input
                type="text"
                value={editedEmail}
                onChange={handleEmailChange}
              />
            </div>
            <div className="field">
              <label>Mobile</label>
              <input
                type="text"
                value={editedMobile}
                onChange={handleMobileChange}
              />
            </div>
            <div className="ui buttons">
              <button className="ui positive button" onClick={handleSave}>
                Save
              </button>
              <div className="or"></div>
              <button className="ui negative button" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="header">{name}</div>
            <div>{email}</div>
            <div>{mobile}</div>
          </>
        )}
      </div>
      {!isEditing && (
        <i
          className="edit alternate outline icon"
          style={{ color: "blue", cursor: "pointer" }}
          onClick={handleEdit}
        ></i>
      )}
      <i
        className="trash alternate outline icon"
        style={{ color: "red", cursor: "pointer" }}
        onClick={() => props.clickHander(id)}
      ></i>
    </div>
  );
};

export default ContactCard;
