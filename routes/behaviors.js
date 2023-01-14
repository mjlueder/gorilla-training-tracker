import { Router } from 'express'
import * as behaviorsCtrl from '../controllers/behaviors.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', isLoggedIn, behaviorsCtrl.index)

// router.post('/', isLoggedIn, gorillasCtrl.create)

export {
  router
}
