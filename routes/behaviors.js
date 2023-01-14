import { Router } from 'express'
import * as behaviorsCtrl from '../controllers/behaviors.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', behaviorsCtrl.index)
router.get('/new', isLoggedIn, behaviorsCtrl.new)
router.get('/:id', isLoggedIn, behaviorsCtrl.show)
router.get('/:id/edit', isLoggedIn, behaviorsCtrl.edit)

router.post('/', isLoggedIn, behaviorsCtrl.create)

export {
  router
}
