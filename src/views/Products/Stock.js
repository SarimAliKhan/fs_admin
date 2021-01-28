import React, { useEffect, useState } from 'react';

import {getStock} from '../../Database/GetMethods'
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

const Stock = ()=>{
    const classes = useStyles()
    const [stock,setStock] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        getStock()
        .then(res=>{
            console.log(res)
            setStock(res)
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
                            <StyledTableCell>Product Variation Id</StyledTableCell>
                            <StyledTableCell align="left">Product Name</StyledTableCell>
                            <StyledTableCell align="left">Product Variations</StyledTableCell>
                            <StyledTableCell align="left">Stock</StyledTableCell>
                            
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {stock ? stock.map((stock) => (
                            <StyledTableRow key={stock.product_variation_id}>
                            <StyledTableCell component="th" scope="row">
                                {stock.product_variation_id}
                            </StyledTableCell>
                            <StyledTableCell align="left">{stock.product_name}</StyledTableCell>
                            <StyledTableCell align="left">{stock.combination_string}</StyledTableCell>
                            {
                                stock.stock < 50 ? 
                                <StyledTableCell align="left">
                                    <Typography color="secondary">
                                        {stock.stock}
                                    </Typography>
                                </StyledTableCell>
                                :
                                <StyledTableCell  align="left">{stock.stock}</StyledTableCell>
        
                            }
                            </StyledTableRow>
                        ))
                        :null}
                        
                        </TableBody>
                    </Table>
                </TableContainer>
            }
        </div>
    )
}

export default Stock;