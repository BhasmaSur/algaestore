import { db } from "../../app/services/firebaseService";
import {
    collection,
    doc,
    getDocs,
    setDoc,
    query,
    orderBy,
    limit,
} from "firebase/firestore";

export const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

async function generateNextProductId() {
    const productCollection = collection(db, "as_product_col");
    const productQuery = query(
      productCollection,
      orderBy("name", "desc"),
      limit(1)
    );
  
    const lastProductSnapshot = await getDocs(productQuery);
    let lastProductId = "00100"; // Default starting value if no documents exist
  
    if (!lastProductSnapshot.empty) {
      // Extract the numeric part from the last document's name
      const lastProductData = lastProductSnapshot.docs[0].data();
      const lastProductIdMatch = lastProductData.product_id.match(/^product_(\d+)$/);
  
      if (lastProductIdMatch) {
        lastProductId = lastProductIdMatch[1];
      }
    }
  
    // Increment the last numeric part and format it with leading zeros
    const nextProductId = `product_${String(Number(lastProductId) + 1).padStart(
      lastProductId.length,
      "0"
    )}`;
    console.log('nextproductid', nextProductId)
    return nextProductId;
  }
  

export default async function handler(req, res) {
    const { method, query } = req;

    // if (!req.body) {
    //     res.status(404).end('Error');
    //     return;
    // }

    try {
        if (method === 'POST') {

            const nextProductId = await generateNextProductId();
            
            const data = {
                "name": "test2",
                "supplier": "Madan Kashyap",
                "brand": "EcoPaper",
                "product_id": nextProductId,
                "description": "Sustainable recycled paper pulp made from post-consumer waste, perfect for eco-friendly packaging solutions. Dive into the ocean's goodness with every environmentally responsible choice.",
                "price": 3.99,
                "type": "Processed",
                "subType": "Cellulosic Residue",
                "image_url": "https://example.com/recycled-paper-pulp-image.jpg",
                "ingredients": [{
                    "Recycled Paper Pulp": "120g"
                }],
                "weight": "150g",
                "location": "Dariaoganj"
            }


            // await setDoc(doc(db, "as_product_col", nextProductId), data)
            res.status(200).json({ message: "Product added successfully" });
        }

    }

    catch (error) {
        console.error("Error adding prodcut", error);
        res.status(500).json({ message: "Error ADDING product" })
    }
}