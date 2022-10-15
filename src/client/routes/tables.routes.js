const express = require('express')
const changeStatusService = require('../../business/services/tables/change-status.service')
const insertTableService = require('../../business/services/tables/insert-table.service')
const listTableService = require('../../business/services/tables/list-tables.service')
const lisTableByIdService = require('../../business/services/tables/list-table-by-id.service')
const deleteTableService = require('../../business/services/tables/delete-table.service')
const updateTableService = require('../../business/services/tables/update-table.service')
const router = express.Router()

router.put(`/Tables/v1/tables/:id/change-status`, async (req, res, next) => {
  try {
    await changeStatusService.execute(req.params.id)
    const message = 'Estado mesa cambiado con exito'
    const response = { message }
    logger.info({ message, data: JSON.stringify(response) })
    res.status(200).json(response)
  } catch (error) {
    console.log('error: ', error.message)
    next(error)
  }
})

router.post(`/Tables/v1/tables`, async (req, res, next) => {
  try {
    await insertTableService.execute(req.body.table)
    const message = 'Mesa registrada con exito'
    const response = { message }
    logger.info({ message, data: JSON.stringify(response) })
    res.status(201).json(response)
  } catch (error) {
    console.log('error: ', error.message)
    next(error)
  }
})

router.get('/Tables/v1/tables', async (req, res, next) => {
  try {
    const tables = await listTableService.execute()
    const response = { tables }
    logger.info({ message: 'Mesa obtenidas', data: JSON.stringify(response) })
    res.json(response)
  } catch (error) {
    next(error)
  }
})

router.get('/Tables/v1/tables/:id', async (req, res, next) => {
  try {
    const table = await lisTableByIdService.execute(req.params.id)
    const response = { table }
    logger.info({ message: 'Mesa obtenida', data: JSON.stringify(response) })
    res.json(response)
  } catch (error) {
    next(error)
  }
})

router.patch('/Tables/v1/tables/:id', async (req, res, next) => {
  try {
    await updateTableService.execute(req.body.table, req.params.id)
    const message = 'Mesa modificada con exito'
    const response = { message }
    logger.info({ message, data: JSON.stringify(response) })
    res.json(response)
  } catch (error) {
    next(error)
  }
})

router.delete('/Tables/v1/tables/:id', async (req, res, next) => {
  try {
    await deleteTableService.execute(req.params.id)
    const message = 'Mesa eliminada con exito'
    const response = { message }
    logger.info({ message, data: JSON.stringify(response) })
    res.json(response)
  } catch (error) {
    next(error)
  }
})

module.exports = router
