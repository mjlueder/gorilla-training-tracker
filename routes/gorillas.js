import { Router } from 'express'
import * as gorillasCtrl from '../controllers/gorillas.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', gorillasCtrl.index)

router.post('/', isLoggedIn, gorillasCtrl.create)

export {
  router
}
