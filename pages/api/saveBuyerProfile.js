import { saveProfile } from '../../app/services/profileService';

export default async function handler(req, res) {
  if (!req.body) {
    res.statusCode = 404;
    res.end('Error');
    return;
  }
  let wislists = []
  let orderHistory = []
  let changedProfileData = req.body;
  if(changedProfileData.wishlist){
    changedProfileData.wishlist.map((prod)=>{
      wislists.push(prod.product_id)
    })
  }

  if(changedProfileData.orderHistory){
    changedProfileData.orderHistory.map((ord)=>{
      orderHistory.push(ord.transactionId)
    })
  }
  changedProfileData.wishlist = wislists;
  changedProfileData.orderHistory = orderHistory
  const isSaved = await saveProfile(changedProfileData)
  res.json(isSaved)
}
