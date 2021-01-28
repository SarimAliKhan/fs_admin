import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table, Button } from 'reactstrap';
import {getAttributesDetails} from '../../Database/GetMethods'
import SubAttPopUp from './SubAttPopUp'
class SubAttributes extends Component {

  constructor(){
    super();
    this.state = {
      subAttributes : null,
      modelPopUp : false,
    }
  }
  togglePopup = () => this.setState({modelPopUp : !this.state.modelPopUp})
  componentWillMount(){
    getAttributesDetails()
    .then(doc => {
      console.log(doc)
      if(doc.length > 0){
        this.setState({
          subAttributes : doc
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
          <td>{res[i].attDetails}</td>
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
          <SubAttPopUp toggle={this.togglePopup} isOpen={this.state.modelPopUp} />

          <Row>
            <Col xl={12}>
              <Card>
                <CardHeader> 
                    Sub Attributes
                  <button onClick={() => this.togglePopup()} className="btn btn-light float-right"><i className="fa fa-plus mr-2"></i>Add Sub Attribute</button>
                </CardHeader>
                <CardBody>
                  <Table responsive hover>
                    <thead>
                      <tr>
                        <th scope="col">Index</th>
                        <th scope="col">Sub Attribute</th>
                        <th scope="col">Parent Attribute</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                    {
                      this.state.subAttributes ? this.Layout(this.state.subAttributes) : <h3>No List to show</h3>
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

export default SubAttributes;
