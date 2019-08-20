const express = require('express')
const router = express.Router()
import { addForumHandler } from '../models/addForumHandler'

router.get('/add', addForumHandler)

export default router