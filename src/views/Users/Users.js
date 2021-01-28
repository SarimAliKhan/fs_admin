import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Table,TableContainer,Paper,TableRow,TableHead,TableBody,TableCell,makeStyles,withStyles
 } from '@material-ui/core';
import {
  Button
} from 'reactstrap'


import {getUsers} from '../../Database/GetMethods'
import axios from 'axios';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});




// function UserRow(props) {
//   const user = props.user
//   const userLink = `/users/${user.userId}`
//   return (
//     <tr key={"k"}>
//       <td><Link to={userLink}>{user.fullName}</Link></td>
//       <td>{user.email}</td>
//       <td>{user.phNum}</td>
//       <td>{user.createdAt}</td>
//       <td><Button color="danger">Delete</Button></td>
//     </tr>
//   )
// }

const Users = () => {
  const classes = useStyles();
  const [users,setUsers] = useState(null)
  const [loading,setLoading] = useState(true)
  // constructor(){
  //   super();
  //   this.state = {
  //     users : null
  //   }
  // }

  useEffect(()=>{
    getUsers()
    .then(doc => {
      if(doc.length > 0){
        setUsers(doc)
        setLoading(false)
        console.log( " Users ",doc)
      }else{
        alert(doc.message)
      }
    })
    .catch(e => {
      alert(e.message)
    })
  },[])

    return (
      <>
      {
        loading ?
        <div className="container">
          <p className="text-center">Loading...</p>
        </div>
        :
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
          <TableHead>
          <TableRow>
              <StyledTableCell align="left">Id</StyledTableCell>
              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell align="left">Email</StyledTableCell>
              <StyledTableCell align="left">Number</StyledTableCell>
              <StyledTableCell align="left">Last Seen</StyledTableCell>
              <StyledTableCell align="left">Gender</StyledTableCell>
              <StyledTableCell align="left">DOB</StyledTableCell>
              <StyledTableCell align="left">Interest</StyledTableCell>
              <StyledTableCell align="left">Joining</StyledTableCell>
              <StyledTableCell align="left">Delete</StyledTableCell>
              <StyledTableCell align="left">Block</StyledTableCell>
              <StyledTableCell align="left">View  Orders</StyledTableCell>
          </TableRow>
          </TableHead>
          <TableBody>
          {users ? users.map((u) => (
              <StyledTableRow key={u}>
              <StyledTableCell component="th" scope="row">
                  {u.userId}
              </StyledTableCell>                
              <StyledTableCell component="th" scope="row">
                  {u.fullName}
              </StyledTableCell>
              <StyledTableCell align="left">{u.email}</StyledTableCell>
              <StyledTableCell align="left">{u.phNum}</StyledTableCell>
              <StyledTableCell align="left">{u.lastSeen}</StyledTableCell>
              <StyledTableCell align="left">{u.gender}</StyledTableCell>
              <StyledTableCell align="left">{u.dob}</StyledTableCell>
              <StyledTableCell align="left">{u.interested}</StyledTableCell>
              <StyledTableCell align="left">{u.joiningDate}</StyledTableCell>
              <StyledTableCell align="left">
                  <Button color="danger">
                    Delete
                  </Button>
              </StyledTableCell>
              <StyledTableCell align="left">
                  <Button color="warning">
                    Block
                  </Button>
              </StyledTableCell>
              <StyledTableCell align="left">
                  <Link to={{pathname:'/'+u.userId}}>View Orders</Link>
              </StyledTableCell>
              </StyledTableRow>
          )):null
          }
          </TableBody>
      </Table>
      </TableContainer>
    }
  </>
  )
  
}

export default Users;
