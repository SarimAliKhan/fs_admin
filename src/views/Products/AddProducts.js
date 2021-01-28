import React, { Component } from 'react';
import { Card, CardBody, Col, Row, FormGroup,CardFooter,Label,Input,Button,Form,FormText, CardHeader,Collapse } from 'reactstrap';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import {getAttributes,getAttributesDetails,getCategory,getCollections} from '../../Database/GetMethods'
import {postProduct} from '../../Database/PostMethods'
// import FroalaEditorComponent from 'react-froala-wysiwyg';
import './AddProducts.css'
import {getBlob} from '../../Utils/conversion'
import {toChecks} from '../../Utils/Checks'
import FilePopUp from './MultipleFilePopUp'
var ImageList = []
var catKeys = ""
var attKeys = ""
class AddProduct extends Component {
  constructor() {
    super()
    this.state = {
      attCount : 1,
      pastCount : 1,
      collections : [],
      attributes : null,
      attributeDetails : null,
      category : null,
      modelPopUp : false,
      attDetails : [],
      categories : [],
      coverImage : null,
      name : null,
      isModelCollapseOpen : false,
      globalVal : 0,
    }
  }
  togglePopup = () => this.setState({modelPopUp : !this.state.modelPopUp})
  addAttCount = () =>{
    var count = this.state.attCount
    count++
    this.setState({
      pastCount : this.state.attCount,
      attCount : count
    })
  }
  setisModelCollapseOpen = (val) => {
    if(val === "-1"){
      this.setState({
        isModelCollapseOpen : false,
        globalVal : -1
      })
    }else{
      this.setState({
        isModelCollapseOpen : true,
        globalVal : val
      })
    }
    
  }
  componentDidMount(){
    Promise.all([getAttributes(),getAttributesDetails(),getCategory(),getCollections()])
    .then(values => {
   //   console.log(values)
      this.setState({
        attributes : values[0],
        attributeDetails : values[1],
        category : values[2],
        collections : values[3],
      })
    })
    .catch(e => {
      //console.log(e.message)
    })
  }
  listAttributeRender = (list) => {
    var options = []
    for(let i = 0; i < list.length; i ++){
      options.push(
        <option key={i} value={list[i].attId}>{list[i].attributeName}</option>
      )
    }
    return options
  }
  setInfo = (e) => {
    const tempObj = {
      ProductInfo: {
        product_name: "Amazon - XYZ111223300001091",
        description: "my name is Ahsun Iqbal",
        details: "details",
        shipping_details: "Shipping Details",
        usp: "usp",
        is_removed: false,
        keywords: "keywords",
        is_deactivated: false
      },
      ProductVariations: [
        {
          sku: "sku1",
          combination_string: [3, 3, 1, 5, 4, 6, 7],
          qty: 13,
          cost_price: 11.50,
          sale_price: 401.50,
          discount: 35,
          weight: 24.5,
          isSoldOut: false,
          isComingSoon: false
        },
        {
          sku: "sku2",
          combination_string: [3, 3, 1, 5, 4],
          qty: 50,
          cost_price: 50.50,
          sale_price: 40.50,
          discount: 15,
          weight: 24.5,
          isSoldOut: false,
          isComingSoon: false
        }
      ],
      ProductAttributes: [
        {
          image: this.state.coverImage,
          imageName: this.state.name,
          attribute_detail_id: 1
        },
        {
          image: this.state.coverImage,
          imageName: this.state.name,
          attribute_detail_id: 1
        },
        {
          image: this.state.coverImage,
          imageName: this.state.name,
          attribute_detail_id: 1
        },
        {
          image: this.state.coverImage,
          imageName: this.state.name,
          attribute_detail_id: 1
        }
      ],
      ProductCategory: 
      {
        category_id: 1
      },
      ProductCollections:
      [
        {
          collection_id: 1
        },
        {
          collection_id: 3
        },
        {
          collection_id: 2
        }
      ]

  }

  postProduct(tempObj).then(doc => {
    console.log("Success");
  }).catch(error => {
    console.log("Errri")
  })




    // var pName = document.getElementById('pName').value
    // var description = document.getElementById('des').value
    // var sku = document.getElementById('sku').value
    // var quantity = document.getElementById('quantity').value
    // var salePrice = document.getElementById('salePrice').value
    // var returnPolicy = document.getElementById('returnPolicy').value
    // var costPrice = document.getElementById('costPrice').value
    // var weight = document.getElementById('weight').value
    // var finalAtt = this.onCompleteAttributes()
    // var finalCat = this.onCompleteCategory()
    // var productCollection = this.onCompleteCollection()
    // if(toChecks(pName,"Name can not be empty") && toChecks(description,"description can not be empty") 
    // && toChecks(sku,"sku can not be empty") && toChecks(quantity,"quantity can not be empty") 
    // && toChecks(salePrice,"Sale Price can not be empty") 
    //   && toChecks(returnPolicy,"return policy can not be empty") && toChecks(costPrice,"Cost price can not be empty") &&
    //   toChecks(this.state.coverImage,"Main Image can not be empty")){
    //   if(ImageList.length > 1){
    //     const productInfo = {
    //       pName,
    //       description,
    //       firstImg : this.state.coverImage,
    //       imageName : this.state.name,
    //       sku,
    //       quantity,
    //       costPrice,
    //       salePrice,
    //       returnPolicy,
    //       catKeys,
    //       attKeys,
    //       weight
    //     }
    //     const keys = catKeys + attKeys
    //     const productAttDetails = finalAtt
    //     const productCat = finalCat
    //     const finalImageList = []
    //     for(let i = 0; i < ImageList.length / 2; i ++){
    //       finalImageList.push(ImageList[i])
    //     }
    //     const obj = {
    //       productInfo,productAttDetails,productCat,productCollection,finalImageList,keys
    //     }
    //   //  console.log("Object",obj)
    //     postProduct(obj)
    //     .then(doc => {
    //       if(doc.code === 1){
    //         alert("Upload Successfuly")
    //       }else{
    //         alert(doc.message)
    //       }
    //     })
    //     .catch(e => {
    //       alert(e.message)
    //     })
        
    //   }else{
    //     alert("Upload atleast 2 images")
    //   }
    // }

    
  }


  listAttributeDetailsRender = (list) => {
    var options = []
    for(let i = 0; i < list.length; i ++){
      options.push(
        <option key={i} value={list[i].attDetailsId}>{list[i].attDetails}</option>
      )
    }
    return options
  }
  listCategoryRender = (list) => {
    var options = []
    for(let i = 0; i < list.length; i ++){
      options.push(
        <option key={i} value={list[i].catId}>{list[i].catName}</option>
      )
    }
    return options
  }
  listCollectionsRender = (list) => {
    var options = []
    for(let i = 0; i < list.length; i ++){
      options.push(
        <option key={i} value={list[i].collectionId}>{list[i].title}</option>
      )
    }
    return options
  }
  addAttributesDetails = (attId) =>{
    var tab = []
    for(let i = 0; i < this.state.attributeDetails.length; i ++){
      if(attId === this.state.attributeDetails[i].attId){
        tab.push(
          <option key={i} value={this.state.attributeDetails[i].attDetailsId}>{this.state.attributeDetails[i].attDetails}</option>
        )
      }
      
    }
    
    return tab  
  }
  onCompleteCollection(){
    
    var temp = []
    var tempSt = []
    var flag = true
    Array.from(document.getElementById("collectSelect").options).filter(option => option.selected).map(option =>{ 
      if(option.value !== "-1"){
        catKeys += option.textContent + ","
        tempSt.push(option.value)
      }else{
        flag = false
      }
    });
    if(flag){
      for(let i = 0; i < tempSt.length; i ++){
        temp.push(Number(tempSt[i]))
      }
    }
    //console.log("compl",temp)
    return temp
  }
  onCompleteCategory(){
    var val = document.getElementById('catSelect').value
    var temp = []
    temp.push(val)
 //   console.log("Category",temp)
    return temp
  }
  onCompleteAttributes(){
  //  console.log(this.state.attributes)
    var temp = []
    for(let i = 0; i < this.state.attributes.length; i ++){
      var tempSt = []
      var flag = true
      Array.from(document.getElementById("select-"+i).options).filter(option => option.selected).map(option =>{ 
        if(option.value !== "-1"){
          // console.log("Op",option.textContent)
          attKeys += option.textContent + ","
          tempSt.push(option.value)
        }else{
          flag = false
        }
      });
      if(flag){
        for(let i = 0; i < tempSt.length; i ++){
          temp.push(Number(tempSt[i]))
        }
      }
      // if(this.state.globalVal === "1"){
      //   if(this.state.attributes[i].attId === 8){
      //     Array.from(document.getElementById("select-"+i).options).filter(option => option.selected).map(option =>{ 
      //       if(option.value !== "-1"){
      //         // console.log("Op",option.textContent)
      //         attKeys += option.textContent + ","
      //         tempSt.push(option.value)
      //       }else{
      //         flag = false
      //       }
      //     });
      //     if(flag){
      //       for(let i = 0; i < tempSt.length; i ++){
      //         temp.push(Number(tempSt[i]))
      //       }
      //     }
      //   }
      // }else{
      //   if(this.state.attributes[i].attId !== 8){
      //     Array.from(document.getElementById("select-"+i).options).filter(option => option.selected).map(option =>{ 
      //       if(option.value !== "-1"){
      //         // console.log("Op",option.textContent)
      //         attKeys += option.textContent + ","
      //         tempSt.push(option.value)
      //       }else{
      //         flag = false
      //       }
      //     });
      //     if(flag){
      //       for(let i = 0; i < tempSt.length; i ++){
      //         temp.push(Number(tempSt[i]))
      //       }
      //     }
      //   }
      // }
      
    }
    //console.log(temp)
    return temp
  }
  addAttributes = (list) =>{
    var tab = []
    for(let i = 0; i < list.length; i ++){
      tab.push(
        <Col key={i} xs="12" md="6">
          <Label>{list[i].attributeName}</Label>
          <Input type="select" name="select" id={"select-"+i} required multiple>
            <option value={-1}>Please select</option>
            {
              this.addAttributesDetails(list[i].attId)
            }
          </Input>
        </Col>               
        )
      // if(this.state.globalVal === "1"){
      //   if(list[i].attId === 8){
      //     tab.push(
      //     <Col key={i} xs="12" md="6">
      //       <Label>{list[i].attributeName}</Label>
      //       <Input type="select" name="select" id={"select-"+i} required multiple>
      //         <option value={-1}>Please select</option>
      //         {
      //           this.addAttributesDetails(list[i].attId)
      //         }
      //       </Input>
      //     </Col>               
      //     )
      //   }
      // }else{
      //   if(list[i].attId !== 8){
      //     tab.push(
      //     <Col key={i} xs="12" md="6">
      //       <Label>{list[i].attributeName}</Label>
      //       <Input type="select" name="select" id={"select-"+i} required multiple>
      //         <option value={-1}>Please select</option>
      //         {
      //           this.addAttributesDetails(list[i].attId)
      //         }
      //       </Input>
      //     </Col>               
      //     )
      //   }
      // }
      
    }
    
    return tab  
  }
  fileToDataUri = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      // //console.log(event.target.result)
      resolve(event.target.result)
    };
    reader.readAsDataURL(file);
    })
  setImage = (e) => {
    var file = e.target.files[e.target.files.length - 1]
    document.getElementById('productImg').src = URL.createObjectURL(file) 
    //console.log(file)
    getBlob(file)
    .then(doc => {
      //console.log(file.name,file.name.toString().replace(/\s/g,'_'))
      this.setState({
        coverImage : doc,
        name : "img"+file.name.replace(/\s/g,'_'),
      })
    })

  }

  getImageList = (list) => {
    //console.log(list)
    ImageList = list
  }

    render() {
        return(
          <div>
            <div className="row">
                <Col xl="8">
                <Card>
              <CardBody>
              <FilePopUp imageList={this.getImageList} text={"Hello AShar"} toggle={this.togglePopup} isOpen={this.state.modelPopUp} />
                <Form   className="form-horizontal">
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input"><bold>Product Name</bold></Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="pName" name="text-input" placeholder="Enter Product Name" required/>
                      <FormText color="muted">Product name in any language</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input"><bold>Product SKU</bold></Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="sku" name="text-input" placeholder="Enter Product SKU" required/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input"><bold>Product Stock</bold></Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="number" id="quantity" name="text-input" placeholder="Enter Product Stock" />
                      <FormText color="muted">Leave Empty will Show Always Available</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                  <Col xs="12" md="12">
                    <Label htmlFor="text-input"><bold>Product Description</bold></Label>
                        {/* <FroalaEditorComponent tag='textarea'/> */}
                        <Input id='des' type="textarea" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col xs="12" md="12">
                    <Label htmlFor="text-input"><bold>Product Buy/Return Policy</bold></Label>
                    <Input id="returnPolicy" type="textarea" />
                    </Col>
                  
                  </FormGroup>
                  <FormGroup row>
                    <Col xs="6" md="6">
                    <h4>Categories</h4>
                      <Input type="select"  name="select" id="catSelect" required>
                      <option value="-1">Please select</option>
                        {
                          this.state.category ? this.listCategoryRender(this.state.category) : null
                        }
                      </Input>
                    </Col>
                  </FormGroup>
                  {/* <Collapse isOpen={this.state.isModelCollapseOpen}> */}
                  
                  
                  <FormGroup row>
                    <Col xs="6" md="6">
                    <h4>Collections</h4>
                      <Input type="select" name="select" id="collectSelect" required multiple>
                      <option value="-1">Please select</option>
                        {
                          this.state.collections ? this.listCollectionsRender(this.state.collections) : null
                        }
                      </Input>
                    </Col>
                    <p>*Hold down the Ctrl (windows) or Command (Mac) button to select multiple options.</p>
                  </FormGroup>
                  <FormGroup row>
                    <Col xs="12" md="12">
                    <h4>Attributes</h4>
                    </Col>
                    {
                      this.state.attributes ? this.addAttributes(this.state.attributes) : null
                    }
                  <p>*Hold down the Ctrl (windows) or Command (Mac) button to select multiple options.</p>
                  </FormGroup>
                  {/* </Collapse > */}
                  
                  <FormGroup row hidden>
                    <Col md="3">
                      <Label className="custom-file" htmlFor="custom-file-input">Custom file input</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Label className="custom-file">
                        <Input className="custom-file" type="file" id="custom-file-input" name="file-input" />
                        <span className="custom-file-control"></span>
                      </Label>
                    </Col>
                  </FormGroup>
                  
                </Form>
                </CardBody>
                <CardFooter>
                    <Button onClick={e => this.setInfo(e)} type="submit" size="sm" color="primary">Submit</Button>
                </CardFooter>
                </Card>
                </Col>
                <Col xl="4">
                    <Card>
                        <CardBody>
                            <Col xl="12">
                                <Row>
                                    <Col>
                                    Featured Images*
                                    </Col>
                                    
                                </Row>
                                <Row>
                                <Col xs="12" md="12">
                                    <img className="myimg" id="productImg" src=""  width="200" height="200"/>
                                    </Col>
                                    <Col xs="12" md="12">
                                    <Input onChange={e => this.setImage(e)} type="file" id="file-input" name="file-input" accept="image/*"/>
                                  </Col>
                                    
                                </Row>
                                <Row>
                                    <Col xs="12"> 
                                    <Label>Product Gallery Images*</Label>
                                    </Col>
                                    <Col xs="12">
                                    <Button onClick={() => this.togglePopup()} color="primary">Set Gallery</Button>
                                    </Col>
                                </Row>
                              <FormGroup row>
                                <Col xs="12" md="9">
                                  <Label htmlFor="text-input"><bold>Product Cost Price*</bold></Label>
                                  <Input id="costPrice" type="number" name="text-input" placeholder="Enter Product Cost" required/>
                                  <FormText color="muted">In PKR</FormText>
                                </Col>
                              </FormGroup>
                              <FormGroup row>
                                <Col xs="12" md="9">
                                  <Label htmlFor="text-input"><bold>Product Sale Price*</bold></Label>
                                  <Input id="salePrice" type="number" name="text-input" placeholder="Enter Product Sale Price" required/>
                                  <FormText color="muted">In PKR</FormText>
                                </Col>
                              </FormGroup>
                              <FormGroup row>
                                <Col xs="12" md="9">
                                  <Label htmlFor="text-input"><bold>Product Weight*</bold></Label>
                                  <Input id="weight" type="number" name="text-input" placeholder="Enter Product Weight" required/>
                                  <FormText color="muted">In Grams(GMS)</FormText>
                                </Col>
                              </FormGroup>
                            {/* <FormGroup row>
                                <Col xs="12" md="9">
                                  <Label htmlFor="text-input"><bold>Youtube Video URL* (Optional)</bold></Label>
                                  <Input type="text" name="text-input" placeholder="Enter Youtube Video URL" required/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col xs="12" md="6">
                                  <Label htmlFor="text-input"><bold>Feather Tag</bold></Label>
                                  <Input type="text" id="text-input" name="text-input" placeholder="Enter Your" required/>
                                </Col>
                                <Col xs="12" md="6">
                                  <Label htmlFor="text-input">color</Label>
                                  <Input type="text" id="text-input" name="text-input" placeholder="#0000" required/>
                                </Col>
                            </FormGroup> */}
                            </Col>
                            {/* <Col xs="12" className="text-center"> 
                            <Button>
                            <bold>+ Add More Field </bold>
                            </Button>
                            </Col> */}
                            {/* <FormGroup row>
                                <Col xs="12" md="12">
                                  <Label htmlFor="text-input"><bold>Tags*</bold></Label>
                                  <Input type="text" id="text-input" name="text-input" required/>
                                </Col>
                            </FormGroup>     */}
                            
                        </CardBody>
                    </Card>
                </Col>
                
              
            </div>
           
            {/* <Card>
              <CardHeader>
               <h4>ADD NEW CATEGORY</h4>
               </CardHeader>

               <CardBody>
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
                  <Label  className="float-right" htmlFor="text-input"><bold>Slugs *</bold>  (in Any language)</Label>
                </Col>
               <Col md="6" xs="12">
                  <Input type="text" id="text-input" name="text-input" placeholder="Slug" required/>
                <Button color="primary" className="mt-3 mb-3">Create Catagory</Button>
                </Col>
              </Row>
             </CardBody>
             <CardFooter>
               <Button  color="primary" className="float-right">
                 Close
               </Button>
             </CardFooter>
                
                  
             
             </Card> */}

            {/* <div className="add-product">
             
             <Card>
             <Row className="mt-4"> 
               <Col xs="3">
                <h6 className="float-right">
                  Category *
                </h6>
               </Col>
               <Col xs="6" >
               <Input type="select" name="select" id="select" required>
                        <option value="0">Manufacturing</option>
                        <option value="1">Option #1</option>
                        <option value="2">Option #2</option>
                        <option value="3">Option #3</option>
                      </Input>
               </Col>
               </Row>
               <Row className="my-4">
               <Col xs="3"  >
                <h6 className="float-right">
                  title * 
                
                </h6>
               </Col>
               <Col xs="6" >
               <Input type="text" id="text-input" name="text-input" placeholder="How to design effective arts?" required/>
                        
               </Col>
               </Row>
               <Row>
               <Col xs="3" >
                <h6 className="float-right">
                Current Featured Image  * 
                
                </h6>
               </Col>
               <Col xs="6" >
               <img  src=""  width="200" height="200"/>
               </Col>
               </Row>
               <Row className="mt-3">
               <Col xs="3" >
                <h6 className="float-right">
               Source * 
                </h6>
               </Col>
               <Col xs="6" >
               <Input type="text" id="text-input" name="text-input" placeholder="www.geniusocean." required/>
               </Col>
               </Row>
               <Row className="my-3">
               <Col xs="3" >
                <h6 className="float-right">
              Tags * 
                </h6>
               </Col>
               <Col xs="6" >
               <Input type="text" id="text-input" name="text-input"  required/>
               </Col>
               </Row>
               
               </Card> 
                
             
            </div> */}

            
            </div>
        )
    }
}

export default AddProduct;