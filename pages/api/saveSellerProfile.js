import { saveProfile } from '../../app/services/profileService';

export default async function handler(req, res) {
  if (!req.body) {
    res.statusCode = 404;
    res.end('Error');
    return;
  }
  let productIdsList = []
  let changedProfileData = req.body;
  if(changedProfileData.publishedProducts){
    changedProfileData.publishedProducts.map((prod)=>{
      productIdsList.push(prod.product_id)
    })
  }
  changedProfileData.publishedProducts = productIdsList;
  const isSaved = await saveProfile(changedProfileData)
  res.json(isSaved)
}
