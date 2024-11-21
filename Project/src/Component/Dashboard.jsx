import React, { useState } from "react";
import "./Dashboard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCircleQuestion, faEdit, faEnvelope, faGear, faMessage, faStroopwafel, faTowerBroadcast, faUserEdit, faUserGear } from '@fortawesome/free-solid-svg-icons';
import AddUser from "./AddUser";
import {users as initials} from "./employe"

function Dashboard() {

    const[users,setusers]=useState(initials);
    const[openmodal,setOpenmodal]=useState(false);

    const closemodel = () => setOpenmodal(false);

    const addUser=(newUser)=>{
        setusers((prevUsers)=>[...prevUsers, { ...newUser, id: prevUsers.length + 1 }]);
        closemodel();
    }

    return (
        <div className="user-management-container">
            {/* Sidebar */}
            <aside className="sidebar">
                <div>
                    <div className="sidebar-logo">O</div>
                    <ul className="sidebar-menu">
                        <li className="menu-item">
                         <FontAwesomeIcon className="icon" icon={faMessage}/>
                        </li>
                        <li className="menu-item active">
                         <FontAwesomeIcon className="icon2" icon={faUserGear} />
                        </li>
                        <li className="menu-item">
                         <FontAwesomeIcon className="icon" icon={faTowerBroadcast}/>    
                        </li>
                    </ul>
                </div>
                 <ul className="sidebar-menu">
                    <li className="menu-item">
                    <FontAwesomeIcon className="icon" icon={faStroopwafel}/>  
                    </li>
                    <li className="menu-item">
                    <FontAwesomeIcon className="icon" icon={faGear}/>  
                    </li>
                    <li className="menu-item">
                    <FontAwesomeIcon className="icon" icon={faCircleQuestion}/>  
                    </li>
                </ul>
            </aside>

            {/* Main Content */}
            <div className="main-content">
                {/* Top Bar */}
                <header className="top-bar">
                    <div className="top-bar-left">
                        <label>Practice</label>
                        <select className="dropdown">
                            <option>All</option>
                        </select>
                        <label>Location</label>
                        <select className="dropdown">
                            <option>All</option>
                        </select>
                    </div>
                    <div className="top-bar-right">
                        <input type="search" className="top-search-bar" placeholder="Search" />
                        <FontAwesomeIcon className="bell" icon={faBell}/> 
                        <div className="user-profile">
                            <div className="profile-initials">SC</div>
                            <span className="profile-name">Suneel Chauhan</span>
                        </div>
                    </div>
                </header>

                {/* User Management Section */}
                <main className="user-management">
                    <div className="header">
                        <h2>User Management</h2>
                    </div>
                    <div className="tabcontainer">
                        <div className="tabs">
                            <button className="tab active">All Users</button>
                            <button className="tab">All Groups</button>
                        </div>
                    </div>
                    <div className="content">
                        <input type="text" className="search-bar" placeholder="Search Name" />
                        <button className="add-user" onClick={()=>{setOpenmodal(true)}}>Add User</button>
                    </div>
                    <div className="table-wrapper">
                        <table className="user-table">
                            <thead>
                                <tr>
                                    <th>Sr.no</th>
                                    <th>Last Name</th>
                                    <th>First Name</th>
                                    <th>Mobile no.</th>
                                    <th>Email id</th>
                                    <th>Role(s)</th>
                                    <th>Office(s)</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.firstName}</td>
                                        <td>{user.mobile}</td>
                                        <td>{user.email}</td>
                                        <td>{user.roles}</td>
                                        <td>{user.office}</td>
                                        <td className="status">
                                            <div>{user.status}</div>
                                            <a href={`/edit/${user.id}`} className="edit-icon">
                                            <FontAwesomeIcon icon={faUserEdit}/>
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
           {openmodal && <AddUser closemodel={closemodel} addUser={addUser} initials={users}/>}
        </div>
    );
}

export default Dashboard;
