import { db } from "../../app/services/firebaseService";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";

export const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export default async function handler(req, res) {
    const { method, query } = req;

    if (!req.body) {
        res.status(404).end('Error');
        return;
    }

    try {
        if (method === 'POST') {
            // const datas = {
            //     "supplier": "Madan Kashyap",
            //     "name": "Fresh Kelp",
            //     "brand": "Ocean Delights",
            //     "product_id": "122",
            //     "description": "A delicious and nutritious seaweed snack with a hint of sea salt. A delicious and nutritious seaweed snack with a hint of sea salt. A delicious and nutritious seaweed snack with a hint of sea salt. A delicious and nutritious seaweed snack with a hint of sea salt.",
            //     "price": 3.99,
            //     "type": "Harvested",
            //     "image_url": "https://www.salamat.gr/image/cache/catalog/GEORGINA%20ESHOP/04-03-22/EE11002-1080x1080.png",
            //     "ingredients": [
            //         {
            //             "Sea Salt": "5g",
            //             "Organic Seaweed": "50g",
            //             "Spices": "2g",
            //             "Sunflower Oil": "15ml",
            //             "Natural Flavors": "N/A"
            //         }
            //     ],
            //     "subType": "Wet Seaweed",
            //     "weight": "",
            //     "location": "Dariaoganj"
            // }

            const data = {
                "name": "Recycled Paper Pulp",
                "supplier": "Madan Kashyap",
                "brand": "EcoPaper",
                "product_id": "137",
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
            

            await setDoc(doc(db, "as_product_col", "product_00137"), data)
            res.status(200).json({ message: "Product added successfully" });
        }

    }

    catch (error) {
        console.error("Error adding prodcut", error);
        res.status(500).json({ message: "Error ADDING product" })
    }
}