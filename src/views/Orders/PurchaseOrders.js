import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Table, Button, Card, CardBody, Badge } from 'reactstrap';
import {getPurchases} from '../../Database/GetMethods'
const PurchaseOrders = () => {
    const [purchase,setPurchase] = useState([])

    useEffect(() => {
        getPurchases()
        .then(doc => {
            setPurchase(doc)
        })
        .catch(e => {
            console.log(e.message)
        })
    },[])

    const renderLayout = (list) => {
        var table = []
        for(let i = 0; i < list.length; i ++){
            table.push(
                <tr>
                <td>{i+1}</td>
                <td>{list[i].purchaseId}</td>
                <td>{list[i].date}</td>
                <td>{list[i].totalBill}</td>
                <td><Link to={"/orders/purchase/" + list[i].purchaseId}><Button color="primary">View Details</Button></Link></td>
            </tr>
            )
            
        }
        return table
    }

    return(
        <Row>
            <Col xs="12">
                <Card>
                    <CardBody>
                        <Table responsive striped>
                            <thead>
                                <tr>
                                    <td>Index</td>
                                    <td>Purchase ID</td>
                                    <td>Posted Date</td>
                                    <td>Total</td>
                                    <td>Action</td>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    purchase.length > 0 ? renderLayout(purchase) : "Loading..."
                                }
                            </tbody>
                        </Table>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
}

export default PurchaseOrders;