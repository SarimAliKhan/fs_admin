import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Row, Table,Button } from 'reactstrap';
//import {getAdvertisement} from '../../Database/GetMethods'
//import {deleteAdvertisment} from '../../Database/DeleteMethods'

import {deleteArrivals} from '../../Database/PatchMethods';
import NewArrivalModel from './NewArrivalsModel';
import {getNewArrivals} from '../../Database/GetMethods';
import {postNewArrivals} from '../../Database/PostMethods';
class Advertisement extends Component {

  constructor(){
    super();
    this.state = {
      modal: false,
      updateModal: [],
      item : null
    }
    this.toggle = this.toggle.bind(this);
    this.updatModalToggle = this.updatModalToggle.bind(this);
  }
  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }
  updatModalToggle(index){
    let updateModal = this.state.updateModal.slice();
    updateModal[index] = !this.state.updateModal[index];
    this.setState({updateModal});
  }

  componentWillMount(){
    getNewArrivals()
    
    .then(doc => {
      console.log(doc)
        if(doc.length > 0){
            this.setState({
                item : doc
            })
        }
    })
    .catch(e => {
        alert(e.message)
    })
  }

 
  deleteNewArrivals = (id) => {
    const obj = {}
    deleteArrivals(id , obj)
    .then(doc => {
      
      
        window.location.reload()
      
    })
    .catch(e => {
      alert(e.message)
    })
  }
  
  strLimit = (str) => {
    var res = str.substring(0,20);
    res += '...'
    return res
  }


  //
  layout = (list) => {
      var table = []
      for(let i = 0; i < list.length; i++){
        table.push(
            <tr key={i}>
                <td>{i+1}</td>
                <td>{list[i].new_arrivals_id}</td>
                <td>{list[i].description}</td>
                <td>{list[i].name}</td>
                <td><img style={{height: '80px',width:'80px'}} src={list[i].image} alt="Advertisment" /></td>
                <td><Button className="primary" onClick={e => this.updatModalToggle(i)}>Edit</Button></td>
                <td><Button className="warning" onClick={e => this.deleteNewArrivals(list[i].new_arrivals_id)}>Delete</Button></td>
                <NewArrivalModel item={list[i]} tag="update" isOpen={this.state.updateModal[i]} toggle={e => this.updatModalToggle(i)}/>
            </tr>
        )
      }
      return table
  }

  render() {

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={12}>
          <NewArrivalModel tag="upload" isOpen={this.state.modal} toggle={this.toggle}/>
            <Card>
              <CardHeader>
                New Arrivals
                <button onClick={e => this.toggle()} className="btn btn-light float-right"><i className="fa fa-plus mr-2"></i>New Arrivals</button>
              </CardHeader>
              <CardBody>
              
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">Index</th>
                      <th scope="col">ID</th>
                      <th scope="col">title</th>
                      <th scope="col">Description</th>
                      <th scope="col">Image</th>
                      <th scope="col">Update</th>
                      <th scope="col">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.state.item ? this.layout(this.state.item) : "No List"
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

export default Advertisement;
