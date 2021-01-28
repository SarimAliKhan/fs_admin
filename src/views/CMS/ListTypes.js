import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import ListTypeModal from './ListTypeModal';


class ListTypes extends Component{
    constructor(props){
        super(props);
        this.state = {
            listTypeModal: [],
        }
        this.listTypeModalToggle = this.listTypeModalToggle.bind(this);
    }

    listTypeModalToggle = (index) => {
        let listTypeModal = this.state.listTypeModal.slice();
        listTypeModal[index] = !this.state.listTypeModal[index];
        this.setState({
            listTypeModal
        })
    }

    render(){
        return(
            <div className="container">
                {
                    <div>
                        <ListTypeModal isOpen={this.state.listTypeModal[0]} toggle={e => this.listTypeModalToggle(0)} ListType="Degree"  />
                        <ListTypeModal isOpen={this.state.listTypeModal[1]} toggle={e => this.listTypeModalToggle(1)} ListType="Location" />
                        <ListTypeModal isOpen={this.state.listTypeModal[2]} toggle={e => this.listTypeModalToggle(2)} ListType="Job Category" />
                        <ListTypeModal isOpen={this.state.listTypeModal[3]} toggle={e => this.listTypeModalToggle(3)} ListType="Job Type" />
                        <ListTypeModal isOpen={this.state.listTypeModal[4]} toggle={e => this.listTypeModalToggle(4)} ListType="Job Contract" />
                        <ListTypeModal isOpen={this.state.listTypeModal[5]} toggle={e => this.listTypeModalToggle(5)} ListType="Field of Study" />
                        <ListTypeModal isOpen={this.state.listTypeModal[6]} toggle={e => this.listTypeModalToggle(6)} ListType="Skill" />
                    </div>
                }
                <Row className="mt-4">
                    <Col md={12} className="text-center">
                        <h5>Add Lists</h5>
                    </Col>
                </Row>

                <Row className="mt-3">
                    <Col md={2} className="my-1">
                        <Button block onClick={(e) => this.listTypeModalToggle(0)}>Degrees</Button>
                    </Col>

                    <Col md={2} className="my-1">
                        <Button block onClick={(e) => this.listTypeModalToggle(1)}>Location</Button>
                    </Col>

                    <Col md={2} className="my-1">
                        <Button block onClick={() => this.listTypeModalToggle(2)}>Job Category</Button>
                    </Col>

                    <Col md={2} className="my-1">
                        <Button block onClick={() => this.listTypeModalToggle(3)}>Job Type</Button>
                    </Col>

                    <Col md={2} className="my-1">
                        <Button block onClick={() => this.listTypeModalToggle(4)}>Job Contract</Button>
                    </Col>

                    <Col md={2} className="my-1">
                        <Button block onClick={() => this.listTypeModalToggle(5)}>Field of Study</Button>
                    </Col>

                    <Col md={2} className="my-1">
                        <Button block onClick={() => this.listTypeModalToggle(6)}>Skill</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default ListTypes;