import React, {useState} from 'react';
import { Modal, ModalBody,ModalHeader,Col,Row,Input } from 'reactstrap';
import {getBlob} from '../../Utils/conversion'
const FileUpload = (props) => {

    const [files,setFiles] = useState(null)
    const [imageList,setImageList] = useState([])
    const getFiles = (files) => {
        var temp = []
        props.imageList([])
        console.log(files)
        for(let i = 0; i < files.length; i ++){
            getBlob(files[i])
            .then(doc => {
                
                 imageList.push({
                    data: doc,
                    name : "img"+files[i].name.replace(/\s/g,'_'),
                 })
                if(i === files.length - 1){
                    props.imageList(imageList)
                }
            })
            .catch(e => {
                console.log(e.message)
            })
            
            temp.push(
                <Col md="6">
                <img src={URL.createObjectURL(files[i])} width="100%" height="100%" className="myimg"/>
                </Col>
            )
        }
        return temp
    }

    return(
        <Modal {...props} size="lg">
            <ModalHeader>
                <h3>Upload Gallery Images</h3>
            </ModalHeader>
            <ModalBody>
                <Row>
                <Col xs="12" md="12">
                    <Input onChange={e => setFiles(e.target.files)} type="file" id="file-multiple-input" name="file-multiple-input" multiple accept="image/*"/>
                </Col>
                {
                    files ? getFiles(files) : null
                }
                </Row>
            
            </ModalBody>
        </Modal>
    );
}

export default FileUpload;