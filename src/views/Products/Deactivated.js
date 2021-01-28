import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import {getProducts} from '../../Database/GetMethods'
class DeactivateProducts extends Component {

  constructor(){
    super();
    this.state = {
      products : null
    }
  }
  
  componentWillMount(){
      getProducts("1")
      .then(doc => {
        if(doc.length > 0){
          this.setState({
            products : doc
          })
        }
      })
      .catch(e => {
        console.log(e.message)
      })
  }

  Layout = (res) => {
    var layout = []
    for(let i = 0; i < res.length; i ++){
      layout.push(
        <tr key={i}>
          <td>{i+1}</td>
          <td><Link to={"products/details/"+res[i].productId}>{res[i].pName}</Link></td>
          <td>{res[i].sku}</td>
          <td>{res[i].quantity}</td>
      <td>{res[i].costPrice}</td>
          <td>{res[i].createdAt}</td>
          <td><Button color="warning">Deactivated</Button></td>
          <td><Button color="danger">Remove</Button></td>
        </tr>
      )
    }
    return layout
  }

  render(){
    return (
        <div className="animated fadeIn">
          <Row>
            <Col xl={12}>
              <Card>
                <CardHeader> Products List <small className="text-muted"></small>
                  {/* <button className="btn btn-light float-right"><i className="fa fa-plus mr-2"></i>Add Company</button> */}
                </CardHeader>
                <CardBody>
                  <Table responsive hover>
                    <thead>
                      <tr>
                        <th scope="col">Index</th>
                        <th scope="col">Name</th>
                        <th scope="col">SKU</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">createdAt</th>
                        <th scope="col">Deactivate</th>
                        <th scope="col">Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                    {
                      this.state.products ? this.Layout(this.state.products) : <h3>No List to show</h3>
                    
                    }
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      )
  }
}

export default DeactivateProducts;
