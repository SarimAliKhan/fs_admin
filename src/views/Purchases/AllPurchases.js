import React, { useState,useEffect } from 'react';
import {
    makeStyles, Paper,Typography,
    Card,withStyles,TableContainer,CardHeader,Table,TableCell,
    CardContent,CardMedia ,Button, TableHead, TableRow, TableBody, Select
} from "@material-ui/core"

import {Link} from 'react-router-dom';
import {allPurchases} from '../../Database/GetMethods'


 
const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

const AllPurchases = () => {
    const [allpurchase,setAllPurchase] = useState(null);
    const [loading,setLoading] = useState(true)

    const classes = useStyles()
    
    useEffect(()=>{
        allPurchases()
        .then(res=>{
            console.log(res)
            if(res.length > 0){
                setAllPurchase(res)
                setLoading(false)
            }
        })
    },[])


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
      
     
    return(
      <>
      {
        loading?
        <div className="container">
          <p className="text-center">
            Loading...
          </p>
        </div>
        :
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell>Purchase Id</StyledTableCell>
                <StyledTableCell align="right">Purchase Date</StyledTableCell>
                <StyledTableCell align="right">Total Bill</StyledTableCell>
                <StyledTableCell align="right">View Details</StyledTableCell>     
            </TableRow>
            </TableHead>
            <TableBody>
            {allpurchase ? allpurchase.map((purchase) => (
                <StyledTableRow key={purchase.purchaseId}>
                <StyledTableCell component="th" scope="row">
                    {purchase.purchaseId}
                </StyledTableCell>
                <StyledTableCell align="right">{purchase.date}</StyledTableCell>
                <StyledTableCell align="right">{purchase.totalBill}</StyledTableCell>
                <StyledTableCell align="right">
                    <Link  component={Button} to={{pathname:"/orders/purchase/" + purchase.purchaseId ,state:purchase }}>View Details</Link>
                </StyledTableCell>
                </StyledTableRow>
            ))
            :null}
            
            </TableBody>
        </Table>
        </TableContainer>
        }
        </>
        )
}

export default AllPurchases