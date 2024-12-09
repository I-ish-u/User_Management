import React, { useState } from "react";
import "./Dashboard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCircleQuestion, faEdit, faEnvelope, faGear, faMessage, faStroopwafel, faTowerBroadcast, faTrashCan, faUserEdit, faUserGear } from '@fortawesome/free-solid-svg-icons';
import AddUser from "./AddUser";
import {users as initials} from "./employe"
import Edit from "./Edit";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import GroupTable from "./Table";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "./Reducer";

function Dashboard() {
    const userlist=useSelector((state)=>state.userlist);
    const[active,setactive]=useState(0);
    const[users,setusers]=useState(initials);
    const[openmodal,setOpenmodal]=useState(false);
    const[edit,setEdit]=useState(false);
    const[selectemp,setselectemp]=useState(null);
    const[search,setsearch]=useState("");
    const closeedit = () => setEdit(false);
    const closemodel = () => setOpenmodal(false);
    const dispatch=useDispatch();

    const deleteuser =(id)=>{
        dispatch(deleteUser(id));
    }

    const handleChange=(event,tab)=>{
        setactive(tab);
    }

    const handleedit =(id)=>{
        const [editemp]=userlist.filter(editemp=>editemp.id===id);
        setselectemp(editemp);
        setEdit(true);
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
                            <option>Eye Vision</option>
                            <option>EyeCare Med</option>
                            <option>Eye Care</option>
                        </select>
                        <label>Location</label>
                        <select className="dropdown">
                            <option>All</option>
                            <option>America</option>
                            <option>Indonesia</option>
                            <option>Australia MD</option>
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
                            <Tabs value={active} onChange={handleChange}>
                                <Tab label="All Users" />
                                <Tab label="All Groups" />
                            </Tabs>
                        </div>
                    </div>
                    
                    {active===0 && 
                    <>
                        <div className="content">
                        <input type="text" className="search-bar" onChange={(e)=>setsearch(e.target.value)} placeholder="Search Name" />
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
                                {userlist.filter((item)=>{
                                    return search.toLowerCase===""?item:item.firstName.toLowerCase().includes(search);
                                }).map((user) => (
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
                                            <button className="edit-icon" onClick={()=>{handleedit(user.id)}}>
                                                <FontAwesomeIcon icon={faUserEdit}/>
                                            </button>
                                            <button className="edit-icon" onClick={()=>{deleteuser(user.id)}}>
                                                <FontAwesomeIcon icon={faTrashCan}/>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        </div>
                    </>
                  }
                  {active===1 && 
                  <>  
                  <GroupTable/>
                  </>  
                  }
                </main>
            </div>
           {edit && <Edit closeedit={closeedit} handleedit={handleedit} selectemp={selectemp} users={users} setusers={setusers} />}
           {openmodal && <AddUser closemodel={closemodel} users={users} setusers={setusers}/>}
        </div>
    );
}

export default Dashboard;
