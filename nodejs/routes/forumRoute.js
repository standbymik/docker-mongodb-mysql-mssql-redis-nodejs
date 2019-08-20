const express = require('express')
const router = express.Router()
import { addForumHandler } from '../models/addForumHandler'
import { updateHandler } from '../models/updateForumHandler'
import { deleteHandler } from '../models/deleteHandler'
import { join } from '../models/joinHandler'

import { joinValidator } from '../middlewares/paramsValidator'

router.get('/add', addForumHandler)
router.post('/update', updateHandler)
router.get('/delete', deleteHandler)
router.get('/join', [joinValidator], join)

export default router