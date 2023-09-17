import { getLastProductId, getNextProductId, saveProduct } from "../../app/services/productService";
import { PRODUCT_HEAD } from "../../app/constants/productDetails";
import { ERROR_MESSAGE } from "../../app/constants/errorMessage";

export const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export default async function handler(req, res) {
    if (!req.body) {
        res.status(404).end('Error');
        return;
    }
    const lastProductId = await getLastProductId();
    if(lastProductId){
      const nextProductId = parseInt(getNextProductId(lastProductId)) + 1;
      let payload = req.body;
      payload.product_id = PRODUCT_HEAD + nextProductId;
      payload.image_url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcCYlbmB_utS2Q4XOkr7NYRk0CUhdFI5ABJQ&usqp=CAU';
      const isSaved = await saveProduct(payload);
      if(isSaved){
        res.status(200).json(payload.product_id);
      }else{
        res.status(500).json({message : ERROR_MESSAGE.SOMTHING_WRONG})
      }
    }else{
      res.status(500).json({message : ERROR_MESSAGE.SOMTHING_WRONG})
    }
}