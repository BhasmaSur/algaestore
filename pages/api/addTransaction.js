import { ERROR_MESSAGE } from '../../app/constants/errorMessage';
import { TRANSACTION_HEAD } from '../../app/constants/transactionDetails';
import {
  addTransaction,
  getLastTransactionId,
  getNextTransactionId,
} from '../../app/services/transactonService';

export default async function handler(req, res) {
  if (!req.body) {
    res.statusCode = 404;
    res.end('Error');
    return;
  }
  const transactionData = req.body;
  const lastTransactionId = await getLastTransactionId();
  if (lastTransactionId) {
    const nextTransactionId =
      parseInt(getNextTransactionId(lastTransactionId)) + 1;
    transactionData.transactionId = TRANSACTION_HEAD + nextTransactionId;
    const isSaved = await addTransaction(transactionData);
    if (isSaved) {
      res.status(200).json(transactionData.transactionId);
    } else {
      res.status(500).json({ message: ERROR_MESSAGE.SOMTHING_WRONG });
    }
  } else {
    res.status(500).json({ message: ERROR_MESSAGE.SOMTHING_WRONG });
  }
}
