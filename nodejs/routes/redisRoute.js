const express = require('express')
const router = express.Router()
import Redis from 'ioredis'
const redis = new Redis({
    host: 'redis'
})

router.get('/add', async (req, res) => {

    const data = {
        success: true,
        data: [
            {
                title: '1111'
            }, {
                title: '22222'
            }
        ]
    }

    const result = JSON.stringify(data)

    redis.set('f1', result, 'ex', 10)
    res.json({ success: true })
})

router.get('/get', async (req, res) => {

    redis.get('f1', (err, data) => {
        if (data) {
            let result = JSON.parse(data)

            // res.setHeader('Content-Type', 'application/json')
            // res.setHeader('X-Source', 'cache')

            return res.send(result)
        } else {
            // res.sendResponse = res.send
            // res.send = (body) => {
            //     redis.set('f1', JSON.stringify(body), 'ex', 10)
            //     res.sendResponse(body)
            // }
            // next()
            res.json({ data: null })
        }

    })
})

router.get('/delete', async (req, res) => {
    redis.del('f1')
    res.json({ success: true })
})

export default router