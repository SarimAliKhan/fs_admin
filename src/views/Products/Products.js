import React, {  useEffect, useState } from 'react';
import {  Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import {getProducts,getStock} from '../../Database/GetMethods'
import {
  makeStyles, Paper,
  withStyles,TableContainer,Table,TableCell,
 TableHead, TableRow, TableBody
} from "@material-ui/core"


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const Products =() => {

  const classes = useStyles();
  const [products,setProducts] = useState([]);
  const [stock,setStock] = useState([]);
  const [loading,setLoading] = useState(true);


  useEffect(()=>{
      Promise.all([getProducts("0"),getStock()])
      .then(doc => {
        console.log(doc)
        setProducts(doc[0])
        setStock(doc[1])
        setLoading(false)
      })
      .catch(e => {
        console.log(e.message)
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
                          <StyledTableCell>Product Id</StyledTableCell>
                          <StyledTableCell align="left">Product Name</StyledTableCell>
                          <StyledTableCell align="left">Created At</StyledTableCell>
                          
                          <StyledTableCell align="left">Deactivate</StyledTableCell>
                          <StyledTableCell align="left">Delete</StyledTableCell>   
                      </TableRow>
                      </TableHead>
                      <TableBody>
                      {products ? products.map((product,index) => (
                          <StyledTableRow key={product.product_id}>
                          <StyledTableCell component="th" scope="row">
                              {product.product_id}
                          </StyledTableCell>
                          <StyledTableCell align="left">
                            <Link to={"products/details/"+product.product_id}>{product.product_name}</Link>
                          </StyledTableCell>
                         <StyledTableCell align="left">{product.createdAt}</StyledTableCell>
                          
                          <StyledTableCell align="left">
                            <Button color="warning">
                              Deactivate
                            </Button>
                          </StyledTableCell>
                          <StyledTableCell align="left">
                            <Button color="danger">
                              Delete
                            </Button>
                          </StyledTableCell>
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

export default Products;
