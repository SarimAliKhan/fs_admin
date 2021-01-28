import React,{useState,useEffect} from 'react';
import { Modal,ModalBody,Label,ModalHeader,Row,Col,Button,ModalFooter,Input } from 'reactstrap';
import {postSubAttribute} from '../../Database/PostMethods'
import {getAttributes} from '../../Database/GetMethods'
const SubAttPopUp = (props) => {

    const [att,setAtt] = useState(null)

    useEffect(() => {
        getAttributes()
        .then(doc => {
            setAtt(doc)
        })
    },[])

    const postVal = () => {
        var val = document.getElementById('text-input').value
        var valAtt = document.getElementById('att').value
        if(valAtt === "-1"){
            alert("Please select a Attribute")
            return;
        }
        if(val){
            const obj = {
                attId : valAtt,
                attDetails : val
            }
            postSubAttribute(obj)
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
    const renderLayout = (res) =>{
        var tab = []
        for(let i = 0; i < res.length; i ++){
            tab.push(
                <option key={i} value={res[i].attId}>{res[i].attributeName}</option>
            )
        }
        
        return tab  
      }
    
    return(
        <Modal {...props} size="lg">
            <ModalHeader>
            <h4>ADD NEW SUB ATTRIBUTE</h4>
            </ModalHeader>
            <ModalBody>
            <Row  className="mb-4">
               
               <Col md="4" xs="12">
                   <Input type="select" id="att">
                   <option value={-1}>Please select</option>
                    {
                        att ? renderLayout(att) : null
                    }
                   </Input>
                   
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

export default SubAttPopUp;