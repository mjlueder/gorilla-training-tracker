import { Router } from 'express'
import * as behaviorsCtrl from '../controllers/behaviors.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', behaviorsCtrl.index)
router.get('/new', isLoggedIn, behaviorsCtrl.new)
router.get('/:id', isLoggedIn, behaviorsCtrl.show)
router.get('/:id/edit', isLoggedIn, behaviorsCtrl.edit)

router.post('/', isLoggedIn, behaviorsCtrl.create)
router.post('/:id/entries', isLoggedIn, behaviorsCtrl.addEntry)

router.put('/:id', isLoggedIn, behaviorsCtrl.update)

router.delete('/:id', isLoggedIn, behaviorsCtrl.delete)
router.delete('/:behaviorId/entries/:entryId', isLoggedIn, behaviorsCtrl.deleteEntry)

export {
  router
}
