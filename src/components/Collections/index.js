import React, { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, orderBy, where } from "firebase/firestore/lite";
import { db } from "../../firebase";

const Collection = () => {
    const { collectionName } = useParams();
    const collectionNameArr = collectionName.split("");
    const [letterClass, setLetterClass] = useState('text-animate');
    const [photo, setPhoto] = useState([]);

    useEffect(() => {
      const timeout = setTimeout(() => {
        setLetterClass('text-animate-hover');
      }, 3000)
      return () => clearTimeout(timeout);
    }, []);
    
    useEffect(() => {
            getPhoto();
        }, [collectionName])
    
    const getPhoto = async () => {
            const photosRef = query(
                collection(db, 'photography'), 
                where("collection", "==", collectionName), 
                orderBy("position")
            );
            const queryThumbnail = await getDocs(photosRef);
            setPhoto(queryThumbnail.docs.map((doc) => doc.data()));
        }
    
    const renderPhoto = (photo) => {
    return (
        <div className="images-container">
            {
                photo.map((pic, idx) => {
                    return (
                        <div className="image-box" key={idx}>
                            <img 
                            src={pic.image}
                            className="photography-img"
                            alt="" 
                            />
                            <div className="content">
                                <p className="title">{pic.name}</p>
                                <h4 className="desc">{pic.description}</h4>
                                <button
                                    className="btn"
                                    onClick={() => window.open(pic.image)}>
                                    View</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

    return (
        <div className='container collection-page'>
            <h1 className='page-title'>
                <AnimatedLetters 
                letterClass={letterClass} 
                strArray={collectionNameArr}
                idx={15}
                />
            </h1>
            <div>{renderPhoto(photo)}</div>
        </div>
    );
};

export default Collection;