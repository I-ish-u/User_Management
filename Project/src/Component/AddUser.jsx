import React, { useEffect, useRef, useState } from "react";
import "./AddUser.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { addusers } from "./Reducer";



const AddUser = ({ closemodel }) => {
  const userlist=useSelector((state)=>state.userlist)
  const dispatch=useDispatch();
  const textInput = useRef(null);

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    textInput.current.focus();

    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  const [firstName, setfirstname] = useState("");
  const [lastName, setlastname] = useState("");
  const [mobile, setmobile] = useState("");
  const [email, setemail] = useState("");
  const [office, setoffice] = useState("");
  const [roles, setroles] = useState("");
  const [status, setstatus] = useState("Active");

  const id=userlist.length+1;

  const handlesubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName && mobile && email && office && roles && status) {
      const newemployee = {
        id,
        firstName,
        lastName,
        mobile,
        email,
        office,
        roles,
        status
      };
      dispatch(addusers(newemployee));
      closemodel();
      alert("Employee details submitted successfully");
    } else {
      alert("All fields are mandatory");
    }
  };

  return (
    <div className="overlay">
      <div className="modal">
        <div className="header">
          <h2 className="modal-title">ADD USER</h2>
          <FontAwesomeIcon
            className="cross"
            onClick={closemodel}
            icon={faCircleXmark}
            aria-label="Close Modal"
          />
        </div>
        <form className="modal-form" onSubmit={handlesubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>First Name*</label>
              <input
                type="text"
                placeholder="Enter First Name"
                ref={textInput}
                value={firstName}
                onChange={(e) => setfirstname(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Last Name*</label>
              <input
                type="text"
                placeholder="Enter Last Name"
                value={lastName}
                onChange={(e) => setlastname(e.target.value)}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Mobile Number*</label>
              <input
                type="tel"
                placeholder="+00 0000000000"
                value={mobile}
                onChange={(e) => setmobile(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Email ID*</label>
              <input
                type="email"
                placeholder="eg. test@gmail.com"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Office Location*</label>
              <select value={office} onChange={(e) => setoffice(e.target.value)}>
                <option value="" disabled>Select Location</option>
                <option value="New York">New York</option>
                <option value="San Francisco">San Francisco</option>
              </select>
            </div>
            <div className="form-group">
              <label>Roles*</label>
              <select value={roles} onChange={(e) => setroles(e.target.value)}>
                <option value="" disabled>Select Role</option>
                <option value="Developer">Developer</option>
                <option value="Manager">Manager</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Status*</label>
              <select value={status} onChange={(e) => setstatus(e.target.value)}>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          </div>
          <div className="form-actions">
            <button type="button" className="btn-cancel" onClick={closemodel}>
              Cancel
            </button>
            <button type="submit" className="btn-save">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
