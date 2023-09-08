import { db } from '../services/firebaseService';
import { collection, getDocs } from "firebase/firestore";

export const allProducts = async (productId) => {
    try {

        const productDataArray = [];

        const querySnapshot = await getDocs(collection(db, "as_product_col"));
        querySnapshot.forEach((doc) => {
                const productData = doc.data()
                productDataArray.push(productData)            
        });

        return productDataArray;
    }

    catch (error) {
        console.error("Error fetching prodcut", error);
        throw error;
    }


    
}