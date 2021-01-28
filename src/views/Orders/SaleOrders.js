// import React, {useState,useEffect} from 'react';
// import { Row, Col, Table, Button, Card, CardBody, Badge } from 'reactstrap';
// import { Link } from 'react-router-dom';
// import {getSales} from '../../Database/GetMethods'
// const SaleOrders = () => {
//     const [sales,setSales] = useState([])

//     useEffect(() => {
//         getSales()
//         .then(doc => {
//             console.log(doc)
//             if(doc.length > 0){
//                 setSales(doc)
//             }
//         })
//         .catch(e => {
//             console.log(e.message)
//         })
        
//     },[])


//     const renderSales = (list) => {
//         var table = []
//         for(let i = 0; i < list.length; i ++){
//             table.push(
//             <tr key={i}>
//                 <td>{i+1}</td>
//                 <td>{sale.date}</td>
//                 <td>{list[i].totalBill}</td>
//                 <td>{list[i].track_number ? <Button color="danger">Cancel</Button> : <Button onClick={e => confirmPayment(list[i].weight,list[i].totalBill,list[i].quantity,list[i].cityCode,list[i].fullName,list[i].email,list[i].firstNum,list[i].address,list[i].saleId)} color="warning">Confirm</Button>}</td>
//                 <td><Link to={"/orders/sales/" + list[i].saleId}><Button color="primary">View Details</Button></Link></td>
//             </tr>
//             )
//         }
//         return table
//     }

//     return(
//         <Row>
//             <Col xs="12">
//                 <Card>
//                     <CardBody>
//                         <Table responsive striped>
//                             <thead>
//                                 <tr>
//                                     <td>Index</td>
//                                     <td>Sale Date</td>
//                                     <td>Total</td>
//                                     <td>Payment</td>
//                                     <td>Action</td>
//                                 </tr>
//                             </thead>

//                             <tbody>
//                                 {
//                                     sales.length > 0 ? renderSales(sales) : "Loading..."
//                                 }
//                             </tbody>
//                         </Table>
//                     </CardBody>
//                 </Card>
//             </Col>
//         </Row>
//     );
// }

// export default SaleOrders;
import React,{useEffect,useState} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Link} from 'react-router-dom'

import {getSales} from '../../Database/GetMethods'
import {
  Grid
} from '@material-ui/core';
import {Input,Button} from 'reactstrap';
import {postLeapords} from '../../Database/PostMethods'

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

function SaleOrders() {
  const classes = useStyles();
  const [sales,setSales] = useState([])
  const [loading , setLoading] = useState(true);
  useEffect(()=>{
    getSales()
    .then(doc => {
        console.log(doc)
        if(doc.length > 0){
            setSales(doc)
            setLoading(false)
        }
    })
    .catch(e => {
        console.log(e.message)
    })
  },[])

  const confirmPayment = (weight,totalBill,quantity,cityCode,name,email,firstNum,address,saleId) => {
    console.log(weight,totalBill,quantity,cityCode,name,email,firstNum,address,saleId)
    if(weight && totalBill && quantity && cityCode && name && email && firstNum && address && saleId){
        const obj = {
            weight,totalBill,quantity,cityCode,name,email,firstNum,address,saleId
        }
        postLeapords(obj)
        .then(doc => {
            if(doc.code === 1){
                window.location.reload()
            }else{
                alert(doc.message)
            }
        })
        .catch(e => {
            alert(e.message)
        })

    }else{
        alert("Information not complete")
    }
}


  return (
    <>
    {/* <Grid container> */}
        {/* <Grid item md={6}>
            <Input type="select" defaultValue='' >
                <option value='-1' >
                </option>
            </Input>
        </Grid> */}
    {/* <Grid item> */}
        {
        loading ? 
        <div className="container">
          <p className="text-center ">
            Loading... 
          </p>
        </div>
        : 
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell>Sale Id</StyledTableCell>
                <StyledTableCell align="right">Order Number</StyledTableCell>
                <StyledTableCell align="right">Customer Name</StyledTableCell>
                <StyledTableCell align="right">Date</StyledTableCell>
                <StyledTableCell align="right">Total</StyledTableCell>
                <StyledTableCell align="right">Confirm</StyledTableCell>
                <StyledTableCell align="right">View Details</StyledTableCell>     
            </TableRow>
            </TableHead>
            <TableBody>
            {sales.map((sale) => (
                <StyledTableRow key={sale.saleId}>
                <StyledTableCell component="th" scope="row">
                    {sale.saleId}
                </StyledTableCell>
                <StyledTableCell align="right">{sale.track_number}</StyledTableCell>
                <StyledTableCell align="right">{sale.fullName}</StyledTableCell>
                <StyledTableCell align="right">{sale.date}</StyledTableCell>
                <StyledTableCell align="right">{sale.totalBill}</StyledTableCell>
                <StyledTableCell align="right">
                {
                  ! sale.track_number ?  
                  <Button onClick={e => confirmPayment(sale.weight,sale.totalBill,sale.quantity,sale.cityCode,sale.fullName,sale.email,sale.firstNum,sale.address,sale.saleId)} color="warning">Confirm</Button>
                  :
                  "Order Placed"
                }
                </StyledTableCell>
                <StyledTableCell align="right">
                    <Link   component={Button} to={{pathname:"/orders/sales/" + sale.saleId ,state:sale }}>View Details</Link>
                </StyledTableCell>
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
  }
    {/* </Grid>
    </Grid> */}
    </>
  );
}


export default SaleOrders;

