import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import RequestPlasma from './PlasmaRequest'
import Donors from './Donors'
class Request extends Component {

  constructor(){
    super();
    this.state = {
        Donors: true,
      Request : false,
    }
  }

  componentWillMount(){
      
  }


  changeStateView = (view) => {
    if(view === "donors"){
      this.setState({
        Donors: true,
        Request : false,
      })
    }else if(view === "request"){
      this.setState({
        Donors: false,
        Request : true,
      })
    }
  }

  Rewardslayout = () => {
    return (
      <div>
        <label>Rewards</label>
      </div>
    )
  }

  render() {


    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg={12}>
            <Card>
              <CardHeader>
              <div>
                  <div>
                  
                    <h4 className="text-primary d-inline">
                    {
                      "All List"
                    }
                    </h4>
                    </div>
                 </div>
              </CardHeader>
              <CardBody>
                  <Table responsive striped hover>
                    <tbody>
                    {
                        /*this.state.User ? */
                          <div>
                            <ul class="nav nav-tabs">
                              <li class="nav-item">
                                <a class={this.state.Donors ? "nav-link active" : "nav-link"} onClick={(e) => this.changeStateView("donors")}>Donors</a>
                              </li>
                              <li class="nav-item">
                                <a class={this.state.Request ? "nav-link active" : "nav-link"} onClick={(e) => this.changeStateView("request")}>Request</a>
                              </li>
                            </ul>
                            {
                                this.state.Request ? <RequestPlasma/> : null
                            }
                            {
                                this.state.Donors ? <Donors/> : null
                            }
                            
                            
                            
                          </div>
                        /*: null*/ }
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

export default Request;
