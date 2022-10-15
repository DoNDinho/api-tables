'use strict'
const MySqlClient = require('../database/my-sql/client')
const MySqlRunner = require('../database/my-sql/runner')
const sqlProcedures = require('../database/my-sql/sql_procedures')

const changeTableStatus = async (id) => {
  try {
    const mySqlClient = await MySqlClient.getInstance()
    const procedure = sqlProcedures.changeTableStatus(id)
    const sqlRunner = new MySqlRunner(mySqlClient)
    const result = await sqlRunner.runProcedure(procedure)
    console.log(JSON.stringify(result))
    return result.pop()[0]
  } catch (error) {
    throw error
  }
}

const insertTable = async (table) => {
  try {
    const mySqlClient = await MySqlClient.getInstance()
    const procedure = sqlProcedures.insertTable(table)
    const sqlRunner = new MySqlRunner(mySqlClient)
    const result = await sqlRunner.runProcedure(procedure)
    console.log(JSON.stringify(result))
    return result.pop()[0]
  } catch (error) {
    throw error
  }
}

const listTables = async () => {
  try {
    const mySqlClient = await MySqlClient.getInstance()
    const procedure = sqlProcedures.listTables()
    const sqlRunner = new MySqlRunner(mySqlClient)
    const result = await sqlRunner.runProcedure(procedure)
    console.log(JSON.stringify(result))
    return result.pop()[0]
  } catch (error) {
    throw error
  }
}

const listTableById = async (id) => {
  try {
    const mySqlClient = await MySqlClient.getInstance()
    const procedure = sqlProcedures.listTableById(id)
    const sqlRunner = new MySqlRunner(mySqlClient)
    const result = await sqlRunner.runProcedure(procedure)
    console.log(JSON.stringify(result))
    return result.pop()[0]
  } catch (error) {
    throw error
  }
}

const updateTable = async (table, id) => {
  try {
    const mySqlClient = await MySqlClient.getInstance()
    const procedure = sqlProcedures.updateTable(table, id)
    const sqlRunner = new MySqlRunner(mySqlClient)
    const result = await sqlRunner.runProcedure(procedure)
    console.log(JSON.stringify(result))
    return result.pop()[0]
  } catch (error) {
    throw error
  }
}

const deleteTable = async (id) => {
  try {
    const mySqlClient = await MySqlClient.getInstance()
    const procedure = sqlProcedures.deleteTable(id)
    const sqlRunner = new MySqlRunner(mySqlClient)
    const result = await sqlRunner.runProcedure(procedure)
    console.log(JSON.stringify(result))
    return result.pop()[0]
  } catch (error) {
    throw error
  }
}

module.exports = {
  changeTableStatus,
  insertTable,
  listTables,
  listTableById,
  updateTable,
  deleteTable
}
