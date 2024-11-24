import React, { useState } from "react";
import "./AddUser.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const Edit = ({closeedit,selectemp,setusers,users}) => {
    const [firstName, setfirstname] = useState(selectemp.firstName);
    const [lastName, setlastname] = useState(selectemp.lastName);
    const [mobile, setmobile] = useState(selectemp.mobile);
    const [email, setemail] = useState(selectemp.email);
    const [office, setoffice] = useState(selectemp.office);
    const [roles, setroles] = useState(selectemp.roles);
    const [status, setstatus] = useState(selectemp.status);

    const id=selectemp.id;

    const update=(e)=>{
        e.preventDefault();
        if(firstName && lastName && mobile && email && office && roles && status){
            const employee={
                id,
                firstName,
                lastName,
                mobile,
                email,
                office,
                roles,
                status
            };
          for(let i=0;i<users.length;i++){
            if(users[i].id===id){
                users.splice(i,1,employee);
                break;
            }
          }
          setusers(users);
          closeedit();
          alert("updated");
        }
        else{
            alert("All Fields are Mandatory")
        }
    }

  return (
    <div className="overlay">
      <div className="modal">
        <div className="header">
          <h2 className="modal-title">UPDATE</h2>
          <FontAwesomeIcon
            className="cross"
            icon={faCircleXmark}
            aria-label="Close Modal"
            onClick={closeedit}
          />
        </div>
        <form onSubmit={update} className="modal-form">
          <div className="form-row">
            <div className="form-group">
              <label>First Name*</label>
              <input
                type="text"
                placeholder="Enter First Name"
                value={firstName}
                onChange={e=>setfirstname(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Last Name*</label>
              <input
                type="text"
                placeholder="Enter Last Name"
                value={lastName}
                onChange={e=>setlastname(e.target.value)}
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
                onChange={e=>setmobile(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Email ID*</label>
              <input
                type="email"
                placeholder="eg. test@gmail.com"
                value={email}
                onChange={e=>setemail(e.target.value)}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Office Location*</label>
              <select>
                <option value={office} disabled onChange={e=>setoffice(e.target.value)}>Select Location</option>
                <option value="New York">New York</option>
                <option value="San Francisco">San Francisco</option>
              </select>
            </div>
            <div className="form-group">
              <label>Roles*</label>
              <select>
                <option value={roles} disabled onChange={e=>setroles(e.target.value)}>Select Role</option>
                <option value="Developer">Developer</option>
                <option value="Manager">Manager</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Status*</label>
              <select value={status} onChange={e=>setstatus(e.target.value)}>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          </div>
          <div className="form-actions">
            <button type="button" className="btn-cancel" onClick={closeedit}>
              Cancel
            </button>
            <button type="submit" className="btn-save">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
