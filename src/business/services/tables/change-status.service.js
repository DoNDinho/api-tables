'use strict'
const tableRepository = require('../../../data/repository/tables.repository')

const execute = async (id) => {
  try {
    await changeTableStatus(parseInt(id))
  } catch (error) {
    throw error
  }
}

const changeTableStatus = async (id) => {
  try {
    const result = await tableRepository.changeTableStatus(id)
    return result
  } catch (error) {
    throw { httpCode: 422, message: error.message }
  }
}

module.exports = { execute }
