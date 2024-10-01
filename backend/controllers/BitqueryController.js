
const BitqueryServices = require('../services/BitqueryServices')

exports.getTransactions = async (req, res) => {
    const transactions = await BitqueryServices.getTransactions();
    res.status(200).json(transactions)
}