import { updateTransactionStatus } from '../../app/services/transactonService';

export default async function handler(req, res) {
  if (!req.body) {
    res.statusCode = 404;
    res.end('Error');
    return;
  }

  updateTransactionStatus(req.body).then((src) => {
    if (src) {
      res.json({
        updateStatus: src.updateStatus,
      });
    }
  });
}
