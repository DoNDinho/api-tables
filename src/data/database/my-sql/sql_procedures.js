'use strict'
const listTableStatus = () => {
  return {
    name: 'SP_LISTAR_ESTADOS_MESA',
    statements: [`CALL SP_LISTAR_ESTADOS_MESA();`],
    values: []
  }
}

const changeTableStatus = (id) => {
  return {
    name: 'SP_CAMBIAR_ESTADO_MESA',
    statements: [`CALL SP_CAMBIAR_ESTADO_MESA(${id});`],
    values: []
  }
}

const insertTable = (table) => {
  const { number, seats } = table
  const code = table.status.code
  return {
    name: 'SP_INSERTAR_MESA',
    statements: [`CALL SP_INSERTAR_MESA(${number}, ${seats}, ${code});`],
    values: []
  }
}

const listTables = () => {
  return {
    name: 'SP_LISTAR_MESAS',
    statements: [`CALL SP_LISTAR_MESAS();`],
    values: []
  }
}

const listTableById = (id) => {
  return {
    name: 'SP_LISTAR_MESA_POR_ID',
    statements: [`CALL SP_LISTAR_MESA_POR_ID(${id});`],
    values: []
  }
}

const updateTable = (table, id) => {
  const { number, seats } = table
  const code = table.status.code
  return {
    name: 'SP_MODIFICAR_MESA',
    statements: [`CALL SP_MODIFICAR_MESA(${id}, ${number}, ${seats}, ${code});`],
    values: []
  }
}

const deleteTable = (id) => {
  return {
    name: 'SP_ELIMINAR_MESA',
    statements: [`CALL SP_ELIMINAR_MESA(${id});`],
    values: []
  }
}

module.exports = {
  listTableStatus,
  changeTableStatus,
  listTables,
  listTableById,
  insertTable,
  updateTable,
  deleteTable
}
