'use strict'
const tableStatusRepository = require('../../../data/repository/table-status.repository')
const tableStatusConverter = require('../../converter/table-status.converter')

const execute = async () => {
  try {
    const statusData = await listTableStatus()
    const statements = statusData.map((status) =>
      tableStatusConverter.parseTableStatusResponse(status)
    )
    return { status: statements }
  } catch (error) {
    throw error
  }
}

const listTableStatus = async () => {
  try {
    const result = await tableStatusRepository.listTableStatus()
    return result
  } catch (error) {
    throw { httpCode: 422, message: error.message }
  }
}

module.exports = { execute }
