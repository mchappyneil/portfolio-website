import { useRef } from 'react';
import { auth, db, storage } from '../../firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { addDoc } from 'firebase/firestore/lite';
import { collection } from 'firebase/firestore/lite'

const Home = () => {
    const form = useRef();

    const submitPhoto = (e) => {
        e.preventDefault();
        const name = form.current[0]?.value;
        const description = form.current[1]?.value;
        const image = form.current[2]?.files[0];

        const storageRef = ref(storage, `photography/${image.name}`);

        uploadBytes(storageRef, image).then(
            (snapshot) => {
                getDownloadURL(snapshot.ref).then((downloadUrl) => {
                    savePhoto({
                        name,
                        description,
                        image: downloadUrl
                    })
                }, (error) => {
                    console.log(error);
                    savePhoto({
                        name,
                        description,
                        image: null
                    })
                })
            }, (error) => {
                console.log(error);
                savePhoto({
                    name,
                    description,
                    image: null
                })
            }
        )
    }

    const savePhoto = async (photo) => {
        try {
            await addDoc(collection(db, 'photography'), photo)
            window.location.reload(false);
        } catch (error) {
            alert('Failed to add photo to photography collection')
        }
    }

    return (
        <div className="dashboard">
            <form ref={form} onSubmit={submitPhoto}>
                <p><input type="text" placeholder="Name" /></p>
                <p><textarea placeholder="Description"/></p>
                <p><input type="file" placeholder="Image" /></p>
                <button type="submit">Submit</button>
                <button onClick={() => auth.signOut()}>Sign Out</button>
            </form>
        </div>
    )
}

export default Home;