'use strict'
const tableRepository = require('../../../data/repository/tables.repository')

const execute = async (table) => {
  try {
    await insertTable(table)
  } catch (error) {
    throw error
  }
}

const insertTable = async (table) => {
  try {
    const result = await tableRepository.insertTable(table)
    return result
  } catch (error) {
    throw { httpCode: 422, message: error.message }
  }
}

module.exports = { execute }
