import { db } from '../services/firebaseService';
import { doc, setDoc } from "firebase/firestore";


export const addProducts = async () => {
    try {
        const formattedProductId = `product_${product_id.toString().padStart(5, '0')}`;

        await setDoc(doc(db, "as_product_col",formattedProductId)), {
            product_id,
            weight,
            ingredients,
            supplier,
            price,
            image_url,
            name,
            brand,
            description,
        };

        return res.status(201).json({
            message: 'Product added sucessfully'
        })
    }
    catch (error) {
        console.error("Error adding product:", error);
        return res.status(500).json({
            error: 'An error occured'
        });
    }
}