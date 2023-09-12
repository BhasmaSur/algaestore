import { getSellerProfileById } from '../../app/services/profileService';

export default async function handler(req, res) {
  if (!req.body) {
    res.statusCode = 404;
    res.end('Error');
    return;
  }
  const { userId } = req.body;
  if (userId) {
    const profileDetails = await getSellerProfileById(userId)
    if(profileDetails){
        res.json(profileDetails)
    }
  }
}
