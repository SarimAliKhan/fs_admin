// import React, { Component } from 'react';
// import { Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, Input, Label, Button } from 'reactstrap';
// import Avatar from '../../Images/Male-Avatar.jpg'
// import AvatarEditor from 'react-avatar-editor'
// import ImageUploader from 'react-images-upload';
// // import {postBlogs} from '../../../Database/PostMethods'
// class UploadBlog extends Component{

//     constructor(){
//         super()
//         this.state = {
//             userPic : [],
//             loading: false,
//         }
//         this.fileChangedHandler = this.fileChangedHandler.bind(this);
//     }

//     fileChangedHandler(event) {
//     //    console.log("Evenet",event)
//         if(event.length > 0){
//         this.setState({
//             userPic: event,
//         })
//         }
//     }
//     handleupload(){
//         var name = document.getElementById('blogTitle').value
//         var description = document.getElementById('blogDescription').value
//         if(name && description){
//         var canvasScaled = null
//      //   var canvas = null
//         if(this.state.userPic[this.state.userPic.length - 1] !== this.props.userPic){
//         if(this.state.userPic[this.state.userPic.length - 1] !== Avatar){
//         if (this.editor) {
        
//         canvasScaled = this.editor.getImageScaledToCanvas()
//         canvasScaled = this.editor.getImageScaledToCanvas().toDataURL()
//         this.setState({loading: true});
//         const obj = {
//             blogTitle : name,
//             blogDescription : description,
//             blogPicture : canvasScaled,
//         }
//         postBlogs(obj)
//         .then(doc => {
//         //    console.log(doc)
//             if(doc.code === 1){
//                 window.location.reload()
//             }else{
//                 alert(doc.message)
//             }
//         })
//         .catch(err => {
//             alert(err.message)
//         })

//         }
//         }else{
//             alert("Fields can not be empty")
//         }
//     }else{
//         alert("Please Upload any Image")
//     }
//     }else{
//         this.props.toggle()
//     }
//     }

//     setEditorRef = (editor) => this.editor = editor
//     render(){
//         return(
//             <div>
//                 <Modal size="lg" {...this.props}>
//                     <ModalHeader>
//                         Add HR
//                     </ModalHeader>
//                     <ModalBody>
//                         <Row>
//                             <Col className="text-center" md={12}>
//                             <AvatarEditor
//                                 ref={this.setEditorRef}
//                                  image={this.state.userPic.length > 0 ? this.state.userPic[this.state.userPic.length - 1] : Avatar }
//                                // image = {this.state.UserPic[this.state.UserPic.length - 1]}
//                                 width={300}
//                                 height={200}
//                                 border={30}
//                                 color={[255, 255, 255, 0.6]} // RGBA
//                                 scale={1.0}
//                                 rotate={0}/>
//                                 <ImageUploader
//                                     withIcon={true}
//                                     buttonText='Choose blog image'
//                                     buttonClassName="choose-image-btn"
//                                     onChange={this.fileChangedHandler}
//                                     imgExtension={['.png']}
//                                     maxFileSize={5242880}
//                                     singleImage
//                                 />
//                             </Col>
//                             </Row>
//                             <Row>
//                             <Col md={8}>
//                                 <Label>Blog Title</Label>
//                                 <Input id="blogTitle" type="text" placeholder="write here..."/>
//                                 <Label>Blog Description</Label>

//                                 <Input rows="12" type="textarea" id="blogDescription" placeholder="write here..."/>
//                             </Col>
//                             </Row>
                        
//                         <Row>
//                             <Col md={4}>
                                
//                             </Col>
//                             <Col md={8}>
                                
//                             </Col>
//                         </Row>
//                         {/* <Row>
//                             <Col md={12}>
//                                 <Label>Blog Title</Label>
//                                 <Input id="name" type="text" />
//                             </Col>
                            
//                         </Row>

//                         <Row className="mt-3">
//                             <Col md={12}>
//                                 <Label>Blog Description</Label>
//                                 <Input id="description" type="textarea"></Input>
//                             </Col>
//                         </Row>

//                         <Row>
//                         <Col md={12} className="text-center">
//                             <AvatarEditor
//                                 ref={this.setEditorRef}
//                                  image={this.state.userPic.length > 0 ? this.state.userPic[this.state.userPic.length - 1] : Avatar }
//                                // image = {this.state.UserPic[this.state.UserPic.length - 1]}
//                                 width={200}
//                                 height={200}
//                                 border={30}
//                                 color={[255, 255, 255, 0.6]} // RGBA
//                                 scale={1.2}
//                                 rotate={0}/>
//                             </Col>
//                         </Row>

//                         <Row>
//                             <Col md={12}>
//                                 <ImageUploader
//                                     withIcon={true}
//                                     buttonText='Choose image'
//                                     buttonClassName="choose-image-btn"
//                                     onChange={this.fileChangedHandler}
//                                     imgExtension={['.jpg', '.gif', '.png', '.gif']}
//                                     maxFileSize={5242880}
//                                     singleImage
//                                 />
//                             </Col>
//                         </Row> */}
                        
//                     </ModalBody>

//                     <ModalFooter>
//                         <Button onClick={e => this.handleupload()}>Add</Button>
//                     </ModalFooter>
//                 </Modal>
//             </div>
//         )
//     }
// }
// export default UploadBlog;