import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";
import Loader from "./Loader";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const category = useParams().category;

    useEffect(() => {
        const fetchProductos = async () => {
            const productosRef = collection(db, "Shoes");
            const q = category ? query(productosRef, where("Category", "==", category)) : productosRef;

            try {
                const querySnapshot = await getDocs(q);
                const productosData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setProductos(productosData);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data: ", error);
                setLoading(false);
            }
        };

        fetchProductos();
    }, [category]);

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <ItemList productos={productos} />
            )}
        </>
    );
};

export default ItemListContainer;