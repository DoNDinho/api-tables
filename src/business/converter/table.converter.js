'use strict'
const tableConverter = (tableData) => {
  const product = {
    id: tableData.ID_MESA,
    number: tableData.NUMERO,
    status: {
      code: tableData.ID_ESTADO,
      name: tableData.DESCRIPCION_ESTADO
    }
  }
  return product
}

module.exports = { tableConverter }
