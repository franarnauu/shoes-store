import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { doc, getDoc } from "firebase/firestore"
import { db } from '../firebase/config';
import Loader from './Loader';

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const id = useParams().id;

    useEffect(() => {
        const docRef = doc(db, "Shoes", id);
        getDoc(docRef)
            .then((resp) => {
                setItem({ ...resp.data(), id: resp.id });
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
                setLoading(false);
            });
    }, [id]);

    return (
        <div>
            {loading ? (
                <Loader />
            ) : (
                item && <ItemDetail product={item} />
            )}
        </div>
    )
}

export default ItemDetailContainer;