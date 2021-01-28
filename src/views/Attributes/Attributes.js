import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table, Button } from 'reactstrap';
import {getAttributes} from '../../Database/GetMethods'
import AttPopUp from './AttPopUp'
class Attributes extends Component {

  constructor(){
    super();
    this.state = {
      attributes : null,
      modelPopUp : false,
    }
  }

  togglePopup = () => this.setState({modelPopUp : !this.state.modelPopUp})
  
  componentWillMount(){
    getAttributes()
    .then(doc => {
      console.log(doc)
      if(doc.length > 0){
        this.setState({
          attributes : doc
        })
      }
    })
  }

  Layout = (res) => {
    var layout = []
    for(let i = 0; i < res.length; i ++){
      layout.push(
        <tr key={i}>
          
          <td>{i+1}</td>
          <td>{res[i].attributeName}</td>
          <td><Button color="danger">Delete</Button></td>
        </tr>
      )
    }
    return layout
  }

  render(){
    return (
        <div className="animated fadeIn">
          <AttPopUp  toggle={this.togglePopup} isOpen={this.state.modelPopUp} />

          <Row>
            <Col xl={8}>
              <Card>
                <CardHeader> 
                    Attributes
                  <button onClick={() => this.togglePopup()} className="btn btn-light float-right"><i className="fa fa-plus mr-2"></i>Add Attribute</button>
                </CardHeader>
                <CardBody>
                  <Table responsive hover>
                    <thead>
                      <tr>
                        <th scope="col">AttId</th>
                        <th scope="col">Attribute Name</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                    {
                      this.state.attributes ? this.Layout(this.state.attributes) : <h3>No List to show</h3>
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

export default Attributes;
