const express = require('express')
const router = express.Router()
import { addForumHandler } from '../models/addForumHandler'
import { updateHandler } from '../models/updateForumHandler'
import { deleteHandler } from '../models/deleteHandler'
import { join } from '../models/joinHandler'

router.get('/add', addForumHandler)
router.post('/update', updateHandler)
router.get('/delete', deleteHandler)
router.get('/join', join)

export default router