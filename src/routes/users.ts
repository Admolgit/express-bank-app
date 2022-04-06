var express = require('express');
var router = express.Router();
import { allBalances, createAccount, individualBalance, transfer } from '../../users';
import { balance, validate, transaction } from "../../inputValidator"

// let validate = require('')


/* GET users listing. */

console.log("GOT HEREEEEEEEEEE")


// router.route('/balances').get(allBalances);
router.get('/balances', allBalances);

router.route('/create-account').post(validate(balance), createAccount);

// router.route('/balance/:accountNumber').get(individualBalance);
router.get('/balances', individualBalance)

router.route('/transfer').post(validate(transaction), transfer);

export default router;
