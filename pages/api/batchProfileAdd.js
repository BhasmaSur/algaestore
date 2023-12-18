import { saveBatchProfiles } from '../../app/services/profileService';

export default async function (req, res) {
  if (!req.body) {
    res.statusCode = 404;
    res.end('Error');
    return;
  }

  const { userDetailsBatch } = req.body;

  if (Array.isArray(userDetailsBatch)) {
    saveBatchProfiles(userDetailsBatch).then((src) => {
      if (src) {
        if (src.batchRunStaus) {
          res.json({
            batchAddStatus: true,
          });
        } else {
          res.json({
            batchAddStatus: false,
          });
        }
      }
    });
  }
}
