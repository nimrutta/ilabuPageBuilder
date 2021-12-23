import React, { useState } from "react";

export default function Photo() {
    const [id, setId] = useState('id');
    const [imageUrl, setImageUrl] = useState(null);

    const buildImgTag = () => {
        let imgTag = null;
        if (imageUrl !== null)
          imgTag = (<div className="row">
                      <div className="small-9 small-centered columns">
                        <img className="thumbnail" src={imageUrl} width={400} height={300} 
                        style={{objectFit: 'cover'}}/>
                      </div>
                    </div>);
        return imgTag;
      }
      
    const readURI = (e) => {
    if(e.target.files && e.target.files[0]){
        let reader = new FileReader();
        reader.onload = function(ev){
        setImageUrl(ev.target.result);
        }.bind(this);
        reader.readAsDataURL(e.target.files[0]);
    }
    }

    const handleChange = (e) => {
    readURI(e); // maybe call this with webworker or async library?
    }
   
    const imgTag = buildImgTag();

    const upload = "upload.png"

    return <div>
        <input type="file" id={id} name="imgInp" accept="image/*"  
            style={{zIndex: 1000, width: '8rem', height: '8rem', position: 'absolute', opacity: 0}}
            onChange={handleChange}/>
        {imgTag}
        {imageUrl === null && <div>
          <label for={id} style={{display: 'block', color:'grey', fontSize: '12px', fontWeight: 700}}>Upload a photo</label>
          <img src= {upload} style={{width: '6rem', height: '6rem'}} />  
        </div>
        }
    </div>
}
