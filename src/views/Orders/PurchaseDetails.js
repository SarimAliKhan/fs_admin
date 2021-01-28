import React, { useEffect, useState } from 'react';

import {getParticularPurchase} from '../../Database/GetMethods'
import {
    makeStyles, Paper,Typography,
    Card,withStyles,TableContainer,CardHeader,Table,TableCell,
    CardContent,CardMedia ,Button, TableHead, TableRow, TableBody, Select
} from "@material-ui/core"



const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });


const PurchaseDetails = () => { 
    const classes = useStyles()
    const [purchaseDetail,setPurchaseDetail] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        getParticularPurchase(window.location.href.split('/')[6])
        .then(res=>{
            console.log(res)
            setPurchaseDetail(res)
            setLoading(false)
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
        <div>
            {
                loading ?
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
                            <StyledTableCell align="right">Product Name</StyledTableCell>
                            <StyledTableCell align="right">Product Variations</StyledTableCell>
                            <StyledTableCell align="right">Price</StyledTableCell>
                            
                            <StyledTableCell align="right">Quantity</StyledTableCell>
                            <StyledTableCell align="right">Sale Price</StyledTableCell>  
                            <StyledTableCell align="right">Discount</StyledTableCell>  
                            
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {purchaseDetail ? purchaseDetail.map((purchase) => (
                            <StyledTableRow key={purchase.purchaseId}>
                            <StyledTableCell component="th" scope="row">
                                {purchase.purchaseId}
                            </StyledTableCell>
                            <StyledTableCell align="right">{purchase.product_name}</StyledTableCell>
                            <StyledTableCell align="right">{purchase.combination_string}</StyledTableCell>
                            <StyledTableCell align="right">{purchase.price}</StyledTableCell>
                            <StyledTableCell align="right">{purchase.quantity}</StyledTableCell>
                            <StyledTableCell align="right">{purchase.sale_price}</StyledTableCell>
                            <StyledTableCell align="right">{purchase.discount}</StyledTableCell>
                            {/* <StyledTableCell align="right">
                                <Link  component={Button} to={{pathname:"/orders/purchase/" + purchase.purchaseId ,state:purchase }}>View Details</Link>
                            </StyledTableCell> */}
                            </StyledTableRow>
                        ))
                        :null}
                        
                        </TableBody>
                    </Table>
                </TableContainer>
            }
        </div>
    );
}

export default PurchaseDetails;