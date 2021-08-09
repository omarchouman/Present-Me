import express from 'express';
 const router = express.Router();
 import {registerUser, authUser} from '../Controllers/userController.js'


 router.post('/', registerUser)
 router.post('/login', authUser)


 export default router