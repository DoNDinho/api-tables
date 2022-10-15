'use strict'
const tablesRepository = require('../../../data/repository/tables.repository')
const { tableConverter } = require('../../converter/table.converter')

const execute = async (id) => {
  try {
    const tabletData = await listTableById(parseInt(id))
    const table = tableConverter(tabletData[0])
    return table
  } catch (error) {
    throw error
  }
}

const listTableById = async (id) => {
  try {
    const result = await tablesRepository.listTableById(id)
    return result
  } catch (error) {
    throw { httpCode: 422, message: error.message }
  }
}

module.exports = { execute }
