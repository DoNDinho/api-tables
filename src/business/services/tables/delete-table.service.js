'use strict'
const tableRepository = require('../../../data/repository/tables.repository')

const execute = async (id) => {
  try {
    await deleteTable(parseInt(id))
  } catch (error) {
    throw error
  }
}

const deleteTable = async (id) => {
  try {
    const result = await tableRepository.deleteTable(id)
    return result
  } catch (error) {
    throw { httpCode: 422, message: error.message }
  }
}

module.exports = { execute }
