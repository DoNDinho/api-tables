const express = require('express')
const listTableStatusService = require('../../business/services/table-status/list-table-status.service')
const router = express.Router()

router.get(`/Tables/v1/tables/status`, async (req, res, next) => {
  try {
    const response = await listTableStatusService.execute()
    logger.info({ message: 'Estados listados', data: JSON.stringify(response) })
    res.json(response)
  } catch (error) {
    console.log('error: ', error.message)
    next(error)
  }
})
module.exports = router
