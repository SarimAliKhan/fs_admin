import React, { useEffect, useState } from "react";
import ImagePicker from "react-image-picker";
import "react-image-picker/dist/index.css";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Select,
  MenuItem,
  Checkbox,
  ThemeProvider,
  createMuiTheme,
  Dialog,
} from "@material-ui/core";
import axios from "axios";
import {
  getAttributes,
  getImages,
  getAttributesDetails,
  getCategory,
  getCollections,
} from "../../Database/GetMethods";
import { Input } from "reactstrap";
import { postNewProduct } from "../../Database/PostMethods";
import "./AddProducts.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0275d8",
    },
    secondary: {
      main: "#5bc0de",
    },
  },
});
const UpdateAddProduct = () => {
  const [attributesList, setAttributesList] = useState([]);
  const [attributesDetailsList, setAttributesDetailsList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [collectionsList, setCollectionsList] = useState([]);
  const [category, setCategory] = useState(null);
  const [collection, setCollection] = useState([]);
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  // const [productSalePrice,setProductSalePrice] = useState(null);
  // const [productCostPrice,setProductCostPrice] = useState(null);
  // const [productWeight,setProductWeight] = useState(null);
  const [productUsp, setProductUsp] = useState(null);
  const [attribute, setAttribute] = useState([]);
  const [productBuyReturn, setProductBuyReturn] = useState("");
  const [detail, setDetail] = useState("");
  const [uiCount, setUiCount] = useState([]);
  const [counter, setCounter] = useState(0);
  const [isRemoved, setIsRemoved] = useState(false);
  const [deactivated, setDeactivated] = useState(false);
  // productAttribute
  const [imageDetail, setImageDetail] = useState([]);
  // shipping Details
  // const [productShippingDetail,setProductShippingDetail] = useState('');
  // id of the Attribute for image
  let [idOfAtt, setIdOfAtt] = useState("");
  const [finalImage, setFinalImage] = useState([]);
  // open the dialog
  const [open, setOpen] = useState(false);
  const [inComingImages, setIncomingImages] = useState([]);
  const [image, setImage] = useState([]);
  const [imageList, setImageList] = useState([]);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [buyReturn, setBuyReturn] = useState(() => EditorState.createEmpty());
  const [detailOfTheProduct, setDetailOfTheProduct] = useState(() =>
    EditorState.createEmpty()
  );

  useEffect(() => {
    Promise.all([
      getAttributes(),
      getAttributesDetails(),
      getCategory(),
      getCollections(),
      getImages(),
    ])
      .then((values) => {
        setAttributesList(values[0]);
        console.log("VAL", values);
        setAttributesDetailsList(values[1]);

        setCategoryList(values[2]);
        setCollectionsList(values[3]);
        setIncomingImages(values[4]);
      })
      .catch((err) => alert(err));
  }, []);
  //multiple image selection
  const onPick = (images) => {
    const img = [...image];
    img.push(images);
    setOpen(false);
    setImage(img);
  };
  // handle final image
  const handleFinalImage = () => {
    const FI = [...finalImage];
    FI.push(image);
    setFinalImage(FI);
    console.log(finalImage);
    alert("Images Added");
  };

  // Usp of the product is being handled here
  const handleProductUsp = (e) => {
    if (
      e.target.value.length <= 255 &&
      (e.target.value !== null || e.target.value !== "")
    ) {
      setProductUsp(e.target.value);
    }
  };

  // product sale price handler
  // const handleProductSalePrice=(e)=>{
  //     if (e.target.value !== null || e.target.value !== '' ) {
  //         setProductSalePrice(e.target.value)
  //     }
  // }

  // product cost price handler
  // const handleProductCostPrice=(e)=>{
  //     if (e.target.value !== null || e.target.value !== '' ) {
  //         setProductCostPrice(e.target.value)
  //     }
  // }

  // product weight handler
  // const handleProductWeight=(e)=>{
  //     if (e.target.value !== null || e.target.value !== '' ) {
  //         setProductWeight(e.target.value)
  //     }
  // }

  // product description editor
  const handleDescription = (editorState) => {
    // if (e.blocks[0].text !== null && e.blocks[0].text !== '' ) {
    // }
    setEditorState(editorState);
    // handleDescription(draftToHtml(convertToRaw(editorState.getCurrentContent())))
  };
  // product buy return policy
  const handleBuyReturn = (buyReturn) => {
    // if (e.blocks[0].text !== null && e.blocks[0].text !== '') {
    //     setProductBuyReturn(e.blocks[0].text)
    // }
    setBuyReturn(buyReturn);
  };
  // Detail
  const handleDetail = (detailOfTheProduct) => {
    // if (e.blocks[0].text !== null && e.blocks[0].text !== '') {
    //     setDetail(e.blocks[0].text)
    // }
    setDetailOfTheProduct(detailOfTheProduct);
  };
  // handle productShippingDetail
  // const handleProductShippingDetail=(e)=>{
  //     if (e.target.value !== null || e.target.value !== '' ) {
  //         setProductShippingDetail(e.target.value)
  //     }
  // }
  // product Name handler
  const handleProductName = (e) => {
    if (
      e.target.value.length <= 255 &&
      (e.target.value !== null || e.target.value !== "")
    ) {
      setProductName(e.target.value);
    }
  };
  // handle Isremoved
  const handleIsRemoved = () => {
    setIsRemoved(true);
  };
  const handleDeactivated = () => {
    setDeactivated(true);
  };
  // Categories like terry towel etc
  const handleCategories = (e) => {
    setCategory(e.target.value);
  };

  // collection is being handled here
  const handleCollections = (e) => {
    setCollection(e.target.value);
  };
  // onclick re render the same ui
  const handleReRender = () => {
    if (attribute.length == 0) {
      alert("select attributes first");
    } else {
      let UI = [...uiCount];
      setCounter(counter + 1);
      UI.push(counter);
      setUiCount(UI);
    }
  };
  const handleImage = (e, id) => {
    let imgL = [...imageList];
    console.log(imgL.length);
    if (imgL.length < 5) {
      let showImages = document.getElementById(`showImages${id}`);
      let img = document.createElement("img");
      img.setAttribute("class", "img");
      img.src = URL.createObjectURL(e.target.files[0]);
      showImages.appendChild(img);
      imgL.push(e.target.files[0]);
      setImageList(imgL);
    } else {
      alert("You can upload only 5 images");
    }
    // if (name == "Colors") {
    //     let arrayOfSelectedColor = attributesDetailsList.filter(item=>item.attDetailsId==e.target.value);
    //     setOpen(true)
    // setIdOfAtt(`${arrayOfSelectedColor[0].attDetailsId}`)
    // }
    // console.log(idOfAtt)
  };
  const ui = (id) => {
    return (
      <Grid style={{ padding: "3px" }} container>
        <Grid item md={12}>
          <Grid container>
            {attribute.map((item) => (
              <Grid key={item.id} item md={2}>
                <label htmlFor={`attribute${id}${item.id}`}>{item.name}</label>
                {
                  <Input
                    type="select"
                    defaultValue=""
                    id={`attribute${id}${item.id}`}
                  >
                    {attributesDetailsList.map((attributeDetail) =>
                      attributeDetail.attId == item.id ? (
                        <option
                          key={attributeDetail.attDetailsId}
                          value={attributeDetail.attDetailsId}
                        >
                          {attributeDetail.attDetails}
                        </option>
                      ) : null
                    )}
                  </Input>
                }
                <Dialog open={open} onClose={() => setOpen(false)}>
                  <Grid container style={{ overflowY: "scroll" }}>
                    <Grid item style={{ margin: "30px" }}>
                      <ImagePicker
                        images={inComingImages.map((image, i) => ({
                          src: image.url,
                          value: i,
                        }))}
                        onPick={onPick}
                      />
                    </Grid>
                  </Grid>
                </Dialog>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid style={{ padding: "3px" }} item sm={12} xs={12} md={2}>
          <label htmlFor={`sku${id}`}>SKU</label>
          <TextField
            label="sku"
            id={`sku${id}`}
            variant="outlined"
            fullWidth
            type="text"
          />
        </Grid>
        <Grid style={{ padding: "3px" }} item sm={12} xs={12} md={2}>
          <label htmlFor={`quantity${id}`}>Quantity</label>
          <TextField
            label="quantity"
            required
            id={`quantity${id}`}
            variant="outlined"
            fullWidth
            type="number"
          />
        </Grid>
        <Grid style={{ padding: "3px" }} item md={2} sm={12} xs={12}>
          <label htmlFor={`costprice${id}`}>Cost Price</label>
          <TextField
            label="cost price"
            required
            id={`costprice${id}`}
            variant="outlined"
            fullWidth
            type="number"
          />
        </Grid>
        <Grid style={{ padding: "3px" }} item md={2} sm={12} xs={12}>
          <label htmlFor={`saleprice${id}`}>Sale Price</label>
          <TextField
            label="sale price"
            id={`saleprice${id}`}
            required
            variant="outlined"
            fullWidth
            type="number"
          />
        </Grid>
        <Grid style={{ padding: "3px" }} item md={2} sm={12} xs={12}>
          <label htmlFor={`discount${id}`}>Discount</label>
          <TextField
            label="discount in %"
            id={`discount${id}`}
            variant="outlined"
            fullWidth
            type="number"
          />
        </Grid>
        <Grid style={{ padding: "3px" }} md={2} sm={12} xs={12}>
          <label htmlFor={`weight${id}`}>Weight</label>
          <TextField
            label="weight in gram"
            id={`weight${id}`}
            required
            variant="outlined"
            fullWidth
            type="number"
          />
        </Grid>
        <Grid item id={`showImages${id}`} md={12} sm={12} xs={12}>
          {image.map((e) => (
            <img
              style={{
                height: "150px",
                width: "150px",
                margin: "5px",
                borderRadius: "50%",
              }}
              src={e.src}
            />
          ))}
        </Grid>
        <br />
        <Grid item md={12} sm={12} xs={12}>
          <Button
            style={{ margin: "5px" }}
            onClick={() => setOpen(true)}
            variant="contained"
            color="primary"
          >
            choose Images
          </Button>
          {image.length > 2 ? (
            <Button
              onClick={handleFinalImage}
              style={{ margin: "5px" }}
              color="primary"
              variant="contained"
            >
              Upload Images
            </Button>
          ) : null}
        </Grid>
        <Grid style={{ padding: "3px" }} md={2} sm={12} xs={12}>
          <label htmlFor={`soldout${id}`}>Sold Out</label>
          <Checkbox id={`soldout${id}`} />
        </Grid>
        <Grid style={{ padding: "3px" }} md={2} sm={12} xs={12}>
          <label htmlFor={`comingsoon${id}`}>Coming Soon</label>
          <Checkbox id={`comingsoon${id}`} />
        </Grid>
      </Grid>
    );
  };
  const handleCheckbox = (e, attName, attId) => {
    if (e.target.checked == true) {
      let A = [...attribute];
      A.push({
        id: attId,
        name: attName,
      });
      setAttribute(A);
    } else {
      for (var i = 0; i < attribute.length; i++) {
        if (attribute[i].name == attName) {
          attribute.splice(i, 1);
        }
      }
      setUiCount([]);
    }
  };

  // data will be submitted using this method
  const SubmitData = () => {
    var temp = [];
    for (let i = 0; i < counter; i++) {
      let sku = document.getElementById(`sku${i}`).value;
      let quantity = parseInt(document.getElementById(`quantity${i}`).value);
      let costprice = document.getElementById(`costprice${i}`).value;
      let saleprice = document.getElementById(`saleprice${i}`).value;
      let discount = parseInt(document.getElementById(`discount${i}`).value);
      let weight = document.getElementById(`weight${i}`).value;
      let soldout = document.getElementById(`soldout${i}`).checked;
      let comingsoon = document.getElementById(`comingsoon${i}`).checked;

      let tempComb = [];
      for (let j = 0; j < attribute.length; j++) {
        let attributeValue = document.getElementById(
          `attribute${i}${attribute[j].id}`
        );
        tempComb.push(Number(attributeValue.value));
      }
      let imgList = [];
      console.log("final image", finalImage);
      for (let l = 0; l < finalImage[i].length; l++) {
        imgList.push(finalImage[i][l]);
      }
      console.log(imgList);
      var obj = {
        sku,
        combination_string: tempComb,
        quantity,
        cost_price: costprice,
        sale_price: saleprice,
        discount,
        weight,
        isSoldOut: soldout,
        isComingSoon: comingsoon,
        primaryImage: imgList[0] || null,
        secondaryImage: imgList[1] || null,
        image_one: imgList[2] || null,
        image_two: imgList[3] || null,
        image_three: imgList[4] || null,
      };
      temp.push(obj);
    }
    console.log(temp);
    const finalObj = {
      ProductInfo: {
        product_name: productName,
        description: draftToHtml(convertToRaw(editorState.getCurrentContent())),
        details: draftToHtml(convertToRaw(buyReturn.getCurrentContent())),
        shipping_details: draftToHtml(
          convertToRaw(detailOfTheProduct.getCurrentContent())
        ),
        usp: productUsp,
        is_removed: isRemoved,
        keywords: "",
        is_deactivated: deactivated,
      },
      ProductVariations: temp,
      ProductAttributes: finalImage,
      ProductCategory: category,
    };
    console.log(finalObj);
    {
      /*}
    if (
      productName == "" ||
      productUsp == "" ||
      description == "" ||
      productBuyReturn == "" ||
      detail == "" ||
      category == null ||
      temp.length == 0 ||
      finalImage.length == 0
    ) {
      alert("please Enter the required field");
    } */
    }

    postNewProduct(finalObj)
      .then((res) => {
        if (res.code == 1) {
          alert("Product uploaded");
        } else {
          alert(res.message);
        }
      })
      .catch((err) => {
        alert(err);
      });
    console.log("FINAL OBJECT : ", finalObj);
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ padding: "30px" }}>
        <Grid container justify="center">
          <Grid item md={12}>
            <label htmlFor="productname">Product Name</label>
            <TextField
              required
              value={productName}
              onChange={handleProductName}
              variant="outlined"
              id="productname"
              helperText="Product name in any language"
              type="text"
              fullWidth
              label="Enter the product name"
            />
            <label htmlFor="usp">product USP</label>
            <TextField
              required
              value={productUsp}
              onChange={handleProductUsp}
              variant="outlined"
              id="usp"
              helperText="One line usp"
              type="text"
              fullWidth
              label="Enter one line USP"
            />
            {/* <label htmlFor="shippingdetail">product shipping Detail</label>
                        <TextField  value={productShippingDetail} onChange={handleProductShippingDetail}  variant="outlined" id="shippingdetail" helperText="One line usp" type="text" fullWidth  label="Enter product shipping detail"/>
                         */}
            <label htmlFor="productdescription">Product Description</label>
            <Editor
              editorState={editorState}
              onEditorStateChange={handleDescription}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
            />
            <label htmlFor="productbuyreturn">
              Shipping detail & Buy/Return Policy
            </label>
            <Editor
              editorState={buyReturn}
              onEditorStateChange={handleBuyReturn}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
            />
            <label htmlFor="detail">Details</label>
            <Editor
              editorState={detailOfTheProduct}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
              onEditorStateChange={handleDetail}
            />
            <Grid container style={{ marginTop: "15px" }}>
              <Grid style={{ padding: "5px" }} xs={12} sm={12} item md={2}>
                <h4>Categories</h4>
                <Select value={category} onChange={handleCategories} fullWidth>
                  <MenuItem value="" disabled>
                    Please Selct
                  </MenuItem>
                  {categoryList.map((category) => (
                    <MenuItem
                      key={category.catId}
                      id={category.catId}
                      value={category.catId}
                    >
                      {category.catName}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid style={{ padding: "5px" }} xs={12} sm={12} item md={2}>
                <h4>Collections</h4>
                <Select
                  value={collection}
                  multiple
                  onChange={handleCollections}
                  fullWidth
                >
                  {collectionsList.map((col) => (
                    <MenuItem
                      key={col.collectionId}
                      id={col.collectionId}
                      value={col.collectionId}
                    >
                      {col.title}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
            </Grid>
            <h4>Attribute</h4>
            <Grid container>
              {attributesList.map((att) => (
                <Grid key={att.attId} md={2}>
                  <label htmlFor={att.attributeName}>{att.attributeName}</label>
                  <Checkbox
                    id={att.attId}
                    onChange={(e) =>
                      handleCheckbox(e, att.attributeName, att.attId)
                    }
                  />
                </Grid>
              ))}
            </Grid>
            <Grid id="attribute" container>
              {attribute.length > 0
                ? uiCount.map((item) => <div key={item.id}>{ui(item)}</div>)
                : null}
              {attribute.length > 0 ? (
                <Button
                  onClick={handleReRender}
                  style={{ margin: "5px 0px" }}
                  variant="contained"
                  color="primary"
                >
                  Add Data
                </Button>
              ) : null}
            </Grid>
            <Grid container>
              <Grid item={2} style={{ marginRight: "5px" }}>
                <Button
                  color="primary"
                  onClick={handleIsRemoved}
                  variant="contained"
                >
                  Is Removed
                </Button>
              </Grid>
              <Grid item={2}>
                <Button
                  color="primary"
                  onClick={handleDeactivated}
                  variant="contained"
                >
                  Deactivated
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <Paper style={{ marginTop: "10px", padding: "30px" }}>
        {/* <Grid container> 
                    <Grid item md={12}>
                        <Grid container>
                            <Grid item xs={12} sm={12} md={6}>
                                <label style={{marginTop:'20px'}} htmlFor="ProductSalePrice" >Product Cost Price</label><br/>
                                <TextField required value={productSalePrice} onChange={handleProductSalePrice} fullWidth variant="outlined"  type="number" helperText="In PKR" id="ProductSalePrice" label="Enter Product Cost"/>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                                <label style={{marginTop:'20px'}} htmlFor="ProductCostPrice" >Product Sale Price</label><br/>
                                <TextField required value={productCostPrice} onChange={handleProductCostPrice} fullWidth variant="outlined" style={{marginLeft:'3px'}} type="number" helperText="In PKR" id="ProductCostPrice" label="Enter Product Sale Price"/>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                                <label style={{marginTop:'20px'}} htmlFor="productWeight" >Product Weight</label><br/>
                                <TextField required value={productWeight} onChange={handleProductWeight} fullWidth variant="outlined"  type="number" id="productWeight" helperText="In Grams" label="Enter Product Weight"/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid> */}
        <Button
          variant="contained"
          onClick={() => SubmitData()}
          style={{ margin: "5px" }}
          color="primary"
        >
          Submit Data
        </Button>
      </Paper>
    </ThemeProvider>
  );
};

export default UpdateAddProduct;
