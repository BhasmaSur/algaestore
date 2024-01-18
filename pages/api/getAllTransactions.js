import { getAllTransactions } from '../../app/services/transactonService';

export default async function handler(req, res) {
  const transactionsList = await getAllTransactions();
  if (transactionsList) {
    res.status(200).json(transactionsList);
  }
}
