import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserEdit} from '@fortawesome/free-solid-svg-icons';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {users as initials} from "./employe"
import './Table.css'
import Edit from './Edit';
import AddUser from './AddUser';

const GroupTable = () => {
    const[searchbox,setsearchbox]=useState("")
    const[edit,setedit]=useState(false);
    const[users,setusers]=useState(initials);
    const[select,setselect]=useState(null);
    const[openmodal,setOpenmodal]=useState(false)
    const closemodel=()=>setOpenmodal(false);
    const closeedit=()=>setedit(false);

    const handleedit=(id)=>{
        const[selectemp]=users.filter(selectemp=>selectemp.id===id);
        setselect(selectemp);
        setedit(true);
    }

  return (
    <div>
         <div className="content">
            <input type="text" className="search-bar" onChange={(e)=>setsearchbox(e.target.value)} placeholder="Search Name" />
            <button className="add-user" onClick={()=>{setOpenmodal(true)}}>Add User</button>
         </div>  
         <TableContainer component={Paper} style={{height: '330px' }}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                <TableRow>
                    <TableCell align='left' sx={{fontSize:"16px", fontWeight:"700", padding:"8px"}}>Sr.no</TableCell>
                    <TableCell align="left" sx={{fontSize:"16px", fontWeight:"700", padding:"8px"}}>Last Name</TableCell>
                    <TableCell align="left" sx={{fontSize:"16px", fontWeight:"700", padding:"8px"}}>First Name</TableCell>
                    <TableCell align="left" sx={{fontSize:"16px", fontWeight:"700", padding:"8px"}}>Mobile No.</TableCell>
                    <TableCell align="left" sx={{fontSize:"16px", fontWeight:"700", padding:"8px"}}>Email id</TableCell>
                    <TableCell align="left" sx={{fontSize:"16px", fontWeight:"700", padding:"8px"}}>Role(s)</TableCell>
                    <TableCell align="left" sx={{fontSize:"16px", fontWeight:"700", padding:"8px"}}>Office(s)</TableCell>
                    <TableCell align="center" sx={{fontSize:"16px", fontWeight:"700", padding:"8px"}}>Status</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {users.filter((item)=>{
                    return searchbox.toLowerCase()===""?item:item.firstName.toLowerCase().includes(searchbox);
                }).map((row) => (
                    <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell align='left' component="th" scope="row" sx={{fontSize:"16px",padding:"8px"}}>
                        {row.id}
                    </TableCell>
                    <TableCell align="left" sx={{fontSize:"16px",fontWeight:"400", padding:"9px"}}>{row.lastName}</TableCell>
                    <TableCell align="left" sx={{fontSize:"16px",fontWeight:"400", padding:"9px"}}>{row.firstName}</TableCell>
                    <TableCell align="left" sx={{fontSize:"16px",fontWeight:"400", padding:"9px"}}>{row.mobile}</TableCell>
                    <TableCell align="left" sx={{fontSize:"16px",fontWeight:"400", padding:"9px"}}>{row.email}</TableCell>
                    <TableCell align="left" sx={{fontSize:"16px",fontWeight:"400", padding:"9px"}}>{row.roles}</TableCell>
                    <TableCell align="left" sx={{fontSize:"16px",fontWeight:"400", padding:"9px"}}>{row.office}</TableCell>
                    <TableCell align="left" sx={{fontSize:"16px",fontWeight:"400", padding:"9px", display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                         <div>{row.status}</div>
                         <button className="edit-icon" onClick={()=>{handleedit(row.id)}}>
                            <FontAwesomeIcon icon={faUserEdit}/>
                         </button>
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
        {edit && <Edit closeedit={closeedit} handleedit={handleedit} selectemp={select} users={users} setusers={setusers} />}
        {openmodal && <AddUser closemodel={closemodel} users={users} setusers={setusers}/>}
    </div>
  )
}

export default GroupTable