const express = require('express')

const controller = require('../controllers/user')

const router = express.Router()


const path = 'user'

/**
 * Ruta: /user GET
 */
router.get( `/${path}`,controller.getData)

router.post(
  `/${path}`,
controller.insertData
)

router.put(
  `/${path}:id`,
controller.update
)

router.delete(
  `/${path}:id`,
controller.delete
)

router.get(
  `/${path}/byid/:id`,
controller.getbyid
)

module.exports = router