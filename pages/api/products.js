import { getProductsInArray } from "../../app/services/productService";
import { productDetails } from "../../app/utils/productUtils";


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
      if(method === 'GET'){
        const productId = query.productId
        const productData = await getProductsInArray([productId])
        // console.log("Product id", productId)
        if(productData.length){
          res.status(200).json(productData);
        }
        else{
          console.log("Product not found");
          res.status(404).json({message : "Product not found"});
        }
      }
      else {
        res.status(405).json({message : 'Method not allowed'})
      }
  }

  catch (error) {
    console.error("Error fetching prodcut", error);
    res.status(500).json({ message: "Error Fetching product" })
  }

}

