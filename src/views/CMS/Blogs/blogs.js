import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import UploadBlogs from './uploadBlog'
class Blogs extends Component {

  constructor(){
    super();
    this.state = {
      blogs : null,
      isUploadBlogModel: false,
    }
    this.isUploadBlogToggle = this.isUploadBlogToggle.bind(this);
  }
  isUploadBlogToggle(){
    this.setState({
      isUploadBlogModel: !this.state.isUploadBlogModel,
    })
}
  // deleteBlogs = (index) =>{
  //   deleteBlogs(index)
  //   .then(doc => {
  //     if(doc.code === 1){
  //       window.location.reload()
  //     }
  //   })
  // }
  

  // componentWillMount(){
  //    getBlogs()
  //    .then(doc => {
  //      if(doc.length > 0){
  //   //     console.log("doc",doc)
  //        this.setState({
  //          blogs : doc
  //        })
  //      }
  //    })
  //    .catch(e => {
  //      alert(e.message)
  //    })
  // }

  layout = (res) => {
    var layout = [];
    for (let i = 0; i< res.length; i ++){
        layout.push(
            <tr key={i}>
          <td>{res[i].blogId}</td>
          <td>{res[i].blogTitle}</td>
          <td>{res[i].regDate}</td>
          <td><button className="btn btn-primary">Update</button></td>
          <td><button onClick={e => this.deleteBlogs(res[i].blogId)} className="btn btn-danger">Delete</button></td>
        </tr>
        )
    }
    return layout
  }

  render(){
    return (
        <div className="animated fadeIn">
          <Row>
            <Col xl={12}>
            <UploadBlogs isOpen={this.state.isUploadBlogModel} toggle={() => this.isUploadBlogToggle()} />
              <Card>
                <CardHeader>All Blogs
                <button onClick={() => this.isUploadBlogToggle()} className="btn btn-light float-right"><i className="fa fa-plus mr-2"></i>Add Blog</button>

                </CardHeader>
                <CardBody>
                  <Table responsive hover>
                    <thead>
                      <tr>
                        <th scope="col">id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Uploaded Date</th>
                        <th scope="col">Update</th>
                        <th scope="col">Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.blogs ? this.layout(this.state.blogs) : <h3>No List To Show</h3>
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

export default Blogs;
