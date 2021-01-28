import React, { Component } from 'react';
import {Modal, ModalBody, ModalFooter, ModalHeader, Button, Row, Col, Input,Label} from 'reactstrap'
// import AvatarEditor from 'react-avatar-editor'
import ImageUploader from 'react-images-upload';
import {uploadArrivals} from '../../Database/PatchMethods';

import {postNewArrivals} from '../../Database/PostMethods';

// import {postAdvertisement} from '../../Database/PostMethods'
// import {updateAdvertisement} from '../../Database/PatchMethods'
class ModalAdvertisement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            picture : [],
            pic : null,
            editPic : null,
            picName : null,
            loading: false,
        }
        this.fileChangedHandler = this.fileChangedHandler.bind(this);
    }
    componentWillMount(){
        if(this.props.item){
            this.setState({
                pic : this.props.item.adPic,
                editPic : this.props.item.adPic,
            })
        }
    }
    fileChangedHandler(e) {
        console.log(URL.createObjectURL(e[e.length - 1]))
        // fetch(URL.createObjectURL(e[e.length - 1]))
        // .then(res => res.blob())
        // .then(blob => {
        //     console.log(blob)
        // })
        this.setState({
            pic: URL.createObjectURL(e[e.length - 1]),
            picName : e[0].name
        })
    }

    uploadUpdate = () => {
        var title = document.getElementById('title').value
        var description = document.getElementById('description').value
        if(this.props.tag === "upload"){
            if(this.state.pic && title && description){
                postNewArrivals(
                    {
                        name: title,
                        description : description,
                        image : "sbcuiwgc",
                        image_name : "text",
                        isRemoved: false
                    }
                    )
                    .then(doc => {
                        console.log(doc)
                    }) .catch(e => {
                        alert(e.message)
                    })
                    
                    
                         
                    
            }else{
                alert("Please fill all the details")
            }
            //upload
            
            
        }else{
            //update
            
            if(this.state.editPic){
                console.log("update")
                if(this.state.editPic !== this.state.pic){
                    if(this.state.pic && title && description){
                        const obj = {
                            name: title,
                            description: description,
                            image: "" ,
                            image_name: "",
                            isRemoved: false
                            
                        } 

                            uploadArrivals(this.props.id.new_arrivals_id , obj)
                            .then(doc => {
                              
                              
                                window.location.reload()
                              
                            })
                            .catch(e => {
                              alert(e.message)
                            })
                          
                        
                    }else{
                        alert("Please fill all the fields")
                    }
                }else{
                    if(title && description){
                      
                    }else{
                        alert("Please fill all the fields")
                    }
                    
                }
            }
            
        }
    }

    render(){
        const {pic} = this.state
       // console.log(this.props.item)
        return(
            <Modal size="md" {...this.props}>
                <ModalHeader toggle={this.toggle}>
                    {
                        this.props.tag === "upload" ? "Input Details" : "Update Details"
                    }
                </ModalHeader>
                <ModalBody>
                    <Row>
                        <Col md={12}>
                        <Label>Title</Label>
                        <Input id="title" type="text" placeholder={"write here..."} defaultValue={this.props.item ? this.props.item.title : null} />
                        </Col>
                        
                    </Row>
                    <Row>
                        <Col md={12}>
                        <Label>Description</Label>
                        <Input id="description" name="textarea-input" type="textarea" placeholder={"write here..."} row="9" defaultValue={this.props.item ? this.props.item.description : null}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Label>Image</Label>
                            <img src={pic ? pic : null} alt="img" width="100%" height="80%"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <ImageUploader
                                withIcon={true}
                                buttonText='Choose image'
                                buttonClassName="choose-image-btn"
                                onChange={this.fileChangedHandler}
                                imgExtension={['.jpg', '.png']}
                                maxFileSize={5242880}
                                singleImage
                            />
                        </Col>
                        {/* <input type="file" onChange={e => this.fileChangedHandler(e)} accept="image/*" name="image" id="file"></input> */}
                    </Row>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={e => this.uploadUpdate()}>{
                        this.props.tag === "upload" ? "Upload" : "Edit"
                    }</Button>{' '}
                    <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        )
    }
}
export default ModalAdvertisement;