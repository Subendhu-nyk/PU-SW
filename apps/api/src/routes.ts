import { Router } from 'express';
import { authRoutes } from './modules/auth/auth.routes';

const router = Router();

router.use('/auth', authRoutes);
// Add other module routes here
// router.use('/users', userRoutes);
// router.use('/products', productRoutes);

export const routes = router;
