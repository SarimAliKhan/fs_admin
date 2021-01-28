import React,{useState,useEffect} from 'react';

import {
     Grid, Paper,Typography,
     Card,CardActionArea,CardActions,CardHeader,Table,TableCell,Link,
     CardContent,CardMedia ,Button,makeStyles, TableHead, TableRow, TableBody, Select
} from "@material-ui/core"
import {getSaleDetails} from '../../Database/GetMethods'

const useStyles = makeStyles((theme)=>({
    root: {
      width:'100%',
      marginTop:'10px'
    },
    media: {
      height: 50,
    },
    paddingFromLeft:{
        [theme.breakpoints.up('md')]:{
            paddingLeft:'5px'
        }
    },
    CardContent:{
        [theme.breakpoints.down('md')]:{
            padding:'50px'
        }
    }
    
  }));




const SaleDetails = (props) => { 
    const classes = useStyles();
    const [sale,setSale] = useState(null)
    const [incomingDetail,setIncomingDetail] = useState(null)
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        console.log(props.location.state)
        getSaleDetails(props.match.params.id)
        .then(doc => {
            console.log(doc)
            setSale(doc)
            setIncomingDetail(props.location.state)
            setLoading(false)
        })
        .catch(e => {
            console.log(e.message)
        })


    },[])


    return(
        <>
            {
                loading ?
                <div className="container">
                    <p className="text-center">
                      Loading...  
                    </p>
                </div>
                :
            <div>
            <Grid container>
                <Grid item md={8} sm={12} xs={12} style={{marginBottom:'5px'}}>
                    <Paper style={{padding:'10px'}}>
                    <Typography variant="h6">
                        Order Number: { sale ? sale[0].track_number !== null ? sale[0].track_number : "Pending" :"pending" }
                    </Typography>
                    <Grid container style={{marginTop:'10px'}}>
                        <Grid item md={3} xs={12} sm={12}>
                            <Typography variant="h6">General</Typography>
                            <Grid container direction="column">
                                <Grid item md={6}>
                                    <Typography style={{color:'grey'}} >
                                        Date : 
                                    </Typography>
                                    <span style={{margin:'10px 0px'}}>
                                        {incomingDetail? incomingDetail.date:null}
                                    </span>
                                    <Typography style={{color:'grey'}} >
                                        Status: 
                                    </Typography>
                                    <span style={{margin:'10px 0px'}}>
                                        {incomingDetail ? incomingDetail.status:null}
                                    </span>
                                    <Typography style={{color:'grey'}} >
                                        Name: 
                                    </Typography>
                                    <span>
                                        {incomingDetail ? incomingDetail.fullName:null} 
                                    </span>
                                    <Typography style={{color:'grey'}}>
                                        Phone: 
                                    </Typography>
                                    <span style={{margin:'10px 0px'}}>
                                        { sale ? sale[0].firstNum :null}    
                                    </span>
                                    
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={6} xs={12} sm={12}>
                            <Typography variant="h6">Shipping</Typography>
                            <Grid container direction="column">
                                <Grid item md={4}>
                                    
                                    <Typography style={{color:'grey'}}>
                                        Address:
                                    </Typography> 
                                    <span style={{margin:'10px 0px'}}>  
                                        { sale ? sale[0].address :null  }
                                    </span>

                                </Grid>   
                                <Grid item md={4}>
                                    
                                    <Typography style={{color:'grey'}}>
                                        Email:
                                    </Typography>  
                                    <span style={{margin:'10px 0px'}}>
                                        { incomingDetail ? incomingDetail.email :null }
                                    </span>
                                </Grid>   
                                   
                            </Grid>
                        </Grid>
                        <Grid item md={2} xs={12}  sm={12}>
                            <Typography variant='h6'>Billing</Typography>
                            <Grid container direction="column">
                                <Grid item md={4}>
                                    <Typography style={{color:'grey'}} >
                                        Product: 
                                    </Typography>
                                    <span style={{margin:'10px 0px'}}>
                                        { sale ? sale[0].pName :null}
                                    </span>
                                    <Typography style={{color:'grey'}}>
                                        Price:  
                                    </Typography>
                                    <span style={{margin:'10px 0px'}}>
                                        { sale ? sale[0].price :null}
                                </span>
                                </Grid>
                                <Grid item md={4}>        
                                    <Typography style={{color:'grey'}}>
                                        Quantity:
                                    </Typography>
                                    <span style={{margin:'10px 0px'}}>
                                        { sale ? sale[0].quantity :null}
                                    </span>
                                </Grid>
                                <Grid item md={4}>                   
                                    <Typography style={{color:'grey'}}>
                                        Total: 
                                    </Typography>
                                    <span style={{margin:'10px 0px'}}>
                                        { sale ? sale[0].totalBill :null}
                                    </span>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
            </Paper>
            </Grid>
            <Grid item md={4} sm={12} xs={12} className={classes.paddingFromLeft}>
                    <Card style={{height:'275px'}}>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        <Typography>Order Actions</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography>^</Typography>
                                    </TableCell>       
                                </TableRow>
                            </TableBody>
                        </Table>
                            <CardContent  style={{marginTop:'5px'}}>
                                <Grid container>
                                    <Grid item md={12} xs={12} sm={12}>        
                                        <Select fullWidth variant="outlined">
                                            <option value="ABC">ABC</option>
                                            <option value="DEF">DEF</option>
                                            <option value="GHI">GHI</option>
                                        </Select>
                                    </Grid>
                                    <Grid item md={2} xs={2} sm={2}>
                                        <Button color="primary" variant="contained" style={{margin:'5px',height:'50px'}}>
                                            Go
                                        </Button>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        <CardActions style={{marginTop:'10px'}}>
                            <Link href="#" >Move To Trash</Link>
                            <Button color='primary' variant="contained">
                                Update
                            </Button>
                        </CardActions>
                    </Card>
            </Grid>
            </Grid>
            <Card className={classes.root}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography>Item</Typography> 
                            </TableCell>
                            <TableCell>
                                <Typography>Cost</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography>Qty</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography>Total</Typography>
                            </TableCell>                         
                        </TableRow>
                    </TableHead>
                <TableBody>
                        {
                            sale ?
                            sale.map(sale=>(
                            <TableRow>
                            <TableCell>
                                <div style={{display:'flex'}}>
                                    <div style={{height:'150px',width:'100px'}}>
                                        <img src={sale.primaryImage } alt="Image" style={{height:'120px',width:'90px'}}/>
                                    </div>
                                    <CardContent>
                                    <Typography variant="body1">
                                        {sale.pName}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {sale.combination_string }
                                    </Typography>
                                    </CardContent>
                                </div>
                            </TableCell>
                            <TableCell>
                                { sale.cost_price }
                            </TableCell>
                            <TableCell>
                                {sale.quantity  }
                            </TableCell>
                            <TableCell>
                                {sale.cost_price * sale.quantity }

                            </TableCell>
                            </TableRow>
                            ))
                            :null

                        }
                        
                </TableBody>
                </Table>
                
                <CardActions style={{display:'flex',justifyContent:'flex-end',marginRight:'20px'}}>
                    <Grid item>
                        <b>Shipping</b>
                    </Grid>
                    <Grid item className="mr-5">
                        <b>Total: </b> {sale ? sale[0].totalBill : null }
                    </Grid>   
                </CardActions>
            </Card>
            </div>
            }
        </>
    );
}

export default SaleDetails;