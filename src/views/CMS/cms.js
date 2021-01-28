

import React,{useState} from 'react';
import {
  EditorState,convertToRaw
} from 'draft-js'
import {
  Grid,TextField
} from '@material-ui/core'

import { Autocomplete } from '@material-ui/lab';

import draftToHtml from 'draftjs-to-html';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Advertisement from '../NewArrivalsSections/NewArrivals';
import Input from 'reactstrap/lib/Input';

const CMS = () =>{
  const [editorState,setEditorState] = useState(()=>EditorState.createEmpty()); 
  const [terms,setTerms] = useState(()=>EditorState.createEmpty()); 
  const [returnPolicy,setReturnPolicy] = useState(()=>EditorState.createEmpty());
  const [body,setBody] = useState(()=>EditorState.createEmpty());
  
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  const handlePrivacyPolicy = (editorState) =>{
    setEditorState(editorState)
  }
  const handelTerms=(terms)=>{
    setTerms(terms)
  }

  const handleReturnPolicy=(returnPolicy)=>{
    setReturnPolicy(returnPolicy)
  }
  
  const handleBody=(body)=>{
    setBody(body)
  }
  
  
  const toSuggestions = [
    {
      title:'touseef'
    },
    {
      title:'tanveer'
    },
    
  ]
  
  return(
    <div>
    <Nav tabs>
      <NavItem>
        <NavLink
          className={classnames({ active: activeTab === '1' })}
          onClick={() => { toggle('1'); }}
        >
          Privacy Policy
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className={classnames({ active: activeTab === '2' })}
          onClick={() => { toggle('2'); }}
        >
          Terms & Conditions
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className={classnames({ active: activeTab === '3' })}
          onClick={() => { toggle('3'); }}
        >
          New Arrivals
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink
          className={classnames({ active: activeTab === '4' })}
          onClick={() => { toggle('4'); }}
        >
          Return Policy
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink
          className={classnames({ active: activeTab === '5' })}
          onClick={() => { toggle('5'); }}
        >
          Send mail
        </NavLink>
      </NavItem>
    </Nav>
    <TabContent activeTab={activeTab}>
      <TabPane tabId="1">
        <Row>
          <Col sm="12">
          <Grid container>
               <Grid item md={12}  className="bg-light">
                 <label htmlFor="privacyPolicy">Privacy Policy</label>
                   <Editor
                       editorState={editorState}
                       onEditorStateChange={handlePrivacyPolicy}
                       toolbarClassName="toolbarClassName"
                       wrapperClassName="wrapperClassName"
                       editorClassName="editorClassName"
                   />
               </Grid>
           </Grid>
           <Col sm="12">
              <Button className="float-right m-2" color="primary" >
                  Save
              </Button>
           </Col>
          </Col>
        </Row>
      </TabPane>
      <TabPane tabId="2">
        <Row>
          <Col sm="12">
            <Grid container>
              <Grid item md={12}  className="bg-light">
                <label htmlFor="privacyPolicy">Terms &  Conditions</label>
                  <Editor
                      editorState={terms}
                      onEditorStateChange={handelTerms}
                      toolbarClassName="toolbarClassName"
                      wrapperClassName="wrapperClassName"
                      editorClassName="editorClassName"
                  />
              </Grid>
              </Grid>
          </Col>
          <Col sm="12">
            <Button className="float-right m-2" color="primary" >
                Save
            </Button>
           </Col>
        </Row>
      </TabPane>
      <TabPane tabId="3">
        <Row>
          <Col sm="12">   
            <Advertisement/>
          </Col>
          <Col sm="12">
            <Button className="float-right m-2" color="primary" >
                Save
            </Button>
           </Col>
        </Row>
      </TabPane>
      <TabPane tabId="4">
        <Row>
          <Col sm="12">
              <Grid container>
                <Grid item md={12} className="bg-light">
                  <label htmlFor="returnPolicy">Return Policy</label>
                  <Editor
                      editorState={returnPolicy}
                      onEditorStateChange={handleReturnPolicy}
                      toolbarClassName="toolbarClassName"
                      wrapperClassName="wrapperClassName"
                      editorClassName="editorClassName"
                  /> 
                </Grid>
              </Grid> 
          </Col>
          <Col sm="12">
            <Button className="float-right m-2" color="primary" >
                Save
            </Button>
           </Col>
        </Row>
      </TabPane>
      <TabPane tabId="5">
              <Grid container direction="column" >
                <Grid item md={12}>
                  <label htmlFor="to">To</label>
                  <Autocomplete
                    id="to"
                    multiple
                    options={toSuggestions}
                    getOptionLabel={(option) => option.title}
                    style={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="From" variant="outlined" />}
                  />
                </Grid>
                <Grid md={6}>
                    <label htmlFor="to">Subject</label>
                    <TextField id="to"  type="text" variant="outlined" fullWidth label="subject" />
                </Grid>
                <Grid item md={12} >
                  <label htmlFor="body">Body</label>
                  <div className="bg-light">
                    <Editor
                        editorState={body}
                        onEditorStateChange={handleBody}
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                    /> 
                  </div>
                </Grid>
              </Grid>
            
      </TabPane>
    </TabContent>
  </div>
  )
}

export default CMS;














