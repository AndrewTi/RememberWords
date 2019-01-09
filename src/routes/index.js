// libs
import Route from '../../libs/route';

// controllers
import login from '../controllers/login';
import home from '../controllers/home';

const router = new Route();

router.register('login', login);
router.register('home', home);

export default router;