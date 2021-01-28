import React, { useEffect, useState } from 'react';

import {  
    Paper
} from "@material-ui/core";

import {getImages} from '../../Database/GetMethods'


const Gallery = () =>{
    
    const [loading,setLoading] = useState(true);
    const [comingImages,setComingImages] = useState([]);

    useEffect(()=>{
    
        getImages()
        .then(res=>{
            setComingImages(res)
            setLoading(false)
        })
    
    },[])

    const handleImage = (e) =>{

        console.log(e.target.files[0])
    
    }
    return(
        <>
            {
            loading ?
            <div className="container">
                <p className="text-center">
                    Loading...
                </p>
            </div>
            :
            <Paper>
            <div>
                <input 
                    style={{height:'100px',padding:'5px',width:'150px',overflow:'hidden'}}
                    type="file"
                    onChange={handleImage}  
                />
                {
                    comingImages ? 
                    comingImages.map(img=>(
                        <img key={img} src={img.url} style={{height:'150px',width:'150px',padding:'5px',margin:'5px auto'}} />
                    ))
                    :null
                }
            </div>
            </Paper>
            }
        </> 
    )
}

export default Gallery;