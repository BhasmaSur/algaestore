import { db } from '../services/firebaseService';
import { collection, getDocs } from "firebase/firestore";

export const productDetails = async (productId) => {
    try {

        const productDataArray = [];

        const querySnapshot = await getDocs(collection(db, "as_product_col"));
        querySnapshot.forEach((doc) => {
            const docID = doc.id
            const extractedProductId = parseInt(docID.split("_")[1]);
            const numbericalProdcutId = parseInt(productId);
            // console.log("extractedProductId", extractedProductId)
            // console.log("productId", productId)
            if(extractedProductId === numbericalProdcutId){
                const productData = doc.data()
                productDataArray.push(productData)
            }
            // const res = JSON.stringify(doc.data())
            // console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
            // productDataArray.push(res);
            
        });

        return productDataArray;
    }

    catch (error) {
        console.error("Error fetching prodcut", error);
        throw error;
    }


    
}