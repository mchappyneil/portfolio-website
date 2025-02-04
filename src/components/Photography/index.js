import React, { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { getDocs, collection, query, orderBy } from "firebase/firestore/lite";
import { db } from '../../firebase'

const Photography = () => {
    const photoStrArr = "My Photography".split("");
    const [letterClass, setLetterClass] = useState('text-animate');
    const [collections, setCollections] = useState({});
    // const [photo, setPhoto] = useState([]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000)
        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        getPhoto();
    }, [])

    const getPhoto = async () => {
        const photosRef = query(collection(db, 'photography'), orderBy('position'));
        // const queryThumbnail = await getDocs(photosRef);
        const querySnapshot = await getDocs(photosRef);

        const groupedPhotos = {};
        querySnapshot.docs.forEach((doc) => {
          const data = doc.data();
          const { collection: collectionName } = data;

          if (!groupedPhotos[collectionName]) {
            groupedPhotos[collectionName] = [];
          }
          groupedPhotos[collectionName].push(data);
        });

        setCollections(groupedPhotos)
        // setPhoto(querySnapshot.docs.map((doc) => doc.data()));
        // setPhoto(queryThumbnail.docs.map((doc) => doc.data()));
    }
    
    const renderCollections = () => {
      return Object.entries(collections).map(([collectionName, images]) => (
        <div key={collectionName} className="collection-card" onClick={() => handleCollectionClick(collectionName)}>
            <div className="thumbnail-container">
              {images.slice(0, 5).map((image, index) => (
                <img
                  key={index}
                  src={image.image}
                  alt=""
                  className="thumbnail"
                  style={{ transform: `translateX(${index * 15}px)` }}
                />
              ))}
              </div>
              <div className="overlay">
                <h2 className="collection-name">{collectionName}</h2>
              </div>
        </div>
      ));
    }

    const handleCollectionClick = (collectionName) => {
      window.open(`/collection/${collectionName}`, '_blank');
    }
    // const renderPhoto = (photo) => {
    //     return (
    //         <div className="images-container">
    //             {
    //                 photo.map((pic, idx) => {
    //                     return (
    //                         <div className="image-box" key={idx}>
    //                             <img 
    //                             src={pic.image}
    //                             className="photography-img"
    //                             alt="" 
    //                             />
    //                             <div className="content">
    //                                 <p className="title">{pic.name}</p>
    //                                 <h4 className="desc">{pic.description}</h4>
    //                                 <button
    //                                     className="btn"
    //                                     onClick={() => window.open(pic.image)}>
    //                                     View</button>
    //                             </div>
    //                         </div>
    //                     )
    //                 })
    //             }
    //         </div>
    //     );
    // }

    return (
        <>
        <div className="container photography-page">
            <h1 className="page-title">
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={photoStrArr} 
                    idx={15}
                />
            </h1>
            <div className="collections-container">{renderCollections()}</div>
        </div>
        </>
    );
}

export default Photography
