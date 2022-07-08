import  { useRef, useState } from 'react'
import GalleryImage from "../../../Images/GalleryImage.jpg"
import GalleryImage1 from "../../../Images/GalleryImage1.jpg"
import GalleryImage2 from "../../../Images/GalleryImage2.jpg"
import GalleryImage3 from "../../../Images/GalleryImage3.jpg"

const GalleryLogic = () => {

    
  const topRowRef: any = useRef();
  const bottomRowRef: any = useRef();


    const topRow = [
        {
            image: GalleryImage,
        },
        {
            image: GalleryImage1,
        },
        {
            image: GalleryImage2,
        },
        {
            image: GalleryImage3,
        }, 
    ]
    
    const bottomRow = [
        {
            image: GalleryImage1,
        },
        {
            image: GalleryImage3,
        }, 
        {
            image: GalleryImage,
        },
        {
            image: GalleryImage2,
        },
    
    ]
    
    const [topArray, setTopArray] = useState(topRow);
    const [bottomArray, setBottomArray] = useState(bottomRow);
    
    const scrollLeft = () => {
        if (topRowRef.current) {
            topRowRef.current.scrollBy({
                top: 0,
                left: 30,
                behavior: "smooth",
            });
        }
        const lastImage = topArray[topArray.length - 1];
        topArray.pop();
        setTopArray([lastImage, ...topArray]);
        console.log(topArray)
    };
    
    const scrollRight = () => {
            if (bottomRowRef.current) {
                bottomRowRef.current.scrollBy({
                    top: 0,
                    left: -30,
                    behavior: "smooth",
                });
            }
            const lastImage = bottomArray[bottomArray.length - 1];
            bottomArray.pop();
            setBottomArray([lastImage, ...bottomArray]);
            console.log(bottomArray);
        };
    

  return {scrollLeft, scrollRight, topArray,bottomArray, topRowRef, bottomRowRef}
}

export default GalleryLogic