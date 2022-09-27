import { Router } from 'express';
import * as UsersService from '../services/users/index.js';
const router = Router();

router.get('/', UsersService.getUsers);
router.post('/',UsersService.createUser);

export default router;
