// import React, { Component } from 'react';
// import { Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Input, Button } from 'reactstrap';
// // import { getDegree, getLocations, getCategory, getEmpType, getContract, getStudy, getSkills } from '../../Database/GetMethods';
// // import { deleteDegree, deleteListTypeData, deleteStudy, deleteSkills } from '../../Database/DeleteMethods';
// // import { postDegree, postLocations, postCategory, postEmpType, postContract, postStudy, postSkills } from '../../Database/PostMethods';

// class ListTypeModal extends Component{

//     constructor(props){
//         super(props);
//         this.state = {
//             options: 0,
//             DegreesList: null,
//             LocationsList: null,
//             JobCategoriesList: null,
//             JobTypesList: null,
//             JobContractsList: null,
//             FieldOfStudyList: null,
//             SkillsList: null,
//         }
//     }

//     componentWillMount(){
//         // switch (this.props.ListType) {
//         //     case "Degree":
//         //         getDegree().then(doc => {
//         //             this.setState({
//         //                 options: doc,
//         //             })
//         //         })
//         //         .catch(err => {
//         //             alert("Error: " + err.message);
//         //         })
//         //         break;

//         //     case "Location":
//         //         getLocations().then(doc => {
//         //             this.setState({
//         //                 options: doc,
//         //             })
//         //         })
//         //         .catch(err => {
//         //             alert("Error: " + err.message);
//         //         })
//         //         break;

//         //     case "Job Category":
//         //         getCategory().then(doc => {
//         //             this.setState({
//         //                 options: doc,
//         //             })
//         //         })
//         //         .catch(err => {
//         //             alert("Error: " + err.message);
//         //         })
//         //         break;

//         //     case "Job Type":
//         //         getEmpType().then(doc => {
//         //             this.setState({
//         //                 options: doc,
//         //             })
//         //         })
//         //         .catch(err => {
//         //             alert("Error: " + err.message);
//         //         })
//         //         break;

//         //     case "Job Contract":
//         //         getContract().then(doc => {
//         //             this.setState({
//         //                 options: doc,
//         //             })
//         //         })
//         //         .catch(err => {
//         //             alert("Error: " + err.message);
//         //         })
//         //         break;

//         //     case "Field of Study":
//         //         getStudy().then(doc => {
//         //             this.setState({
//         //                 options: doc,
//         //             })
//         //         })
//         //         .catch(err => {
//         //             alert("Error: " + err.message);
//         //         })
//         //         break;

//         //     case "Skill":
//         //         getSkills().then(doc => {
//         //             this.setState({
//         //                 options: doc,
//         //             })
//         //         })
//         //         .catch(err => {
//         //             alert("Error: " + err.message);
//         //         })
//         //         break;
        
//         //     default:
//         //         break;
//         // }
               
//     }

//     DrawDropDown(){
//         var table = [];

//         for(let i = 0; i < this.state.options.length; i++){
//             if(this.props.ListType === "Degree"){
//                 table.push(
//                     <option value={this.state.options[i].degreeId}>{this.state.options[i].degreeName}</option>
//                 )
//             }
//             else if(this.props.ListType === "Location"){
//                 table.push(
//                     <option value={this.state.options[i].List_ID}>{this.state.options[i].Description}</option>
//                 )
//             }
//             else if(this.props.ListType === "Job Category"){
//                 table.push(
//                     <option value={this.state.options[i].List_ID}>{this.state.options[i].Description}</option>
//                 )
//             }
//             else if(this.props.ListType === "Job Type"){
//                 table.push(
//                     <option value={this.state.options[i].List_ID}>{this.state.options[i].Description}</option>
//                 )
//             }
//             else if(this.props.ListType === "Job Contract"){
//                 table.push(
//                     <option value={this.state.options[i].List_ID}>{this.state.options[i].Description}</option>
//                 )
//             }
//             else if(this.props.ListType === "Field of Study"){
//                 table.push(
//                     <option value={this.state.options[i].studyId}>{this.state.options[i].studyName}</option>
//                 )
//             }
//             else if(this.props.ListType === "Skill"){
//                 table.push(
//                     <option value={this.state.options[i].skillId}>{this.state.options[i].skillName}</option>
//                 )
//             }
//         }
//         return table;
//     }

//     DeleteOption(){
//         switch (this.props.ListType) {
//             case "Degree":
//                 deleteDegree(document.getElementById("optionsList").value).then(doc => {
//                     getDegree().then(doc => {
//                         this.setState({
//                             options: doc,
//                         })
//                     })
//                     .catch(err => {
//                         alert("Error: " + err.message);
//                     })
//                 })
//                 .catch(err => {
//                     alert("Error: " + err.message);
//                 })
//                 break;

//             case "Location":
//                 deleteListTypeData(document.getElementById("optionsList").value).then(doc => {
//                     getLocations().then(doc => {
//                         this.setState({
//                             options: doc
//                         })
//                     })
//                     .catch(err => {
//                         alert("Error: " + err.message);
//                     })
//                 })
//                 .catch(err => {
//                     alert("Error: " + err.message);
//                 })
//                 break;

//             case "Job Category":
//                 deleteListTypeData(document.getElementById("optionsList").value).then(doc => {
//                     getCategory().then(doc => {
//                         this.setState({
//                             options: doc
//                         })
//                     })
//                     .catch(err => {
//                         alert("Error: " + err.message);
//                     })
//                 })
//                 .catch(err => {
//                     alert("Error: " + err.message);
//                 })
//                 break;

//                 case "Job Type":
//                     deleteListTypeData(document.getElementById("optionsList").value).then(doc => {
//                         getEmpType().then(doc => {
//                             this.setState({
//                                 options: doc
//                             })
//                         })
//                         .catch(err => {
//                             alert("Error: " + err.message);
//                         })
//                     })
//                     .catch(err => {
//                         alert("Error: " + err.message);
//                     })
//                     break;

//                 case "Job Contract":
//                     deleteListTypeData(document.getElementById("optionsList").value).then(doc => {
//                         getContract().then(doc => {
//                             this.setState({
//                                 options: doc
//                             })
//                         })
//                         .catch(err => {
//                             alert("Error: " + err.message);
//                         })
//                     })
//                     .catch(err => {
//                         alert("Error: " + err.message);
//                     })
//                     break;

//                 case "Field of Study":
//                     deleteStudy(document.getElementById("optionsList").value).then(doc => {
//                         getStudy().then(doc => {
//                             this.setState({
//                                 options: doc
//                             })
//                         })
//                         .catch(err => {
//                             alert("Error: " + err.message);
//                         })
//                     })
//                     .catch(err => {
//                         alert("Error: " + err.message);
//                     })
//                     break;

//                 case "Skill":
//                     deleteSkills(document.getElementById("optionsList").value).then(doc => {
//                         getSkills().then(doc => {
//                             this.setState({
//                                 options: doc
//                             })
//                         })
//                         .catch(err => {
//                             alert("Error: " + err.message);
//                         })
//                     })
//                     .catch(err => {
//                         alert("Error: " + err.message);
//                     })
//                     break;
        
//             default:
//                 break;
//         }
        
//     }


//     PostOption = (ListTypeName) => {
//         var obj;
//         switch (this.props.ListType) {
//             case "Degree":
//                 obj = {
//                     degreeName: ListTypeName
//                 }
//                 postDegree(obj).then(doc => {
//                     getDegree().then(doc => {
//                         this.setState({
//                             options: doc,
//                         })
//                         document.getElementById("ListTypeName").value = "";
//                     })
//                     .catch(err => {
//                         alert("Error: " + err.message);
//                     })
//                 })
//                 .catch(err => {
//                     alert("Error: " + err.message);
//                 })
//                 break;

//             case "Location":
//                 obj = {
//                     ListTypeID: 2,
//                     Description: ListTypeName
//                 }
//                 postLocations(obj).then(doc => {
//                     getLocations().then(doc => {
//                         this.setState({
//                             options: doc,
//                         })
//                         document.getElementById("ListTypeName").value = "";
//                     })
//                     .catch(err => {
//                         alert("Error: " + err.message);
//                     })
//                 })
//                 .catch(err => {
//                     alert("Error: " + err.message);
//                 })
//                 break;
            
//             case "Job Category":
//                 obj = {
//                     ListTypeID: 3,
//                     Description: ListTypeName
//                 }
//                 postCategory(obj).then(doc => {
//                     getCategory().then(doc => {
//                         this.setState({
//                             options: doc,
//                         })
//                         document.getElementById("ListTypeName").value = "";
//                     })
//                     .catch(err => {
//                         alert("Error: " + err.message);
//                     })
//                 })
//                 .catch(err => {
//                     alert("Error: " + err.message);
//                 })
//                 break;

//             case "Job Type":
//                 obj = {
//                     ListTypeID: 1,
//                     Description: ListTypeName
//                 }
//                 postEmpType(obj).then(doc => {
//                     getEmpType().then(doc => {
//                         this.setState({
//                             options: doc,
//                         })
//                         document.getElementById("ListTypeName").value = "";
//                     })
//                     .catch(err => {
//                         alert("Error: " + err.message);
//                     })
//                 })
//                 .catch(err => {
//                     alert("Error: " + err.message);
//                 })
//                 break;

//             case "Job Contract":
//                 obj = {
//                     ListTypeID: 4,
//                     Description: ListTypeName
//                 }
//                 postContract(obj).then(doc => {
//                     getContract().then(doc => {
//                         this.setState({
//                             options: doc,
//                         })
//                         document.getElementById("ListTypeName").value = "";
//                     })
//                     .catch(err => {
//                         alert("Error: " + err.message);
//                     })
//                 })
//                 .catch(err => {
//                     alert("Error: " + err.message);
//                 })
//                 break;

//             case "Field of Study":
//                 obj = {
//                     studyName: ListTypeName
//                 }
//                 postStudy(obj).then(doc => {
//                     getStudy().then(doc => {
//                         this.setState({
//                             options: doc,
//                         })
//                         document.getElementById("ListTypeName").value = "";
//                     })
//                     .catch(err => {
//                         alert("Error: " + err.message);
//                     })
//                 })
//                 .catch(err => {
//                     alert("Error: " + err);
//                 })
//                 break;

//             case "Skill":
//                 obj = {
//                     skillName: ListTypeName
//                 }
//                 postSkills(obj).then(doc => {
//                     getSkills().then(doc => {
//                         this.setState({
//                             options: doc,
//                         })
//                         document.getElementById("ListTypeName").value = "";
//                     })
//                     .catch(err => {
//                         alert("Error: " + err.message);
//                     })
//                 })
//                 .catch(err => {
//                     alert("Error: " + err);
//                 })
//                 break;
                        
//             default:
//                 break;
//         }
//     }

    

    
                
//     render(){
//         return(
//             <Modal {...this.props}>
//                 <ModalHeader>
//                     Add/Edit {this.props.ListType} List
//                 </ModalHeader>
//                 <ModalBody>
//                 <Row className="mt-3">
//                     <Col md={10}>
//                         <Input id="optionsList" type="select">
//                             {
//                                 this.DrawDropDown()
//                             }
//                         </Input>
//                     </Col>
//                     <Col md={2}>
//                         <Button block outline color="danger" onClick={() => this.DeleteOption()}><i className="fa fa-times fa-xl"></i></Button>
//                     </Col>
//                 </Row>

//                 <Row className="mt-3">
//                     <Col md={10}>
//                         <Input id="ListTypeName" type="text" placeholder={"Enter " + this.props.ListType} />
//                     </Col>
//                     <Col md={2}>
//                         <Button block color="primary" onClick={() => this.PostOption(document.getElementById("ListTypeName").value)}><i className="fa fa-check fa-xl"></i></Button>
//                     </Col>
//                 </Row>
//                 </ModalBody>

//                 <ModalFooter>
//                     <Button color="primary" block>Save</Button>
//                 </ModalFooter>
//             </Modal>
//         )
//     }
// }
// export default ListTypeModal;