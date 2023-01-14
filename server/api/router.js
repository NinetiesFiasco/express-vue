import {cats, dogs} from './routes'
const router = express.Router()

router.use('api/cats', cats)
router.use('api/dogs', dogs)

module.exports = router