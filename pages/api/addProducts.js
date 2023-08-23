import { addProducts } from "../../app/utils/addProductUtils";

export const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };

  
  export default async function handler(req, res){
    const {method, query} = req;

    if(!req.body){
        res.status(404).end('Error');
        return;
    }

    try{
        if(method == 'POST'){
            const { product_id, location, weight, ingredients, supplier, price, image_url, name, brand, description } = req.body;
            
        }
    }


  }