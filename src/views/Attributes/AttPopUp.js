import React from 'react';
import { Modal,ModalBody,Label,ModalHeader,Row,Col,Button,ModalFooter,Input } from 'reactstrap';
import {postAttribute} from '../../Database/PostMethods'
const AttPopUp = (props) => {

    const postVal = () => {
        var val = document.getElementById('text-input').value
        if(val){
            const obj = {
                attributeName : val
            }
            postAttribute(obj)
            .then(doc => {
                if(doc.code === 1){
                    window.location.reload()
                }else{
                    alert(doc.message)
                }
            })
            .catch(e => {
                alert(e.message)
            })
        }else{
            alert("Field can not be empty")
        }
    }
    
    return(
        <Modal {...props} size="lg">
            <ModalHeader>
            <h4>ADD NEW ATTRIBUTE</h4>
            </ModalHeader>
            <ModalBody>
            <Row  className="mb-4">
               
               <Col md="4" xs="12">
                 <Label className="float-right" htmlFor="text-input"><bold>Name *</bold>(in Any language)</Label>
               </Col>
               <Col md="6" xs="12">
                 <Input type="text" id="text-input" name="text-input" placeholder="Name" required/>
               </Col>

               </Row>

               <Row>
               <Col md="4" xs="12">
                </Col>
              <Col md="6" xs="12">
               <Button onClick={e => postVal()} className="center" color="primary" className="mt-3 mb-3">Create Field</Button>
               </Col>
             </Row>
            </ModalBody>
            <ModalFooter>
            <Button onClick={e => props.toggle()}  color="primary" className="float-right">
                 Close
               </Button>
            </ModalFooter>
        </Modal>
    );
}

export default AttPopUp;