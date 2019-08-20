import { check } from 'express-validator/check'

export const joinValidator = [
    check('name').not().isEmpty()
]
