import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table, Button } from 'reactstrap';
import {getCategory} from '../../Database/GetMethods'
import CategoryPopUp from './CategoryPopUp'
class Category extends Component {

  constructor(){
    super();
    this.state = {
      category : null,
      modelPopUp : false,
    }
  }

  togglePopup = () => this.setState({modelPopUp : !this.state.modelPopUp})
  
  componentWillMount(){
    getCategory()
    .then(doc => {
      console.log(doc)
      if(doc.length > 0){
        this.setState({
          category : doc
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
          <td>{res[i].catName}</td>
          <td><Button color="danger">Delete</Button></td>
        </tr>
      )
    }
    return layout
  }

  render(){
    return (
        <div className="animated fadeIn">
          <CategoryPopUp  toggle={this.togglePopup} isOpen={this.state.modelPopUp} />

          <Row>
            <Col xl={8}>
              <Card>
                <CardHeader> 
                    Categories
                  <button onClick={() => this.togglePopup()} className="btn btn-light float-right"><i className="fa fa-plus mr-2"></i>Add Category</button>
                </CardHeader>
                <CardBody>
                  <Table responsive hover>
                    <thead>
                      <tr>
                        <th scope="col">Index</th>
                        <th scope="col">Category Name</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                    {
                      this.state.category ? this.Layout(this.state.category) : <h3>No List to show</h3>
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

export default Category;
