import { Router } from "express";
import User from "../models/User.js";
import Transaction from "../models/Transaction.js";

const router = Router();

router.post('/set-balance', async (req, res) => {
    try {
        const { idUser } = req.body
        // TO-DO User -> Schema & Model
    } catch (error) {

    }
})

// Входящие транзакции
router.post('/add', async (req, res) => {
    try {
        const { userId, amount } = req.body;
        const transaction = await Transaction.create({
            type: 'income',
            amount
        });
        const user = await User.findByIdAndUpdate(userId, { $push: { transaction }, $inc: { currentBalance: transaction.amount } }, { new: true })
        res.status(201).json({ message: 'Income transaction created' })
    } catch (error) {

    }
})

// Исходящие транзакции
router.post('/remove', async (req, res) => {
    try {

    } catch (error) {
        console.log('Что то пошло не так...')
        res.status(500).json({ message: error.message })
    }
})

// Передать баланс другому пользователю
router.post('/transfer', async (req, res) => {
    try {
        const { sendId, getId, amount } = req.body
        const transaction = Transaction.create()
    } catch (error) {
        console.log('Что то пошло не так...')
        res.status(500).json({ message: error.message })
    }
})

export default router