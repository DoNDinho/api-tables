'use strict'
const tableRepository = require('../../../data/repository/tables.repository')

const execute = async (table, id) => {
  try {
    await updateTable(table, parseInt(id))
  } catch (error) {
    throw error
  }
}

const updateTable = async (table, id) => {
  try {
    const result = await tableRepository.updateTable(table, id)
    return result
  } catch (error) {
    throw { httpCode: 422, message: error.message }
  }
}

module.exports = { execute }
