import { useState } from 'react';
import '../Styling/myimage.css'

type SingleImageType = {
  url: string;
  filename: string;
};

type MyImageProps = {
  img: SingleImageType[];
};



function MyImage({ img }: MyImageProps) {

const[mainImage,setMainImage]=useState(img[0])
  return (
    <div className="imagecards">
        <div className="grid-four-rows">
          {img.map((currElem,index)=>{
            return(
              <figure  key={index}>
                <img src={currElem.url} alt={currElem.filename} 
                onClick={()=>setMainImage(currElem)}
                />

              </figure>
            )
          })}
        </div>

         <div className="grid-second-row">
          <img src={mainImage.url} alt={mainImage.filename} />
        </div>
    </div>

    
  );
}

export default MyImage;