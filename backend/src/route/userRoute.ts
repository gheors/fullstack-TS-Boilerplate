import express from 'express';
import { authenticateUser, registerUser } from '../controller/userControl';

const router = express.Router();

router.post('/register', async (req, res) => {
    const token = await registerUser(req, res)
    res.status(200).send({ token: token })

})
// router.post('/register', registerUser)
router.post('/login', authenticateUser)

export default router;
