import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const products = [
        { id: 1, title: "Nike Dunk Low Panda", description: "Nike Dunk Low sneakers with panda design.", price: 250, category: "Nike", image: "nike-dunk-low-panda.png" },
        { id: 2, title: "Adidas Ultraboost", description: "Adidas Ultraboost sneakers with Boost technology.", price: 180, category: "Adidas", image: "adidas-ultraboost.png" },
        { id: 3, title: "Nike Air Jordan 4 Retro", description: "Iconic Nike Air Jordan 4 Retro sneakers, blending retro aesthetics with modern style.", price: 120, category: "Nike", image: "nike-air-jordan-4-retro.png" },
        { id: 4, title: "Nike Air Max 90", description: "Nike Air Max 90 sneakers, classic and comfortable.", price: 200, category: "Nike", image: "nike-air-max-90.png" },
        { id: 5, title: "Adidas Superstar", description: "Adidas Superstar sneakers with an iconic shell-toe design.", price: 150, category: "Adidas", image: "adidas-superstar.png" },
        { id: 6, title: "Vans Old Skool", description: "Vans Old Skool sneakers with the classic side stripe.", price: 80, category: "Vans", image: "vans-old-skool.png" },
        { id: 7, title: "New Balance 990", description: "New Balance 990 sneakers with superior cushioning.", price: 220, category: "NewBalance", image: "new-balance-990.png" },
        { id: 8, title: "Nike React Element 55", description: "Nike React Element 55 sneakers with a futuristic style.", price: 180, category: "Nike", image: "nike-react-element-55.png" },
        { id: 9, title: "Adidas NMD R1", description: "Adidas NMD R1 sneakers with a modern design and lightweight feel.", price: 160, category: "Adidas", image: "adidas-nmd-r1.png" },
        { id: 10, title: "Vans Sk8-Hi", description: "Vans Sk8-Hi sneakers, ideal for skateboarding.", price: 90, category: "Vans", image: "vans-sk8-hi.png" },
        { id: 11, title: "New Balance 997", description: "New Balance 997 sneakers with a classic style and durability.", price: 200, category: "NewBalance", image: "new-balance-997.png" },
        { id: 12, title: "Nike Air Force 1", description: "Nike Air Force 1 sneakers, iconic and versatile.", price: 170, category: "Nike", image: "nike-air-force-1.png" },
        { id: 13, title: "Adidas Gazelle", description: "Adidas Gazelle sneakers with a retro design and comfort.", price: 130, category: "Adidas", image: "adidas-gazelle.png" },
        { id: 14, title: "Vans Slip-On", description: "Vans Slip-On sneakers, easy to put on with a casual style.", price: 75, category: "Vans", image: "vans-slip-on.png" },
        { id: 15, title: "New Balance 574", description: "New Balance 574 sneakers, classic and elegant.", price: 180, category: "NewBalance", image: "new-balance-574.png" },
        { id: 16, title: "Nike Air Max 97", description: "Nike Air Max 97 sneakers with a futuristic design and cushioning.", price: 220, category: "Nike", image: "nike-air-max-97.png" },
        { id: 17, title: "Adidas Yeezy Boost 350", description: "Adidas Yeezy Boost 350 sneakers designed by Kanye West.", price: 300, category: "Adidas", image: "adidas-yeezy-boost-350.png" },
        { id: 18, title: "Vans Era", description: "Vans Era sneakers with a classic style and resistance.", price: 70, category: "Vans", image: "vans-era.png" },
        { id: 19, title: "New Balance 990v5", description: "New Balance 990v5 sneakers with state-of-the-art technology.", price: 230, category: "NewBalance", image: "new-balance-990v5.png" },
        { id: 20, title: "Nike Blazer Mid", description: "Nike Blazer Mid sneakers with a retro design and durable sole.", price: 160, category: "Nike", image: "nike-blazer-mid.png" },
    ];


    useEffect(() => {
        // Evitar llamadas recursivas innecesarias si el producto ya está cargado
        if (product && product.id === parseInt(productId)) {
            return;
        }

        // Establecer el estado de carga a true
        setLoading(true);

        // Simular una llamada a una API con un temporizador
        const timer = setTimeout(() => {
            const selectedProduct = products.find((p) => p.id === parseInt(productId));

            if (selectedProduct) {
                setProduct(selectedProduct);
            } else {
                console.error(`Product with ID ${productId} not found`);
            }

            // Establecer el estado de carga a false después de cargar el producto
            setLoading(false);
        }, 1000);

        // Limpiar el temporizador al desmontar el componente o cuando cambie productId
        return () => clearTimeout(timer);
    }, [productId, products, product]);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : product ? (
                <ItemDetail product={product} />
            ) : (
                <p>No product found for the selected ID.</p>
            )}
        </div>
    );
};

export default ItemDetailContainer;