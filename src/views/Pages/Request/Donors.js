import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table,Alert } from 'reactstrap';
const firebase = require('firebase')
class Plasma extends Component {

  constructor(){
    super();
    this.state = {
      Plasma : null
    }
  }
  
  componentWillMount(){
      this.getPlasmaRequest()
  }

  getPlasmaRequest(){
    //get all plasma request here.
    firebase
    .firestore()
    .collection('Donors')
    .get()
    .then(snap => {
      var tempArray = []
      snap.forEach(function(doc){
          tempArray.push(doc.data())
      })
     console.log(tempArray)
      this.setState({
        Plasma : tempArray
      })
    })
    .catch(err => {
      alert(err.message)
    })
  }

  Layout = (res) => {
    var layout = []
    for(let i = 0; i < res.length; i ++){
      layout.push(
        <tr key={i}>
          <td>{res[i].donorName}</td>
          <td>{res[i].userId}</td>
          <td>{res[i].donorAge}</td>
          <td>{res[i].contactNumber}</td>
          <td>{res[i].city}</td>
          <td>{res[i].bloodGroup}</td>
          <td>{res[i].occupationDonor}</td>
          <td>{new Date(res[i].dischargeDate.seconds * 1000)+""}</td>
          <td>{new Date(res[i].datePosted.seconds * 1000)+""}</td>
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
                <CardHeader>
                  <i className="fa fa-align-justify"></i> Donors List <small className="text-muted"></small>
                  {/* <button className="btn btn-light float-right"><i className="fa fa-plus mr-2"></i>Add Company</button> */}
                </CardHeader>
                <CardBody>
                  <Table responsive hover>
                    <thead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Age</th>
                        <th scope="col">Number</th>
                        <th scope="col">city</th>
                        <th scope="col">Blood Group</th>
                        <th scope="col">occupation</th>
                        <th scope="col">Discharge Date</th>
                        <th scope="col">Posted Date</th>
                      </tr>
                    </thead>
                    <tbody>
                    {
                      this.state.Plasma ? this.Layout(this.state.Plasma) : <Alert color="danger">No List to show.</Alert>
                    
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

export default Plasma;
