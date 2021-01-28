import React, { Component } from 'react';
import { Card, CardBody, Col, Row, FormGroup,CardFooter,Label,Input,Button,Form,FormText, CardHeader,Link,Table } from 'reactstrap';
import {getProductNames} from '../../Database/GetMethods'
import {postPurchase} from '../../Database/PostMethods'
class AddProduct extends Component {

    constructor(){
        super()
        this.state = {
            purchases : [],
            names : null,
            total : 0,
        }
    }

    componentDidMount(){
        getProductNames()
        .then(doc => {
            console.log(doc)
            if(doc.length > 0){
                this.setState({
                    names : doc
                })
            }else{
                alert(doc.message)
            }
        })
        .catch(e => {
            alert(e.message)
        })
    }

    optionLayout = (res) => {
        var layout = []
        for(let i = 0; i < res.length; i ++){
            layout.push(
                <option key={i} value={res[i].product_id + "-" + res[i].product_variation_id} name={res[i].pName}>{res[i].pName}</option>
            )
        }
        return layout
    }

    Layout = (res) => {
        var layout = []
        for(let i = 0; i < res.length; i ++){
          layout.push(
            <tr key={i}>
                <td>{i+1}</td>
                <td>{res[i].pName}</td>
                <td>{res[i].rate}</td>
                <td>{res[i].quantity}</td>
                <td>{res[i].sale}</td>
                <td>{res[i].discount}</td>
                <td>{res[i].totalBill}</td>
                
            </tr>
          )
        }
        return layout
    }

    totalProducts = () => {
        var sum = 0;
        if(this.state.purchases.length > 0){
            for(let i = 0; i < this.state.purchases.length; i ++){
                sum += Number(this.state.purchases[i].totalBill)
            }
        }
        return sum
    }

    addPurchase = () => {
        var val = document.getElementById('products').value
        var productId = document.getElementById('products').value.split('-')[0]
        
        if(productId === "-1"){
            alert("You have to select a product first")
            return
        }
        var product_variation_id = document.getElementById('products').value.split('-')[1]
        console.log(val,productId,product_variation_id)
        var pName = document.getElementById('products').options[document.getElementById('products').selectedIndex].text
        var rate = document.getElementById('rate').value
        var quantity = document.getElementById('quantity').value
        var sale = document.getElementById('sale').value
        var discount = document.getElementById('discount').value
        if(productId && quantity && rate){
            const obj = {
                productId,
                pName,
                rate,
                quantity,
                sale,
                discount,
                totalBill:rate*quantity,
                product_variation_id,
            }
            var arr = this.state.purchases
            arr.push(obj)
            this.setState({
                purchases : arr
            })
            document.getElementById('products').value = "-1"
            document.getElementById('rate').value = ""
            document.getElementById('quantity').value = ""
            document.getElementById('sale').value = ""
            document.getElementById('discount').value = ""
            

            console.log(obj)
        }else{
            alert("Field can not be empty")
        }
    }

    addPurchaseList = (purchases) => {
        var sum = 0;
        var tempArray = []
        if(purchases.length > 0){
            for(let i = 0; i < purchases.length; i ++){
                sum += Number(purchases[i].totalBill)
                var array = [Number(purchases[i].productId),Number(purchases[i].quantity),Number(purchases[i].rate),Number(purchases[i].product_variation_id),Number(purchases[i].sale),Number(purchases[i].discount)]
                tempArray.push(array)
            }
            const purchase = {
                totalBill : sum,
                description : "hello"
            }
            const obj = {
                purchase,
                productPurchase : tempArray
            }
            postPurchase(obj)
            .then(doc => {
                if(doc.code === 1){
                    alert("Uploaded !")
                }else{
                    alert(doc.message)
                }
            })
            .catch(e => {
                alert(e.message)
            })
            console.log("obj",obj)
        }else{
            alert("No List Found")
        }
    }

    render() {
        const {purchases,names} = this.state
        return(
            <div className="animated fadeIn">
            <Row>
            <Col xl={12}>
              <Card>
                <CardHeader> <h3>Purchase List</h3> <small className="text-muted"></small>
                  {/* <button className="btn btn-light float-right"><i className="fa fa-plus mr-2"></i>Add Company</button> */}
                  <Row>
                  <Col xs={4}>
                    <Label>Select Product</Label>
                    <Input type="select" id="products">
                        <option value="-1">Please Select One</option>
                        {
                            names ? this.optionLayout(names) : null
                        }
                    </Input>
                  </Col>
                  <Col xs={3}>
                    <Label>Cost</Label>
                    <Input type="number" id="rate"/>
                  </Col>
                  <Col xs={3}>
                    <Label>Quantity</Label>
                    <Input type="number" id="quantity"/>
                  </Col>
                  <Col xs={4}>
                    <Label>Sale Price</Label>
                    <Input type="number" id="sale"/>
                  </Col>
                  <Col xs={3}>
                    <Label>Discount</Label>
                    <Input type="number" id="discount"/>
                  </Col>
                  
                  <Col xs={2} style={{marginTop : "25px"}}>
                    <Button onClick={e => this.addPurchase()} color="primary">Add</Button>
                  </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                <Table responsive hover>
                    <thead>
                      <tr>
                        <th scope="col">Index</th>
                        <th scope="col">Product</th>
                        <th scope="col">Cost</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Sale Price</th>
                        <th scope="col">Discount</th>
                        <th scope="col">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                        {
                            purchases.length > 0 ? this.Layout(purchases) : null
                        }
                    </tbody>
                    </Table>
                </CardBody>
                <CardFooter>
                    <p><span>Total : </span>{this.totalProducts(this.state.purchases)}</p>
                    <Button color="success" onClick={e => this.addPurchaseList(this.state.purchases)} className="float-right">Add Purchase</Button>
                </CardFooter>
                </Card>
                </Col>
                </Row>
                </div>
        )
    }



}

export default AddProduct