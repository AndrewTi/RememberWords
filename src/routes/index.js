import Route from '../../libs/route';
import login from '../controllers/login';

const router = new Route();

router.register('login', login);

export default router;